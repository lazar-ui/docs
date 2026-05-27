import{H as e}from"./iframe-Dxm6wkCs.js";import{c}from"./clsx-B-dksMZM.js";import{g as d}from"./getVariantClassName-Qnu0mv72.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-Df9BNvgk.js";const m="Spinner",x="_root_1nbe0_6",g="_sizeSm_1nbe0_17",u="_sizeMd_1nbe0_22",y="_sizeLg_1nbe0_27",S="_sizeXl_1nbe0_32",t={root:x,"spinner-rotate":"_spinner-rotate_1nbe0_1",sizeSm:g,sizeMd:u,sizeLg:y,sizeXl:S},r=s=>{const{color:o,size:l="md"}=s,p=c(t.root,d("size",l,t));return e.jsx("span",{className:p,role:"status","aria-label":"Loading",style:{"--spinner-color":o??"var(--lui-color-text-secondary)"}})};r.displayName=m;r.__docgenInfo={description:`Spinner component. Renders a rotating arc indicator for loading states.

@example
\`\`\`tsx
<Spinner />
<Spinner size="lg" />
<Spinner color="var(--lui-palette-brand)" />
\`\`\``,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"literal",value:"`${ESpinnerSize.SM | ESpinnerSize.MD | ESpinnerSize.LG | ESpinnerSize.XL}`"},description:"Size. Default: 'md'."},color:{required:!1,tsType:{name:"string"},description:"CSS color value for the spinner arc. Default: 'var(--lui-color-text-secondary)'."}}};const D={title:"Kit/Components/Spinner",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"color"},size:{control:{type:"select"},options:["sm","md","lg","xl"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg | xl"}}}},args:{size:"md"}},n={},i={render:s=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,size:"sm"}),e.jsx("span",{children:"sm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,size:"md"}),e.jsx("span",{children:"md"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,size:"lg"}),e.jsx("span",{children:"lg"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{...s,size:"xl"}),e.jsx("span",{children:"xl"})]})]})},a={render:s=>e.jsx(r,{...s,color:"var(--palette-brand)"})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Spinner {...props} size="sm" />
        <span>sm</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Spinner {...props} size="md" />
        <span>md</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Spinner {...props} size="lg" />
        <span>lg</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Spinner {...props} size="xl" />
        <span>xl</span>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Spinner {...props} color="var(--palette-brand)" />
}`,...a.parameters?.docs?.source}}};const I=["Default","Sizes","Colored"];export{a as Colored,n as Default,i as Sizes,I as __namedExportsOrder,D as default};
