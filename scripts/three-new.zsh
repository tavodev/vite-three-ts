# Crea un proyecto nuevo desde la plantilla vite-three-ts.
# Uso: three-new <nombre>
three-new() {
  local name="${1:?Uso: three-new <nombre>}"
  if [[ -e "$name" ]]; then
    echo "three-new: '$name' ya existe" >&2
    return 1
  fi
  pnpm dlx tiged --mode=tar tavodev/vite-three-ts "$name" \
    && cd "$name" \
    && pnpm pkg set name="$name" \
    && pnpm install \
    && git init -q \
    && git add -A \
    && git commit -qm "init from vite-three-ts template" \
    && { command -v code >/dev/null && code . ; true } \
    && pnpm dev
}
