import{H as e,R as w}from"./iframe-BNzaeSrw.js";import{c as _}from"./clsx-B-dksMZM.js";import{g as h}from"./getVariantClassName-CzoZlbgP.js";import"./preload-helper-PPVm8Dsz.js";import"./camelCase-BotU5jr0.js";const E="Textarea",j="_root_n07z1_14",R="_invalid_n07z1_55",C="_sizeSm_n07z1_63",L="_sizeMd_n07z1_69",B="_sizeLg_n07z1_75",M="_resizeNone_n07z1_82",D="_resizeVertical_n07z1_86",V="_resizeBoth_n07z1_90",s={root:j,invalid:R,sizeSm:C,sizeMd:L,sizeLg:B,resizeNone:M,resizeVertical:D,resizeBoth:V},a=t=>{const{invalid:r=!1,resize:u="vertical",rows:x=3,size:v="md",onChange:g,onBlur:z,onFocus:y,...T}=t,f=_(s.root,h("size",v,s),h("resize",u,s),r&&s.invalid),S=b=>{g?.(b.target.value)};return e.jsx("textarea",{...T,className:f,onChange:S,onBlur:z,onFocus:y,rows:x})};a.displayName=E;a.__docgenInfo={description:`Textarea component. Renders a native \`<textarea>\` with size, resize, and state variants.

Visually matches Input component styling using the same CSS tokens.

@example
\`\`\`tsx
<Textarea placeholder="Enter text" />
<Textarea size="lg" rows={6} />
<Textarea invalid placeholder="Error" />
<Textarea resize="none" />
<Textarea disabled value="Read-only" />
<Textarea maxLength={200} />
\`\`\``,methods:[],displayName:"Textarea",props:{size:{required:!1,tsType:{name:"literal",value:"`${ETextareaSize.SM | ETextareaSize.MD | ETextareaSize.LG}`"},description:"Size variant. Default: 'md'."},resize:{required:!1,tsType:{name:"literal",value:"`${ETextareaResize.NONE | ETextareaResize.VERTICAL | ETextareaResize.BOTH}`"},description:"Resize behavior. Default: 'vertical'."},invalid:{required:!1,tsType:{name:"boolean"},description:"When true, the textarea is in an invalid/error state."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback invoked when the value changes."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback invoked when the textarea loses focus."},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback invoked when the textarea gains focus."}},composes:["TNativeTextareaAttributes"]};const H={argTypes:{disabled:{control:"boolean",table:{type:{summary:"boolean"}}},invalid:{control:"boolean",table:{type:{summary:"boolean"}}},maxLength:{control:{type:"number"},table:{type:{summary:"number"}}},placeholder:{control:{type:"text"}},resize:{control:{type:"select"},options:["none","vertical","both"],table:{defaultValue:{summary:"vertical"},type:{summary:"none | vertical | both"}}},rows:{control:{type:"number"},table:{type:{summary:"number"}}},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"},type:{summary:"sm | md | lg"}}}},args:{placeholder:"Enter text...",resize:"vertical",rows:3,size:"md"},component:a,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/Textarea"},i={},n={args:{value:"This is a sample text in the textarea."}},o={args:{disabled:!0,value:"Disabled textarea content"}},l={args:{invalid:!0,placeholder:"This field has an error"}},d={args:{maxLength:100,placeholder:"Type up to 100 characters..."}},c={render:t=>e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsxs("div",{style:{width:"100%"},children:[e.jsx("div",{style:{fontSize:"12px",marginBottom:"4px"},children:"sm"}),e.jsx(a,{...t,size:"sm",placeholder:"Small size"})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx("div",{style:{fontSize:"12px",marginBottom:"4px"},children:"md"}),e.jsx(a,{...t,size:"md",placeholder:"Medium size (default)"})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx("div",{style:{fontSize:"12px",marginBottom:"4px"},children:"lg"}),e.jsx(a,{...t,size:"lg",placeholder:"Large size"})]})]})},p={render:t=>e.jsxs("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsxs("div",{style:{width:"100%"},children:[e.jsx("div",{style:{fontSize:"12px",marginBottom:"4px"},children:"none"}),e.jsx(a,{...t,resize:"none",placeholder:"Cannot resize"})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx("div",{style:{fontSize:"12px",marginBottom:"4px"},children:"vertical (default)"}),e.jsx(a,{...t,resize:"vertical",placeholder:"Resize vertically only"})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx("div",{style:{fontSize:"12px",marginBottom:"4px"},children:"both"}),e.jsx(a,{...t,resize:"both",placeholder:"Resize in both directions"})]})]})},m={parameters:{docs:{description:{story:"In controlled mode, value and onChange are used to manage the textarea content."}}},render:t=>{const[r,u]=w.useState("");return e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{...t,onChange:x=>u(x),placeholder:"Type something...",value:r}),e.jsxs("p",{style:{color:"#666",fontSize:"13px",marginTop:"8px"},children:["Character count: ",r.length]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a sample text in the textarea.'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled textarea content'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: 'This field has an error'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 100,
    placeholder: 'Type up to 100 characters...'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <div style={{
      width: '100%'
    }}>
        <div style={{
        fontSize: '12px',
        marginBottom: '4px'
      }}>sm</div>
        <Textarea {...props} size="sm" placeholder="Small size" />
      </div>
      <div style={{
      width: '100%'
    }}>
        <div style={{
        fontSize: '12px',
        marginBottom: '4px'
      }}>md</div>
        <Textarea {...props} size="md" placeholder="Medium size (default)" />
      </div>
      <div style={{
      width: '100%'
    }}>
        <div style={{
        fontSize: '12px',
        marginBottom: '4px'
      }}>lg</div>
        <Textarea {...props} size="lg" placeholder="Large size" />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <div style={{
      width: '100%'
    }}>
        <div style={{
        fontSize: '12px',
        marginBottom: '4px'
      }}>none</div>
        <Textarea {...props} resize="none" placeholder="Cannot resize" />
      </div>
      <div style={{
      width: '100%'
    }}>
        <div style={{
        fontSize: '12px',
        marginBottom: '4px'
      }}>vertical (default)</div>
        <Textarea {...props} resize="vertical" placeholder="Resize vertically only" />
      </div>
      <div style={{
      width: '100%'
    }}>
        <div style={{
        fontSize: '12px',
        marginBottom: '4px'
      }}>both</div>
        <Textarea {...props} resize="both" placeholder="Resize in both directions" />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'In controlled mode, value and onChange are used to manage the textarea content.'
      }
    }
  },
  render: props => {
    const [value, setValue] = React.useState('');
    return <div style={{
      width: '400px'
    }}>
        <Textarea {...props} onChange={v => setValue(v)} placeholder="Type something..." value={value} />
        <p style={{
        color: '#666',
        fontSize: '13px',
        marginTop: '8px'
      }}>
          Character count: {value.length}
        </p>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const q=["Default","WithValue","Disabled","Invalid","WithMaxLength","Sizes","ResizeOptions","Controlled"];export{m as Controlled,i as Default,o as Disabled,l as Invalid,p as ResizeOptions,c as Sizes,d as WithMaxLength,n as WithValue,q as __namedExportsOrder,H as default};
