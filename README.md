# Poll application 
This application was developed using Vue.js 3, leveraging the Composition API for its structure. For managing application state, Vuex served as the primary tool. Styling was developed with Tailwind CSS. End-to-end testing across various browsers was made using the Playwright testing framework. Charts was built using Chart.js.

The deployment of the application was carried out on GitHub Pages.

Please note, my objective was to complete this project within a maximum timeframe of 4-5 hours. While there was potential for further sophistication, the constraints of the allotted time led to the current implementation.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
