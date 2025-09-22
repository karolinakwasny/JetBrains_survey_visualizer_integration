# JetBrains Survey Visualizer Integration

A modern, responsive trivia dashboard built with React and Recharts. Visualize trivia questions by category, difficulty, and type, using either live API data or local mock data.

**Live Demo:**
[https://karolinakwasny.github.io/JetBrains_survey_visualizer_integration/](https://karolinakwasny.github.io/JetBrains_survey_visualizer_integration/)

## Features

- Interactive dashboard with bar and pie charts
- Category filtering and dropdown
- Responsive design for desktop and mobile
- Centralized color palette (JS and CSS variables)
- Easy switch between API and mock data
- Modular, maintainable codebase

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd JetBrains_survey_visualizer_integration
npm install
```

### Running the App

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Switching Data Source

- By default, the app uses the live trivia API for production.
- If you want to use mock data from `testquestions.json` (for local development or testing), edit `src/context/TriviaContext.jsx`:
  - Comment out the API lines:
    ```js
    // const fetchedData = await triviaService.getQuestions(50)
    // processData(fetchedData)
    ```
  - Uncomment the mock data line:
    ```js
    processData(testQuestions)
    ```

## Project Structure

```
src/
  components/      # React components (charts, filters, dashboard, etc.)
  context/         # React context for global state
  services/        # API service
  styles/          # CSS modules and global variables
  utils/           # Utility functions and loaders
  colors.js        # Centralized JS color palette
  main.jsx         # App entry point
  App.jsx          # Main app component
```

## Customization

- **Colors:**
  - JS: Edit `src/colors.js` for chart and UI color constants.
  - CSS: Edit variables in `src/styles/base.css` under `:root`.
- **Charts:**
  - Add or modify chart components in `src/components/`.
- **Mock Data:**
  - Update or replace `testquestions.json` for local testing.

## Development Notes

- Use CSS variables and JS constants for all colors.
- Keep data transformation logic in `src/utils/` for reuse.
- All major UI logic is modularized for maintainability.

## Troubleshooting

- **Category names with & or HTML entities:**
  - Some trivia APIs may return category names with HTML entities (like `&amp;` for `&`).
  - The dashboard should display these correctly, but if you see odd characters, check your API endpoint.
- **API errors (e.g., 429 Too Many Requests):**
  - The public trivia API may rate-limit requests. If you see error 429, wait a few minutes or use mock data for development.
- **No data:** Ensure the data source is valid and uncommented in `TriviaContext.jsx`.

## Credits

- [React](https://react.dev/)
- [Recharts](https://recharts.org/)
- [Vite](https://vitejs.dev/)

## License

MIT
