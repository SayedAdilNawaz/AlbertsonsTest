import { ExperimentLayout } from './components/ExperimentLayout'
import { ExperimentGallery } from './components/ExperimentGallery'
import { useExperimentStore } from './store/experiments'
import './App.css'

function App() {
  const { experiments, selectedId } = useExperimentStore()
  const selected = experiments.find(e => e.id === selectedId)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎨 Design Experiments</h1>
        <p>UI Prototyping Sandbox for testing design variations</p>
      </header>

      <div className="app-container">
        <aside className="sidebar">
          <ExperimentGallery />
        </aside>

        <main className="content">
          {selected ? (
            <ExperimentLayout experiment={selected} />
          ) : (
            <div className="empty-state">
              <h2>No experiment selected</h2>
              <p>Choose an experiment from the sidebar to get started</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
