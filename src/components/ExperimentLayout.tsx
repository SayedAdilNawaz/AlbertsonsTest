import { Experiment } from '../types/experiment'
import { useExperimentStore } from '../store/experiments'
import './ExperimentLayout.css'

interface Props {
  experiment: Experiment
}

export function ExperimentLayout({ experiment }: Props) {
  const { selectedVariantId, selectVariant } = useExperimentStore()
  const currentVariantId = selectedVariantId[experiment.id] || experiment.variants[0]?.id
  const currentVariant = experiment.variants.find(v => v.id === currentVariantId)

  if (!currentVariant) {
    return <div>No variant selected</div>
  }

  const Component = currentVariant.component

  return (
    <div className="experiment-layout">
      <div className="experiment-header">
        <div>
          <h2>{experiment.title}</h2>
          <p>{experiment.description}</p>
        </div>
      </div>

      <div className="variant-selector">
        <label>Variants:</label>
        <div className="variant-buttons">
          {experiment.variants.map((variant) => (
            <button
              key={variant.id}
              className={`variant-btn ${currentVariantId === variant.id ? 'active' : ''}`}
              onClick={() => selectVariant(experiment.id, variant.id)}
            >
              {variant.name}
              {variant.description && <span className="variant-desc">{variant.description}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="preview-container">
        <div className="preview-frame">
          <Component />
        </div>
      </div>

      <div className="variant-info">
        <h3>Current Variant: {currentVariant.name}</h3>
        {currentVariant.description && <p>{currentVariant.description}</p>}
      </div>
    </div>
  )
}
