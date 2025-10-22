# Vite Stacks DApp Template

This project is a template for building decentralized applications (DApps) using React, TypeScript, and Vite. It includes essential tools and configurations to get started quickly with modern web development and blockchain integration.

## Features

- **React + TypeScript**: Leverage the power of React with type safety.
- **Vite**: Fast and modern build tool for development and production.
- **Stacks Blockchain Integration**: Pre-configured for building DApps on the Stacks blockchain.
- **UI Components**: Includes reusable and customizable UI components.
- **State Management**: Context API for managing wallet connections and app state.
- **ESLint Configuration**: Enforces code quality and consistency.
- **Bun Support**: Use Bun for faster installs and runtime performance.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or Bun
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/leeroyanesu/vite-stacks-dapp-template.git
   cd vite-stacks-dapp-template
   ```

2. Install dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

   Using Bun:
   ```bash
   bun install
   ```

3. Start the development server:

   Using npm:
   ```bash
   npm run dev
   ```

   Using yarn:
   ```bash
   yarn dev
   ```

   Using Bun:
   ```bash
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

- `src/`: Contains the source code for the application.
  - `components/`: Reusable UI components.
  - `contexts/`: Context providers for state management.
  - `pages/`: Application pages.
  - `hooks/`: Custom React hooks.
  - `lib/`: Utility functions and libraries.
- `public/`: Static assets.
- `tsconfig.json`: TypeScript configuration.
- `vite.config.ts`: Vite configuration.

## Scripts

- `npm run dev` / `bun run dev`: Start the development server.
- `npm run build` / `bun run build`: Build the application for production.
- `npm run preview` / `bun run preview`: Preview the production build locally.
- `npm run lint` / `bun run lint`: Run ESLint to check for code quality issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the template.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Stacks Blockchain](https://www.stacks.co/)
- [Bun](https://bun.sh/)
