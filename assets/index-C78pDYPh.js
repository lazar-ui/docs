import{N as g,H as o,R as v}from"./iframe-Cwt5rX67.js";import{B as y}from"./Button-CzrZ5WHf.js";import{C as w}from"./Chip-D_5j0u7G.js";import{u as x}from"./useLocale-DuWPMZ5G.js";import{c as C}from"./clsx-B-dksMZM.js";import{g as A}from"./getVariantClassName-lhFQwO5U.js";import{i as c}from"./isValidReactNode-CrcKkRK2.js";import"./camelCase-CYkttgyc.js";const R="Table.ActiveFilters",N="_root_4qb7d_5",L={root:N},u=e=>{const{filters:l,onClearAll:t,onRemove:a}=e,i=x(),n=g.useCallback(s=>()=>{a(s)},[a]),m=g.useCallback(()=>{t?.()},[t]);return l.length===0?null:o.jsxs("div",{className:L.root,children:[l.map(s=>o.jsxs(w,{onDelete:n(s.key),children:[s.label,": ",s.value]},s.key)),t&&o.jsx(y,{mode:"text",size:"sm",onClick:m,children:i.Table.ActiveFilters.clearAll})]})};u.displayName=R;u.__docgenInfo={description:`Table.ActiveFilters — displays active filter chips with individual remove buttons
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
\`\`\``,methods:[],displayName:"Table.ActiveFilters",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"IFilterItem"}],raw:"IFilterItem[]"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var r=(e=>(e.CELL="Table.Cell",e.ROW="Table.Row",e.TOOLBAR="Table.Toolbar",e))(r||{});const I="_root_lmxwt_8",k="_header_lmxwt_17",j="_alignLeft_lmxwt_21",F="_alignRight_lmxwt_24",$="_alignCenter_lmxwt_27",p={root:I,header:k,alignLeft:j,alignRight:F,alignCenter:$},b=e=>{const{align:l="left",as:t="td",children:a,title:i,width:n}=e,m=C(p.root,A("align",l,p),{[p.header]:t==="th"});return o.jsx(t,{className:m,title:i,width:n,children:a})};b.displayName=r.CELL;b.__docgenInfo={description:'Table cell. Must be used as a child of `<Table.Row>`.\nSupports text alignment and header styling via `as="th"`.',methods:[],props:{align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment."},as:{required:!1,tsType:{name:"union",raw:"'td' | 'th'",elements:[{name:"literal",value:"'td'"},{name:"literal",value:"'th'"}]},description:"HTML tag: `'td'` (default) or `'th'`."},title:{required:!1,tsType:{name:"string"},description:"Tooltip text (native `title` attribute)."},width:{required:!1,tsType:{name:"string"},description:"Cell width."}}};const O="_root_t4731_5",q={root:O},T=e=>{const{children:l}=e,t=a=>c(r.CELL,a)?a:null;return o.jsx("tr",{className:q.root,children:v.Children.map(l,t)})};T.displayName=r.ROW;T.__docgenInfo={description:"Table row. Must be used as a child of `<Table>`.\nAccepts `<Table.Cell>` children.",methods:[]};const B="Table.Toolbar",E="_root_d4szt_6",M={root:E},h=e=>{const{children:l}=e;return o.jsx("div",{className:M.root,children:l})};h.displayName=B;h.__docgenInfo={description:`Table.Toolbar — a simple flex-wrapper that sits above the Table
and contains arbitrary controls (inputs, buttons, filters, etc.).

@example
\`\`\`tsx
<Table.Toolbar>
  <Input placeholder="Search..." />
  <Button>Export</Button>
</Table.Toolbar>
\`\`\``,methods:[],displayName:"Table.Toolbar"};const S="Table",D="_wrapper_17sd8_5",H="_root_17sd8_11",f={wrapper:D,root:H},_=e=>{const{children:l}=e,t=v.Children.toArray(l),a=t.find(n=>c(r.TOOLBAR,n,!1)),i=t.filter(n=>!c(r.TOOLBAR,n,!1)).filter(n=>c(r.ROW,n,!0));return o.jsxs("div",{className:f.wrapper,children:[a,o.jsx("table",{className:f.root,children:o.jsx("tbody",{children:i})})]})};_.displayName=S;_.__docgenInfo={description:`Table container. Renders an HTML \`<table>\` with striped rows and hover effects.

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
\`\`\``,methods:[],displayName:"Table"};const d=_;d.ActiveFilters=u;d.Cell=b;d.Row=T;d.Toolbar=h;export{d as T};
