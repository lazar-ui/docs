import{H as e,N as i}from"./iframe-rByIh3n2.js";import"./preload-helper-PPVm8Dsz.js";const p=[{name:"--lui-palette-brand",category:"Brand"},{name:"--lui-palette-brand-hover",category:"Brand"},{name:"--lui-palette-brand-secondary",category:"Brand"},{name:"--lui-palette-gray-25",category:"Gray"},{name:"--lui-palette-gray-50",category:"Gray"},{name:"--lui-palette-gray-100",category:"Gray"},{name:"--lui-palette-gray-200",category:"Gray"},{name:"--lui-palette-gray-300",category:"Gray"},{name:"--lui-palette-gray-400",category:"Gray"},{name:"--lui-palette-gray-500",category:"Gray"},{name:"--lui-palette-gray-600",category:"Gray"},{name:"--lui-palette-gray-700",category:"Gray"},{name:"--lui-palette-gray-800",category:"Gray"},{name:"--lui-palette-gray-900",category:"Gray"},{name:"--lui-palette-red-500",category:"Red"},{name:"--lui-palette-red-600",category:"Red"},{name:"--lui-palette-orange-500",category:"Orange"},{name:"--lui-palette-orange-600",category:"Orange"},{name:"--lui-palette-green-500",category:"Green"},{name:"--lui-palette-green-600",category:"Green"},{name:"--lui-palette-blue-500",category:"Blue"},{name:"--lui-palette-blue-600",category:"Blue"},{name:"--lui-palette-white",category:"Base"},{name:"--lui-palette-black",category:"Base"},{name:"--lui-palette-overlay",category:"Base"}],u=[{name:"--lui-color-background-brand",mapsTo:"--lui-palette-brand",category:"Background"},{name:"--lui-color-background-brand-hover",mapsTo:"--lui-palette-brand-hover",category:"Background"},{name:"--lui-color-background-brand-secondary",mapsTo:"--lui-palette-brand-secondary",category:"Background"},{name:"--lui-color-background-primary",mapsTo:"--lui-palette-white",category:"Background"},{name:"--lui-color-background-secondary",mapsTo:"--lui-palette-gray-50",category:"Background"},{name:"--lui-color-background-tertiary",mapsTo:"--lui-palette-gray-100",category:"Background"},{name:"--lui-color-background-disabled",mapsTo:"--lui-palette-gray-100",category:"Background"},{name:"--lui-color-background-error",mapsTo:"--lui-palette-red-500",category:"Background"},{name:"--lui-color-background-error-hover",mapsTo:"--lui-palette-red-600",category:"Background"},{name:"--lui-color-background-overlay",mapsTo:"--lui-palette-overlay",category:"Background"},{name:"--lui-color-text-primary",mapsTo:"--lui-palette-gray-900",category:"Text"},{name:"--lui-color-text-secondary",mapsTo:"--lui-palette-gray-600",category:"Text"},{name:"--lui-color-text-tertiary",mapsTo:"--lui-palette-gray-500",category:"Text"},{name:"--lui-color-text-quaternary",mapsTo:"--lui-palette-gray-300",category:"Text"},{name:"--lui-color-text-disabled",mapsTo:"--lui-palette-gray-300",category:"Text"},{name:"--lui-color-text-on-brand",mapsTo:"--lui-palette-white",category:"Text"},{name:"--lui-color-text-on-dark",mapsTo:"--lui-palette-white",category:"Text"},{name:"--lui-color-text-link",mapsTo:"--lui-palette-blue-500",category:"Text"},{name:"--lui-color-text-link-hover",mapsTo:"--lui-palette-blue-600",category:"Text"},{name:"--lui-color-text-error",mapsTo:"--lui-palette-red-500",category:"Text"},{name:"--lui-color-text-error-hover",mapsTo:"--lui-palette-red-600",category:"Text"},{name:"--lui-color-text-success",mapsTo:"--lui-palette-green-600",category:"Text"},{name:"--lui-color-text-success-hover",mapsTo:"--lui-palette-green-600",category:"Text"},{name:"--lui-color-text-warning",mapsTo:"--lui-palette-orange-500",category:"Text"},{name:"--lui-color-text-warning-hover",mapsTo:"--lui-palette-orange-600",category:"Text"},{name:"--lui-color-border-primary",mapsTo:"--lui-palette-gray-200",category:"Border"},{name:"--lui-color-border-secondary",mapsTo:"--lui-palette-gray-100",category:"Border"},{name:"--lui-color-border-disabled",mapsTo:"--lui-palette-gray-200",category:"Border"},{name:"--lui-color-border-disabled-subtle",mapsTo:"--lui-palette-gray-200",category:"Border"},{name:"--lui-color-border-focus",mapsTo:"--lui-palette-brand",category:"Border"},{name:"--lui-color-border-focus-error",mapsTo:"--lui-palette-red-500",category:"Border"}],h=[{name:"--lui-space-1",category:"Space"},{name:"--lui-space-2",category:"Space"},{name:"--lui-space-3",category:"Space"},{name:"--lui-space-4",category:"Space"},{name:"--lui-space-5",category:"Space"},{name:"--lui-space-6",category:"Space"},{name:"--lui-space-7",category:"Space"},{name:"--lui-space-8",category:"Space"},{name:"--lui-space-10",category:"Space"},{name:"--lui-space-12",category:"Space"},{name:"--lui-space-14",category:"Space"},{name:"--lui-space-16",category:"Space"},{name:"--lui-radius-1",category:"Radius"},{name:"--lui-radius-2",category:"Radius"},{name:"--lui-radius-3",category:"Radius"},{name:"--lui-radius-4",category:"Radius"},{name:"--lui-radius-full",category:"Radius"},{name:"--lui-font-family-body",category:"Font"},{name:"--lui-font-size-xs",category:"Font"},{name:"--lui-font-size-sm",category:"Font"},{name:"--lui-font-size-md",category:"Font"},{name:"--lui-font-size-lg",category:"Font"},{name:"--lui-font-size-xl",category:"Font"},{name:"--lui-font-size-2xl",category:"Font"},{name:"--lui-font-weight-normal",category:"Font"},{name:"--lui-font-weight-medium",category:"Font"},{name:"--lui-font-weight-semibold",category:"Font"},{name:"--lui-font-weight-bold",category:"Font"},{name:"--line-height-xs",category:"Font"},{name:"--line-height-sm",category:"Font"},{name:"--line-height-md",category:"Font"},{name:"--line-height-lg",category:"Font"},{name:"--line-height-xl",category:"Font"},{name:"--line-height-2xl",category:"Font"},{name:"--lui-shadow-xs",category:"Shadow"},{name:"--lui-shadow-sm",category:"Shadow"},{name:"--lui-shadow-md",category:"Shadow"},{name:"--lui-shadow-lg",category:"Shadow"}],c=({token:a})=>e.jsx("div",{style:{background:`var(${a})`,border:"1px solid var(--lui-color-border-primary)",borderRadius:"var(--lui-radius-1)",height:24,width:24}}),d=({token:a})=>{const t=i.useRef(null),[y,g]=i.useState("");return i.useEffect(()=>{if(t.current){const m=getComputedStyle(t.current).getPropertyValue(a).trim();g(m)}},[]),e.jsx("span",{ref:t,style:{fontFamily:"monospace",fontSize:13},children:y||"—"})},s={borderCollapse:"collapse",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:14,width:"100%"},o={borderBottom:"2px solid var(--lui-color-border-primary)",fontWeight:600,padding:"8px 12px",textAlign:"left"},n={borderBottom:"1px solid var(--lui-color-border-secondary)",padding:"8px 12px",verticalAlign:"middle"},r={fontFamily:"monospace",fontSize:13},x=["Brand","Gray","Red","Orange","Green","Blue","Base"],f={title:"@lazar-ui／kit/Design Tokens",parameters:{layout:"fullscreen"}},l={render:()=>e.jsxs("div",{style:{maxWidth:960,margin:"0 auto",padding:24},children:[e.jsx("h1",{style:{fontSize:24,fontWeight:700,margin:"0 0 8px"},children:"Design Tokens"}),e.jsxs("p",{style:{color:"var(--lui-color-text-secondary)",fontSize:14,marginBottom:32},children:["All CSS custom properties — palette colors, semantic tokens, spacing, typography, and shadows. Toggle ",e.jsx("strong",{children:"light"})," / ",e.jsx("strong",{children:"dark"})," / ",e.jsx("strong",{children:"contrast"})," in the toolbar to see theme changes."]}),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"0 0 16px"},children:"Palette Colors"}),x.map(a=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--lui-color-text-secondary)"},children:a}),e.jsxs("table",{style:s,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:{...o,width:40},children:"Swatch"}),e.jsx("th",{style:o,children:"Value"})]})}),e.jsx("tbody",{children:p.filter(t=>t.category===a).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:e.jsx("code",{style:r,children:t.name})}),e.jsx("td",{style:n,children:e.jsx(c,{token:t.name})}),e.jsx("td",{style:n,children:e.jsx(d,{token:t.name})})]},t.name))})]})]},a)),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"32px 0 16px"},children:"Semantic Tokens"}),e.jsx("p",{style:{color:"var(--lui-color-text-secondary)",fontSize:14,marginBottom:16},children:"Maps semantic color tokens to palette tokens."}),["Background","Text","Border"].map(a=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--lui-color-text-secondary)"},children:a}),e.jsxs("table",{style:s,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:{...o,width:40},children:"Swatch"}),e.jsx("th",{style:o,children:"Maps to"})]})}),e.jsx("tbody",{children:u.filter(t=>t.category===a).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:e.jsx("code",{style:r,children:t.name})}),e.jsx("td",{style:n,children:e.jsx(c,{token:t.name})}),e.jsx("td",{style:n,children:e.jsx("code",{style:r,children:t.mapsTo})})]},t.name))})]})]},a)),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"32px 0 16px"},children:"Spacing, Typography & Shadows"}),["Space","Radius","Font","Shadow"].map(a=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--lui-color-text-secondary)"},children:a}),e.jsxs("table",{style:s,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:o,children:"Value"})]})}),e.jsx("tbody",{children:h.filter(t=>t.category===a).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:e.jsx("code",{style:r,children:t.name})}),e.jsx("td",{style:n,children:e.jsx(d,{token:t.name})})]},t.name))})]})]},a))]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      color: 'var(--lui-color-text-secondary)',
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
        color: 'var(--lui-color-text-secondary)'
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
      color: 'var(--lui-color-text-secondary)',
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
        color: 'var(--lui-color-text-secondary)'
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
        color: 'var(--lui-color-text-secondary)'
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
}`,...l.parameters?.docs?.source}}};const k=["Default"];export{l as Default,k as __namedExportsOrder,f as default};
