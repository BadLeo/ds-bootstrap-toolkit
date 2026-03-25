# Dungeon Siege Frontend Toolkit

A static frontend showcase and component cookbook that translates Dungeon Siege-inspired interface references into a reusable HTML, CSS, and JavaScript design system.

## Overview

- Static-first: no build step, package manager, or framework required.
- Bootstrap 5 provides layout primitives and responsive structure.
- Custom `ds-*` classes provide the visual identity, themed components, and motion layer.
- Anime.js is used for progressive enhancement and non-essential interface animation.

## Features

- Landing showcase in [`index.html`](./index.html)
- Component cookbook in [`cookbook.html`](./cookbook.html)
- Shared design tokens and components in [`assets/css/toolkit.css`](./assets/css/toolkit.css)
- Shared interactive behavior in [`assets/js/toolkit.js`](./assets/js/toolkit.js)
- Visual reference samples in [`docs/samples`](./docs/samples)

## Quick Start

Clone the repository and serve it from the project root with any static HTTP server:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/index.html`
- `http://localhost:8000/cookbook.html`

## Project Structure

```text
.
|-- assets/
|   |-- css/toolkit.css
|   |-- images/
|   `-- js/toolkit.js
|-- docs/
|   `-- samples/
|-- cookbook.html
|-- favicon.svg
`-- index.html
```

## Design Principles

- Keep Bootstrap as the structural layer, not the brand.
- Favor reusable tokens and shared classes over page-local styling.
- Preserve strong art direction across typography, surfaces, and motion.
- Keep the project easy to inspect, edit, and deploy as plain static files.
- Respect accessibility basics and reduced-motion preferences.

## Publishing To GitHub

This repository includes a GitHub Pages workflow at [`.github/workflows/pages.yml`](./.github/workflows/pages.yml) for zero-build deployment.

Recommended publishing flow:

1. Create a new GitHub repository.
2. Push this project to the default branch.
3. In GitHub, enable Pages and set the source to `GitHub Actions`.
4. The workflow will publish the static site on pushes to `main`.

If your default branch is not `main`, update the branch trigger in the workflow file before publishing.

## Contribution And Support

- Contribution guidelines: [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- Code of conduct: [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)
- Security policy: [`SECURITY.md`](./SECURITY.md)
- Change log: [`CHANGELOG.md`](./CHANGELOG.md)

## License

This project is licensed under the MIT License. See [`LICENSE`](./LICENSE).
