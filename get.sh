#!/usr/bin/env bash

if [ -n "${DEBUG:-}" ]; then
  set -e -x -o pipefail
else
  set -e -o pipefail
fi

IMAGE="ghcr.io/openfaasltd/superterm:latest"
BIN_DIR="/usr/local/bin"

need_sudo() {
  echo "This step needs write access to ${BIN_DIR}."
  echo "Run with elevated permissions:"
  echo "  curl -sLS https://superterm.dev/get.sh | sudo bash"
}

ensure_root() {
  if [ "$(id -u)" -ne 0 ]; then
    echo "This installer needs write access to ${BIN_DIR}."
    need_sudo
    exit 1
  fi
}

install_arkade() {
  if command -v /usr/local/bin/arkade >/dev/null 2>&1; then
    return 0
  fi

  echo "arkade not found, installing..."
  if ! mkdir -p "${BIN_DIR}"; then
    echo "Failed to create ${BIN_DIR}."
    need_sudo
    exit 1
  fi

  if ! curl -sLS https://get.arkade.dev | bash; then
    echo "Failed to install arkade"
    exit 1
  fi

  if ! command -v /usr/local/bin/arkade >/dev/null 2>&1; then
    echo "/usr/local/bin/arkade missing after install."
    exit 1
  fi
}

install_superterm() {
  workdir="$(mktemp -d)"

  (
    cd "${workdir}" && /usr/local/bin/arkade oci install "${IMAGE}" .
  )

  if [ ! -f "${workdir}/superterm" ]; then
    echo "Failed to download superterm from OCI image."
    rm -rf "${workdir}"
    return 1
  fi

  if ! mv "${workdir}/superterm" "${BIN_DIR}/superterm"; then
    echo "Failed to move superterm to ${BIN_DIR}."
    need_sudo
    rm -rf "${workdir}"
    return 1
  fi
  chmod +x "${BIN_DIR}/superterm"
  rm -rf "${workdir}"
}

ensure_root
install_arkade
mkdir -p "${BIN_DIR}" 2>/dev/null || {
  echo "Failed to create ${BIN_DIR}."
  need_sudo
  exit 1
}

echo "Installing superterm from ${IMAGE}..."
if ! install_superterm; then
  echo ""
  echo "Failed to install superterm to ${BIN_DIR}."
  need_sudo
  exit 1
fi

echo "superterm installed to ${BIN_DIR}"
