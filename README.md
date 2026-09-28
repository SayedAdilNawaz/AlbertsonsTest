# Design Experiments 🎨

A modern **UI Prototyping Sandbox** for testing and iterating on design variations. Built with React + TypeScript, this platform allows you to rapidly prototype different UI/UX designs and compare variants side-by-side.

## Features

- **Experiment Gallery**: Browse and select from multiple design experiments
- **Variant Switching**: Instantly switch between different design variations
- **Live Preview**: See real-time changes as you select different variants
- **Type-Safe**: Full TypeScript support for robust component development
- **Extensible**: Easy to add new experiments and variants

## Project Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   ├── experiments/       # Design experiment definitions
│   ├── store/            # State management (Zustand)
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will open in your browser at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
```

### Linting

Check code quality:

```bash
npm run lint
```

### Type Checking

Verify TypeScript types:

```bash
npm run type-check
```

## Creating New Experiments

### 1. Define Variant Components

Create a new experiment file in `src/experiments/`:

```typescript
// src/experiments/header-variants.tsx
import { Experiment } from '../types/experiment'

const HeaderVariant1 = () => (
  <header style={{ background: '#2196f3', color: 'white', padding: '20px' }}>
    <h1>Variant 1</h1>
  </header>
)

const HeaderVariant2 = () => (
  <header style={{ background: '#f44336', color: 'white', padding: '20px' }}>
    <h1>Variant 2</h1>
  </header>
)

export const headerExperiment: Experiment = {
  id: 'header-variants',
  title: 'Header Styles',
  description: 'Testing different header designs',
  tags: ['header', 'typography'],
  createdAt: new Date(),
  variants: [
    {
      id: 'header-v1',
      name: 'Variant 1',
      description: 'Blue header with large text',
      component: HeaderVariant1
    },
    {
      id: 'header-v2',
      name: 'Variant 2',
      description: 'Red header with large text',
      component: HeaderVariant2
    }
  ]
}
```

### 2. Register the Experiment

Add your experiment to `src/store/experiments.ts`:

```typescript
import { headerExperiment } from '../experiments/header-variants'

const initialExperiments: Experiment[] = [
  buttonExperiment,
  headerExperiment  // Add your new experiment
]
```

### 3. Start Testing

Select your experiment from the gallery and compare variants!

## Tech Stack

- **React 18**: UI library
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Zustand**: Lightweight state management
- **CSS**: Vanilla CSS for styling

## Tips for Design Experiments

1. **Keep Variants Focused**: Each variant should test a specific aspect (color, size, layout)
2. **Use Descriptive Names**: Name variants clearly (e.g., "Rounded Corners" vs "Sharp Edges")
3. **Add Context**: Use tags and descriptions to help remember what you're testing
4. **Iterate Quickly**: Add new variants and experiments rapidly to explore the design space
5. **Capture Metrics**: Note which variants users prefer during user testing

## License

MIT
