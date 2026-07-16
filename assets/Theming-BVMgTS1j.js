import{H as e}from"./iframe-n4ZyvbqO.js";import{useMDXComponents as d}from"./index-Dii_F12o.js";import{c as t}from"./WithTooltip-SK46ZJ2J-B_HXRtDE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlbWyHuc.js";import"./index-DzkDVS6K.js";function r(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentation/Theming"}),`
`,e.jsx(s.h1,{id:"theming",children:"Theming"}),`
`,e.jsxs(s.p,{children:["The library uses a ",e.jsx(s.strong,{children:"CSS custom properties"})," system with three layers:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Palette tokens"})," — raw color values (e.g. ",e.jsx(s.code,{children:"--lui-palette-brand"}),", ",e.jsx(s.code,{children:"--lui-palette-gray-100"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Semantic tokens"})," — abstracted color roles (e.g. ",e.jsx(s.code,{children:"--lui-color-text-primary"}),", ",e.jsx(s.code,{children:"--lui-color-background-error"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Value tokens"})," — spacing, typography, radii, shadows"]}),`
`]}),`
`,e.jsx(s.h2,{id:"palette-tokens",children:"Palette Tokens"}),`
`,e.jsx(s.p,{children:"Two palettes are bundled:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Palette"}),e.jsx("th",{children:"File"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Monochrome (default)"}),e.jsx("td",{children:e.jsx("code",{children:"@lazar-ui/kit/css/palettes/monochrome.css"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Indigo"}),e.jsx("td",{children:e.jsx("code",{children:"@lazar-ui/kit/css/palettes/indigo.css"})})]})]})]}),`
`,e.jsxs(s.p,{children:["Import the palette before ",e.jsx(s.code,{children:"semantic.css"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@import '@lazar-ui/kit/css/palettes/indigo.css';
@import '@lazar-ui/kit/css/semantic.css';
`})}),`
`,e.jsx(s.h3,{id:"custom-palette",children:"Custom Palette"}),`
`,e.jsxs(s.p,{children:["Create your own by copying a bundled palette and adjusting the ",e.jsx(s.code,{children:"--lui-palette-*"})," variables:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* my-palette.css */
:root {
  --lui-palette-brand: #7c3aed;
  --lui-palette-brand-hover: #6d28d9;
  /* ... */
}
`})}),`
`,e.jsxs(s.p,{children:["The only requirement: all ",e.jsx(s.code,{children:"--lui-palette-*"})," variables must be defined for ",e.jsx(s.code,{children:":root"}),", ",e.jsx(s.code,{children:'[data-theme="dark"]'}),", and ",e.jsx(s.code,{children:'[data-theme="contrast"]'}),"."]}),`
`,e.jsx(s.h2,{id:"semantic-tokens",children:"Semantic Tokens"}),`
`,e.jsx(s.p,{children:"Semantic tokens map to palette tokens and adapt automatically to the active theme."}),`
`,e.jsxs(s.p,{children:["See the ",e.jsx(s.a,{href:"/story/design-tokens",children:"Design Tokens"})," story for a full reference."]}),`
`,e.jsx(s.h2,{id:"value-tokens",children:"Value Tokens"}),`
`,e.jsx(s.p,{children:"Spacing and sizing follow an 8× scale:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:["      ",e.jsx("td",{children:e.jsx("code",{children:"--lui-space-1"})}),e.jsx("td",{children:"2px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-2"})}),e.jsx("td",{children:"4px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-3"})}),e.jsx("td",{children:"6px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-4"})}),e.jsx("td",{children:"8px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-5"})}),e.jsx("td",{children:"12px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-6"})}),e.jsx("td",{children:"16px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-7"})}),e.jsx("td",{children:"20px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-8"})}),e.jsx("td",{children:"24px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-10"})}),e.jsx("td",{children:"32px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-12"})}),e.jsx("td",{children:"40px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-14"})}),e.jsx("td",{children:"48px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--lui-space-16"})}),e.jsx("td",{children:"64px"})]})]})]}),`
`,e.jsx(s.p,{children:"Typography tokens control font size, weight, and line-height across a consistent scale."}),`
`,e.jsx(s.h2,{id:"theme-modes",children:"Theme Modes"}),`
`,e.jsxs(s.p,{children:["Toggle between ",e.jsx(s.strong,{children:"light"}),", ",e.jsx(s.strong,{children:"dark"}),", and ",e.jsx(s.strong,{children:"contrast"}),` via the toolbar above.
Each mode switches all palette and semantic tokens automatically.`]}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"LazarUiProvider"})," to set the theme in your app:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<LazarUiProvider theme="dark" locale="en">
  <YourApp />
</LazarUiProvider>
`})})]})}function x(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{x as default};
