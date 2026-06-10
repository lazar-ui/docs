import{N as m,H as r}from"./iframe-Cwt5rX67.js";import{S as t}from"./Select-CkwbQ0JX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Ds97qs4o.js";import"./index-ezJuZyBO.js";import"./Overlay-_MHJUnEI.js";import"./index-d829YFoO.js";import"./index-g0fa_nLN.js";import"./useOverlayTriggerState-aZR9QFjf.js";import"./useOverlayPosition-B5wFiO6K.js";import"./useLocale-DuWPMZ5G.js";import"./getVariantClassName-lhFQwO5U.js";import"./camelCase-CYkttgyc.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,o=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Orange",value:"orange"}],D={title:"@lazar-ui／kit/Components/Select",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},invalid:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearable:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiple:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}}},args:{size:"md",placeholder:"Select an option",onChange:b()}},l={render:function(e){const[n,s]=m.useState("");return r.jsx(t,{...e,options:o,value:n,onChange:s})}},p={render:a=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(t,{...a,options:o,size:"sm"}),r.jsx(t,{...a,options:o,size:"md"}),r.jsx(t,{...a,options:o,size:"lg"})]})},u={render:function(e){return r.jsx(t,{...e,options:o,value:"banana",disabled:!0})}},i={render:function(e){return r.jsx(t,{...e,options:o,value:"",invalid:!0})}},c={render:function(e){const[n,s]=m.useState("banana");return r.jsx(t,{...e,options:o,value:n,onChange:s,clearable:!0})}},d={render:function(e){const[n,s]=m.useState(["apple","cherry"]);return r.jsx(t,{...e,options:o,value:n,onChange:s,multiple:!0})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('');
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} />;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Select {...props} options={defaultOptions} size="sm" />
      <Select {...props} options={defaultOptions} size="md" />
      <Select {...props} options={defaultOptions} size="lg" />
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Select {...props} options={defaultOptions} value="banana" disabled />;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Select {...props} options={defaultOptions} value="" invalid />;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('banana');
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} clearable />;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string[]>(['apple', 'cherry']);
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} multiple />;
  }
}`,...d.parameters?.docs?.source}}};const E=["Default","Sizes","Disabled","Invalid","Clearable","Multiple"];export{c as Clearable,l as Default,u as Disabled,i as Invalid,d as Multiple,p as Sizes,E as __namedExportsOrder,D as default};
