import{H as e}from"./iframe-Co-vi7Ap.js";import{B as t}from"./Button-BVzT_l_6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CnuxmT2f.js";import"./getVariantClassName-CyGiRg96.js";import"./camelCase-uFo-OJf_.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,y={title:"@lazar-ui／kit/Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"Button",onClick:d(),size:"md",variant:"primary"}},s={},a={render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(t,{...r,variant:"primary",children:"Primary"}),e.jsx(t,{...r,variant:"secondary",children:"Secondary"}),e.jsx(t,{...r,variant:"danger",children:"Danger"})]})},n={render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(t,{...r,mode:"filled",children:"Filled"}),e.jsx(t,{...r,mode:"outlined",children:"Outlined"}),e.jsx(t,{...r,mode:"text",children:"Text"})]})},o={render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(t,{...r,size:"sm",children:"Small"}),e.jsx(t,{...r,size:"md",children:"Medium"}),e.jsx(t,{...r,size:"lg",children:"Large"})]})},i={args:{children:null},render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(t,{...r,icon:"settings",children:"Settings"}),e.jsx(t,{...r,icon:"edit"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: props => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>
      <Button {...props} icon="settings">
        Settings
      </Button>
      <Button {...props} icon="edit" />
    </div>
}`,...i.parameters?.docs?.source}}};const B=["Default","Variants","Modes","Sizes","WithIcon"];export{s as Default,n as Modes,o as Sizes,a as Variants,i as WithIcon,B as __namedExportsOrder,y as default};
