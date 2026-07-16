import{H as e}from"./iframe-n4ZyvbqO.js";import{T as t}from"./Text-Dt-IYd8_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./getVariantClassName-CW3tvtKI.js";import"./camelCase-CAJeNIN1.js";const b={title:"@lazar-ui／kit/Components/Text",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"The quick brown fox jumps over the lazy dog",size:"sm",weight:"normal"},argTypes:{as:{control:{type:"select"},options:["p","span","div"],table:{defaultValue:{summary:"p"},type:{summary:"'p' | 'span' | 'div'"}}},size:{control:{type:"select"},options:["xs","sm","md","lg"],table:{defaultValue:{summary:"sm"},type:{summary:"'xs' | 'sm' | 'md' | 'lg'"}}},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"],table:{defaultValue:{summary:"normal"},type:{summary:"'normal' | 'medium' | 'semibold' | 'bold'"}}},color:{control:{type:"select"},options:["primary","secondary","tertiary","disabled","brand"],table:{type:{summary:"'primary' | 'secondary' | 'tertiary' | 'disabled' | 'brand'"}}},truncate:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},underline:{control:{type:"select"},options:[!0,"dotted"],table:{defaultValue:{summary:"false"},type:{summary:"boolean | 'dotted'"}}},strikethrough:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},children:{control:{type:"text"},table:{type:{summary:"React.ReactNode"}}}}},p={},s={name:"Sizes",render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{...r,size:"lg",children:"Text LG (16px)"}),e.jsx(t,{...r,size:"md",children:"Text MD (15px)"}),e.jsx(t,{...r,size:"sm",children:"Text SM (14px)"}),e.jsx(t,{...r,size:"xs",children:"Text XS (12px)"})]})},o={name:"Weights",render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{...r,size:"md",weight:"normal",children:"Weight Normal (400)"}),e.jsx(t,{...r,size:"md",weight:"medium",children:"Weight Medium (500)"}),e.jsx(t,{...r,size:"md",weight:"semibold",children:"Weight Semibold (600)"}),e.jsx(t,{...r,size:"md",weight:"bold",children:"Weight Bold (700)"})]})},i={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{...r,color:"primary",children:"Primary"}),e.jsx(t,{...r,color:"secondary",children:"Secondary"}),e.jsx(t,{...r,color:"tertiary",children:"Tertiary"}),e.jsx(t,{...r,color:"disabled",children:"Disabled"}),e.jsx(t,{...r,color:"brand",children:"Brand"})]})},a={args:{size:"sm",weight:"medium",children:"Label text (sm, medium weight)"}},n={args:{underline:!0}},d={args:{underline:"dotted"}},l={args:{strikethrough:!0}},c={args:{underline:!0,strikethrough:!0}},m={args:{truncate:!0,children:"This is a very long text that should be truncated to a single line with an ellipsis because it exceeds the available container width."},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Text {...props} size="lg">
        Text LG (16px)
      </Text>
      <Text {...props} size="md">
        Text MD (15px)
      </Text>
      <Text {...props} size="sm">
        Text SM (14px)
      </Text>
      <Text {...props} size="xs">
        Text XS (12px)
      </Text>
    </div>
}`,...s.parameters?.docs?.source},description:{story:`All four text sizes:
- **LG** — 16px
- **MD** — 15px
- **SM** — 14px
- **XS** — 12px`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Weights',
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Text {...props} size="md" weight="normal">
        Weight Normal (400)
      </Text>
      <Text {...props} size="md" weight="medium">
        Weight Medium (500)
      </Text>
      <Text {...props} size="md" weight="semibold">
        Weight Semibold (600)
      </Text>
      <Text {...props} size="md" weight="bold">
        Weight Bold (700)
      </Text>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"All four font weights displayed at the same `md` size.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Text {...props} color="primary">
        Primary
      </Text>
      <Text {...props} color="secondary">
        Secondary
      </Text>
      <Text {...props} color="tertiary">
        Tertiary
      </Text>
      <Text {...props} color="disabled">
        Disabled
      </Text>
      <Text {...props} color="brand">
        Brand
      </Text>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"All available color tokens applied to text.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    weight: 'medium',
    children: 'Label text (sm, medium weight)'
  }
}`,...a.parameters?.docs?.source},description:{story:'Label-style text: `size="sm"` with `weight="medium"`.\nReplaces the old Typography `variant="label"`.',...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    underline: true
  }
}`,...n.parameters?.docs?.source},description:{story:"Regular underline decoration via `underline={true}`.",...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    underline: 'dotted' as const
  }
}`,...d.parameters?.docs?.source},description:{story:'Dotted underline decoration via `underline="dotted"`.',...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    strikethrough: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Strikethrough text decoration.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    underline: true,
    strikethrough: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Underline and strikethrough combined.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    truncate: true,
    children: 'This is a very long text that should be truncated to a single line with an ellipsis because it exceeds the available container width.'
  },
  render: props => <div style={{
    width: 280
  }}>
      <Text {...props} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Single-line truncation with ellipsis.
The text is constrained to 280px and overflows.`,...m.parameters?.docs?.description}}};const f=["Default","BodySizes","Weights","Colors","Label","Underline","DottedUnderline","Strikethrough","UnderlineStrikethrough","Truncate"];export{s as BodySizes,i as Colors,p as Default,d as DottedUnderline,a as Label,l as Strikethrough,m as Truncate,n as Underline,c as UnderlineStrikethrough,o as Weights,f as __namedExportsOrder,b as default};
