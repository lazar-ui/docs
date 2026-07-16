import{H as r}from"./iframe-n4ZyvbqO.js";import{A as e}from"./Alert-k-x1gtrq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./getVariantClassName-CW3tvtKI.js";import"./camelCase-CAJeNIN1.js";const d={argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"},options:["info","success","warning","danger"],table:{defaultValue:{summary:"info"},type:{summary:"info | success | warning | danger"}}}},args:{children:"This is an info alert.",variant:"info"},component:e,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/Alert"},s={},t={render:a=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"stretch"},children:[r.jsx(e,{...a,variant:"info",children:"This is an info alert."}),r.jsx(e,{...a,variant:"success",children:"This is a success alert."}),r.jsx(e,{...a,variant:"warning",children:"This is a warning alert."}),r.jsx(e,{...a,variant:"danger",children:"This is a danger alert."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const m=["Default","Variants"];export{s as Default,t as Variants,m as __namedExportsOrder,d as default};
