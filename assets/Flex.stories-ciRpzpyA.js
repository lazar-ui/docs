import{H as e}from"./iframe-Co-vi7Ap.js";import{F as l}from"./Flex-BJI9aynF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./camelCase-uFo-OJf_.js";const r={width:"60px",height:"60px",borderRadius:"var(--radius-2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"var(--font-size-sm)"},y={title:"@lazar-ui／kit/Components/Flex",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["row","column","row-reverse","column-reverse"],table:{defaultValue:{summary:"row"},type:{summary:"row | column | row-reverse | column-reverse"}}},align:{control:{type:"select"},options:["flex-start","center","flex-end","stretch","baseline"],table:{type:{summary:"flex-start | center | flex-end | stretch | baseline"}}},justify:{control:{type:"select"},options:["flex-start","center","flex-end","space-between","space-around","space-evenly"],table:{type:{summary:"flex-start | center | flex-end | space-between | space-around | space-evenly"}}},gap:{control:{type:"select"},options:[0,1,2,3,4,5,6,8,10],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10"}}},wrap:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},px:{control:{type:"select"},options:[0,1,2,3,4,5,6,8,10],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10"}}},py:{control:{type:"select"},options:[0,1,2,3,4,5,6,8,10],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10"}}},fullWidth:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},grow:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},shrink:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},as:{control:{type:"select"},options:["div","span","section","article","nav","header","footer","main","aside"],table:{defaultValue:{summary:"div"},type:{summary:"div | span | section | article | nav | header | footer | main | aside"}}},children:{control:{type:"text"},table:{type:{summary:"ReactNode"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},style:{control:{type:"object"},table:{type:{summary:"React.CSSProperties"}}}},args:{direction:"row",gap:4}},o={render:t=>e.jsxs(l,{...t,children:[e.jsx("div",{style:{...r,backgroundColor:"var(--color-background-brand)"},children:"1"}),e.jsx("div",{style:{...r,backgroundColor:"var(--palette-green-500)"},children:"2"}),e.jsx("div",{style:{...r,backgroundColor:"var(--palette-orange-500)"},children:"3"})]})},n={args:{justify:"space-between",align:"center",px:4,py:3,fullWidth:!0},render:t=>e.jsx("div",{style:{width:"400px",border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-2)"},children:e.jsxs(l,{...t,children:[e.jsx("span",{style:{fontWeight:600},children:"Left content"}),e.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Right content"})]})})},a={args:{direction:"column",gap:4,align:"center"},render:t=>e.jsxs(l,{...t,children:[e.jsx("div",{style:{...r,backgroundColor:"var(--color-background-brand)",width:"80px"},children:"Top"}),e.jsx("div",{style:{...r,backgroundColor:"var(--palette-green-500)",width:"120px"},children:"Middle"}),e.jsx("div",{style:{...r,backgroundColor:"var(--palette-orange-500)",width:"100px"},children:"Bottom"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <Flex {...props}>
      <div style={{
      ...boxStyle,
      backgroundColor: 'var(--color-background-brand)'
    }}>1</div>
      <div style={{
      ...boxStyle,
      backgroundColor: 'var(--palette-green-500)'
    }}>2</div>
      <div style={{
      ...boxStyle,
      backgroundColor: 'var(--palette-orange-500)'
    }}>3</div>
    </Flex>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    justify: 'space-between',
    align: 'center',
    px: 4,
    py: 3,
    fullWidth: true
  },
  render: props => <div style={{
    width: '400px',
    border: '1px solid var(--color-border-primary)',
    borderRadius: 'var(--radius-2)'
  }}>
      <Flex {...props}>
        <span style={{
        fontWeight: 600
      }}>Left content</span>
        <span style={{
        color: 'var(--color-text-secondary)'
      }}>Right content</span>
      </Flex>
    </div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 4,
    align: 'center'
  },
  render: props => <Flex {...props}>
      <div style={{
      ...boxStyle,
      backgroundColor: 'var(--color-background-brand)',
      width: '80px'
    }}>Top</div>
      <div style={{
      ...boxStyle,
      backgroundColor: 'var(--palette-green-500)',
      width: '120px'
    }}>Middle</div>
      <div style={{
      ...boxStyle,
      backgroundColor: 'var(--palette-orange-500)',
      width: '100px'
    }}>Bottom</div>
    </Flex>
}`,...a.parameters?.docs?.source}}};const u=["Default","RowWithSpaceBetween","Column"];export{a as Column,o as Default,n as RowWithSpaceBetween,u as __namedExportsOrder,y as default};
