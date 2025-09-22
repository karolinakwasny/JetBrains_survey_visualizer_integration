# JetBrains Survey Visualizer Integration

**Live Demo:**
[https://karolinakwasny.github.io/JetBrains_survey_visualizer_integration/](https://karolinakwasny.github.io/JetBrains_survey_visualizer_integration/)

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Main Components](#main-components)
- [Data Flow](#data-flow)
- [Styling & Theming](#styling--theming)
- [Switching Data Source](#switching-data-source)
- [Troubleshooting](#troubleshooting)
- [Credits](#credits)
- [License](#license)

---

## Overview

A modern, responsive trivia dashboard built with React and Recharts. Visualizes trivia questions by category, difficulty, and type, using either live API data or local mock data.

---

## Architecture

- **React** for UI and state management.
- **Recharts** for data visualization (bar and pie charts).
- **Context API** for global state (questions, categories, loading, error).
- **Axios** (via `triviaService`) for API calls.
- **CSS Modules & Variables** for modular, themeable styling.
- **Vite** for fast development and builds.

---

## Main Components

- `TriviaDashboard`: Main dashboard, chart layout, and category filtering.
- `AllCategoriesBarChart`: Aggregates and displays questions by category/difficulty.
- `DifficultyAndTypePieCharts`: Pie charts for question difficulty and type.
- `CategoryDropdown`: UI for filtering questions by category (dropdown interface).
- `CustomTooltip`, `RoundedStackedBar`: Custom chart UI elements.
- `CustomLabeledPieChart`: Used to render pie charts with custom, detailed labels for each slice (showing name, value, and percentage) positioned outside the chart for improved readability and presentation.

---

## Data Flow

1. **Data Fetching:**
   By default, fetches from the trivia API (`triviaService.getQuestions`).
   Can be switched to use local mock data (`testquestions.json`).
2. **Processing:**
   Data is normalized and categories are extracted in `TriviaContext`.
3. **State Management:**
   All questions and categories are provided via React Context.
4. **Visualization:**
   Components consume context and render charts/filters accordingly.

---

## Styling & Theming

- All main colors are defined as CSS variables in `src/styles/base.css` under `:root`.
- JS color constants for charts are in `src/colors.js`.
- Modular CSS files for layout, charts, filters, and hero section.

---

## Switching Data Source

- **Default:** Uses the live trivia API for production.
- **To use mock data:**
  Edit `src/context/TriviaContext.jsx`:
  - Comment out the API lines:
    ```js
    // const fetchedData = await triviaService.getQuestions(50)
    // processData(fetchedData)
    ```
  - Uncomment the mock data line:
    ```js
    processData(testQuestions)
    ```

---

## Troubleshooting

- **Category names with & or HTML entities:**
  Some APIs may return category names with HTML entities (like `&amp;`). The dashboard should display these correctly, but if you see odd characters, check your API endpoint or normalize category names in your data processing logic.
- **API errors (e.g., 429 Too Many Requests):**
  The public trivia API may rate-limit requests. If you see error 429, wait a few minutes or use mock data for development.
- **No data:**
  Ensure the data source is valid and uncommented in `TriviaContext.jsx`.

---

## Credits

- [React](https://react.dev/)
- [Recharts](https://recharts.org/)
- [Vite](https://vitejs.dev/)

---

## License

MIT
