# Sai / Systems

A responsive React + TypeScript portfolio for Sai Kobbarisetti, using Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Development

Use Node.js 22 or later:

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The static production output is in `dist/`.

## Updating content

- `src/data.ts`: project and skills content.
- `src/App.tsx`: page sections and interactions.
- `src/styles.css`: visual design, responsive layouts, and reduced-motion support.
- `src/warm-theme.css`: white and soft-orange colors, responsive editorial layouts, and prominent name styling.
- `public/endava-logo.svg`: local vector recreation of the supplied Endava symbol.
- `public/sai-kobbarisetti-resume.jpg`: the original supplied résumé, available to view and download.

Project interfaces and events are illustrative simulations. No production metrics are claimed. The contact form only prepares a local preview; it does not transmit or store data. Its email link opens the visitor's mail application for sending.

The source brief and résumé supply professional information. Case study source code is not exposed. All text uses Poppins, loaded from Google Fonts with a sans-serif fallback.

## Code formatting

Run `npm run format` to format the source files or `npm run format:check` to verify formatting. Build output and dependencies are excluded.

## Browser checks

```sh
npx playwright test
```

The test configuration uses installed Microsoft Edge and starts Vite on port 5174. Tests cover navigation, mobile overflow, project dialogs, local contact preview, résumé availability, simplified logos, and removal of the approach, architecture lab, engineering notes, and engineering-in-practice sections.
