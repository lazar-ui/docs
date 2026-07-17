import{H as e,N as l}from"./iframe-Bsoi6siu.js";import"./preload-helper-PPVm8Dsz.js";const h=[{name:"--lui-palette-primary",category:"Primary"},{name:"--lui-palette-secondary",category:"Secondary"},{name:"--lui-palette-neutral",category:"Neutral"},{name:"--lui-palette-error",category:"Functional"},{name:"--lui-palette-warning",category:"Functional"},{name:"--lui-palette-success",category:"Functional"},{name:"--lui-palette-info",category:"Functional"},{name:"--lui-palette-base-white",category:"Base"},{name:"--lui-palette-base-black",category:"Base"},{name:"--lui-palette-base-overlay",category:"Base"}],u=[{name:"--lui-color-background-primary",category:"Background"},{name:"--lui-color-background-primary-hover",category:"Background"},{name:"--lui-color-background-secondary",category:"Background"},{name:"--lui-color-background-base",category:"Background"},{name:"--lui-color-background-neutral",category:"Background"},{name:"--lui-color-background-tertiary",category:"Background"},{name:"--lui-color-background-disabled",category:"Background"},{name:"--lui-color-background-error",category:"Background"},{name:"--lui-color-background-error-hover",category:"Background"},{name:"--lui-color-background-overlay",category:"Background"},{name:"--lui-color-text-primary",category:"Text"},{name:"--lui-color-text-secondary",category:"Text"},{name:"--lui-color-text-tertiary",category:"Text"},{name:"--lui-color-text-quaternary",category:"Text"},{name:"--lui-color-text-disabled",category:"Text"},{name:"--lui-color-text-on-primary",category:"Text"},{name:"--lui-color-text-inverted",category:"Text"},{name:"--lui-color-text-link",category:"Text"},{name:"--lui-color-text-link-hover",category:"Text"},{name:"--lui-color-text-error",category:"Text"},{name:"--lui-color-text-error-hover",category:"Text"},{name:"--lui-color-text-success",category:"Text"},{name:"--lui-color-text-success-hover",category:"Text"},{name:"--lui-color-text-warning",category:"Text"},{name:"--lui-color-text-warning-hover",category:"Text"},{name:"--lui-color-border-primary",category:"Border"},{name:"--lui-color-border-secondary",category:"Border"},{name:"--lui-color-border-disabled",category:"Border"},{name:"--lui-color-border-disabled-subtle",category:"Border"},{name:"--lui-color-border-focus",category:"Border"},{name:"--lui-color-border-focus-error",category:"Border"}],x=[{name:"--lui-space-1",category:"Space"},{name:"--lui-space-2",category:"Space"},{name:"--lui-space-3",category:"Space"},{name:"--lui-space-4",category:"Space"},{name:"--lui-space-5",category:"Space"},{name:"--lui-space-6",category:"Space"},{name:"--lui-space-7",category:"Space"},{name:"--lui-space-8",category:"Space"},{name:"--lui-space-10",category:"Space"},{name:"--lui-space-12",category:"Space"},{name:"--lui-space-14",category:"Space"},{name:"--lui-space-16",category:"Space"},{name:"--lui-radius-1",category:"Radius"},{name:"--lui-radius-2",category:"Radius"},{name:"--lui-radius-3",category:"Radius"},{name:"--lui-radius-4",category:"Radius"},{name:"--lui-radius-full",category:"Radius"},{name:"--lui-font-family-body",category:"Font"},{name:"--lui-font-size-xs",category:"Font"},{name:"--lui-font-size-sm",category:"Font"},{name:"--lui-font-size-md",category:"Font"},{name:"--lui-font-size-lg",category:"Font"},{name:"--lui-font-size-xl",category:"Font"},{name:"--lui-font-size-2xl",category:"Font"},{name:"--lui-font-weight-normal",category:"Font"},{name:"--lui-font-weight-medium",category:"Font"},{name:"--lui-font-weight-semibold",category:"Font"},{name:"--lui-font-weight-bold",category:"Font"},{name:"--line-height-xs",category:"Font"},{name:"--line-height-sm",category:"Font"},{name:"--line-height-md",category:"Font"},{name:"--line-height-lg",category:"Font"},{name:"--line-height-xl",category:"Font"},{name:"--line-height-2xl",category:"Font"},{name:"--lui-shadow-xs",category:"Shadow"},{name:"--lui-shadow-sm",category:"Shadow"},{name:"--lui-shadow-md",category:"Shadow"},{name:"--lui-shadow-lg",category:"Shadow"}],d=({token:n})=>e.jsx("div",{style:{background:`var(${n})`,border:"1px solid var(--lui-color-border-primary)",borderRadius:"var(--lui-radius-1)",height:24,width:24}}),i=({token:n})=>{const t=l.useRef(null),[y,g]=l.useState("");return l.useEffect(()=>{if(t.current){const m=getComputedStyle(t.current).getPropertyValue(n).trim();g(m)}},[]),e.jsx("span",{ref:t,style:{fontFamily:"monospace",fontSize:13},children:y||"—"})},c={borderCollapse:"collapse",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:14,width:"100%"},o={borderBottom:"2px solid var(--lui-color-border-primary)",fontWeight:600,padding:"8px 12px",textAlign:"left"},a={borderBottom:"1px solid var(--lui-color-border-secondary)",padding:"8px 12px",verticalAlign:"middle"},s={fontFamily:"monospace",fontSize:13},p=["Primary","Secondary","Neutral","Functional","Base"],f={title:"@lazar-ui／kit/Design Tokens",parameters:{layout:"fullscreen"}},r={render:()=>e.jsxs("div",{style:{maxWidth:960,margin:"0 auto",padding:24},children:[e.jsx("h1",{style:{fontSize:24,fontWeight:700,margin:"0 0 8px"},children:"Design Tokens"}),e.jsxs("p",{style:{color:"var(--lui-color-text-secondary)",fontSize:14,marginBottom:32},children:["All CSS custom properties — palette colors, semantic tokens, spacing, typography, and shadows. Toggle ",e.jsx("strong",{children:"light"})," / ",e.jsx("strong",{children:"dark"})," / ",e.jsx("strong",{children:"contrast"})," in the toolbar to see theme changes."]}),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"0 0 16px"},children:"Palette Colors"}),p.map(n=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--lui-color-text-secondary)"},children:n}),e.jsxs("table",{style:c,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:{...o,width:40},children:"Swatch"}),e.jsx("th",{style:o,children:"Value"})]})}),e.jsx("tbody",{children:h.filter(t=>t.category===n).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:a,children:e.jsx("code",{style:s,children:t.name})}),e.jsx("td",{style:a,children:e.jsx(d,{token:t.name})}),e.jsx("td",{style:a,children:e.jsx(i,{token:t.name})})]},t.name))})]})]},n)),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"32px 0 16px"},children:"Semantic Tokens"}),e.jsxs("p",{style:{color:"var(--lui-color-text-secondary)",fontSize:14,marginBottom:16},children:["Derived from palette via ",e.jsx("code",{children:"color-mix(in oklch, ...)"}),". Bridge tokens for borders use",e.jsx("code",{children:" @layer lui-palette-defaults"})," — override in your palette.css if needed."]}),["Background","Text","Border"].map(n=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--lui-color-text-secondary)"},children:n}),e.jsxs("table",{style:c,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:{...o,width:40},children:"Swatch"}),e.jsx("th",{style:o,children:"Value"})]})}),e.jsx("tbody",{children:u.filter(t=>t.category===n).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:a,children:e.jsx("code",{style:s,children:t.name})}),e.jsx("td",{style:a,children:e.jsx(d,{token:t.name})}),e.jsx("td",{style:a,children:e.jsx(i,{token:t.name})})]},t.name))})]})]},n)),e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:"32px 0 16px"},children:"Spacing, Typography & Shadows"}),["Space","Radius","Font","Shadow"].map(n=>e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 8px",color:"var(--lui-color-text-secondary)"},children:n}),e.jsxs("table",{style:c,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:o,children:"Token"}),e.jsx("th",{style:o,children:"Value"})]})}),e.jsx("tbody",{children:x.filter(t=>t.category===n).map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:a,children:e.jsx("code",{style:s,children:t.name})}),e.jsx("td",{style:a,children:e.jsx(i,{token:t.name})})]},t.name))})]})]},n))]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        Derived from palette via <code>color-mix(in oklch, ...)</code>. Bridge tokens for borders use
        <code> @layer lui-palette-defaults</code> — override in your palette.css if needed.
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
                <th style={TH_STYLE}>Value</th>
              </tr>
            </thead>
            <tbody>
              {SEMANTIC_TOKENS.filter(t => t.category === category).map(token => <tr key={token.name}>
                  <td style={TD_STYLE}><code style={CODE_STYLE}>{token.name}</code></td>
                  <td style={TD_STYLE}><Swatch token={token.name} /></td>
                  <td style={TD_STYLE}><TokenValue token={token.name} /></td>
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
}`,...r.parameters?.docs?.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,f as default};
