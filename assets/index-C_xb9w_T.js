import{N as p,R,H as t}from"./iframe-Co-vi7Ap.js";import{c as h}from"./clsx-B-dksMZM.js";import{I as x}from"./Icon-CnuxmT2f.js";import{P as v}from"./index-DvrHzDjT.js";import{u as M}from"./useLocale-Dqgqwf-N.js";import{g as D}from"./getVariantClassName-CyGiRg96.js";import{i as W}from"./isValidReactNode-ccyhQD_M.js";const T="Select",B="bottom start";var N=(r=>(r.OPTION="Select.Option",r))(N||{});const U="_root_t7wta_7",V="_disabled_t7wta_28",F="_invalid_t7wta_35",J="_sizeSm_t7wta_39",X="_sizeMd_t7wta_45",$="_sizeLg_t7wta_51",G="_displayText_t7wta_57",H="_displayTextPlaceholder_t7wta_64",Y="_indicators_t7wta_68",K="_clearButton_t7wta_74",Q="_chevron_t7wta_92",Z="_optionsList_t7wta_103",ee="_noOptions_t7wta_112",te="_option_t7wta_103",ne="_optionSelected_t7wta_132",se="_optionDisabled_t7wta_138",ae="_optionLabel_t7wta_146",oe="_checkbox_t7wta_153",le="_checkboxChecked_t7wta_165",n={root:U,disabled:V,invalid:F,sizeSm:J,sizeMd:X,sizeLg:$,displayText:G,displayTextPlaceholder:H,indicators:Y,clearButton:K,chevron:Q,optionsList:Z,noOptions:ee,option:te,optionSelected:ne,optionDisabled:se,optionLabel:ae,checkbox:oe,checkboxChecked:le},g=r=>{const{children:b,clearable:k=!1,disabled:c=!1,invalid:O=!1,multiple:a=!1,onChange:o,options:_,placeholder:z,size:j="md",value:l}=r,[L,w]=p.useState(!1),S=M(),m=p.useMemo(()=>{if(!b)return _??[];const e=[],s=[N.OPTION];return R.Children.forEach(b,f=>{if(W(s,f,!1)){const d=f,i=d.props.children,I=typeof i=="string"?i:typeof i=="number"||typeof i=="boolean"?String(i):"";e.push({disabled:d.props.disabled,label:I,value:d.props.value})}}),e.length>0?e:_??[]},[b,_]),u=a?m.filter(e=>l?.includes(e.value)):m.filter(e=>e.value===l),C=u.length>0?u.map(e=>e.label).join(", "):z??S.Select.placeholder,P=p.useCallback(e=>{if(!e.disabled&&o)if(a){const s=l??[],d=s.includes(e.value)?s.filter(i=>i!==e.value):[...s,e.value];o(d)}else o(e.value),w(!1)},[a,o,l]),q=p.useCallback(e=>{e.stopPropagation(),o&&o(a?[]:"")},[a,o]),E=p.useCallback(e=>a?l?.includes(e)??!1:l===e,[a,l]),A=h(n.root,D("size",j,n),c&&n.disabled,O&&n.invalid);return t.jsxs(v,{onOpenChange:w,open:L,placement:B,children:[t.jsx(v.Trigger,{children:t.jsxs("div",{"aria-disabled":c,"aria-invalid":O,className:A,role:"combobox",tabIndex:c?-1:0,onClick:c?e=>e.stopPropagation():void 0,children:[t.jsx("span",{className:h(n.displayText,!u.length&&n.displayTextPlaceholder),children:C}),t.jsxs("span",{className:n.indicators,children:[k&&u.length>0&&!c&&t.jsx("button",{"aria-label":S.Select.clear,className:n.clearButton,onClick:q,tabIndex:-1,type:"button",children:t.jsx(x,{name:"x",size:14})}),t.jsx("span",{className:n.chevron,children:t.jsx(x,{name:"chevron-down",size:16})})]})]})}),t.jsx(v.Content,{padding:!1,children:t.jsxs("ul",{"aria-label":C,className:n.optionsList,role:"listbox",children:[m.length===0&&t.jsx("li",{className:n.noOptions,children:S.Select.noOptions}),m.map(e=>{const s=E(e.value);return t.jsxs("li",{"aria-disabled":e.disabled,"aria-selected":s,className:h(n.option,s&&n.optionSelected,e.disabled&&n.optionDisabled),onClick:()=>{P(e)},role:"option",children:[a&&t.jsx("span",{className:h(n.checkbox,s&&n.checkboxChecked),children:s&&t.jsx(x,{name:"check",size:12,strokeWidth:3})}),t.jsx("span",{className:n.optionLabel,children:e.label})]},e.value)})]})})]})};g.displayName=T;g.__docgenInfo={description:`Select component. A dropdown selector built on top of Popover.

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
\`\`\``,methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"ISelectOption"}],raw:"ISelectOption[]"},description:`Array of options to display in the dropdown.

Use this for props-driven mode.
For JSX composition mode, pass \`<Select.Option>\` children instead.`},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Currently selected value(s). For single select — string, for multiple — string[]."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no option is selected."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple options can be selected."},size:{required:!1,tsType:{name:"literal",value:"`${ESelectSize.SM | ESelectSize.MD | ESelectSize.LG}`"},description:"Select size. Default: `'md'`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the select is disabled."},clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the select value can be cleared."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the select is in an invalid state."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"JSX composition children.\nWhen provided with `<SelectOption>` elements, they are used\nas the option data source instead of the `options` prop."}}};const y=({children:r})=>t.jsx(t.Fragment,{children:r});y.displayName=`${T}.Option`;y.__docgenInfo={description:`Select Option sub-component for JSX composition mode.

Used as \`<Select.Option>\` child of \`<Select>\`.
Acts as a data carrier — does not render any DOM itself.

@example
\`\`\`tsx
<Select value={val} onChange={setVal}>
  <Select.Option value="1">Option 1</Select.Option>
  <Select.Option value="2" disabled>Option 2</Select.Option>
</Select>
\`\`\``,methods:[],props:{value:{required:!0,tsType:{name:"string"},description:"Option value."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the option is disabled."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Option label (display text)."}}};const ie=g;ie.Option=y;export{ie as S};
