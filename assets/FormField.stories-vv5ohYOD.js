import{H as r}from"./iframe-CuM5Wzi8.js";import{c as m}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";const h="FormField",b="_root_5ddqg_5",v="_label_5ddqg_11",q="_required_5ddqg_18",F="_error_5ddqg_22",o={root:b,label:v,required:q,error:F},a=e=>{const{children:n,error:t,label:p,required:c=!1}=e,u=m(o.root);return r.jsxs("div",{className:u,children:[p&&r.jsxs("label",{className:o.label,children:[p,c&&r.jsx("span",{className:o.required,"aria-hidden":"true",children:" *"})]}),n,t&&r.jsx("p",{className:o.error,role:"alert",children:t})]})};a.displayName=h;a.__docgenInfo={description:`FormField component. Wraps form inputs with label, required indicator, and error message.

@example
\`\`\`tsx
<FormField label="Name" required>
  <input />
</FormField>
<FormField label="Email" error="Invalid email">
  <input />
</FormField>
\`\`\``,methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"string"},description:"Label text displayed above the field."},error:{required:!1,tsType:{name:"string"},description:"Error message displayed below the field."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required. Default: false."}}};const f={argTypes:{children:{control:{type:"text"}},error:{control:{type:"text"}},label:{control:{type:"text"}},required:{control:{type:"boolean"}}},args:{children:"Input placeholder",label:"Name",required:!1},component:a,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/FormField"},s={},d={args:{required:!0},render:e=>r.jsx(a,{...e,children:r.jsx("input",{style:{border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-1)",padding:"var(--space-2) var(--space-3)",width:"100%"},placeholder:"Enter value"})})},i={args:{error:"This field is required"},render:e=>r.jsx(a,{...e,children:r.jsx("input",{style:{border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-1)",padding:"var(--space-2) var(--space-3)",width:"100%"},placeholder:"Enter value"})})},l={args:{error:"This field is required",required:!0},render:e=>r.jsx(a,{...e,children:r.jsx("input",{style:{border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-1)",padding:"var(--space-2) var(--space-3)",width:"100%"},placeholder:"Enter value"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: props => <FormField {...props}>
      <input style={{
      border: '1px solid var(--color-border-primary)',
      borderRadius: 'var(--radius-1)',
      padding: 'var(--space-2) var(--space-3)',
      width: '100%'
    }} placeholder="Enter value" />
    </FormField>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'This field is required'
  },
  render: props => <FormField {...props}>
      <input style={{
      border: '1px solid var(--color-border-primary)',
      borderRadius: 'var(--radius-1)',
      padding: 'var(--space-2) var(--space-3)',
      width: '100%'
    }} placeholder="Enter value" />
    </FormField>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'This field is required',
    required: true
  },
  render: props => <FormField {...props}>
      <input style={{
      border: '1px solid var(--color-border-primary)',
      borderRadius: 'var(--radius-1)',
      padding: 'var(--space-2) var(--space-3)',
      width: '100%'
    }} placeholder="Enter value" />
    </FormField>
}`,...l.parameters?.docs?.source}}};const _=["Default","Required","WithError","RequiredWithError"];export{s as Default,d as Required,l as RequiredWithError,i as WithError,_ as __namedExportsOrder,f as default};
