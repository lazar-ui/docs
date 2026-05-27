import{H as e}from"./iframe-Dxm6wkCs.js";import{c as S}from"./clsx-B-dksMZM.js";import{c as C}from"./camelCase-Df9BNvgk.js";import"./preload-helper-PPVm8Dsz.js";const F="Flex",k="_root_1mp2w_7",R="_directionRow_1mp2w_14",T="_directionColumn_1mp2w_18",q="_directionRowReverse_1mp2w_22",W="_directionColumnReverse_1mp2w_26",E="_alignFlexStart_1mp2w_30",B="_alignCenter_1mp2w_34",L="_alignFlexEnd_1mp2w_38",A="_alignStretch_1mp2w_42",I="_alignBaseline_1mp2w_46",M="_justifyFlexStart_1mp2w_50",N="_justifyCenter_1mp2w_54",P="_justifyFlexEnd_1mp2w_58",D="_justifySpaceBetween_1mp2w_62",$="_justifySpaceAround_1mp2w_66",z="_justifySpaceEvenly_1mp2w_70",H="_fullWidth_1mp2w_74",V="_wrap_1mp2w_78",G="_grow_1mp2w_82",J="_shrink_1mp2w_86",a={root:k,directionRow:R,directionColumn:T,directionRowReverse:q,directionColumnReverse:W,alignFlexStart:E,alignCenter:B,alignFlexEnd:L,alignStretch:A,alignBaseline:I,justifyFlexStart:M,justifyCenter:N,justifyFlexEnd:P,justifySpaceBetween:D,justifySpaceAround:$,justifySpaceEvenly:z,fullWidth:H,wrap:V,grow:G,shrink:J};function c(n,l){return a[C(`${n}-${l}`)]}const r=n=>{const{align:l,as:y="div",children:v,direction:x="row",fullWidth:f,gap:p,grow:g,id:w,justify:d,px:u,py:m,shrink:b,style:h,wrap:_}=n,j=S(a.root,c("direction",x),l!=null&&c("align",l),d!=null&&c("justify",d),_&&a.wrap,f&&a.fullWidth,g&&a.grow,b&&a.shrink);return e.jsx(y,{className:j,id:w,style:{"--flex-gap":p!=null?`var(--lui-space-${p})`:void 0,"--flex-px":u!=null?`var(--lui-space-${u})`:void 0,"--flex-py":m!=null?`var(--lui-space-${m})`:void 0,...h},children:v})};r.displayName=F;r.__docgenInfo={description:`Flex component. A utility container for flexbox layouts.

Maps common flexbox properties to props, eliminating inline \`display: flex\` styles.
Supports direction, alignment, justification, gap, padding, wrap, grow, and shrink.
Renders as a configurable HTML tag via the \`as\` prop.

@example
\`\`\`tsx
<Flex direction="column" gap={4} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
\`\`\`

@example
\`\`\`tsx
<Flex justify="space-between" align="center" px={4} py={2}>
  <span>Left</span>
  <span>Right</span>
</Flex>
\`\`\`

@example
\`\`\`tsx
<Flex as="nav" gap={3} wrap>
  <a href="#">Link</a>
  <a href="#">Link</a>
</Flex>
\`\`\``,methods:[],displayName:"Flex",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}]},description:"Flex direction. Default: `'row'`."},align:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:"Align-items."},justify:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"Justify-content."},gap:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:"Gap between children (maps to `--space-{n}`)."},wrap:{required:!1,tsType:{name:"boolean"},description:"Flex-wrap."},px:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:"Padding horizontal (maps to `--space-{n}`)."},py:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:"Padding vertical (maps to `--space-{n}`)."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width."},grow:{required:!1,tsType:{name:"boolean"},description:"Flex-grow."},shrink:{required:!1,tsType:{name:"boolean"},description:"Flex-shrink."},as:{required:!1,tsType:{name:"union",raw:"'div' | 'span' | 'section' | 'article' | 'nav' | 'header' | 'footer' | 'main' | 'aside'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'span'"},{name:"literal",value:"'section'"},{name:"literal",value:"'article'"},{name:"literal",value:"'nav'"},{name:"literal",value:"'header'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'main'"},{name:"literal",value:"'aside'"}]},description:"Tag to render. Default: `'div'`."},id:{required:!1,tsType:{name:"string"},description:"HTML id."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles override."}}};const t={width:"60px",height:"60px",borderRadius:"var(--radius-2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"var(--font-size-sm)"},U={title:"Kit/Components/Flex",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["row","column","row-reverse","column-reverse"],table:{defaultValue:{summary:"row"},type:{summary:"row | column | row-reverse | column-reverse"}}},align:{control:{type:"select"},options:["flex-start","center","flex-end","stretch","baseline"],table:{type:{summary:"flex-start | center | flex-end | stretch | baseline"}}},justify:{control:{type:"select"},options:["flex-start","center","flex-end","space-between","space-around","space-evenly"],table:{type:{summary:"flex-start | center | flex-end | space-between | space-around | space-evenly"}}},gap:{control:{type:"select"},options:[0,1,2,3,4,5,6,8,10],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10"}}},wrap:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},px:{control:{type:"select"},options:[0,1,2,3,4,5,6,8,10],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10"}}},py:{control:{type:"select"},options:[0,1,2,3,4,5,6,8,10],table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10"}}},fullWidth:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},grow:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},shrink:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},as:{control:{type:"select"},options:["div","span","section","article","nav","header","footer","main","aside"],table:{defaultValue:{summary:"div"},type:{summary:"div | span | section | article | nav | header | footer | main | aside"}}},children:{control:{type:"text"},table:{type:{summary:"ReactNode"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},style:{control:{type:"object"},table:{type:{summary:"React.CSSProperties"}}}},args:{direction:"row",gap:4}},o={render:n=>e.jsxs(r,{...n,children:[e.jsx("div",{style:{...t,backgroundColor:"var(--color-background-brand)"},children:"1"}),e.jsx("div",{style:{...t,backgroundColor:"var(--palette-green-500)"},children:"2"}),e.jsx("div",{style:{...t,backgroundColor:"var(--palette-orange-500)"},children:"3"})]})},i={args:{justify:"space-between",align:"center",px:4,py:3,fullWidth:!0},render:n=>e.jsx("div",{style:{width:"400px",border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-2)"},children:e.jsxs(r,{...n,children:[e.jsx("span",{style:{fontWeight:600},children:"Left content"}),e.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Right content"})]})})},s={args:{direction:"column",gap:4,align:"center"},render:n=>e.jsxs(r,{...n,children:[e.jsx("div",{style:{...t,backgroundColor:"var(--color-background-brand)",width:"80px"},children:"Top"}),e.jsx("div",{style:{...t,backgroundColor:"var(--palette-green-500)",width:"120px"},children:"Middle"}),e.jsx("div",{style:{...t,backgroundColor:"var(--palette-orange-500)",width:"100px"},children:"Bottom"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const X=["Default","RowWithSpaceBetween","Column"];export{s as Column,o as Default,i as RowWithSpaceBetween,X as __namedExportsOrder,U as default};
