import{H as o}from"./iframe-Co-vi7Ap.js";import{useMDXComponents as e}from"./index-CCYKvf1t.js";import{c as i,M as c}from"./WithTooltip-SK46ZJ2J-Da6mlXbZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ljyZh6HS.js";import"./index-DuXb5jj9.js";const r=`# Changelog

## [0.9.0] - 2026-07-14

### Features

- **DropZone**: add generic drag-and-drop file upload component with \`accept\` filter, \`onFileSelect\` callback, drag-over visual states, and click-to-browse via hidden file input. Import: \`@lazar-ui/kit/drop-zone\`. ([74f8e94](https://github.com/lazar-ui/lazar-ui/commit/74f8e94))

## [0.8.0] - 2026-07-10

### Features

- **Toast**: add Toast component — notification system with \`ToastProvider\` and \`useToast\` hook. Supports auto-dismiss, max visible toasts, multiple positions, success/error/warning/info variants, and custom duration. ([d506b59](https://github.com/lazar-ui/lazar-ui/commit/d506b59))

## [0.7.0] - 2026-07-06

### Features

- **Slider**: new standalone component for selecting a numeric value from a range. Supports controlled/uncontrolled modes, min/max/step, sizes (sm/md/lg), \`showValue\`, and \`disabled\`. Uses native \`<input type="range">\` for accessibility.
- **Select**: added JSX composition mode — now you can use \`<Select.Option>\` as children instead of the \`options\` prop. Supports the same features: value/label, disabled, controlled/uncontrolled.
- **Table.Row**: added \`onClick\` prop — click handler for table rows.
- **Table.Row**: added \`style\` prop for inline styles on rows.

### Bug Fixes

- **Tabs**: fixed type error in tests — using \`ETabsVariant.BUTTONS\` instead of string literal.

### Documentation

- **rules**: updated \`.opencode/rules/ui-kit.md\` (Build, memory, tests sections).

## [0.6.2] - 2026-06-10

### Bug Fixes

- **build**: removed depth=1 scan of subcomponents that created spurious entry points (\`context\`, \`item\`) and duplicated \`separator\`

### Refactoring

- **Heading, Text**: moved to \`src/components/Heading/\` and \`src/components/Text/\` as standalone components (previously inside \`Typography/\`)
- **Typography**: component removed

### Documentation

- **rules**: added \`Build\` (memory) and \`Test Coverage Generation\` sections to \`.opencode/rules/ui-kit.md\`

## [0.6.1] - 2026-06-10

### Bug Fixes

- **build**: fixed utility exports (\`getComponentSlots\`, \`filterValidChildren\`, etc.) — Pagination/utils/index.ts no longer overwrites the \`utils\` entry point in the build config

## [0.6.0] - 2026-06-10

### ⚠ BREAKING CHANGES

- **Typography**: removed old \`Typography\` component. Replaced with \`Heading\` and \`Text\`.
  Migration: \`Heading\` for headings (import: \`@lazar-ui/kit/heading\`),
  \`Text\` for paragraphs/text/labels (import: \`@lazar-ui/kit/text\`).

### Features

- **Heading**: new semantic headings component (h1-h6) with sizes xs(14)/sm(16)/md(20)/lg(24)
- **Text**: new text component with sizes xs(12)/sm(13)/md(14)/lg(16), \`weight\` prop (normal/medium/semibold/bold), underline/strikethrough, and truncate
- **utils**: new \`getDecorationStyle\` utility for converting underline/strikethrough props to CSS

### Bug Fixes

- **Button**: added \`user-select: none\` and \`white-space: nowrap\` to prevent text selection and line breaks

## [0.5.2] - 2026-06-09

### Bug Fixes

- **Build**: actually commit the rollup externalize fix — was missing from v0.5.1 commit

## [0.5.1] - 2026-06-09

### Bug Fixes

- **Build**: fix lucide-react icons leaking into dist — externalize deep imports (\`lucide-react/dynamic\`) plus all peerDeps in rollup config (lost from tag, fixed in 0.5.2)

## [0.5.0] - 2026-06-08

### Features

- **Chip**: add new Chip component with multiple variants, sizes, and deletable state
- **Input.Date**: add Date variant for Input component with \`inputMode="numeric"\` and date validation
- **Table.ActiveFilters**: add ActiveFilters sub-component for displaying and clearing active column filters
- **Table.Toolbar**: add Toolbar sub-component for Table with action slots
- **i18n**: restructure locale system for better extensibility and component-scoped translations

### Bug Fixes

- **CI**: fix vitest processes hang and excessive RAM consumption (4GB) by setting \`NODE_OPTIONS="--max-old-space-size=8192"\` in CI config

### Chores

- **CI**: run TSM once instead of per package to speed up type declaration generation
- **styles**: apply prettier fixes across the codebase

## [0.4.0] - 2026-06-05

### ⚠ BREAKING CHANGES

- **Radio**: refactored from standalone component + \`RadioGroup\` into single compound component \`Radio\` + \`Radio.Item\`. Old \`RadioGroup\` removed. Use \`<Radio name="..." value/ defaultValue onChange><Radio.Item value="...">Label</Radio.Item></Radio>\`.

### Features

- **Radio**: add compound component pattern (\`Radio\` + \`Radio.Item\`) with context-driven state management
- **Radio**: restructure Context — extract \`Provider.tsx\`, add \`useRadioContext\` hook with guard (aligned with Tabs pattern)
- **Radio**: add \`useId()\` fallback for \`name\` prop to prevent cross-story conflicts in Storybook autodocs

### Bug Fixes

- **Radio**: fix checked state — handle \`undefined\` vs \`false\` for uncontrolled mode
- **Radio**: fix double opacity on disabled state
- **Radio**: add CSS custom properties (\`--radio-content-gap\`, \`--radio-content-padding-top\`) replacing hardcoded px values

### Documentation

- **Radio**: add ADR for fieldset/legend/aria composability pattern (\`docs/decisions/radio-fieldset-legend-aria.md\`)

### Code Refactoring

- **Radio**: rename \`error\` prop to \`invalid\` for consistency with other form components
- **Radio**: rename \`TStory\` type alias to \`Story\` in stories

### Tests

- **Radio**: rewrite test suite for compound API (13 tests); remove \`RadioGroup.test.tsx\`
- **Radio**: fix test assertions — use \`aria-invalid\` attribute instead of raw CSS class name

### Chores

- **Radio**: add missing exports (\`IItemProps\`, \`ERadioSize\`) to public API
- **Radio**: update VISION.md, ROADMAP.md, test-coverage.json
- **CI**: add \`NODE_OPTIONS="--max-old-space-size=8192"\` to build step to prevent OOM with \`vite-plugin-dts\`

## [0.3.0] - 2026-06-04

### Features

- **Icon**: replace static imports of 40+ Lucide icons with \`DynamicIcon\` (lazy loading, smaller bundle). Change \`name\` prop type from \`string\` to \`IconName\` (strict typing with autocomplete). Export \`IconName\` type. Remove deprecated \`TSvgIcon\` type. ([e11dbf5](https://github.com/lazar-ui/lazar-ui/commit/e11dbf5))
- **Consumers**: update all components using \`Icon\` (Button, Accordion, EmptyState, Menu, InputPassword, Pagination, Select) — icon names migrated from camelCase to kebab-case. ([e11dbf5](https://github.com/lazar-ui/lazar-ui/commit/e11dbf5))
- **Scripts**: add AI-powered component generation scripts. ([e11dbf5](https://github.com/lazar-ui/lazar-ui/commit/e11dbf5))

### Chores

- **CI**: update \`vite.config.ts\` for dynamic imports. ([e11dbf5](https://github.com/lazar-ui/lazar-ui/commit/e11dbf5))

## [0.2.3] - 2026-06-01

### Bug Fixes

- **Button**: fix icon alignment inside button (flex layout)
- **Input**: fix input base background color

### Documentation

- **README**: fix license badge link to point to npmjs

### Chores

- **package.json**: fix repository URL, add LICENSE to files
- **CI**: switch from NPM_TOKEN to Trusted Publisher (OIDC)

## [0.2.2] - 2026-06-01

### Bug Fixes

- **Button**: fix icon alignment inside button (flex layout)
- **Input**: fix input base background color

## [0.2.1] - 2026-06-01

### Documentation

- **package.json**: add homepage, repository, and bugs fields for npm display

## [0.2.0] - 2026-05-27

### Features

- **ConfigProvider**: add ConfigProvider and palettes ([4a1d0d0](https://github.com/anomalyco/lazar-ui/commit/4a1d0d0))
- **Badge**: add Badge component ([ce0ffc7](https://github.com/anomalyco/lazar-ui/commit/ce0ffc7))
- **Popover**: add Popover component ([68a2c06](https://github.com/anomalyco/lazar-ui/commit/68a2c06))
- **Popover.Content**: add padding prop ([712142b](https://github.com/anomalyco/lazar-ui/commit/712142b))
- **Tooltip**: add Tooltip component ([d937823](https://github.com/anomalyco/lazar-ui/commit/d937823))
- **Input**: add Input components ([6bf346a](https://github.com/anomalyco/lazar-ui/commit/6bf346a))
- **Avatar**: add Avatar component ([76c523f](https://github.com/anomalyco/lazar-ui/commit/76c523f))
- **Separator**: add Separator component ([8e395f6](https://github.com/anomalyco/lazar-ui/commit/8e395f6))
- **Card**: add Card component ([bfe36cf](https://github.com/anomalyco/lazar-ui/commit/bfe36cf))
- **Skeleton**: add Skeleton component ([d1980e0](https://github.com/anomalyco/lazar-ui/commit/d1980e0))
- **Alert**: add Alert component ([85217f3](https://github.com/anomalyco/lazar-ui/commit/85217f3))
- **EmptyState**: add EmptyState component ([0c8a81c](https://github.com/anomalyco/lazar-ui/commit/0c8a81c))
- **FormField**: add FormField component ([c5e87a2](https://github.com/anomalyco/lazar-ui/commit/c5e87a2))
- **Spinner**: add Spinner component ([9e5bafc](https://github.com/anomalyco/lazar-ui/commit/9e5bafc))
- **Checkbox**: add Checkbox component ([1272021](https://github.com/anomalyco/lazar-ui/commit/1272021))
- **Select**: add Select component ([1378e1a](https://github.com/anomalyco/lazar-ui/commit/1378e1a))
- **Switch**: add Switch component ([a581b19](https://github.com/anomalyco/lazar-ui/commit/a581b19))
- **Textarea**: add Textarea component ([2cf5daf](https://github.com/anomalyco/lazar-ui/commit/2cf5daf))
- **Pagination**: add Pagination component ([61212a4](https://github.com/anomalyco/lazar-ui/commit/61212a4))
- **Menu**: add Menu component ([6ca3761](https://github.com/anomalyco/lazar-ui/commit/6ca3761))
- **Flex**: add Flex component ([6ec9525](https://github.com/anomalyco/lazar-ui/commit/6ec9525))
- **ErrorBoundary**: add ErrorBoundary component ([242e48f](https://github.com/anomalyco/lazar-ui/commit/242e48f))
- **Breadcrumbs**: add Breadcrumbs component ([b9b1875](https://github.com/anomalyco/lazar-ui/commit/b9b1875))
- **Drawer**: add Drawer component ([e7f2a90](https://github.com/anomalyco/lazar-ui/commit/e7f2a90))
- **Drawer**: add Actions slot ([7f3d103](https://github.com/anomalyco/lazar-ui/commit/7f3d103))
- **Dialog**: add Dialog component ([9e3acf3](https://github.com/anomalyco/lazar-ui/commit/9e3acf3))
- **Table**: add Table component ([8c1b287](https://github.com/anomalyco/lazar-ui/commit/8c1b287))
- **vitest-config**: add vitest-config package ([1cfb90a](https://github.com/anomalyco/lazar-ui/commit/1cfb90a))
- **storybook**: setup Storybook and linters ([ef8c246](https://github.com/anomalyco/lazar-ui/commit/ef8c246))
- **styles**: fix global styles setup ([692fc7c](https://github.com/anomalyco/lazar-ui/commit/692fc7c))

### Bug Fixes

- **Badge**: update heights ([53d104b](https://github.com/anomalyco/lazar-ui/commit/53d104b))
- **Table**: update Table component ([94c0d8c](https://github.com/anomalyco/lazar-ui/commit/94c0d8c))
- **storybook**: update stories ([b7e6add](https://github.com/anomalyco/lazar-ui/commit/b7e6add))
- **css**: update tokens ([c80a00b](https://github.com/anomalyco/lazar-ui/commit/c80a00b))
- **Dialog**: update styles ([21bf726](https://github.com/anomalyco/lazar-ui/commit/21bf726))
- **EmptyState**: rename slot Action to Actions ([419eb59](https://github.com/anomalyco/lazar-ui/commit/419eb59))
- **Popover**: fix first render position ([798c1b6](https://github.com/anomalyco/lazar-ui/commit/798c1b6))
- **Popover/Tooltip**: fix access to overlays inside overlay (html invert attr problem) ([bee4472](https://github.com/anomalyco/lazar-ui/commit/bee4472))
- **Popover/Tooltip**: fix incorrect first render position ([93e17af](https://github.com/anomalyco/lazar-ui/commit/93e17af))

### Documentation

- **Popover/Tooltip**: correct placements ([ab05441](https://github.com/anomalyco/lazar-ui/commit/ab05441))
- **kit**: add README.md and set version to 0.1.0 ([d00235d](https://github.com/anomalyco/lazar-ui/commit/d00235d))

### Refactor

- rename @repo/ui → @lazar-ui/kit and @repo/builder → @lazar-ui/admin ([ff79f0c](https://github.com/anomalyco/lazar-ui/commit/ff79f0c))

### Styles

- fix react import paths ([db8ad4b](https://github.com/anomalyco/lazar-ui/commit/db8ad4b))

### Tests

- add test coverage page to storybook ([86d1d4d](https://github.com/anomalyco/lazar-ui/commit/86d1d4d))

### Chores

- update package.json ([2dfa0b1](https://github.com/anomalyco/lazar-ui/commit/2dfa0b1))
- fix lint and typecheck errors for release ([81a6b5b](https://github.com/anomalyco/lazar-ui/commit/81a6b5b))
`;function a(t){return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"@lazar-ui／kit/Changelog"}),`
`,o.jsx(c,{children:r})]})}function h(t={}){const{wrapper:n}={...e(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(a,{...t})}):a()}export{h as default};
