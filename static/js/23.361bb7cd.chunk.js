(this.webpackJsonpwindowbuilder=this.webpackJsonpwindowbuilder||[]).push([[23],{1025:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(334),c=a(119),l=a(546),s=a(586),d=a(69),i=a(20);class m extends s.a{renderFields(){const{state:{_meta:{fields:e},_obj:t},props:{classes:a}}=this;return[r.a.createElement(o.a,{row:!0,key:"group_sys"},r.a.createElement(c.a,{_obj:t,_fld:"number_doc"}),r.a.createElement(c.a,{_obj:t,_fld:"date"})),r.a.createElement(o.a,{row:!0,key:"row1"},r.a.createElement(c.a,{_obj:t,_fld:"organization"}),r.a.createElement(c.a,{_obj:t,_fld:"partner"}),r.a.createElement(c.a,{_obj:t,_fld:"department"})),r.a.createElement(o.a,{row:!0,key:"row2",className:a.paddingBottom},Object.prototype.hasOwnProperty.call(e,"cashbox")&&r.a.createElement(c.a,{_obj:t,_fld:"cashbox"}),Object.prototype.hasOwnProperty.call(e,"bank_account")&&r.a.createElement(c.a,{_obj:t,_fld:"bank_account"}),r.a.createElement(c.a,{_obj:t,_fld:"responsible"}),r.a.createElement(c.a,{_obj:t,_fld:"doc_amount",read_only:!0}))]}renderTabularSections(){const{_obj:e}=this.state;return[r.a.createElement(o.a,{key:"rows",style:{height:300}},r.a.createElement(l.a,{_obj:e,_tabular:"payment_details"})),r.a.createElement(c.a,{key:"note",_obj:e,_fld:"note"})]}}m.rname="MoneyDoc",t.default=Object(d.a)(Object(i.withIface)(m))},545:function(e,t,a){"use strict";var n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(13)).default)(r.default.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"Print");t.default=o},552:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var n=a(1),r=a.n(n),o=a(121);class c extends o.a{shouldComponentUpdate({_mgr:e,_meta:t,title:a,handleIfaceState:n}){let r=!0;const{props:o,ltitle:c,context:l}=this;return o._mgr!==e&&this.handleManagerChange&&(this.handleManagerChange({_mgr:e,_meta:t}),r=!1),l.dnr||!c||a==c||o.ignoreTitle||(n&&n({component:"",name:"title",value:c}),r=!1),r}get sizes(){let{context:{dnr:e},props:{width:t,height:a},state:{columns:n}}=this;return a||(a=e&&parseInt(e.frameRect.height)-2),(!a||a<320)&&(a=320),t||(t=e&&parseInt(e.frameRect.width)),(!t||t<480)&&(t=480),{width:t,height:a,columnsWidth:n?n.reduce((e,t)=>e+t._width,0):t}}}c.contextTypes={dnr:r.a.object,customComponents:r.a.object}}}]);
//# sourceMappingURL=23.361bb7cd.chunk.js.map