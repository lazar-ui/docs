import{H as e,R as C,N as g}from"./iframe-DSZZJwFM.js";import{i as v}from"./isValidReactNode-BYhVXax1.js";import{c as a}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";const _="Accordion";var u=(n=>(n.ITEM="Accordion.Item",n))(u||{});const N="_root_1x5uq_5",b={root:N},y=[u.ITEM],l=n=>{const{children:r}=n,c=i=>v(y,i)?i:null;return e.jsx("div",{className:b.root,children:C.Children.map(r,c)})};l.displayName=_;l.__docgenInfo={description:`Accordion container. Renders a vertically stacked list of expandable sections.

Uses compound component pattern via \`<Accordion.Item>\`.

@example
\`\`\`tsx
<Accordion>
  <Accordion.Item title="Section 1">
    Content for section 1
  </Accordion.Item>
  <Accordion.Item title="Section 2" open>
    Content for section 2
  </Accordion.Item>
</Accordion>
\`\`\``,methods:[],displayName:"Accordion"};const S="_root_m3edb_2",j="_open_m3edb_14",O="_description_m3edb_17",w="_content_m3edb_23",E="_icons_m3edb_27",T="_icon_m3edb_27",R="_show_m3edb_41",M="_collapse_m3edb_44",q="_expand_m3edb_44",P="_title_m3edb_59",o={root:S,open:j,description:O,content:w,icons:E,icon:T,show:R,collapse:M,expand:q,title:P},m=n=>{const{children:r,onOpenChange:c,open:i=!1,title:A}=n,[d,x]=g.useState(i),h=a(o.root,{[o.open]:d}),f=()=>{x(I=>{const p=!I;return c&&c(p),p})};return e.jsxs("div",{className:h,onClick:f,children:[e.jsxs("div",{className:o.icons,children:[e.jsx("div",{className:a(o.icon,o.collapse,{[o.show]:d})}),e.jsx("div",{className:a(o.icon,o.expand,{[o.show]:!d})})]}),e.jsxs("div",{className:o.content,children:[e.jsx("div",{className:o.title,children:A}),e.jsx("div",{className:o.description,children:r})]})]})};m.displayName=`${_}.Item`;m.__docgenInfo={description:'Accordion item sub-component. Manages its own open/closed state.\nSupports controlled mode via `open` and `onOpenChange`.\n\n@example\n```tsx\n<Accordion.Item title="Controlled" open onOpenChange={(isOpen) => console.log(isOpen)}>\n  Content\n</Accordion.Item>\n```',methods:[],props:{open:{required:!1,tsType:{name:"boolean"},description:"Whether the item is open."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Handler for"},title:{required:!0,tsType:{name:"string"},description:"Title."}}};const t=l;t.Item=m;const B={title:"Kit/Components/Accordion",component:t,subcomponents:{"Accordion.Item":t.Item},parameters:{layout:"centered"},tags:["autodocs"]},s={args:{},render:function(){return e.jsx("div",{style:{width:"800px"},children:e.jsxs(t,{children:[e.jsx(t.Item,{open:!0,title:"Accordion Slide 1",children:"Content of accordion item 1"}),e.jsx(t.Item,{title:"Accordion Slide 2",children:"Content of accordion item 2"}),e.jsx(t.Item,{title:"Accordion Slide 3",children:"Content of accordion item 3"})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    // Here you can set default props for this Story:
    // someProp: 'value',
  },
  render: function Render() {
    return <div style={{
      width: '800px'
    }}>
        <Accordion>
          <Accordion.Item open title="Accordion Slide 1">
            Content of accordion item 1
          </Accordion.Item>
          <Accordion.Item title="Accordion Slide 2">Content of accordion item 2</Accordion.Item>
          <Accordion.Item title="Accordion Slide 3">Content of accordion item 3</Accordion.Item>
        </Accordion>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,B as default};
