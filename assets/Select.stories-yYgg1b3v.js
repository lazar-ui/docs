import{N as m,H as t}from"./iframe-DTf61cKK.js";import{c as g}from"./clsx-B-dksMZM.js";import{I as w}from"./Icon-D-wB4xF4.js";import{P as z}from"./index-DzhoWCua.js";import{u as R}from"./useLocale-BDgp39Dq.js";import{g as A}from"./getVariantClassName-BtYZqNNS.js";import"./preload-helper-PPVm8Dsz.js";import"./Overlay-wdr8rOMH.js";import"./index-SANY6O_1.js";import"./index-Bn5FzSev.js";import"./useOverlayTriggerState-Bur4O2qH.js";import"./useOverlayPosition-BWqbalal.js";import"./camelCase-DCNeodzq.js";const M="Select",q="bottom start",B="_root_t7wta_7",W="_disabled_t7wta_28",U="_invalid_t7wta_35",F="_sizeSm_t7wta_39",G="_sizeMd_t7wta_45",K="_sizeLg_t7wta_51",Y="_displayText_t7wta_57",H="_displayTextPlaceholder_t7wta_64",$="_indicators_t7wta_68",J="_clearButton_t7wta_74",Q="_chevron_t7wta_92",X="_optionsList_t7wta_103",Z="_noOptions_t7wta_112",ee="_option_t7wta_103",te="_optionSelected_t7wta_132",se="_optionDisabled_t7wta_138",ae="_optionLabel_t7wta_146",ne="_checkbox_t7wta_153",oe="_checkboxChecked_t7wta_165",s={root:B,disabled:W,invalid:U,sizeSm:F,sizeMd:G,sizeLg:K,displayText:Y,displayTextPlaceholder:H,indicators:$,clearButton:J,chevron:Q,optionsList:X,noOptions:Z,option:ee,optionSelected:te,optionDisabled:se,optionLabel:ae,checkbox:ne,checkboxChecked:oe},o=l=>{const{clearable:a=!1,disabled:n=!1,invalid:r=!1,multiple:i=!1,onChange:c,options:b,placeholder:T,size:k="md",value:u}=l,[L,j]=m.useState(!1),C=R(),h=i?b.filter(e=>u?.includes(e.value)):b.filter(e=>e.value===u),O=h.length>0?h.map(e=>e.label).join(", "):T??C.select.placeholder,N=m.useCallback(e=>{if(!e.disabled&&c)if(i){const p=u??[],E=p.includes(e.value)?p.filter(P=>P!==e.value):[...p,e.value];c(E)}else c(e.value),j(!1)},[i,c,u]),D=m.useCallback(e=>{e.stopPropagation(),c&&c(i?[]:"")},[i,c]),I=m.useCallback(e=>i?u?.includes(e)??!1:u===e,[i,u]),V=g(s.root,A("size",k,s),n&&s.disabled,r&&s.invalid);return t.jsxs(z,{onOpenChange:j,open:L,placement:q,children:[t.jsx(z.Trigger,{children:t.jsxs("div",{"aria-disabled":n,"aria-invalid":r,className:V,role:"combobox",tabIndex:n?-1:0,onClick:n?e=>e.stopPropagation():void 0,children:[t.jsx("span",{className:g(s.displayText,!h.length&&s.displayTextPlaceholder),children:O}),t.jsxs("span",{className:s.indicators,children:[a&&h.length>0&&!n&&t.jsx("button",{"aria-label":C.select.clear,className:s.clearButton,onClick:D,tabIndex:-1,type:"button",children:t.jsx(w,{name:"x",size:14})}),t.jsx("span",{className:s.chevron,children:t.jsx(w,{name:"chevronDown",size:16})})]})]})}),t.jsx(z.Content,{padding:!1,children:t.jsxs("ul",{"aria-label":O,className:s.optionsList,role:"listbox",children:[b.length===0&&t.jsx("li",{className:s.noOptions,children:C.select.noOptions}),b.map(e=>{const p=I(e.value);return t.jsxs("li",{"aria-disabled":e.disabled,"aria-selected":p,className:g(s.option,p&&s.optionSelected,e.disabled&&s.optionDisabled),onClick:()=>{N(e)},role:"option",children:[i&&t.jsx("span",{className:g(s.checkbox,p&&s.checkboxChecked),children:p&&t.jsx(w,{name:"check",size:12,strokeWidth:3})}),t.jsx("span",{className:s.optionLabel,children:e.label})]},e.value)})]})})]})};o.displayName=M;o.__docgenInfo={description:`Select component. A dropdown selector built on top of Popover.

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
\`\`\``,methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ISelectOption"}],raw:"ISelectOption[]"},description:"Array of options to display in the dropdown."},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Currently selected value(s). For single select — string, for multiple — string[]."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no option is selected."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple options can be selected."},size:{required:!1,tsType:{name:"literal",value:"`${ESelectSize.SM | ESelectSize.MD | ESelectSize.LG}`"},description:"Select size. Default: `'md'`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the select is disabled."},clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the select value can be cleared."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the select is in an invalid state."}}};const{fn:le}=__STORYBOOK_MODULE_TEST__,d=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Orange",value:"orange"}],ye={title:"Kit/Components/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},invalid:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearable:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiple:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}}},args:{size:"md",placeholder:"Select an option",onChange:le()}},_={render:function(a){const[n,r]=m.useState("");return t.jsx(o,{...a,options:d,value:n,onChange:r})}},v={render:l=>t.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[t.jsx(o,{...l,options:d,size:"sm"}),t.jsx(o,{...l,options:d,size:"md"}),t.jsx(o,{...l,options:d,size:"lg"})]})},f={render:function(a){return t.jsx(o,{...a,options:d,value:"banana",disabled:!0})}},x={render:function(a){return t.jsx(o,{...a,options:d,value:"",invalid:!0})}},y={render:function(a){const[n,r]=m.useState("banana");return t.jsx(o,{...a,options:d,value:n,onChange:r,clearable:!0})}},S={render:function(a){const[n,r]=m.useState(["apple","cherry"]);return t.jsx(o,{...a,options:d,value:n,onChange:r,multiple:!0})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<string>('');
    return <Select {...props} options={defaultOptions} value={value} onChange={setValue} />;
  }
}`,..._.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Select {...props} options={defaultOptions} size="sm" />
      <Select {...props} options={defaultOptions} size="md" />
      <Select {...props} options={defaultOptions} size="lg" />
    </div>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const Se=["Default","Sizes","Disabled","Invalid","Clearable","Multiple"];export{y as Clearable,_ as Default,f as Disabled,x as Invalid,S as Multiple,v as Sizes,Se as __namedExportsOrder,ye as default};
