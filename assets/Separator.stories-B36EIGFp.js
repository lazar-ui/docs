import{H as e}from"./iframe-BBNrCij-.js";import{c as m}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";const v="Separator",u="_root_kvseh_5",x="_vertical_kvseh_14",y="_bleed_kvseh_21",n={root:u,vertical:x,bleed:y},r=i=>{const{vertical:d=!1,color:l,bleed:c=!1}=i,p=m(n.root,d&&n.vertical,c&&n.bleed);return e.jsx("hr",{className:p,style:{"--separator-color":l??"var(--lui-color-border-primary)"}})};r.displayName=v;r.__docgenInfo={description:`Separator component. Renders a horizontal or vertical dividing line.

@example
\`\`\`tsx
<Separator />
<Separator vertical />
<Separator bleed />
<Separator vertical bleed color="var(--lui-color-text-success)" />
\`\`\``,methods:[],displayName:"Separator",props:{vertical:{required:!1,tsType:{name:"boolean"},description:"Vertical orientation. Default: `false`."},color:{required:!1,tsType:{name:"string"},description:"CSS colour of the line. Default: `var(--lui-color-border-primary)`."},bleed:{required:!1,tsType:{name:"boolean"},description:"Removes padding around the line. Default: `false`."}}};const b={title:"Kit/Components/Separator",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:{type:"color"},table:{defaultValue:{summary:"var(--color-border-primary)"},type:{summary:"string"}}}}},a={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{})})},o={render:()=>e.jsxs("div",{style:{height:"100px",display:"flex",gap:"var(--space-4)",alignItems:"center"},children:[e.jsx("span",{children:"Left"}),e.jsx(r,{vertical:!0}),e.jsx("span",{children:"Right"})]})},s={render:()=>e.jsxs("div",{style:{border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-md)",width:"300px"},children:[e.jsx("div",{style:{padding:"var(--space-4)"},children:"Section A"}),e.jsx(r,{bleed:!0}),e.jsx("div",{style:{padding:"var(--space-4)"},children:"Section B"})]})},t={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{color:"var(--color-text-success)"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <Separator />
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '100px',
    display: 'flex',
    gap: 'var(--space-4)',
    alignItems: 'center'
  }}>
      <span>Left</span>
      <Separator vertical />
      <span>Right</span>
    </div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px solid var(--color-border-primary)',
    borderRadius: 'var(--radius-md)',
    width: '300px'
  }}>
      <div style={{
      padding: 'var(--space-4)'
    }}>Section A</div>
      <Separator bleed />
      <div style={{
      padding: 'var(--space-4)'
    }}>Section B</div>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <Separator color="var(--color-text-success)" />
    </div>
}`,...t.parameters?.docs?.source}}};const f=["Default","Vertical","Bleed","Color"];export{s as Bleed,t as Color,a as Default,o as Vertical,f as __namedExportsOrder,b as default};
