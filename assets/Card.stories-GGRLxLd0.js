import{H as e}from"./iframe-DN6kL_na.js";import{c as h}from"./clsx-B-dksMZM.js";import{g as c}from"./getVariantClassName-DghXpxq_.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-B2JfezL4.js";const x="Card",y="_root_1wmek_5",C="_paddingNone_1wmek_13",w="_paddingSm_1wmek_17",f="_paddingMd_1wmek_21",j="_paddingLg_1wmek_25",_="_variantElevated_1wmek_29",E="_variantFilled_1wmek_33",S="_variantOutlined_1wmek_37",p={root:y,paddingNone:C,paddingSm:w,paddingMd:f,paddingLg:j,variantElevated:_,variantFilled:E,variantOutlined:S},d=a=>{const{children:m,padding:u="md",variant:v="elevated"}=a,g=h(p.root,c("padding",u,p),c("variant",v,p));return e.jsx("div",{className:g,children:m})};d.displayName=x;d.__docgenInfo={description:'Card component. A wrapper container for dashboard widgets and content sections.\n\nSupports three visual variants (`elevated`, `outlined`, `filled`) and four\npadding presets (`none`, `sm`, `md`, `lg`).\n\n@example\n```tsx\n<Card>Default card</Card>\n<Card variant="outlined" padding="lg">Outlined with large padding</Card>\n<Card variant="filled" padding="none">Filled without padding</Card>\n```',methods:[],displayName:"Card",props:{padding:{required:!1,tsType:{name:"literal",value:"`${ECardPadding.NONE | ECardPadding.SM | ECardPadding.MD | ECardPadding.LG}`"},description:"Inner padding. Default: `'md'`."},variant:{required:!1,tsType:{name:"literal",value:"`${ECardVariant.ELEVATED | ECardVariant.OUTLINED | ECardVariant.FILLED}`"},description:"Visual variant. Default: `'elevated'`."}}};const O={title:"@lazar-ui／kit/Components/Card",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:{type:"text"},table:{type:{summary:"ReactNode"}}},padding:{control:{type:"select"},options:["none","sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"none | sm | md | lg"}}},variant:{control:{type:"select"},options:["elevated","outlined","filled"],table:{defaultValue:{summary:"elevated"},type:{summary:"elevated | outlined | filled"}}}},args:{children:"This is a card with medium padding and elevated shadow.",padding:"md",variant:"elevated"}},r={},i={render:a=>e.jsx("div",{style:{width:"320px"},children:e.jsx(d,{...a,variant:"elevated",children:"An elevated card with a subtle shadow."})})},t={render:a=>e.jsx("div",{style:{width:"320px"},children:e.jsx(d,{...a,variant:"outlined",children:"An outlined card with a visible border."})})},n={render:a=>e.jsx("div",{style:{width:"320px"},children:e.jsx(d,{...a,variant:"filled",children:"A filled card with a background color."})})},s={render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"stretch"},children:[e.jsx("div",{style:{width:"200px"},children:e.jsx(d,{...a,variant:"elevated",children:"Elevated"})}),e.jsx("div",{style:{width:"200px"},children:e.jsx(d,{...a,variant:"outlined",children:"Outlined"})}),e.jsx("div",{style:{width:"200px"},children:e.jsx(d,{...a,variant:"filled",children:"Filled"})})]})},l={render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"stretch"},children:[e.jsx("div",{style:{width:"150px"},children:e.jsx(d,{...a,padding:"none",children:"None"})}),e.jsx("div",{style:{width:"150px"},children:e.jsx(d,{...a,padding:"sm",children:"Small"})}),e.jsx("div",{style:{width:"150px"},children:e.jsx(d,{...a,padding:"md",children:"Medium"})}),e.jsx("div",{style:{width:"150px"},children:e.jsx(d,{...a,padding:"lg",children:"Large"})})]})},o={render:a=>e.jsx("div",{style:{width:"400px"},children:e.jsxs(d,{...a,children:[e.jsx("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("p",{style:{margin:"var(--space-3) 0 0 0"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{margin:"var(--space-3) 0 0 0"},children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    width: '320px'
  }}>
      <Card {...props} variant="elevated">An elevated card with a subtle shadow.</Card>
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    width: '320px'
  }}>
      <Card {...props} variant="outlined">An outlined card with a visible border.</Card>
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    width: '320px'
  }}>
      <Card {...props} variant="filled">A filled card with a background color.</Card>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'stretch'
  }}>
      <div style={{
      width: '200px'
    }}>
        <Card {...props} variant="elevated">
          Elevated
        </Card>
      </div>
      <div style={{
      width: '200px'
    }}>
        <Card {...props} variant="outlined">
          Outlined
        </Card>
      </div>
      <div style={{
      width: '200px'
    }}>
        <Card {...props} variant="filled">
          Filled
        </Card>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'stretch'
  }}>
      <div style={{
      width: '150px'
    }}>
        <Card {...props} padding="none">
          None
        </Card>
      </div>
      <div style={{
      width: '150px'
    }}>
        <Card {...props} padding="sm">
          Small
        </Card>
      </div>
      <div style={{
      width: '150px'
    }}>
        <Card {...props} padding="md">
          Medium
        </Card>
      </div>
      <div style={{
      width: '150px'
    }}>
        <Card {...props} padding="lg">
          Large
        </Card>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    width: '400px'
  }}>
      <Card {...props}>
        <p style={{
        margin: 0
      }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p style={{
        margin: 'var(--space-3) 0 0 0'
      }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p style={{
        margin: 'var(--space-3) 0 0 0'
      }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Card>
    </div>
}`,...o.parameters?.docs?.source}}};const q=["Default","Elevated","Outlined","Filled","Variants","PaddingSizes","WithLongContent"];export{r as Default,i as Elevated,n as Filled,t as Outlined,l as PaddingSizes,s as Variants,o as WithLongContent,q as __namedExportsOrder,O as default};
