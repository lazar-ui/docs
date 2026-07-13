import{R as p,H as g}from"./iframe-DsJxp_Iw.js";import{c as f}from"./clsx-B-dksMZM.js";import{g as n}from"./getVariantClassName-DbP7vlfM.js";function T(t){const e=[];return t.underline&&e.push("underline"),t.underline==="dotted"&&e.push("dotted"),t.strikethrough&&e.push("line-through"),e.length>0?{textDecoration:e.join(" ")}:void 0}const x="Text",y="sm",v="normal",w="p",z="_root_1vl2j_1",j="_truncate_1vl2j_5",S="_sizeXs_1vl2j_12",b="_sizeSm_1vl2j_18",D="_sizeMd_1vl2j_24",E="_sizeLg_1vl2j_30",L="_weightNormal_1vl2j_37",M="_weightMedium_1vl2j_41",N="_weightSemibold_1vl2j_45",R="_weightBold_1vl2j_49",q="_colorPrimary_1vl2j_54",A="_colorSecondary_1vl2j_58",B="_colorTertiary_1vl2j_62",H="_colorDisabled_1vl2j_66",k="_colorBrand_1vl2j_70",o={root:z,truncate:j,sizeXs:S,sizeSm:b,sizeMd:D,sizeLg:E,weightNormal:L,weightMedium:M,weightSemibold:N,weightBold:R,colorPrimary:q,colorSecondary:A,colorTertiary:B,colorDisabled:H,colorBrand:k},i=p.forwardRef((t,e)=>{const{as:s=w,children:l,color:r,size:a=y,weight:d=v,truncate:c=!1,underline:m,strikethrough:u}=t,_=T({strikethrough:u,underline:m}),h=f(o.root,n("size",a,o),n("weight",d,o),r&&n("color",r,o),{[o.truncate]:c});return g.jsx(s,{className:h,ref:e,style:_,children:l})});i.displayName=x;i.__docgenInfo={description:`Text — component for displaying body text.

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
\`\`\``,methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"union",raw:"'p' | 'span' | 'div'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"HTML tag for rendering the root element. Defaults to `p`."},size:{required:!1,tsType:{name:"literal",value:"`${ETextSize}`"},description:"Text size. Defaults to `sm`."},weight:{required:!1,tsType:{name:"literal",value:"`${ETextWeight}`"},description:"Font weight. Defaults to `normal`."},color:{required:!1,tsType:{name:"literal",value:"`${ETextColor}`"},description:"Text color from the design system. If not provided — uses inherited color."},truncate:{required:!1,tsType:{name:"boolean"},description:"Truncate text with ellipsis (single line, `text-overflow: ellipsis`)."},underline:{required:!1,tsType:{name:"union",raw:"boolean | 'dotted'",elements:[{name:"boolean"},{name:"literal",value:"'dotted'"}]},description:"Underline: `true` for regular underline, `'dotted'` for dotted underline."},strikethrough:{required:!1,tsType:{name:"boolean"},description:"Strikethrough text (`text-decoration: line-through`)."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref on the root element."}}};export{i as T};
