# Contributing

## Scope

This project is a static HTML, CSS, and vanilla JavaScript design-system showcase. Contributions should preserve that constraint unless a maintainership decision explicitly expands the architecture.

## Development Guidelines

1. Keep the site runnable as plain static files.
2. Prefer Bootstrap for layout and custom `ds-*` classes for brand styling.
3. Reuse shared tokens, classes, and scripts before adding new patterns.
4. Keep JavaScript progressive and lightweight.
5. Respect accessibility, keyboard navigation, and reduced-motion behavior.

## Local Validation

Before opening a pull request:

1. Serve the project locally from the repository root.
2. Verify [`index.html`](./index.html) and [`cookbook.html`](./cookbook.html) on desktop and mobile widths.
3. Confirm that new interactions still work without breaking no-JavaScript fallbacks where applicable.
4. Check that visual changes remain consistent with the established theme.

## Pull Requests

Please keep pull requests focused. Include:

- A short summary of the change
- Screenshots or screen recordings for UI changes
- Notes about accessibility, responsive behavior, or tradeoffs when relevant

## Questions

For larger changes, open an issue first so the implementation direction can be agreed before work starts.
