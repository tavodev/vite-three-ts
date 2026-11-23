# Crea un proyecto nuevo desde la plantilla vite-three-ts.
# Uso: thnew <nombre>
thnew() {
  local name="${1:?Uso: thnew <nombre>}"
  if [[ -e "$name" ]]; then
    echo "thnew: '$name' ya existe" >&2
    return 1
  fi
  pnpm dlx tiged --mode=tar tavodev/vite-three-ts "$name" \
    && cd "$name" \
    && pnpm pkg set name="$name" \
    && pnpm install \
    && git init -q \
    && git add -A \
    && git commit -qm "init from vite-three-ts template"
}
