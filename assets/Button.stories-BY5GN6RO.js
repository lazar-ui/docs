import{H as e}from"./iframe-jW71M8gU.js";import{B as t}from"./Button-BylrRpQd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./getVariantClassName-BhJkLVrZ.js";import"./camelCase-CTLX-SCZ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,x={title:"Kit/Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"Button",onClick:i(),size:"md",variant:"primary"}},s={},a={render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(t,{...r,variant:"primary",children:"Primary"}),e.jsx(t,{...r,variant:"secondary",children:"Secondary"}),e.jsx(t,{...r,variant:"danger",children:"Danger"})]})},o={render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(t,{...r,mode:"filled",children:"Filled"}),e.jsx(t,{...r,mode:"outlined",children:"Outlined"}),e.jsx(t,{...r,mode:"text",children:"Text"})]})},n={render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(t,{...r,size:"sm",children:"Small"}),e.jsx(t,{...r,size:"md",children:"Medium"}),e.jsx(t,{...r,size:"lg",children:"Large"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>
      <Button {...props} variant="primary">
        Primary
      </Button>
      <Button {...props} variant="secondary">
        Secondary
      </Button>
      <Button {...props} variant="danger">
        Danger
      </Button>
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>
      <Button {...props} mode="filled">
        Filled
      </Button>
      <Button {...props} mode="outlined">
        Outlined
      </Button>
      <Button {...props} mode="text">
        Text
      </Button>
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>
      <Button {...props} size="sm">
        Small
      </Button>
      <Button {...props} size="md">
        Medium
      </Button>
      <Button {...props} size="lg">
        Large
      </Button>
    </div>
}`,...n.parameters?.docs?.source}}};const g=["Default","Variants","Modes","Sizes"];export{s as Default,o as Modes,n as Sizes,a as Variants,g as __namedExportsOrder,x as default};
