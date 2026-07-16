import{N as z,H as a}from"./iframe-CuM5Wzi8.js";import{c as h}from"./clsx-B-dksMZM.js";import{g as f}from"./getVariantClassName-BPpmbSIb.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-DerEp_A_.js";const y="Avatar",_="_root_1t32a_7",S="_image_1t32a_21",b="_fallback_1t32a_27",j="_sizeSm_1t32a_35",k="_sizeMd_1t32a_44",E="_sizeLg_1t32a_52",D="_sizeXl_1t32a_60",t={root:_,image:S,fallback:b,sizeSm:j,sizeMd:k,sizeLg:E,sizeXl:D},r=e=>{const{src:n,alt:d="",children:m,size:g="md",color:p}=e,[v,u]=z.useState(!1),x=h(t.root,f("size",g,t)),A=n&&!v;return a.jsx("div",{className:x,style:{"--avatar-color":p??"var(--lui-color-background-tertiary)","--avatar-text-color":p?"var(--lui-color-text-on-brand)":"var(--lui-color-text-primary)"},children:A?a.jsx("img",{className:t.image,src:n,alt:d,onError:()=>u(!0)}):m&&a.jsx("span",{className:t.fallback,children:m})})};r.displayName=y;r.__docgenInfo={description:'Avatar component. Renders an image with a textual fallback (children) when the image fails to load.\n\n@example\n```tsx\n<Avatar src="https://i.pravatar.cc/80" alt="User" />\n<Avatar size="lg" color="var(--lui-palette-blue-500)">JD</Avatar>\n```',methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image source URL."},alt:{required:!1,tsType:{name:"string"},description:"Alternative text for the image."},size:{required:!1,tsType:{name:"literal",value:"`${EAvatarSize.SM | EAvatarSize.MD | EAvatarSize.LG | EAvatarSize.XL}`"},description:"Size."},color:{required:!1,tsType:{name:"string"},description:"CSS background colour for the fallback state. Default: `var(--lui-color-background-tertiary)`."}}};const J={title:"@lazar-ui／kit/Components/Avatar",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg | xl"}}},color:{control:"color",table:{type:{summary:"string"}}}},args:{size:"md"}},s={args:{src:"https://i.pravatar.cc/80?img=12",alt:"User avatar"}},o={args:{children:"JD"}},l={render:e=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(r,{...e,size:"sm",children:"SM"}),a.jsx(r,{...e,size:"md",children:"MD"}),a.jsx(r,{...e,size:"lg",children:"LG"}),a.jsx(r,{...e,size:"xl",children:"XL"})]})},i={render:e=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(r,{...e,color:"var(--lui-palette-brand)",children:"AB"}),a.jsx(r,{...e,color:"var(--lui-palette-blue-500)",children:"CD"}),a.jsx(r,{...e,color:"var(--lui-palette-green-500)",children:"EF"}),a.jsx(r,{...e,color:"var(--lui-palette-orange-500)",children:"GH"}),a.jsx(r,{...e,color:"var(--lui-palette-red-500)",children:"IJ"})]})},c={args:{src:"https://example.com/broken-image.jpg",alt:"Broken image",children:"JD"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/80?img=12',
    alt: 'User avatar'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar {...props} color="var(--lui-palette-brand)">
        AB
      </Avatar>
      <Avatar {...props} color="var(--lui-palette-blue-500)">
        CD
      </Avatar>
      <Avatar {...props} color="var(--lui-palette-green-500)">
        EF
      </Avatar>
      <Avatar {...props} color="var(--lui-palette-orange-500)">
        GH
      </Avatar>
      <Avatar {...props} color="var(--lui-palette-red-500)">
        IJ
      </Avatar>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://example.com/broken-image.jpg',
    alt: 'Broken image',
    children: 'JD'
  }
}`,...c.parameters?.docs?.source}}};const X=["Default","Fallback","Sizes","Colors","ImageError"];export{i as Colors,s as Default,o as Fallback,c as ImageError,l as Sizes,X as __namedExportsOrder,J as default};
