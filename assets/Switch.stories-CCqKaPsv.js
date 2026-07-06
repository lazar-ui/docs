import{H as e}from"./iframe-BA3APmPd.js";import{c as S}from"./clsx-B-dksMZM.js";import{g as y}from"./getVariantClassName-DAuwWUc7.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-DVHjKwSo.js";const k="Switch",w="_root_1v9jq_24",v="_disabled_1v9jq_33",C="_input_1v9jq_39",_="_track_1v9jq_52",j="_thumb_1v9jq_64",z="_label_1v9jq_75",D="_sizeSm_1v9jq_102",q="_sizeMd_1v9jq_112",E="_sizeLg_1v9jq_122",t={root:w,disabled:v,input:C,track:_,thumb:j,label:z,sizeSm:D,sizeMd:q,sizeLg:E},a=s=>{const{children:p,checked:h,defaultChecked:u,disabled:m=!1,onChange:g,size:f="md",...x}=s,b=S(t.root,y("size",f,t),m&&t.disabled);return e.jsxs("label",{className:b,children:[e.jsx("input",{...x,checked:h,className:t.input,defaultChecked:u,disabled:m,onChange:g,role:"switch",type:"checkbox"}),e.jsx("span",{className:t.track,"aria-hidden":"true",children:e.jsx("span",{className:t.thumb})}),p&&e.jsx("span",{className:t.label,children:p})]})};a.displayName=k;a.__docgenInfo={description:`Switch component. Renders a toggle switch for on/off settings.

Supports controlled (\`checked\` + \`onChange\`) and uncontrolled (\`defaultChecked\`) modes.
The underlying element is a native checkbox for accessibility.

@example
\`\`\`tsx
<Switch />
<Switch defaultChecked />
<Switch size="lg" />
<Switch checked={isEnabled} onChange={handleChange} />
<Switch disabled />
<Switch>Enable notifications</Switch>
\`\`\``,methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"literal",value:"`${ESwitchSize.SM | ESwitchSize.MD | ESwitchSize.LG}`"},description:"Size. Default: 'md'."},checked:{required:!1,tsType:{name:"boolean"},description:"When true, the switch is checked (on). Use for controlled mode."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Initial checked state for uncontrolled mode."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the switch, preventing user interaction."},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Callback invoked when the switch value changes."}},composes:["TNativeInputProps"]};const H={argTypes:{checked:{control:"boolean",table:{type:{summary:"boolean"}}},children:{control:{type:"text"}},defaultChecked:{control:"boolean",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",table:{type:{summary:"boolean"}}},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}}},args:{size:"md"},component:a,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/Switch"},n={},r={args:{defaultChecked:!0}},i={args:{children:"Enable notifications"}},c={args:{disabled:!0}},l={args:{defaultChecked:!0,disabled:!0}},d={render:s=>e.jsxs("div",{style:{alignItems:"center",display:"flex",gap:"24px"},children:[e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{...s,size:"sm"}),e.jsx("span",{children:"sm"})]}),e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{...s,size:"md",defaultChecked:!0}),e.jsx("span",{children:"md"})]}),e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{...s,size:"lg"}),e.jsx("span",{children:"lg"})]})]})},o={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{...s,children:"Unchecked"}),e.jsx(a,{...s,defaultChecked:!0,children:"Checked"}),e.jsx(a,{...s,disabled:!0,children:"Disabled off"}),e.jsx(a,{...s,disabled:!0,defaultChecked:!0,children:"Disabled on"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Enable notifications'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: true
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
        <Switch {...props} size="sm" />
        <span>sm</span>
      </div>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Switch {...props} size="md" defaultChecked />
        <span>md</span>
      </div>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Switch {...props} size="lg" />
        <span>lg</span>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Switch {...props}>Unchecked</Switch>
      <Switch {...props} defaultChecked>
        Checked
      </Switch>
      <Switch {...props} disabled>
        Disabled off
      </Switch>
      <Switch {...props} disabled defaultChecked>
        Disabled on
      </Switch>
    </div>
}`,...o.parameters?.docs?.source}}};const R=["Default","Checked","WithLabel","Disabled","DisabledChecked","Sizes","States"];export{r as Checked,n as Default,c as Disabled,l as DisabledChecked,d as Sizes,o as States,i as WithLabel,R as __namedExportsOrder,H as default};
