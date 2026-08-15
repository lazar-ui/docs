import{H as i}from"./iframe-vKSYs7iX.js";import{c as s}from"./clsx-B-dksMZM.js";import{g as l}from"./getVariantClassName-B9bEubGl.js";const c="Alert",v="_root_vu9ow_9",u="_variantDanger_vu9ow_18",A="_variantInfo_vu9ow_25",m="_variantSuccess_vu9ow_32",p="_variantWarning_vu9ow_39",a={root:v,variantDanger:u,variantInfo:A,variantSuccess:m,variantWarning:p},n=r=>{const{children:t,variant:e="info"}=r,o=s(a.root,l("variant",e,a));return i.jsx("div",{className:o,role:"alert",children:t})};n.displayName=c;n.__docgenInfo={description:`Alert component. Renders a contextual notification banner.

Supports four variants: info, success, warning, danger.
Background and border are derived from the variant color via \`color-mix()\`.

@example
\`\`\`tsx
<Alert>This is an info alert.</Alert>
<Alert variant="success">Operation completed.</Alert>
<Alert variant="warning">Check your input.</Alert>
<Alert variant="danger">Something went wrong.</Alert>
\`\`\``,methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"literal",value:"`${EAlertVariant.INFO | EAlertVariant.SUCCESS | EAlertVariant.WARNING | EAlertVariant.DANGER}`"},description:"Visual variant. Default: 'info'."}}};export{n as A};
