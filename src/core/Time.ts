import { Timer } from 'three'

export class Time {
  private readonly timer = new Timer()

  constructor() {
    this.timer.connect(document)
  }

  /** Call once per frame before reading delta/elapsed. */
  update(timestamp?: number): void {
    this.timer.update(timestamp)
  }

  /** Seconds since last frame. */
  get delta(): number {
    return this.timer.getDelta()
  }

  /** Seconds since start. */
  get elapsed(): number {
    return this.timer.getElapsed()
  }

  dispose(): void {
    this.timer.dispose()
  }
}
