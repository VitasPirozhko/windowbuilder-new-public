(this.webpackJsonpwindowbuilder=this.webpackJsonpwindowbuilder||[]).push([[28,44],{1026:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(159),l=a(158),o=a(206),i=a(751),h=a(20);class c extends n.Component{constructor(e,t){super(e,t),this.handleMenuOpen=e=>{this.setState({menuOpen:!0,anchorEl:e.currentTarget},()=>this._report&&this._report.forceUpdate())},this.handleMenuClose=()=>{this.setState({menuOpen:!1},()=>this._report&&this._report.forceUpdate())},this.handleList=()=>{const{ref:e,state:t}=this.calcOrders(!0);e&&t?this.props.handleNavigate(`/?ref=${e}&state_filter=${t}`):this.props.handleNavigate("/")},this.handleObj=()=>{const{ref:e}=this.calcOrders(!0);this.props.handleNavigate("/doc.calc_order/"+(e||"list"))},this.ToolbarExt=()=>{const{state:e}=this,t=this.calcOrders();return[s.a.createElement(r.a,{key:"go",size:"small",onClick:this.handleMenuOpen,style:{alignSelf:"center"}},t||"Перейти"),s.a.createElement(l.a,{key:"menu",anchorEl:e.anchorEl,open:e.menuOpen,onClose:this.handleMenuClose},s.a.createElement(o.a,{onClick:this.handleObj},"В форму заказа"),s.a.createElement(o.a,{onClick:this.handleList},"В форму списка заказов"))]};const{_mgr:a,_obj:n}=e;this._obj=n||a.create(),this.state={anchorEl:void 0,menuOpen:!1}}componentDidMount(){const{location:e}=this.props,t=e&&e.search.replace(/\?/g,"");/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/.test(t)&&this._obj.fill_by_order({_id:"doc.calc_order|"+t}).then(()=>{this._report&&this._report.forceUpdate()}).catch(()=>null)}calcOrders(e){let t=e?{}:"";return this._obj.production.forEach(({characteristic:{calc_order:a}})=>{if(!a.empty()){if(e)return t.ref=a.ref,t.state=a.state,!1;-1==t.indexOf(a.number_doc)&&(t&&(t+=", "),t+=a.number_doc)}}),t}render(){const{props:e,_obj:t}=this;return s.a.createElement(i.default,Object.assign({ref:e=>this._report=e},e,{_obj:t,ToolbarExt:this.ToolbarExt}))}}c.rname="RepMaterialsDemand",t.default=Object(h.withIface)(c)},751:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(1),l=a.n(r),o=a(552),i=a(210),h=a(447),c=a(46),d=a(160),p=a(159),m=a(158),u=a(206),_=a(215),g=a.n(_),b=a(545),E=a.n(b),w=a(602),f=a.n(w),S=a(220),C=a.n(S),x=a(628),j=a.n(x),O=a(606),y=a(604),R=a(607),v=a(86);class k extends n.Component{constructor(e,t){super(e,t),this.handleChange=()=>{this.props.handleSchemeChange(this.props.scheme)},this.state={anchorEl:void 0,menuOpen:!1},O.b.call(this)}render(){const{props:e,state:t,handleChange:a}=this,{handleSave:n,handleClose:r,handlePrint:l,_obj:o,_tabular:i,classes:_,scheme:b,settings_open:w,ToolbarExt:S}=e;return s.a.createElement(h.a,{disableGutters:!0,className:_.toolbar},s.a.createElement(p.a,{size:"small",onClick:n,disabled:w},s.a.createElement("i",{className:"fa fa-play fa-fw"})," Сформировать"),!b.standard_period.empty()&&s.a.createElement(d.a,{disabled:!0},"|"),!b.standard_period.empty()&&s.a.createElement(R.a,{_obj:b,_fld:"date",_meta:{synonym:"Период"},classes:_,handleChange:a}),S&&s.a.createElement(S,null),s.a.createElement(c.a,{color:"inherit",className:_.flex}," "),s.a.createElement(y.a,{handleSettingsOpen:e.handleSettingsOpen,handleSettingsClose:e.handleSettingsClose,handleSchemeChange:e.handleSchemeChange,settings_open:w,classes:_,scheme:b,show_variants:!0}),s.a.createElement(d.a,{onClick:this.handleMenuOpen,title:"Дополнительно"},s.a.createElement(g.a,null)),s.a.createElement(m.a,{anchorEl:t.anchorEl,open:t.menuOpen,onClose:this.handleMenuClose},s.a.createElement(u.a,{disabled:!0,onClick:l},s.a.createElement(E.a,null),"  Печать"),s.a.createElement(u.a,{onClick:this.handleExportCSV},s.a.createElement(f.a,null),"  Копировать CSV"),s.a.createElement(u.a,{onClick:this.handleExportJSON},s.a.createElement(C.a,null),"  Копировать JSON"),s.a.createElement(u.a,{onClick:this.handleExportXLS},s.a.createElement(j.a,null),"  Экспорт в XLS")))}}k.propTypes={};var D=Object(v.a)(k),T=a(582),N=a.n(T);class P extends n.Component{constructor(e,t){super(e,t),this.getRows=e=>this.state.rows[e],this.onRowExpandToggle=e=>{const t=Object.assign({},this.state.expanded);t[e.columnGroupName]=Object.assign({},t[e.columnGroupName]),t[e.columnGroupName][e.row]={isExpanded:e.shouldExpand},this.setState({expanded:t})},this.onCellExpand=e=>{let t=this.state.rows.slice(0),a=e.rowData.row,n=t.indexOf(e.rowData),s=e.expandArgs.children,r=Object.assign({},this.state.expanded);r&&!r[a]?(r[a]=!0,this.updateSubRowDetails(s,e.rowData.treeDepth),t.splice(n+1,0,...s)):r[a]&&(r[a]=!1,t.splice(n+1,s.length)),this.setState({expanded:r,rows:t})},this.getSubRowDetails=e=>{const{_columns:t}=this.props,{key:a}=t[0];let n=!!this.state.expanded[e.row]&&this.state.expanded[e.row];return{group:e.children&&e.children.length>0,expanded:n,children:e.children,field:a,treeDepth:e.treeDepth||0,siblingIndex:e.siblingIndex,numberSiblings:e.numberSiblings}},this.RowRenderer=({renderBaseRow:e,...t})=>{let a;const{scheme:n}=this.props;return n.conditional_appearance.find_rows({use:!0},n=>{if(n.check(t.row)){try{a=s.a.createElement("div",{style:JSON.parse(n.css)},e(t))}catch(e){}return!1}}),a||e(t)},this.updateSubRowDetails=(e,t)=>{let a=t||0;e.forEach((t,n)=>{t.treeDepth=a+1,t.siblingIndex=n,t.numberSiblings=e.length,t.children&&this.updateSubRowDetails(t.children,t.treeDepth)})};const{_obj:a,_tabular:n,_meta:r}=e;this.state={_meta:r||a._metadata(n),rows:[],expanded:{}}}shouldComponentUpdate({scheme:e}){if(e!==this.props.scheme){const{_obj:e,_tabular:t}=this.props,a=e[t];a&&a.count()&&(a._rows&&(a._rows.length=a._rows._count=0),a.clear()),this.state.rows.length=0,this.state.expanded={}}return!0}expandRoot(){const{_obj:e,_tabular:t,scheme:a}=this.props,n=a.dims(),s=e[t]._rows||[];if(s.length&&n.length){const e=s.slice(0),t=s[0].children;e.splice(1,0,...t),this.updateSubRowDetails(t,1),this.setState({expanded:{0:!0},rows:e})}else this.setState({expanded:{},rows:s})}expandAll(e=0){const t=this.props.scheme.dims(),{expanded:a,rows:n}=this.state;if(n.length&&t.length){const e=n.slice(0);n.slice(0).forEach((t,n)=>{if(t._level||!t.children||a[t.row])return;const s=t.children;e.splice(e.indexOf(t)+1,0,...s),this.updateSubRowDetails(s,1),a[t.row]=!0}),this.setState({expanded:a,rows:e})}}render(){const{props:e,state:t,RowRenderer:a}=this,{_columns:n,minHeight:r,hideHeader:l}=e;return s.a.createElement(N.a,{columns:n,enableCellSelect:!0,rowGetter:this.getRows,rowsCount:t.rows.length,getSubRowDetails:this.getSubRowDetails,onCellExpand:this.onCellExpand,minHeight:r||220,rowHeight:33,headerRowHeight:l?1:33,rowRenderer:a})}}P.propTypes={};var H=a(572),M=a(218),G=a(20);class I extends o.a{constructor(e,t){super(e,t),this.handleSave=()=>{const{_obj:e,scheme:t}=this.state;return t&&!t.empty()?(e.scheme!==t&&(e.scheme=t),e.calculate().then(()=>this._result.expandRoot())):Promise.reject(new Error("Пустая схема компоновки"))},this.handlePrint=()=>{},this.handleClose=()=>{},this.handleSettingsOpen=()=>{this.setState({settings_open:!0})},this.handleSettingsClose=()=>{this.setState({settings_open:!1})},this.handleSchemeChange=e=>{const{props:t,state:{_obj:a,_meta:n}}=this,{handleSchemeChange:s,handleColumns:r,read_only:l}=t,o=e.rx_columns({mode:"ts",fields:n.fields,_obj:a,read_only:l});r&&r(o),s&&s(this,e),this.setState({scheme:e,_columns:o},()=>this.shouldComponentUpdate(t))};const{_mgr:a,_meta:n,_obj:s}=e,r=e._tabular||a._tabular||"data";this.state={_obj:s||a.create(),_meta:n||a.metadata(r),_tabular:r,settings_open:!1},(e.scheme?Promise.resolve(e.scheme):$p.cat.scheme_settings.get_scheme(a.class_name+"."+r)).then(this.handleSchemeChange).then(()=>{e.autoexec&&Promise.resolve().then(()=>this.handleSave())}),e.registerRep&&e.registerRep(this)}get ltitle(){const{_mgr:e}=this.props,{scheme:t}=this.state;return e.metadata().synonym+(t&&t.name?` (${t.name})`:"")}render(){const{props:e,state:t}=this,{_obj:a,_columns:n,_tabular:r,scheme:l,settings_open:o}=t,{RepParams:h}=a._manager;if(!l)return s.a.createElement(i.a,{text:"Чтение настроек компоновки..."});if(!a)return s.a.createElement(i.a,{text:"Чтение объекта данных..."});if(!n||!n.length)return s.a.createElement(i.a,{text:"Ошибка настроек компоновки..."});const c=e.height||e.minHeight||500,d=!o||c>572;return[!e.ignoreTitle&&s.a.createElement(M.a,{key:"helmet",title:e.title},s.a.createElement("meta",{name:"description",content:"Отчет"}),s.a.createElement("meta",{property:"og:title",content:e.title}),s.a.createElement("meta",{property:"og:description",content:"Отчет"})),!e.hideToolbar&&s.a.createElement(D,{key:"toolbar",_obj:a,_tabular:r,_columns:n,scheme:l,settings_open:o,ToolbarExt:e.ToolbarExt,handleSettingsOpen:this.handleSettingsOpen,handleSettingsClose:this.handleSettingsClose,handleSchemeChange:this.handleSchemeChange,handleSave:this.handleSave,handlePrint:this.handlePrint,handleClose:this.handleClose}),o&&s.a.createElement(H.a,{key:"tabs",height:d?272:c-104,width:e.width,scheme:l,tabParams:h&&s.a.createElement(h,{_obj:a,scheme:l}),handleSchemeChange:this.handleSchemeChange}),d&&s.a.createElement(P,{key:"tabular",ref:e=>this._result=e,_obj:a,_tabular:r,_columns:n,scheme:l,minHeight:c-52-(o?320:0),hideHeader:e.hideHeader})]}}I.propTypes={_mgr:l.a.object.isRequired,_obj:l.a.object,_meta:l.a.object,_tabular:l.a.string,_acl:l.a.string,read_only:l.a.bool,autoexec:l.a.bool,ignoreTitle:l.a.bool,handlePrint:l.a.func,handleSchemeChange:l.a.func,handleColumns:l.a.func,registerRep:l.a.func,ToolbarExt:l.a.func};var J=Object(G.withIface)(I);t.default=J}}]);
//# sourceMappingURL=28.2887a795.chunk.js.map