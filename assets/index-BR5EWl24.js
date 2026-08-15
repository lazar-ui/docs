import{N as p,R,H as t}from"./iframe-vKSYs7iX.js";import{c as h}from"./clsx-B-dksMZM.js";import{I as f}from"./Icon-wH_OFNsQ.js";import{P as x}from"./index-Ourx4N3_.js";import{u as M}from"./useLocale-BF9KSZJS.js";import{g as D}from"./getVariantClassName-B9bEubGl.js";import{i as W}from"./isValidReactNode-Cx5jzVor.js";const T="Select",B="bottom start";var N=(r=>(r.OPTION="Select.Option",r))(N||{});const U="_root_y2ki0_7",V="_disabled_y2ki0_28",F="_invalid_y2ki0_35",J="_sizeSm_y2ki0_39",X="_sizeMd_y2ki0_45",$="_sizeLg_y2ki0_51",G="_displayText_y2ki0_57",H="_displayTextPlaceholder_y2ki0_64",Y="_indicators_y2ki0_68",K="_clearButton_y2ki0_74",Q="_chevron_y2ki0_92",Z="_optionsList_y2ki0_104",ee="_noOptions_y2ki0_113",te="_option_y2ki0_104",ne="_optionSelected_y2ki0_133",se="_optionDisabled_y2ki0_139",oe="_optionLabel_y2ki0_147",ie="_checkbox_y2ki0_154",ae="_checkboxChecked_y2ki0_166",n={root:U,disabled:V,invalid:F,sizeSm:J,sizeMd:X,sizeLg:$,displayText:G,displayTextPlaceholder:H,indicators:Y,clearButton:K,chevron:Q,optionsList:Z,noOptions:ee,option:te,optionSelected:ne,optionDisabled:se,optionLabel:oe,checkbox:ie,checkboxChecked:ae},v=r=>{const{children:b,clearable:z=!1,disabled:c=!1,invalid:k=!1,multiple:o=!1,onChange:i,options:_,placeholder:j,size:L="md",value:a}=r,[P,O]=p.useState(!1),y=M(),m=p.useMemo(()=>{if(!b)return _??[];const e=[],s=[N.OPTION];return R.Children.forEach(b,S=>{if(W(s,S,!1)){const d=S,l=d.props.children,I=typeof l=="string"?l:typeof l=="number"||typeof l=="boolean"?String(l):"";e.push({disabled:d.props.disabled,label:I,value:d.props.value})}}),e.length>0?e:_??[]},[b,_]),u=o?m.filter(e=>a?.includes(e.value)):m.filter(e=>e.value===a),C=u.length>0?u.map(e=>e.label).join(", "):j??y.Select.placeholder,w=p.useCallback(e=>{if(!e.disabled&&i)if(o){const s=a??[],d=s.includes(e.value)?s.filter(l=>l!==e.value):[...s,e.value];i(d)}else i(e.value),O(!1)},[o,i,a]),q=p.useCallback(e=>{e.stopPropagation(),i&&i(o?[]:"")},[o,i]),E=p.useCallback(e=>o?a?.includes(e)??!1:a===e,[o,a]),A=h(n.root,D("size",L,n),c&&n.disabled,k&&n.invalid);return t.jsxs(x,{onOpenChange:O,open:P,placement:B,children:[t.jsx(x.Trigger,{children:t.jsxs("div",{"aria-disabled":c,"aria-invalid":k,className:A,role:"combobox",tabIndex:c?-1:0,onClick:c?e=>e.stopPropagation():void 0,children:[t.jsx("span",{className:h(n.displayText,!u.length&&n.displayTextPlaceholder),children:C}),t.jsxs("span",{className:n.indicators,children:[z&&u.length>0&&!c&&t.jsx("button",{"aria-label":y.Select.clear,className:n.clearButton,onClick:q,tabIndex:-1,type:"button",children:t.jsx(f,{name:"x",size:14})}),t.jsx("span",{className:n.chevron,children:t.jsx(f,{name:"chevron-down",size:16})})]})]})}),t.jsx(x.Content,{padding:!1,children:t.jsxs("ul",{"aria-label":C,className:n.optionsList,role:"listbox",children:[m.length===0&&t.jsx("li",{className:n.noOptions,children:y.Select.noOptions}),m.map(e=>{const s=E(e.value);return t.jsxs("li",{"aria-disabled":e.disabled,"aria-selected":s,className:h(n.option,s&&n.optionSelected,e.disabled&&n.optionDisabled),onClick:()=>{w(e)},role:"option",children:[o&&t.jsx("span",{className:h(n.checkbox,s&&n.checkboxChecked),children:s&&t.jsx(f,{name:"check",size:12,strokeWidth:3})}),t.jsx("span",{className:n.optionLabel,children:e.label})]},e.value)})]})})]})};v.displayName=T;v.__docgenInfo={description:`Select component. A dropdown selector built on top of Popover.

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
For JSX composition mode, pass \`<Select.Option>\` children instead.`},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Currently selected value(s). For single select — string, for multiple — string[]."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no option is selected."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple options can be selected."},size:{required:!1,tsType:{name:"literal",value:"`${ESelectSize.SM | ESelectSize.MD | ESelectSize.LG}`"},description:"Select size. Default: `'md'`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the select is disabled."},clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the select value can be cleared."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the select is in an invalid state."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"JSX composition children.\nWhen provided with `<SelectOption>` elements, they are used\nas the option data source instead of the `options` prop."}}};const g=({children:r})=>t.jsx(t.Fragment,{children:r});g.displayName=`${T}.Option`;g.__docgenInfo={description:`Select Option sub-component for JSX composition mode.

Used as \`<Select.Option>\` child of \`<Select>\`.
Acts as a data carrier — does not render any DOM itself.

@example
\`\`\`tsx
<Select value={val} onChange={setVal}>
  <Select.Option value="1">Option 1</Select.Option>
  <Select.Option value="2" disabled>Option 2</Select.Option>
</Select>
\`\`\``,methods:[],props:{value:{required:!0,tsType:{name:"string"},description:"Option value."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the option is disabled."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Option label (display text)."}}};const le=v;le.Option=g;export{le as S};
