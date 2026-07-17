import{N as z,H as r}from"./iframe-16V6KrfE.js";import{c as h}from"./clsx-B-dksMZM.js";import{g as y}from"./getVariantClassName-BE0gBw9M.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-Ct2evvX9.js";const f="Avatar",_="_root_1t32a_7",S="_image_1t32a_21",k="_fallback_1t32a_27",b="_sizeSm_1t32a_35",j="_sizeMd_1t32a_44",E="_sizeLg_1t32a_52",D="_sizeXl_1t32a_60",s={root:_,image:S,fallback:k,sizeSm:b,sizeMd:j,sizeLg:E,sizeXl:D},e=a=>{const{src:n,alt:d="",children:m,size:g="md",color:p}=a,[u,v]=z.useState(!1),x=h(s.root,y("size",g,s)),A=n&&!u;return r.jsx("div",{className:x,style:{"--avatar-color":p??"var(--lui-color-background-tertiary)","--avatar-text-color":p?"var(--lui-color-text-on-primary)":"var(--lui-color-text-primary)"},children:A?r.jsx("img",{className:s.image,src:n,alt:d,onError:()=>v(!0)}):m&&r.jsx("span",{className:s.fallback,children:m})})};e.displayName=f;e.__docgenInfo={description:'Avatar component. Renders an image with a textual fallback (children) when the image fails to load.\n\n@example\n```tsx\n<Avatar src="https://i.pravatar.cc/80" alt="User" />\n<Avatar size="lg" color="var(--lui-color-text-link)">JD</Avatar>\n```',methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image source URL."},alt:{required:!1,tsType:{name:"string"},description:"Alternative text for the image."},size:{required:!1,tsType:{name:"literal",value:"`${EAvatarSize.SM | EAvatarSize.MD | EAvatarSize.LG | EAvatarSize.XL}`"},description:"Size."},color:{required:!1,tsType:{name:"string"},description:"CSS background colour for the fallback state. Default: `var(--lui-color-background-tertiary)`."}}};const J={title:"@lazar-ui／kit/Components/Avatar",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg | xl"}}},color:{control:"color",table:{type:{summary:"string"}}}},args:{size:"md"}},t={args:{src:"https://i.pravatar.cc/80?img=12",alt:"User avatar"}},o={args:{children:"JD"}},l={render:a=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{...a,size:"sm",children:"SM"}),r.jsx(e,{...a,size:"md",children:"MD"}),r.jsx(e,{...a,size:"lg",children:"LG"}),r.jsx(e,{...a,size:"xl",children:"XL"})]})},c={render:a=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{...a,color:"var(--lui-color-background-primary)",children:"AB"}),r.jsx(e,{...a,color:"var(--lui-color-text-link)",children:"CD"}),r.jsx(e,{...a,color:"var(--lui-color-text-success)",children:"EF"}),r.jsx(e,{...a,color:"var(--lui-color-text-warning)",children:"GH"}),r.jsx(e,{...a,color:"var(--lui-color-text-error)",children:"IJ"})]})},i={args:{src:"https://example.com/broken-image.jpg",alt:"Broken image",children:"JD"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/80?img=12',
    alt: 'User avatar'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'JD'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar {...props} size="sm">
        SM
      </Avatar>
      <Avatar {...props} size="md">
        MD
      </Avatar>
      <Avatar {...props} size="lg">
        LG
      </Avatar>
      <Avatar {...props} size="xl">
        XL
      </Avatar>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar {...props} color="var(--lui-color-background-primary)">
        AB
      </Avatar>
      <Avatar {...props} color="var(--lui-color-text-link)">
        CD
      </Avatar>
      <Avatar {...props} color="var(--lui-color-text-success)">
        EF
      </Avatar>
      <Avatar {...props} color="var(--lui-color-text-warning)">
        GH
      </Avatar>
      <Avatar {...props} color="var(--lui-color-text-error)">
        IJ
      </Avatar>
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://example.com/broken-image.jpg',
    alt: 'Broken image',
    children: 'JD'
  }
}`,...i.parameters?.docs?.source}}};const X=["Default","Fallback","Sizes","Colors","ImageError"];export{c as Colors,t as Default,o as Fallback,i as ImageError,l as Sizes,X as __namedExportsOrder,J as default};
