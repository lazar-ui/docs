import{H as e,N as c}from"./iframe-BPBzskJH.js";import{B as u}from"./Button-CBfJTu-X.js";import{c as $}from"./clsx-B-dksMZM.js";import{$ as k,a as I}from"./useModalOverlay-4JFvCKyd.js";import{s as A,i as L}from"./Overlay-BM71iVmd.js";import{a as M}from"./useOverlayTriggerState-a5beAE0E.js";import{I as B}from"./Icon-CL_Nu61O.js";import{u as R}from"./useLocale-CeB-Jzga.js";import{g as q}from"./getComponentSlots-GYPF9Kal.js";import{g as w}from"./getVariantClassName-CIxlLHOn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2nNP2cz9.js";import"./index-64YmZvTs.js";import"./isValidReactNode-BHVQY4nS.js";import"./camelCase-Dkfjdynd.js";var s=(o=>(o.ACTIONS="Dialog.Actions",o.CONTENT="Dialog.Content",o.TITLE="Dialog.Title",o))(s||{});const P="_root_1fxwu_1",X={root:P},g=o=>{const{children:n}=o;return e.jsx("div",{className:X.root,children:n})};g.displayName=s.ACTIONS;g.__docgenInfo={description:`Dialog Actions sub component.

Used to render the actions of the dialog.`,methods:[]};const K="_root_jagsa_1",V={root:K},f=o=>{const{children:n}=o;return e.jsx("div",{className:V.root,children:n})};f.displayName=s.CONTENT;f.__docgenInfo={description:"",methods:[]};const H="Dialog",U=[s.ACTIONS,s.CONTENT,s.TITLE],W="_underlay_100vj_25",Y="_modal_100vj_34",F="_dialog_100vj_41",G="_sizeXs_100vj_51",J="_sizeSm_100vj_54",Q="_sizeMd_100vj_57",Z="_sizeLg_100vj_60",ee="_header_100vj_64",oe="_close_100vj_71",ne="_actions_100vj_79",a={underlay:W,modal:Y,dialog:F,sizeXs:G,sizeSm:J,sizeMd:Q,sizeLg:Z,header:ee,close:oe,actions:ne},h=o=>{const{children:n,container:d,open:i,modal:m=!0,onOpenChange:l,size:b="md"}=o,j=R(),C=c.useRef(null),p=c.useRef(null),{dialogProps:D}=k(o,C),y=M({isOpen:i,onOpenChange:l}),{modalProps:O,underlayProps:N}=I({isDismissable:!m,isKeyboardDismissDisabled:!1},y,p),{[s.ACTIONS]:T,[s.CONTENT]:x,[s.TITLE]:v}=c.useMemo(()=>q(n,U),[n]),E=S=>{S.preventDefault(),y.close()};if(!i)return null;const z=$(a.dialog,w("size",b,a));return e.jsx(A,{portalContainer:d,children:e.jsx("div",{className:a.underlay,...N,children:e.jsx("div",{className:a.modal,...O,ref:p,children:e.jsx(L,{getContainer:()=>p.current,children:e.jsxs("div",{className:z,...D,ref:C,children:[e.jsxs("div",{className:a.header,children:[v,e.jsx("button",{"aria-label":j.dialog.close,className:a.close,onClick:E,children:e.jsx(B,{name:"x",size:16})})]}),x&&e.jsx("div",{children:x}),T&&e.jsx("div",{className:a.actions,children:T})]})})})})})};h.displayName=H;h.__docgenInfo={description:"Dialog component.",methods:[],displayName:"Dialog",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close the dialog when the escape key is pressed."},container:{required:!1,tsType:{name:"HTMLElement"},description:`The container element in which the overlay portal will be placed.
@default document.body`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback that is called when the dialog is opened or closed."},modal:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is modal.
Modal dialog is not dismissable by clicking outside or pressing the Escape key.`},open:{required:!1,tsType:{name:"boolean"},description:"Whether the dialog is open."},size:{required:!1,tsType:{name:"literal",value:"`${EElementSize.XS | EElementSize.SM | EElementSize.MD | EElementSize.LG}`"},description:"Size of the dialog."}},composes:["IAriaDialogProps"]};const se="_root_1ae0y_1",te={root:se},_=o=>{const{children:n}=o;return e.jsx("div",{className:te.root,children:n})};_.displayName=s.TITLE;_.__docgenInfo={description:"",methods:[]};const t=h;t.Actions=g;t.Content=f;t.Title=_;const{fn:ae}=__STORYBOOK_MODULE_TEST__,xe={title:"Kit/Components/Dialog",component:t,subcomponents:{"Dialog.Content":t.Content,"Dialog.Actions":t.Actions},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{modal:{table:{defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:["xs","sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"xs | sm | md | lg"}}}},args:{onOpenChange:ae()}},r={render:function(n){const[d,i]=c.useState(!1),m=()=>{i(!0)},l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:m,children:"Open Dialog"}),e.jsxs(t,{...n,open:d,onOpenChange:i,children:[e.jsx(t.Content,{children:"Dialog Content"}),e.jsxs(t.Actions,{children:[e.jsx(u,{onClick:l,children:"Ok"}),e.jsx(u,{onClick:l,variant:"secondary",children:"Cancel"})]})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const be=["Default"];export{r as Default,be as __namedExportsOrder,xe as default};
