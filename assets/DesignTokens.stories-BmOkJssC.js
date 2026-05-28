import{H as e,N as c}from"./iframe-DSZZJwFM.js";import"./preload-helper-PPVm8Dsz.js";const p=[{name:"--palette-brand",category:"Brand"},{name:"--palette-brand-hover",category:"Brand"},{name:"--palette-brand-secondary",category:"Brand"},{name:"--palette-gray-25",category:"Gray"},{name:"--palette-gray-50",category:"Gray"},{name:"--palette-gray-100",category:"Gray"},{name:"--palette-gray-200",category:"Gray"},{name:"--palette-gray-300",category:"Gray"},{name:"--palette-gray-400",category:"Gray"},{name:"--palette-gray-500",category:"Gray"},{name:"--palette-gray-600",category:"Gray"},{name:"--palette-gray-700",category:"Gray"},{name:"--palette-gray-800",category:"Gray"},{name:"--palette-gray-900",category:"Gray"},{name:"--palette-red-500",category:"Red"},{name:"--palette-red-600",category:"Red"},{name:"--palette-orange-500",category:"Orange"},{name:"--palette-orange-600",category:"Orange"},{name:"--palette-green-500",category:"Green"},{name:"--palette-green-600",category:"Green"},{name:"--palette-blue-500",category:"Blue"},{name:"--palette-blue-600",category:"Blue"},{name:"--palette-white",category:"Base"},{name:"--palette-black",category:"Base"},{name:"--palette-overlay",category:"Base"}],h=[{name:"--color-background-brand",mapsTo:"--palette-brand",category:"Background"},{name:"--color-background-brand-hover",mapsTo:"--palette-brand-hover",category:"Background"},{name:"--color-background-brand-secondary",mapsTo:"--palette-brand-secondary",category:"Background"},{name:"--color-background-primary",mapsTo:"--palette-white",category:"Background"},{name:"--color-background-secondary",mapsTo:"--palette-gray-50",category:"Background"},{name:"--color-background-tertiary",mapsTo:"--palette-gray-100",category:"Background"},{name:"--color-background-disabled",mapsTo:"--palette-gray-100",category:"Background"},{name:"--color-background-error",mapsTo:"--palette-red-500",category:"Background"},{name:"--color-background-error-hover",mapsTo:"--palette-red-600",category:"Background"},{name:"--color-background-overlay",mapsTo:"--palette-overlay",category:"Background"},{name:"--color-text-primary",mapsTo:"--palette-gray-900",category:"Text"},{name:"--color-text-secondary",mapsTo:"--palette-gray-600",category:"Text"},{name:"--color-text-tertiary",mapsTo:"--palette-gray-500",category:"Text"},{name:"--color-text-quaternary",mapsTo:"--palette-gray-300",category:"Text"},{name:"--color-text-disabled",mapsTo:"--palette-gray-300",category:"Text"},{name:"--color-text-on-brand",mapsTo:"--palette-white",category:"Text"},{name:"--color-text-on-dark",mapsTo:"--palette-white",category:"Text"},{name:"--color-text-link",mapsTo:"--palette-blue-500",category:"Text"},{name:"--color-text-link-hover",mapsTo:"--palette-blue-600",category:"Text"},{name:"--color-text-error",mapsTo:"--palette-red-500",category:"Text"},{name:"--color-text-error-hover",mapsTo:"--palette-red-600",category:"Text"},{name:"--color-text-success",mapsTo:"--palette-green-600",category:"Text"},{name:"--color-text-success-hover",mapsTo:"--palette-green-600",category:"Text"},{name:"--color-text-warning",mapsTo:"--palette-orange-500",category:"Text"},{name:"--color-text-warning-hover",mapsTo:"--palette-orange-600",category:"Text"},{name:"--color-border-primary",mapsTo:"--palette-gray-200",category:"Border"},{name:"--color-border-secondary",mapsTo:"--palette-gray-100",category:"Border"},{name:"--color-border-disabled",mapsTo:"--palette-gray-200",category:"Border"},{name:"--color-border-disabled-subtle",mapsTo:"--palette-gray-200",category:"Border"},{name:"--color-border-focus",mapsTo:"--palette-brand",category:"Border"},{name:"--color-border-focus-error",mapsTo:"--palette-red-500",category:"Border"}],x=[{name:"--space-1",category:"Space"},{name:"--space-2",category:"Space"},{name:"--space-3",category:"Space"},{name:"--space-4",category:"Space"},{name:"--space-5",category:"Space"},{name:"--space-6",category:"Space"},{name:"--space-7",category:"Space"},{name:"--space-8",category:"Space"},{name:"--space-10",category:"Space"},{name:"--space-12",category:"Space"},{name:"--space-14",category:"Space"},{name:"--space-16",category:"Space"},{name:"--radius-1",category:"Radius"},{name:"--radius-2",category:"Radius"},{name:"--radius-3",category:"Radius"},{name:"--radius-4",category:"Radius"},{name:"--radius-full",category:"Radius"},{name:"--font-family-body",category:"Font"},{name:"--font-size-xs",category:"Font"},{name:"--font-size-sm",category:"Font"},{name:"--font-size-md",category:"Font"},{name:"--font-size-lg",category:"Font"},{name:"--font-size-xl",category:"Font"},{name:"--font-size-2xl",category:"Font"},{name:"--font-weight-normal",category:"Font"},{name:"--font-weight-medium",category:"Font"},{name:"--font-weight-semibold",category:"Font"},{name:"--font-weight-bold",category:"Font"},{name:"--line-height-xs",category:"Font"},{name:"--line-height-sm",category:"Font"},{name:"--line-height-md",category:"Font"},{name:"--line-height-lg",category:"Font"},{name:"--line-height-xl",category:"Font"},{name:"--line-height-2xl",category:"Font"},{name:"--shadow-xs",category:"Shadow"},{name:"--shadow-sm",category:"Shadow"},{name:"--shadow-md",category:"Shadow"},{name:"--shadow-lg",category:"Shadow"}],d=({token:a})=>e.jsx("div",{style:{background:`var(${a})`,border:"1px solid var(--color-border-primary)",borderRadius:"var(--radius-1)",height:24,width:24}}),y=({token:a})=>{const t=c.useRef(null),[g,m]=c.useState("");return c.useEffect(()=>{if(t.current){const i=getComputedStyle(t.current).getPropertyValue(a).trim();m(i)}},[]),e.jsx("span",{ref:t,style:{fontFamily:"monospace",fontSize:13},children:g||"—"})},l={borderCollapse:"collapse",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:14,width:"100%"},o={borderBottom:"2px solid var(--color-border-primary)",fontWeight:600,padding:"8px 12px",textAlign:"left"},n={borderBottom:"1px solid var(--color-border-secondary)",padding:"8px 12px",verticalAlign:"middle"},r={fontFamily:"monospace",fontSize:13},T=["Brand","Gray","Red","Orange","Green","Blue","Base"],f={title:"Kit/Design Tokens",parameters:{layout:"fullscreen"}},s={render:()=>e.jsxs("div",{style:{maxWidth:960,margin:"0 auto",padding:24},children:[e.jsx("h1",{style:{fontSize:24,fontWeight:700,margin:"0 0 8px"},children:"Design Tokens"}),e.jsxs("p",{style:{color:"var(--color-text-secondary)",fontSize:14,marginBottom:32},children:["All CSS custom properties — palette colors, semantic tokens, spacing, typography, and shadows. Toggle ",e.jsx("strong",{children:"light"})," / ",e.jsx("strong",{children:"dark"})," / ",e.jsx("strong",{children:"contrast"})," in the toolbar to see theme changes."]}),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"0 0 16px"},children:"Palette Colors"}),T.map(a=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--color-text-secondary)"},children:a}),e.jsxs("table",{style:l,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:{...o,width:40},children:"Swatch"}),e.jsx("th",{style:o,children:"Value"})]})}),e.jsx("tbody",{children:p.filter(t=>t.category===a).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:e.jsx("code",{style:r,children:t.name})}),e.jsx("td",{style:n,children:e.jsx(d,{token:t.name})}),e.jsx("td",{style:n,children:e.jsx(y,{token:t.name})})]},t.name))})]})]},a)),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"32px 0 16px"},children:"Semantic Tokens"}),e.jsx("p",{style:{color:"var(--color-text-secondary)",fontSize:14,marginBottom:16},children:"Maps semantic color tokens to palette tokens."}),["Background","Text","Border"].map(a=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--color-text-secondary)"},children:a}),e.jsxs("table",{style:l,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:{...o,width:40},children:"Swatch"}),e.jsx("th",{style:o,children:"Maps to"})]})}),e.jsx("tbody",{children:h.filter(t=>t.category===a).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:e.jsx("code",{style:r,children:t.name})}),e.jsx("td",{style:n,children:e.jsx(d,{token:t.name})}),e.jsx("td",{style:n,children:e.jsx("code",{style:r,children:t.mapsTo})})]},t.name))})]})]},a)),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"32px 0 16px"},children:"Spacing, Typography & Shadows"}),["Space","Radius","Font","Shadow"].map(a=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--color-text-secondary)"},children:a}),e.jsxs("table",{style:l,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:o,children:"Value"})]})}),e.jsx("tbody",{children:x.filter(t=>t.category===a).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:e.jsx("code",{style:r,children:t.name})}),e.jsx("td",{style:n,children:e.jsx(y,{token:t.name})})]},t.name))})]})]},a))]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 960,
    margin: '0 auto',
    padding: 24
  }}>
      <h1 style={{
      fontSize: 24,
      fontWeight: 700,
      margin: '0 0 8px'
    }}>Design Tokens</h1>
      <p style={{
      color: 'var(--color-text-secondary)',
      fontSize: 14,
      marginBottom: 32
    }}>
        All CSS custom properties — palette colors, semantic tokens, spacing, typography, and shadows.
        Toggle <strong>light</strong> / <strong>dark</strong> / <strong>contrast</strong> in the toolbar to see theme changes.
      </p>

      {/* Palette Colors */}
      <h2 style={{
      fontSize: 20,
      fontWeight: 600,
      margin: '0 0 16px'
    }}>Palette Colors</h2>
      {paletteCategories.map(category => <div key={category} style={{
      marginBottom: 24
    }}>
          <h3 style={{
        fontSize: 16,
        fontWeight: 600,
        margin: '0 0 8px',
        color: 'var(--color-text-secondary)'
      }}>
            {category}
          </h3>
          <table style={TABLE_STYLE}>
            <thead>
              <tr>
                <th style={TH_STYLE}>Token</th>
                <th style={{
              ...TH_STYLE,
              width: 40
            }}>Swatch</th>
                <th style={TH_STYLE}>Value</th>
              </tr>
            </thead>
            <tbody>
              {PALETTE_TOKENS.filter(t => t.category === category).map(token => <tr key={token.name}>
                  <td style={TD_STYLE}><code style={CODE_STYLE}>{token.name}</code></td>
                  <td style={TD_STYLE}><Swatch token={token.name} /></td>
                  <td style={TD_STYLE}><TokenValue token={token.name} /></td>
                </tr>)}
            </tbody>
          </table>
        </div>)}

      {/* Semantic Tokens */}
      <h2 style={{
      fontSize: 20,
      fontWeight: 600,
      margin: '32px 0 16px'
    }}>Semantic Tokens</h2>
      <p style={{
      color: 'var(--color-text-secondary)',
      fontSize: 14,
      marginBottom: 16
    }}>
        Maps semantic color tokens to palette tokens.
      </p>
      {['Background', 'Text', 'Border'].map(category => <div key={category} style={{
      marginBottom: 24
    }}>
          <h3 style={{
        fontSize: 16,
        fontWeight: 600,
        margin: '0 0 8px',
        color: 'var(--color-text-secondary)'
      }}>
            {category}
          </h3>
          <table style={TABLE_STYLE}>
            <thead>
              <tr>
                <th style={TH_STYLE}>Token</th>
                <th style={{
              ...TH_STYLE,
              width: 40
            }}>Swatch</th>
                <th style={TH_STYLE}>Maps to</th>
              </tr>
            </thead>
            <tbody>
              {SEMANTIC_TOKENS.filter(t => t.category === category).map(token => <tr key={token.name}>
                  <td style={TD_STYLE}><code style={CODE_STYLE}>{token.name}</code></td>
                  <td style={TD_STYLE}><Swatch token={token.name} /></td>
                  <td style={TD_STYLE}><code style={CODE_STYLE}>{token.mapsTo}</code></td>
                </tr>)}
            </tbody>
          </table>
        </div>)}

      {/* Spacing, Typography, Shadows */}
      <h2 style={{
      fontSize: 20,
      fontWeight: 600,
      margin: '32px 0 16px'
    }}>Spacing, Typography &amp; Shadows</h2>
      {['Space', 'Radius', 'Font', 'Shadow'].map(category => <div key={category} style={{
      marginBottom: 24
    }}>
          <h3 style={{
        fontSize: 16,
        fontWeight: 600,
        margin: '0 0 8px',
        color: 'var(--color-text-secondary)'
      }}>
            {category}
          </h3>
          <table style={TABLE_STYLE}>
            <thead>
              <tr>
                <th style={TH_STYLE}>Token</th>
                <th style={TH_STYLE}>Value</th>
              </tr>
            </thead>
            <tbody>
              {VALUE_TOKENS.filter(t => t.category === category).map(token => <tr key={token.name}>
                  <td style={TD_STYLE}><code style={CODE_STYLE}>{token.name}</code></td>
                  <td style={TD_STYLE}><TokenValue token={token.name} /></td>
                </tr>)}
            </tbody>
          </table>
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}};const k=["Default"];export{s as Default,k as __namedExportsOrder,f as default};
