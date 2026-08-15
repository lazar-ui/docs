import{H as r}from"./iframe-vKSYs7iX.js";import{C as o}from"./Chip-BtZPyjnq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-wH_OFNsQ.js";import"./useLocale-BF9KSZJS.js";import"./getVariantClassName-B9bEubGl.js";import"./camelCase-CCk27Svl.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,v={title:"@lazar-ui／kit/Components/Chip",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}}},args:{children:"Chip",onDelete:n(),size:"md"}},s={args:{onDelete:void 0}},a={},i={args:{onDelete:void 0},render:e=>r.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[r.jsx(o,{...e,size:"sm",children:"Small"}),r.jsx(o,{...e,size:"md",children:"Medium"}),r.jsx(o,{...e,size:"lg",children:"Large"})]})},l={args:{onDelete:void 0},render:e=>r.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[r.jsx(o,{...e,color:"var(--lui-color-text-secondary)",children:"Neutral"}),r.jsx(o,{...e,color:"var(--lui-color-background-primary)",children:"Brand"}),r.jsx(o,{...e,color:"var(--lui-color-text-success)",children:"Success"}),r.jsx(o,{...e,color:"var(--lui-color-text-warning)",children:"Warning"}),r.jsx(o,{...e,color:"var(--lui-color-text-error)",children:"Danger"}),r.jsx(o,{...e,color:"var(--lui-color-text-warning)",children:"Orange"})]})},t={args:{disabled:!0}},c={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: undefined
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: undefined
  },
  render: props => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>
      <Chip {...props} size="sm">
        Small
      </Chip>
      <Chip {...props} size="md">
        Medium
      </Chip>
      <Chip {...props} size="lg">
        Large
      </Chip>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: undefined
  },
  render: props => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }}>
      <Chip {...props} color="var(--lui-color-text-secondary)">
        Neutral
      </Chip>
      <Chip {...props} color="var(--lui-color-background-primary)">
        Brand
      </Chip>
      <Chip {...props} color="var(--lui-color-text-success)">
        Success
      </Chip>
      <Chip {...props} color="var(--lui-color-text-warning)">
        Warning
      </Chip>
      <Chip {...props} color="var(--lui-color-text-error)">
        Danger
      </Chip>
      <Chip {...props} color="var(--lui-color-text-warning)">
        Orange
      </Chip>
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};const y=["Default","Removable","Sizes","Colors","Disabled","Playground"];export{l as Colors,s as Default,t as Disabled,c as Playground,a as Removable,i as Sizes,y as __namedExportsOrder,v as default};
