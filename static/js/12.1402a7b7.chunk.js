(this.webpackJsonpwindowbuilder=this.webpackJsonpwindowbuilder||[]).push([[12],{1040:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(1),r=a.n(s),c=a(536),i=a(520),o=a(218),d=a(334),h=a(160),u=a(987),m=a.n(u),p=a(988),f=a.n(p),E=a(222),_=a.n(E),b=a(586),g=a(210),v=a(750),k=a(119),C=a(546),y=a(69),w=a(20),j=a(632),S=a(158),F=a(206),O=a(986),z=a.n(O);class x extends l.a.Component{constructor(...e){super(...e),this.state={anchorEl:null},this.handleClick=e=>{this.setState({anchorEl:e.currentTarget})},this.handleClose=()=>{this.setState({anchorEl:null})},this.handleFill1D=()=>{this.props.handleFillCutting({linear:!0}),this.handleClose()},this.handleFill1DClr=()=>{this.props.handleFillCutting({linear:!0,clr_only:!0}),this.handleClose()},this.handleFill2D=()=>{this.props.handleFillCutting({bilinear:!0}),this.handleClose()},this.handleFillAll=()=>{this.props.handleFillCutting({bilinear:!0,linear:!0}),this.handleClose()}}render(){const{anchorEl:e}=this.state;return l.a.createElement("div",null,l.a.createElement(h.a,{"aria-haspopup":"true",title:"Заполнить",onClick:this.handleClick},l.a.createElement(z.a,null)),l.a.createElement(S.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},l.a.createElement(F.a,{onClick:this.handleFill1D},"Линейный"),l.a.createElement(F.a,{onClick:this.handleFill1DClr},"Линейный (только цвет)"),l.a.createElement(F.a,{onClick:this.handleFill2D},"Двумерный"),l.a.createElement(F.a,{onClick:this.handleFillAll},"Все виды")))}}var M=x,D=a(545),$=a.n(D),R=a(445),H=a(461),P=a(636);function T(e){return l.a.createElement(H.a,Object.assign({direction:"up"},e))}class N extends l.a.Component{constructor(...e){super(...e),this.state={anchorEl:null,mode:""},this.handleClick=e=>{this.setState({anchorEl:e.currentTarget})},this.handleClose=()=>{this.setState({anchorEl:null})},this.handleCloseDialog=()=>{this.setState({mode:""})},this.handle1D=()=>{this.setState({mode:"1D",anchorEl:null})},this.handle2D=()=>{this.setState({mode:"2D",anchorEl:null})}}render(){const{anchorEl:e,mode:t}=this.state;return l.a.createElement("div",null,l.a.createElement(h.a,{"aria-haspopup":"true",title:"Печать",onClick:this.handleClick},l.a.createElement($.a,null)),l.a.createElement(S.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},l.a.createElement(F.a,{onClick:this.handle1D},"Линейный"),l.a.createElement(F.a,{onClick:this.handle2D},"Двумерный")),l.a.createElement(R.a,{fullScreen:!0,open:Boolean(t),onClose:this.handleCloseDialog,TransitionComponent:T},l.a.createElement(P.a,this.props)))}}var L=N,B=a(159),V=a(85),q=a(456),A=a(585);class U extends n.Component{constructor(...e){super(...e),this.handleCancel=()=>{}}render(){const{props:{statuses:e},handleCancel:t}=this;return l.a.createElement(V.a,{open:!0,large:!0,minheight:!0,title:"Оптимизация раскроя",onClose:t,actions:[l.a.createElement(B.a,{key:"cancel",onClick:t,color:"primary"},"Закрыть")]},l.a.createElement(q.a,null,e.map((e,t)=>l.a.createElement(A.a,{key:"p-"+t,status:e}))))}}var I=U;const J={planning:"c864d895-ac50-42be-8760-203cc46d208f",demand:"dab2c503-a426-4bf5-f083-fe6f1c64fbe5",cuts_in:"187f9a40-94fc-4ad2-ee4c-26341b816ade",cutting:"4fe15a0f-a6c2-442e-d8bb-7204c3085c4e",cuts_out:"8fca797a-4e1c-4f8b-b0aa-1965b5e5e7db"};function W({classes:e,children:t}){return[l.a.createElement("div",{key:"space",className:e.fullFlex}),...t]}class G extends b.a{constructor(e,t){super(e,t),this.handleOrder=e=>{const{_obj:t}=this.state;t&&t.fill_by_orders([e]).then(()=>this.forceUpdate())},this.handlePlan=()=>{this.props.handleIfaceState({component:"",name:"alert",value:{open:!0,title:"Заполнить по плану",text:"Сервис планирования не подключен"}})},this.handleFillCutting=e=>{const{_obj:t}=this.state;t&&t.fill_cutting(e).then(()=>this.forceUpdate())},this.handleOptimize=(e={})=>{const{_obj:t}=this.state;e.onStep=this.handleOnStep,this.setState({statuses:[],run:!0}),t&&t.optimize(e).then(()=>this.setState({run:!1}))},this.handleOnStep=e=>{const{nom:t,characteristic:a}=e.cut_row,n=$p.utils._clone(this.state.statuses);let l;n.some(e=>{if(e.nom===t&&e.characteristic===a)return l=e,!0})||(l={nom:t,characteristic:a},n.push(l)),Object.assign(l,e),this.setState({statuses:n})},Object.assign(this.state,{index:0,schemas_ready:"object"===typeof J.planning,statuses:[],run:!1})}componentDidMount(){const{_mgr:e,match:t}=this.props;if(e.get(t.params.ref,"promise").then(e=>(this.setState({_obj:e},()=>this.shouldComponentUpdate(this.props)),e.load_production())).then(e=>e.length&&this.forceUpdate()),e.on("update",this.onDataChange),!this.state.schemas_ready){const{scheme_settings:e}=$p.cat,{adapter:t}=e;t.load_array(e,Object.keys(J).map(e=>J[e]),!1,t.local.templates).then(()=>{for(const t in J)J[t]=e.get(J[t]);this.setState({schemas_ready:!0})})}}renderFields(e,t){return l.a.createElement(d.a,{key:"props",className:t.spaceLeft},l.a.createElement(d.a,{row:!0},l.a.createElement(k.a,{_obj:e,_fld:"number_doc"}),l.a.createElement(k.a,{_obj:e,_fld:"date"}),l.a.createElement(k.a,{_obj:e,_fld:"responsible"})),l.a.createElement(d.a,{row:!0},l.a.createElement(k.a,{_obj:e,_fld:"key"}),l.a.createElement(k.a,{_obj:e,_fld:"recipient"}),l.a.createElement(k.a,{_obj:e,_fld:"biz_cuts"})),l.a.createElement(k.a,{_obj:e,_fld:"note",fullWidth:!0}))}render(){const{props:{_mgr:e,classes:t,height:a},state:{_obj:n,_meta:s,index:r,schemas_ready:d,run:u,statuses:p},_handlers:E}=this,b=Object.assign({posted:n&&n.posted,deleted:n&&n.deleted,postable:!(!s.posted&&!e.metadata("posted")),deletable:!1},E),k=a-48;return n?[l.a.createElement(o.a,{key:"helmet",title:"Задание на производство"},l.a.createElement("meta",{name:"description",content:"Раскрой, потребность в материалах, файлы для станков"})),l.a.createElement(c.a,{key:"tabs",value:r,onChange:(e,t)=>this.setState({index:t})},l.a.createElement(i.a,{label:"Шапка"}),l.a.createElement(i.a,{label:"План"}),l.a.createElement(i.a,{label:"Материалы"}),l.a.createElement(i.a,{label:"Обрезь вход"}),l.a.createElement(i.a,{label:"Раскрой"}),l.a.createElement(i.a,{label:"Обрезь выход"}),l.a.createElement(W,{classes:t},l.a.createElement(L,{key:"fprint",_obj:n}),l.a.createElement(h.a,{key:"fclose",title:"Закрыть форму",onClick:E.handleClose},l.a.createElement(_.a,null)))),0===r&&l.a.createElement(v.a,Object.assign({key:"toolbar"},b)),0===r&&this.renderFields(n,t),0!==r&&!d&&l.a.createElement(g.a,null),1===r&&d&&l.a.createElement(C.a,{key:"planning",_obj:n,_tabular:"planning",minHeight:k,scheme:J.planning,denyReorder:!0,btns:[l.a.createElement(h.a,{key:"a_sep1",disabled:!0},"|"),l.a.createElement(j.a,{key:"a_ord",handleSelect:this.handleOrder}),l.a.createElement(h.a,{key:"a_plan",title:"Заполнить по плану",onClick:this.handlePlan},l.a.createElement(m.a,null))]}),2===r&&d&&l.a.createElement(C.a,{key:"demand",_obj:n,_tabular:"demand",minHeight:k,scheme:J.demand,denyReorder:!0}),3===r&&d&&l.a.createElement(C.a,{key:"cuts_in",_obj:n,_tabular:"cuts",minHeight:k,scheme:J.cuts_in,denyReorder:!0}),4===r&&d&&l.a.createElement(C.a,{key:"cutting",_obj:n,_tabular:"cutting",minHeight:k,scheme:J.cutting,denyReorder:!0,btns:[l.a.createElement(h.a,{key:"a_sep1",disabled:!0},"|"),l.a.createElement(M,{key:"a_fill_cut",handleFillCutting:this.handleFillCutting}),l.a.createElement(h.a,{key:"a_run",title:"Оптимизировать раскрой",onClick:this.handleOptimize},l.a.createElement(f.a,null))]}),5===r&&d&&l.a.createElement(C.a,{key:"cuts_out",_obj:n,_tabular:"cuts",minHeight:k,scheme:J.cuts_out,denyReorder:!0}),u&&l.a.createElement(I,{key:"statuses",statuses:p})]:l.a.createElement(g.a,null)}}G.propTypes={_mgr:r.a.object,_acl:r.a.string,_meta:r.a.object,read_only:r.a.object,handlers:r.a.object.isRequired},G.rname="FrmObj";t.default=Object(y.a)(Object(w.withIface)(G))},585:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(0),l=a.n(n),s=a(521),r=a(329),c=a(74);function i(e){const{rows:t,workpieces:a,products_len:n,workpieces_len:l,scraps_percent:s,scraps_len:r,userData:{usefulscrap:c}}=e;return`${(n/1e3).toFixed(1)}м, ${t.length}шт, Заготовок: ${(l/1e3).toFixed(1)}м, ${a.length}шт, Обрезь: ${(r/1e3).toFixed(1)}м, ${a.reduce((e,t)=>t>c?e+1:e,0)}шт, Отходы: ${((l-n-r)/1e3).toFixed(1)}м, ${s.toFixed(1)}%`}class o extends n.Component{render(){const{status:e,classes:t}=this.props,a=100*e.progress,n=a+6*Math.random();return l.a.createElement("div",{className:t.bottom},l.a.createElement(s.a,{primary:`${e.nom.name}${e.characteristic.empty()?"":" "+e.characteristic.name}`}),l.a.createElement(r.a,{color:"secondary",variant:"buffer",value:a,valueBuffer:n}),l.a.createElement(s.a,{secondary:i(e),className:t.noPadding}))}}t.a=Object(c.a)(e=>({bottom:{marginBottom:e.spacing(2)},noPadding:{padding:0}}))(o)},632:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(160),r=a(633),c=a.n(r),i=a(85),o=a(603);class d extends n.Component{constructor(e,t){super(e,t),this.handleTouchTap=e=>{e.preventDefault(),this.setState({open:!0})},this.handleRequestClose=()=>{this.setState({open:!1})},this.handleSelect=(e,t)=>{this.handleRequestClose(),this.props.handleSelect(e,t)},this.find_rows=e=>{const{remote:t,props:a}=$p.adapters.pouch,{username:n,password:l}=t.doc.__opts.auth;e.sort=[{date:"desc"}];const s=new Headers;s.append("Authorization","Basic "+btoa(unescape(encodeURIComponent(n+":"+l)))),s.append("suffix",a._suffix||"0");const r={method:"post",credentials:"include",headers:s,body:JSON.stringify(e)};return fetch("/r/_find",r).then(e=>e.status<=201?e.json():e.text().then(t=>{throw new Error(`${e.statusText}: ${t}`)})).then(e=>(e.docs.forEach(e=>{e.ref=e._id.split("|")[1],delete e._id}),e))},this.state={open:!1}}render(){const{handleSelect:e,props:t,state:a}=this;return l.a.createElement("div",null,l.a.createElement(s.a,{title:"Добавить из заказа",onClick:this.handleTouchTap},l.a.createElement(c.a,null)),a.open&&l.a.createElement(i.a,{open:!0,noSpace:!0,large:!0,title:"Добавить из заказа",onClose:this.handleRequestClose},l.a.createElement(o.a,{height:480,_mgr:$p.doc.calc_order,_acl:t._acl,handlers:{handleSelect:e},selectionMode:!0,denyAddDel:!0,show_search:!0})))}}t.a=d},633:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),s=(0,n(a(13)).default)(l.default.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work");t.default=s},636:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(1),r=a.n(s),c=a(46),i=a(528),o=a(529),d=a(527),h=a(526),u=a(74);var m=Object(u.a)(e=>({root:{width:"80vw",marginLeft:"auto",marginRight:"auto","@media print":{width:"190mm",backgroundColor:e.palette.common.white},"& td":{padding:e.spacing()/2,border:"1px solid rgba(224, 224, 224, 1)"}},row:{height:"inherit"},nom:{marginTop:e.spacing(2)},data:{marginBottom:e.spacing(2)},canvas:{width:"100%"}})),p=a(585);function f({_obj:e,classes:t}){const a=new Set;return e.planning.forEach(({obj:e})=>a.add(e.calc_order)),l.a.createElement("div",null,l.a.createElement(c.a,{variant:"headline"},e.presentation),l.a.createElement(i.a,{classes:{cell:t.cell}},l.a.createElement(o.a,null,l.a.createElement(h.a,{className:t.row},l.a.createElement(d.a,null,l.a.createElement(c.a,{variant:"subtitle1"},"Участок")),l.a.createElement(d.a,null,e.key.presentation),l.a.createElement(d.a,null,l.a.createElement(c.a,{variant:"subtitle1"},"Получатель")),l.a.createElement(d.a,null,e.recipient.presentation)),l.a.createElement(h.a,{className:t.row},l.a.createElement(d.a,null,l.a.createElement(c.a,{variant:"subtitle1"},"Заказы")),l.a.createElement(d.a,{colSpan:3},Array.from(a).map(e=>e.number_doc).sort().join(", "))))))}function E({_obj:e,classes:t}){const a=[],{debit_credit_kinds:n}=$p.enm;return e.fragments().forEach((s,r)=>{for(const[i]of s){const s=e.cutting.find_rows({nom:r,characteristic:i}),o=e.cuts.find_rows({record_kind:n.credit,nom:r,characteristic:i}),d=e.cuts.find_rows({record_kind:n.debit,nom:r,characteristic:i}),h=s.reduce((e,t)=>e+t.len,0),u=o.reduce((e,t)=>e+t.len,0),m=d.reduce((e,t)=>e+t.len,0),f=r.knifewidth||7,E=o.map(({len:e,stick:t})=>(s.forEach(a=>{t===a.stick&&(e-=a.len+f)}),e>0?e:0)),_=100*(u-h-m-s.length*f)/u,g={rows:s,cuts_in:o,workpieces:E,products_len:h,workpieces_len:u,scraps_len:m,scraps_percent:_>0?_:0,userData:{usefulscrap:600,knifewidth:f}};a.push(l.a.createElement("div",{key:`${r.ref}-${i.ref}`,className:t.nom},l.a.createElement(c.a,{variant:"h6"},r.name+(i.empty()?"":" "+i.name)),l.a.createElement(c.a,{variant:"subtitle1"},Object(p.b)(g)),l.a.createElement(b,{classes:t,status:g})))}}),a}class _ extends paper.Project{redraw({userData:e,cuts_in:t,rows:a}){this.clear();let n=88;for(let l=0;l<t.length;l++){const s=t[l],r=s.len,c=Math.round(114.4)*l;new paper.Path({segments:[[0,c],[0+r,c],[0+r,c+n],[0,c+n]],strokeColor:"grey",strokeScaling:!1,strokeWidth:1,closed:!0});const i=[];a.forEach(({stick:e,len:t})=>{e===s.stick&&i.push(t)}),i.sort((e,t)=>t-e),i.reduce((t,a)=>(new paper.Path({segments:[[0+t+44,c+4],[0+t+a-44,c+4],[0+t+a,c+n-4],[0+t,c+n-4]],fillColor:new paper.Color(.1*Math.random()+.7,.2*Math.random()+.8,.1*Math.random()+.88),closed:!0}),new paper.PointText({point:[0+t+a/2,c+24+44],content:a,fillColor:"black",justification:"center",fontSize:72}),t+a+e.knifewidth),0)}this.zoom_fit(),this.view.update()}zoom_fit(){var e=this.activeLayer&&this.activeLayer.strokeBounds;e&&e.height&&e.width&&(this.view.zoom=Math.min((this.view.viewSize.height-8)/e.height,(this.view.viewSize.width-8)/e.width),this.view.center=e.center)}}function b({status:e,classes:t}){return l.a.createElement("canvas",{className:t.canvas,ref:t=>{if(t){t.height=27*e.cuts_in.length*t.width/1530,new _(t).redraw(e)}}})}E.propTypes={_obj:r.a.object.isRequired,classes:r.a.object.isRequired};t.a=m((function({hide_head:e,...t}){return l.a.createElement("div",{className:t.classes.root},!e&&l.a.createElement(f,Object.assign({key:"head"},t)),l.a.createElement("div",{className:t.classes.data,key:"table"},l.a.createElement(E,t)))}))},986:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),s=(0,n(a(13)).default)(l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"}),l.default.createElement("path",{fillOpacity:".36",d:"M0 20h24v4H0z"})),"FormatColorFill");t.default=s},987:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),s=(0,n(a(13)).default)(l.default.createElement("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event");t.default=s},988:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),s=(0,n(a(13)).default)(l.default.createElement("path",{d:"M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}),"RotateRight");t.default=s}}]);
//# sourceMappingURL=12.1402a7b7.chunk.js.map