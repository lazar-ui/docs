import{H as o}from"./iframe-CuM5Wzi8.js";import{c as s}from"./clsx-B-dksMZM.js";import{g as l}from"./getVariantClassName-BPpmbSIb.js";const c="Alert",v="_root_1ibdz_9",d="_variantDanger_1ibdz_18",A="_variantInfo_1ibdz_25",m="_variantSuccess_1ibdz_32",p="_variantWarning_1ibdz_39",a={root:v,variantDanger:d,variantInfo:A,variantSuccess:m,variantWarning:p},n=r=>{const{children:t,variant:e="info"}=r,i=s(a.root,l("variant",e,a));return o.jsx("div",{className:i,role:"alert",children:t})};n.displayName=c;n.__docgenInfo={description:`Alert component. Renders a contextual notification banner.

Supports four variants: info, success, warning, danger.
Background and border are derived from the variant color via \`color-mix()\`.

@example
\`\`\`tsx
<Alert>This is an info alert.</Alert>
<Alert variant="success">Operation completed.</Alert>
<Alert variant="warning">Check your input.</Alert>
<Alert variant="danger">Something went wrong.</Alert>
\`\`\``,methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"literal",value:"`${EAlertVariant.INFO | EAlertVariant.SUCCESS | EAlertVariant.WARNING | EAlertVariant.DANGER}`"},description:"Visual variant. Default: 'info'."}}};export{n as A};
