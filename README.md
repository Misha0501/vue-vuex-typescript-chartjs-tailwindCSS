# Poll Application

## Overview
This front-end project demonstrates the ability to build a fully functional, real-time polling application within a 6-hour window, showcasing advanced Vue.js and Vuex capabilities. Designed as a single-page application, it features dynamic interaction and state management without relying on backend services.

[Live Demo](https://misha0501.github.io/poll/).

## Features
- **Dynamic Poll Management**: Create polls with customizable options and manage them in real-time.
- **Instant Feedback**: Cast votes and see results updated live through an interactive chart.
- **Sophisticated State Handling**: Application state managed robustly with Vuex for seamless user experiences.
- **Adaptive Charting**: Automatically adjusting charts from Chart.js to visualize poll results effectively.

## Technology Stack
- **Vue.js 3**: Employs the Composition API for a clean and scalable architecture.
- **Vuex**: Manages state across the application, ensuring reactivity and consistency.
- **Tailwind CSS**: Provides utility-first CSS for rapid UI development without sacrificing design quality.
- **Chart.js**: Delivers responsive, canvas-based charts for real-time data visualization.
- **Playwright**: Facilitates comprehensive end-to-end testing across various browsers.

## Getting Started

### Prerequisites
Ensure you have Node.js and npm installed to handle dependencies and run the project.

### Installation
Clone the repository and install the dependencies:
```bash
npm install
```

## Development
Run the application in development mode with hot-reload at localhost:
```bash
npm run dev
```

## Production Build
Compile and minify for production:
```bash
npm run build
```

## Testing
Execute end-to-end tests using Playwright:

### Install necessary browsers
```bash
# Install necessary browsers
npx playwright install

# Run end-to-end tests
npm run test:e2e

# For specific environments or debug purposes
npm run test:e2e -- --project=chromium --debug
```

## Linting
Maintain code quality with ESLint:
```bash
npm run lint
```

## Deployment
This application is hosted on GitHub Pages, allowing you to access and evaluate the live version:
[Live Demo](https://misha0501.github.io/poll/). 

## Project Scope
Under tight deadlines, priority was given to core functionalities, including state management and real-time interactions, over extensive UX/UI design.

## Future Directions
+ Enhanced User Interface: Further improve interactivity and visual appeal.
+ Performance Optimization: Optimize performance as the scale of interactions grows.
+ More Robust Testing: Expand testing scenarios to cover more user interactions.
Contributing
Your contributions are welcomed! Please refer to CONTRIBUTING.md for how to help improve this project.

## License
This project is open-sourced under the MIT License.