export interface Variant {
  id: string
  name: string
  description?: string
  component: React.ComponentType
}

export interface Experiment {
  id: string
  title: string
  description: string
  variants: Variant[]
  tags?: string[]
  createdAt: Date
}

export interface ExperimentState {
  experiments: Experiment[]
  selectedId: string | null
  selectedVariantId: Record<string, string>
}
