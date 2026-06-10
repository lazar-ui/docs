import{H as e,N as u}from"./iframe-CU9UgNWq.js";import{I as a,D as b,i as I}from"./Icon-BCliy1pH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const m=[...I].sort(),S={title:"@lazar-ui／kit/Components/Icon",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"select"},options:m,table:{type:{summary:"IconName"}}},size:{control:{type:"number",min:8,max:64,step:1},table:{defaultValue:{summary:"16"},type:{summary:"number"}}},color:{control:{type:"color"},table:{defaultValue:{summary:"currentColor"},type:{summary:"string"}}},strokeWidth:{control:{type:"number",min:.5,max:8,step:.5},table:{defaultValue:{summary:"2"},type:{summary:"number"}}},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"}}}},args:{name:"search",size:16,color:"currentColor",strokeWidth:2}},o={},t={render:r=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{...r,name:"search",size:16}),e.jsx(a,{...r,name:"search",size:24}),e.jsx(a,{...r,name:"search",size:32}),e.jsx(a,{...r,name:"search",size:48})]})},n={render:r=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{...r,name:"search",color:"currentColor"}),e.jsx(a,{...r,name:"search",color:"#22c55e"}),e.jsx(a,{...r,name:"search",color:"#ef4444"}),e.jsx(a,{...r,name:"search",color:"#3b82f6"})]})},c={render:r=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{...r,name:"search"}),e.jsx(a,{...r,name:"user"}),e.jsx(a,{...r,name:"settings"}),e.jsx(a,{...r,name:"mail"}),e.jsx(a,{...r,name:"calendar"}),e.jsx(a,{...r,name:"info"})]})},i={render:r=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{...r,name:"search",strokeWidth:1}),e.jsx(a,{...r,name:"search",strokeWidth:2}),e.jsx(a,{...r,name:"search",strokeWidth:3}),e.jsx(a,{...r,name:"search",strokeWidth:4})]})},l={render:r=>e.jsx(a,{...r,name:"unknown-icon-name"})},p={parameters:{layout:"fullscreen"},argTypes:{name:{table:{disable:!0}},ariaLabel:{table:{disable:!0}}},args:{size:24,color:"currentColor",strokeWidth:2,name:"search"},render:function({size:h=24,color:g="currentColor",strokeWidth:y=2}){const[d,f]=u.useState(""),x=u.useMemo(()=>m.filter(s=>s.includes(d.toLowerCase())),[d]);return e.jsxs("div",{style:{padding:"32px",maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("input",{type:"text",value:d,onChange:s=>f(s.target.value),placeholder:"Filter icons by name...",style:{width:"100%",padding:"10px 16px",fontSize:"16px",border:"1px solid #d0d5dd",borderRadius:"8px",outline:"none",boxSizing:"border-box"}}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#667085"},children:[x.length," / ",m.length," icons"]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"8px"},children:x.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"12px 8px",borderRadius:"8px",border:"1px solid #eaeaea"},children:[e.jsx(b,{name:s,size:h,color:g,strokeWidth:y}),e.jsx("span",{style:{fontSize:"11px",textAlign:"center",wordBreak:"break-all",color:"#667085"},children:s})]},s))})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon {...props} name="search" size={16} />
      <Icon {...props} name="search" size={24} />
      <Icon {...props} name="search" size={32} />
      <Icon {...props} name="search" size={48} />
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon {...props} name="search" color="currentColor" />
      <Icon {...props} name="search" color="#22c55e" />
      <Icon {...props} name="search" color="#ef4444" />
      <Icon {...props} name="search" color="#3b82f6" />
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon {...props} name="search" />
      <Icon {...props} name="user" />
      <Icon {...props} name="settings" />
      <Icon {...props} name="mail" />
      <Icon {...props} name="calendar" />
      <Icon {...props} name="info" />
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon {...props} name="search" strokeWidth={1} />
      <Icon {...props} name="search" strokeWidth={2} />
      <Icon {...props} name="search" strokeWidth={3} />
      <Icon {...props} name="search" strokeWidth={4} />
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <Icon {...props} name={'unknown-icon-name' as IconName} />
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    name: {
      table: {
        disable: true
      }
    },
    ariaLabel: {
      table: {
        disable: true
      }
    }
  },
  args: {
    size: 24,
    color: 'currentColor',
    strokeWidth: 2,
    name: 'search'
  },
  render: function Render({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2
  }) {
    const [search, setSearch] = useState('');
    const filtered = useMemo(() => sortedIconNames.filter(name => name.includes(search.toLowerCase())), [search]);
    return <div style={{
      padding: '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
        <div style={{
        marginBottom: '24px'
      }}>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Filter icons by name..." style={{
          width: '100%',
          padding: '10px 16px',
          fontSize: '16px',
          border: '1px solid #d0d5dd',
          borderRadius: '8px',
          outline: 'none',
          boxSizing: 'border-box'
        }} />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#667085'
        }}>
            {filtered.length} / {sortedIconNames.length} icons
          </p>
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '8px'
      }}>
          {filtered.map(name => <div key={name} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 8px',
          borderRadius: '8px',
          border: '1px solid #eaeaea'
        }}>
              <DynamicIcon name={name} size={size} color={color} strokeWidth={strokeWidth} />
              <span style={{
            fontSize: '11px',
            textAlign: 'center',
            wordBreak: 'break-all',
            color: '#667085'
          }}>
                {name}
              </span>
            </div>)}
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const W=["Default","Sizes","Colors","Popular","StrokeWidths","Fallback","Gallery"];export{n as Colors,o as Default,l as Fallback,p as Gallery,c as Popular,t as Sizes,i as StrokeWidths,W as __namedExportsOrder,S as default};
