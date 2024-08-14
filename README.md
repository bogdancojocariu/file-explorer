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

The Design System components were built with having in mind a minimal robust approach of how I would treat this in a real project. I used typography, sizes and colors variables, but there is no multiple theme support and some components are implementing a minimal API (like `<Tooltip>` only supports the `top` content positioning).

The `<Table>` component was inspired by ag-grid (or at least the API). I like this props approach vs composition because if there are tens, hundreds of tables to be written, I can't imagine dealing the verbosity in the composition pattern. If this would have been a web-components UI library, situation would be different, but building React for React, I like props.

Testing the `<Files>` component is more of an integration test, where it checks multiple user interactions.

I have disabled a couple of eslint-rules in certain conditions:

- unused-vars => when destructuring some properties, I didn't need that variable in the `...rest`, but also I don't use it
- usage of `any` in the `<Table>` component for some callbacks or arguments. The idea is to make these things generics, but there are some limitations and due to the time and complexity constraints, I have cut this corner.

Each `File` has that `device` and `path` which at least at first glance, the combination should create an unique `id`, as there can't be two files on the same device with the same path. But the API is flexible enough to change the `getRowId()` to support multiple values, like the `index` or pre-transforming the files API response to include the `index`. I've decided to use the `path-device` combination to ease the job for `<DownloadFilesButton>`

I have decided to only allow selection for files with `status=available` because when user clicks Download, they will Download exactly what they see as selected. I believe allowing every file to be selected and then only Download the available ones can create confusion to the end user on "why some files were not downloaded?"
