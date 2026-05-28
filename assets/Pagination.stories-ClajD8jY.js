import{N as D,H as e}from"./iframe-jW71M8gU.js";import{c as R}from"./clsx-B-dksMZM.js";import{u as L}from"./useLocale-B6M_WO3y.js";import{g as I}from"./getVariantClassName-BhJkLVrZ.js";import{I as M}from"./Icon-BpITn-Ye.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-CTLX-SCZ.js";const E=D.createContext(null),q=E.Provider,$=()=>{const t=D.useContext(E);if(!t)throw new Error("Pagination sub-component must be used within a Pagination");return t},W="_button_nl5gc_14",F="_active_nl5gc_40",k="_prevNext_nl5gc_44",A="_sizeSm_nl5gc_49",V="_sizeMd_nl5gc_55",B="_sizeLg_nl5gc_61",P={button:W,active:F,prevNext:k,sizeSm:A,sizeMd:V,sizeLg:B},w=t=>{const{page:a,type:l="page",children:s}=t,{currentPage:g,totalPages:p,disabled:n,onChange:d,size:u}=$(),o=L(),c=a===g,r=n||a<1||a>p||c;let m,x;l==="prev"?(m=o.pagination.prev,x=s??e.jsx(M,{name:"chevronLeft",size:14})):l==="next"?(m=o.pagination.next,x=s??e.jsx(M,{name:"chevronRight",size:14})):(m=o.pagination.page.replace("{page}",String(a)),x=s??a);const T=R(P.button,I("size",u,P),{[P.active]:c,[P.prevNext]:l!=="page"});return e.jsx("button",{"aria-current":c?"page":void 0,"aria-label":m,className:T,disabled:r,onClick:()=>d(a),type:"button",children:x})};w.__docgenInfo={description:"",methods:[],displayName:"Item",props:{page:{required:!0,tsType:{name:"number"},description:"The page this button navigates to."},type:{required:!1,tsType:{name:"union",raw:"'page' | 'prev' | 'next'",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'prev'"},{name:"literal",value:"'next'"}]},description:"Item variant."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Override default content."}}};const G="Pagination",v=(t,a)=>Array.from({length:a-t+1},(l,s)=>t+s),O=(t,a)=>{if(a<=7)return v(1,a);const g=Math.max(t-1,1),p=Math.min(t+1,a),n=g>2,d=p<a-1;if(!n&&d){const o=Math.min(p+1,a);return[...v(1,o),"ellipsis",a]}if(n&&!d){const o=Math.max(g-1,1);return[1,"ellipsis",...v(o,a)]}return[1,"ellipsis",...v(g,p),"ellipsis",a]},H="_root_60eox_6",K="_disabled_60eox_13",U="_ellipsis_60eox_18",Y="_sizeSm_60eox_27",J="_sizeMd_60eox_33",Q="_sizeLg_60eox_39",b={root:H,disabled:K,ellipsis:U,sizeSm:Y,sizeMd:J,sizeLg:Q},i=t=>{const{disabled:a=!1,onChange:l,page:s,showPrevNext:g=!0,size:p="md",totalPages:n}=t,d=L(),u=D.useMemo(()=>O(s,n),[s,n]),o=D.useCallback(r=>{a||r<1||r>n||l?.(r)},[a,l,n]),c=R(b.root,I("size",p,b),{[b.disabled]:a});return e.jsx(q,{value:{currentPage:s,disabled:a,onChange:o,size:p,totalPages:n},children:e.jsxs("nav",{"aria-label":d.pagination.pagination,className:c,children:[g&&e.jsx(w,{page:s-1,type:"prev"}),u.map((r,m)=>r==="ellipsis"?e.jsx("span",{"aria-hidden":"true",className:b.ellipsis,children:"…"},`ellipsis-${m}`):e.jsx(w,{page:r,type:"page"},r)),g&&e.jsx(w,{page:s+1,type:"next"})]})})};i.displayName=G;i.__docgenInfo={description:`Pagination component. Renders a set of page buttons for navigating
paginated content. Supports prev/next controls, size variants, and
disabled state. Uses ellipsis for large page ranges.

@example
\`\`\`tsx
<Pagination page={1} totalPages={20} onChange={(p) => console.log(p)} />
<Pagination page={5} totalPages={10} size="sm" showPrevNext={false} />
<Pagination page={1} totalPages={5} disabled />
\`\`\``,methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:"Current active page (1-indexed)."},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback when page changes."},showPrevNext:{required:!1,tsType:{name:"boolean"},description:"Whether prev/next buttons are visible. Default: `true`."},size:{required:!1,tsType:{name:"union",raw:"| `${EPaginationSize.SM | EPaginationSize.MD | EPaginationSize.LG}`",elements:[{name:"literal",value:"`${EPaginationSize.SM | EPaginationSize.MD | EPaginationSize.LG}`"}]},description:"Size variant. Default: `'md'`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables all interactions."}}};const oe={title:"Kit/Components/Pagination",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{page:{control:{type:"number",min:1},table:{type:{summary:"number"}}},totalPages:{control:{type:"number",min:1},table:{type:{summary:"number"}}},onChange:{action:"changed",table:{type:{summary:"(page: number) => void"}}},showPrevNext:{control:{type:"boolean"},table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}}},args:{page:1,totalPages:20,showPrevNext:!0,size:"md",disabled:!1}},f={},y={args:{page:1,totalPages:20}},h={args:{page:10,totalPages:20}},z={args:{page:20,totalPages:20}},_={args:{page:1,totalPages:7}},S={args:{page:5,totalPages:20,showPrevNext:!1}},N={args:{page:5,totalPages:20,disabled:!0}},C={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx(i,{...t,page:1,totalPages:10,size:"sm"}),e.jsx(i,{...t,page:5,totalPages:10,size:"md"}),e.jsx(i,{...t,page:10,totalPages:10,size:"lg"})]})},j={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",color:"var(--color-text-secondary)",fontSize:"var(--font-size-sm)"},children:"Default"}),e.jsx(i,{...t,page:5,totalPages:20})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",color:"var(--color-text-secondary)",fontSize:"var(--font-size-sm)"},children:"Disabled"}),e.jsx(i,{...t,page:5,totalPages:20,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",color:"var(--color-text-secondary)",fontSize:"var(--font-size-sm)"},children:"Without Prev/Next"}),e.jsx(i,{...t,page:5,totalPages:20,showPrevNext:!1})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 20
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    totalPages: 20
  }
}`,...h.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    page: 20,
    totalPages: 20
  }
}`,...z.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 7
  }
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    totalPages: 20,
    showPrevNext: false
  }
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    totalPages: 20,
    disabled: true
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Pagination {...props} page={1} totalPages={10} size="sm" />
      <Pagination {...props} page={5} totalPages={10} size="md" />
      <Pagination {...props} page={10} totalPages={10} size="lg" />
    </div>
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  }}>
      <div>
        <p style={{
        margin: '0 0 8px',
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--font-size-sm)'
      }}>Default</p>
        <Pagination {...props} page={5} totalPages={20} />
      </div>
      <div>
        <p style={{
        margin: '0 0 8px',
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--font-size-sm)'
      }}>Disabled</p>
        <Pagination {...props} page={5} totalPages={20} disabled />
      </div>
      <div>
        <p style={{
        margin: '0 0 8px',
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--font-size-sm)'
      }}>Without Prev/Next</p>
        <Pagination {...props} page={5} totalPages={20} showPrevNext={false} />
      </div>
    </div>
}`,...j.parameters?.docs?.source}}};const re=["Default","FirstPage","MiddlePage","LastPage","FewPages","WithoutPrevNext","Disabled","Sizes","States"];export{f as Default,N as Disabled,_ as FewPages,y as FirstPage,z as LastPage,h as MiddlePage,C as Sizes,j as States,S as WithoutPrevNext,re as __namedExportsOrder,oe as default};
