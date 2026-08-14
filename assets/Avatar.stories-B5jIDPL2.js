import{N as h,H as e}from"./iframe-DLdpy6-y.js";import{c as _}from"./clsx-B-dksMZM.js";import{g as S}from"./getVariantClassName-DR0bhogv.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-CqHBbmbu.js";const b="Avatar",I=2,D="_root_162at_7",E="_image_162at_21",J="_fallback_162at_27",C="_sizeSm_162at_35",L="_sizeMd_162at_44",N="_sizeLg_162at_52",M="_sizeXl_162at_60",s={root:D,image:E,fallback:J,sizeSm:C,sizeMd:L,sizeLg:N,sizeXl:M},U=a=>a.trim().split(/\s+/).map(d=>d.charAt(0)).join("").toUpperCase().slice(0,I),R=a=>a?"var(--lui-color-text-on-primary)":"var(--lui-color-text-primary)",r=a=>{const{alt:g="",children:d,color:u,name:p,size:f="md",src:x}=a,[z,A]=h.useState(!1),j=h.useCallback(()=>A(!0),[]);let v=d;p!==void 0&&(v=U(p));const k=_(s.root,S("size",f,s)),y=!!(x&&!z);return e.jsxs("div",{className:k,title:p,style:{"--avatar-color":u??"var(--lui-color-background-tertiary)","--avatar-text-color":R(u)},children:[y&&e.jsx("img",{className:s.image,src:x,alt:g,onError:j}),!y&&v&&e.jsx("span",{className:s.fallback,children:v})]})};r.displayName=b;r.__docgenInfo={description:'Avatar component. Renders an image with initials from `name`, or a textual fallback from `children`.\n\n@example\n```tsx\n<Avatar src="https://i.pravatar.cc/80" alt="User" />\n<Avatar name="John Doe" size="lg" color="var(--lui-color-text-link)" />\n<Avatar size="lg" color="var(--lui-color-text-link)">JD</Avatar>\n```',methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image source URL."},alt:{required:!1,tsType:{name:"string"},description:"Alternative text for the image."},name:{required:!1,tsType:{name:"string"},description:"Full name used to generate fallback initials and the root title."},size:{required:!1,tsType:{name:"literal",value:"`${EAvatarSize.SM | EAvatarSize.MD | EAvatarSize.LG | EAvatarSize.XL}`"},description:"Size."},color:{required:!1,tsType:{name:"string"},description:"CSS background colour for the fallback state. Default: `var(--lui-color-background-tertiary)`."}}};const X={argTypes:{alt:{control:{type:"text"},table:{type:{summary:"string"}}},children:{control:{type:"text"},table:{type:{summary:"React.ReactNode"}}},color:{control:{type:"color"},table:{type:{summary:"string"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},size:{control:{type:"select"},options:["sm","md","lg","xl"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg | xl"}}},src:{control:{type:"text"},table:{type:{summary:"string"}}}},args:{size:"md"},component:r,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/Avatar"},t={args:{alt:"User avatar",src:"https://i.pravatar.cc/80?img=12"}},o={args:{name:"Jane Doe"}},n={args:{children:"JD"}},i={render:a=>e.jsxs("div",{style:{alignItems:"center",display:"flex",gap:"16px"},children:[e.jsx(r,{...a,name:"Small User",size:"sm"}),e.jsx(r,{...a,name:"Medium User",size:"md"}),e.jsx(r,{...a,name:"Large User",size:"lg"}),e.jsx(r,{...a,name:"Extra Large User",size:"xl"})]})},l={render:a=>e.jsxs("div",{style:{alignItems:"center",display:"flex",gap:"16px"},children:[e.jsx(r,{...a,color:"var(--lui-color-background-primary)",name:"Alice Brown"}),e.jsx(r,{...a,color:"var(--lui-color-text-link)",name:"Charlie Davis"}),e.jsx(r,{...a,color:"var(--lui-color-text-success)",name:"Eva Fox"}),e.jsx(r,{...a,color:"var(--lui-color-text-warning)",name:"Grace Hill"}),e.jsx(r,{...a,color:"var(--lui-color-text-error)",name:"Ivy Jones"})]})},c={args:{alt:"Broken image",name:"Jane Doe",src:"https://example.com/broken-image.jpg"}},m={render:a=>e.jsxs("div",{style:{alignItems:"center",display:"flex",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx(r,{...a,name:"Madonna"}),e.jsx("div",{children:"One name: M"})]}),e.jsxs("div",{children:[e.jsx(r,{...a,name:"John Doe"}),e.jsx("div",{children:"Name and surname: JD"})]}),e.jsxs("div",{children:[e.jsx(r,{...a,name:"John Ronald Reuel Tolkien"}),e.jsx("div",{children:"Several words: JR"})]}),e.jsxs("div",{children:[e.jsx(r,{...a,name:"  jane   doe  "}),e.jsx("div",{children:"Whitespace: JD"})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    alt: 'User avatar',
    src: 'https://i.pravatar.cc/80?img=12'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Doe'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'JD'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    alignItems: 'center',
    display: 'flex',
    gap: '16px'
  }}>
      <Avatar {...props} name="Small User" size="sm" />
      <Avatar {...props} name="Medium User" size="md" />
      <Avatar {...props} name="Large User" size="lg" />
      <Avatar {...props} name="Extra Large User" size="xl" />
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    alignItems: 'center',
    display: 'flex',
    gap: '16px'
  }}>
      <Avatar {...props} color="var(--lui-color-background-primary)" name="Alice Brown" />
      <Avatar {...props} color="var(--lui-color-text-link)" name="Charlie Davis" />
      <Avatar {...props} color="var(--lui-color-text-success)" name="Eva Fox" />
      <Avatar {...props} color="var(--lui-color-text-warning)" name="Grace Hill" />
      <Avatar {...props} color="var(--lui-color-text-error)" name="Ivy Jones" />
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    alt: 'Broken image',
    name: 'Jane Doe',
    src: 'https://example.com/broken-image.jpg'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    alignItems: 'center',
    display: 'flex',
    gap: '16px'
  }}>
      <div>
        <Avatar {...props} name="Madonna" />
        <div>One name: M</div>
      </div>
      <div>
        <Avatar {...props} name="John Doe" />
        <div>Name and surname: JD</div>
      </div>
      <div>
        <Avatar {...props} name="John Ronald Reuel Tolkien" />
        <div>Several words: JR</div>
      </div>
      <div>
        <Avatar {...props} name="  jane   doe  " />
        <div>Whitespace: JD</div>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const G=["Default","Fallback","LegacyChildrenFallback","Sizes","Colors","ImageError","InitialsEdgeCases"];export{l as Colors,t as Default,o as Fallback,c as ImageError,m as InitialsEdgeCases,n as LegacyChildrenFallback,i as Sizes,G as __namedExportsOrder,X as default};
