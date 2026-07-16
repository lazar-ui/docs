import{N as y,H as n,R as g}from"./iframe-n4ZyvbqO.js";import{B as v}from"./Button-BdKhgRPy.js";import{C as w}from"./Chip-BxJ8MU4X.js";import{u as C}from"./useLocale-BzlI8loT.js";import{c as R}from"./clsx-B-dksMZM.js";import{g as x}from"./getVariantClassName-CW3tvtKI.js";import{i as c}from"./isValidReactNode-CBPB8prL.js";import"./camelCase-CAJeNIN1.js";const A="Table.ActiveFilters",N="_root_4qb7d_5",L={root:N},u=e=>{const{filters:a,onClearAll:l,onRemove:r}=e,o=C(),t=y.useCallback(i=>()=>{r(i)},[r]),m=y.useCallback(()=>{l?.()},[l]);return a.length===0?null:n.jsxs("div",{className:L.root,children:[a.map(i=>n.jsxs(w,{onDelete:t(i.key),children:[i.label,": ",i.value]},i.key)),l&&n.jsx(v,{mode:"text",size:"sm",onClick:m,children:o.Table.ActiveFilters.clearAll})]})};u.displayName=A;u.__docgenInfo={description:`Table.ActiveFilters — displays active filter chips with individual remove buttons
and an optional "Clear all" button.

Returns \`null\` when there are no active filters.

@example
\`\`\`tsx
<Table.ActiveFilters
  filters={[
    { key: 'status', label: 'Status', value: 'Active' },
    { key: 'role', label: 'Role', value: 'Admin' },
  ]}
  onRemove={(key) => console.log('remove', key)}
  onClearAll={() => console.log('clear all')}
/>
\`\`\``,methods:[],displayName:"Table.ActiveFilters",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"IFilterItem"}],raw:"IFilterItem[]"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var s=(e=>(e.CELL="Table.Cell",e.ROW="Table.Row",e.TOOLBAR="Table.Toolbar",e))(s||{});const k="_root_lmxwt_8",I="_header_lmxwt_17",E="_alignLeft_lmxwt_21",M="_alignRight_lmxwt_24",j="_alignCenter_lmxwt_27",p={root:k,header:I,alignLeft:E,alignRight:M,alignCenter:j},T=e=>{const{align:a="left",as:l="td",children:r,title:o,width:t}=e,m=R(p.root,x("align",a,p),{[p.header]:l==="th"});return n.jsx(l,{className:m,title:o,width:t,children:r})};T.displayName=s.CELL;T.__docgenInfo={description:'Table cell. Must be used as a child of `<Table.Row>`.\nSupports text alignment and header styling via `as="th"`.',methods:[],props:{align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment."},as:{required:!1,tsType:{name:"union",raw:"'td' | 'th'",elements:[{name:"literal",value:"'td'"},{name:"literal",value:"'th'"}]},description:"HTML tag: `'td'` (default) or `'th'`."},title:{required:!1,tsType:{name:"string"},description:"Tooltip text (native `title` attribute)."},width:{required:!1,tsType:{name:"string"},description:"Cell width."}}};const q="_root_t4731_5",F={root:q},b=e=>{const{children:a,onClick:l,style:r}=e,o=t=>c(s.CELL,t)?t:null;return n.jsx("tr",{className:F.root,onClick:l,style:r,children:g.Children.map(a,o)})};b.displayName=s.ROW;b.__docgenInfo={description:"Table row. Must be used as a child of `<Table>`.\nAccepts `<Table.Cell>` children.",methods:[],props:{onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},description:"Click handler for the row."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles."}}};const S="Table.Toolbar",$="_root_d4szt_6",O={root:$},h=e=>{const{children:a}=e;return n.jsx("div",{className:O.root,children:a})};h.displayName=S;h.__docgenInfo={description:`Table.Toolbar — a simple flex-wrapper that sits above the Table
and contains arbitrary controls (inputs, buttons, filters, etc.).

@example
\`\`\`tsx
<Table.Toolbar>
  <Input placeholder="Search..." />
  <Button>Export</Button>
</Table.Toolbar>
\`\`\``,methods:[],displayName:"Table.Toolbar"};const B="Table",H="_wrapper_17sd8_5",P="_root_17sd8_11",_={wrapper:H,root:P},f=e=>{const{children:a}=e,l=g.Children.toArray(a),r=l.find(t=>c(s.TOOLBAR,t,!1)),o=l.filter(t=>!c(s.TOOLBAR,t,!1)).filter(t=>c(s.ROW,t,!0));return n.jsxs("div",{className:_.wrapper,children:[r,n.jsx("table",{className:_.root,children:n.jsx("tbody",{children:o})})]})};f.displayName=B;f.__docgenInfo={description:`Table container. Renders an HTML \`<table>\` with striped rows and hover effects.

Supports an optional \`<Table.Toolbar>\` child rendered above the table.
Uses compound component pattern via \`<Table.Row>\` and \`<Table.Cell>\`.

@example
\`\`\`tsx
<Table>
  <Table.Toolbar>
    <Input placeholder="Search..." />
  </Table.Toolbar>
  <Table.Row>
    <Table.Cell as="th">Name</Table.Cell>
  </Table.Row>
</Table>
\`\`\``,methods:[],displayName:"Table"};const d=f;d.ActiveFilters=u;d.Cell=T;d.Row=b;d.Toolbar=h;export{d as T};
