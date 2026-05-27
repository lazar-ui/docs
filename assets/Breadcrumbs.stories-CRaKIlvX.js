import{H as e,R as C}from"./iframe-Dxm6wkCs.js";import{c as _}from"./clsx-B-dksMZM.js";import{i as R}from"./isValidReactNode-W_TwQkzW.js";import"./camelCase-Df9BNvgk.js";import"./preload-helper-PPVm8Dsz.js";const I="Breadcrumbs",N="/";var j=(a=>(a.ITEM=`${I}.Item`,a))(j||{});const P="_root_w4o54_12",w="_list_w4o54_16",S="_item_w4o54_26",k="_link_w4o54_32",L="_label_w4o54_43",A="_current_w4o54_49",T="_separator_w4o54_54",t={root:P,list:w,item:S,link:k,label:L,current:A,separator:T},v=[j.ITEM],B=a=>{const{children:s,items:c,separator:u=N}=a;if(c){if(c.length===0)return null;const o=(n,m)=>{const g=m===c.length-1,x=n.current||g;let l;return n.href&&!x?l=e.jsx("a",{className:t.link,href:n.href,children:n.label}):x?l=e.jsx("span",{"aria-current":"page",className:_(t.label,t.current),children:n.label}):l=e.jsx("span",{className:t.label,children:n.label}),e.jsxs("li",{className:t.item,children:[l,!g&&e.jsx("span",{"aria-hidden":"true",className:t.separator,children:u})]},m)};return e.jsx("nav",{"aria-label":"breadcrumb",className:t.root,children:e.jsx("ol",{className:t.list,children:c.map((n,m)=>o(n,m))})})}const d=[];return C.Children.forEach(s,o=>{R(v,o)&&d.push(o)}),d.length===0?null:e.jsx("nav",{"aria-label":"breadcrumb",className:t.root,children:e.jsx("ol",{className:t.list,children:d.map((o,n)=>{const m=n===d.length-1;return e.jsxs("li",{className:t.item,children:[o,!m&&e.jsx("span",{"aria-hidden":"true",className:t.separator,children:u})]},n)})})})};B.displayName=I;B.__docgenInfo={description:`Breadcrumbs navigation component. Renders a trail of links indicating the current page location.

Supports two mutually exclusive modes:
- **Array mode**: pass an \`items\` array prop.
- **JSX mode**: pass \`<Breadcrumbs.Item>\` elements as children.

@example
\`\`\`tsx
// Array mode
<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Product', current: true },
  ]}
/>
\`\`\`

@example
\`\`\`tsx
// JSX mode
<Breadcrumbs>
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
  <Breadcrumbs.Item current>Current Product</Breadcrumbs.Item>
</Breadcrumbs>
\`\`\``,methods:[],displayName:"Breadcrumbs",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Label text. */
  label: string;

  /** Link URL. When omitted or the item is the last, renders a \`<span>\`. */
  href?: string;

  /** Whether this item represents the current page. */
  current?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Label text."},{key:"href",value:{name:"string",required:!1},description:"Link URL. When omitted or the item is the last, renders a `<span>`."},{key:"current",value:{name:"boolean",required:!1},description:"Whether this item represents the current page."}]}}],raw:"TBreadcrumbItem[]"},description:"Array of breadcrumb items for data-driven usage. When provided, `children` are ignored."},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom separator rendered between breadcrumb items. Default: `'/'`."}}};const H="_link_a6eyw_10",E="_label_a6eyw_21",W="_current_a6eyw_27",i={link:H,label:E,current:W},y=a=>{const{children:s,href:c,current:u=!1}=a;return c&&!u?e.jsx("a",{className:i.link,href:c,children:s}):u?e.jsx("span",{"aria-current":"page",className:_(i.label,i.current),children:s}):e.jsx("span",{className:i.label,children:s})};y.displayName=`${I}.Item`;y.__docgenInfo={description:'Breadcrumbs item sub-component. Renders a single breadcrumb segment.\n\nRenders an `<a>` when `href` is provided and `current` is falsy.\nRenders a `<span>` with `aria-current="page"` when `current` is true.\n\n@example\n```tsx\n<Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>\n<Breadcrumbs.Item current>Current Page</Breadcrumbs.Item>\n```',methods:[],props:{href:{required:!1,tsType:{name:"string"},description:"Link URL. When omitted, renders a `<span>` instead of an `<a>`."},current:{required:!1,tsType:{name:"boolean"},description:'Whether this item represents the current page. Sets `aria-current="page"`.'}}};const r=B;r.Item=y;const O={title:"Kit/Components/Breadcrumbs",component:r,subcomponents:{"Breadcrumbs.Item":r.Item},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{separator:{control:{type:"text"},table:{defaultValue:{summary:"'/'"},type:{summary:"React.ReactNode"}}},items:{control:{type:"object"},table:{type:{summary:"TBreadcrumbItem[]"}}},children:{control:{type:"text"},table:{type:{summary:"React.ReactNode"}}}}},p={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Current Product",current:!0}]}},b={render:function(s){return e.jsxs(r,{...s,children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/products",children:"Products"}),e.jsx(r.Item,{children:"Current Product"})]})}},h={render:function(s){return e.jsxs(r,{...s,separator:">",children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/products",children:"Products"}),e.jsx(r.Item,{href:"/products/category",children:"Category"}),e.jsx(r.Item,{current:!0,children:"Current Product"})]})}},f={render:function(s){return e.jsxs(r,{...s,children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/products",children:"Products"}),e.jsx(r.Item,{current:!0,children:"Current Product"})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Category',
      href: '/products/category'
    }, {
      label: 'Current Product',
      current: true
    }]
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Breadcrumbs {...props}>
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item>Current Product</Breadcrumbs.Item>
      </Breadcrumbs>;
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Breadcrumbs {...props} separator=">">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products/category">Category</Breadcrumbs.Item>
        <Breadcrumbs.Item current>Current Product</Breadcrumbs.Item>
      </Breadcrumbs>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    return <Breadcrumbs {...props}>
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item current>Current Product</Breadcrumbs.Item>
      </Breadcrumbs>;
  }
}`,...f.parameters?.docs?.source}}};const X=["ArrayMode","JSXMode","WithCustomSeparator","LastItemCurrent"];export{p as ArrayMode,b as JSXMode,f as LastItemCurrent,h as WithCustomSeparator,X as __namedExportsOrder,O as default};
