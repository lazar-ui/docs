import{H as e,N as c}from"./iframe-DSZZJwFM.js";import{B as u}from"./Button-BpaGC_AH.js";import{c as k}from"./clsx-B-dksMZM.js";import{$ as z,a as A}from"./useModalOverlay-Cm_vvwBb.js";import{s as I,i as L}from"./Overlay-D9YHlTAm.js";import{a as M}from"./useOverlayTriggerState-CJkWZuUH.js";import{u as B}from"./useLocale-jfnFNkOm.js";import{g as R}from"./getComponentSlots-CrHVRATn.js";import{g as q}from"./getVariantClassName-8Q9J5RBg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Fgj0RR9e.js";import"./index-B2psWi08.js";import"./isValidReactNode-BYhVXax1.js";import"./camelCase-CIGTPKf2.js";var s=(o=>(o.ACTIONS="Dialog.Actions",o.CONTENT="Dialog.Content",o.TITLE="Dialog.Title",o))(s||{});const w="_root_1fxwu_1",P={root:w},g=o=>{const{children:n}=o;return e.jsx("div",{className:P.root,children:n})};g.displayName=s.ACTIONS;g.__docgenInfo={description:`Dialog Actions sub component.

Used to render the actions of the dialog.`,methods:[]};const X="_root_jagsa_1",K={root:X},f=o=>{const{children:n}=o;return e.jsx("div",{className:K.root,children:n})};f.displayName=s.CONTENT;f.__docgenInfo={description:"",methods:[]};const V="Dialog",H=[s.ACTIONS,s.CONTENT,s.TITLE],U="_underlay_100vj_25",W="_modal_100vj_34",Y="_dialog_100vj_41",F="_sizeXs_100vj_51",G="_sizeSm_100vj_54",J="_sizeMd_100vj_57",Q="_sizeLg_100vj_60",Z="_header_100vj_64",ee="_close_100vj_71",oe="_actions_100vj_79",a={underlay:U,modal:W,dialog:Y,sizeXs:F,sizeSm:G,sizeMd:J,sizeLg:Q,header:Z,close:ee,actions:oe},h=o=>{const{children:n,container:d,open:i,modal:m=!0,onOpenChange:l,size:b="md"}=o,D=B(),C=c.useRef(null),p=c.useRef(null),{dialogProps:O}=z(o,C),y=M({isOpen:i,onOpenChange:l}),{modalProps:j,underlayProps:N}=A({isDismissable:!m,isKeyboardDismissDisabled:!1},y,p),{[s.ACTIONS]:T,[s.CONTENT]:x,[s.TITLE]:v}=c.useMemo(()=>R(n,H),[n]),E=$=>{$.preventDefault(),y.close()};if(!i)return null;const S=k(a.dialog,q("size",b,a));return e.jsx(I,{portalContainer:d,children:e.jsx("div",{className:a.underlay,...N,children:e.jsx("div",{className:a.modal,...j,ref:p,children:e.jsx(L,{getContainer:()=>p.current,children:e.jsxs("div",{className:S,...O,ref:C,children:[e.jsxs("div",{className:a.header,children:[v,e.jsx("button",{"aria-label":D.dialog.close,className:a.close,onClick:E,children:"⛌"})]}),x&&e.jsx("div",{children:x}),T&&e.jsx("div",{className:a.actions,children:T})]})})})})})};h.displayName=V;h.__docgenInfo={description:"Dialog component.",methods:[],displayName:"Dialog",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close the dialog when the escape key is pressed."},container:{required:!1,tsType:{name:"HTMLElement"},description:`The container element in which the overlay portal will be placed.
@default document.body`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback that is called when the dialog is opened or closed."},modal:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is modal.
Modal dialog is not dismissable by clicking outside or pressing the Escape key.`},open:{required:!1,tsType:{name:"boolean"},description:"Whether the dialog is open."},size:{required:!1,tsType:{name:"literal",value:"`${EElementSize.XS | EElementSize.SM | EElementSize.MD | EElementSize.LG}`"},description:"Size of the dialog."}},composes:["IAriaDialogProps"]};const ne="_root_1ae0y_1",se={root:ne},_=o=>{const{children:n}=o;return e.jsx("div",{className:se.root,children:n})};_.displayName=s.TITLE;_.__docgenInfo={description:"",methods:[]};const t=h;t.Actions=g;t.Content=f;t.Title=_;const{fn:te}=__STORYBOOK_MODULE_TEST__,ye={title:"Kit/Components/Dialog",component:t,subcomponents:{"Dialog.Content":t.Content,"Dialog.Actions":t.Actions},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{modal:{table:{defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:["xs","sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"xs | sm | md | lg"}}}},args:{onOpenChange:te()}},r={render:function(n){const[d,i]=c.useState(!1),m=()=>{i(!0)},l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:m,children:"Open Dialog"}),e.jsxs(t,{...n,open:d,onOpenChange:i,children:[e.jsx(t.Content,{children:"Dialog Content"}),e.jsxs(t.Actions,{children:[e.jsx(u,{onClick:l,children:"Ok"}),e.jsx(u,{onClick:l,variant:"secondary",children:"Cancel"})]})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(true);
    };
    const handleCloseClick = () => {
      setOpen(false);
    };
    return <>
        <Button onClick={handleClick}>Open Dialog</Button>
        <Dialog {...props} open={open} onOpenChange={setOpen}>
          <Dialog.Content>Dialog Content</Dialog.Content>
          <Dialog.Actions>
            <Button onClick={handleCloseClick}>Ok</Button>
            <Button onClick={handleCloseClick} variant="secondary">
              Cancel
            </Button>
          </Dialog.Actions>
        </Dialog>
      </>;
  }
}`,...r.parameters?.docs?.source}}};const Te=["Default"];export{r as Default,Te as __namedExportsOrder,ye as default};
