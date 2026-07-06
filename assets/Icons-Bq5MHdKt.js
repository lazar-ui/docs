import{H as e}from"./iframe-BA3APmPd.js";import{useMDXComponents as r}from"./index-BGLjXHAK.js";import{b as i}from"./WithTooltip-SK46ZJ2J-CCKM7c_u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIIB4FLJ.js";import"./index-C69Vd08x.js";function s(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Icons"}),`
`,e.jsx(n.h1,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:["The library uses ",e.jsx(n.strong,{children:"Lucide"})," icons via the ",e.jsx(n.code,{children:"<Icon>"}),` component.
Icons are `,e.jsx(n.strong,{children:"not bundled"})," — you must install ",e.jsx(n.code,{children:"lucide-react"})," as a peer dependency."]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install lucide-react
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Icon } from '@lazar-ui/kit/icon';

<Icon name="search" />
<Icon name="user" />
<Icon name="chevron-down" />
`})}),`
`,e.jsx(n.h2,{id:"size-color--stroke-width",children:"Size, Color & Stroke Width"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Icon name="settings" size={24} color="red" />
<Icon name="heart" strokeWidth={1} />
<Icon name="star" size={32} color="var(--lui-color-text-brand)" />
`})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"name"})}),e.jsx("td",{children:e.jsx("code",{children:"IconName"})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:"Icon name from Lucide (kebab-case)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"size"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"16"})}),e.jsx("td",{children:"Icon size in px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"color"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"'currentColor'"})}),e.jsx("td",{children:"Stroke color (any CSS color value)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"strokeWidth"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"2"})}),e.jsx("td",{children:"Stroke width in px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ariaLabel"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"name"})}),e.jsx("td",{children:"Custom aria-label for accessibility"})]})]})]}),`
`,e.jsx(n.h2,{id:"aria-label",children:"Aria-label"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Icon name="x" ariaLabel="Close" />
<Icon name="menu" ariaLabel="Open navigation" />
`})}),`
`,e.jsxs(n.p,{children:["By default the aria-label equals the icon ",e.jsx(n.code,{children:"name"}),`. Always provide a meaningful label
when the icon acts as a standalone interactive element.`]}),`
`,e.jsx(n.h2,{id:"dynamic-import-tree-shaking",children:"Dynamic Import (Tree-shaking)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<Icon>"})," component uses ",e.jsx(n.code,{children:"DynamicIcon"})," from ",e.jsx(n.code,{children:"lucide-react/dynamic"}),`.
Icons are `,e.jsx(n.strong,{children:"lazy-loaded"}),` at runtime — only the icons you use are fetched.
No manual tree-shaking or import optimization is required.`]}),`
`,e.jsx(n.h2,{id:"reuse-in-other-components",children:"Reuse in Other Components"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"IconName"}),` type is used across several components. Pass an icon name
as a string prop:`]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Button"})}),e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:'<Button icon="plus">Add</Button>'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"EmptyState"})}),e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:'<EmptyState icon="file-text" title="No data" />'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Accordion.Item"})}),e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:'<Accordion.Item icon="chevron-down" value="1">'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Menu.Item"})}),e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:'<Menu.Item icon="settings">Settings</Menu.Item>'})})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from '@lazar-ui/kit/button';
import { EmptyState } from '@lazar-ui/kit/empty-state';

<Button icon="plus" variant="primary">Create</Button>
<EmptyState icon="inbox" title="No messages" />
`})}),`
`,e.jsx(n.h2,{id:"icon-list",children:"Icon List"}),`
`,e.jsx(n.p,{children:"Browse the full Lucide icon set at:"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://lucide.dev/icons",rel:"nofollow",children:"https://lucide.dev/icons"})}),`
`,e.jsxs(n.p,{children:["All icon names in kebab-case (e.g. ",e.jsx(n.code,{children:'"arrow-right"'}),", ",e.jsx(n.code,{children:'"check-circle"'}),", ",e.jsx(n.code,{children:'"file-text"'}),`)
are valid values for the `,e.jsx(n.code,{children:"name"})," prop and all component icon props."]})]})}function x(c={}){const{wrapper:n}={...r(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{x as default};
