import{r as a,F as Oe,U as ze,R as A,_ as X,c as re,d as x,j as I,a as ye,s as ie,u as Ee,g as Ae,e as Xe}from"./index-8ba98597.js";import{_ as Ye,a as We}from"./assertThisInitialized-e405edc3.js";function He(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function H(e){const t=a.useRef(e);return Oe(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function de(...e){return a.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{He(n,t)})},e)}class se{constructor(){this.currentId=0,this.clear=()=>{this.currentId!==0&&(clearTimeout(this.currentId),this.currentId=0)},this.disposeEffect=()=>this.clear}static create(){return new se}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=0,n()},t)}}let G=!0,te=!1;const Ge=new se,qe={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Je(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&qe[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Qe(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Ze(){this.visibilityState==="hidden"&&te&&(G=!0)}function et(e){e.addEventListener("keydown",Qe,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Ze,!0)}function tt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||Je(t)}function nt(){const e=a.useCallback(r=>{r!=null&&et(r.ownerDocument)},[]),t=a.useRef(!1);function n(){return t.current?(te=!0,Ge.start(100,()=>{te=!1}),t.current=!1,!0):!1}function u(r){return tt(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}function rt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ze(t)}var oe=function(){var t=rt.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const he=A.createContext(null);function ae(e,t){var n=function(i){return t&&a.isValidElement(i)?t(i):i},u=Object.create(null);return e&&a.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function it(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var i in e)i in t?r.length&&(u[i]=r,r=[]):r.push(i);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=n(p)}c[l]=n(l)}for(s=0;s<r.length;s++)c[r[s]]=n(r[s]);return c}function k(e,t,n){return n[t]!=null?n[t]:e.props[t]}function st(e,t){return ae(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:k(n,"appear",e),enter:k(n,"enter",e),exit:k(n,"exit",e)})})}function ot(e,t,n){var u=ae(e.children),r=it(t,u);return Object.keys(r).forEach(function(i){var s=r[i];if(a.isValidElement(s)){var c=i in t,l=i in u,p=t[i],d=a.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[i]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:k(s,"exit",e),enter:k(s,"enter",e)}):!l&&c&&!d?r[i]=a.cloneElement(s,{in:!1}):l&&c&&a.isValidElement(p)&&(r[i]=a.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:k(s,"exit",e),enter:k(s,"enter",e)}))}}),r}var at=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ut={component:"div",childFactory:function(t){return t}},ue=function(e){Ye(t,e);function t(u,r){var i;i=e.call(this,u,r)||this;var s=i.handleExited.bind(We(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var s=i.children,c=i.handleExited,l=i.firstRender;return{children:l?st(r,c):ot(r,s,c),firstRender:!1}},n.handleExited=function(r,i){var s=ae(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,i=r.component,s=r.childFactory,c=re(r,["component","childFactory"]),l=this.state.contextValue,p=at(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?A.createElement(he.Provider,{value:l},p):A.createElement(he.Provider,{value:l},A.createElement(i,c,p))},t}(A.Component);ue.propTypes={};ue.defaultProps=ut;const lt=ue;function ct(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:i,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=a.useState(!1),b=x(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),C={width:s,height:s,top:-(s/2)+i,left:-(s/2)+r},h=x(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),I.jsx("span",{className:b,style:C,children:I.jsx("span",{className:h})})}const pt=ye("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=pt,ft=["center","classes","className"];let q=e=>e,me,be,ge,Re;const ne=550,dt=80,ht=oe(me||(me=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),mt=oe(be||(be=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),bt=oe(ge||(ge=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),gt=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Rt=ie(ct,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,ht,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,mt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,bt,({theme:e})=>e.transitions.easing.easeInOut),yt=a.forwardRef(function(t,n){const u=Ee({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:s}=u,c=re(u,ft),[l,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=a.useRef(!1),C=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const j=a.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:L,rippleSize:U,cb:_}=f;p(T=>[...T,I.jsx(Rt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:E,rippleY:L,rippleSize:U},d.current)]),d.current+=1,g.current=_},[i]),$=a.useCallback((f={},y={},E=()=>{})=>{const{pulsate:L=!1,center:U=r||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=_?null:R.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,P,S;if(U||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:D,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(D-B.left),P=Math.round(V-B.top)}if(U)S=Math.sqrt((2*B.width**2+B.height**2)/3),S%2===0&&(S+=1);else{const D=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;S=Math.sqrt(D**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{j({pulsate:L,rippleX:v,rippleY:P,rippleSize:S,cb:E})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},dt)):j({pulsate:L,rippleX:v,rippleY:P,rippleSize:S,cb:E})},[r,j]),K=a.useCallback(()=>{$({},{pulsate:!0})},[$]),N=a.useCallback((f,y)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{N(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[]);return a.useImperativeHandle(n,()=>({pulsate:K,start:$,stop:N}),[K,$,N]),I.jsx(gt,X({className:x(m.root,i.root,s),ref:R},c,{children:I.jsx(lt,{component:null,exit:!0,children:l})}))}),Et=yt;function Tt(e){return Ae("MuiButtonBase",e)}const Mt=ye("MuiButtonBase",["root","disabled","focusVisible"]),xt=Mt,Ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],vt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,s=Xe({root:["root",t&&"disabled",n&&"focusVisible"]},Tt,r);return n&&u&&(s.root+=` ${u}`),s},Vt=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${xt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wt=a.forwardRef(function(t,n){const u=Ee({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:j,onDragLeave:$,onFocus:K,onFocusVisible:N,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:L,onMouseUp:U,onTouchEnd:_,onTouchMove:T,onTouchStart:B,tabIndex:v=0,TouchRippleProps:P,touchRippleRef:S,type:D}=u,V=re(u,Ct),O=a.useRef(null),M=a.useRef(null),Te=de(M,S),{isFocusVisibleRef:le,onFocus:Me,onBlur:xe,ref:Ce}=nt(),[F,Y]=a.useState(!1);p&&F&&Y(!1),a.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[J,ve]=a.useState(!1);a.useEffect(()=>{ve(!0)},[]);const Ve=J&&!d&&!p;a.useEffect(()=>{F&&b&&!d&&J&&M.current.pulsate()},[d,b,F,J]);function w(o,pe,_e=g){return H(fe=>(pe&&pe(fe),!_e&&M.current&&M.current[o](fe),!0))}const we=w("start",E),Be=w("stop",j),Pe=w("stop",$),Se=w("stop",U),Le=w("stop",o=>{F&&o.preventDefault(),L&&L(o)}),De=w("start",B),Fe=w("stop",_),ke=w("stop",T),Ie=w("stop",o=>{xe(o),le.current===!1&&Y(!1),h&&h(o)},!1),$e=H(o=>{O.current||(O.current=o.currentTarget),Me(o),le.current===!0&&(Y(!0),N&&N(o)),K&&K(o)}),Q=()=>{const o=O.current;return l&&l!=="button"&&!(o.tagName==="A"&&o.href)},Z=a.useRef(!1),Ne=H(o=>{b&&!Z.current&&F&&M.current&&o.key===" "&&(Z.current=!0,M.current.stop(o,()=>{M.current.start(o)})),o.target===o.currentTarget&&Q()&&o.key===" "&&o.preventDefault(),f&&f(o),o.target===o.currentTarget&&Q()&&o.key==="Enter"&&!p&&(o.preventDefault(),R&&R(o))}),Ue=H(o=>{b&&o.key===" "&&M.current&&F&&!o.defaultPrevented&&(Z.current=!1,M.current.stop(o,()=>{M.current.pulsate(o)})),y&&y(o),R&&o.target===o.currentTarget&&Q()&&o.key===" "&&!o.defaultPrevented&&R(o)});let W=l;W==="button"&&(V.href||V.to)&&(W=C);const z={};W==="button"?(z.type=D===void 0?"button":D,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const je=de(n,Ce,O),ce=X({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:F}),Ke=vt(ce);return I.jsxs(Vt,X({as:W,className:x(Ke.root,c),ownerState:ce,onBlur:Ie,onClick:R,onContextMenu:Be,onFocus:$e,onKeyDown:Ne,onKeyUp:Ue,onMouseDown:we,onMouseLeave:Le,onMouseUp:Se,onDragLeave:Pe,onTouchEnd:Fe,onTouchMove:ke,onTouchStart:De,ref:je,tabIndex:p?-1:v,type:D},z,V,{children:[s,Ve?I.jsx(Et,X({ref:Te,center:i},P)):null]}))}),Lt=wt;export{Lt as B,he as T,H as a,nt as b,He as s,de as u};
