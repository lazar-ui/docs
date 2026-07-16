import{N as s,H as e}from"./iframe-n4ZyvbqO.js";import{S as a}from"./index-BbqvU-kF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BVU08tC6.js";import"./index-ClW3zIFP.js";import"./Overlay-8muANxs-.js";import"./index-BlbWyHuc.js";import"./index-DzkDVS6K.js";import"./useOverlayTriggerState-hRqYR5OL.js";import"./useOverlayPosition-D0N0D4DR.js";import"./useLocale-BzlI8loT.js";import"./getVariantClassName-CW3tvtKI.js";import"./camelCase-CAJeNIN1.js";import"./isValidReactNode-CBPB8prL.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Orange",value:"orange"}],D={title:"@lazar-ui／kit/Components/Select",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},invalid:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearable:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiple:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}}},args:{size:"md",placeholder:"Select an option",onChange:h()}},p={render:function(r){const[t,n]=s.useState("");return e.jsx(a,{...r,options:l,value:t,onChange:n})}},i={render:o=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{...o,options:l,size:"sm"}),e.jsx(a,{...o,options:l,size:"md"}),e.jsx(a,{...o,options:l,size:"lg"})]})},u={render:function(r){return e.jsx(a,{...r,options:l,value:"banana",disabled:!0})}},c={render:function(r){return e.jsx(a,{...r,options:l,value:"",invalid:!0})}},d={render:function(r){const[t,n]=s.useState("banana");return e.jsx(a,{...r,options:l,value:t,onChange:n,clearable:!0})}},m={render:function(r){const[t,n]=s.useState(["apple","cherry"]);return e.jsx(a,{...r,options:l,value:t,onChange:n,multiple:!0})}},S={render:function(r){const[t,n]=s.useState("");return e.jsxs(a,{...r,value:t,onChange:n,children:[e.jsx(a.Option,{value:"apple",children:"Apple"}),e.jsx(a.Option,{value:"banana",children:"Banana"}),e.jsx(a.Option,{value:"cherry",children:"Cherry"}),e.jsx(a.Option,{value:"grape",children:"Grape"}),e.jsx(a.Option,{value:"orange",children:"Orange"})]})}},v={render:function(r){const[t,n]=s.useState("");return e.jsxs(a,{...r,value:t,onChange:n,children:[e.jsx(a.Option,{value:"apple",children:"Apple"}),e.jsx(a.Option,{value:"banana",disabled:!0,children:"Banana (disabled)"}),e.jsx(a.Option,{value:"cherry",children:"Cherry"})]})}},O={render:function(r){const[t,n]=s.useState(["apple","cherry"]);return e.jsxs(a,{...r,value:t,onChange:n,multiple:!0,children:[e.jsx(a.Option,{value:"apple",children:"Apple"}),e.jsx(a.Option,{value:"banana",children:"Banana"}),e.jsx(a.Option,{value:"cherry",children:"Cherry"}),e.jsx(a.Option,{value:"grape",children:"Grape"}),e.jsx(a.Option,{value:"orange",children:"Orange"})]})}},g={render:function(r){const[t,n]=s.useState("");return e.jsxs(a,{...r,value:t,onChange:n,children:[e.jsx(a.Option,{value:"apple",children:"Apple"}),e.jsx(a.Option,{value:"banana",disabled:!0,children:"Banana"}),e.jsx(a.Option,{value:"cherry",children:"Cherry"}),e.jsx(a.Option,{value:"grape",disabled:!0,children:"Grape"}),e.jsx(a.Option,{value:"orange",children:"Orange"})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('');
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Select {...props} options={defaultOptions} size="sm" />
      <Select {...props} options={defaultOptions} size="md" />
      <Select {...props} options={defaultOptions} size="lg" />
    </div>
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Select {...props} options={defaultOptions} value="banana" disabled />;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Select {...props} options={defaultOptions} value="" invalid />;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('banana');
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} clearable />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string[]>(['apple', 'cherry']);
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} multiple />;
  }
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('');
    return <Select {...props} value={value} onChange={setValue}>
        <Select.Option value="apple">Apple</Select.Option>
        <Select.Option value="banana">Banana</Select.Option>
        <Select.Option value="cherry">Cherry</Select.Option>
        <Select.Option value="grape">Grape</Select.Option>
        <Select.Option value="orange">Orange</Select.Option>
      </Select>;
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('');
    return <Select {...props} value={value} onChange={setValue}>
        <Select.Option value="apple">Apple</Select.Option>
        <Select.Option value="banana" disabled>
          Banana (disabled)
        </Select.Option>
        <Select.Option value="cherry">Cherry</Select.Option>
      </Select>;
  }
}`,...v.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string[]>(['apple', 'cherry']);
    return <Select {...props} value={value} onChange={setValue} multiple>
        <Select.Option value="apple">Apple</Select.Option>
        <Select.Option value="banana">Banana</Select.Option>
        <Select.Option value="cherry">Cherry</Select.Option>
        <Select.Option value="grape">Grape</Select.Option>
        <Select.Option value="orange">Orange</Select.Option>
      </Select>;
  }
}`,...O.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('');
    return <Select {...props} value={value} onChange={setValue}>
        <Select.Option value="apple">Apple</Select.Option>
        <Select.Option value="banana" disabled>
          Banana
        </Select.Option>
        <Select.Option value="cherry">Cherry</Select.Option>
        <Select.Option value="grape" disabled>
          Grape
        </Select.Option>
        <Select.Option value="orange">Orange</Select.Option>
      </Select>;
  }
}`,...g.parameters?.docs?.source}}};const G=["Default","Sizes","Disabled","Invalid","Clearable","Multiple","JSXMode","JSXModeDisabledOption","JSXModeMultiple","JSXModeMixed"];export{d as Clearable,p as Default,u as Disabled,c as Invalid,S as JSXMode,v as JSXModeDisabledOption,g as JSXModeMixed,O as JSXModeMultiple,m as Multiple,i as Sizes,G as __namedExportsOrder,D as default};
