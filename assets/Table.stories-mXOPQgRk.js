import{H as l,R as h}from"./iframe-DSZZJwFM.js";import{c as g}from"./clsx-B-dksMZM.js";import{g as u}from"./getVariantClassName-8Q9J5RBg.js";import{i as C}from"./isValidReactNode-BYhVXax1.js";import"./camelCase-CIGTPKf2.js";import"./preload-helper-PPVm8Dsz.js";var s=(n=>(n.CELL="Table.Cell",n.ROW="Table.Row",n))(s||{});const R="_root_lmxwt_8",w="_header_lmxwt_17",j="_alignLeft_lmxwt_21",f="_alignRight_lmxwt_24",_="_alignCenter_lmxwt_27",c={root:R,header:w,alignLeft:j,alignRight:f,alignCenter:_},d=n=>{const{align:r="left",as:t="td",children:a,title:m,width:p}=n,x=g(c.root,u("align",r,c),{[c.header]:t==="th"});return l.jsx(t,{className:x,title:m,width:p,children:a})};d.displayName=s.CELL;d.__docgenInfo={description:'Table cell. Must be used as a child of `<Table.Row>`.\nSupports text alignment and header styling via `as="th"`.',methods:[],props:{align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment."},as:{required:!1,tsType:{name:"union",raw:"'td' | 'th'",elements:[{name:"literal",value:"'td'"},{name:"literal",value:"'th'"}]},description:"HTML tag: `'td'` (default) or `'th'`."},title:{required:!1,tsType:{name:"string"},description:"Tooltip text (native `title` attribute)."},width:{required:!1,tsType:{name:"string"},description:"Cell width."}}};const v="_root_t4731_5",y={root:v},T=n=>{const{children:r}=n,t=a=>C(s.CELL,a)?a:null;return l.jsx("tr",{className:y.root,children:h.Children.map(r,t)})};T.displayName=s.ROW;T.__docgenInfo={description:"Table row. Must be used as a child of `<Table>`.\nAccepts `<Table.Cell>` children.",methods:[]};const L="Table",N="_root_k8vfx_5",D={root:N},b=n=>{const{children:r}=n,t=a=>C(s.ROW,a)?a:null;return l.jsx("table",{className:D.root,children:l.jsx("tbody",{children:h.Children.map(r,t)})})};b.displayName=L;b.__docgenInfo={description:`Table container. Renders an HTML \`<table>\` with striped rows and hover effects.

Uses compound component pattern via \`<Table.Row>\` and \`<Table.Cell>\`.

@example
\`\`\`tsx
<Table>
  <Table.Row>
    <Table.Cell as="th">Name</Table.Cell>
    <Table.Cell as="th">Role</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>John</Table.Cell>
    <Table.Cell>Developer</Table.Cell>
  </Table.Row>
</Table>
\`\`\``,methods:[],displayName:"Table"};const e=b;e.Cell=d;e.Row=T;const W={title:"Kit/Components/Table",component:e,subcomponents:{"Table.Row":e.Row,"Table.Cell":e.Cell},parameters:{layout:"padded"},tags:["autodocs"]},o={render:()=>l.jsxs(e,{children:[l.jsxs(e.Row,{children:[l.jsx(e.Cell,{as:"th",children:"Name"}),l.jsx(e.Cell,{as:"th",children:"Title"}),l.jsx(e.Cell,{as:"th",children:"Status"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"John Doe"}),l.jsx(e.Cell,{children:"Frontend Developer"}),l.jsx(e.Cell,{children:"Active"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Jane Smith"}),l.jsx(e.Cell,{children:"Backend Developer"}),l.jsx(e.Cell,{children:"Active"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Bob Johnson"}),l.jsx(e.Cell,{children:"Designer"}),l.jsx(e.Cell,{children:"Inactive"})]})]})},i={render:()=>l.jsxs(e,{children:[l.jsxs(e.Row,{children:[l.jsx(e.Cell,{as:"th",children:"Left"}),l.jsx(e.Cell,{as:"th",align:"center",children:"Center"}),l.jsx(e.Cell,{as:"th",align:"right",children:"Right"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Text"}),l.jsx(e.Cell,{align:"center",children:"Text"}),l.jsx(e.Cell,{align:"right",children:"Text"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Row>
        <Table.Cell as="th">Name</Table.Cell>
        <Table.Cell as="th">Title</Table.Cell>
        <Table.Cell as="th">Status</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>Frontend Developer</Table.Cell>
        <Table.Cell>Active</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jane Smith</Table.Cell>
        <Table.Cell>Backend Developer</Table.Cell>
        <Table.Cell>Active</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bob Johnson</Table.Cell>
        <Table.Cell>Designer</Table.Cell>
        <Table.Cell>Inactive</Table.Cell>
      </Table.Row>
    </Table>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Row>
        <Table.Cell as="th">Left</Table.Cell>
        <Table.Cell as="th" align="center">
          Center
        </Table.Cell>
        <Table.Cell as="th" align="right">
          Right
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Text</Table.Cell>
        <Table.Cell align="center">Text</Table.Cell>
        <Table.Cell align="right">Text</Table.Cell>
      </Table.Row>
    </Table>
}`,...i.parameters?.docs?.source}}};const q=["Default","WithAlignment"];export{o as Default,i as WithAlignment,q as __namedExportsOrder,W as default};
