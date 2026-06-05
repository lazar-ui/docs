import{N as u,H as e,R as L}from"./iframe-DLB2Hu3F.js";import{c as D}from"./clsx-B-dksMZM.js";import{i as q}from"./isValidReactNode-BzQ3T0yK.js";import"./camelCase-BTsvIAkU.js";import{R as W}from"./Radio-DOEmga7_.js";import"./preload-helper-PPVm8Dsz.js";import"./getVariantClassName-8orE4ulh.js";const V=u.createContext(null),H=()=>u.useContext(V),j="RadioGroup";var T=(r=>(r.ITEM=`${j}.Item`,r))(T||{}),x=(r=>(r.VERTICAL="vertical",r.HORIZONTAL="horizontal",r))(x||{});const M="_root_16per_9",P="_disabled_16per_16",k="_error_16per_19",w="_legend_16per_19",U="_directionVertical_16per_22",F="_group_16per_22",K="_directionHorizontal_16per_25",l={root:M,disabled:P,error:k,legend:w,directionVertical:U,group:F,directionHorizontal:K},Y=[T.ITEM],y=r=>{const{children:a,name:s,value:t,defaultValue:p,onChange:c,direction:n=x.VERTICAL,label:m,error:b=!1,disabled:R=!1,className:O}=r,i=t!==void 0,[B,S]=u.useState(p);let _;i?_=t:_=B;const E=u.useCallback(d=>{i||S(d),c?.(d)},[i,c]),N=d=>q(Y,d)?d:null,z=D(l.root,{[l.directionHorizontal]:n===x.HORIZONTAL,[l.directionVertical]:n===x.VERTICAL,[l.disabled]:R,[l.error]:b},O);return e.jsx(V.Provider,{value:{disabled:R,error:b,name:s,onChange:E,value:_},children:e.jsxs("fieldset",{className:z,children:[m&&e.jsx("legend",{className:l.legend,children:m}),e.jsx("div",{className:l.group,children:L.Children.map(a,N)})]})})};y.displayName=j;y.__docgenInfo={description:`RadioGroup component. Manages the state of a group of radio buttons and provides
a11y via a \`<fieldset>\` and \`<legend>\`.

Supports controlled (\`value\` + \`onChange\`) and uncontrolled (\`defaultValue\`) modes.

Uses compound component pattern via \`<RadioGroup.Item>\`.

@example
\`\`\`tsx
// Uncontrolled
<RadioGroup name="color" defaultValue="red" onChange={(v) => console.log(v)}>
  <RadioGroup.Item value="red" label="Red" />
  <RadioGroup.Item value="green" label="Green" />
  <RadioGroup.Item value="blue" label="Blue" />
</RadioGroup>
\`\`\`

@example
\`\`\`tsx
// Controlled with horizontal layout
<RadioGroup name="size" value={size} onChange={setSize} direction="horizontal">
  <RadioGroup.Item value="sm" label="Small" />
  <RadioGroup.Item value="md" label="Medium" />
  <RadioGroup.Item value="lg" label="Large" />
</RadioGroup>
\`\`\`

@example
\`\`\`tsx
// With label, error and disabled state
<RadioGroup name="option" label="Choose one" error disabled>
  <RadioGroup.Item value="a" label="Option A" />
  <RadioGroup.Item value="b" label="Option B" />
</RadioGroup>
\`\`\``,methods:[],displayName:"RadioGroup",props:{name:{required:!1,tsType:{name:"string"},description:"Name attribute passed to all radio inputs in the group."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value."},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value for uncontrolled mode."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when the selected value changes."},direction:{required:!1,tsType:{name:"ERadioGroupDirection"},description:"Layout direction: vertical (default) or horizontal."},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text displayed above the radio group."},error:{required:!1,tsType:{name:"boolean"},description:"When true, all radios in the group show error state."},disabled:{required:!1,tsType:{name:"boolean"},description:"When true, all radios in the group are disabled."},className:{required:!1,tsType:{name:"string"},description:"Additional class name for the root element."}}};const A=r=>{const{value:a,onChange:s,disabled:t,error:p,...c}=r,n=H(),m=n?n.value!==void 0?a===n.value:!1:void 0,b=t!==void 0?t:n?.disabled,R=p!==void 0?p:n?.error,O=i=>{n?.onChange?.(i.target.value),s?.(i)};return e.jsx(W,{...c,checked:m,disabled:b,error:R,name:n?.name,value:a,onChange:O})};A.displayName=`${j}.Item`;A.__docgenInfo={description:'RadioGroup.Item component. Must be a direct child of `<RadioGroup>`.\n\nAccepts all Radio props except `name` (inherited from the group).\nThe `checked` state and `onChange` handler are managed by the parent RadioGroup.\n\n@example\n```tsx\n<RadioGroup name="color" defaultValue="red">\n  <RadioGroup.Item value="red" label="Red" />\n  <RadioGroup.Item value="green" label="Green" />\n  <RadioGroup.Item value="blue" label="Blue" disabled />\n</RadioGroup>\n```',methods:[],props:{value:{required:!0,tsType:{name:"string"},description:"The value of the radio button. Required for group integration."}},composes:["Omit"]};const o=y;o.Item=A;const{fn:Z}=__STORYBOOK_MODULE_TEST__,re={title:"Kit/Components/RadioGroup",component:o,subcomponents:{"RadioGroup.Item":o.Item},parameters:{layout:"centered"},argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"},type:{summary:"vertical | horizontal"}}},disabled:{control:"boolean",table:{type:{summary:"boolean"}}},error:{control:"boolean",table:{type:{summary:"boolean"}}},label:{control:{type:"text"}}},args:{name:"option",onChange:Z()},tags:["autodocs"]},v={render:function(a){return e.jsxs(o,{...a,label:"Choose an option",children:[e.jsx(o.Item,{value:"a",label:"Option A"}),e.jsx(o.Item,{value:"b",label:"Option B"}),e.jsx(o.Item,{value:"c",label:"Option C"})]})}},h={render:function(a){return e.jsxs(o,{...a,direction:"horizontal",label:"Choose an option",children:[e.jsx(o.Item,{value:"a",label:"Option A"}),e.jsx(o.Item,{value:"b",label:"Option B"}),e.jsx(o.Item,{value:"c",label:"Option C"})]})}},I={render:function(a){const[s,t]=u.useState("b");return e.jsxs(o,{...a,label:"Controlled RadioGroup",value:s,onChange:t,children:[e.jsx(o.Item,{value:"a",label:"Option A"}),e.jsx(o.Item,{value:"b",label:"Option B"}),e.jsx(o.Item,{value:"c",label:"Option C"})]})}},G={render:function(a){return e.jsxs(o,{...a,label:"With default value",defaultValue:"b",children:[e.jsx(o.Item,{value:"a",label:"Option A"}),e.jsx(o.Item,{value:"b",label:"Option B"}),e.jsx(o.Item,{value:"c",label:"Option C"})]})}},f={render:function(a){return e.jsxs(o,{...a,label:"Select a plan",error:!0,children:[e.jsx(o.Item,{value:"free",label:"Free",description:"Basic features"}),e.jsx(o.Item,{value:"pro",label:"Pro",description:"Advanced features"}),e.jsx(o.Item,{value:"enterprise",label:"Enterprise",description:"Custom solution"})]})}},g={render:function(a){return e.jsxs(o,{...a,label:"Disabled group",disabled:!0,children:[e.jsx(o.Item,{value:"a",label:"Option A"}),e.jsx(o.Item,{value:"b",label:"Option B"}),e.jsx(o.Item,{value:"c",label:"Option C"})]})}},C={render:function(a){return e.jsxs(o,{...a,label:"With disabled item",children:[e.jsx(o.Item,{value:"a",label:"Option A"}),e.jsx(o.Item,{value:"b",label:"Option B",disabled:!0}),e.jsx(o.Item,{value:"c",label:"Option C"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <RadioGroup {...props} label="Choose an option">
        <RadioGroup.Item value="a" label="Option A" />
        <RadioGroup.Item value="b" label="Option B" />
        <RadioGroup.Item value="c" label="Option C" />
      </RadioGroup>;
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <RadioGroup {...props} direction="horizontal" label="Choose an option">
        <RadioGroup.Item value="a" label="Option A" />
        <RadioGroup.Item value="b" label="Option B" />
        <RadioGroup.Item value="c" label="Option C" />
      </RadioGroup>;
  }
}`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState('b');
    return <RadioGroup {...props} label="Controlled RadioGroup" value={value} onChange={setValue}>
        <RadioGroup.Item value="a" label="Option A" />
        <RadioGroup.Item value="b" label="Option B" />
        <RadioGroup.Item value="c" label="Option C" />
      </RadioGroup>;
  }
}`,...I.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <RadioGroup {...props} label="With default value" defaultValue="b">
        <RadioGroup.Item value="a" label="Option A" />
        <RadioGroup.Item value="b" label="Option B" />
        <RadioGroup.Item value="c" label="Option C" />
      </RadioGroup>;
  }
}`,...G.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <RadioGroup {...props} label="Select a plan" error>
        <RadioGroup.Item value="free" label="Free" description="Basic features" />
        <RadioGroup.Item value="pro" label="Pro" description="Advanced features" />
        <RadioGroup.Item value="enterprise" label="Enterprise" description="Custom solution" />
      </RadioGroup>;
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <RadioGroup {...props} label="Disabled group" disabled>
        <RadioGroup.Item value="a" label="Option A" />
        <RadioGroup.Item value="b" label="Option B" />
        <RadioGroup.Item value="c" label="Option C" />
      </RadioGroup>;
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <RadioGroup {...props} label="With disabled item">
        <RadioGroup.Item value="a" label="Option A" />
        <RadioGroup.Item value="b" label="Option B" disabled />
        <RadioGroup.Item value="c" label="Option C" />
      </RadioGroup>;
  }
}`,...C.parameters?.docs?.source}}};const ne=["Vertical","Horizontal","Controlled","WithDefaultValue","WithLabelAndError","Disabled","DisabledItem"];export{I as Controlled,g as Disabled,C as DisabledItem,h as Horizontal,v as Vertical,G as WithDefaultValue,f as WithLabelAndError,ne as __namedExportsOrder,re as default};
