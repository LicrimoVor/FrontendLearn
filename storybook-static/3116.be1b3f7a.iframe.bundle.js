"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[3116],{"./node_modules/@headlessui/react/dist/components/menu/menu.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return qe}});var react=__webpack_require__("./node_modules/react/index.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_owner=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-owner.js"),use_resolve_button_type=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),use_text_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-text-value.js"),use_tracked_pointer=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");var a,r,open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),calculate_active_index=__webpack_require__("./node_modules/@headlessui/react/dist/utils/calculate-active-index.js"),disposables=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),me=((r=me||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),de=(r=>(r[r.Pointer=0]="Pointer",r[r.Other=1]="Other",r))(de||{}),fe=((a=fe||{})[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a);function w(e,u=(r=>r)){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,s=(0,focus_management.z2)(u(e.items.slice()),(t=>t.dataRef.current.domRef.current)),i=r?s.indexOf(r):null;return-1===i&&(i=null),{items:s,activeItemIndex:i}}let Te={1(e){return 1===e.menuState?e:{...e,activeItemIndex:null,menuState:1}},0(e){return 0===e.menuState?e:{...e,__demoMode:!1,menuState:0}},2:(e,u)=>{var i;let r=w(e),s=(0,calculate_active_index.d)(u,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:s,activationTrigger:null!=(i=u.trigger)?i:1}},3:(e,u)=>{let s=""!==e.searchQuery?0:1,i=e.searchQuery+u.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+s).concat(e.items.slice(0,e.activeItemIndex+s)):e.items).find((l=>{var m;return(null==(m=l.dataRef.current.textValue)?void 0:m.startsWith(i))&&!l.dataRef.current.disabled})),a=o?e.items.indexOf(o):-1;return-1===a||a===e.activeItemIndex?{...e,searchQuery:i}:{...e,searchQuery:i,activeItemIndex:a,activationTrigger:1}},4(e){return""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,u)=>{let r=w(e,(s=>[...s,{id:u.id,dataRef:u.dataRef}]));return{...e,...r}},6:(e,u)=>{let r=w(e,(s=>{let i=s.findIndex((t=>t.id===u.id));return-1!==i&&s.splice(i,1),s}));return{...e,...r,activationTrigger:1}}},U=(0,react.createContext)(null);function C(e){let u=(0,react.useContext)(U);if(null===u){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return u}function ye(e,u){return(0,match.E)(u.type,Te,e,u)}U.displayName="MenuContext";let Ie=react.Fragment;let be=render.AN.RenderStrategy|render.AN.Static;let Se=react.Fragment;let Pe=(0,render.yV)((function Me(e,u){let{__demoMode:r=!1,...s}=e,i=(0,react.useReducer)(ye,{__demoMode:r,menuState:r?0:1,buttonRef:(0,react.createRef)(),itemsRef:(0,react.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:t,itemsRef:o,buttonRef:a},l]=i,m=(0,use_sync_refs.T)(u);(0,use_outside_click.O)([a,o],((g,R)=>{var p;l({type:1}),(0,focus_management.sP)(R,focus_management.tJ.Loose)||(g.preventDefault(),null==(p=a.current)||p.focus())}),0===t);let I=(0,use_event.z)((()=>{l({type:1})})),A=(0,react.useMemo)((()=>({open:0===t,close:I})),[t,I]),f={ref:m};return react.createElement(U.Provider,{value:i},react.createElement(open_closed.up,{value:(0,match.E)(t,{0:open_closed.ZM.Open,1:open_closed.ZM.Closed})},(0,render.sY)({ourProps:f,theirProps:s,slot:A,defaultTag:Ie,name:"Menu"})))})),ve=(0,render.yV)((function Re(e,u){var R;let r=(0,use_id.M)(),{id:s=`headlessui-menu-button-${r}`,...i}=e,[t,o]=C("Menu.Button"),a=(0,use_sync_refs.T)(t.buttonRef,u),l=(0,use_disposables.G)(),m=(0,use_event.z)((p=>{switch(p.key){case keyboard.R.Space:case keyboard.R.Enter:case keyboard.R.ArrowDown:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame((()=>o({type:2,focus:calculate_active_index.T.First})));break;case keyboard.R.ArrowUp:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame((()=>o({type:2,focus:calculate_active_index.T.Last})))}})),I=(0,use_event.z)((p=>{if(p.key===keyboard.R.Space)p.preventDefault()})),A=(0,use_event.z)((p=>{if((0,bugs.P)(p.currentTarget))return p.preventDefault();e.disabled||(0===t.menuState?(o({type:1}),l.nextFrame((()=>{var M;return null==(M=t.buttonRef.current)?void 0:M.focus({preventScroll:!0})}))):(p.preventDefault(),o({type:0})))})),f=(0,react.useMemo)((()=>({open:0===t.menuState})),[t]),g={ref:a,id:s,type:(0,use_resolve_button_type.f)(e,t.buttonRef),"aria-haspopup":"menu","aria-controls":null==(R=t.itemsRef.current)?void 0:R.id,"aria-expanded":0===t.menuState,onKeyDown:m,onKeyUp:I,onClick:A};return(0,render.sY)({ourProps:g,theirProps:i,slot:f,defaultTag:"button",name:"Menu.Button"})})),he=(0,render.yV)((function Ee(e,u){var M,b;let r=(0,use_id.M)(),{id:s=`headlessui-menu-items-${r}`,...i}=e,[t,o]=C("Menu.Items"),a=(0,use_sync_refs.T)(t.itemsRef,u),l=(0,use_owner.i)(t.itemsRef),m=(0,use_disposables.G)(),I=(0,open_closed.oJ)(),A=null!==I?(I&open_closed.ZM.Open)===open_closed.ZM.Open:0===t.menuState;(0,react.useEffect)((()=>{let n=t.itemsRef.current;n&&0===t.menuState&&n!==(null==l?void 0:l.activeElement)&&n.focus({preventScroll:!0})}),[t.menuState,t.itemsRef,l]),function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react.useRef)(t),l=(0,react.useRef)(r);(0,react.useEffect)((()=>{o.current=t,l.current=r}),[t,r]),(0,use_iso_morphic_effect.e)((()=>{if(!e||!c)return;let n=(0,owner.r)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign((i=>f(i)),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)}),[e,c,o,l])}({container:t.itemsRef.current,enabled:0===t.menuState,accept(n){return"menuitem"===n.getAttribute("role")?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});let f=(0,use_event.z)((n=>{var E,x;switch(m.dispose(),n.key){case keyboard.R.Space:if(""!==t.searchQuery)return n.preventDefault(),n.stopPropagation(),o({type:3,value:n.key});case keyboard.R.Enter:if(n.preventDefault(),n.stopPropagation(),o({type:1}),null!==t.activeItemIndex){let{dataRef:S}=t.items[t.activeItemIndex];null==(x=null==(E=S.current)?void 0:E.domRef.current)||x.click()}(0,focus_management.wI)(t.buttonRef.current);break;case keyboard.R.ArrowDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:calculate_active_index.T.Next});case keyboard.R.ArrowUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:calculate_active_index.T.Previous});case keyboard.R.Home:case keyboard.R.PageUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:calculate_active_index.T.First});case keyboard.R.End:case keyboard.R.PageDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:calculate_active_index.T.Last});case keyboard.R.Escape:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,disposables.k)().nextFrame((()=>{var S;return null==(S=t.buttonRef.current)?void 0:S.focus({preventScroll:!0})}));break;case keyboard.R.Tab:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,disposables.k)().nextFrame((()=>{(0,focus_management.EO)(t.buttonRef.current,n.shiftKey?focus_management.TO.Previous:focus_management.TO.Next)}));break;default:1===n.key.length&&(o({type:3,value:n.key}),m.setTimeout((()=>o({type:4})),350))}})),g=(0,use_event.z)((n=>{if(n.key===keyboard.R.Space)n.preventDefault()})),R=(0,react.useMemo)((()=>({open:0===t.menuState})),[t]),p={"aria-activedescendant":null===t.activeItemIndex||null==(M=t.items[t.activeItemIndex])?void 0:M.id,"aria-labelledby":null==(b=t.buttonRef.current)?void 0:b.id,id:s,onKeyDown:f,onKeyUp:g,role:"menu",tabIndex:0,ref:a};return(0,render.sY)({ourProps:p,theirProps:i,slot:R,defaultTag:"div",features:be,visible:A,name:"Menu.Items"})})),De=(0,render.yV)((function xe(e,u){let r=(0,use_id.M)(),{id:s=`headlessui-menu-item-${r}`,disabled:i=!1,...t}=e,[o,a]=C("Menu.Item"),l=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===s,m=(0,react.useRef)(null),I=(0,use_sync_refs.T)(u,m);(0,use_iso_morphic_effect.e)((()=>{if(o.__demoMode||0!==o.menuState||!l||0===o.activationTrigger)return;let T=(0,disposables.k)();return T.requestAnimationFrame((()=>{var P,B;null==(B=null==(P=m.current)?void 0:P.scrollIntoView)||B.call(P,{block:"nearest"})})),T.dispose}),[o.__demoMode,m,l,o.menuState,o.activationTrigger,o.activeItemIndex]);let A=(0,use_text_value.x)(m),f=(0,react.useRef)({disabled:i,domRef:m,get textValue(){return A()}});(0,use_iso_morphic_effect.e)((()=>{f.current.disabled=i}),[f,i]),(0,use_iso_morphic_effect.e)((()=>(a({type:5,id:s,dataRef:f}),()=>a({type:6,id:s}))),[f,s]);let g=(0,use_event.z)((()=>{a({type:1})})),R=(0,use_event.z)((T=>{if(i)return T.preventDefault();a({type:1}),(0,focus_management.wI)(o.buttonRef.current)})),p=(0,use_event.z)((()=>{if(i)return a({type:2,focus:calculate_active_index.T.Nothing});a({type:2,focus:calculate_active_index.T.Specific,id:s})})),M=(0,use_tracked_pointer.g)(),b=(0,use_event.z)((T=>M.update(T))),n=(0,use_event.z)((T=>{M.wasMoved(T)&&(i||l||a({type:2,focus:calculate_active_index.T.Specific,id:s,trigger:0}))})),E=(0,use_event.z)((T=>{M.wasMoved(T)&&(i||l&&a({type:2,focus:calculate_active_index.T.Nothing}))})),x=(0,react.useMemo)((()=>({active:l,disabled:i,close:g})),[l,i,g]);return(0,render.sY)({ourProps:{id:s,ref:I,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,disabled:void 0,onClick:R,onFocus:p,onPointerEnter:b,onMouseEnter:b,onPointerMove:n,onMouseMove:n,onPointerLeave:E,onMouseLeave:E},theirProps:t,slot:x,defaultTag:Se,name:"Menu.Item"})})),qe=Object.assign(Pe,{Button:ve,Items:he,Item:De})},"./node_modules/@headlessui/react/dist/components/popover/popover.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return Ct}});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),micro_task=__webpack_require__("./node_modules/@headlessui/react/dist/utils/micro-task.js");var use_owner=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-owner.js"),use_server_handoff_complete=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");let e=(0,react.createContext)(!1);function portal_force_root_a(){return(0,react.useContext)(e)}var env=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");let U=react.Fragment;let S=react.Fragment,_=(0,react.createContext)(null);let f=(0,react.createContext)(null);function ee(){let p=(0,react.useContext)(f),n=(0,react.useRef)([]),l=(0,use_event.z)((o=>(n.current.push(o),p&&p.register(o),()=>e(o)))),e=(0,use_event.z)((o=>{let t=n.current.indexOf(o);-1!==t&&n.current.splice(t,1),p&&p.unregister(o)})),a=(0,react.useMemo)((()=>({register:l,unregister:e,portals:n})),[l,e,n]);return[n,(0,react.useMemo)((()=>function({children:t}){return react.createElement(f.Provider,{value:a},t)}),[a])]}let D=(0,render.yV)((function N(p,n){let l=p,e=(0,react.useRef)(null),a=(0,use_sync_refs.T)((0,use_sync_refs.h)((u=>{e.current=u})),n),o=(0,use_owner.i)(e),t=function F(p){let n=portal_force_root_a(),l=(0,react.useContext)(_),e=(0,use_owner.i)(p),[a,o]=(0,react.useState)((()=>{if(!n&&null!==l||env.O.isServer)return null;let t=null==e?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(null===e)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)}));return(0,react.useEffect)((()=>{null!==a&&(null!=e&&e.body.contains(a)||null==e||e.body.appendChild(a))}),[a,e]),(0,react.useEffect)((()=>{n||null!==l&&o(l.current)}),[l,o,n]),a}(e),[r]=(0,react.useState)((()=>{var u;return env.O.isServer?null:null!=(u=null==o?void 0:o.createElement("div"))?u:null})),i=(0,react.useContext)(f),v=(0,use_server_handoff_complete.H)();return(0,use_iso_morphic_effect.e)((()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r))}),[t,r]),(0,use_iso_morphic_effect.e)((()=>{if(r&&i)return i.register(r)}),[i,r]),function c(t){let r=(0,use_event.z)(t),e=(0,react.useRef)(!1);(0,react.useEffect)((()=>(e.current=!1,()=>{e.current=!0,(0,micro_task.Y)((()=>{e.current&&r()}))})),[r])}((()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&(null==(u=t.parentElement)||u.removeChild(t)))})),v&&t&&r?(0,react_dom.createPortal)((0,render.sY)({ourProps:{ref:a},theirProps:l,defaultTag:U,name:"Portal"}),r):null})),I=(0,render.yV)((function j(p,n){let{target:l,...e}=p,o={ref:(0,use_sync_refs.T)(n)};return react.createElement(_.Provider,{value:l},(0,render.sY)({ourProps:o,theirProps:e,defaultTag:S,name:"Popover.Group"}))}));Object.assign(D,{Group:I});var use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");var use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_resolve_button_type=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js");var r,use_window_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-window-event.js"),use_tab_direction_s=((r=use_tab_direction_s||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function use_tab_direction_n(){let e=(0,react.useRef)(0);return(0,use_window_event.s)("keydown",(o=>{"Tab"===o.key&&(e.current=o.shiftKey?1:0)}),!0),e}var u,open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),he=((u=he||{})[u.Open=0]="Open",u[u.Closed=1]="Closed",u),He=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(He||{});let Ge={0:t=>{let o={...t,popoverState:(0,match.E)(t.popoverState,{0:1,1:0})};return 0===o.popoverState&&(o.__demoMode=!1),o},1(t){return 1===t.popoverState?t:{...t,popoverState:1}},2(t,o){return t.button===o.button?t:{...t,button:o.button}},3(t,o){return t.buttonId===o.buttonId?t:{...t,buttonId:o.buttonId}},4(t,o){return t.panel===o.panel?t:{...t,panel:o.panel}},5(t,o){return t.panelId===o.panelId?t:{...t,panelId:o.panelId}}},ue=(0,react.createContext)(null);function oe(t){let o=(0,react.useContext)(ue);if(null===o){let u=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,oe),u}return o}ue.displayName="PopoverContext";let ie=(0,react.createContext)(null);function fe(t){let o=(0,react.useContext)(ie);if(null===o){let u=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,fe),u}return o}ie.displayName="PopoverAPIContext";let Pe=(0,react.createContext)(null);function Ee(){return(0,react.useContext)(Pe)}Pe.displayName="PopoverGroupContext";let re=(0,react.createContext)(null);function ke(t,o){return(0,match.E)(o.type,Ge,t,o)}re.displayName="PopoverPanelContext";let Ve=render.AN.RenderStrategy|render.AN.Static;let Xe=render.AN.RenderStrategy|render.AN.Static;let Qe=(0,render.yV)((function Ue(t,o){var B;let{__demoMode:u=!1,...M}=t,x=(0,react.useRef)(null),n=(0,use_sync_refs.T)(o,(0,use_sync_refs.h)((l=>{x.current=l}))),e=(0,react.useRef)([]),c=(0,react.useReducer)(ke,{__demoMode:u,popoverState:u?0:1,buttons:e,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,react.createRef)(),afterPanelSentinel:(0,react.createRef)()}),[{popoverState:f,button:s,buttonId:I,panel:a,panelId:v,beforePanelSentinel:y,afterPanelSentinel:A},P]=c,p=(0,use_owner.i)(null!=(B=x.current)?B:s),E=(0,react.useMemo)((()=>{if(!s||!a)return!1;for(let W of document.querySelectorAll("body > *"))if(Number(null==W?void 0:W.contains(s))^Number(null==W?void 0:W.contains(a)))return!0;let l=(0,focus_management.GO)(),S=l.indexOf(s),q=(S+l.length-1)%l.length,U=(S+1)%l.length,z=l[q],be=l[U];return!a.contains(z)&&!a.contains(be)}),[s,a]),F=(0,use_latest_value.E)(I),D=(0,use_latest_value.E)(v),_=(0,react.useMemo)((()=>({buttonId:F,panelId:D,close:()=>P({type:1})})),[F,D,P]),O=Ee(),L=null==O?void 0:O.registerPopover,$=(0,use_event.z)((()=>{var l;return null!=(l=null==O?void 0:O.isFocusWithinPopoverGroup())?l:(null==p?void 0:p.activeElement)&&((null==s?void 0:s.contains(p.activeElement))||(null==a?void 0:a.contains(p.activeElement)))}));(0,react.useEffect)((()=>null==L?void 0:L(_)),[L,_]);let[i,b]=ee(),T=function use_root_containers_N({defaultContainers:o=[],portals:r,mainTreeNodeRef:u}={}){var f;let t=(0,react.useRef)(null!=(f=null==u?void 0:u.current)?f:null),l=(0,use_owner.i)(t),c=(0,use_event.z)((()=>{var i,s,a;let n=[];for(let e of o)null!==e&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(null!=r&&r.current)for(let e of r.current)n.push(e);for(let e of null!=(i=null==l?void 0:l.querySelectorAll("html > *, body > *"))?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(t.current)||e.contains(null==(a=null==(s=t.current)?void 0:s.getRootNode())?void 0:a.host)||n.some((L=>e.contains(L)))||n.push(e));return n}));return{resolveContainers:c,contains:(0,use_event.z)((n=>c().some((i=>i.contains(n))))),mainTreeNodeRef:t,MainTreeNode:(0,react.useMemo)((()=>function(){return null!=u?null:react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:t})}),[t,u])}}({mainTreeNodeRef:null==O?void 0:O.mainTreeNodeRef,portals:i,defaultContainers:[s,a]});(function use_event_listener_E(n,e,a,t){let i=(0,use_latest_value.E)(a);(0,react.useEffect)((()=>{function r(o){i.current(o)}return(n=null!=n?n:window).addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)}),[n,e,t])})(null==p?void 0:p.defaultView,"focus",(l=>{var S,q,U,z;l.target!==window&&l.target instanceof HTMLElement&&0===f&&($()||s&&a&&(T.contains(l.target)||null!=(q=null==(S=y.current)?void 0:S.contains)&&q.call(S,l.target)||null!=(z=null==(U=A.current)?void 0:U.contains)&&z.call(U,l.target)||P({type:1})))}),!0),(0,use_outside_click.O)(T.resolveContainers,((l,S)=>{P({type:1}),(0,focus_management.sP)(S,focus_management.tJ.Loose)||(l.preventDefault(),null==s||s.focus())}),0===f);let d=(0,use_event.z)((l=>{P({type:1});let S=l?l instanceof HTMLElement?l:"current"in l&&l.current instanceof HTMLElement?l.current:s:s;null==S||S.focus()})),r=(0,react.useMemo)((()=>({close:d,isPortalled:E})),[d,E]),m=(0,react.useMemo)((()=>({open:0===f,close:d})),[f,d]),g={ref:n};return react.createElement(re.Provider,{value:null},react.createElement(ue.Provider,{value:c},react.createElement(ie.Provider,{value:r},react.createElement(open_closed.up,{value:(0,match.E)(f,{0:open_closed.ZM.Open,1:open_closed.ZM.Closed})},react.createElement(b,null,(0,render.sY)({ourProps:g,theirProps:M,slot:m,defaultTag:"div",name:"Popover"}),react.createElement(T.MainTreeNode,null))))))})),Ze=(0,render.yV)((function Ke(t,o){let u=(0,use_id.M)(),{id:M=`headlessui-popover-button-${u}`,...x}=t,[n,e]=oe("Popover.Button"),{isPortalled:c}=fe("Popover.Button"),f=(0,react.useRef)(null),s=`headlessui-focus-sentinel-${(0,use_id.M)()}`,I=Ee(),a=null==I?void 0:I.closeOthers,y=null!==function Ne(){return(0,react.useContext)(re)}();(0,react.useEffect)((()=>{if(!y)return e({type:3,buttonId:M}),()=>{e({type:3,buttonId:null})}}),[y,M,e]);let[A]=(0,react.useState)((()=>Symbol())),P=(0,use_sync_refs.T)(f,o,y?null:r=>{if(r)n.buttons.current.push(A);else{let m=n.buttons.current.indexOf(A);-1!==m&&n.buttons.current.splice(m,1)}n.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&e({type:2,button:r})}),p=(0,use_sync_refs.T)(f,o),E=(0,use_owner.i)(f),F=(0,use_event.z)((r=>{var m,g,B;if(y){if(1===n.popoverState)return;switch(r.key){case keyboard.R.Space:case keyboard.R.Enter:r.preventDefault(),null==(g=(m=r.target).click)||g.call(m),e({type:1}),null==(B=n.button)||B.focus()}}else switch(r.key){case keyboard.R.Space:case keyboard.R.Enter:r.preventDefault(),r.stopPropagation(),1===n.popoverState&&(null==a||a(n.buttonId)),e({type:0});break;case keyboard.R.Escape:if(0!==n.popoverState)return null==a?void 0:a(n.buttonId);if(!f.current||null!=E&&E.activeElement&&!f.current.contains(E.activeElement))return;r.preventDefault(),r.stopPropagation(),e({type:1})}})),D=(0,use_event.z)((r=>{y||r.key===keyboard.R.Space&&r.preventDefault()})),_=(0,use_event.z)((r=>{var m,g;(0,bugs.P)(r.currentTarget)||t.disabled||(y?(e({type:1}),null==(m=n.button)||m.focus()):(r.preventDefault(),r.stopPropagation(),1===n.popoverState&&(null==a||a(n.buttonId)),e({type:0}),null==(g=n.button)||g.focus()))})),O=(0,use_event.z)((r=>{r.preventDefault(),r.stopPropagation()})),L=0===n.popoverState,$=(0,react.useMemo)((()=>({open:L})),[L]),i=(0,use_resolve_button_type.f)(t,f),b=y?{ref:p,type:i,onKeyDown:F,onClick:_}:{ref:P,id:n.buttonId,type:i,"aria-expanded":0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:F,onKeyUp:D,onClick:_,onMouseDown:O},T=use_tab_direction_n(),d=(0,use_event.z)((()=>{let r=n.panel;r&&function m(){(0,match.E)(T.current,{[use_tab_direction_s.Forwards]:()=>(0,focus_management.jA)(r,focus_management.TO.First),[use_tab_direction_s.Backwards]:()=>(0,focus_management.jA)(r,focus_management.TO.Last)})===focus_management.fE.Error&&(0,focus_management.jA)((0,focus_management.GO)().filter((B=>"true"!==B.dataset.headlessuiFocusGuard)),(0,match.E)(T.current,{[use_tab_direction_s.Forwards]:focus_management.TO.Next,[use_tab_direction_s.Backwards]:focus_management.TO.Previous}),{relativeTo:n.button})}()}));return react.createElement(react.Fragment,null,(0,render.sY)({ourProps:b,theirProps:x,slot:$,defaultTag:"button",name:"Popover.Button"}),L&&!y&&c&&react.createElement(internal_hidden._,{id:s,features:internal_hidden.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:d}))})),et=(0,render.yV)((function $e(t,o){let u=(0,use_id.M)(),{id:M=`headlessui-popover-overlay-${u}`,...x}=t,[{popoverState:n},e]=oe("Popover.Overlay"),c=(0,use_sync_refs.T)(o),f=(0,open_closed.oJ)(),s=null!==f?(f&open_closed.ZM.Open)===open_closed.ZM.Open:0===n,I=(0,use_event.z)((y=>{if((0,bugs.P)(y.currentTarget))return y.preventDefault();e({type:1})})),a=(0,react.useMemo)((()=>({open:0===n})),[n]);return(0,render.sY)({ourProps:{ref:c,id:M,"aria-hidden":!0,onClick:I},theirProps:x,slot:a,defaultTag:"div",features:Ve,visible:s,name:"Popover.Overlay"})})),tt=(0,render.yV)((function Ye(t,o){let u=(0,use_id.M)(),{id:M=`headlessui-popover-panel-${u}`,focus:x=!1,...n}=t,[e,c]=oe("Popover.Panel"),{close:f,isPortalled:s}=fe("Popover.Panel"),I=`headlessui-focus-sentinel-before-${(0,use_id.M)()}`,a=`headlessui-focus-sentinel-after-${(0,use_id.M)()}`,v=(0,react.useRef)(null),y=(0,use_sync_refs.T)(v,o,(i=>{c({type:4,panel:i})})),A=(0,use_owner.i)(v),P=(0,render.Y2)();(0,use_iso_morphic_effect.e)((()=>(c({type:5,panelId:M}),()=>{c({type:5,panelId:null})})),[M,c]);let p=(0,open_closed.oJ)(),E=null!==p?(p&open_closed.ZM.Open)===open_closed.ZM.Open:0===e.popoverState,F=(0,use_event.z)((i=>{var b;if(i.key===keyboard.R.Escape){if(0!==e.popoverState||!v.current||null!=A&&A.activeElement&&!v.current.contains(A.activeElement))return;i.preventDefault(),i.stopPropagation(),c({type:1}),null==(b=e.button)||b.focus()}}));(0,react.useEffect)((()=>{var i;t.static||1===e.popoverState&&(null==(i=t.unmount)||i)&&c({type:4,panel:null})}),[e.popoverState,t.unmount,t.static,c]),(0,react.useEffect)((()=>{if(e.__demoMode||!x||0!==e.popoverState||!v.current)return;let i=null==A?void 0:A.activeElement;v.current.contains(i)||(0,focus_management.jA)(v.current,focus_management.TO.First)}),[e.__demoMode,x,v,e.popoverState]);let D=(0,react.useMemo)((()=>({open:0===e.popoverState,close:f})),[e,f]),_={ref:y,id:M,onKeyDown:F,onBlur:x&&0===e.popoverState?i=>{var T,d,r,m,g;let b=i.relatedTarget;b&&v.current&&(null!=(T=v.current)&&T.contains(b)||(c({type:1}),(null!=(r=null==(d=e.beforePanelSentinel.current)?void 0:d.contains)&&r.call(d,b)||null!=(g=null==(m=e.afterPanelSentinel.current)?void 0:m.contains)&&g.call(m,b))&&b.focus({preventScroll:!0})))}:void 0,tabIndex:-1},O=use_tab_direction_n(),L=(0,use_event.z)((()=>{let i=v.current;i&&function b(){(0,match.E)(O.current,{[use_tab_direction_s.Forwards]:()=>{var d;(0,focus_management.jA)(i,focus_management.TO.First)===focus_management.fE.Error&&(null==(d=e.afterPanelSentinel.current)||d.focus())},[use_tab_direction_s.Backwards]:()=>{var T;null==(T=e.button)||T.focus({preventScroll:!0})}})}()})),$=(0,use_event.z)((()=>{let i=v.current;i&&function b(){(0,match.E)(O.current,{[use_tab_direction_s.Forwards]:()=>{var B;if(!e.button)return;let T=(0,focus_management.GO)(),d=T.indexOf(e.button),r=T.slice(0,d+1),g=[...T.slice(d+1),...r];for(let l of g.slice())if("true"===l.dataset.headlessuiFocusGuard||null!=(B=e.panel)&&B.contains(l)){let S=g.indexOf(l);-1!==S&&g.splice(S,1)}(0,focus_management.jA)(g,focus_management.TO.First,{sorted:!1})},[use_tab_direction_s.Backwards]:()=>{var d;(0,focus_management.jA)(i,focus_management.TO.Previous)===focus_management.fE.Error&&(null==(d=e.button)||d.focus())}})}()}));return react.createElement(re.Provider,{value:M},E&&s&&react.createElement(internal_hidden._,{id:I,ref:e.beforePanelSentinel,features:internal_hidden.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:L}),(0,render.sY)({mergeRefs:P,ourProps:_,theirProps:n,slot:D,defaultTag:"div",features:Xe,visible:E,name:"Popover.Panel"}),E&&s&&react.createElement(internal_hidden._,{id:a,ref:e.afterPanelSentinel,features:internal_hidden.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:$}))})),ot=(0,render.yV)((function ze(t,o){let u=(0,react.useRef)(null),M=(0,use_sync_refs.T)(u,o),[x,n]=(0,react.useState)([]),e=function use_root_containers_y(){let o=(0,react.useRef)(null);return{mainTreeNodeRef:o,MainTreeNode:(0,react.useMemo)((()=>function(){return react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:o})}),[o])}}(),c=(0,use_event.z)((P=>{n((p=>{let E=p.indexOf(P);if(-1!==E){let F=p.slice();return F.splice(E,1),F}return p}))})),f=(0,use_event.z)((P=>(n((p=>[...p,P])),()=>c(P)))),s=(0,use_event.z)((()=>{var E;let P=(0,owner.r)(u);if(!P)return!1;let p=P.activeElement;return!(null==(E=u.current)||!E.contains(p))||x.some((F=>{var D,_;return(null==(D=P.getElementById(F.buttonId.current))?void 0:D.contains(p))||(null==(_=P.getElementById(F.panelId.current))?void 0:_.contains(p))}))})),I=(0,use_event.z)((P=>{for(let p of x)p.buttonId.current!==P&&p.close()})),a=(0,react.useMemo)((()=>({registerPopover:f,unregisterPopover:c,isFocusWithinPopoverGroup:s,closeOthers:I,mainTreeNodeRef:e.mainTreeNodeRef})),[f,c,s,I,e.mainTreeNodeRef]),v=(0,react.useMemo)((()=>({})),[]),y=t,A={ref:M};return react.createElement(Pe.Provider,{value:a},(0,render.sY)({ourProps:A,theirProps:y,slot:v,defaultTag:"div",name:"Popover.Group"}),react.createElement(e.MainTreeNode,null))})),Ct=Object.assign(Qe,{Button:Ze,Overlay:et,Panel:tt,Group:ot})},"./node_modules/@headlessui/react/dist/hooks/use-owner.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return n}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");function n(...e){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.r)(...e)),[...e])}}}]);