import{H as r}from"./iframe-BBNrCij-.js";import{I as s}from"./Icon-uboSQeU0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const i=["alertCircle","alertTriangle","arrowLeft","arrowRight","calendar","check","checkCircle","chevronDown","chevronLeft","chevronRight","chevronUp","clock","copy","download","edit","externalLink","eye","eyeOff","file","filter","info","loader2","logOut","mail","menu","minus","moon","moreHorizontal","phone","plus","refreshCw","search","settings","sun","trash2","upload","user","x","xCircle","zoomIn","zoomOut"],h={title:"Kit/Components/Icon",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"select"},options:i,table:{type:{summary:i.map(e=>`'${e}'`).join(" | ")}}},size:{control:{type:"number",min:8,max:64,step:1},table:{defaultValue:{summary:"16"},type:{summary:"number"}}},color:{control:{type:"color"},table:{defaultValue:{summary:"currentColor"},type:{summary:"string"}}},strokeWidth:{control:{type:"number",min:.5,max:8,step:.5},table:{defaultValue:{summary:"2"},type:{summary:"number"}}},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"}}}},args:{name:"search",size:16,color:"currentColor",strokeWidth:2}},a={},o={render:e=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(s,{...e,name:"search",size:16}),r.jsx(s,{...e,name:"search",size:24}),r.jsx(s,{...e,name:"search",size:32}),r.jsx(s,{...e,name:"search",size:48})]})},n={render:e=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(s,{...e,name:"search",color:"currentColor"}),r.jsx(s,{...e,name:"search",color:"#22c55e"}),r.jsx(s,{...e,name:"search",color:"#ef4444"}),r.jsx(s,{...e,name:"search",color:"#3b82f6"})]})},t={render:e=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(s,{...e,name:"search"}),r.jsx(s,{...e,name:"user"}),r.jsx(s,{...e,name:"settings"}),r.jsx(s,{...e,name:"mail"}),r.jsx(s,{...e,name:"calendar"}),r.jsx(s,{...e,name:"info"})]})},c={render:e=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(s,{...e,name:"search",strokeWidth:1}),r.jsx(s,{...e,name:"search",strokeWidth:2}),r.jsx(s,{...e,name:"search",strokeWidth:3}),r.jsx(s,{...e,name:"search",strokeWidth:4})]})},m={render:e=>r.jsx(s,{...e,name:"unknown-icon-name"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon {...props} name="search" size={16} />
      <Icon {...props} name="search" size={24} />
      <Icon {...props} name="search" size={32} />
      <Icon {...props} name="search" size={48} />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon {...props} name="search" color="currentColor" />
      <Icon {...props} name="search" color="#22c55e" />
      <Icon {...props} name="search" color="#ef4444" />
      <Icon {...props} name="search" color="#3b82f6" />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon {...props} name="search" />
      <Icon {...props} name="user" />
      <Icon {...props} name="settings" />
      <Icon {...props} name="mail" />
      <Icon {...props} name="calendar" />
      <Icon {...props} name="info" />
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon {...props} name="search" strokeWidth={1} />
      <Icon {...props} name="search" strokeWidth={2} />
      <Icon {...props} name="search" strokeWidth={3} />
      <Icon {...props} name="search" strokeWidth={4} />
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Icon {...props} name="unknown-icon-name" />
}`,...m.parameters?.docs?.source}}};const x=["Default","Sizes","Colors","Variants","StrokeWidths","Fallback"];export{n as Colors,a as Default,m as Fallback,o as Sizes,c as StrokeWidths,t as Variants,x as __namedExportsOrder,h as default};
