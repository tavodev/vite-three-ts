import './style.css'
import { Experience } from './core/Experience.ts'

const canvas = document.querySelector<HTMLCanvasElement>('#webgl')
if (!canvas) throw new Error('Canvas #webgl not found')

const experience = new Experience(canvas)

if (import.meta.hot) {
  import.meta.hot.dispose(() => experience.dispose())
}
