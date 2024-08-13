# File explorer

I have decided to use [Vite](https://vitejs.dev/guide/) + React + TS as a starter configuration to allow me a fast development of the requirements.
I used vitest + react-testing-library for unit tests as they go hand-in hand.
I used [Storybook](https://storybook.js.org/) to present the Design System components in isolation.

## Installation

```
npm i
```

### Running the project

```
npm run dev
Open browser on http://localhost:5173/ (or what port is currently listed in the terminal)
```

### Running the tests

```
npm run test
```

### Running Storybook

```
npm run storybook
```

### Few considerations

The data was mocked via a JSON in `/src/api/db.json`, and passed via props in the `<Files files={files}>`. Alternatively I considered using a JSON server and React Query to simulate a data-fetch with loading and error states.

The `<Table>` component was inspired by ag-grid (or at least the API). I like this props approach vs composition because if there are tens, hundreds of tables to be written, I can't imagine dealing the verbosity in the composition pattern. If this would have been a web-components UI library, situation would be different, but building React for React, I like props.

Testing the `<Files>` component is more of an integration test, where it checks multiple user interactions.
