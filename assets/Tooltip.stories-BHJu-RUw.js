import{N as o,H as e}from"./iframe-rByIh3n2.js";import{B as u}from"./Badge-a9JToAd8.js";import{B as L}from"./Button-Ci06rhvs.js";import{s as N}from"./Overlay-PInRsyvU.js";import{$ as P}from"./useOverlayPosition-B0UtyLKK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./getVariantClassName-DoOrEeQ5.js";import"./camelCase-j001MW_n.js";import"./Icon-BERQuE5_.js";import"./index-9peDV5__.js";import"./index-b5RGSg-k.js";const w=o.createContext(null),O=w.Provider,R=()=>{const n=o.useContext(w);if(!n)throw new Error("Sub-component must be used within a Tooltip");return n},x="Tooltip",k=500,$=150,A=6;var C=(n=>(n.TRIGGER=`${x}.Trigger`,n.CONTENT=`${x}.Content`,n))(C||{});const M="_content_16k4n_11",H="_arrow_16k4n_26",j={content:M,arrow:H},b=n=>{const{children:d}=n,{cancelClose:m,close:l,contentId:a,isOpen:c,placement:T,triggerRef:s}=R(),i=o.useRef(null),{arrowProps:h,overlayProps:p,placement:r}=P({isOpen:c,offset:A,overlayRef:i,placement:T,shouldFlip:!0,targetRef:s});return c?e.jsx(N,{children:e.jsxs("div",{className:j.content,"data-placement":r,id:a,onMouseEnter:m,onMouseLeave:l,ref:i,role:"tooltip",...p,children:[e.jsx("div",{className:j.arrow,...h}),d]})}):null};b.displayName=C.CONTENT;b.__docgenInfo={description:"Tooltip content panel. Renders via portal with automatic positioning and arrow.\n\nMust be used as a child of `<Tooltip>`.",methods:[]};const v=n=>{const{children:d,placement:m="top",showDelay:l=k,hideDelay:a=$}=n,c=o.useRef(null),T=o.useId(),s=o.useRef(void 0),i=o.useRef(void 0),[h,p]=o.useState(!1),r=o.useCallback(()=>{s.current!==void 0&&(clearTimeout(s.current),s.current=void 0),i.current!==void 0&&(clearTimeout(i.current),i.current=void 0)},[]);o.useEffect(()=>()=>{r()},[r]);const B=o.useCallback(()=>{r(),s.current=window.setTimeout(()=>{p(!0)},l)},[r,l]),I=o.useCallback(()=>{r(),i.current=window.setTimeout(()=>{p(!1)},a)},[r,a]),_=o.useCallback(()=>{i.current!==void 0&&(clearTimeout(i.current),i.current=void 0)},[]),D=o.useCallback(()=>{r(),p(!0)},[r]),E=o.useCallback(()=>{r(),p(!1)},[r]);return e.jsx(O,{value:{cancelClose:_,close:I,closeImmediate:E,contentId:T,isOpen:h,open:B,openImmediate:D,placement:m,triggerRef:c},children:d})};v.displayName=x;v.__docgenInfo={description:`Tooltip container. Manages open/close state with show/hide delays and provides context
to \`Tooltip.Trigger\` and \`Tooltip.Content\`.

Opens on hover (with 500ms delay) and on focus (immediate). Closes on leave and blur.

@example
\`\`\`tsx
<Tooltip placement="top">
  <Tooltip.Trigger>
    <Button>Hover me</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>Tooltip text</Tooltip.Content>
</Tooltip>
\`\`\``,methods:[],displayName:"Tooltip",props:{placement:{required:!1,tsType:{name:"Placement"},description:"Placement relative to trigger. Default: `'top'`."},showDelay:{required:!1,tsType:{name:"number"},description:"Show delay in ms. Default: `500`."},hideDelay:{required:!1,tsType:{name:"number"},description:"Hide delay in ms. Default: `150`."}}};const y=n=>{const{children:d}=n,{close:m,contentId:l,open:a,openImmediate:c,closeImmediate:T,triggerRef:s}=R();return e.jsx("span",{"aria-describedby":l,onBlur:T,onFocus:c,onMouseEnter:a,onMouseLeave:m,ref:s,tabIndex:0,children:d})};y.displayName=C.TRIGGER;y.__docgenInfo={description:"Tooltip trigger element. Wraps children with hover, focus, and ARIA attributes.\n\nMust be used as a child of `<Tooltip>`.",methods:[]};const t=v;t.Trigger=y;t.Content=b;const X={title:"@lazar-ui／kit/Components/Tooltip",component:t,subcomponents:{"Tooltip.Trigger":t.Trigger,"Tooltip.Content":t.Content},parameters:{layout:"centered"},argTypes:{placement:{control:{type:"select"},options:["bottom","bottom start","bottom end","top","top start","top end","left","left start","left end","right","right start","right end"]},showDelay:{control:{type:"number"}},hideDelay:{control:{type:"number"}}},tags:["autodocs"]},g={args:{placement:"top"},render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Trigger,{children:e.jsx(L,{children:"Hover me"})}),e.jsx(t.Content,{children:"Tooltip content"})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs(t,{placement:"top",children:[e.jsx(t.Trigger,{children:e.jsx(u,{children:"Top"})}),e.jsx(t.Content,{children:"Top placement"})]}),e.jsxs(t,{placement:"bottom",children:[e.jsx(t.Trigger,{children:e.jsx(u,{children:"Bottom"})}),e.jsx(t.Content,{children:"Bottom placement"})]}),e.jsxs(t,{placement:"left",children:[e.jsx(t.Trigger,{children:e.jsx(u,{children:"Left"})}),e.jsx(t.Content,{children:"Left placement"})]}),e.jsxs(t,{placement:"right",children:[e.jsx(t.Trigger,{children:e.jsx(u,{children:"Right"})}),e.jsx(t.Content,{children:"Right placement"})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top'
  },
  render: props => <Tooltip {...props}>
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Tooltip content</Tooltip.Content>
    </Tooltip>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <Tooltip placement="top">
        <Tooltip.Trigger>
          <Badge>Top</Badge>
        </Tooltip.Trigger>
        <Tooltip.Content>Top placement</Tooltip.Content>
      </Tooltip>
      <Tooltip placement="bottom">
        <Tooltip.Trigger>
          <Badge>Bottom</Badge>
        </Tooltip.Trigger>
        <Tooltip.Content>Bottom placement</Tooltip.Content>
      </Tooltip>
      <Tooltip placement="left">
        <Tooltip.Trigger>
          <Badge>Left</Badge>
        </Tooltip.Trigger>
        <Tooltip.Content>Left placement</Tooltip.Content>
      </Tooltip>
      <Tooltip placement="right">
        <Tooltip.Trigger>
          <Badge>Right</Badge>
        </Tooltip.Trigger>
        <Tooltip.Content>Right placement</Tooltip.Content>
      </Tooltip>
    </div>
}`,...f.parameters?.docs?.source}}};const Z=["Default","Placements"];export{g as Default,f as Placements,Z as __namedExportsOrder,X as default};
