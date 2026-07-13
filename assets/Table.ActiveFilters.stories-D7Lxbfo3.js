import{H as e,N as f}from"./iframe-DsJxp_Iw.js";import{T as s}from"./index-C0TKiMpJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DigxQWeL.js";import"./clsx-B-dksMZM.js";import"./Icon-MaUcwxbK.js";import"./getVariantClassName-DbP7vlfM.js";import"./camelCase-DG4N1IdV.js";import"./Chip-C28tsESu.js";import"./useLocale-K8JOSDN8.js";import"./isValidReactNode-B0Cpt7t5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,T={title:"@lazar-ui／kit/Components/Table.ActiveFilters",component:s.ActiveFilters,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{filters:{control:{type:"object"},table:{type:{summary:"IFilterItem[]"}}},onClearAll:{action:"onClearAll",table:{type:{summary:"() => void"}}},onRemove:{action:"onRemove",table:{type:{summary:"(key: string) => void"}}}},args:{onRemove:p(),onClearAll:p()}},r={args:{filters:[{key:"status",label:"Status",value:"Active"},{key:"role",label:"Role",value:"Admin"}]}},t={args:{filters:[]},render:o=>e.jsxs("div",{style:{alignItems:"center",border:"1px dashed var(--lui-color-border-subtle, #d0d5dd)",borderRadius:"6px",display:"flex",gap:"12px",padding:"16px"},children:[e.jsx(s.ActiveFilters,{...o}),e.jsx("span",{style:{color:"var(--lui-color-text-tertiary, #98a2b3)",fontSize:"14px"},children:"No active filters — component returns null"})]})},l={args:{filters:[{key:"status",label:"Status",value:"Active"},{key:"role",label:"Role",value:"Admin"},{key:"department",label:"Dept",value:"Engineering"}],onClearAll:void 0}},n={render:function(a){const[i,d]=f.useState(a.filters),u=c=>{d(v=>v.filter(y=>y.key!==c)),a.onRemove(c)},m=()=>{d([]),a.onClearAll?.()};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s.ActiveFilters,{filters:i,onRemove:u,onClearAll:m}),e.jsxs("div",{style:{fontSize:"14px",color:"var(--lui-color-text-secondary)"},children:["Active filters: ",i.length]})]})},args:{filters:[{key:"status",label:"Status",value:"Active"},{key:"role",label:"Role",value:"Admin"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    filters: [{
      key: 'status',
      label: 'Status',
      value: 'Active'
    }, {
      key: 'role',
      label: 'Role',
      value: 'Admin'
    }]
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    filters: []
  },
  render: args => <div style={{
    alignItems: 'center',
    border: '1px dashed var(--lui-color-border-subtle, #d0d5dd)',
    borderRadius: '6px',
    display: 'flex',
    gap: '12px',
    padding: '16px'
  }}>
      <Table.ActiveFilters {...args} />
      <span style={{
      color: 'var(--lui-color-text-tertiary, #98a2b3)',
      fontSize: '14px'
    }}>
        No active filters — component returns null
      </span>
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    filters: [{
      key: 'status',
      label: 'Status',
      value: 'Active'
    }, {
      key: 'role',
      label: 'Role',
      value: 'Admin'
    }, {
      key: 'department',
      label: 'Dept',
      value: 'Engineering'
    }],
    onClearAll: undefined
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(args.filters);
    const handleRemove = (key: string) => {
      setFilters(prev => prev.filter(filter => filter.key !== key));
      args.onRemove(key);
    };
    const handleClearAll = () => {
      setFilters([]);
      args.onClearAll?.();
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Table.ActiveFilters filters={filters} onRemove={handleRemove} onClearAll={handleClearAll} />
        <div style={{
        fontSize: '14px',
        color: 'var(--lui-color-text-secondary)'
      }}>
          Active filters: {filters.length}
        </div>
      </div>;
  },
  args: {
    filters: [{
      key: 'status',
      label: 'Status',
      value: 'Active'
    }, {
      key: 'role',
      label: 'Role',
      value: 'Admin'
    }]
  }
}`,...n.parameters?.docs?.source}}};const j=["Default","Empty","WithoutClearAll","Playground"];export{r as Default,t as Empty,n as Playground,l as WithoutClearAll,j as __namedExportsOrder,T as default};
