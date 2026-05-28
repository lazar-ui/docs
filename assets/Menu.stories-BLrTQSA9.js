import{H as e,R as w}from"./iframe-DSZZJwFM.js";import{B as x}from"./Button-BpaGC_AH.js";import{c as C}from"./clsx-B-dksMZM.js";import{u as R,P as v}from"./index-B-3D7ogP.js";import{i as B}from"./isValidReactNode-BYhVXax1.js";import"./preload-helper-PPVm8Dsz.js";import"./getVariantClassName-8Q9J5RBg.js";import"./camelCase-CIGTPKf2.js";import"./Overlay-D9YHlTAm.js";import"./index-Fgj0RR9e.js";import"./index-B2psWi08.js";import"./useOverlayTriggerState-CJkWZuUH.js";import"./useOverlayPosition-DoOa2Z8O.js";const A=()=>{const{state:t}=R();return{close:()=>{t.close()}}},c="Menu",E="bottom start";var a=(t=>(t.CHECKBOX=`${c}.Checkbox`,t.CONTENT=`${c}.Content`,t.GROUP=`${c}.Group`,t.ITEM=`${c}.Item`,t.SEPARATOR=`${c}.Separator`,t.TRIGGER=`${c}.Trigger`,t))(a||{});const D="_root_15rud_1",L="_disabled_15rud_19",O="_checkbox_15rud_27",P="_checked_15rud_38",S="_label_15rud_44",u={root:D,disabled:L,checkbox:O,checked:P,label:S},k=t=>{const{checked:r,children:s,disabled:o=!1,onCheckedChange:i}=t,{close:d}=A(),l=C(u.root,o&&u.disabled),b=()=>{o||(i&&i(!r),d())};return e.jsxs("div",{"aria-checked":r,"aria-disabled":o,className:l,onClick:b,role:"menuitemcheckbox",tabIndex:o?-1:0,children:[e.jsx("span",{className:C(u.checkbox,r&&u.checked),children:r&&e.jsx("svg",{"aria-hidden":"true",height:"12",viewBox:"0 0 12 12",width:"12",children:e.jsx("path",{d:"M2 6 L5 9 L10 3",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})}),e.jsx("span",{className:u.label,children:s})]})};k.displayName=a.CHECKBOX;k.__docgenInfo={description:"",methods:[],props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (item label)."},checked:{required:!0,tsType:{name:"boolean"},description:"Whether the item is checked."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when checked state changes."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled."}}};const q="_root_1h0xj_14",$={root:q},I=t=>{const{children:r}=t;return e.jsx(v.Content,{padding:!1,children:e.jsx("div",{className:$.root,children:r})})};I.displayName=a.CONTENT;I.__docgenInfo={description:"",methods:[]};const W=[a.TRIGGER,a.CONTENT],j=t=>{const{children:r,open:s,onOpenChange:o,placement:i=E}=t,d=l=>B(W,l)?l:null;return e.jsx(v,{open:s,onOpenChange:o,placement:i,children:w.Children.map(r,d)})};j.displayName=c;j.__docgenInfo={description:"Menu container. Manages open/close state via Popover and validates children.\n\nUses compound component pattern via `<Menu.Trigger>`, `<Menu.Content>`,\n`<Menu.Item>`, `<Menu.Checkbox>`, `<Menu.Separator>`, and `<Menu.Group>`.\n\n@example\n```tsx\n<Menu>\n  <Menu.Trigger>\n    <Button>Actions</Button>\n  </Menu.Trigger>\n  <Menu.Content>\n    <Menu.Item icon={<Icon />}>Edit</Menu.Item>\n    <Menu.Item danger>Delete</Menu.Item>\n  </Menu.Content>\n</Menu>\n```",methods:[],displayName:"Menu",props:{open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when open state changes."},placement:{required:!1,tsType:{name:"Placement"},description:"Placement relative to trigger. All useOverlayPosition placements are supported. Default: `'bottom-start'`."}}};const H="_root_dtqrm_1",U="_label_dtqrm_9",N={root:H,label:U},_=t=>{const{children:r,label:s}=t;return e.jsxs("div",{className:N.root,role:"group",children:[e.jsx("div",{className:N.label,children:s}),r]})};_.displayName=a.GROUP;_.__docgenInfo={description:"",methods:[],props:{label:{required:!0,tsType:{name:"string"},description:"Group label."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Group items."}}};const V="_root_5s7ps_1",Z="_disabled_5s7ps_19",F="_danger_5s7ps_26",K="_icon_5s7ps_33",z="_label_5s7ps_43",p={root:V,disabled:Z,danger:F,icon:K,label:z},f=t=>{const{children:r,danger:s=!1,disabled:o=!1,icon:i,onAction:d}=t,{close:l}=A(),b=C(p.root,s&&p.danger,o&&p.disabled),G=()=>{o||(d&&d(),l())};return e.jsxs("div",{"aria-disabled":o,className:b,onClick:G,role:"menuitem",tabIndex:o?-1:0,children:[i&&e.jsx("span",{className:p.icon,children:i}),e.jsx("span",{className:p.label,children:r})]})};f.displayName=a.ITEM;f.__docgenInfo={description:"",methods:[],props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (item label)."},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action callback when the item is selected."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled."},danger:{required:!1,tsType:{name:"boolean"},description:"Whether the item is in danger state (e.g. delete action)."},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon before the label."}}};const X="_root_16pgq_1",Y={root:X},T=()=>e.jsx("hr",{className:Y.root});T.displayName=a.SEPARATOR;T.__docgenInfo={description:"",methods:[]};const y=t=>{const{children:r}=t,{triggerRef:s,state:o}=R();return e.jsx("span",{"aria-expanded":o.isOpen,"aria-haspopup":"true",onClick:o.toggle,ref:s,children:r})};y.displayName=a.TRIGGER;y.__docgenInfo={description:"",methods:[]};const n=j;n.Checkbox=k;n.Content=I;n.Group=_;n.Item=f;n.Separator=T;n.Trigger=y;const ue={title:"Kit/Components/Menu",component:n,subcomponents:{"Menu.Trigger":n.Trigger,"Menu.Content":n.Content,"Menu.Item":n.Item,"Menu.Checkbox":n.Checkbox,"Menu.Separator":n.Separator,"Menu.Group":n.Group},parameters:{layout:"centered"},argTypes:{placement:{control:{type:"select"},options:["bottom","bottom-start","bottom-end","top","top-start","top-end","left","left-start","left-end","right","right-start","right-end"],table:{defaultValue:{summary:"bottom-start"},type:{summary:"Placement"}}}},tags:["autodocs"]},m={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(x,{children:"Actions"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{children:"View details"}),e.jsx(n.Item,{icon:e.jsxs("svg",{"aria-hidden":"true",fill:"none",height:"16",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"16",children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),children:"Edit"}),e.jsx(n.Item,{icon:e.jsxs("svg",{"aria-hidden":"true",fill:"none",height:"16",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"16",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]}),children:"Download"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{danger:!0,children:"Delete"})]})]})}},h={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(x,{children:"Grouped Menu"})}),e.jsxs(n.Content,{children:[e.jsxs(n.Group,{label:"Sort",children:[e.jsx(n.Item,{children:"Name A-Z"}),e.jsx(n.Item,{children:"Name Z-A"}),e.jsx(n.Item,{children:"Date"})]}),e.jsx(n.Separator,{}),e.jsxs(n.Group,{label:"Filter",children:[e.jsx(n.Item,{children:"Active only"}),e.jsx(n.Item,{children:"All items"})]})]})]})}},g={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(x,{children:"Columns"})}),e.jsxs(n.Content,{children:[e.jsx(n.Checkbox,{checked:!0,children:"Name"}),e.jsx(n.Checkbox,{checked:!0,children:"Email"}),e.jsx(n.Checkbox,{checked:!1,children:"Phone"}),e.jsx(n.Checkbox,{checked:!1,children:"Address"})]})]})}},M={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(x,{children:"Disabled Items"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{children:"Available action"}),e.jsx(n.Item,{disabled:!0,children:"Disabled action"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{danger:!0,children:"Delete"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Menu {...props}>
        <Menu.Trigger>
          <Button>Actions</Button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>View details</Menu.Item>
          <Menu.Item icon={<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>}>Edit</Menu.Item>
          <Menu.Item icon={<svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>}>Download</Menu.Item>
          <Menu.Separator />
          <Menu.Item danger>Delete</Menu.Item>
        </Menu.Content>
      </Menu>;
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Menu {...props}>
        <Menu.Trigger>
          <Button>Grouped Menu</Button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Group label="Sort">
            <Menu.Item>Name A-Z</Menu.Item>
            <Menu.Item>Name Z-A</Menu.Item>
            <Menu.Item>Date</Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Group label="Filter">
            <Menu.Item>Active only</Menu.Item>
            <Menu.Item>All items</Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Menu {...props}>
        <Menu.Trigger>
          <Button>Columns</Button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Checkbox checked>Name</Menu.Checkbox>
          <Menu.Checkbox checked>Email</Menu.Checkbox>
          <Menu.Checkbox checked={false}>Phone</Menu.Checkbox>
          <Menu.Checkbox checked={false}>Address</Menu.Checkbox>
        </Menu.Content>
      </Menu>;
  }
}`,...g.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Menu {...props}>
        <Menu.Trigger>
          <Button>Disabled Items</Button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>Available action</Menu.Item>
          <Menu.Item disabled>Disabled action</Menu.Item>
          <Menu.Separator />
          <Menu.Item danger>Delete</Menu.Item>
        </Menu.Content>
      </Menu>;
  }
}`,...M.parameters?.docs?.source}}};const pe=["Default","WithGroups","WithCheckboxItems","DisabledItems"];export{m as Default,M as DisabledItems,g as WithCheckboxItems,h as WithGroups,pe as __namedExportsOrder,ue as default};
