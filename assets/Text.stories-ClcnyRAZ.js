import{R as j,H as r}from"./iframe-Cjz0EO4m.js";import{c as D}from"./clsx-B-dksMZM.js";import{g as x}from"./getVariantClassName-DDKRqdy-.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-B8ET9H2F.js";function L(e){const s=[];return e.underline&&s.push("underline"),e.underline==="dotted"&&s.push("dotted"),e.strikethrough&&s.push("line-through"),s.length>0?{textDecoration:s.join(" ")}:void 0}const M="Text",k="sm",W="normal",E="p",R="_root_1vl2j_1",B="_truncate_1vl2j_5",N="_sizeXs_1vl2j_12",U="_sizeSm_1vl2j_18",q="_sizeMd_1vl2j_24",A="_sizeLg_1vl2j_30",C="_weightNormal_1vl2j_37",V="_weightMedium_1vl2j_41",H="_weightSemibold_1vl2j_45",P="_weightBold_1vl2j_49",X="_colorPrimary_1vl2j_54",G="_colorSecondary_1vl2j_58",I="_colorTertiary_1vl2j_62",F="_colorDisabled_1vl2j_66",$="_colorBrand_1vl2j_70",o={root:R,truncate:B,sizeXs:N,sizeSm:U,sizeMd:q,sizeLg:A,weightNormal:C,weightMedium:V,weightSemibold:H,weightBold:P,colorPrimary:X,colorSecondary:G,colorTertiary:I,colorDisabled:F,colorBrand:$},t=j.forwardRef((e,s)=>{const{as:y=E,children:T,color:g,size:b=k,weight:f=W,truncate:_=!1,underline:v,strikethrough:w}=e,z=L({strikethrough:w,underline:v}),S=D(o.root,x("size",b,o),x("weight",f,o),g&&x("color",g,o),{[o.truncate]:_});return r.jsx(y,{className:S,ref:s,style:z,children:T})});t.displayName=M;t.__docgenInfo={description:`Text — компонент для отображения основного текста.

Поддерживает размеры от 12px (xs) до 16px (lg), различные насыщенности шрифта
и цвета из дизайн-системы. Подходит для параграфов, лейблов, аннотаций.

В отличие от Heading, Text не имеет встроенного жирного начертания —
вес управляется отдельным пропом \`weight\`.

@example
\`\`\`tsx
<Text size="lg" weight="medium">Основной текст</Text>
\`\`\`

@example
\`\`\`tsx
<Text size="xs" color="secondary" as="span">Аннотация</Text>
\`\`\``,methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"union",raw:"'p' | 'span' | 'div'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"HTML-тег для рендера корневого элемента. По умолчанию `p`."},size:{required:!1,tsType:{name:"literal",value:"`${ETextSize}`"},description:"Размер текста. По умолчанию `sm`."},weight:{required:!1,tsType:{name:"literal",value:"`${ETextWeight}`"},description:"Насыщенность шрифта. По умолчанию `normal`."},color:{required:!1,tsType:{name:"literal",value:"`${ETextColor}`"},description:"Цвет текста из дизайн-системы. Если не передан — используется наследованный цвет."},truncate:{required:!1,tsType:{name:"boolean"},description:"Обрезать текст с многоточием (одна строка, `text-overflow: ellipsis`)."},underline:{required:!1,tsType:{name:"union",raw:"boolean | 'dotted'",elements:[{name:"boolean"},{name:"literal",value:"'dotted'"}]},description:"Подчёркивание: `true` для обычного underline, `'dotted'` для пунктирного подчёркивания."},strikethrough:{required:!1,tsType:{name:"boolean"},description:"Зачёркивание текста (`text-decoration: line-through`)."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref на корневой элемент."}}};const Q={title:"@lazar-ui／kit/Components/Text",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"The quick brown fox jumps over the lazy dog",size:"sm",weight:"normal"},argTypes:{as:{control:{type:"select"},options:["p","span","div"],table:{defaultValue:{summary:"p"},type:{summary:"'p' | 'span' | 'div'"}}},size:{control:{type:"select"},options:["xs","sm","md","lg"],table:{defaultValue:{summary:"sm"},type:{summary:"'xs' | 'sm' | 'md' | 'lg'"}}},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"],table:{defaultValue:{summary:"normal"},type:{summary:"'normal' | 'medium' | 'semibold' | 'bold'"}}},color:{control:{type:"select"},options:["primary","secondary","tertiary","disabled","brand"],table:{type:{summary:"'primary' | 'secondary' | 'tertiary' | 'disabled' | 'brand'"}}},truncate:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},underline:{control:{type:"select"},options:[!0,"dotted"],table:{defaultValue:{summary:"false"},type:{summary:"boolean | 'dotted'"}}},strikethrough:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},children:{control:{type:"text"},table:{type:{summary:"React.ReactNode"}}}}},h={},i={name:"Sizes",render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx(t,{...e,size:"lg",children:"Text LG (16px)"}),r.jsx(t,{...e,size:"md",children:"Text MD (15px)"}),r.jsx(t,{...e,size:"sm",children:"Text SM (14px)"}),r.jsx(t,{...e,size:"xs",children:"Text XS (12px)"})]})},a={name:"Weights",render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx(t,{...e,size:"md",weight:"normal",children:"Weight Normal (400)"}),r.jsx(t,{...e,size:"md",weight:"medium",children:"Weight Medium (500)"}),r.jsx(t,{...e,size:"md",weight:"semibold",children:"Weight Semibold (600)"}),r.jsx(t,{...e,size:"md",weight:"bold",children:"Weight Bold (700)"})]})},n={render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx(t,{...e,color:"primary",children:"Primary"}),r.jsx(t,{...e,color:"secondary",children:"Secondary"}),r.jsx(t,{...e,color:"tertiary",children:"Tertiary"}),r.jsx(t,{...e,color:"disabled",children:"Disabled"}),r.jsx(t,{...e,color:"brand",children:"Brand"})]})},l={args:{size:"sm",weight:"medium",children:"Label text (sm, medium weight)"}},d={args:{underline:!0}},c={args:{underline:"dotted"}},m={args:{strikethrough:!0}},p={args:{underline:!0,strikethrough:!0}},u={args:{truncate:!0,children:"This is a very long text that should be truncated to a single line with an ellipsis because it exceeds the available container width."},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`All four text sizes:
- **LG** — 16px
- **MD** — 15px
- **SM** — 14px
- **XS** — 12px`,...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"All four font weights displayed at the same `md` size.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"All available color tokens applied to text.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    weight: 'medium',
    children: 'Label text (sm, medium weight)'
  }
}`,...l.parameters?.docs?.source},description:{story:'Label-style text: `size="sm"` with `weight="medium"`.\nReplaces the old Typography `variant="label"`.',...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    underline: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Regular underline decoration via `underline={true}`.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    underline: 'dotted' as const
  }
}`,...c.parameters?.docs?.source},description:{story:'Dotted underline decoration via `underline="dotted"`.',...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    strikethrough: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Strikethrough text decoration.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    underline: true,
    strikethrough: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Underline and strikethrough combined.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    truncate: true,
    children: 'This is a very long text that should be truncated to a single line with an ellipsis because it exceeds the available container width.'
  },
  render: props => <div style={{
    width: 280
  }}>
      <Text {...props} />
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Single-line truncation with ellipsis.
The text is constrained to 280px and overflows.`,...u.parameters?.docs?.description}}};const ee=["Default","BodySizes","Weights","Colors","Label","Underline","DottedUnderline","Strikethrough","UnderlineStrikethrough","Truncate"];export{i as BodySizes,n as Colors,h as Default,c as DottedUnderline,l as Label,m as Strikethrough,u as Truncate,d as Underline,p as UnderlineStrikethrough,a as Weights,ee as __namedExportsOrder,Q as default};
