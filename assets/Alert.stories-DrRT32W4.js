import{H as e}from"./iframe-Cjz0EO4m.js";import{c}from"./clsx-B-dksMZM.js";import{g as d}from"./getVariantClassName-DDKRqdy-.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-B8ET9H2F.js";const p="Alert",m="_root_1ibdz_9",u="_variantDanger_1ibdz_18",v="_variantInfo_1ibdz_25",g="_variantSuccess_1ibdz_32",f="_variantWarning_1ibdz_39",s={root:m,variantDanger:u,variantInfo:v,variantSuccess:g,variantWarning:f},a=r=>{const{children:i,variant:o="info"}=r,l=c(s.root,d("variant",o,s));return e.jsx("div",{className:l,role:"alert",children:i})};a.displayName=p;a.__docgenInfo={description:`Alert component. Renders a contextual notification banner.

Supports four variants: info, success, warning, danger.
Background and border are derived from the variant color via \`color-mix()\`.

@example
\`\`\`tsx
<Alert>This is an info alert.</Alert>
<Alert variant="success">Operation completed.</Alert>
<Alert variant="warning">Check your input.</Alert>
<Alert variant="danger">Something went wrong.</Alert>
\`\`\``,methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"literal",value:"`${EAlertVariant.INFO | EAlertVariant.SUCCESS | EAlertVariant.WARNING | EAlertVariant.DANGER}`"},description:"Visual variant. Default: 'info'."}}};const T={argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"},options:["info","success","warning","danger"],table:{defaultValue:{summary:"info"},type:{summary:"info | success | warning | danger"}}}},args:{children:"This is an info alert.",variant:"info"},component:a,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/Alert"},t={},n={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"stretch"},children:[e.jsx(a,{...r,variant:"info",children:"This is an info alert."}),e.jsx(a,{...r,variant:"success",children:"This is a success alert."}),e.jsx(a,{...r,variant:"warning",children:"This is a warning alert."}),e.jsx(a,{...r,variant:"danger",children:"This is a danger alert."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'stretch'
  }}>
      <Alert {...props} variant="info">
        This is an info alert.
      </Alert>
      <Alert {...props} variant="success">
        This is a success alert.
      </Alert>
      <Alert {...props} variant="warning">
        This is a warning alert.
      </Alert>
      <Alert {...props} variant="danger">
        This is a danger alert.
      </Alert>
    </div>
}`,...n.parameters?.docs?.source}}};const S=["Default","Variants"];export{t as Default,n as Variants,S as __namedExportsOrder,T as default};
