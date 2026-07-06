import{N as r,H as e,R as P}from"./iframe-BA3APmPd.js";import{c as q}from"./clsx-B-dksMZM.js";import{g as L}from"./getVariantClassName-DAuwWUc7.js";import{i as w}from"./isValidReactNode-CipLFYty.js";import"./camelCase-DVHjKwSo.js";import"./preload-helper-PPVm8Dsz.js";const A=r.createContext(null),k=()=>{const t=r.useContext(A);if(!t)throw new Error("useRadioContext should be used inside Radio component");return t},B=t=>{const{children:i,name:o,value:l,defaultValue:d,onChange:c,size:p,disabled:f,invalid:s}=t,R=r.useId(),I=o??R,u=l!==void 0,[m,h]=r.useState(d),T=u?l:m,V=r.useCallback(g=>{u||h(g),c?.(g)},[u,c]);return e.jsx(A.Provider,{value:{disabled:f,invalid:s,name:I,onChange:V,size:p,value:T},children:i})};B.__docgenInfo={description:"",methods:[],displayName:"Provider",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!0,tsType:{name:"literal",value:"`${ERadioSize.SM | ERadioSize.MD | ERadioSize.LG}`"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},invalid:{required:!0,tsType:{name:"boolean"},description:""}}};const N="Radio",H="_item_1mf7l_3",$="_disabled_1mf7l_12",F="_invalid_1mf7l_17",W="_radio_1mf7l_17",G="_input_1mf7l_20",U="_content_1mf7l_63",Y="_label_1mf7l_70",K="_description_1mf7l_75",J="_sizeSm_1mf7l_113",Q="_sizeMd_1mf7l_130",X="_sizeLg_1mf7l_147",n={item:H,disabled:$,invalid:F,radio:W,input:G,content:U,label:Y,description:K,sizeSm:J,sizeMd:Q,sizeLg:X},D=t=>{const{ref:i,children:o,value:l,description:d,disabled:c,onChange:p,...f}=t,s=k(),R=r.useRef(null),I=s.size??"md",u=s.value!==void 0?l===s.value:void 0,m=c!==void 0?c:s.disabled,h=s.invalid===!0,T=r.useCallback(v=>{R.current=v,typeof i=="function"?i(v):i&&(i.current=v)},[i]),V=v=>{s.onChange?.(v.target.value),p?.(v)},g=q(n.item,L("size",I,n),{[n.disabled]:m,[n.invalid]:h});return e.jsxs("label",{className:g,children:[e.jsx("input",{ref:T,className:n.input,type:"radio",checked:u,disabled:m,"aria-invalid":h||void 0,name:s.name,value:l,onChange:V,...f}),e.jsx("span",{className:n.radio,"aria-hidden":"true"}),(o||d)&&e.jsxs("span",{className:n.content,children:[o&&e.jsx("span",{className:n.label,children:o}),d&&e.jsx("span",{className:n.description,children:d})]})]})};D.displayName=`${N}.Item`;D.__docgenInfo={description:"",methods:[],props:{value:{required:!0,tsType:{name:"string"},description:"The value of the radio button. Required for group integration."},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Description text displayed below the option label."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref to the native input element."}},composes:["TNativeInputProps"]};var M=(t=>(t.ITEM=`${N}.Item`,t))(M||{});const Z="_root_pott0_33",ee="_vertical_pott0_40",ae="_group_pott0_40",te="_horizontal_pott0_43",x={root:Z,vertical:ee,group:ae,horizontal:te},ie=[M.ITEM],E=t=>{const{children:i,name:o,value:l,defaultValue:d,onChange:c,vertical:p=!0,size:f="md",disabled:s=!1,invalid:R=!1}=t,I=m=>w(ie,m)?m:null,u=q(x.root,{[x.horizontal]:!p,[x.vertical]:p});return e.jsx(B,{name:o,value:l,defaultValue:d,onChange:c,size:f,disabled:s,invalid:R,children:e.jsx("fieldset",{className:u,children:e.jsx("div",{className:x.group,children:P.Children.map(i,I)})})})};E.displayName=N;E.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{name:{required:!1,tsType:{name:"string"},description:"Name attribute passed to all radio inputs in the group."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value."},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value for uncontrolled mode."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when the selected value changes."},vertical:{required:!1,tsType:{name:"boolean"},description:"Vertical layout. Set false for horizontal. Default: true."},size:{required:!1,tsType:{name:"literal",value:"`${ERadioSize.SM | ERadioSize.MD | ERadioSize.LG}`"},description:"Radio size: sm, md, lg. Default: 'md'. Applied to all items in the group."},disabled:{required:!1,tsType:{name:"boolean"},description:"When true, all radios in the group are disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"When true, all radio items show error styling."}}};const a=E;a.Item=D;const{fn:se}=__STORYBOOK_MODULE_TEST__,ue={title:"@lazar-ui／kit/Components/Radio",component:a,subcomponents:{"Radio.Item":a.Item},parameters:{layout:"centered"},argTypes:{vertical:{control:"boolean",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:"boolean",table:{type:{summary:"boolean"}}},invalid:{control:"boolean",table:{type:{summary:"boolean"}}},name:{control:"text",table:{type:{summary:"string"}}},value:{control:"text",table:{type:{summary:"string"}}},defaultValue:{control:"text",table:{type:{summary:"string"}}},onChange:{table:{type:{summary:"(value: string) => void"}}}},args:{onChange:se()},tags:["autodocs"]},b={render:t=>e.jsxs(a,{...t,children:[e.jsx(a.Item,{value:"a",description:"Basic features",children:"Free"}),e.jsx(a.Item,{value:"b",description:"Advanced features",children:"Pro"}),e.jsx(a.Item,{value:"c",description:"Custom solution",children:"Enterprise"})]})},y={render:t=>e.jsxs(a,{...t,vertical:!1,children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})},_={render:t=>{const[i,o]=r.useState("b");return e.jsxs(a,{...t,value:i,onChange:o,children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})}},C={render:t=>e.jsxs(a,{...t,defaultValue:"b",children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})},j={render:t=>e.jsxs(a,{...t,disabled:!0,children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})},z={render:t=>e.jsxs(a,{...t,children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",disabled:!0,children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})},O={render:t=>e.jsxs(a,{...t,invalid:!0,children:[e.jsx(a.Item,{value:"a",description:"Basic features",children:"Free"}),e.jsx(a.Item,{value:"b",description:"Advanced features",children:"Pro"})]})},S={render:t=>e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:e.jsx(a,{...t,size:"sm",defaultValue:"a",children:e.jsx(a.Item,{value:"a",children:"sm"})})}),e.jsx("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:e.jsx(a,{...t,size:"md",defaultValue:"a",children:e.jsx(a.Item,{value:"a",children:"md"})})}),e.jsx("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:e.jsx(a,{...t,size:"lg",defaultValue:"a",children:e.jsx(a.Item,{value:"a",children:"lg"})})})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: props => <Radio {...props}>
      <Radio.Item value="a" description="Basic features">Free</Radio.Item>
      <Radio.Item value="b" description="Advanced features">Pro</Radio.Item>
      <Radio.Item value="c" description="Custom solution">Enterprise</Radio.Item>
    </Radio>
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: props => <Radio {...props} vertical={false}>
      <Radio.Item value="a">Option A</Radio.Item>
      <Radio.Item value="b">Option B</Radio.Item>
      <Radio.Item value="c">Option C</Radio.Item>
    </Radio>
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState('b');
    return <Radio {...props} value={value} onChange={setValue}>
        <Radio.Item value="a">Option A</Radio.Item>
        <Radio.Item value="b">Option B</Radio.Item>
        <Radio.Item value="c">Option C</Radio.Item>
      </Radio>;
  }
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: props => <Radio {...props} defaultValue="b">
      <Radio.Item value="a">Option A</Radio.Item>
      <Radio.Item value="b">Option B</Radio.Item>
      <Radio.Item value="c">Option C</Radio.Item>
    </Radio>
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: props => <Radio {...props} disabled>
      <Radio.Item value="a">Option A</Radio.Item>
      <Radio.Item value="b">Option B</Radio.Item>
      <Radio.Item value="c">Option C</Radio.Item>
    </Radio>
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: props => <Radio {...props}>
      <Radio.Item value="a">Option A</Radio.Item>
      <Radio.Item value="b" disabled>Option B</Radio.Item>
      <Radio.Item value="c">Option C</Radio.Item>
    </Radio>
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: props => <Radio {...props} invalid>
      <Radio.Item value="a" description="Basic features">Free</Radio.Item>
      <Radio.Item value="b" description="Advanced features">Pro</Radio.Item>
    </Radio>
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '32px'
  }}>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...props} size="sm" defaultValue="a">
          <Radio.Item value="a">sm</Radio.Item>
        </Radio>
      </div>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...props} size="md" defaultValue="a">
          <Radio.Item value="a">md</Radio.Item>
        </Radio>
      </div>
      <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...props} size="lg" defaultValue="a">
          <Radio.Item value="a">lg</Radio.Item>
        </Radio>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}};const me=["Vertical","Horizontal","Controlled","WithDefaultValue","Disabled","DisabledItem","Invalid","Sizes"];export{_ as Controlled,j as Disabled,z as DisabledItem,y as Horizontal,O as Invalid,S as Sizes,b as Vertical,C as WithDefaultValue,me as __namedExportsOrder,ue as default};
