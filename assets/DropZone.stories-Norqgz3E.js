import{N as n,H as o}from"./iframe-n4ZyvbqO.js";import{c as b}from"./clsx-B-dksMZM.js";import{I as w}from"./Icon-BVU08tC6.js";import"./preload-helper-PPVm8Dsz.js";const j="DropZone",k="_root_p2dbb_2",N="_dragOver_p2dbb_25",Z="_hiddenInput_p2dbb_31",g={root:k,dragOver:N,hiddenInput:Z},t=e=>{const{accept:l,children:f,onFileSelect:s}=e,[m,h]=n.useState(!1),i=n.useRef(null),D=n.useCallback(r=>{r.preventDefault(),r.stopPropagation(),h(!0)},[]),v=n.useCallback(r=>{r.preventDefault(),r.stopPropagation(),h(!1)},[]),x=n.useCallback(r=>{r.preventDefault(),r.stopPropagation(),h(!1);const a=r.dataTransfer.files[0];a&&s(a)},[s]),S=n.useCallback(()=>{i.current?.click()},[]),F=n.useCallback(r=>{const a=r.target.files?.[0];a&&(s(a),i.current&&(i.current.value=""))},[s]),y=b(g.root,{[g.dragOver]:m});return o.jsxs("div",{className:y,"data-testid":"drop-zone",onClick:S,onDragLeave:v,onDragOver:D,onDrop:x,role:"button",tabIndex:0,children:[f,o.jsx("input",{accept:l,className:g.hiddenInput,onChange:F,ref:i,type:"file"})]})};t.displayName=j;t.__docgenInfo={description:`DropZone component. Renders a drag-and-drop area for file uploads.
Supports both drag-and-drop and click-to-browse via hidden file input.

@example
\`\`\`tsx
<DropZone accept=".json" onFileSelect={handleFile}>
  Drop JSON file here or click to browse
</DropZone>
\`\`\``,methods:[],displayName:"DropZone",props:{accept:{required:!1,tsType:{name:"string"},description:'Accepted file types (e.g. ".json,application/json").'},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content rendered inside the drop zone."},onFileSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:"Called when a file is selected via drop or click."}}};const z={argTypes:{accept:{control:"text",description:'Accepted file types (e.g. ".json,application/json")'}},component:t,parameters:{layout:"centered"},tags:["autodocs"],title:"@lazar-ui／kit/Components/DropZone"},c={args:{onFileSelect:e=>{console.log("Selected file:",e.name,e.size,"bytes")}},render:e=>o.jsx("div",{style:{width:"400px"},children:o.jsx(t,{...e,children:"Drop a file here or click to browse"})})},p={args:{accept:".json,application/json",onFileSelect:e=>{console.log("Selected JSON:",e.name)}},render:e=>o.jsx("div",{style:{width:"400px"},children:o.jsx(t,{...e,children:"Drop JSON file here or click to browse"})})},d={args:{onFileSelect:e=>{console.log("Selected file:",e.name)}},render:e=>o.jsx("div",{style:{width:"400px"},children:o.jsxs(t,{...e,children:[o.jsx(w,{name:"upload",size:24}),"Drop files here or click to browse"]})})},u={render:()=>{const e=()=>{const[l,f]=n.useState(null),s=m=>{f(m.name)};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"400px"},children:[o.jsx(t,{accept:".json,.csv",onFileSelect:s,children:l??"Drop a file here or click to browse"}),l&&o.jsxs("span",{style:{color:"var(--lui-color-text-link)",fontSize:"var(--lui-font-size-sm)"},children:["Selected: ",l]})]})};return o.jsx(e,{})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  args: {
    onFileSelect: (file: File) => {
      console.log('Selected file:', file.name);
    }
  },
  render: props => <div style={{
    width: '400px'
  }}>
      <DropZone {...props}>
        <Icon name="upload" size={24} />
        Drop files here or click to browse
      </DropZone>
    </div>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const P=["Default","JsonAccept","WithUploadIcon","WithFilePreview"];export{c as Default,p as JsonAccept,u as WithFilePreview,d as WithUploadIcon,P as __namedExportsOrder,z as default};
