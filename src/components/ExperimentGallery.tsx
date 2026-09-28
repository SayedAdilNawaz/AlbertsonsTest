import { useExperimentStore } from '../store/experiments'
import './ExperimentGallery.css'

export function ExperimentGallery() {
  const { experiments, selectedId, selectExperiment } = useExperimentStore()

  return (
    <div className="gallery">
      <h2>Experiments</h2>
      <div className="experiment-list">
        {experiments.map((exp) => (
          <button
            key={exp.id}
            className={`experiment-card ${selectedId === exp.id ? 'active' : ''}`}
            onClick={() => selectExperiment(exp.id)}
          >
            <div className="card-title">{exp.title}</div>
            <div className="card-description">{exp.description}</div>
            {exp.tags && exp.tags.length > 0 && (
              <div className="card-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
