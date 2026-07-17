import{N as x,H as n,R as y}from"./iframe-Bsoi6siu.js";import{c as E}from"./clsx-B-dksMZM.js";import{g as P}from"./getVariantClassName-BAUElSeZ.js";import{i as $}from"./isValidReactNode-CEcWDWIh.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-C0kMA6Iw.js";const D=x.createContext(null),q=()=>{const e=x.useContext(D);if(!e)throw new Error("useTabsContext should be used inside Tabs component");return e},A=(e,a,r)=>`${e}-${r}-${a}`,j=e=>{const{defaultActiveIndex:a=0,children:r,onTabChange:s,variant:o}=e,[d,c]=x.useState(a),i=x.useId(),T=t=>{t!==d&&(c(t),s&&s(t))},b=t=>A(i,t,"panel"),u=t=>A(i,t,"tab");return n.jsx(D.Provider,{value:{activeIndex:d,baseId:i,getPanelId:b,getTabId:u,setActiveTab:T,variant:o},children:r})};j.__docgenInfo={description:"",methods:[],displayName:"Provider",props:{defaultActiveIndex:{required:!1,tsType:{name:"number"},description:""},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"ETabsVariant"},description:""}}};const N="Tabs";var f=(e=>(e.PANEL=`${N}.Panel`,e.TAB=`${N}.Tab`,e))(f||{}),_=(e=>(e.BUTTONS="buttons",e.DEFAULT="default",e))(_||{});const L="_root_19epr_1",O="_disabled_19epr_5",S="_variantDefault_19epr_9",M="_active_19epr_22",U="_variantButtons_19epr_26",p={root:L,disabled:O,variantDefault:S,active:M,variantButtons:U},h=e=>{const{disabled:a=!1,label:r,index:s=0,tabIndex:o=0}=e,{activeIndex:d,getPanelId:c,getTabId:i,setActiveTab:T,variant:b}=q(),u=c(s),t=i(s),I=d===s,B=E(p.root,P("variant",b,p),{[p.active]:I,[p.disabled]:a}),R=()=>{a||T(s)};return n.jsx("button",{"aria-selected":I,"aria-controls":u,"aria-disabled":a,className:B,disabled:a,id:t,onClick:R,role:"tab",tabIndex:a?-1:o,children:r})};h.displayName=`${f.TAB}`;h.__docgenInfo={description:'Individual tab button. Must be used as a child of `<Tabs>`.\n\nManages its active/disabled state via parent context and sets proper ARIA attributes (`role="tab"`, `aria-selected`, `aria-controls`).\n\n@example\n```tsx\n<Tabs defaultActiveIndex={0}>\n  <Tabs.Tab label="First" />\n  <Tabs.Tab label="Second" disabled />\n  <Tabs.Tab label="Third" />\n</Tabs>\n```',methods:[],props:{index:{required:!1,tsType:{name:"number"},description:"Index at list of tabs."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled tab flag."},label:{required:!0,tsType:{name:"string"},description:"Label."},tabIndex:{required:!1,tsType:{name:"number"},description:"HTML tabindex attribute."}}};const g=e=>{const{panels:a}=e,{activeIndex:r,getPanelId:s}=q(),o=s(r);return n.jsx("div",{id:o,children:a[r]})};g.displayName=`${f.PANEL}`;g.__docgenInfo={description:"",methods:[],props:{panels:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""}}};const w="_root_1q8hx_20",k="_variantDefault_1q8hx_23",V="_list_1q8hx_23",F="_variantButtons_1q8hx_32",H="_panel_1q8hx_45",m={root:w,variantDefault:k,list:V,variantButtons:F,panel:H},Y=[f.TAB],C=e=>{const{defaultActiveIndex:a=0,children:r,onChange:s,variant:o=_.DEFAULT}=e,d=[],c=E(m.root,P("variant",o,m));let i=!1;const T=(b,u)=>{if(!$(Y,b))return null;const{children:t=null}=b.props;return d.push(t),t&&(i=!0),y.cloneElement(b,{index:u})};return n.jsx(j,{defaultActiveIndex:a,onTabChange:s,variant:o,children:n.jsxs("div",{className:c,children:[n.jsx("div",{className:m.list,children:y.Children.map(r,T)}),i&&n.jsx("div",{className:m.panel,children:n.jsx(g,{panels:d})})]})})};C.displayName="Tabs";C.__docgenInfo={description:`Tabs container. Manages active tab state and renders tab list + panel content.

Uses compound component pattern via \`<Tabs.Tab>\` and \`<Tabs.Panel>\`.
Uncontrolled — tracks active index internally. Pass \`onChange\` to react to changes.

@example
\`\`\`tsx
<Tabs defaultActiveIndex={0} onChange={(i) => console.log(i)}>
  <Tabs.Tab label="Profile">
    <p>Profile content</p>
  </Tabs.Tab>
  <Tabs.Tab label="Settings">
    <p>Settings content</p>
  </Tabs.Tab>
</Tabs>
\`\`\`

@example
\`\`\`tsx
// Buttons variant
<Tabs variant="buttons">
  <Tabs.Tab label="Day" />
  <Tabs.Tab label="Week" />
  <Tabs.Tab label="Month" />
</Tabs>
\`\`\``,methods:[],displayName:"Tabs",props:{defaultActiveIndex:{required:!1,tsType:{name:"number"},description:"Active tab index by default."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"activeIndex"}],return:{name:"void"}}},description:"On active tab change handler."},variant:{required:!1,tsType:{name:"ETabsVariant"},description:"Tabs variant."}}};const l=C;l.Tab=h;const{fn:z}=__STORYBOOK_MODULE_TEST__,Z={title:"@lazar-ui／kit/Components/Tabs",component:l,subcomponents:{"Tabs.Tab":l.Tab},parameters:{layout:"padded"},argTypes:{variant:{control:{type:"radio"},options:Object.values(_),table:{defaultValue:{summary:"ETabsVariant.DEFAULT"}}}},tags:["autodocs"]},v={args:{onChange:z()},render:function(a){return n.jsxs(l,{...a,children:[n.jsx(l.Tab,{label:"Tab 1",children:"Tab 1 Content"}),n.jsx(l.Tab,{label:"Tab 2",children:"Tab 2 Content"}),n.jsx(l.Tab,{label:"Tab 3 Disabled",disabled:!0,children:"Tab 3 Content"}),n.jsx(l.Tab,{label:"Tab 4",children:"Tab 4 Content"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: fn()
  },
  render: function Render(props) {
    return <Tabs {...props}>
        <Tabs.Tab label="Tab 1">Tab 1 Content</Tabs.Tab>
        <Tabs.Tab label="Tab 2">Tab 2 Content</Tabs.Tab>
        <Tabs.Tab label="Tab 3 Disabled" disabled>
          Tab 3 Content
        </Tabs.Tab>
        <Tabs.Tab label="Tab 4">Tab 4 Content</Tabs.Tab>
      </Tabs>;
  }
}`,...v.parameters?.docs?.source}}};const ee=["Default"];export{v as Default,ee as __namedExportsOrder,Z as default};
