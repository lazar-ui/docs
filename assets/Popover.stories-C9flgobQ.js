import{H as t}from"./iframe-__PV-dJp.js";import{B as n}from"./Button-COc9qoqY.js";import{P as o}from"./index-9VUNlpI4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./getVariantClassName-B6sDZ9j_.js";import"./camelCase-DYfZbbag.js";import"./Overlay-BBlNxJ4y.js";import"./index-kAkRoNAC.js";import"./index-BtmiAMd1.js";import"./useOverlayTriggerState-spl-KdXP.js";import"./useOverlayPosition-CGE_UhqP.js";const f={title:"Kit/Components/Popover",component:o,subcomponents:{"Popover.Trigger":o.Trigger,"Popover.Content":o.Content},parameters:{layout:"centered"},argTypes:{placement:{control:{type:"select"},options:["bottom","bottom start","bottom end","top","top start","top end","left","left start","left end","right","right start","right end"]}},tags:["autodocs"]},e={args:{placement:"bottom"},render:function(r){return t.jsxs(o,{...r,children:[t.jsx(o.Trigger,{children:t.jsx(n,{children:"Open Popover"})}),t.jsx(o.Content,{children:t.jsx("div",{style:{minWidth:160},children:t.jsx("p",{children:"Popover content here"})})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
