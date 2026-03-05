#!/usr/bin/env bash

if [ -n "${DEBUG:-}" ]; then
  set -e -x -o pipefail
else
  set -e -o pipefail
fi

IMAGE="ghcr.io/openfaasltd/superterm:latest"
BIN_DIR="${HOME}/bin"

install_arkade() {
  if command -v arkade >/dev/null 2>&1; then
    return 0
  fi

  echo "arkade not found, installing..."
  mkdir -p "${BIN_DIR}"

  local tmpdir
  tmpdir="$(mktemp -d)"
  (
    cd "${tmpdir}"
    curl -sLS https://get.arkade.dev | sh
  )

  if [ -f "${tmpdir}/arkade" ]; then
    mv "${tmpdir}/arkade" "${BIN_DIR}/arkade"
    chmod +x "${BIN_DIR}/arkade"
  fi
  rm -rf "${tmpdir}"

  export PATH="${BIN_DIR}:$HOME/.arkade/bin:/usr/local/bin:$PATH"

  if ! command -v arkade >/dev/null 2>&1; then
    echo "Failed to install arkade"
    exit 1
  fi
}

install_arkade
mkdir -p "${BIN_DIR}"
export PATH="${BIN_DIR}:$PATH"

echo "Extracting ${IMAGE} to ${BIN_DIR}..."
arkade oci extract "${IMAGE}" --path "${BIN_DIR}"

echo "superterm installed to ${BIN_DIR}"
if ! echo ":$PATH:" | grep -q ":${BIN_DIR}:"; then
  echo "Add to PATH if needed: export PATH=\"${BIN_DIR}:\$PATH\""
fi
