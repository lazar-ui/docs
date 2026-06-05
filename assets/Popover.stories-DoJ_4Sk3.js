import{H as t}from"./iframe-DLB2Hu3F.js";import{B as n}from"./Button-44kQ26xy.js";import{P as o}from"./index-DbY-y-kD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BVr_LDAg.js";import"./getVariantClassName-8orE4ulh.js";import"./camelCase-BTsvIAkU.js";import"./Overlay-BGb8YFqI.js";import"./index-ByrW6-Zw.js";import"./index-evzoQpE5.js";import"./useOverlayTriggerState-Ddyg9acn.js";import"./useOverlayPosition-Bpw1ZuIq.js";const x={title:"Kit/Components/Popover",component:o,subcomponents:{"Popover.Trigger":o.Trigger,"Popover.Content":o.Content},parameters:{layout:"centered"},argTypes:{placement:{control:{type:"select"},options:["bottom","bottom start","bottom end","top","top start","top end","left","left start","left end","right","right start","right end"]}},tags:["autodocs"]},e={args:{placement:"bottom"},render:function(r){return t.jsxs(o,{...r,children:[t.jsx(o.Trigger,{children:t.jsx(n,{children:"Open Popover"})}),t.jsx(o.Content,{children:t.jsx("div",{style:{minWidth:160},children:t.jsx("p",{children:"Popover content here"})})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,x as default};
