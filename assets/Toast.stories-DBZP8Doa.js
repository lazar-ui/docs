import{N as i,H as t}from"./iframe-16V6KrfE.js";import{B as y}from"./Button-L2Grj_6q.js";import{F as C}from"./Flex-nL33HjWP.js";import{c as E}from"./clsx-B-dksMZM.js";import{A as I}from"./Alert-C_NRIpc8.js";import{T as O}from"./Text-DQIWF-dl.js";import{g as W}from"./getVariantClassName-BE0gBw9M.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-doosmcXP.js";import"./camelCase-Ct2evvX9.js";const N=4e3,w="bottomRight",P="Toast",F=36,$=11,q=2,V={error:"danger",info:"info",success:"success"},z="_root_1eefh_8",H="_positionBottomLeft_1eefh_17",U="_positionBottomRight_1eefh_22",G="_positionTopLeft_1eefh_27",X="_positionTopRight_1eefh_32",M={root:z,positionBottomLeft:H,positionBottomRight:U,positionTopLeft:G,positionTopRight:X},_=i.createContext(null),A=({toast:s,onDismiss:o})=>{const n=V[s.type],e=i.useCallback(()=>{o(s.id)},[o,s.id]);return t.jsx(I,{variant:n,children:t.jsxs(C,{align:"center",gap:3,children:[t.jsx(O,{as:"span",color:"primary",size:"sm",children:s.message}),t.jsx(y,{"aria-label":"Dismiss",icon:"x",mode:"text",size:"sm",variant:"secondary",onClick:e})]})})};A.displayName=`${P}.Item`;const a=s=>{const{autoDismissMs:o=N,children:n,maxToasts:e,position:p=w}=s,[B,b]=i.useState([]),d=i.useRef(new Map),D=i.useCallback(r=>{const c=d.current.get(r);c&&(clearTimeout(c),d.current.delete(r)),b(l=>l.filter(u=>u.id!==r))},[]),S=i.useCallback((r,c)=>{const l=Math.random().toString(F).slice(q,$);if(b(u=>{const x=[...u,{id:l,message:r,type:c}];if(e!=null&&x.length>e){const k=x.slice(0,x.length-e);for(const j of k){const R=d.current.get(j.id);R&&(clearTimeout(R),d.current.delete(j.id))}return x.slice(-e)}return x}),o>0){const u=setTimeout(()=>{D(l)},o);d.current.set(l,u)}},[o,e,D]);i.useEffect(()=>{const r=d.current;return()=>{r.forEach(c=>clearTimeout(c)),r.clear()}},[]);const L=E(M.root,W("position",p,M));return t.jsxs(_.Provider,{value:{addToast:S},children:[n,t.jsx("div",{className:L,children:B.map(r=>t.jsx(A,{onDismiss:D,toast:r},r.id))})]})};a.displayName=P;function Y(){const s=i.useContext(_);if(!s)throw new Error("useToast must be used within a ToastProvider");const{addToast:o}=s;return{toast:i.useMemo(()=>({error:e=>o(e,"error"),info:e=>o(e,"info"),success:e=>o(e,"success")}),[o])}}a.__docgenInfo={description:`ToastProvider — context provider and fixed-position container for toast notifications.

Wraps the application and renders a container that displays toast messages
triggered via the \`useToast\` hook. Supports configurable position, auto-dismiss
timeout, and maximum number of visible toasts.

@example
\`\`\`tsx
<ToastProvider position="bottomRight" autoDismissMs={4000}>
  <App />
</ToastProvider>
\`\`\`

@example
\`\`\`tsx
// Disable auto-dismiss and limit to 3 toasts
<ToastProvider autoDismissMs={0} maxToasts={3}>
  <App />
</ToastProvider>
\`\`\``,methods:[],displayName:"Toast",props:{autoDismissMs:{required:!1,tsType:{name:"number"},description:"Auto-dismiss timeout in milliseconds. Set to 0 to disable. Default: 4000."},maxToasts:{required:!1,tsType:{name:"number"},description:"Maximum number of visible toasts. Oldest are removed first."},position:{required:!1,tsType:{name:"literal",value:"`${EToastPosition.BOTTOM_LEFT | EToastPosition.BOTTOM_RIGHT | EToastPosition.TOP_LEFT | EToastPosition.TOP_RIGHT}`"},description:"Position of the toast container on the screen. Default: 'bottomRight'."}}};const m=()=>{const{toast:s}=Y();let o=0;const n=i.useCallback(()=>{s.success(`Operation completed successfully (${o+=1}).`)},[s]),e=i.useCallback(()=>{s.error(`Something went wrong (${o+=1}).`)},[s]),p=i.useCallback(()=>{s.info(`Processing your request (${o+=1}).`)},[s]);return t.jsxs(C,{direction:"column",gap:3,style:{margin:"0 auto",padding:"40px 0",width:"200px"},children:[t.jsx(y,{onClick:n,variant:"primary",children:"Success"}),t.jsx(y,{onClick:e,variant:"danger",children:"Error"}),t.jsx(y,{onClick:p,variant:"secondary",children:"Info"})]})};m.displayName="ToastDemo";const rt={argTypes:{autoDismissMs:{control:{type:"number"},table:{defaultValue:{summary:"4000"},type:{summary:"number"}}},maxToasts:{control:{type:"number"},table:{type:{summary:"number | undefined"}}},position:{control:{type:"select"},options:["bottomLeft","bottomRight","topLeft","topRight"],table:{defaultValue:{summary:"bottomRight"},type:{summary:"'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'"}}}},args:{autoDismissMs:4e3,position:"bottomRight"},component:a,parameters:{layout:"fullscreen"},tags:["autodocs"],title:"@lazar-ui／kit/Components/Toast"},f={render:function(o){const{autoDismissMs:n,maxToasts:e,position:p}=o;return t.jsx(a,{autoDismissMs:n,maxToasts:e,position:p,children:t.jsx(m,{})})}},g={render:function(){const o=["bottomRight","bottomLeft","topRight","topLeft"];return t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",padding:"48px"},children:o.map(n=>t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("p",{style:{marginBottom:"8px",fontWeight:600},children:n}),t.jsx(a,{position:n,children:t.jsx(m,{})})]},n))})}},T={render:function(){return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"8px",fontWeight:600},children:"Auto-dismiss: 2000ms"}),t.jsx(a,{autoDismissMs:2e3,children:t.jsx(m,{})})]}),t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"8px",fontWeight:600},children:"Auto-dismiss: 6000ms"}),t.jsx(a,{autoDismissMs:6e3,children:t.jsx(m,{})})]}),t.jsxs("div",{children:[t.jsx("p",{style:{marginBottom:"8px",fontWeight:600},children:"Auto-dismiss: 0 (manual dismiss only)"}),t.jsx(a,{autoDismissMs:0,children:t.jsx(m,{})})]})]})}},h={render:function(){return t.jsxs("div",{style:{padding:"24px"},children:[t.jsx("p",{style:{marginBottom:"8px",fontWeight:600},children:"Max 2 visible toasts (oldest removed first)."}),t.jsx(a,{autoDismissMs:0,maxToasts:2,children:t.jsx(m,{})})]})}},v={render:function(){return t.jsxs("div",{style:{padding:"24px"},children:[t.jsx("p",{style:{marginBottom:"8px",fontWeight:600},children:"Click buttons rapidly to see stacking behavior."}),t.jsx(a,{autoDismissMs:5e3,children:t.jsx(m,{})})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const {
      autoDismissMs,
      maxToasts,
      position
    } = props;
    return <ToastProvider autoDismissMs={autoDismissMs} maxToasts={maxToasts} position={position}>
        <DemoContent />
      </ToastProvider>;
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const positions = ['bottomRight', 'bottomLeft', 'topRight', 'topLeft'] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
      padding: '48px'
    }}>
        {positions.map(pos => <div key={pos} style={{
        textAlign: 'center'
      }}>
            <p style={{
          marginBottom: '8px',
          fontWeight: 600
        }}>{pos}</p>
            <ToastProvider position={pos}>
              <DemoContent />
            </ToastProvider>
          </div>)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '24px'
    }}>
        <div>
          <p style={{
          marginBottom: '8px',
          fontWeight: 600
        }}>Auto-dismiss: 2000ms</p>
          <ToastProvider autoDismissMs={2000}>
            <DemoContent />
          </ToastProvider>
        </div>
        <div>
          <p style={{
          marginBottom: '8px',
          fontWeight: 600
        }}>Auto-dismiss: 6000ms</p>
          <ToastProvider autoDismissMs={6000}>
            <DemoContent />
          </ToastProvider>
        </div>
        <div>
          <p style={{
          marginBottom: '8px',
          fontWeight: 600
        }}>Auto-dismiss: 0 (manual dismiss only)</p>
          <ToastProvider autoDismissMs={0}>
            <DemoContent />
          </ToastProvider>
        </div>
      </div>;
  }
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      padding: '24px'
    }}>
        <p style={{
        marginBottom: '8px',
        fontWeight: 600
      }}>Max 2 visible toasts (oldest removed first).</p>
        <ToastProvider autoDismissMs={0} maxToasts={2}>
          <DemoContent />
        </ToastProvider>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      padding: '24px'
    }}>
        <p style={{
        marginBottom: '8px',
        fontWeight: 600
      }}>Click buttons rapidly to see stacking behavior.</p>
        <ToastProvider autoDismissMs={5000}>
          <DemoContent />
        </ToastProvider>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const at=["Default","Positions","CustomAutoDismiss","MaxToasts","MultipleToasts"];export{T as CustomAutoDismiss,f as Default,h as MaxToasts,v as MultipleToasts,g as Positions,at as __namedExportsOrder,rt as default};
