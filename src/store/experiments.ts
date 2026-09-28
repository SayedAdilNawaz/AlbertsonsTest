import { create } from 'zustand'
import { Experiment } from '../types/experiment'
import { buttonExperiment } from '../experiments/button-variants'

interface ExperimentStore {
  experiments: Experiment[]
  selectedId: string | null
  selectedVariantId: Record<string, string>
  selectExperiment: (id: string) => void
  selectVariant: (experimentId: string, variantId: string) => void
  addExperiment: (experiment: Experiment) => void
}

const initialExperiments: Experiment[] = [
  buttonExperiment
]

export const useExperimentStore = create<ExperimentStore>((set) => ({
  experiments: initialExperiments,
  selectedId: initialExperiments[0]?.id || null,
  selectedVariantId: {
    [initialExperiments[0]?.id]: initialExperiments[0]?.variants[0]?.id || ''
  },
  selectExperiment: (id) => set({ selectedId: id }),
  selectVariant: (experimentId, variantId) => set((state) => ({
    selectedVariantId: {
      ...state.selectedVariantId,
      [experimentId]: variantId
    }
  })),
  addExperiment: (experiment) => set((state) => ({
    experiments: [...state.experiments, experiment]
  }))
}))
