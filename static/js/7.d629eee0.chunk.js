(this["webpackJsonpwindowbuilder-new"]=this["webpackJsonpwindowbuilder-new"]||[]).push([[7],{561:function(e,t,a){"use strict";var n=a(6),l=a(9),r=a(8),s=a(7),o=a(0),i=a.n(o),c=(a(1),a(168)),h=a(219),d=a(170),u=a(540),m=a(562),p=a.n(m),f=a(563),_=a.n(f),g=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={anchorEl:null},e.handleOpen=function(t){e.setState({anchorEl:t.currentTarget})},e.handleClose=function(){e.setState({anchorEl:null})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.items,n=t.Icon,l=t.text,r=t.handlePrint,s=t.prefix,o=t.variant,m=this.state.anchorEl;return["button"===o?i.a.createElement(d.a,{key:"btn_open",onClick:this.handleOpen},i.a.createElement(n,null)):i.a.createElement(h.a,{key:"".concat(s,"_open"),onClick:this.handleOpen},n&&i.a.createElement(u.a,null,i.a.createElement(n,null)),l),i.a.createElement(c.a,{key:"".concat(s,"_menu"),open:Boolean(m),anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:this.handleClose},m&&a.map((function(t){return i.a.createElement(h.a,{key:t.ref,onClick:function(){r(t),e.handleClose()}},t.name)})))]}}]),a}(i.a.Component),v=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={anchorEl:null,plates:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.scheme.child_meta()._mgr;t&&t.printing_plates().then((function(t){var a=new Map;for(var n in t){var l=t[n],r=l.name.includes("/")?l.name.substr(0,l.name.indexOf("/")).trim():"\u041e\u0431\u0449\u0435\u0435";a.get(r)||a.set(r,[]),a.get(r).push(l)}t=[],a.forEach((function(e,a){return t.push({name:a,value:e})})),e.setState({plates:t})}))}},{key:"render",value:function(){var e=this.props,t=e.handlePrint,a=e.variant,n=this.state,l=n.anchorEl,r=n.plates;return 1===r.length?i.a.createElement(g,{items:r[0].value,Icon:p.a,text:"\u041f\u0435\u0447\u0430\u0442\u044c",handlePrint:t,prefix:"root",variant:a}):["button"===a?i.a.createElement(d.a,{key:"btn_open",onClick:this.handleOpen},i.a.createElement(p.a,null)):i.a.createElement(h.a,{key:"prn_open",onClick:this.handleOpen},i.a.createElement(u.a,null,i.a.createElement(p.a,null)),"\u041f\u0435\u0447\u0430\u0442\u044c"),i.a.createElement(c.a,{key:"prn_menu",open:Boolean(l),anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:this.handleClose},l&&r.map((function(e,a){return i.a.createElement(g,{key:"prn_".concat(a),items:e.value,Icon:_.a,text:e.name,handlePrint:t,prefix:"prn_".concat(a)})})))]}}]),a}(g);v.propTypes={},t.a=v},563:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=(0,n(a(18)).default)(l.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=r},564:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=(0,n(a(18)).default)(l.default.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");t.default=r},577:function(e,t,a){"use strict";var n=a(6),l=a(9),r=a(26),s=a(8),o=a(7),i=a(0),c=a.n(i),h=(a(1),a(464)),d=a(170),u=a(169),m=a(168),p=a(219),f=a(540),_=a(232),g=a.n(_),v=a(571),b=a.n(v),E=a(243),C=a.n(E),y=a(227),k=a.n(y),O=a(564),w=a.n(O),S=a(230),j=a.n(S),x=a(580),A=a.n(x),M=a(579),P=a.n(M),R=a(578),z=a(570),I=a(584),T=a(43),F=(a(11),a(93)),H=a(492),V=a(561),D=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={anchorEl:void 0,open:!1},e.handleClick=function(t){e.setState({open:!0,anchorEl:t.currentTarget})},e.handleRequestClose=function(){e.setState({open:!1})},e.handleSettingsToggle=function(){var t=Object(r.a)(e).props;t.settings_open?t.handleSettingsClose():t.handleSettingsOpen(),e.handleRequestClose()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=this.state,a=e.classes,n=e.scheme,l=e.width,r=e.btns,s=e.end_btns,o=e.menu_items,i=e.toolbar2row,_=e.flat,v=e.show_flat,E=e.setting_in_menu,y=Object(H.c)("sm",l);return[c.a.createElement(h.a,{key:"toolbar1",disableGutters:!0,className:a.toolbar},e.selectionMode&&c.a.createElement(u.a,{key:"select",title:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430",size:"small",variant:"outlined",className:a.spaceLeft,onClick:e.handleSelect},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"),!e.denyAddDel&&c.a.createElement(d.a,{key:"create",title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442",onClick:e.handleAdd},c.a.createElement(g.a,null)),c.a.createElement(d.a,{key:"edit",title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430",onClick:e.handleEdit},c.a.createElement(C.a,null)),!e.denyAddDel&&!e.denyDel&&c.a.createElement(d.a,{key:"del",title:"\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435",onClick:e.handleRemove},c.a.createElement(b.a,null)),v&&c.a.createElement(d.a,{key:"flat",title:_?"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044e":"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043b\u043e\u0441\u043a\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",onClick:e.flatChange},_?c.a.createElement(P.a,null):c.a.createElement(A.a,null)),!n.standard_period.empty()&&y&&c.a.createElement(d.a,{disabled:!0},"|"),!n.standard_period.empty()&&y&&c.a.createElement(I.a,{_obj:n,_fld:"date",_meta:{synonym:"\u041f\u0435\u0440\u0438\u043e\u0434"},classes:a,handleChange:e.handleFilterChange}),(!i||y)&&r,c.a.createElement("div",{className:a.flex}),c.a.createElement(R.a,{handleSettingsOpen:e.handleSettingsOpen,handleSettingsClose:e.handleSettingsClose,handleSchemeChange:e.handleSchemeChange,handleFilterChange:e.handleFilterChange,settings_open:e.settings_open,classes:a,scheme:n,show_search:e.show_search&&(!i||y),show_variants:e.show_variants,hide_btn:!y||E}),(!i||y)&&s,c.a.createElement(d.a,{onClick:this.handleClick,title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},c.a.createElement(k.a,null)),c.a.createElement(m.a,{anchorEl:t.anchorEl,open:t.open,onClose:this.handleRequestClose},(!y||E)&&c.a.createElement(p.a,{onClick:this.handleSettingsToggle},c.a.createElement(f.a,null,c.a.createElement(j.a,null)),"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),e.handlePrint&&c.a.createElement(V.a,{scheme:n,handlePrint:e.handlePrint}),e.handleAttachments&&c.a.createElement(p.a,{onClick:e.handleAttachments},c.a.createElement(f.a,null,c.a.createElement(w.a,null)),"\u0412\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),o)),i&&!y&&c.a.createElement(h.a,{key:"toolbar2",disableGutters:!0,className:a.toolbar},r,c.a.createElement("div",{className:a.flex}),s,c.a.createElement(z.a,{scheme:n,handleFilterChange:e.handleFilterChange,isWidthUp:y}))]}}]),a}(i.Component);D.propTypes={},D.defaultProps={show_search:!0},t.a=Object(T.compose)(F.a,Object(H.a)())(D)},579:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=(0,n(a(18)).default)(l.default.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List");t.default=r},580:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=(0,n(a(18)).default)(l.default.createElement("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree");t.default=r},694:function(e,t,a){"use strict";a.r(t);var n=a(559),l=a(42),r=a(6),s=a(9),o=a(26),i=a(8),c=a(7),h=a(0),d=a.n(h),u=a(1),m=a.n(u),p=a(560),f=a(364),_=(a(11),a(222)),g=a(577),v=a(568),b=a(101),E=a(82),C=Object(E.a)((function(e){return{hoveredItem:{backgroundColor:"#f5f2f2"},selectedItem:{backgroundColor:"#fffbdc"}}})),y=a(25),k=a(278),O=a.n(k),w=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e,n){var l;return Object(r.a)(this,a),(l=t.call(this,e,n)).handleSelect=function(){var e=Object(o.a)(l),t=e.state.selectedRow,a=e.props,n=a.handlers,r=a._mgr;if(t){var s=l._list[t];s&&n.handleSelect&&n.handleSelect(s,r)}else l.handleInfoText("\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0430")},l.handleAdd=function(e){var t=l.props,a=t.handlers,n=t._mgr;a.handleAdd&&a.handleAdd(n,e)},l.handleSchemeChange=function(e){e.set_default(),e.set_standard_period(!0),l.handleFilterChange(e,e.columns())},l.handleFilterChange=function(e,t){var a=Object(o.a)(l),n=a.state,r=(a.props,a._list,a._mounted);e instanceof $p.CatScheme_settings||(e=n.scheme),t||(t=n.columns);var s={scheme:e,columns:t};r?l.setState(s,(function(){l._loadMoreRows()})):(Object.assign(n,s),l._loadMoreRows())},l.handlePrint=function(){var e=l._list[l.state.selectedRow],t=l.props,a=t.handlers,n=t._mgr;e&&a.handlePrint&&a.handlePrint(e,n)},l.handleAttachments=function(){var e=l._list[l.state.selectedRow],t=l.props,a=t.handlers,n=t._mgr;e&&a.handleAttachments&&a.handleAttachments(e,n)},l.handleSettingsOpen=function(){l.setState({settings_open:!0})},l.handleSettingsClose=function(){l.setState({settings_open:!1})},l.handleInfoText=function(e){"string"!==typeof e&&(e=""),l.setState({info_text:e})},l._getColumnWidth=function(e){var t=e.index,n=l.state.columns;return isNaN(parseInt(n[t].width,10))?a.COLUMN_DEFAULT_WIDTH:parseInt(n[t].width,10)},l._noContentRendered=function(){var e=l.state.no_rows;return d.a.createElement(_.a,{text:e?"\u0417\u0430\u043f\u0438\u0441\u0435\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e...":""})},l._loadMoreRows=function(){var e=Object(o.a)(l),t=e.props,a=t._mgr,n=t._owner,r=(t.find_rows,e.state),s=r.scheme;r.columns,r.ref,e._list;if(l.setState({no_rows:!1,network_error:null}),/ram$/.test(a.cachable)){var i=a.get_search_selector({_obj:n?n._obj||n.props&&n.props._obj:null,_meta:n?n._meta:{},search:s._search,top:1e3,skip:0}),c=a.find_rows(i);return Promise.resolve(c)}l.setState({network_error:"err"})},l.state={selectedRow:0,rowCount:0,settings_open:!1,no_rows:!1,ref:""},l._list=[],l.handleManagerChange(e),l}return Object(s.a)(a,[{key:"handleManagerChange",value:function(e){var t=e._mgr,a=e._meta,n=e._ref,l=t.class_name;this._meta=a||t.metadata();var r={ref:n||""};this._mounted?this.setState(r):Object.assign(this.state,r),$p.cat.scheme_settings.get_scheme(l).then(this.handleSchemeChange)}},{key:"render",value:function(){var e=this,t=this.state,a=this.props,r=(this.context,this._meta),s=this.sizes,o=(this._list,t.columns),i=t.scheme,c=t.confirm_text,h=t.info_text,u=t.settings_open,m=(t.rowCount,a._mgr.RepParams),p=(a.classes,a.title,a.registerFilterChange),E=(a.width,a.height,Object(l.a)(a,["_mgr","classes","title","registerFilterChange","width","height"]));if(!i)return d.a.createElement(_.a,{text:"\u0427\u0442\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438..."});if(!o||!o.length)return d.a.createElement(_.a,{text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438..."});p&&p(this.handleFilterChange);var C=!u||s.height>572,y=Object(n.a)(Object(n.a)({key:"toolbar",scheme:i},E),{},{settings_open:u,handleSelect:this.handleSelect,handleAdd:this.handleAdd,handlePrint:this.handlePrint,handleAttachments:this.handleAttachments,handleSettingsOpen:this.handleSettingsOpen,handleSettingsClose:this.handleSettingsClose,handleSchemeChange:this.handleSchemeChange,handleFilterChange:this.handleFilterChange});return[c&&d.a.createElement(b.a,{key:"confirm",title:r.synonym,text:c,handleOk:this._handleRemove,handleCancel:function(){return e.setState({confirm_text:""})},open:!0}),h&&d.a.createElement(b.a,{key:"confirm",title:r.synonym,text:h,handleOk:this.handleInfoText,handleCancel:this.handleInfoText,open:!0}),d.a.createElement(g.a,y),u&&d.a.createElement(f.a,{key:"tabs",disableHeight:!0},(function(t){var a=t.width;return d.a.createElement(v.a,{height:C?272:(s.height||500)-104,width:a,scheme:i,tabParams:m&&d.a.createElement(m,{scheme:i}),handleSchemeChange:e.handleSchemeChange})})),C&&d.a.createElement(f.a,{key:"infinite",disableHeight:!0},(function(e){e.width;return d.a.createElement("div",null,"tree")}))]}},{key:"_formatter",value:function(e,t){var a=this.state.columns[t],n=a.id,l=a.type,r=e[n];switch(O()(l,r)){case"ocombo":return this.props._mgr.value_mgr(e,n,l,!1,r).get(r).presentation;case"dhxCalendar":return $p.utils.moment(r).format($p.utils.moment._masks.date);case"calck":return r;default:return r?r.toString():""}}},{key:"sizes",get:function(){var e=this,t=this.context.dnr,a=this.props,n=a.width,l=a.height,r=this.state.columns;l||(l=t&&parseInt(t.frameRect.height)-26),(!l||l<320)&&(l=320),n||(n=t&&parseInt(t.frameRect.width)),(!n||n<480)&&(n=480);var s=r&&r.reduce((function(t,a,n){return t+e._getColumnWidth({index:n})}),0);return s>n&&(n=s),{width:n,height:l}}},{key:"ltitle",get:function(){var e=this.props._mgr;return"".concat(e.metadata().list_presentation||e.metadata().synonym," (\u0434\u0435\u0440\u0435\u0432\u043e)")}}]),a}(p.a);w.COLUMN_DEFAULT_WIDTH=220,w.propTypes={_mgr:m.a.object.isRequired,_acl:m.a.string,_meta:m.a.object,_ref:m.a.string,_owner:m.a.object,selectionMode:m.a.bool,read_only:m.a.object,denyAddDel:m.a.bool,show_search:m.a.bool,show_variants:m.a.bool,modal:m.a.bool,handlers:m.a.object.isRequired};var S=C(Object(y.withIface)(w));t.default=S}}]);
//# sourceMappingURL=7.d629eee0.chunk.js.map