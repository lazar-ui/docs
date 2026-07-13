import{N as r,H as n}from"./iframe-DsJxp_Iw.js";import{c as y}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";const b="DropZone",j="_root_p2dbb_2",w="_dragOver_p2dbb_25",N="_hiddenInput_p2dbb_31",h={root:j,dragOver:w,hiddenInput:N},s=e=>{const{accept:l,children:u,onFileSelect:t}=e,[f,m]=r.useState(!1),i=r.useRef(null),g=r.useCallback(o=>{o.preventDefault(),o.stopPropagation(),m(!0)},[]),v=r.useCallback(o=>{o.preventDefault(),o.stopPropagation(),m(!1)},[]),D=r.useCallback(o=>{o.preventDefault(),o.stopPropagation(),m(!1);const a=o.dataTransfer.files[0];a&&t(a)},[t]),x=r.useCallback(()=>{i.current?.click()},[]),S=r.useCallback(o=>{const a=o.target.files?.[0];a&&(t(a),i.current&&(i.current.value=""))},[t]),F=y(h.root,{[h.dragOver]:f});return n.jsxs("div",{className:F,"data-testid":"drop-zone",onClick:x,onDragLeave:v,onDragOver:g,onDrop:D,role:"button",tabIndex:0,children:[u,n.jsx("input",{accept:l,className:h.hiddenInput,onChange:S,ref:i,type:"file"})]})};s.displayName=b;s.__docgenInfo={description:`DropZone component. Renders a drag-and-drop area for file uploads.
Supports both drag-and-drop and click-to-browse via hidden file input.

@example
\`\`\`tsx
<DropZone accept=".json" onFileSelect={handleFile}>
  Drop JSON file here or click to browse
</DropZone>
\`\`\``,methods:[],displayName:"DropZone",props:{accept:{required:!1,tsType:{name:"string"},description:'Accepted file types (e.g. ".json,application/json").'},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content rendered inside the drop zone."},onFileSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:"Called when a file is selected via drop or click."}}};const _={argTypes:{accept:{control:"text",description:'Accepted file types (e.g. ".json,application/json")'}},component:s,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/DropZone"},c={args:{onFileSelect:e=>{console.log("Selected file:",e.name,e.size,"bytes")}},render:e=>n.jsx("div",{style:{width:"400px"},children:n.jsx(s,{...e,children:"Drop a file here or click to browse"})})},p={args:{accept:".json,application/json",onFileSelect:e=>{console.log("Selected JSON:",e.name)}},render:e=>n.jsx("div",{style:{width:"400px"},children:n.jsx(s,{...e,children:"Drop JSON file here or click to browse"})})},d={render:()=>{const e=()=>{const[l,u]=r.useState(null),t=f=>{u(f.name)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"400px"},children:[n.jsx(s,{accept:".json,.csv",onFileSelect:t,children:l??"Drop a file here or click to browse"}),l&&n.jsxs("span",{style:{color:"var(--lui-color-text-link)",fontSize:"var(--lui-font-size-sm)"},children:["Selected: ",l]})]})};return n.jsx(e,{})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onFileSelect: (file: File) => {
      console.log('Selected file:', file.name, file.size, 'bytes');
    }
  },
  render: props => <div style={{
    width: '400px'
  }}>
      <DropZone {...props}>Drop a file here or click to browse</DropZone>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    accept: '.json,application/json',
    onFileSelect: (file: File) => {
      console.log('Selected JSON:', file.name);
    }
  },
  render: props => <div style={{
    width: '400px'
  }}>
      <DropZone {...props}>Drop JSON file here or click to browse</DropZone>
    </div>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const FilePreviewDropZone = () => {
      const [fileName, setFileName] = useState<string | null>(null);
      const handleFileSelect = (file: File) => {
        setFileName(file.name);
      };
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '400px'
      }}>
          <DropZone accept=".json,.csv" onFileSelect={handleFileSelect}>
            {fileName ?? 'Drop a file here or click to browse'}
          </DropZone>
          {fileName && <span style={{
          color: 'var(--lui-color-text-link)',
          fontSize: 'var(--lui-font-size-sm)'
        }}>
              Selected: {fileName}
            </span>}
        </div>;
    };
    return <FilePreviewDropZone />;
  }
}`,...d.parameters?.docs?.source}}};const C=["Default","JsonAccept","WithFilePreview"];export{c as Default,p as JsonAccept,d as WithFilePreview,C as __namedExportsOrder,_ as default};
