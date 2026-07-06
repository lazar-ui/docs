import{N as i,H as a}from"./iframe-BA3APmPd.js";import{c as C}from"./clsx-B-dksMZM.js";import{s as T}from"./Overlay-CEiuUxdO.js";import{$ as y,a as O}from"./useOverlayTriggerState-BQZ6P9BW.js";import{$}from"./useOverlayPosition-BNgpjyNy.js";const f=i.createContext(null),R=f.Provider,v=()=>{const e=i.useContext(f);if(!e)throw new Error("Sub-component must be used within a Popover");return e},c="Popover",_=4;var d=(e=>(e.TRIGGER=`${c}.Trigger`,e.CONTENT=`${c}.Content`,e))(d||{});const N="_content_1rtd6_10",E="_noPadding_1rtd6_32",g={content:N,noPadding:E},l=e=>{const{children:t,padding:r=!0}=e,{triggerRef:n,state:o,placement:p}=v(),s=i.useRef(null),{overlayProps:b,placement:h}=$({isOpen:o.isOpen,offset:_,overlayRef:s,placement:p,shouldFlip:!0,targetRef:n}),{overlayProps:x}=y({isDismissable:!0,isOpen:o.isOpen,onClose:o.close},s);return o.isOpen?a.jsx(T,{children:a.jsx("div",{className:C(g.content,!r&&g.noPadding),"data-placement":h,ref:s,...x,...b,children:t})}):null};l.displayName=d.CONTENT;l.__docgenInfo={description:`Popover content panel. Renders via portal with automatic positioning relative to the trigger.
Closes on outside click and ESC key.

Must be used as a child of \`<Popover>\`.`,methods:[],props:{padding:{required:!1,tsType:{name:"boolean"},description:"Whether content has padding. Default: `true`."}}};const u=e=>{const{children:t,open:r,onOpenChange:n,placement:o="bottom"}=e,p=i.useRef(null),s=O({isOpen:r,onOpenChange:n});return a.jsx(R,{value:{placement:o,state:s,triggerRef:p},children:t})};u.displayName=c;u.__docgenInfo={description:`Popover container. Manages open/close state and provides context to \`Popover.Trigger\` and \`Popover.Content\`.

@example
\`\`\`tsx
<Popover placement="bottom start">
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>
  <Popover.Content>
    <div style={{ padding: 8 }}>Content</div>
  </Popover.Content>
</Popover>
\`\`\``,methods:[],displayName:"Popover",props:{open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when open state changes."},placement:{required:!1,tsType:{name:"Placement"},description:"Placement relative to trigger. All useOverlayPosition placements are supported. Default: `'bottom'`."}}};const m=e=>{const{children:t}=e,{triggerRef:r,state:n}=v();return a.jsx("span",{"aria-expanded":n.isOpen,"aria-haspopup":"true",onClick:n.toggle,ref:r,children:t})};m.displayName=d.TRIGGER;m.__docgenInfo={description:"Popover trigger element. Wraps children with click handler and ARIA attributes.\n\nMust be used as a child of `<Popover>`.",methods:[]};const P=u;P.Trigger=m;P.Content=l;export{P,v as u};
