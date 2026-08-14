import{H as e,R as C}from"./iframe-DLdpy6-y.js";import{c as _}from"./clsx-B-dksMZM.js";import{i as R}from"./isValidReactNode-BLF-d2p9.js";import"./camelCase-CqHBbmbu.js";import"./preload-helper-PPVm8Dsz.js";const I="Breadcrumbs",N="/";var j=(a=>(a.ITEM=`${I}.Item`,a))(j||{});const P="_root_isif9_12",k="_list_isif9_16",S="_item_isif9_26",L="_link_isif9_32",A="_label_isif9_43",T="_current_isif9_49",v="_separator_isif9_54",t={root:P,list:k,item:S,link:L,label:A,current:T,separator:v},H=[j.ITEM],B=a=>{const{children:s,items:c,separator:u=N}=a;if(c){if(c.length===0)return null;const o=(n,m)=>{const y=m===c.length-1,x=n.current||y;let i;return n.href&&!x?i=e.jsx("a",{className:t.link,href:n.href,children:n.label}):x?i=e.jsx("span",{"aria-current":"page",className:_(t.label,t.current),children:n.label}):i=e.jsx("span",{className:t.label,children:n.label}),e.jsxs("li",{className:t.item,children:[i,!y&&e.jsx("span",{"aria-hidden":"true",className:t.separator,children:u})]},m)};return e.jsx("nav",{"aria-label":"breadcrumb",className:t.root,children:e.jsx("ol",{className:t.list,children:c.map((n,m)=>o(n,m))})})}const d=[];return C.Children.forEach(s,o=>{R(H,o)&&d.push(o)}),d.length===0?null:e.jsx("nav",{"aria-label":"breadcrumb",className:t.root,children:e.jsx("ol",{className:t.list,children:d.map((o,n)=>{const m=n===d.length-1;return e.jsxs("li",{className:t.item,children:[o,!m&&e.jsx("span",{"aria-hidden":"true",className:t.separator,children:u})]},n)})})})};B.displayName=I;B.__docgenInfo={description:`Breadcrumbs navigation component. Renders a trail of links indicating the current page location.

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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Label text."},{key:"href",value:{name:"string",required:!1},description:"Link URL. When omitted or the item is the last, renders a `<span>`."},{key:"current",value:{name:"boolean",required:!1},description:"Whether this item represents the current page."}]}}],raw:"TBreadcrumbItem[]"},description:"Array of breadcrumb items for data-driven usage. When provided, `children` are ignored."},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom separator rendered between breadcrumb items. Default: `'/'`."}}};const E="_link_j5nl3_10",W="_label_j5nl3_21",w="_current_j5nl3_27",l={link:E,label:W,current:w},g=a=>{const{children:s,href:c,current:u=!1}=a;return c&&!u?e.jsx("a",{className:l.link,href:c,children:s}):u?e.jsx("span",{"aria-current":"page",className:_(l.label,l.current),children:s}):e.jsx("span",{className:l.label,children:s})};g.displayName=`${I}.Item`;g.__docgenInfo={description:'Breadcrumbs item sub-component. Renders a single breadcrumb segment.\n\nRenders an `<a>` when `href` is provided and `current` is falsy.\nRenders a `<span>` with `aria-current="page"` when `current` is true.\n\n@example\n```tsx\n<Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>\n<Breadcrumbs.Item current>Current Page</Breadcrumbs.Item>\n```',methods:[],props:{href:{required:!1,tsType:{name:"string"},description:"Link URL. When omitted, renders a `<span>` instead of an `<a>`."},current:{required:!1,tsType:{name:"boolean"},description:'Whether this item represents the current page. Sets `aria-current="page"`.'}}};const r=B;r.Item=g;const O={title:"@lazar-ui／kit/Components/Breadcrumbs",component:r,subcomponents:{"Breadcrumbs.Item":r.Item},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{separator:{control:{type:"text"},table:{defaultValue:{summary:"'/'"},type:{summary:"React.ReactNode"}}},items:{control:{type:"object"},table:{type:{summary:"TBreadcrumbItem[]"}}},children:{control:{type:"text"},table:{type:{summary:"React.ReactNode"}}}}},p={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Current Product",current:!0}]}},b={render:function(s){return e.jsxs(r,{...s,children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/products",children:"Products"}),e.jsx(r.Item,{children:"Current Product"})]})}},h={render:function(s){return e.jsxs(r,{...s,separator:">",children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/products",children:"Products"}),e.jsx(r.Item,{href:"/products/category",children:"Category"}),e.jsx(r.Item,{current:!0,children:"Current Product"})]})}},f={render:function(s){return e.jsxs(r,{...s,children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/products",children:"Products"}),e.jsx(r.Item,{current:!0,children:"Current Product"})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
