import{N as r,H as e,R as P}from"./iframe-16V6KrfE.js";import{c as E}from"./clsx-B-dksMZM.js";import{g as L}from"./getVariantClassName-BE0gBw9M.js";import{i as w}from"./isValidReactNode-CUbPtuQj.js";import"./camelCase-Ct2evvX9.js";import"./preload-helper-PPVm8Dsz.js";const A=r.createContext(null),k=()=>{const t=r.useContext(A);if(!t)throw new Error("useRadioContext should be used inside Radio component");return t},B=t=>{const{children:i,name:n,value:l,defaultValue:d,onChange:c,size:p,disabled:f,invalid:s}=t,R=r.useId(),g=n??R,u=l!==void 0,[m,I]=r.useState(d),T=u?l:m,V=r.useCallback(h=>{u||I(h),c?.(h)},[u,c]);return e.jsx(A.Provider,{value:{disabled:f,invalid:s,name:g,onChange:V,size:p,value:T},children:i})};B.__docgenInfo={description:"",methods:[],displayName:"Provider",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!0,tsType:{name:"literal",value:"`${ERadioSize.SM | ERadioSize.MD | ERadioSize.LG}`"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},invalid:{required:!0,tsType:{name:"boolean"},description:""}}};const N="Radio",H="_item_fgl4n_3",$="_disabled_fgl4n_12",F="_invalid_fgl4n_17",W="_radio_fgl4n_17",G="_input_fgl4n_20",U="_content_fgl4n_63",Y="_label_fgl4n_70",K="_description_fgl4n_75",J="_sizeSm_fgl4n_113",Q="_sizeMd_fgl4n_130",X="_sizeLg_fgl4n_147",o={item:H,disabled:$,invalid:F,radio:W,input:G,content:U,label:Y,description:K,sizeSm:J,sizeMd:Q,sizeLg:X},q=t=>{const{ref:i,children:n,value:l,description:d,disabled:c,onChange:p,...f}=t,s=k(),R=r.useRef(null),g=s.size??"md",u=s.value!==void 0?l===s.value:void 0,m=c!==void 0?c:s.disabled,I=s.invalid===!0,T=r.useCallback(v=>{R.current=v,typeof i=="function"?i(v):i&&(i.current=v)},[i]),V=v=>{s.onChange?.(v.target.value),p?.(v)},h=E(o.item,L("size",g,o),{[o.disabled]:m,[o.invalid]:I});return e.jsxs("label",{className:h,children:[e.jsx("input",{ref:T,className:o.input,type:"radio",checked:u,disabled:m,"aria-invalid":I||void 0,name:s.name,value:l,onChange:V,...f}),e.jsx("span",{className:o.radio,"aria-hidden":"true"}),(n||d)&&e.jsxs("span",{className:o.content,children:[n&&e.jsx("span",{className:o.label,children:n}),d&&e.jsx("span",{className:o.description,children:d})]})]})};q.displayName=`${N}.Item`;q.__docgenInfo={description:"",methods:[],props:{value:{required:!0,tsType:{name:"string"},description:"The value of the radio button. Required for group integration."},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Description text displayed below the option label."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref to the native input element."}},composes:["TNativeInputProps"]};var M=(t=>(t.ITEM=`${N}.Item`,t))(M||{});const Z="_root_18qal_33",ee="_vertical_18qal_40",ae="_group_18qal_40",te="_horizontal_18qal_43",x={root:Z,vertical:ee,group:ae,horizontal:te},ie=[M.ITEM],D=t=>{const{children:i,name:n,value:l,defaultValue:d,onChange:c,vertical:p=!0,size:f="md",disabled:s=!1,invalid:R=!1}=t,g=m=>w(ie,m)?m:null,u=E(x.root,{[x.horizontal]:!p,[x.vertical]:p});return e.jsx(B,{name:n,value:l,defaultValue:d,onChange:c,size:f,disabled:s,invalid:R,children:e.jsx("fieldset",{className:u,children:e.jsx("div",{className:x.group,children:P.Children.map(i,g)})})})};D.displayName=N;D.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{name:{required:!1,tsType:{name:"string"},description:"Name attribute passed to all radio inputs in the group."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value."},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value for uncontrolled mode."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when the selected value changes."},vertical:{required:!1,tsType:{name:"boolean"},description:"Vertical layout. Set false for horizontal. Default: true."},size:{required:!1,tsType:{name:"literal",value:"`${ERadioSize.SM | ERadioSize.MD | ERadioSize.LG}`"},description:"Radio size: sm, md, lg. Default: 'md'. Applied to all items in the group."},disabled:{required:!1,tsType:{name:"boolean"},description:"When true, all radios in the group are disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"When true, all radio items show error styling."}}};const a=D;a.Item=q;const{fn:se}=__STORYBOOK_MODULE_TEST__,ue={title:"@lazar-ui／kit/Components/Radio",component:a,subcomponents:{"Radio.Item":a.Item},parameters:{layout:"centered"},argTypes:{vertical:{control:"boolean",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:"boolean",table:{type:{summary:"boolean"}}},invalid:{control:"boolean",table:{type:{summary:"boolean"}}},name:{control:"text",table:{type:{summary:"string"}}},value:{control:"text",table:{type:{summary:"string"}}},defaultValue:{control:"text",table:{type:{summary:"string"}}},onChange:{table:{type:{summary:"(value: string) => void"}}}},args:{onChange:se()},tags:["autodocs"]},b={render:t=>e.jsxs(a,{...t,children:[e.jsx(a.Item,{value:"a",description:"Basic features",children:"Free"}),e.jsx(a.Item,{value:"b",description:"Advanced features",children:"Pro"}),e.jsx(a.Item,{value:"c",description:"Custom solution",children:"Enterprise"})]})},y={render:t=>e.jsxs(a,{...t,vertical:!1,children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})},_={render:t=>{const[i,n]=r.useState("b");return e.jsxs(a,{...t,value:i,onChange:n,children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})}},C={render:t=>e.jsxs(a,{...t,defaultValue:"b",children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})},j={render:t=>e.jsxs(a,{...t,disabled:!0,children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})},z={render:t=>e.jsxs(a,{...t,children:[e.jsx(a.Item,{value:"a",children:"Option A"}),e.jsx(a.Item,{value:"b",disabled:!0,children:"Option B"}),e.jsx(a.Item,{value:"c",children:"Option C"})]})},O={render:t=>e.jsxs(a,{...t,invalid:!0,children:[e.jsx(a.Item,{value:"a",description:"Basic features",children:"Free"}),e.jsx(a.Item,{value:"b",description:"Advanced features",children:"Pro"})]})},S={render:t=>e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:e.jsx(a,{...t,size:"sm",defaultValue:"a",children:e.jsx(a.Item,{value:"a",children:"sm"})})}),e.jsx("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:e.jsx(a,{...t,size:"md",defaultValue:"a",children:e.jsx(a.Item,{value:"a",children:"md"})})}),e.jsx("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"8px"},children:e.jsx(a,{...t,size:"lg",defaultValue:"a",children:e.jsx(a.Item,{value:"a",children:"lg"})})})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
