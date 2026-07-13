import{R as l,H as e}from"./iframe-Co-vi7Ap.js";import"./preload-helper-PPVm8Dsz.js";const u="ErrorBoundary",m="_root_n01v7_1",y="_title_n01v7_10",h="_description_n01v7_18",d={root:m,title:y,description:h};class o extends l.Component{static displayName=u;constructor(r){super(r),this.state={error:null,hasError:!1}}static getDerivedStateFromError(r){return{error:r,hasError:!0}}componentDidCatch(r,c){this.props.onError?.(r,c)}componentDidUpdate(r){this.props.resetKey!==void 0&&this.props.resetKey!==r.resetKey&&this.handleReset()}handleReset=()=>{this.setState({error:null,hasError:!1})};render(){if(!this.state.hasError)return this.props.children;const{fallback:r}=this.props,{error:c}=this.state;return r!==void 0&&this.state.error!==null?typeof r=="function"?r(this.state.error,this.handleReset):r:e.jsxs("div",{className:d.root,children:[e.jsx("h3",{className:d.title,children:"Something went wrong"}),e.jsx("p",{className:d.description,children:c?.message??"An unexpected error occurred."})]})}}o.__docgenInfo={description:`React Error Boundary component.

Catches JavaScript errors anywhere in its child component tree, logs those
errors, and displays a fallback UI instead of the crashed component tree.

@example
\`\`\`tsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
\`\`\`

@example
\`\`\`tsx
<ErrorBoundary
  fallback={(error, reset) => (
    <div>
      <p>Something went wrong: {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )}
  onError={(error) => console.error(error)}
>
  <MyComponent />
</ErrorBoundary>
\`\`\``,methods:[],displayName:"ErrorBoundary",props:{fallback:{required:!1,tsType:{name:"union",raw:"React.ReactNode | ((error: Error, reset: () => void) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:"Custom fallback element or render function `(error, reset) => ReactNode`."},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: React.ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ReactErrorInfo",raw:"React.ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"Called when an error is caught."},resetKey:{required:!1,tsType:{name:"unknown"},description:"Resets the error boundary when the value changes."}}};const{action:E}=__STORYBOOK_MODULE_ACTIONS__,i=()=>{throw new Error("Something went wrong")},x={title:"@lazar-ui／kit/Components/ErrorBoundary",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{fallback:{control:{type:"text"},table:{type:{summary:"ReactNode | ((error: Error, reset: () => void) => ReactNode)"}}},onError:{table:{type:{summary:"(error: Error, errorInfo: React.ErrorInfo) => void"}}},resetKey:{control:{type:"text"},table:{type:{summary:"unknown"}}}}},n={render:p=>e.jsx(o,{...p,children:e.jsx("div",{children:"Safe content"})})},t={render:()=>e.jsx(o,{children:e.jsx(i,{})})},a={render:()=>e.jsx(o,{fallback:e.jsx("div",{style:{padding:20,color:"red"},children:"Custom error UI"}),children:e.jsx(i,{})})},s={render:()=>e.jsx(o,{onError:E("error"),children:e.jsx(i,{})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <ErrorBoundary {...props}>
      <div>Safe content</div>
    </ErrorBoundary>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorBoundary fallback={<div style={{
    padding: 20,
    color: 'red'
  }}>Custom error UI</div>}>
      <BuggyComponent />
    </ErrorBoundary>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorBoundary onError={action('error')}>
      <BuggyComponent />
    </ErrorBoundary>
}`,...s.parameters?.docs?.source}}};const R=["Default","WithError","CustomFallback","WithOnError"];export{a as CustomFallback,n as Default,t as WithError,s as WithOnError,R as __namedExportsOrder,x as default};
