import{H as e,N as m}from"./iframe-DAizPdsd.js";import{c as L}from"./clsx-B-dksMZM.js";import{g as D}from"./getVariantClassName-CaRKDZqT.js";import{I as E}from"./Icon--d939Lwz.js";import{u as B}from"./useLocale-BhIPe7YK.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-DEehH585.js";const h={INPUT:"Input",INPUT_EMAIL:"InputEmail",INPUT_NUMBER:"InputNumber",INPUT_PASSWORD:"InputPassword",INPUT_PHONE:"InputPhone"},W="_root_12mbu_17",H="_invalid_12mbu_36",U="_disabled_12mbu_42",q="_sizeSm_12mbu_56",O="_sizeMd_12mbu_60",A="_sizeLg_12mbu_64",F="_control_12mbu_68",$="_before_12mbu_101",V="_after_12mbu_102",K="_togglePassword_12mbu_110",i={root:W,invalid:H,disabled:U,sizeSm:q,sizeMd:O,sizeLg:A,control:F,before:$,after:V,togglePassword:K},p=r=>{const{ref:s,invalid:t=!1,size:n="md",before:o,after:a,className:d,onChange:c,onBlur:u,onFocus:j,...f}=r,z=L(i.root,D("size",n,i),{[i.disabled]:f.disabled===!0,[i.invalid]:t},d),M=C=>{c?.(C.target.value)};return e.jsxs("div",{className:z,children:[o&&e.jsx("span",{className:i.before,children:o}),e.jsx("input",{ref:s,className:i.control,onChange:M,onBlur:u,onFocus:j,...f}),a&&e.jsx("span",{className:i.after,children:a})]})};p.displayName=h.INPUT;p.__docgenInfo={description:'Base Input component. Renders a native `<input>` with support for `before`/`after` slots, sizing, and invalid/disabled states.\nAll native `<input>` attributes are passed through automatically.\n\n@example\n```tsx\n<Input placeholder="Enter text" />\n<Input size="lg" invalid placeholder="Error" />\n<Input before={<SearchIcon />} placeholder="Search" />\n```',methods:[],displayName:"Input",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},before:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},after:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}},composes:["Omit"]};function Y(r){const s=r.replace(/\D/g,"").slice(0,11);if(!s)return"";let t="+7";return s.length>1&&(t+=` (${s.slice(1,4)}`),s.length>=4&&(t+=`) ${s.slice(4,7)}`),s.length>=7&&(t+=`-${s.slice(7,9)}`),s.length>=9&&(t+=`-${s.slice(9,11)}`),t}function G(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}const T=r=>{const{ref:s,before:t,onBlur:n,invalid:o,...a}=r,[d,c]=m.useState(!1),u=m.useCallback(f=>{c(!0),n?.(f)},[n]),j=o||d&&a.value!=null&&!G(a.value);return e.jsx(p,{ref:s,type:"email",before:t??e.jsx(E,{name:"mail",size:16}),invalid:j,onBlur:u,...a})};T.displayName=h.INPUT_EMAIL;T.__docgenInfo={description:'Email Input variant. Renders `<Input type="email">` with an `@` icon `before` slot and built-in email validation on blur.\n\nValidation uses a regex check (`/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/`) and sets `invalid` state if the value is non-empty and invalid after blur.\nConsumer can still pass `invalid` explicitly to force error state.\n\n@example\n```tsx\n<Input.Email placeholder="user@example.com" />\n```',methods:[],displayName:"InputEmail",composes:["Omit"]};const k=r=>{const{ref:s,...t}=r;return e.jsx(p,{ref:s,type:"number",inputMode:"numeric",...t})};k.displayName=h.INPUT_NUMBER;k.__docgenInfo={description:'Number Input variant. Renders `<Input type="number">` with `inputMode="numeric"`, hideable native spinner, and optional `min`/`max`/`step`.\n\n@example\n```tsx\n<Input.Number placeholder="0" />\n<Input.Number min={0} max={100} step={5} />\n```',methods:[],displayName:"InputNumber",props:{min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""}},composes:["Omit"]};const R=r=>{const{ref:s,after:t,...n}=r,o=B(),[a,d]=m.useState(!1),c=m.useCallback(()=>d(u=>!u),[]);return e.jsx(p,{ref:s,type:a?"text":"password",after:t??e.jsx("button",{type:"button",className:i.togglePassword,onClick:c,tabIndex:-1,"aria-label":a?o.input.passwordHide:o.input.passwordShow,children:a?e.jsx(E,{name:"eye-off",size:16}):e.jsx(E,{name:"eye",size:16})}),...n})};R.displayName=h.INPUT_PASSWORD;R.__docgenInfo={description:'Password Input variant. Renders an input with a built-in eye toggle in the `after` slot to show/hide the password.\n\nToggles between `type="password"` and `type="text"` on click. Consumer can override the default eye toggle by passing a custom `after`.\n\n@example\n```tsx\n<Input.Password placeholder="Password" />\n```',methods:[],displayName:"InputPassword",composes:["Omit"]};const S=r=>{const{ref:s,before:t,onChange:n,...o}=r,a=m.useCallback(d=>{const c=Y(d);n?.(c)},[n]);return e.jsx(p,{ref:s,type:"tel",before:t??e.jsx(E,{name:"phone",size:16}),onChange:a,...o})};S.displayName=h.INPUT_PHONE;S.__docgenInfo={description:'Phone Input variant. Renders `<Input type="tel">` with a phone icon `before` slot and automatic masking in `+7 (999) 999-99-99` format.\n\nThe mask is applied on every change via `applyMask()`. Consumer can override the default icon by passing a custom `before`.\n\n@example\n```tsx\n<Input.Phone placeholder="+7 (999) 999-99-99" />\n```',methods:[],displayName:"InputPhone",composes:["Omit"]};const l=Object.assign(p,{Email:T,Number:k,Password:R,Phone:S}),te={title:"Kit/Components/Input",component:l,parameters:{layout:"centered"},tags:["autodocs"],args:{placeholder:"Placeholder",size:"md"}},g={},x={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:[e.jsx(l,{...r,size:"sm",placeholder:"Small"}),e.jsx(l,{...r,size:"md",placeholder:"Medium"}),e.jsx(l,{...r,size:"lg",placeholder:"Large"})]})},v={args:{invalid:!0,placeholder:"Error state"}},b={args:{disabled:!0,placeholder:"Disabled"}},y={args:{before:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M8 4v4l2 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),placeholder:"With before icon"}},I={args:{after:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 12l4-4-4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),placeholder:"With after icon"}},w={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:e.jsx(l.Password,{placeholder:"Password"})})},N={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:e.jsx(l.Phone,{placeholder:"+7 (999) 999-99-99"})})},_={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:e.jsx(l.Email,{placeholder:"user@example.com"})})},P={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:e.jsx(l.Number,{placeholder:"Number"})})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input {...props} size="sm" placeholder="Small" />
      <Input {...props} size="md" placeholder="Medium" />
      <Input {...props} size="lg" placeholder="Large" />
    </div>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: 'Error state'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    before: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M8 4v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    placeholder: 'With before icon'
  }
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    after: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    placeholder: 'With after icon'
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input.Password placeholder="Password" />
    </div>
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input.Phone placeholder="+7 (999) 999-99-99" />
    </div>
}`,...N.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input.Email placeholder="user@example.com" />
    </div>
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input.Number placeholder="Number" />
    </div>
}`,...P.parameters?.docs?.source}}};const ae=["Default","Sizes","Invalid","Disabled","WithBefore","WithAfter","Password","Phone","Email","Number"];export{g as Default,b as Disabled,_ as Email,v as Invalid,P as Number,w as Password,N as Phone,x as Sizes,I as WithAfter,y as WithBefore,ae as __namedExportsOrder,te as default};
