import{H as n}from"./iframe-DLB2Hu3F.js";import{useMDXComponents as s}from"./index-DSgLMYXW.js";import{b as i}from"./WithTooltip-SK46ZJ2J-CJx2Euob.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ByrW6-Zw.js";import"./index-evzoQpE5.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Documentation/Introduction"}),`
`,n.jsx(e.h1,{id:"lazar-ui-kit",children:"Lazar UI Kit"}),`
`,n.jsx(e.p,{children:`A component library for building admin panels, dashboards, and internal tools.
Focuses on practical UI patterns commonly needed in B2B applications:
data-heavy layouts, modals, menus, forms, and navigation.`}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @lazar-ui/kit
`})}),`
`,n.jsx(e.h3,{id:"peer-dependencies",children:"Peer dependencies"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Package"}),n.jsx("th",{children:"Version"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"react"})}),n.jsx("td",{children:"^19.2.0"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"react-dom"})}),n.jsx("td",{children:"^19.2.0"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"react-aria"})}),n.jsx("td",{children:"^3.44.0"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"react-stately"})}),n.jsx("td",{children:"^3.42.0"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"clsx"})}),n.jsx("td",{children:"^2.1.1"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"lodash"})}),n.jsx("td",{children:"^4.17.21"})]})]})]}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n.jsxs(e.p,{children:["Wrap your app with ",n.jsx(e.code,{children:"LazarUiProvider"})," and import the required CSS:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LazarUiProvider } from '@lazar-ui/kit/lazar-ui-provider';
import '@lazar-ui/kit/css/palettes/monochrome.css';
import '@lazar-ui/kit/css/semantic.css';

function App() {
  return (
    <LazarUiProvider theme="light" locale="en">
      <YourApp />
    </LazarUiProvider>
  );
}
`})}),`
`,n.jsx(e.p,{children:"Then import any component:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@lazar-ui/kit/button';
import { Table } from '@lazar-ui/kit/table';

function UsersPage() {
  return (
    <Button onClick={() => console.log('clicked')}>
      Add User
    </Button>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"component-patterns",children:"Component Patterns"}),`
`,n.jsx(e.p,{children:"The library offers four component patterns:"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Pattern"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Examples"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Simple"})}),n.jsx("td",{children:"Single self-contained component"}),n.jsx("td",{children:"Button, Badge, Table, Input"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Compound"})}),n.jsx("td",{children:"Multiple sub-components sharing state via Context"}),n.jsx("td",{children:"Accordion, Menu, Tabs"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Slot-based"})}),n.jsx("td",{children:"Composed via named slots (Title / Content / Actions)"}),n.jsx("td",{children:"Dialog, Drawer"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Context-based"})}),n.jsx("td",{children:"Global providers and context consumers"}),n.jsx("td",{children:"LazarUiProvider, Breadcrumbs"})]})]})]}),`
`,n.jsxs(e.p,{children:["See the ",n.jsx(e.a,{href:"/docs/Patterns",children:"Patterns"})," page for details."]})]})}function x(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{x as default};
