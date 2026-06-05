import{N as m,H as e,R as T}from"./iframe-DLB2Hu3F.js";import{i as N}from"./isValidReactNode-BzQ3T0yK.js";import{c as O}from"./clsx-B-dksMZM.js";import{I as R}from"./Icon-BVr_LDAg.js";import"./preload-helper-PPVm8Dsz.js";const _=m.createContext(null),M=()=>m.useContext(_),w="Accordion";var j=(t=>(t.ITEM="Accordion.Item",t))(j||{});const q="_root_grshw_5",E={root:q},z=[j.ITEM],C=t=>{const{children:g,defaultValue:p=null,onValueChange:s,value:r}=t,u=r!==void 0,[c,a]=m.useState(p);let i;u?i=r??null:i=c;const v=m.useCallback(o=>{let d;i===o?d=null:d=o,u||a(d),s?.(d)},[i,u,s]),x=o=>N(z,o)?o:null;return e.jsx(_.Provider,{value:{onItemToggle:v,openValue:i},children:e.jsx("div",{className:E.root,children:T.Children.map(g,x)})})};C.displayName=w;C.__docgenInfo={description:`Accordion container. Supports multi-select and single-select modes.

Uses compound component pattern via \`<Accordion.Item>\`.
In multi-select mode (default), items without a \`value\` prop manage their own
open/close state independently. In single-select mode, items with a \`value\` prop
are controlled by the Accordion via \`defaultValue\` (uncontrolled) or
\`value\` + \`onValueChange\` (controlled).

@example
// Multi-select (default, items without \`value\`)
\`\`\`tsx
<Accordion>
  <Accordion.Item title="Section 1">
    Content for section 1
  </Accordion.Item>
  <Accordion.Item title="Section 2" open>
    Content for section 2 (starts open)
  </Accordion.Item>
</Accordion>
\`\`\`

@example
// Single-select (uncontrolled with \`defaultValue\`)
\`\`\`tsx
<Accordion defaultValue="tab2">
  <Accordion.Item value="tab1" title="Section 1">
    Content
  </Accordion.Item>
  <Accordion.Item value="tab2" title="Section 2">
    Content
  </Accordion.Item>
</Accordion>
\`\`\`

@example
// Single-select (controlled with \`value\` + \`onValueChange\`)
\`\`\`tsx
<Accordion value={value} onValueChange={setValue}>
  <Accordion.Item value="tab1" title="Section 1">
    Content
  </Accordion.Item>
</Accordion>
\`\`\``,methods:[],displayName:"Accordion",props:{value:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Controlled open item value."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Callback when open item changes."},defaultValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Default open item value for uncontrolled mode."}}};const k="_root_z83hn_7",P="_trigger_z83hn_11",D="_open_z83hn_27",F="_title_z83hn_32",L="_icon_z83hn_41",H="_chevron_z83hn_46",K="_content_z83hn_66",l={root:k,trigger:P,open:D,title:F,icon:L,chevron:H,content:K},S=t=>{const{children:g,icon:p,onOpenChange:s,open:r,title:u,value:c}=t,a=M(),i=a&&c!==void 0,[v,x]=m.useState(!1);let o;i?o=a.openValue===c:r!==void 0?o=r:o=v;const d=m.useCallback(()=>{if(i&&c!==void 0){a.onItemToggle(c);return}if(r!==void 0){s?.(!r);return}x(V=>{const y=!V;return s?.(y),y})},[i,a,c,r,s]),b=O(l.root,{[l.open]:o});return e.jsxs("div",{className:b,children:[e.jsxs("button",{className:l.trigger,onClick:d,type:"button",children:[e.jsxs("span",{className:l.title,children:[p&&e.jsx("span",{className:l.icon,children:e.jsx(R,{name:p,size:16})}),u]}),e.jsx("span",{className:l.chevron})]}),e.jsx("div",{className:l.content,children:g})]})};S.displayName=`${w}.Item`;S.__docgenInfo={description:'Accordion item. Must be a direct child of `<Accordion>`.\n\nCan be used standalone without a `value` prop (multi-select, each item manages\nits own open state independently) or with a `value` prop for single-select mode\ncontrolled by the parent Accordion via `defaultValue` or `value` + `onValueChange`.\n\n@example\n// Standalone without `value` (multi-select)\n```tsx\n<Accordion.Item title="Settings" icon="settings">\n  Settings content\n</Accordion.Item>\n```\n\n@example\n// With `value` for single-select\n```tsx\n<Accordion.Item value="settings" title="Settings">\n  Settings content\n</Accordion.Item>\n```',methods:[],props:{value:{required:!1,tsType:{name:"string"},description:"Unique value for accordion control mode."},icon:{required:!1,tsType:{name:"IconName"},description:"Icon name displayed before the title."},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when open state changes."},title:{required:!0,tsType:{name:"string"},description:"Item title text."}}};const n=C;n.Item=S;const Z={title:"Kit/Components/Accordion",component:n,subcomponents:{"Accordion.Item":n.Item},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}}}},h={render:function(){return e.jsx("div",{style:{width:"800px"},children:e.jsxs(n,{children:[e.jsx(n.Item,{title:"Accordion Slide 1",children:"Content of accordion item 1"}),e.jsx(n.Item,{title:"Accordion Slide 2",open:!0,children:"Content of accordion item 2 (starts open)"}),e.jsx(n.Item,{title:"Accordion Slide 3",children:"Content of accordion item 3"})]})})}},A={render:function(){return e.jsx("div",{style:{width:"800px"},children:e.jsxs(n,{defaultValue:"slide1",children:[e.jsx(n.Item,{value:"slide1",title:"Accordion Slide 1",children:"Content of accordion item 1"}),e.jsx(n.Item,{value:"slide2",title:"Accordion Slide 2",children:"Content of accordion item 2"}),e.jsx(n.Item,{value:"slide3",title:"Accordion Slide 3",children:"Content of accordion item 3"})]})})}},f={render:function(){return e.jsx("div",{style:{width:"800px"},children:e.jsxs(n,{children:[e.jsx(n.Item,{icon:"info",title:"General Information",open:!0,children:"System version: v2.4.12-stable. Kernel: x86_64 Multi-core."}),e.jsx(n.Item,{icon:"shieldCheck",title:"Security Protocols",children:"Zero Trust architecture with OAuth 2.0 and mandatory Hardware MFA."}),e.jsx(n.Item,{icon:"file",title:"System Logs",children:"[2023-10-14 22:01] INFO: Root login from 10.0.0.1"})]})})}},I={render:function(){return e.jsx("div",{style:{width:"400px"},children:e.jsx(n,{children:e.jsx(n.Item,{title:"Single Section",children:"This accordion has only one item with standalone open state."})})})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: '800px'
    }}>
        <Accordion>
          <Accordion.Item title="Accordion Slide 1">Content of accordion item 1</Accordion.Item>
          <Accordion.Item title="Accordion Slide 2" open>
            Content of accordion item 2 (starts open)
          </Accordion.Item>
          <Accordion.Item title="Accordion Slide 3">Content of accordion item 3</Accordion.Item>
        </Accordion>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: '800px'
    }}>
        <Accordion defaultValue="slide1">
          <Accordion.Item value="slide1" title="Accordion Slide 1">
            Content of accordion item 1
          </Accordion.Item>
          <Accordion.Item value="slide2" title="Accordion Slide 2">
            Content of accordion item 2
          </Accordion.Item>
          <Accordion.Item value="slide3" title="Accordion Slide 3">
            Content of accordion item 3
          </Accordion.Item>
        </Accordion>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: '800px'
    }}>
        <Accordion>
          <Accordion.Item icon="info" title="General Information" open>
            System version: v2.4.12-stable. Kernel: x86_64 Multi-core.
          </Accordion.Item>
          <Accordion.Item icon="shieldCheck" title="Security Protocols">
            Zero Trust architecture with OAuth 2.0 and mandatory Hardware MFA.
          </Accordion.Item>
          <Accordion.Item icon="file" title="System Logs">
            [2023-10-14 22:01] INFO: Root login from 10.0.0.1
          </Accordion.Item>
        </Accordion>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: '400px'
    }}>
        <Accordion>
          <Accordion.Item title="Single Section">
            This accordion has only one item with standalone open state.
          </Accordion.Item>
        </Accordion>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};const Y=["Default","SingleSelect","WithIcons","SingleItem"];export{h as Default,I as SingleItem,A as SingleSelect,f as WithIcons,Y as __namedExportsOrder,Z as default};
