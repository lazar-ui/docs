import{R as F,N as o,H as e}from"./iframe-DLB2Hu3F.js";import{B as p}from"./Button-44kQ26xy.js";import{i as V}from"./isValidReactNode-BzQ3T0yK.js";import"./camelCase-BTsvIAkU.js";import{c as Y}from"./clsx-B-dksMZM.js";import{$ as U,a as W}from"./useModalOverlay-_9_78zAL.js";import{s as K,i as G}from"./Overlay-BGb8YFqI.js";import{a as J}from"./useOverlayTriggerState-Ddyg9acn.js";import{g as Q}from"./getComponentSlots-BBKqizJz.js";import{g as A}from"./getVariantClassName-8orE4ulh.js";import{I as X}from"./Icon-BVr_LDAg.js";import{u as Z}from"./useLocale-kjQbhAKp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ByrW6-Zw.js";import"./index-evzoQpE5.js";var i=(t=>(t.ACTIONS="Drawer.Actions",t.CONTENT="Drawer.Content",t.HEADER="Drawer.Header",t))(i||{});const ee="_root_1m4yu_1",ne={root:ee},b=({children:t})=>{const a=F.Children.toArray(t),s=a.map((n,l)=>{if(!V("Button",n))return n;const c=n.props.variant,C=c??(l===0?"primary":"secondary");return o.cloneElement(n,{key:l,...c?{}:{variant:C}})});return a.length===0?null:e.jsx("div",{className:ne.root,children:s})};b.displayName=i.ACTIONS;b.__docgenInfo={description:"Wrapper for action buttons inside Drawer.\nAccepts only `<Button>` components as children.\nAuto-assigns variant based on position:\n- first child → `primary`\n- subsequent children → `secondary`\nunless the Button already has an explicit `variant` prop.",methods:[]};const re="_root_jagsa_1",te={root:re},_=t=>{const{children:a}=t;return e.jsx("div",{className:te.root,children:a})};_.displayName=i.CONTENT;_.__docgenInfo={description:`Drawer Content sub-component.

Renders the scrollable body of the drawer.
Must be used within a Drawer component.

@example
\`\`\`tsx
<Drawer.Content>
  <p>Your content here.</p>
</Drawer.Content>
\`\`\``,methods:[]};const ae="Drawer",se=[i.ACTIONS,i.CONTENT,i.HEADER],B=o.createContext(null),oe=()=>{const t=o.useContext(B);if(!t)throw new Error("Drawer sub-components must be used within a Drawer component.");return t},ie="_underlay_qcy0k_24",le="_modal_qcy0k_32",ce="_drawer_qcy0k_37",pe="_placementLeft_qcy0k_47",de="_entered_qcy0k_53",me="_placementRight_qcy0k_56",ue="_placementTop_qcy0k_65",he="_placementBottom_qcy0k_74",fe="_sizeSm_qcy0k_83",we="_sizeMd_qcy0k_90",De="_sizeLg_qcy0k_97",Ce="_content_qcy0k_105",d={underlay:ie,modal:le,drawer:ce,placementLeft:pe,entered:de,placementRight:me,placementTop:ue,placementBottom:he,sizeSm:fe,sizeMd:we,sizeLg:De,content:Ce},ye=300,j=t=>{const{children:a,container:s,dismissable:n=!0,onOpenChange:l,open:c,placement:C="right",size:q="md"}=t,N=o.useRef(null),y=o.useRef(null),{dialogProps:E}=U(t,N),S=J({isOpen:c,onOpenChange:l}),{modalProps:z,underlayProps:$}=W({isDismissable:n,isKeyboardDismissDisabled:!1},S,y),[k,H]=o.useState(c||!1),[I,v]=o.useState(!1),g=o.useRef(k);o.useEffect(()=>{if(c){g.current=!0,H(!0);const x=requestAnimationFrame(()=>{requestAnimationFrame(()=>{v(!0)})});return()=>cancelAnimationFrame(x)}if(g.current){v(!1);const x=setTimeout(()=>{g.current=!1,H(!1)},ye);return()=>clearTimeout(x)}},[c]);const{[i.ACTIONS]:L,[i.CONTENT]:R,[i.HEADER]:M}=o.useMemo(()=>Q(a,se),[a]),P=Y(d.drawer,A("size",q,d),A("placement",C,d),{[d.entered]:I});return k?e.jsx(K,{portalContainer:s,children:e.jsx("div",{className:d.underlay,...$,children:e.jsx("div",{className:d.modal,...z,ref:y,children:e.jsx(G,{getContainer:()=>y.current,children:e.jsx(B.Provider,{value:{close:()=>S.close()},children:e.jsxs("div",{"aria-label":"Drawer","aria-modal":"true",className:P,role:"dialog",...E,ref:N,children:[M,R&&e.jsx("div",{className:d.content,children:R}),L]})})})})})}):null};j.displayName=ae;j.__docgenInfo={description:`Drawer component.

A slide-in panel that displays additional content without navigating away.
Supports four placements (\`left\`, \`right\`, \`top\`, \`bottom\`) and three sizes (\`sm\`, \`md\`, \`lg\`).
Uses \`react-aria\` for accessibility and overlay management.

@example
\`\`\`tsx
<Drawer open={open} onOpenChange={setOpen}>
  <Drawer.Header>
    Drawer Title
  </Drawer.Header>
  <Drawer.Content>
    <p>Your content here.</p>
  </Drawer.Content>
</Drawer>
\`\`\`

@example
\`\`\`tsx
<Drawer
  open={open}
  onOpenChange={setOpen}
  placement="left"
  size="lg"
  dismissable={false}
>
  <Drawer.Header>
    Persistent Drawer
  </Drawer.Header>
  <Drawer.Content>
    <p>Cannot be closed by clicking outside.</p>
  </Drawer.Content>
</Drawer>
\`\`\``,methods:[],displayName:"Drawer",props:{open:{required:!1,tsType:{name:"boolean"},description:"Whether the drawer is open."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state changes."},placement:{required:!1,tsType:{name:"union",raw:"'bottom' | 'left' | 'right' | 'top'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"}]},description:"Placement. Default: `'right'`."},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"}]},description:"Size. Default: `'md'`."},dismissable:{required:!1,tsType:{name:"boolean"},description:"Whether clicking the underlay closes the drawer. Default: `true`."},container:{required:!1,tsType:{name:"HTMLElement"},description:"Portal container element."}},composes:["IAriaDialogProps"]};const ge="_root_1mypq_13",xe="_title_1mypq_21",Oe="_close_1mypq_31",O={root:ge,title:xe,close:Oe},T=t=>{const{children:a}=t,{close:s}=oe(),n=Z(),l=c=>{c.preventDefault(),s()};return e.jsxs("div",{className:O.root,children:[e.jsx("div",{className:O.title,children:a}),e.jsx("button",{"aria-label":n.dialog.close,className:O.close,onClick:l,type:"button",children:e.jsx(X,{name:"x",size:16})})]})};T.displayName=i.HEADER;T.__docgenInfo={description:`Drawer Header sub-component.

Renders the title and a close button.
Must be used within a Drawer component.

@example
\`\`\`tsx
<Drawer.Header>
  Drawer Title
</Drawer.Header>
\`\`\``,methods:[]};const r=j;r.Actions=b;r.Content=_;r.Header=T;const{fn:be}=__STORYBOOK_MODULE_TEST__,Ie={title:"Kit/Components/Drawer",component:r,subcomponents:{"Drawer.Content":r.Content,"Drawer.Header":r.Header},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{dismissable:{control:{type:"boolean"},table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},onOpenChange:{table:{type:{summary:"(open: boolean) => void"}}},open:{control:{type:"boolean"},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},placement:{control:{type:"select"},options:["bottom","left","right","top"],table:{defaultValue:{summary:"right"},type:{summary:"bottom | left | right | top"}}},size:{control:{type:"select"},options:["lg","md","sm"],table:{defaultValue:{summary:"md"},type:{summary:"lg | md | sm"}}}},args:{onOpenChange:be()}},m={render:function(a){const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>n(!0),children:"Open Drawer"}),e.jsxs(r,{...a,open:s,onOpenChange:n,children:[e.jsx(r.Header,{children:"Drawer Title"}),e.jsx(r.Content,{children:e.jsx("p",{children:"This is the drawer content. You can put any content here."})})]})]})}},u={render:function(a){const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>n(!0),children:"Open Drawer"}),e.jsxs(r,{...a,open:s,onOpenChange:n,placement:"left",children:[e.jsx(r.Header,{children:"Left Drawer"}),e.jsx(r.Content,{children:e.jsx("p",{children:"This drawer slides in from the left side."})})]})]})}},h={render:function(a){const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>n(!0),children:"Open Drawer"}),e.jsxs(r,{...a,open:s,onOpenChange:n,placement:"top",children:[e.jsx(r.Header,{children:"Top Drawer"}),e.jsx(r.Content,{children:e.jsx("p",{children:"This drawer slides in from the top."})})]})]})}},f={render:function(a){const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>n(!0),children:"Open Drawer"}),e.jsxs(r,{...a,open:s,onOpenChange:n,size:"sm",children:[e.jsx(r.Header,{children:"Small Drawer"}),e.jsx(r.Content,{children:e.jsx("p",{children:"This is a small-sized drawer."})})]})]})}},w={render:function(a){const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>n(!0),children:"Open Drawer"}),e.jsxs(r,{...a,open:s,onOpenChange:n,dismissable:!1,children:[e.jsx(r.Header,{children:"Non-dismissable Drawer"}),e.jsx(r.Content,{children:e.jsx("p",{children:"This drawer cannot be closed by clicking the underlay. Use the close button in the header."})})]})]})}},D={render:function(a){const[s,n]=o.useState(!1),l=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>n(!0),children:"Open Drawer"}),e.jsxs(r,{...a,open:s,onOpenChange:n,children:[e.jsx(r.Header,{children:"Confirm Action"}),e.jsxs(r.Content,{children:[e.jsx("p",{children:"Are you sure you want to proceed with this action?"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:[e.jsx(p,{onClick:l,children:"Confirm"}),e.jsx(p,{onClick:l,variant:"secondary",children:"Cancel"})]})]})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...props} open={open} onOpenChange={setOpen}>
          <Drawer.Header>Drawer Title</Drawer.Header>
          <Drawer.Content>
            <p>This is the drawer content. You can put any content here.</p>
          </Drawer.Content>
        </Drawer>
      </>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...props} open={open} onOpenChange={setOpen} placement="left">
          <Drawer.Header>Left Drawer</Drawer.Header>
          <Drawer.Content>
            <p>This drawer slides in from the left side.</p>
          </Drawer.Content>
        </Drawer>
      </>;
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...props} open={open} onOpenChange={setOpen} placement="top">
          <Drawer.Header>Top Drawer</Drawer.Header>
          <Drawer.Content>
            <p>This drawer slides in from the top.</p>
          </Drawer.Content>
        </Drawer>
      </>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...props} open={open} onOpenChange={setOpen} size="sm">
          <Drawer.Header>Small Drawer</Drawer.Header>
          <Drawer.Content>
            <p>This is a small-sized drawer.</p>
          </Drawer.Content>
        </Drawer>
      </>;
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...props} open={open} onOpenChange={setOpen} dismissable={false}>
          <Drawer.Header>Non-dismissable Drawer</Drawer.Header>
          <Drawer.Content>
            <p>
              This drawer cannot be closed by clicking the underlay. Use the close button in the header.
            </p>
          </Drawer.Content>
        </Drawer>
      </>;
  }
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...props} open={open} onOpenChange={setOpen}>
          <Drawer.Header>Confirm Action</Drawer.Header>
          <Drawer.Content>
            <p>Are you sure you want to proceed with this action?</p>
            <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '16px'
          }}>
              <Button onClick={handleClose}>Confirm</Button>
              <Button onClick={handleClose} variant="secondary">
                Cancel
              </Button>
            </div>
          </Drawer.Content>
        </Drawer>
      </>;
  }
}`,...D.parameters?.docs?.source}}};const Le=["Default","LeftPlacement","TopPlacement","Small","NonDismissable","WithActions"];export{m as Default,u as LeftPlacement,w as NonDismissable,f as Small,h as TopPlacement,D as WithActions,Le as __namedExportsOrder,Ie as default};
