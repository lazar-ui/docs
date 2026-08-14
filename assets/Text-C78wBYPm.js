import{R as h,H as p}from"./iframe-DLdpy6-y.js";import{c as g}from"./clsx-B-dksMZM.js";import{g as i}from"./getVariantClassName-DR0bhogv.js";function f(t){const e=[];return t.underline&&e.push("underline"),t.underline==="dotted"&&e.push("dotted"),t.strikethrough&&e.push("line-through"),e.length>0?{textDecoration:e.join(" ")}:void 0}const T="Text",y="sm",w="normal",k="p",z="_root_ku4ix_1",S="_truncate_ku4ix_5",b="_sizeXs_ku4ix_12",v="_sizeSm_ku4ix_18",D="_sizeMd_ku4ix_24",E="_sizeLg_ku4ix_30",L="_weightNormal_ku4ix_37",M="_weightMedium_ku4ix_41",N="_weightSemibold_ku4ix_45",R="_weightBold_ku4ix_49",q="_colorPrimary_ku4ix_54",A="_colorSecondary_ku4ix_58",B="_colorTertiary_ku4ix_62",H="_colorDisabled_ku4ix_66",I="_colorBrand_ku4ix_70",o={root:z,truncate:S,sizeXs:b,sizeSm:v,sizeMd:D,sizeLg:E,weightNormal:L,weightMedium:M,weightSemibold:N,weightBold:R,colorPrimary:q,colorSecondary:A,colorTertiary:B,colorDisabled:H,colorBrand:I},r=h.forwardRef((t,e)=>{const{as:s=k,children:l,color:n,size:a=y,weight:d=w,truncate:c=!1,underline:u,strikethrough:m}=t,_=f({strikethrough:m,underline:u}),x=g(o.root,i("size",a,o),i("weight",d,o),n&&i("color",n,o),{[o.truncate]:c});return p.jsx(s,{className:x,ref:e,style:_,children:l})});r.displayName=T;r.__docgenInfo={description:`Text — component for displaying body text.

Supports sizes from 12px (xs) to 16px (lg), various font weights,
and colors from the design system. Suitable for paragraphs, labels, annotations.

Unlike Heading, Text does not have built-in bold styling —
weight is controlled by the \`weight\` prop.

@example
\`\`\`tsx
<Text size="lg" weight="medium">Body text</Text>
\`\`\`

@example
\`\`\`tsx
<Text size="xs" color="secondary" as="span">Annotation</Text>
\`\`\``,methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"union",raw:"'p' | 'span' | 'div'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"HTML tag for rendering the root element. Defaults to `p`."},size:{required:!1,tsType:{name:"literal",value:"`${ETextSize}`"},description:"Text size. Defaults to `sm`."},weight:{required:!1,tsType:{name:"literal",value:"`${ETextWeight}`"},description:"Font weight. Defaults to `normal`."},color:{required:!1,tsType:{name:"literal",value:"`${ETextColor}`"},description:"Text color from the design system. If not provided — uses inherited color."},truncate:{required:!1,tsType:{name:"boolean"},description:"Truncate text with ellipsis (single line, `text-overflow: ellipsis`)."},underline:{required:!1,tsType:{name:"union",raw:"boolean | 'dotted'",elements:[{name:"boolean"},{name:"literal",value:"'dotted'"}]},description:"Underline: `true` for regular underline, `'dotted'` for dotted underline."},strikethrough:{required:!1,tsType:{name:"boolean"},description:"Strikethrough text (`text-decoration: line-through`)."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref on the root element."}}};export{r as T};
