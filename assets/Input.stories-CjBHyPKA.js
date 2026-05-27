import{H as e,N as u}from"./iframe-Dxm6wkCs.js";import{c as W}from"./clsx-B-dksMZM.js";import{g as H}from"./getVariantClassName-Qnu0mv72.js";import{u as O}from"./useLocale-DlaTKHEV.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-Df9BNvgk.js";const h={INPUT:"Input",INPUT_EMAIL:"InputEmail",INPUT_NUMBER:"InputNumber",INPUT_PASSWORD:"InputPassword",INPUT_PHONE:"InputPhone"},U="_root_r7jxc_17",q="_invalid_r7jxc_36",A="_disabled_r7jxc_42",F="_sizeSm_r7jxc_56",V="_sizeMd_r7jxc_60",$="_sizeLg_r7jxc_64",K="_control_r7jxc_68",Y="_before_r7jxc_101",G="_after_r7jxc_102",J="_togglePassword_r7jxc_110",i={root:U,invalid:q,disabled:A,sizeSm:F,sizeMd:V,sizeLg:$,control:K,before:Y,after:G,togglePassword:J},p=r=>{const{ref:s,invalid:t=!1,size:a="md",before:o,after:n,className:c,onChange:d,onBlur:m,onFocus:P,...f}=r,L=W(i.root,H("size",a,i),{[i.disabled]:f.disabled===!0,[i.invalid]:t},c),B=D=>{d?.(D.target.value)};return e.jsxs("div",{className:L,children:[o&&e.jsx("span",{className:i.before,children:o}),e.jsx("input",{ref:s,className:i.control,onChange:B,onBlur:m,onFocus:P,...f}),n&&e.jsx("span",{className:i.after,children:n})]})};p.displayName=h.INPUT;p.__docgenInfo={description:'Base Input component. Renders a native `<input>` with support for `before`/`after` slots, sizing, and invalid/disabled states.\nAll native `<input>` attributes are passed through automatically.\n\n@example\n```tsx\n<Input placeholder="Enter text" />\n<Input size="lg" invalid placeholder="Error" />\n<Input before={<SearchIcon />} placeholder="Search" />\n```',methods:[],displayName:"Input",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},before:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},after:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const C=()=>e.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 3c0-.6.4-1 1-1h1.5a1 1 0 01.9.6l.7 1.5a1 1 0 01-.1 1.1L5 6a8.6 8.6 0 004 4l1-1a1 1 0 011.1-.2l1.5.7a1 1 0 01.6.9V13a1 1 0 01-1 1C6.5 14 2 9.5 2 3z",fill:"currentColor"})});C.__docgenInfo={description:"",methods:[],displayName:"PhoneIcon"};const z=()=>e.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0l4 3 4-3m0 8V6.5L8 9.5 4 6.5V12",fill:"currentColor"})});z.__docgenInfo={description:"",methods:[],displayName:"EmailIcon"};const R=()=>e.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 3C4.5 3 1.5 5.5 0 8c1.5 2.5 4.5 5 8 5s6.5-2.5 8-5c-1.5-2.5-4.5-5-8-5zm0 8a3 3 0 110-6 3 3 0 010 6zm0-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",fill:"currentColor"})});R.__docgenInfo={description:"",methods:[],displayName:"EyeIcon"};const S=()=>e.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.5 2L14 12.5M6.5 5.5A3 3 0 0010 9m4.5-1A9.5 9.5 0 0014 8c-1.5-2.5-4.5-5-8-5-.7 0-1.4.1-2 .3m-2.6 1.2C.8 5.2 0 8 0 8c1.5 2.5 4.5 5 8 5 1.5 0 2.9-.4 4.1-1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"})});S.__docgenInfo={description:"",methods:[],displayName:"EyeOffIcon"};function Q(r){const s=r.replace(/\D/g,"").slice(0,11);if(!s)return"";let t="+7";return s.length>1&&(t+=` (${s.slice(1,4)}`),s.length>=4&&(t+=`) ${s.slice(4,7)}`),s.length>=7&&(t+=`-${s.slice(7,9)}`),s.length>=9&&(t+=`-${s.slice(9,11)}`),t}function X(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}const E=r=>{const{ref:s,before:t,onBlur:a,invalid:o,...n}=r,[c,d]=u.useState(!1),m=u.useCallback(f=>{d(!0),a?.(f)},[a]),P=o||c&&n.value!=null&&!X(n.value);return e.jsx(p,{ref:s,type:"email",before:t??e.jsx(z,{}),invalid:P,onBlur:m,...n})};E.displayName=h.INPUT_EMAIL;E.__docgenInfo={description:'Email Input variant. Renders `<Input type="email">` with an `@` icon `before` slot and built-in email validation on blur.\n\nValidation uses a regex check (`/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/`) and sets `invalid` state if the value is non-empty and invalid after blur.\nConsumer can still pass `invalid` explicitly to force error state.\n\n@example\n```tsx\n<Input.Email placeholder="user@example.com" />\n```',methods:[],displayName:"InputEmail",composes:["Omit"]};const k=r=>{const{ref:s,...t}=r;return e.jsx(p,{ref:s,type:"number",inputMode:"numeric",...t})};k.displayName=h.INPUT_NUMBER;k.__docgenInfo={description:'Number Input variant. Renders `<Input type="number">` with `inputMode="numeric"`, hideable native spinner, and optional `min`/`max`/`step`.\n\n@example\n```tsx\n<Input.Number placeholder="0" />\n<Input.Number min={0} max={100} step={5} />\n```',methods:[],displayName:"InputNumber",props:{min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""}},composes:["Omit"]};const M=r=>{const{ref:s,after:t,...a}=r,o=O(),[n,c]=u.useState(!1),d=u.useCallback(()=>c(m=>!m),[]);return e.jsx(p,{ref:s,type:n?"text":"password",after:t??e.jsx("button",{type:"button",className:i.togglePassword,onClick:d,tabIndex:-1,"aria-label":n?o.input.passwordHide:o.input.passwordShow,children:n?e.jsx(S,{}):e.jsx(R,{})}),...a})};M.displayName=h.INPUT_PASSWORD;M.__docgenInfo={description:'Password Input variant. Renders an input with a built-in eye toggle in the `after` slot to show/hide the password.\n\nToggles between `type="password"` and `type="text"` on click. Consumer can override the default eye toggle by passing a custom `after`.\n\n@example\n```tsx\n<Input.Password placeholder="Password" />\n```',methods:[],displayName:"InputPassword",composes:["Omit"]};const T=r=>{const{ref:s,before:t,onChange:a,...o}=r,n=u.useCallback(c=>{const d=Q(c);a?.(d)},[a]);return e.jsx(p,{ref:s,type:"tel",before:t??e.jsx(C,{}),onChange:n,...o})};T.displayName=h.INPUT_PHONE;T.__docgenInfo={description:'Phone Input variant. Renders `<Input type="tel">` with a phone icon `before` slot and automatic masking in `+7 (999) 999-99-99` format.\n\nThe mask is applied on every change via `applyMask()`. Consumer can override the default icon by passing a custom `before`.\n\n@example\n```tsx\n<Input.Phone placeholder="+7 (999) 999-99-99" />\n```',methods:[],displayName:"InputPhone",composes:["Omit"]};const l=Object.assign(p,{Email:E,Number:k,Password:M,Phone:T}),ae={title:"Kit/Components/Input",component:l,parameters:{layout:"centered"},tags:["autodocs"],args:{placeholder:"Placeholder",size:"md"}},g={},x={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:[e.jsx(l,{...r,size:"sm",placeholder:"Small"}),e.jsx(l,{...r,size:"md",placeholder:"Medium"}),e.jsx(l,{...r,size:"lg",placeholder:"Large"})]})},v={args:{invalid:!0,placeholder:"Error state"}},w={args:{disabled:!0,placeholder:"Disabled"}},I={args:{before:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M8 4v4l2 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),placeholder:"With before icon"}},y={args:{after:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 12l4-4-4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),placeholder:"With after icon"}},b={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:e.jsx(l.Password,{placeholder:"Password"})})},_={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:e.jsx(l.Phone,{placeholder:"+7 (999) 999-99-99"})})},N={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:e.jsx(l.Email,{placeholder:"user@example.com"})})},j={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:280},children:e.jsx(l.Number,{placeholder:"Number"})})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled'
  }
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    before: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M8 4v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    placeholder: 'With before icon'
  }
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    after: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    placeholder: 'With after icon'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input.Password placeholder="Password" />
    </div>
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input.Phone placeholder="+7 (999) 999-99-99" />
    </div>
}`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input.Email placeholder="user@example.com" />
    </div>
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 280
  }}>
      <Input.Number placeholder="Number" />
    </div>
}`,...j.parameters?.docs?.source}}};const oe=["Default","Sizes","Invalid","Disabled","WithBefore","WithAfter","Password","Phone","Email","Number"];export{g as Default,w as Disabled,N as Email,v as Invalid,j as Number,b as Password,_ as Phone,x as Sizes,y as WithAfter,I as WithBefore,oe as __namedExportsOrder,ae as default};
