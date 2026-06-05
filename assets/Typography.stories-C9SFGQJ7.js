import{R as z,H as a}from"./iframe-DLB2Hu3F.js";import{c as f}from"./clsx-B-dksMZM.js";import{g as c}from"./getVariantClassName-8orE4ulh.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-BTsvIAkU.js";const _="Typography",w="_root_wamht_5",S="_truncate_wamht_9",L="_variantHeadline_wamht_15",j="_sizeLg_wamht_15",D="_sizeXl_wamht_21",B="_sizeXxl_wamht_27",X="_variantBody_wamht_34",H="_sizeXs_wamht_34",M="_sizeSm_wamht_40",R="_sizeMd_wamht_46",C="_variantLabel_wamht_59",E="_colorPrimary_wamht_78",q="_colorSecondary_wamht_82",N="_colorTertiary_wamht_86",P="_colorDisabled_wamht_90",V="_colorBrand_wamht_94",s={root:w,truncate:S,variantHeadline:L,sizeLg:j,sizeXl:D,sizeXxl:B,variantBody:X,sizeXs:H,sizeSm:M,sizeMd:R,variantLabel:C,colorPrimary:E,colorSecondary:q,colorTertiary:N,colorDisabled:P,colorBrand:V},r=e=>{const{as:m,children:g,color:y,ref:u,size:x="sm",truncate:v=!1,variant:h="body"}=e,b=m||{body:"p",headline:"h2",label:"span"}[h]||"p",T=f(s.root,c("variant",h,s),c("size",x,s),y&&c("color",y,s),{[s.truncate]:v});return z.createElement(b,{className:T,ref:u},g)};r.displayName=_;r.__docgenInfo={description:'Typography component. Renders text with preset combinations of font-size, font-weight, line-height, and letter-spacing.\n\nSupports three stylistic groups (`headline`, `body`, `label`) with various sizes.\nEach combination maps to predefined CSS tokens for consistent typography across the UI.\n\n@example\n```tsx\n<Typography variant="headline" size="xl">Headline XL</Typography>\n```\n\n@example\n```tsx\n<Typography variant="body" size="md" color="secondary">\n  Body secondary text\n</Typography>\n```\n\n@example\n```tsx\n<Typography variant="label" size="sm" as="span">\n  Small label\n</Typography>\n```',methods:[],displayName:"Typography",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"HTML tag to render. Defaults: `h2` for headline, `p` for body, `span` for label."},color:{required:!1,tsType:{name:"literal",value:"`${ETypographyColor}`"},description:"Color token variant."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref to the root element."},variant:{required:!1,tsType:{name:"literal",value:"`${ETypographyVariant}`"},description:"Typography variant (stylistic group): `headline`, `body`, `label`."},size:{required:!1,tsType:{name:"literal",value:"`${ETypographySize}`"},description:"Typography size."},truncate:{required:!1,tsType:{name:"boolean"},description:"Truncate text with ellipsis (single-line)."}}};const O={title:"Kit/Components/Typography",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"The quick brown fox jumps over the lazy dog",size:"sm",variant:"body"},argTypes:{variant:{control:{type:"select"},options:["headline","body","label"],table:{defaultValue:{summary:"body"},type:{summary:"'headline' | 'body' | 'label'"}}},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","xxl"],table:{defaultValue:{summary:"sm"},type:{summary:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'"}}},children:{control:{type:"text"},table:{type:{summary:"React.ReactNode"}}},color:{control:{type:"select"},options:["primary","secondary","tertiary","disabled","brand"],table:{type:{summary:"'primary' | 'secondary' | 'tertiary' | 'disabled' | 'brand'"}}},as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","p","span","div"],table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'"}}},truncate:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}}}},d={},o={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx(r,{...e,variant:"headline",size:"lg",children:"Headline LG"}),a.jsx(r,{...e,variant:"headline",size:"xl",children:"Headline XL"}),a.jsx(r,{...e,variant:"headline",size:"xxl",children:"Headline XXL"})]})},t={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx(r,{...e,variant:"body",size:"xs",children:"Body XS"}),a.jsx(r,{...e,variant:"body",size:"sm",children:"Body SM"}),a.jsx(r,{...e,variant:"body",size:"md",children:"Body MD"}),a.jsx(r,{...e,variant:"body",size:"lg",children:"Body LG"})]})},i={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx(r,{...e,variant:"label",size:"xs",children:"Label XS"}),a.jsx(r,{...e,variant:"label",size:"sm",children:"Label SM"}),a.jsx(r,{...e,variant:"label",size:"md",children:"Label MD"})]})},n={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx(r,{...e,color:"primary",children:"Primary"}),a.jsx(r,{...e,color:"secondary",children:"Secondary"}),a.jsx(r,{...e,color:"tertiary",children:"Tertiary"}),a.jsx(r,{...e,color:"disabled",children:"Disabled"}),a.jsx(r,{...e,color:"brand",children:"Brand"})]})},l={args:{truncate:!0,children:"This is a very long text that should be truncated to a single line with an ellipsis because it exceeds the available container width."},render:e=>a.jsx("div",{style:{width:280},children:a.jsx(r,{...e})})},p={args:{as:"h1",variant:"headline",size:"xxl",children:"This is rendered as an <h1> element"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Typography {...props} variant="headline" size="lg">
        Headline LG
      </Typography>
      <Typography {...props} variant="headline" size="xl">
        Headline XL
      </Typography>
      <Typography {...props} variant="headline" size="xxl">
        Headline XXL
      </Typography>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Headline variant shows larger, more prominent text.\nSupported sizes: `lg`, `xl`, `xxl`.",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Typography {...props} variant="body" size="xs">
        Body XS
      </Typography>
      <Typography {...props} variant="body" size="sm">
        Body SM
      </Typography>
      <Typography {...props} variant="body" size="md">
        Body MD
      </Typography>
      <Typography {...props} variant="body" size="lg">
        Body LG
      </Typography>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"Body variant is the default text style.\nSupported sizes: `xs`, `sm`, `md`, `lg`.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Typography {...props} variant="label" size="xs">
        Label XS
      </Typography>
      <Typography {...props} variant="label" size="sm">
        Label SM
      </Typography>
      <Typography {...props} variant="label" size="md">
        Label MD
      </Typography>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Label variant is used for form labels, captions, and small annotations.\nSupported sizes: `xs`, `sm`, `md`.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Typography {...props} color="primary">
        Primary
      </Typography>
      <Typography {...props} color="secondary">
        Secondary
      </Typography>
      <Typography {...props} color="tertiary">
        Tertiary
      </Typography>
      <Typography {...props} color="disabled">
        Disabled
      </Typography>
      <Typography {...props} color="brand">
        Brand
      </Typography>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"All available color tokens.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    truncate: true,
    children: 'This is a very long text that should be truncated to a single line with an ellipsis because it exceeds the available container width.'
  },
  render: props => <div style={{
    width: 280
  }}>
      <Typography {...props} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Truncate long text to a single line with ellipsis.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    variant: 'headline',
    size: 'xxl',
    children: 'This is rendered as an <h1> element'
  }
}`,...p.parameters?.docs?.source},description:{story:"Render Typography with a custom HTML tag.\nThe `as` prop overrides the default tag inferred from the variant.",...p.parameters?.docs?.description}}};const U=["Default","Headline","Body","Label","Colors","Truncate","CustomTag"];export{t as Body,n as Colors,p as CustomTag,d as Default,o as Headline,i as Label,l as Truncate,U as __namedExportsOrder,O as default};
