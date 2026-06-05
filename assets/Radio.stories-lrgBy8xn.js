import{H as e}from"./iframe-DLB2Hu3F.js";import{R as a}from"./Radio-DOEmga7_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./getVariantClassName-8orE4ulh.js";import"./camelCase-BTsvIAkU.js";const f={argTypes:{checked:{control:"boolean",table:{type:{summary:"boolean"}}},children:{control:{type:"text"}},defaultChecked:{control:"boolean",table:{type:{summary:"boolean"}}},description:{control:{type:"text"}},disabled:{control:"boolean",table:{type:{summary:"boolean"}}},error:{control:"boolean",table:{type:{summary:"boolean"}}},label:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}}},args:{size:"md"},component:a,parameters:{layout:"centered"},tags:["autodocs"],title:"Kit/Components/Radio"},s={},t={args:{defaultChecked:!0}},l={args:{label:"Option label",defaultChecked:!0}},o={args:{description:"Additional description text",label:"Option with description"}},d={args:{disabled:!0}},i={args:{defaultChecked:!0,disabled:!0}},c={args:{error:!0,label:"Invalid option"}},n={render:r=>e.jsxs("div",{style:{alignItems:"center",display:"flex",gap:"24px"},children:[e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{...r,size:"sm",defaultChecked:!0}),e.jsx("span",{children:"sm"})]}),e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{...r,size:"md",defaultChecked:!0}),e.jsx("span",{children:"md"})]}),e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{...r,size:"lg",defaultChecked:!0}),e.jsx("span",{children:"lg"})]})]})},p={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{...r,label:"Unchecked"}),e.jsx(a,{...r,label:"Checked",defaultChecked:!0}),e.jsx(a,{...r,label:"Disabled unchecked",disabled:!0}),e.jsx(a,{...r,label:"Disabled checked",defaultChecked:!0,disabled:!0}),e.jsx(a,{...r,label:"Error state",error:!0})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option label',
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Additional description text',
    label: 'Option with description'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    label: 'Invalid option'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    alignItems: 'center',
    display: 'flex',
    gap: '24px'
  }}>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...props} size="sm" defaultChecked />
        <span>sm</span>
      </div>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...props} size="md" defaultChecked />
        <span>md</span>
      </div>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...props} size="lg" defaultChecked />
        <span>lg</span>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Radio {...props} label="Unchecked" />
      <Radio {...props} label="Checked" defaultChecked />
      <Radio {...props} label="Disabled unchecked" disabled />
      <Radio {...props} label="Disabled checked" defaultChecked disabled />
      <Radio {...props} label="Error state" error />
    </div>
}`,...p.parameters?.docs?.source}}};const y=["Default","Checked","WithLabel","WithDescription","Disabled","DisabledChecked","Error","Sizes","States"];export{t as Checked,s as Default,d as Disabled,i as DisabledChecked,c as Error,n as Sizes,p as States,o as WithDescription,l as WithLabel,y as __namedExportsOrder,f as default};
