import{N as h,H as e}from"./iframe-DLdpy6-y.js";import{c as _}from"./clsx-B-dksMZM.js";import{g as z}from"./getVariantClassName-DR0bhogv.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-CqHBbmbu.js";const j="Checkbox",S="_root_1g8k7_16",I="_disabled_1g8k7_24",D="_checkbox_1g8k7_27",E="_input_1g8k7_31",L="_indeterminate_1g8k7_31",N="_invalid_1g8k7_34",R="_sizeSm_1g8k7_37",M="_label_1g8k7_49",T="_sizeMd_1g8k7_54",q="_sizeLg_1g8k7_71",t={root:S,disabled:I,checkbox:D,input:E,indeterminate:L,invalid:N,sizeSm:R,label:M,sizeMd:T,sizeLg:q},n=s=>{const{ref:a,children:u,indeterminate:p,invalid:g=!1,size:b="md",onChange:f,...k}=s,x=h.useRef(null),C=h.useCallback(r=>{x.current=r,typeof a=="function"?a(r):a&&(a.current=r)},[a]);h.useEffect(()=>{x.current&&(x.current.indeterminate=!!p)},[p]);const y=_(t.root,z("size",b,t),{[t.disabled]:k.disabled===!0,[t.indeterminate]:p,[t.invalid]:g}),v=r=>{f?.(r.target.checked)};return e.jsxs("label",{className:y,children:[e.jsx("input",{ref:C,className:t.input,onChange:v,type:"checkbox",...k}),e.jsx("span",{className:t.checkbox}),u&&e.jsx("span",{className:t.label,children:u})]})};n.displayName=j;n.__docgenInfo={description:"Checkbox component. Renders a native checkbox with a custom visual indicator, label, and support for indeterminate state.\n\n@example\n```tsx\n<Checkbox>Accept terms</Checkbox>\n```\n\n@example\n```tsx\n<Checkbox indeterminate checked={false}>\n  Select all\n</Checkbox>\n```",methods:[],displayName:"Checkbox",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref to the native input element."},indeterminate:{required:!1,tsType:{name:"boolean"},description:'When true, the checkbox shows a dash instead of a checkmark. Useful for "select all" states.'},invalid:{required:!1,tsType:{name:"boolean"},description:"When true, the checkbox border turns red to indicate a validation error."},size:{required:!1,tsType:{name:"literal",value:"`${ECheckboxSize.SM | ECheckboxSize.MD | ECheckboxSize.LG}`"},description:"Checkbox size: sm, md, lg."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change handler, receives the new checked state."}},composes:["Omit"]};const O={argTypes:{checked:{control:"boolean"},children:{control:{type:"text"}},disabled:{control:"boolean"},indeterminate:{control:"boolean"},invalid:{control:"boolean"},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}}},args:{children:"Label",size:"md"},component:n,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/Checkbox"},i={},c={args:{defaultChecked:!0}},o={args:{indeterminate:!0}},l={args:{children:void 0}},d={render:s=>e.jsxs("div",{style:{alignItems:"center",display:"flex",gap:"24px"},children:[e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{...s,size:"sm"}),e.jsx("span",{children:"sm"})]}),e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{...s,size:"md",defaultChecked:!0}),e.jsx("span",{children:"md"})]}),e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{...s,size:"lg"}),e.jsx("span",{children:"lg"})]})]})},m={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{...s,checked:!0,children:"Checked"}),e.jsx(n,{...s,children:"Unchecked"}),e.jsx(n,{...s,indeterminate:!0,children:"Indeterminate"}),e.jsx(n,{...s,disabled:!0,children:"Disabled"}),e.jsx(n,{...s,invalid:!0,children:"Invalid"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: undefined
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        <Checkbox {...props} size="sm" />
        <span>sm</span>
      </div>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Checkbox {...props} size="md" defaultChecked />
        <span>md</span>
      </div>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Checkbox {...props} size="lg" />
        <span>lg</span>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox {...props} checked>
        Checked
      </Checkbox>
      <Checkbox {...props}>Unchecked</Checkbox>
      <Checkbox {...props} indeterminate>
        Indeterminate
      </Checkbox>
      <Checkbox {...props} disabled>
        Disabled
      </Checkbox>
      <Checkbox {...props} invalid>
        Invalid
      </Checkbox>
    </div>
}`,...m.parameters?.docs?.source}}};const V=["Default","Checked","Indeterminate","WithoutLabel","Sizes","States"];export{c as Checked,i as Default,o as Indeterminate,d as Sizes,m as States,l as WithoutLabel,V as __namedExportsOrder,O as default};
