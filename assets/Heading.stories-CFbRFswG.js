import{H as a}from"./iframe-CU9UgNWq.js";import{c as x}from"./clsx-B-dksMZM.js";import{g as c}from"./getVariantClassName-CJ3-95sG.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-DBDeD0gf.js";const H="Heading",f="_root_aa627_1",z="_truncate_aa627_5",b="_sizeXs_aa627_11",S="_sizeSm_aa627_17",T="_sizeMd_aa627_23",_="_sizeLg_aa627_30",v="_colorPrimary_aa627_37",j="_colorSecondary_aa627_41",D="_colorTertiary_aa627_45",w="_colorDisabled_aa627_49",M="_colorBrand_aa627_53",o={root:f,truncate:z,sizeXs:b,sizeSm:S,sizeMd:T,sizeLg:_,colorPrimary:v,colorSecondary:j,colorTertiary:D,colorDisabled:w,colorBrand:M},i=e=>{const{as:h="h2",children:p,color:l,ref:m,size:g="sm",truncate:u=!1}=e,y=x(o.root,c("size",g,o),l&&c("color",l,o),{[o.truncate]:u});return a.jsx(h,{className:y,ref:m,children:p})};i.displayName=H;i.__docgenInfo={description:'Heading component. Renders a semantic HTML heading (`h1`–`h6`) with preset\nfont-size, font-weight, line-height, and optional letter-spacing.\n\nEach size maps to a predefined set of CSS tokens for consistent typography across the UI.\n\n@example\n```tsx\n<Heading as="h1" size="lg">Page title</Heading>\n```\n\n@example\n```tsx\n<Heading size="xs" color="secondary">Subtitle</Heading>\n```',methods:[],displayName:"Heading",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"HTML tag to render. Default: `h2`."},size:{required:!1,tsType:{name:"literal",value:"`${EHeadingSize}`"},description:"Heading size. Default: `sm`."},color:{required:!1,tsType:{name:"literal",value:"`${EHeadingColor}`"},description:"Text color token."},truncate:{required:!1,tsType:{name:"boolean"},description:"Truncate text with ellipsis (single-line)."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLHeadingElement>",elements:[{name:"HTMLHeadingElement"}]},description:"Ref to the root heading element."}}};const N={title:"@lazar-ui／kit/Components/Heading",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"The quick brown fox jumps over the lazy dog",size:"sm"},argTypes:{as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],table:{defaultValue:{summary:"h2"},type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'"}}},size:{control:{type:"select"},options:["xs","sm","md","lg"],table:{defaultValue:{summary:"sm"},type:{summary:"'xs' | 'sm' | 'md' | 'lg'"}}},color:{control:{type:"select"},options:["primary","secondary","tertiary","disabled","brand"],table:{type:{summary:"'primary' | 'secondary' | 'tertiary' | 'disabled' | 'brand'"}}},truncate:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},children:{control:{type:"text"},table:{type:{summary:"React.ReactNode"}}}}},d={},s={name:"Sizes",render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsx(i,{...e,size:"lg",children:"Heading LG (24px, Bold)"}),a.jsx(i,{...e,size:"md",children:"Heading MD (20px, Semibold)"}),a.jsx(i,{...e,size:"sm",children:"Heading SM (16px, Semibold)"}),a.jsx(i,{...e,size:"xs",children:"Heading XS (14px, Semibold)"})]})},r={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx(i,{...e,color:"primary",children:"Primary"}),a.jsx(i,{...e,color:"secondary",children:"Secondary"}),a.jsx(i,{...e,color:"tertiary",children:"Tertiary"}),a.jsx(i,{...e,color:"disabled",children:"Disabled"}),a.jsx(i,{...e,color:"brand",children:"Brand"})]})},n={render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx(i,{...e,as:"h1",children:"This is an <h1> heading"}),a.jsx(i,{...e,as:"h2",children:"This is an <h2> heading"}),a.jsx(i,{...e,as:"h3",children:"This is an <h3> heading"}),a.jsx(i,{...e,as:"h4",children:"This is an <h4> heading"}),a.jsx(i,{...e,as:"h5",children:"This is an <h5> heading"}),a.jsx(i,{...e,as:"h6",children:"This is an <h6> heading"})]})},t={args:{truncate:!0,children:"This is a very long heading text that should be truncated to a single line with an ellipsis because it exceeds the available container width."},render:e=>a.jsx("div",{style:{width:280},children:a.jsx(i,{...e})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Heading {...props} size="lg">
        Heading LG (24px, Bold)
      </Heading>
      <Heading {...props} size="md">
        Heading MD (20px, Semibold)
      </Heading>
      <Heading {...props} size="sm">
        Heading SM (16px, Semibold)
      </Heading>
      <Heading {...props} size="xs">
        Heading XS (14px, Semibold)
      </Heading>
    </div>
}`,...s.parameters?.docs?.source},description:{story:`All four heading sizes. Each size maps to a predefined font-size and weight:
- **LG** — 24px, Bold
- **MD** — 20px, Semibold
- **SM** — 16px, Semibold
- **XS** — 14px, Semibold`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Heading {...props} color="primary">
        Primary
      </Heading>
      <Heading {...props} color="secondary">
        Secondary
      </Heading>
      <Heading {...props} color="tertiary">
        Tertiary
      </Heading>
      <Heading {...props} color="disabled">
        Disabled
      </Heading>
      <Heading {...props} color="brand">
        Brand
      </Heading>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"All available color tokens applied to headings.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Heading {...props} as="h1">
        This is an &lt;h1&gt; heading
      </Heading>
      <Heading {...props} as="h2">
        This is an &lt;h2&gt; heading
      </Heading>
      <Heading {...props} as="h3">
        This is an &lt;h3&gt; heading
      </Heading>
      <Heading {...props} as="h4">
        This is an &lt;h4&gt; heading
      </Heading>
      <Heading {...props} as="h5">
        This is an &lt;h5&gt; heading
      </Heading>
      <Heading {...props} as="h6">
        This is an &lt;h6&gt; heading
      </Heading>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Override the semantic HTML tag using the `as` prop.\nEach heading level (`h1`–`h6`) is rendered with the appropriate default size.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    truncate: true,
    children: 'This is a very long heading text that should be truncated to a single line with an ellipsis because it exceeds the available container width.'
  },
  render: props => <div style={{
    width: 280
  }}>
      <Heading {...props} />
    </div>
}`,...t.parameters?.docs?.source},description:{story:`Single-line truncation with ellipsis.
The heading is constrained to 280px and the text overflows.`,...t.parameters?.docs?.description}}};const P=["Default","HeadlineSizes","Colors","CustomTag","Truncate"];export{r as Colors,n as CustomTag,d as Default,s as HeadlineSizes,t as Truncate,P as __namedExportsOrder,N as default};
