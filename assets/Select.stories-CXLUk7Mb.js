import{N as m,H as t}from"./iframe-__PV-dJp.js";import{c as g}from"./clsx-B-dksMZM.js";import{P as w}from"./index-9VUNlpI4.js";import{u as P}from"./useLocale-BsuStE0W.js";import{g as R}from"./getVariantClassName-B6sDZ9j_.js";import"./preload-helper-PPVm8Dsz.js";import"./Overlay-BBlNxJ4y.js";import"./index-kAkRoNAC.js";import"./index-BtmiAMd1.js";import"./useOverlayTriggerState-spl-KdXP.js";import"./useOverlayPosition-CGE_UhqP.js";import"./camelCase-DYfZbbag.js";const I="Select",A="bottom start",q="_root_t7wta_7",B="_disabled_t7wta_28",W="_invalid_t7wta_35",U="_sizeSm_t7wta_39",F="_sizeMd_t7wta_45",G="_sizeLg_t7wta_51",K="_displayText_t7wta_57",Y="_displayTextPlaceholder_t7wta_64",H="_indicators_t7wta_68",$="_clearButton_t7wta_74",J="_chevron_t7wta_92",Q="_optionsList_t7wta_103",X="_noOptions_t7wta_112",Z="_option_t7wta_103",ee="_optionSelected_t7wta_132",te="_optionDisabled_t7wta_138",se="_optionLabel_t7wta_146",ae="_checkbox_t7wta_153",ne="_checkboxChecked_t7wta_165",s={root:q,disabled:B,invalid:W,sizeSm:U,sizeMd:F,sizeLg:G,displayText:K,displayTextPlaceholder:Y,indicators:H,clearButton:$,chevron:J,optionsList:Q,noOptions:X,option:Z,optionSelected:ee,optionDisabled:te,optionLabel:se,checkbox:ae,checkboxChecked:ne},o=l=>{const{clearable:a=!1,disabled:n=!1,invalid:r=!1,multiple:i=!1,onChange:c,options:h,placeholder:z,size:O="md",value:u}=l,[L,j]=m.useState(!1),C=P(),b=i?h.filter(e=>u?.includes(e.value)):h.filter(e=>e.value===u),k=b.length>0?b.map(e=>e.label).join(", "):z??C.select.placeholder,T=m.useCallback(e=>{if(!e.disabled&&c)if(i){const d=u??[],E=d.includes(e.value)?d.filter(M=>M!==e.value):[...d,e.value];c(E)}else c(e.value),j(!1)},[i,c,u]),N=m.useCallback(e=>{e.stopPropagation(),c&&c(i?[]:"")},[i,c]),D=m.useCallback(e=>i?u?.includes(e)??!1:u===e,[i,u]),V=g(s.root,R("size",O,s),n&&s.disabled,r&&s.invalid);return t.jsxs(w,{onOpenChange:j,open:L,placement:A,children:[t.jsx(w.Trigger,{children:t.jsxs("div",{"aria-disabled":n,"aria-invalid":r,className:V,role:"combobox",tabIndex:n?-1:0,onClick:n?e=>e.stopPropagation():void 0,children:[t.jsx("span",{className:g(s.displayText,!b.length&&s.displayTextPlaceholder),children:k}),t.jsxs("span",{className:s.indicators,children:[a&&b.length>0&&!n&&t.jsx("button",{"aria-label":C.select.clear,className:s.clearButton,onClick:N,tabIndex:-1,type:"button",children:"✕"}),t.jsx("svg",{"aria-hidden":"true",className:s.chevron,height:"16",viewBox:"0 0 16 16",width:"16",children:t.jsx("path",{d:"M4 6 L8 10 L12 6",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})})]})]})}),t.jsx(w.Content,{padding:!1,children:t.jsxs("ul",{"aria-label":k,className:s.optionsList,role:"listbox",children:[h.length===0&&t.jsx("li",{className:s.noOptions,children:C.select.noOptions}),h.map(e=>{const d=D(e.value);return t.jsxs("li",{"aria-disabled":e.disabled,"aria-selected":d,className:g(s.option,d&&s.optionSelected,e.disabled&&s.optionDisabled),onClick:()=>{T(e)},role:"option",children:[i&&t.jsx("span",{className:g(s.checkbox,d&&s.checkboxChecked),children:d&&t.jsx("svg",{"aria-hidden":"true",height:"12",viewBox:"0 0 12 12",width:"12",children:t.jsx("path",{d:"M2 6 L5 9 L10 3",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}),t.jsx("span",{className:s.optionLabel,children:e.label})]},e.value)})]})})]})};o.displayName=I;o.__docgenInfo={description:`Select component. A dropdown selector built on top of Popover.

Supports single and multiple selection, clearable option, and
three sizes (\`sm\`, \`md\`, \`lg\`).

@example
\`\`\`tsx
const [value, setValue] = useState('');

<Select
  options={[
    { label: 'Users', value: 'users' },
    { label: 'Orders', value: 'orders' },
  ]}
  value={value}
  onChange={setValue}
  placeholder="Select data source"
/>
\`\`\``,methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ISelectOption"}],raw:"ISelectOption[]"},description:"Array of options to display in the dropdown."},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Currently selected value(s). For single select — string, for multiple — string[]."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no option is selected."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple options can be selected."},size:{required:!1,tsType:{name:"literal",value:"`${ESelectSize.SM | ESelectSize.MD | ESelectSize.LG}`"},description:"Select size. Default: `'md'`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the select is disabled."},clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the select value can be cleared."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the select is in an invalid state."}}};const{fn:oe}=__STORYBOOK_MODULE_TEST__,p=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Orange",value:"orange"}],fe={title:"Kit/Components/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},invalid:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearable:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiple:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}}},args:{size:"md",placeholder:"Select an option",onChange:oe()}},v={render:function(a){const[n,r]=m.useState("");return t.jsx(o,{...a,options:p,value:n,onChange:r})}},_={render:l=>t.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[t.jsx(o,{...l,options:p,size:"sm"}),t.jsx(o,{...l,options:p,size:"md"}),t.jsx(o,{...l,options:p,size:"lg"})]})},f={render:function(a){return t.jsx(o,{...a,options:p,value:"banana",disabled:!0})}},x={render:function(a){return t.jsx(o,{...a,options:p,value:"",invalid:!0})}},y={render:function(a){const[n,r]=m.useState("banana");return t.jsx(o,{...a,options:p,value:n,onChange:r,clearable:!0})}},S={render:function(a){const[n,r]=m.useState(["apple","cherry"]);return t.jsx(o,{...a,options:p,value:n,onChange:r,multiple:!0})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('');
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Select {...props} options={defaultOptions} size="sm" />
      <Select {...props} options={defaultOptions} size="md" />
      <Select {...props} options={defaultOptions} size="lg" />
    </div>
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Select {...props} options={defaultOptions} value="banana" disabled />;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Select {...props} options={defaultOptions} value="" invalid />;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('banana');
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} clearable />;
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string[]>(['apple', 'cherry']);
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} multiple />;
  }
}`,...S.parameters?.docs?.source}}};const xe=["Default","Sizes","Disabled","Invalid","Clearable","Multiple"];export{y as Clearable,v as Default,f as Disabled,x as Invalid,S as Multiple,_ as Sizes,xe as __namedExportsOrder,fe as default};
