import{H as y}from"./iframe-vKSYs7iX.js";import{c as g}from"./clsx-B-dksMZM.js";import{c as h}from"./camelCase-CCk27Svl.js";const F="Flex",j="_root_1mp2w_7",S="_directionRow_1mp2w_14",C="_directionColumn_1mp2w_18",R="_directionRowReverse_1mp2w_22",T="_directionColumnReverse_1mp2w_26",b="_alignFlexStart_1mp2w_30",q="_alignCenter_1mp2w_34",E="_alignFlexEnd_1mp2w_38",k="_alignStretch_1mp2w_42",A="_alignBaseline_1mp2w_46",B="_justifyFlexStart_1mp2w_50",L="_justifyCenter_1mp2w_54",W="_justifyFlexEnd_1mp2w_58",I="_justifySpaceBetween_1mp2w_62",N="_justifySpaceAround_1mp2w_66",P="_justifySpaceEvenly_1mp2w_70",$="_fullWidth_1mp2w_74",M="_wrap_1mp2w_78",D="_grow_1mp2w_82",H="_shrink_1mp2w_86",e={root:j,directionRow:S,directionColumn:C,directionRowReverse:R,directionColumnReverse:T,alignFlexStart:b,alignCenter:q,alignFlexEnd:E,alignStretch:k,alignBaseline:A,justifyFlexStart:B,justifyCenter:L,justifyFlexEnd:W,justifySpaceBetween:I,justifySpaceAround:N,justifySpaceEvenly:P,fullWidth:$,wrap:M,grow:D,shrink:H};function n(l,a){return e[h(`${l}-${a}`)]}const o=l=>{const{align:a,as:u="div",children:m,direction:p="row",fullWidth:c,gap:t,grow:d,id:v,justify:i,px:r,py:s,shrink:f,style:w,wrap:_}=l,x=g(e.root,n("direction",p),a!=null&&n("align",a),i!=null&&n("justify",i),_&&e.wrap,c&&e.fullWidth,d&&e.grow,f&&e.shrink);return y.jsx(u,{className:x,id:v,style:{"--flex-gap":t!=null?`var(--lui-space-${t})`:void 0,"--flex-px":r!=null?`var(--lui-space-${r})`:void 0,"--flex-py":s!=null?`var(--lui-space-${s})`:void 0,...w},children:m})};o.displayName=F;o.__docgenInfo={description:`Flex component. A utility container for flexbox layouts.

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
\`\`\``,methods:[],displayName:"Flex",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}]},description:"Flex direction. Default: `'row'`."},align:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:"Align-items."},justify:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"Justify-content."},gap:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:"Gap between children (maps to `--space-{n}`)."},wrap:{required:!1,tsType:{name:"boolean"},description:"Flex-wrap."},px:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:"Padding horizontal (maps to `--space-{n}`)."},py:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:"Padding vertical (maps to `--space-{n}`)."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width."},grow:{required:!1,tsType:{name:"boolean"},description:"Flex-grow."},shrink:{required:!1,tsType:{name:"boolean"},description:"Flex-shrink."},as:{required:!1,tsType:{name:"union",raw:"'div' | 'span' | 'section' | 'article' | 'nav' | 'header' | 'footer' | 'main' | 'aside'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'span'"},{name:"literal",value:"'section'"},{name:"literal",value:"'article'"},{name:"literal",value:"'nav'"},{name:"literal",value:"'header'"},{name:"literal",value:"'footer'"},{name:"literal",value:"'main'"},{name:"literal",value:"'aside'"}]},description:"Tag to render. Default: `'div'`."},id:{required:!1,tsType:{name:"string"},description:"HTML id."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles override."}}};export{o as F};
