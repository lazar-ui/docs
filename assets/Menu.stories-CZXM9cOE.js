import{H as e,R as E}from"./iframe-Bsoi6siu.js";import{B as g}from"./Button-BDBJE5JO.js";import{c as C}from"./clsx-B-dksMZM.js";import{I as R}from"./Icon-DU61Syu-.js";import{u as A,P as G}from"./index-B2K0Tnlw.js";import{i as w}from"./isValidReactNode-CEcWDWIh.js";import"./preload-helper-PPVm8Dsz.js";import"./getVariantClassName-BAUElSeZ.js";import"./camelCase-C0kMA6Iw.js";import"./Overlay-C92CW2Ki.js";import"./index-jEh_kjKj.js";import"./index-CFayUG58.js";import"./useOverlayTriggerState-CTQzL-l-.js";import"./useOverlayPosition-CYPn1ENV.js";const v=()=>{const{state:t}=A();return{close:()=>{t.close()}}},c="Menu",D="bottom start";var a=(t=>(t.CHECKBOX=`${c}.Checkbox`,t.CONTENT=`${c}.Content`,t.GROUP=`${c}.Group`,t.ITEM=`${c}.Item`,t.SEPARATOR=`${c}.Separator`,t.TRIGGER=`${c}.Trigger`,t))(a||{});const O="_root_13qzi_1",P="_disabled_13qzi_19",S="_checkbox_13qzi_27",$="_checked_13qzi_38",B="_label_13qzi_44",u={root:O,disabled:P,checkbox:S,checked:$,label:B},I=t=>{const{checked:r,children:s,disabled:o=!1,onCheckedChange:i}=t,{close:d}=v(),l=C(u.root,o&&u.disabled),b=()=>{o||(i&&i(!r),d())};return e.jsxs("div",{"aria-checked":r,"aria-disabled":o,className:l,onClick:b,role:"menuitemcheckbox",tabIndex:o?-1:0,children:[e.jsx("span",{className:C(u.checkbox,r&&u.checked),children:r&&e.jsx(R,{name:"check",size:12,strokeWidth:3})}),e.jsx("span",{className:u.label,children:s})]})};I.displayName=a.CHECKBOX;I.__docgenInfo={description:"",methods:[],props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (item label)."},checked:{required:!0,tsType:{name:"boolean"},description:"Whether the item is checked."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when checked state changes."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled."}}};const W="_root_1h0xj_14",z={root:W},_=t=>{const{children:r}=t;return e.jsx(G.Content,{padding:!1,children:e.jsx("div",{className:z.root,children:r})})};_.displayName=a.CONTENT;_.__docgenInfo={description:"",methods:[]};const U=[a.TRIGGER,a.CONTENT],f=t=>{const{children:r,open:s,onOpenChange:o,placement:i=D}=t,d=l=>w(U,l)?l:null;return e.jsx(G,{open:s,onOpenChange:o,placement:i,children:E.Children.map(r,d)})};f.displayName=c;f.__docgenInfo={description:'Menu container. Manages open/close state via Popover and validates children.\n\nUses compound component pattern via `<Menu.Trigger>`, `<Menu.Content>`,\n`<Menu.Item>`, `<Menu.Checkbox>`, `<Menu.Separator>`, and `<Menu.Group>`.\n\n@example\n```tsx\n<Menu>\n  <Menu.Trigger>\n    <Button>Actions</Button>\n  </Menu.Trigger>\n  <Menu.Content>\n    <Menu.Item icon="edit">Edit</Menu.Item>\n    <Menu.Item danger>Delete</Menu.Item>\n  </Menu.Content>\n</Menu>\n```',methods:[],displayName:"Menu",props:{open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when open state changes."},placement:{required:!1,tsType:{name:"Placement"},description:"Placement relative to trigger. All useOverlayPosition placements are supported. Default: `'bottom-start'`."}}};const L="_root_dtqrm_1",V="_label_dtqrm_9",N={root:L,label:V},k=t=>{const{children:r,label:s}=t;return e.jsxs("div",{className:N.root,role:"group",children:[e.jsx("div",{className:N.label,children:s}),r]})};k.displayName=a.GROUP;k.__docgenInfo={description:"",methods:[],props:{label:{required:!0,tsType:{name:"string"},description:"Group label."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Group items."}}};const Z="_root_9ywxx_1",F="_disabled_9ywxx_19",H="_danger_9ywxx_26",K="_icon_9ywxx_33",X="_label_9ywxx_43",m={root:Z,disabled:F,danger:H,icon:K,label:X},j=t=>{const{children:r,danger:s=!1,disabled:o=!1,icon:i,onAction:d}=t,{close:l}=v(),b=C(m.root,s&&m.danger,o&&m.disabled),q=()=>{o||(d&&d(),l())};return e.jsxs("div",{"aria-disabled":o,className:b,onClick:q,role:"menuitem",tabIndex:o?-1:0,children:[i&&e.jsx("span",{className:m.icon,children:e.jsx(R,{name:i,size:16})}),e.jsx("span",{className:m.label,children:r})]})};j.displayName=a.ITEM;j.__docgenInfo={description:"",methods:[],props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (item label)."},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action callback when the item is selected."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled."},danger:{required:!1,tsType:{name:"boolean"},description:"Whether the item is in danger state (e.g. delete action)."},icon:{required:!1,tsType:{name:"IconName"},description:"Optional icon name before the label."}}};const Y="_root_16pgq_1",J={root:Y},T=()=>e.jsx("hr",{className:J.root});T.displayName=a.SEPARATOR;T.__docgenInfo={description:"",methods:[]};const y=t=>{const{children:r}=t,{triggerRef:s,state:o}=A();return e.jsx("span",{"aria-expanded":o.isOpen,"aria-haspopup":"true",onClick:()=>o.toggle(),ref:s,children:r})};y.displayName=a.TRIGGER;y.__docgenInfo={description:"",methods:[]};const n=f;n.Checkbox=I;n.Content=_;n.Group=k;n.Item=j;n.Separator=T;n.Trigger=y;const pe={title:"@lazar-ui／kit/Components/Menu",component:n,subcomponents:{"Menu.Trigger":n.Trigger,"Menu.Content":n.Content,"Menu.Item":n.Item,"Menu.Checkbox":n.Checkbox,"Menu.Separator":n.Separator,"Menu.Group":n.Group},parameters:{layout:"centered"},argTypes:{placement:{control:{type:"select"},options:["bottom","bottom-start","bottom-end","top","top-start","top-end","left","left-start","left-end","right","right-start","right-end"],table:{defaultValue:{summary:"bottom-start"},type:{summary:"Placement"}}}},tags:["autodocs"]},p={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(g,{children:"Actions"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{children:"View details"}),e.jsx(n.Item,{icon:"edit",children:"Edit"}),e.jsx(n.Item,{icon:"download",children:"Download"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{danger:!0,children:"Delete"})]})]})}},h={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(g,{children:"Grouped Menu"})}),e.jsxs(n.Content,{children:[e.jsxs(n.Group,{label:"Sort",children:[e.jsx(n.Item,{children:"Name A-Z"}),e.jsx(n.Item,{children:"Name Z-A"}),e.jsx(n.Item,{children:"Date"})]}),e.jsx(n.Separator,{}),e.jsxs(n.Group,{label:"Filter",children:[e.jsx(n.Item,{children:"Active only"}),e.jsx(n.Item,{children:"All items"})]})]})]})}},x={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(g,{children:"Columns"})}),e.jsxs(n.Content,{children:[e.jsx(n.Checkbox,{checked:!0,children:"Name"}),e.jsx(n.Checkbox,{checked:!0,children:"Email"}),e.jsx(n.Checkbox,{checked:!1,children:"Phone"}),e.jsx(n.Checkbox,{checked:!1,children:"Address"})]})]})}},M={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(g,{children:"Disabled Items"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{children:"Available action"}),e.jsx(n.Item,{disabled:!0,children:"Disabled action"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{danger:!0,children:"Delete"})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Menu {...props}>
        <Menu.Trigger>
          <Button>Actions</Button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>View details</Menu.Item>
          <Menu.Item icon="edit">Edit</Menu.Item>
          <Menu.Item icon="download">Download</Menu.Item>
          <Menu.Separator />
          <Menu.Item danger>Delete</Menu.Item>
        </Menu.Content>
      </Menu>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const he=["Default","WithGroups","WithCheckboxItems","DisabledItems"];export{p as Default,M as DisabledItems,x as WithCheckboxItems,h as WithGroups,he as __namedExportsOrder,pe as default};
