import{H as e}from"./iframe-vKSYs7iX.js";import{useMDXComponents as l}from"./index-BybS0Fdu.js";import{c as r}from"./WithTooltip-SK46ZJ2J-C8PUp64F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGeP13uP.js";import"./index-C3X-tSkt.js";function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Theming"}),`
`,e.jsx(n.h1,{id:"theming",children:"Theming"}),`
`,e.jsxs(n.p,{children:["The library uses a ",e.jsx(n.strong,{children:"CSS custom properties"})," system with three layers:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Palette tokens"})," — raw color values (e.g. ",e.jsx(n.code,{children:"--lui-palette-primary"}),", ",e.jsx(n.code,{children:"--lui-palette-text-on-primary"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Semantic tokens"})," — abstracted color roles (e.g. ",e.jsx(n.code,{children:"--lui-color-text-primary"}),", ",e.jsx(n.code,{children:"--lui-color-background-error"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Value tokens"})," — spacing, typography, radii, shadows"]}),`
`]}),`
`,e.jsx(n.h2,{id:"palette-tokens",children:"Palette Tokens"}),`
`,e.jsx(n.p,{children:"Three palettes are bundled:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Palette"}),e.jsx("th",{children:"File"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Purple"}),e.jsx("td",{children:e.jsx("code",{children:"@lazar-ui/kit/css/palettes/purple.css"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Indigo"}),e.jsx("td",{children:e.jsx("code",{children:"@lazar-ui/kit/css/palettes/indigo.css"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Monochrome (default)"}),e.jsx("td",{children:e.jsx("code",{children:"@lazar-ui/kit/css/palettes/monochrome.css"})})]})]})]}),`
`,e.jsxs(n.p,{children:["Import the palette before ",e.jsx(n.code,{children:"semantic.css"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@lazar-ui/kit/css/palettes/purple.css';
@import '@lazar-ui/kit/css/semantic.css';
`})}),`
`,e.jsx(n.h3,{id:"palette-contract",children:"Palette Contract"}),`
`,e.jsxs(n.p,{children:["Each palette must define these variables for ",e.jsx(n.code,{children:":root"}),", ",e.jsx(n.code,{children:'[data-theme="dark"]'}),", and ",e.jsx(n.code,{children:'[data-theme="contrast"]'}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* Brand colors */
  --lui-palette-primary: #8900ff;
  --lui-palette-secondary: #0089eb;
  --lui-palette-neutral: #455869;

  /* Functional colors */
  --lui-palette-error: #f22c2d;
  --lui-palette-warning: #f28f29;
  --lui-palette-success: #11ae5b;
  --lui-palette-info: #0089eb;

  /* Base colors */
  --lui-palette-base-white: #fff;
  --lui-palette-base-black: #000;
  --lui-palette-base-overlay: rgb(0, 0, 0 / 0.4);

  /* Surface abstractions: canvas = what we draw on, ink = what we draw with */
  --lui-palette-canvas: var(--lui-palette-base-white);
  --lui-palette-ink: var(--lui-palette-base-black);

  /* Text on primary background */
  --lui-palette-text-on-primary: #fff;
  /* Text on secondary (canvas) background */
  --lui-palette-text-on-secondary: #1a1a1a;
}

[data-theme="dark"] {
  --lui-palette-primary: #9353e6;
  --lui-palette-secondary: #53b1fd;
  --lui-palette-neutral: #768c9a;

  --lui-palette-error: #f97066;
  --lui-palette-warning: #fdb022;
  --lui-palette-success: #47cd89;
  --lui-palette-info: #53b1fd;

  --lui-palette-base-white: #0f172c;
  --lui-palette-base-black: #f8fafc;
  --lui-palette-base-overlay: rgb(0, 0, 0 / 0.6);

  --lui-palette-canvas: #0f172c;
  --lui-palette-ink: #f8fafc;

  --lui-palette-text-on-primary: #fff;
  --lui-palette-text-on-secondary: #fff;
}

[data-theme="contrast"] {
  --lui-palette-primary: #6000b3;
  --lui-palette-secondary: #04c;
  --lui-palette-neutral: #404040;

  --lui-palette-error: #c00;
  --lui-palette-warning: #c60;
  --lui-palette-success: #060;
  --lui-palette-info: #04c;

  --lui-palette-base-white: #fff;
  --lui-palette-base-black: #000;
  --lui-palette-base-overlay: rgb(0, 0, 0 / 0.7);

  --lui-palette-canvas: var(--lui-palette-base-white);
  --lui-palette-ink: var(--lui-palette-base-black);

  --lui-palette-text-on-primary: #fff;
  --lui-palette-text-on-secondary: #1a1a1a;
}
`})}),`
`,e.jsx(n.h3,{id:"canvas-and-ink",children:"Canvas and Ink"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"--lui-palette-canvas"})," and ",e.jsx(n.code,{children:"--lui-palette-ink"})," variables are semantic abstractions:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"canvas"})})," — the surface you draw on (background)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ink"})})," — what you draw with (text, icons)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["In light theme, canvas is typically ",e.jsx(n.code,{children:"base-white"})," and ink is ",e.jsx(n.code,{children:"base-black"}),". In dark theme, canvas becomes a dark surface and ink becomes a light color. The semantic layer uses these abstractions for all background and text tokens:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--lui-color-background-base: var(--lui-palette-canvas);
--lui-color-text-primary: var(--lui-palette-ink);
`})}),`
`,e.jsx(n.h3,{id:"text-on-primary",children:"Text on Primary"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"--lui-palette-text-on-primary"})," variable defines the text color used on primary backgrounds (buttons, active states, etc.)."]}),`
`,e.jsx(n.p,{children:"The semantic layer uses it directly — no mutation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--lui-color-background-primary: var(--lui-palette-primary);
--lui-color-text-on-primary: var(--lui-palette-text-on-primary);
`})}),`
`,e.jsx(n.h3,{id:"text-on-secondary",children:"Text on Secondary"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"--lui-palette-text-on-secondary"})," variable defines the text color used on secondary (base-white) backgrounds (secondary buttons, cards, etc.)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`--lui-color-background-base: var(--lui-palette-base-white);
--lui-color-text-on-secondary: var(--lui-palette-text-on-secondary);
`})}),`
`,e.jsx(n.h3,{id:"contrast-requirements",children:"Contrast Requirements"}),`
`,e.jsxs(n.p,{children:["All palettes must meet ",e.jsx(n.strong,{children:"WCAG AA"})," contrast requirements:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Normal text"}),": 4.5:1 contrast ratio between ",e.jsx(n.code,{children:"text-on-primary"})," and ",e.jsx(n.code,{children:"primary"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large text"})," (≥18px or ≥14px bold): 3:1 contrast ratio"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The library uses ",e.jsx(n.strong,{children:"4.5:1"})," for all text elements to ensure accessibility."]}),`
`,e.jsx(n.h4,{id:"-correct-example",children:"✅ Correct Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Light theme */
:root {
  --lui-palette-primary: #8900ff;
  --lui-palette-text-on-primary: #fff;
}
/* Contrast: #fff on #8900ff = 5.99:1 ✓ */

/* Dark theme */
[data-theme="dark"] {
  --lui-palette-primary: #a262ff;
  --lui-palette-text-on-primary: #1d1d1d;
}
/* Contrast: #1d1d1d on #a262ff = 4.60:1 ✓ */
`})}),`
`,e.jsx(n.h4,{id:"-incorrect-example",children:"❌ Incorrect Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Dark theme with insufficient contrast */
[data-theme="dark"] {
  --lui-palette-primary: #d6d3d1; /* too light */
  --lui-palette-text-on-primary: #fff;
}
/* Contrast: #fff on #d6d3d1 = 1.49:1 ✗ */
/* Text is barely readable! */
`})}),`
`,e.jsx(n.h3,{id:"custom-palette",children:"Custom Palette"}),`
`,e.jsx(n.p,{children:"Create your own by copying a bundled palette and adjusting the variables:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* my-palette.css */
:root {
  --lui-palette-primary: #7c3aed;
  --lui-palette-secondary: #0ea5e9;
  --lui-palette-neutral: #64748b;

  --lui-palette-error: #ef4444;
  --lui-palette-warning: #f59e0b;
  --lui-palette-success: #10b981;
  --lui-palette-info: #0ea5e9;

  --lui-palette-base-white: #fff;
  --lui-palette-base-black: #000;
  --lui-palette-base-overlay: rgb(0, 0, 0 / 0.4);

  --lui-palette-canvas: var(--lui-palette-base-white);
  --lui-palette-ink: var(--lui-palette-base-black);

  --lui-palette-text-on-primary: #fff;
  --lui-palette-text-on-secondary: #1a1a1a;
}

[data-theme="dark"] {
  --lui-palette-primary: #a78bfa;
  --lui-palette-secondary: #38bdf8;
  --lui-palette-neutral: #94a3b8;

  --lui-palette-error: #f87171;
  --lui-palette-warning: #fbbf24;
  --lui-palette-success: #34d399;
  --lui-palette-info: #38bdf8;

  --lui-palette-base-white: #0f172a;
  --lui-palette-base-black: #f8fafc;
  --lui-palette-base-overlay: rgb(0, 0, 0 / 0.6);

  --lui-palette-canvas: #0f172a;
  --lui-palette-ink: #f8fafc;

  --lui-palette-text-on-primary: #1a1a2e;
  --lui-palette-text-on-secondary: #fff;
}

[data-theme="contrast"] {
  --lui-palette-primary: #5b21b6;
  --lui-palette-secondary: #0369a1;
  --lui-palette-neutral: #475569;

  --lui-palette-error: #b91c1c;
  --lui-palette-warning: #b45309;
  --lui-palette-success: #047857;
  --lui-palette-info: #0369a1;

  --lui-palette-base-white: #fff;
  --lui-palette-base-black: #000;
  --lui-palette-base-overlay: rgb(0, 0, 0 / 0.7);

  --lui-palette-canvas: var(--lui-palette-base-white);
  --lui-palette-ink: var(--lui-palette-base-black);

  --lui-palette-text-on-primary: #fff;
  --lui-palette-text-on-secondary: #1a1a1a;
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),": Ensure your palette meets WCAG AA contrast requirements (4.5:1) between ",e.jsx(n.code,{children:"--lui-palette-text-on-primary"})," and ",e.jsx(n.code,{children:"--lui-palette-primary"})," in all themes."]}),`
`,e.jsx(n.h2,{id:"semantic-tokens",children:"Semantic Tokens"}),`
`,e.jsx(n.p,{children:"Semantic tokens map to palette tokens and adapt automatically to the active theme."}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/story/design-tokens",children:"Design Tokens"})," story for a full reference."]}),`
`,e.jsx(n.h2,{id:"value-tokens",children:"Value Tokens"}),`
`,e.jsx(n.p,{children:"Spacing and sizing follow an 8× scale:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:["      ",e.jsx("td",{children:e.jsx("code",{children:"--lui-space-1"})}),e.jsx("td",{children:"2px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-2"})}),e.jsx("td",{children:"4px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-3"})}),e.jsx("td",{children:"6px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-4"})}),e.jsx("td",{children:"8px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-5"})}),e.jsx("td",{children:"12px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-6"})}),e.jsx("td",{children:"16px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-7"})}),e.jsx("td",{children:"20px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-8"})}),e.jsx("td",{children:"24px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-10"})}),e.jsx("td",{children:"32px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-12"})}),e.jsx("td",{children:"40px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-14"})}),e.jsx("td",{children:"48px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-16"})}),e.jsx("td",{children:"64px"})]})]})]}),`
`,e.jsx(n.p,{children:"Typography tokens control font size, weight, and line-height across a consistent scale."}),`
`,e.jsx(n.h2,{id:"theme-modes",children:"Theme Modes"}),`
`,e.jsxs(n.p,{children:["Toggle between ",e.jsx(n.strong,{children:"light"}),", ",e.jsx(n.strong,{children:"dark"}),", and ",e.jsx(n.strong,{children:"contrast"}),` via the toolbar above.
Each mode switches all palette and semantic tokens automatically.`]}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"LazarUiProvider"})," to set the theme in your app:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<LazarUiProvider theme="dark" locale="en">
  <YourApp />
</LazarUiProvider>
`})})]})}function p(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{p as default};
