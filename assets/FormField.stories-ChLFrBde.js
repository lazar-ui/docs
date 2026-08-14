import{H as e}from"./iframe-DLdpy6-y.js";import{c as h}from"./clsx-B-dksMZM.js";import{I as d}from"./index-DuzoaL4s.js";import"./preload-helper-PPVm8Dsz.js";import"./getVariantClassName-DR0bhogv.js";import"./camelCase-CqHBbmbu.js";import"./Icon-CwNUaJS8.js";import"./useLocale-C7mzZg-X.js";const F="FormField",f="_root_18f1a_5",q="_label_18f1a_11",x="_required_18f1a_18",g="_error_18f1a_22",s={root:f,label:q,required:x,error:g},o=r=>{const{children:c,error:n,label:p,required:m=!1}=r,u=h(s.root);return e.jsxs("div",{className:u,children:[p&&e.jsxs("label",{className:s.label,children:[p,m&&e.jsx("span",{className:s.required,"aria-hidden":"true",children:" *"})]}),c,n&&e.jsx("p",{className:s.error,role:"alert",children:n})]})};o.displayName=F;o.__docgenInfo={description:`FormField component. Wraps form inputs with label, required indicator, and error message.

@example
\`\`\`tsx
<FormField label="Name" required>
  <input />
</FormField>
<FormField label="Email" error="Invalid email">
  <input />
</FormField>
\`\`\``,methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"string"},description:"Label text displayed above the field."},error:{required:!1,tsType:{name:"string"},description:"Error message displayed below the field."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required. Default: false."}}};const T={argTypes:{children:{control:{type:"text"}},error:{control:{type:"text"}},label:{control:{type:"text"}},required:{control:{type:"boolean"}}},args:{children:"Input placeholder",label:"Name",required:!1},component:o,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/FormField"},a={},t={args:{required:!0},render:r=>e.jsx(o,{...r,children:e.jsx(d,{placeholder:"Enter value"})})},l={args:{error:"This field is required"},render:r=>e.jsx(o,{...r,children:e.jsx(d,{placeholder:"Enter value"})})},i={args:{error:"This field is required",required:!0},render:r=>e.jsx(o,{...r,children:e.jsx(d,{placeholder:"Enter value"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: props => <FormField {...props}>
      <Input placeholder="Enter value" />
    </FormField>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'This field is required'
  },
  render: props => <FormField {...props}>
      <Input placeholder="Enter value" />
    </FormField>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'This field is required',
    required: true
  },
  render: props => <FormField {...props}>
      <Input placeholder="Enter value" />
    </FormField>
}`,...i.parameters?.docs?.source}}};const W=["Default","Required","WithError","RequiredWithError"];export{a as Default,t as Required,i as RequiredWithError,l as WithError,W as __namedExportsOrder,T as default};
