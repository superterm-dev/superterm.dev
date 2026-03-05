#!/usr/bin/env bash

if [ -n "${DEBUG:-}" ]; then
  set -e -x -o pipefail
else
  set -e -o pipefail
fi

IMAGE="ghcr.io/openfaasltd/superterm:latest"
BIN_DIR=""

path_has_home_bin() {
  case ":${PATH}:" in
    *":${HOME}/bin:"*|*":~/bin:"*)
      return 0
      ;;
  esac
  return 1
}

pick_bin_dir() {
  if path_has_home_bin; then
    echo "${HOME}/bin"
  else
    echo "/usr/local/bin"
  fi
}

install_arkade() {
  if command -v arkade >/dev/null 2>&1; then
    return 0
  fi

  echo "arkade not found, installing..."
  mkdir -p "${HOME}/bin"

  local tmpdir
  tmpdir="$(mktemp -d)"
  (
    cd "${tmpdir}"
    curl -sLS https://get.arkade.dev | sh
  )

  if [ -f "${tmpdir}/arkade" ]; then
    if ! mv "${tmpdir}/arkade" "${BIN_DIR}/arkade"; then
      echo ""
      echo "Failed to install arkade to ${BIN_DIR}."
      if [ "${BIN_DIR}" = "/usr/local/bin" ] && [ "$(id -u)" -ne 0 ]; then
        echo "Re-run with elevated permissions:"
        echo "  curl -sLS https://superterm.dev/get.sh | sudo bash"
      fi
      rm -rf "${tmpdir}"
      exit 1
    fi
    chmod +x "${BIN_DIR}/arkade"
  fi
  rm -rf "${tmpdir}"

  export PATH="${BIN_DIR}:${HOME}/bin:$HOME/.arkade/bin:/usr/local/bin:$PATH"

  if ! command -v arkade >/dev/null 2>&1; then
    echo "Failed to install arkade"
    exit 1
  fi
}

BIN_DIR="$(pick_bin_dir)"
install_arkade
mkdir -p "${BIN_DIR}" 2>/dev/null || true
export PATH="${BIN_DIR}:${HOME}/bin:$PATH"

echo "Extracting ${IMAGE} to ${BIN_DIR}..."
if ! arkade oci extract "${IMAGE}" --path "${BIN_DIR}"; then
  echo ""
  echo "Failed to extract superterm to ${BIN_DIR}."
  if [ "${BIN_DIR}" = "/usr/local/bin" ] && [ "$(id -u)" -ne 0 ]; then
    echo "Re-run with elevated permissions:"
    echo "  curl -sLS https://superterm.dev/get.sh | sudo bash"
  fi
  exit 1
fi

echo "superterm installed to ${BIN_DIR}"
if [ "${BIN_DIR}" = "${HOME}/bin" ] && ! echo ":$PATH:" | grep -q ":${HOME}/bin:"; then
  echo "Add to PATH if needed: export PATH=\"${HOME}/bin:\$PATH\""
fi
