import{H as e}from"./iframe-CPFzPGXL.js";import{useMDXComponents as i}from"./index-BOjXiTSK.js";import{b as s}from"./WithTooltip-SK46ZJ2J-DaxGrbZy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm6KoGID.js";import"./index-Ct7RZu8M.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Localization"}),`
`,e.jsx(n.h1,{id:"localization",children:"Localization"}),`
`,e.jsxs(n.p,{children:["The library ships with built-in locales for ",e.jsx(n.strong,{children:"English"})," and ",e.jsx(n.strong,{children:"Russian"}),"."]}),`
`,e.jsxs(n.p,{children:["Pass a locale string to ",e.jsx(n.code,{children:"LazarUiProvider"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<LazarUiProvider locale="ru">
  <YourApp />
</LazarUiProvider>
`})}),`
`,e.jsx(n.h2,{id:"adding-a-custom-locale",children:"Adding a Custom Locale"}),`
`,e.jsxs(n.p,{children:["Augment the ",e.jsx(n.code,{children:"ILocaleMessages"})," interface via TypeScript module declaration:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`declare module '@lazar-ui/kit/lazar-ui-provider' {
  interface ILocaleMessages {
    myCustomSection: {
      greeting: string;
    };
  }
}
`})}),`
`,e.jsx(n.p,{children:"Then pass your locale object:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<LazarUiProvider
  locale={{
    myCustomSection: { greeting: 'Hello' },
  }}
>
  <YourApp />
</LazarUiProvider>
`})}),`
`,e.jsx(n.p,{children:"All built-in locale sections will be deep-merged with your custom values, so you only need to provide the sections you want to override."})]})}function u(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{u as default};
