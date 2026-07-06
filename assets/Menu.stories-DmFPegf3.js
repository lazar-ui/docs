import{H as e,R as D}from"./iframe-BA3APmPd.js";import{B as b}from"./Button-jBwP2k0o.js";import{c as C}from"./clsx-B-dksMZM.js";import{I as R}from"./Icon-BWAzVXnG.js";import{u as A,P as G}from"./index-C6f0U5OS.js";import{i as O}from"./isValidReactNode-CipLFYty.js";import"./preload-helper-PPVm8Dsz.js";import"./getVariantClassName-DAuwWUc7.js";import"./camelCase-DVHjKwSo.js";import"./Overlay-CEiuUxdO.js";import"./index-CIIB4FLJ.js";import"./index-C69Vd08x.js";import"./useOverlayTriggerState-BQZ6P9BW.js";import"./useOverlayPosition-BNgpjyNy.js";const v=()=>{const{state:t}=A();return{close:()=>{t.close()}}},i="Menu",P="bottom start";var a=(t=>(t.CHECKBOX=`${i}.Checkbox`,t.CONTENT=`${i}.Content`,t.GROUP=`${i}.Group`,t.ITEM=`${i}.Item`,t.SEPARATOR=`${i}.Separator`,t.TRIGGER=`${i}.Trigger`,t))(a||{});const S="_root_15rud_1",q="_disabled_15rud_19",$="_checkbox_15rud_27",B="_checked_15rud_38",w="_label_15rud_44",u={root:S,disabled:q,checkbox:$,checked:B,label:w},I=t=>{const{checked:r,children:s,disabled:o=!1,onCheckedChange:c}=t,{close:d}=v(),l=C(u.root,o&&u.disabled),x=()=>{o||(c&&c(!r),d())};return e.jsxs("div",{"aria-checked":r,"aria-disabled":o,className:l,onClick:x,role:"menuitemcheckbox",tabIndex:o?-1:0,children:[e.jsx("span",{className:C(u.checkbox,r&&u.checked),children:r&&e.jsx(R,{name:"check",size:12,strokeWidth:3})}),e.jsx("span",{className:u.label,children:s})]})};I.displayName=a.CHECKBOX;I.__docgenInfo={description:"",methods:[],props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (item label)."},checked:{required:!0,tsType:{name:"boolean"},description:"Whether the item is checked."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when checked state changes."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled."}}};const W="_root_1h0xj_14",U={root:W},_=t=>{const{children:r}=t;return e.jsx(G.Content,{padding:!1,children:e.jsx("div",{className:U.root,children:r})})};_.displayName=a.CONTENT;_.__docgenInfo={description:"",methods:[]};const L=[a.TRIGGER,a.CONTENT],f=t=>{const{children:r,open:s,onOpenChange:o,placement:c=P}=t,d=l=>O(L,l)?l:null;return e.jsx(G,{open:s,onOpenChange:o,placement:c,children:D.Children.map(r,d)})};f.displayName=i;f.__docgenInfo={description:'Menu container. Manages open/close state via Popover and validates children.\n\nUses compound component pattern via `<Menu.Trigger>`, `<Menu.Content>`,\n`<Menu.Item>`, `<Menu.Checkbox>`, `<Menu.Separator>`, and `<Menu.Group>`.\n\n@example\n```tsx\n<Menu>\n  <Menu.Trigger>\n    <Button>Actions</Button>\n  </Menu.Trigger>\n  <Menu.Content>\n    <Menu.Item icon="edit">Edit</Menu.Item>\n    <Menu.Item danger>Delete</Menu.Item>\n  </Menu.Content>\n</Menu>\n```',methods:[],displayName:"Menu",props:{open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when open state changes."},placement:{required:!1,tsType:{name:"Placement"},description:"Placement relative to trigger. All useOverlayPosition placements are supported. Default: `'bottom-start'`."}}};const V="_root_dtqrm_1",Z="_label_dtqrm_9",y={root:V,label:Z},k=t=>{const{children:r,label:s}=t;return e.jsxs("div",{className:y.root,role:"group",children:[e.jsx("div",{className:y.label,children:s}),r]})};k.displayName=a.GROUP;k.__docgenInfo={description:"",methods:[],props:{label:{required:!0,tsType:{name:"string"},description:"Group label."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Group items."}}};const z="_root_5s7ps_1",F="_disabled_5s7ps_19",H="_danger_5s7ps_26",K="_icon_5s7ps_33",X="_label_5s7ps_43",m={root:z,disabled:F,danger:H,icon:K,label:X},j=t=>{const{children:r,danger:s=!1,disabled:o=!1,icon:c,onAction:d}=t,{close:l}=v(),x=C(m.root,s&&m.danger,o&&m.disabled),E=()=>{o||(d&&d(),l())};return e.jsxs("div",{"aria-disabled":o,className:x,onClick:E,role:"menuitem",tabIndex:o?-1:0,children:[c&&e.jsx("span",{className:m.icon,children:e.jsx(R,{name:c,size:16})}),e.jsx("span",{className:m.label,children:r})]})};j.displayName=a.ITEM;j.__docgenInfo={description:"",methods:[],props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (item label)."},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action callback when the item is selected."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled."},danger:{required:!1,tsType:{name:"boolean"},description:"Whether the item is in danger state (e.g. delete action)."},icon:{required:!1,tsType:{name:"IconName"},description:"Optional icon name before the label."}}};const Y="_root_16pgq_1",J={root:Y},T=()=>e.jsx("hr",{className:J.root});T.displayName=a.SEPARATOR;T.__docgenInfo={description:"",methods:[]};const N=t=>{const{children:r}=t,{triggerRef:s,state:o}=A();return e.jsx("span",{"aria-expanded":o.isOpen,"aria-haspopup":"true",onClick:()=>o.toggle(),ref:s,children:r})};N.displayName=a.TRIGGER;N.__docgenInfo={description:"",methods:[]};const n=f;n.Checkbox=I;n.Content=_;n.Group=k;n.Item=j;n.Separator=T;n.Trigger=N;const pe={title:"@lazar-ui／kit/Components/Menu",component:n,subcomponents:{"Menu.Trigger":n.Trigger,"Menu.Content":n.Content,"Menu.Item":n.Item,"Menu.Checkbox":n.Checkbox,"Menu.Separator":n.Separator,"Menu.Group":n.Group},parameters:{layout:"centered"},argTypes:{placement:{control:{type:"select"},options:["bottom","bottom-start","bottom-end","top","top-start","top-end","left","left-start","left-end","right","right-start","right-end"],table:{defaultValue:{summary:"bottom-start"},type:{summary:"Placement"}}}},tags:["autodocs"]},p={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(b,{children:"Actions"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{children:"View details"}),e.jsx(n.Item,{icon:"edit",children:"Edit"}),e.jsx(n.Item,{icon:"download",children:"Download"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{danger:!0,children:"Delete"})]})]})}},h={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(b,{children:"Grouped Menu"})}),e.jsxs(n.Content,{children:[e.jsxs(n.Group,{label:"Sort",children:[e.jsx(n.Item,{children:"Name A-Z"}),e.jsx(n.Item,{children:"Name Z-A"}),e.jsx(n.Item,{children:"Date"})]}),e.jsx(n.Separator,{}),e.jsxs(n.Group,{label:"Filter",children:[e.jsx(n.Item,{children:"Active only"}),e.jsx(n.Item,{children:"All items"})]})]})]})}},M={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(b,{children:"Columns"})}),e.jsxs(n.Content,{children:[e.jsx(n.Checkbox,{checked:!0,children:"Name"}),e.jsx(n.Checkbox,{checked:!0,children:"Email"}),e.jsx(n.Checkbox,{checked:!1,children:"Phone"}),e.jsx(n.Checkbox,{checked:!1,children:"Address"})]})]})}},g={render:function(r){return e.jsxs(n,{...r,children:[e.jsx(n.Trigger,{children:e.jsx(b,{children:"Disabled Items"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{children:"Available action"}),e.jsx(n.Item,{disabled:!0,children:"Disabled action"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{danger:!0,children:"Delete"})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const he=["Default","WithGroups","WithCheckboxItems","DisabledItems"];export{p as Default,g as DisabledItems,M as WithCheckboxItems,h as WithGroups,he as __namedExportsOrder,pe as default};
