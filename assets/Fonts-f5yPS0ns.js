import{H as n}from"./iframe-16V6KrfE.js";import{useMDXComponents as o}from"./index-C8DOQTi2.js";import{c as r}from"./WithTooltip-SK46ZJ2J-V5-DI9rh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1Rc3ySHy.js";import"./index-JMs-wM20.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Documentation/Fonts"}),`
`,n.jsx(e.h1,{id:"fonts",children:"Fonts"}),`
`,n.jsxs(e.p,{children:["The library uses ",n.jsx(e.strong,{children:"Inter"})," as the default typeface via the ",n.jsx(e.code,{children:"--lui-font-family-body"}),` CSS token.
The font is `,n.jsx(e.strong,{children:"not bundled"})," — you choose how to load it in your application."]}),`
`,n.jsx(e.h2,{id:"google-fonts-cdn",children:"Google Fonts CDN"}),`
`,n.jsxs(e.p,{children:["Add the following to your page ",n.jsx(e.code,{children:"<head>"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
`})}),`
`,n.jsxs(e.h2,{id:"npm-fontsourceinter",children:["npm (",n.jsx(e.code,{children:"@fontsource/inter"}),")"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @fontsource/inter
`})}),`
`,n.jsx(e.p,{children:"Then import in your app entry point:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import '@fontsource/inter';
`})}),`
`,n.jsxs(e.h2,{id:"nextjs-nextfontgoogle",children:["Next.js (",n.jsx(e.code,{children:"next/font/google"}),")"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
`})}),`
`,n.jsx(e.p,{children:"Then use the variable in your CSS:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`body {
  font-family: var(--font-inter);
}
`})}),`
`,n.jsx(e.h2,{id:"custom-font",children:"Custom Font"}),`
`,n.jsxs(e.p,{children:["Override the ",n.jsx(e.code,{children:"--lui-font-family-body"})," token to use any typeface:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  --lui-font-family-body: "Roboto", system-ui, sans-serif;
}
`})}),`
`,n.jsx(e.h2,{id:"font-weights-used",children:"Font weights used"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Token"}),n.jsx("th",{children:"Weight"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"--lui-font-weight-normal"})}),n.jsx("td",{children:"400"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"--lui-font-weight-medium"})}),n.jsx("td",{children:"500"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"--lui-font-weight-semibold"})}),n.jsx("td",{children:"600"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"--lui-font-weight-bold"})}),n.jsx("td",{children:"700"})]})]})]}),`
`,n.jsx(e.p,{children:"These correspond to the weights loaded by this documentation (Google Fonts CDN)."})]})}function x(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{x as default};
