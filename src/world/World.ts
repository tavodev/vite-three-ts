import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshStandardMaterial } from 'three'
import type { Experience } from '../core/Experience.ts'

/** Entry point for each experiment's content. Replace freely. */
export class World {
  private readonly cube: Mesh<BoxGeometry, MeshStandardMaterial>

  constructor(private readonly experience: Experience) {
    const { scene } = this.experience

    scene.add(new AmbientLight('#ffffff', 0.4))
    const sun = new DirectionalLight('#ffffff', 2)
    sun.position.set(3, 4, 2)
    scene.add(sun)

    this.cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: '#4f8cff' }))
    scene.add(this.cube)
  }

  update(delta: number, _elapsed: number): void {
    this.cube.rotation.y += delta * 0.5
  }

  dispose(): void {
    this.cube.geometry.dispose()
    this.cube.material.dispose()
  }
}
