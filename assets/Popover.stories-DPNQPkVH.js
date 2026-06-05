import{H as t}from"./iframe-C2uZ-YCP.js";import{B as n}from"./Button-DZasFVWO.js";import{P as o}from"./index-eM3chO_Q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Ci6u58Ld.js";import"./getVariantClassName-DtrJpW8F.js";import"./camelCase-CD7nAE6y.js";import"./Overlay-QxFMm1-X.js";import"./index-BHUUibaK.js";import"./index-BVW6C9p7.js";import"./useOverlayTriggerState-CdFnQ39F.js";import"./useOverlayPosition-BtOPbxtQ.js";const x={title:"Kit/Components/Popover",component:o,subcomponents:{"Popover.Trigger":o.Trigger,"Popover.Content":o.Content},parameters:{layout:"centered"},argTypes:{placement:{control:{type:"select"},options:["bottom","bottom start","bottom end","top","top start","top end","left","left start","left end","right","right start","right end"]}},tags:["autodocs"]},e={args:{placement:"bottom"},render:function(r){return t.jsxs(o,{...r,children:[t.jsx(o.Trigger,{children:t.jsx(n,{children:"Open Popover"})}),t.jsx(o.Content,{children:t.jsx("div",{style:{minWidth:160},children:t.jsx("p",{children:"Popover content here"})})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
