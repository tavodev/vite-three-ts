export class Sizes {
  width = window.innerWidth
  height = window.innerHeight
  pixelRatio = Math.min(window.devicePixelRatio, 2)

  private readonly listeners = new Set<() => void>()

  constructor() {
    window.addEventListener('resize', this.handleResize)
  }

  onResize(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  dispose(): void {
    window.removeEventListener('resize', this.handleResize)
    this.listeners.clear()
  }

  private readonly handleResize = (): void => {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    for (const listener of this.listeners) listener()
  }
}
