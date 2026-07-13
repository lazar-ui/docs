import{N as h,H as e}from"./iframe-DsJxp_Iw.js";import{c as T}from"./clsx-B-dksMZM.js";import{g as I}from"./getVariantClassName-DbP7vlfM.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-DG4N1IdV.js";const M="Slider",q="_root_16h6h_24",E="_disabled_16h6h_31",k="_container_16h6h_37",L="_input_16h6h_45",R="_track_16h6h_58",O="_range_16h6h_69",W="_thumb_16h6h_79",P="_value_16h6h_120",$="_sizeSm_16h6h_131",A="_sizeMd_16h6h_140",U="_sizeLg_16h6h_149",a={root:q,disabled:E,container:k,input:L,track:R,range:O,thumb:W,value:P,sizeSm:$,sizeMd:A,sizeLg:U},n=r=>{const{value:i,defaultValue:o=0,disabled:u=!1,max:l=100,min:t=0,onChange:v,showValue:V=!1,size:_="md",step:z=1}=r,x=i!==void 0,[D,j]=h.useState(o);let s;x?s=i:s=D;const b=h.useMemo(()=>l===t?0:(s-t)/(l-t)*100,[s,t,l]),C=h.useCallback(N=>{const S=Number(N.target.value);x||j(S),v?.(S)},[x,v]),w=T(a.root,I("size",_,a),u&&a.disabled);return e.jsxs("div",{className:w,children:[e.jsxs("div",{className:a.container,children:[e.jsx("input",{"aria-valuemax":l,"aria-valuemin":t,"aria-valuenow":s,className:a.input,disabled:u,max:l,min:t,onChange:C,role:"slider",step:z,type:"range",value:s}),e.jsxs("div",{className:a.track,"aria-hidden":"true",children:[e.jsx("div",{className:a.range,style:{width:`${b}%`}}),e.jsx("div",{className:a.thumb,style:{left:`${b}%`}})]})]}),V&&e.jsx("span",{className:a.value,children:s})]})};n.displayName=M;n.__docgenInfo={description:'Slider component. Renders a range slider for selecting a numeric value.\n\nSupports controlled (`value` + `onChange`) and uncontrolled (`defaultValue`) modes.\nUses a hidden native `<input type="range">` for accessibility and keyboard interaction.\n\n@example\n```tsx\n<Slider />\n<Slider defaultValue={50} />\n<Slider value={75} onChange={(v) => setValue(v)} />\n<Slider min={0} max={10} step={2} />\n<Slider size="lg" showValue />\n<Slider disabled />\n```',methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"Current value. Default: 0."},defaultValue:{required:!1,tsType:{name:"number"},description:"Default value for uncontrolled mode."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when value changes."},min:{required:!1,tsType:{name:"number"},description:"Minimum value. Default: 0."},max:{required:!1,tsType:{name:"number"},description:"Maximum value. Default: 100."},step:{required:!1,tsType:{name:"number"},description:"Step increment. Default: 1."},size:{required:!1,tsType:{name:"literal",value:"`${ESliderSize.SM | ESliderSize.MD | ESliderSize.LG}`"},description:"Size. Default: 'md'."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the slider."},showValue:{required:!1,tsType:{name:"boolean"},description:"Whether to show the value label next to the slider. Default: false."}}};const{fn:Y}=__STORYBOOK_MODULE_TEST__,J={title:"@lazar-ui／kit/Components/Slider",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},showValue:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},min:{control:{type:"number"},table:{defaultValue:{summary:"0"},type:{summary:"number"}}},max:{control:{type:"number"},table:{defaultValue:{summary:"100"},type:{summary:"number"}}},step:{control:{type:"number"},table:{defaultValue:{summary:"1"},type:{summary:"number"}}},value:{control:{type:"number"},table:{type:{summary:"number"}}},defaultValue:{control:{type:"number"},table:{type:{summary:"number"}}},onChange:{table:{type:{summary:"(value: number) => void"}}}},args:{size:"md",onChange:Y()}},d={args:{defaultValue:50}},m={render:function(i){const[o,u]=h.useState(42);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",minWidth:"280px"},children:[e.jsx(n,{...i,value:o,onChange:u}),e.jsxs("span",{style:{fontSize:"14px",color:"var(--lui-color-text-secondary)"},children:["Value: ",o]})]})}},c={render:r=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx(n,{...r,size:"sm",defaultValue:25}),e.jsx("span",{children:"sm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx(n,{...r,size:"md",defaultValue:50}),e.jsx("span",{children:"md"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx(n,{...r,size:"lg",defaultValue:75}),e.jsx("span",{children:"lg"})]})]})},p={args:{defaultValue:60,disabled:!0}},f={args:{defaultValue:0,min:-50,max:50,step:5}},g={args:{defaultValue:70,showValue:!0}},y={args:{defaultValue:.5,min:0,max:1,step:.1,showValue:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState(42);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      minWidth: '280px'
    }}>
        <Slider {...props} value={value} onChange={setValue} />
        <span style={{
        fontSize: '14px',
        color: 'var(--lui-color-text-secondary)'
      }}>
          Value: {value}
        </span>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center'
    }}>
        <Slider {...props} size="sm" defaultValue={25} />
        <span>sm</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center'
    }}>
        <Slider {...props} size="md" defaultValue={50} />
        <span>md</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center'
    }}>
        <Slider {...props} size="lg" defaultValue={75} />
        <span>lg</span>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 60,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    min: -50,
    max: 50,
    step: 5
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 70,
    showValue: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 0.5,
    min: 0,
    max: 1,
    step: 0.1,
    showValue: true
  }
}`,...y.parameters?.docs?.source}}};const Q=["Default","Controlled","Sizes","Disabled","CustomRange","WithValueLabel","PrecisionStep"];export{m as Controlled,f as CustomRange,d as Default,p as Disabled,y as PrecisionStep,c as Sizes,g as WithValueLabel,Q as __namedExportsOrder,J as default};
