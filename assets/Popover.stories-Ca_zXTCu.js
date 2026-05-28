import{H as t}from"./iframe-DSZZJwFM.js";import{B as n}from"./Button-BpaGC_AH.js";import{P as o}from"./index-B-3D7ogP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./getVariantClassName-8Q9J5RBg.js";import"./camelCase-CIGTPKf2.js";import"./Overlay-D9YHlTAm.js";import"./index-Fgj0RR9e.js";import"./index-B2psWi08.js";import"./useOverlayTriggerState-CJkWZuUH.js";import"./useOverlayPosition-DoOa2Z8O.js";const f={title:"Kit/Components/Popover",component:o,subcomponents:{"Popover.Trigger":o.Trigger,"Popover.Content":o.Content},parameters:{layout:"centered"},argTypes:{placement:{control:{type:"select"},options:["bottom","bottom start","bottom end","top","top start","top end","left","left start","left end","right","right start","right end"]}},tags:["autodocs"]},e={args:{placement:"bottom"},render:function(r){return t.jsxs(o,{...r,children:[t.jsx(o.Trigger,{children:t.jsx(n,{children:"Open Popover"})}),t.jsx(o.Content,{children:t.jsx("div",{style:{minWidth:160},children:t.jsx("p",{children:"Popover content here"})})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom'
  },
  render: function Render(props) {
    return <Popover {...props}>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div style={{
          minWidth: 160
        }}>
            <p>Popover content here</p>
          </div>
        </Popover.Content>
      </Popover>;
  }
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,f as default};
