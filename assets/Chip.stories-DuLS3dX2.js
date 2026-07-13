import{H as e}from"./iframe-Dr_jLSst.js";import{C as s}from"./Chip-CnhhjCZD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CKj0qN2Q.js";import"./useLocale-BLRFnDhg.js";import"./getVariantClassName-ABlxcBhF.js";import"./camelCase-Bx7zQgAH.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,v={title:"@lazar-ui／kit/Components/Chip",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}}},args:{children:"Chip",onDelete:n(),size:"md"}},a={args:{onDelete:void 0}},o={},i={args:{onDelete:void 0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(s,{...r,size:"sm",children:"Small"}),e.jsx(s,{...r,size:"md",children:"Medium"}),e.jsx(s,{...r,size:"lg",children:"Large"})]})},t={args:{onDelete:void 0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsx(s,{...r,color:"var(--lui-color-text-secondary)",children:"Neutral"}),e.jsx(s,{...r,color:"var(--lui-palette-brand)",children:"Brand"}),e.jsx(s,{...r,color:"var(--lui-color-text-success)",children:"Success"}),e.jsx(s,{...r,color:"var(--lui-color-text-warning)",children:"Warning"}),e.jsx(s,{...r,color:"var(--lui-color-text-error)",children:"Danger"}),e.jsx(s,{...r,color:"var(--lui-palette-orange-500)",children:"Orange"})]})},l={args:{disabled:!0}},c={};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: undefined
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      <Chip {...props} color="var(--lui-palette-brand)">
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
      <Chip {...props} color="var(--lui-palette-orange-500)">
        Orange
      </Chip>
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};const y=["Default","Removable","Sizes","Colors","Disabled","Playground"];export{t as Colors,a as Default,l as Disabled,c as Playground,o as Removable,i as Sizes,y as __namedExportsOrder,v as default};
