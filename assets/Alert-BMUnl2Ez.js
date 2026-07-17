import{H as o}from"./iframe-DN6kL_na.js";import{c as s}from"./clsx-B-dksMZM.js";import{g as l}from"./getVariantClassName-DghXpxq_.js";const c="Alert",v="_root_1ybeq_9",A="_variantDanger_1ybeq_18",m="_variantInfo_1ybeq_25",p="_variantSuccess_1ybeq_32",d="_variantWarning_1ybeq_39",a={root:v,variantDanger:A,variantInfo:m,variantSuccess:p,variantWarning:d},n=r=>{const{children:t,variant:e="info"}=r,i=s(a.root,l("variant",e,a));return o.jsx("div",{className:i,role:"alert",children:t})};n.displayName=c;n.__docgenInfo={description:`Alert component. Renders a contextual notification banner.

Supports four variants: info, success, warning, danger.
Background and border are derived from the variant color via \`color-mix()\`.

@example
\`\`\`tsx
<Alert>This is an info alert.</Alert>
<Alert variant="success">Operation completed.</Alert>
<Alert variant="warning">Check your input.</Alert>
<Alert variant="danger">Something went wrong.</Alert>
\`\`\``,methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"literal",value:"`${EAlertVariant.INFO | EAlertVariant.SUCCESS | EAlertVariant.WARNING | EAlertVariant.DANGER}`"},description:"Visual variant. Default: 'info'."}}};export{n as A};
