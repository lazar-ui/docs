import{H as l}from"./iframe-Co-vi7Ap.js";import{B as s}from"./Button-BVzT_l_6.js";import{I as i}from"./index-BQkOJtHw.js";import{S as c}from"./index-C_xb9w_T.js";import{T as e}from"./index-CGPQOv7Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CnuxmT2f.js";import"./getVariantClassName-CyGiRg96.js";import"./camelCase-uFo-OJf_.js";import"./useLocale-Dqgqwf-N.js";import"./index-DvrHzDjT.js";import"./Overlay-DOMshLjD.js";import"./index-ljyZh6HS.js";import"./index-DuXb5jj9.js";import"./useOverlayTriggerState-BzN05zmb.js";import"./useOverlayPosition-DI30znKe.js";import"./isValidReactNode-ccyhQD_M.js";import"./Chip-D9bFM3ah.js";const F={title:"@lazar-ui／kit/Components/Table",component:e,subcomponents:{"Table.Row":e.Row,"Table.Cell":e.Cell,"Table.Toolbar":e.Toolbar,"Table.ActiveFilters":e.ActiveFilters},parameters:{layout:"padded"},tags:["autodocs"]},a={render:()=>l.jsxs(e,{children:[l.jsxs(e.Row,{children:[l.jsx(e.Cell,{as:"th",children:"Name"}),l.jsx(e.Cell,{as:"th",children:"Title"}),l.jsx(e.Cell,{as:"th",children:"Status"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"John Doe"}),l.jsx(e.Cell,{children:"Frontend Developer"}),l.jsx(e.Cell,{children:"Active"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Jane Smith"}),l.jsx(e.Cell,{children:"Backend Developer"}),l.jsx(e.Cell,{children:"Active"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Bob Johnson"}),l.jsx(e.Cell,{children:"Designer"}),l.jsx(e.Cell,{children:"Inactive"})]})]})},r={render:()=>l.jsxs(e,{children:[l.jsxs(e.Toolbar,{children:[l.jsx(i,{placeholder:"Search..."}),l.jsx(c,{options:[{label:"All",value:"all"},{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],placeholder:"Filter by status"}),l.jsx(s,{children:"Export"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{as:"th",children:"Name"}),l.jsx(e.Cell,{as:"th",children:"Email"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"John Doe"}),l.jsx(e.Cell,{children:"john@example.com"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Jane Smith"}),l.jsx(e.Cell,{children:"jane@example.com"})]})]})},o={render:()=>l.jsxs(e,{children:[l.jsx(e.ActiveFilters,{filters:[{key:"status",label:"Status",value:"Active"},{key:"role",label:"Role",value:"Admin"}],onRemove:t=>console.log("remove",t),onClearAll:()=>console.log("clear all")}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{as:"th",children:"Name"}),l.jsx(e.Cell,{as:"th",children:"Title"}),l.jsx(e.Cell,{as:"th",children:"Status"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"John Doe"}),l.jsx(e.Cell,{children:"Frontend Developer"}),l.jsx(e.Cell,{children:"Active"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Jane Smith"}),l.jsx(e.Cell,{children:"Backend Developer"}),l.jsx(e.Cell,{children:"Active"})]})]})},n={render:()=>l.jsxs(e,{children:[l.jsxs(e.Row,{children:[l.jsx(e.Cell,{as:"th",children:"Left"}),l.jsx(e.Cell,{as:"th",align:"center",children:"Center"}),l.jsx(e.Cell,{as:"th",align:"right",children:"Right"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Text"}),l.jsx(e.Cell,{align:"center",children:"Text"}),l.jsx(e.Cell,{align:"right",children:"Text"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Row>
        <Table.Cell as="th">Name</Table.Cell>
        <Table.Cell as="th">Title</Table.Cell>
        <Table.Cell as="th">Status</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>Frontend Developer</Table.Cell>
        <Table.Cell>Active</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jane Smith</Table.Cell>
        <Table.Cell>Backend Developer</Table.Cell>
        <Table.Cell>Active</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bob Johnson</Table.Cell>
        <Table.Cell>Designer</Table.Cell>
        <Table.Cell>Inactive</Table.Cell>
      </Table.Row>
    </Table>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Toolbar>
        <Input placeholder="Search..." />
        <Select options={[{
        label: 'All',
        value: 'all'
      }, {
        label: 'Active',
        value: 'active'
      }, {
        label: 'Inactive',
        value: 'inactive'
      }]} placeholder="Filter by status" />
        <Button>Export</Button>
      </Table.Toolbar>
      <Table.Row>
        <Table.Cell as="th">Name</Table.Cell>
        <Table.Cell as="th">Email</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>john@example.com</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jane Smith</Table.Cell>
        <Table.Cell>jane@example.com</Table.Cell>
      </Table.Row>
    </Table>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.ActiveFilters filters={[{
      key: 'status',
      label: 'Status',
      value: 'Active'
    }, {
      key: 'role',
      label: 'Role',
      value: 'Admin'
    }]} onRemove={key => console.log('remove', key)} onClearAll={() => console.log('clear all')} />
      <Table.Row>
        <Table.Cell as="th">Name</Table.Cell>
        <Table.Cell as="th">Title</Table.Cell>
        <Table.Cell as="th">Status</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>Frontend Developer</Table.Cell>
        <Table.Cell>Active</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jane Smith</Table.Cell>
        <Table.Cell>Backend Developer</Table.Cell>
        <Table.Cell>Active</Table.Cell>
      </Table.Row>
    </Table>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <Table.Row>
        <Table.Cell as="th">Left</Table.Cell>
        <Table.Cell as="th" align="center">
          Center
        </Table.Cell>
        <Table.Cell as="th" align="right">
          Right
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Text</Table.Cell>
        <Table.Cell align="center">Text</Table.Cell>
        <Table.Cell align="right">Text</Table.Cell>
      </Table.Row>
    </Table>
}`,...n.parameters?.docs?.source}}};const k=["Default","WithToolbar","WithActiveFilters","WithAlignment"];export{a as Default,o as WithActiveFilters,n as WithAlignment,r as WithToolbar,k as __namedExportsOrder,F as default};
