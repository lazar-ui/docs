import{H as n}from"./iframe-DAizPdsd.js";import{useMDXComponents as r}from"./index-C2HY3OBL.js";import{b as s}from"./WithTooltip-SK46ZJ2J--_i1qeq_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChqbN2vk.js";import"./index-BETs-Riv.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Documentation/Component Patterns"}),`
`,n.jsx(e.h1,{id:"component-patterns",children:"Component Patterns"}),`
`,n.jsx(e.p,{children:"Every component in the library follows one of four patterns. The pattern determines how the component is composed and how its parts communicate."}),`
`,n.jsx(e.h2,{id:"simple-components",children:"Simple Components"}),`
`,n.jsx(e.p,{children:"A single self-contained component with a flat props interface."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@lazar-ui/kit/button';

<Button variant="primary" size="md">
  Click me
</Button>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Examples:"})," Button, Badge, Card, Checkbox, EmptyState, ErrorBoundary, Flex, FormField, Input, Pagination, Select, Separator, Skeleton, Spinner, Switch, Table, Textarea, Tooltip, Alert, Avatar"]}),`
`,n.jsx(e.h2,{id:"compound-components",children:"Compound Components"}),`
`,n.jsx(e.p,{children:"A group of sub-components that share state via React Context. The parent wraps children and provides context; each child reads from it."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Accordion } from '@lazar-ui/kit/accordion';

<Accordion>
  <Accordion.Item value="1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content 1</Accordion.Content>
  </Accordion.Item>
</Accordion>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Examples:"})," Accordion, Menu, Popover, Tabs"]}),`
`,n.jsx(e.h2,{id:"slot-based-components",children:"Slot-based Components"}),`
`,n.jsx(e.p,{children:"Composed via named sub-components that act as slots."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dialog } from '@lazar-ui/kit/dialog';

<Dialog>
  <Dialog.Title>Confirm</Dialog.Title>
  <Dialog.Content>
    Are you sure?
  </Dialog.Content>
  <Dialog.Actions>
    <Button onClick={close}>Cancel</Button>
    <Button variant="danger" onClick={confirm}>Delete</Button>
  </Dialog.Actions>
</Dialog>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Examples:"})," Dialog, Drawer"]}),`
`,n.jsx(e.h2,{id:"context-based-components",children:"Context-based Components"}),`
`,n.jsx(e.p,{children:"Global providers and consumers that share state across the component tree."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<LazarUiProvider theme="dark" locale="en">
  <Breadcrumbs>
    <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/users">Users</Breadcrumbs.Item>
    <Breadcrumbs.Item current>Profile</Breadcrumbs.Item>
  </Breadcrumbs>
</LazarUiProvider>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Examples:"})," LazarUiProvider, Breadcrumbs"]})]})}function p(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{p as default};
