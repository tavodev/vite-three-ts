import { ACESFilmicToneMapping, Color, PerspectiveCamera, Scene, SRGBColorSpace, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { World } from '../world/World.ts'
import { Sizes } from './Sizes.ts'
import { Time } from './Time.ts'

export class Experience {
  readonly sizes = new Sizes()
  readonly time = new Time()
  readonly scene = new Scene()
  readonly camera: PerspectiveCamera
  readonly renderer: WebGLRenderer
  readonly controls: OrbitControls
  readonly world: World

  constructor(readonly canvas: HTMLCanvasElement) {
    this.scene.background = new Color('#111')

    this.camera = new PerspectiveCamera(50, this.sizes.width / this.sizes.height, 0.1, 100)
    this.camera.position.set(3, 2, 4)
    this.scene.add(this.camera)

    this.renderer = new WebGLRenderer({ canvas, antialias: true })
    this.renderer.outputColorSpace = SRGBColorSpace
    this.renderer.toneMapping = ACESFilmicToneMapping
    this.resize()

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true

    this.world = new World(this)

    this.sizes.onResize(() => this.resize())
    this.renderer.setAnimationLoop(this.tick)
  }

  dispose(): void {
    this.renderer.setAnimationLoop(null)
    this.world.dispose()
    this.controls.dispose()
    this.renderer.dispose()
    this.time.dispose()
    this.sizes.dispose()
  }

  private resize(): void {
    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(this.sizes.pixelRatio)
  }

  private readonly tick = (timestamp: number): void => {
    this.time.update(timestamp)
    this.controls.update()
    this.world.update(this.time.delta, this.time.elapsed)
    this.renderer.render(this.scene, this.camera)
  }
}
