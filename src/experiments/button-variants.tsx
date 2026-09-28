import { Experiment } from '../types/experiment'
import './button-variants.css'

const ButtonPrimary = () => (
  <button className="btn btn-primary">Click Me</button>
)

const ButtonSecondary = () => (
  <button className="btn btn-secondary">Click Me</button>
)

const ButtonOutline = () => (
  <button className="btn btn-outline">Click Me</button>
)

const ButtonGhost = () => (
  <button className="btn btn-ghost">Click Me</button>
)

const ButtonRounded = () => (
  <button className="btn btn-primary btn-rounded">Click Me</button>
)

const ButtonLarge = () => (
  <button className="btn btn-primary btn-lg">Click Me</button>
)

export const buttonExperiment: Experiment = {
  id: 'button-variants',
  title: 'Button Variants',
  description: 'Testing different button styles and sizes for optimal UX',
  tags: ['ui-component', 'buttons', 'styling'],
  createdAt: new Date(),
  variants: [
    {
      id: 'btn-primary',
      name: 'Primary',
      description: 'Solid primary color button',
      component: ButtonPrimary
    },
    {
      id: 'btn-secondary',
      name: 'Secondary',
      description: 'Secondary color button',
      component: ButtonSecondary
    },
    {
      id: 'btn-outline',
      name: 'Outline',
      description: 'Outlined button style',
      component: ButtonOutline
    },
    {
      id: 'btn-ghost',
      name: 'Ghost',
      description: 'Minimal ghost button',
      component: ButtonGhost
    },
    {
      id: 'btn-rounded',
      name: 'Rounded',
      description: 'Fully rounded primary button',
      component: ButtonRounded
    },
    {
      id: 'btn-large',
      name: 'Large',
      description: 'Larger primary button',
      component: ButtonLarge
    }
  ]
}
