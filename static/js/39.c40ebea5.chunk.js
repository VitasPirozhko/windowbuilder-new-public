(this.webpackJsonpwindowbuilder=this.webpackJsonpwindowbuilder||[]).push([[39],{1018:function(e,t,n){"use strict";n.r(t);var s=n(0),l=n.n(s),o=n(232),r=n(130),a=n(20),c=n(99);class i extends o.a{componentDidMount(){let{location:e,state_filter:t,handleIfaceState:n}=this.props;const s=$p.job_prm.parse_url_str(e.search);s.state_filter&&s.state_filter!=t?t=s.state_filter:t||(t="draft"),Object(c.c)(t,n),super.componentDidMount();const{cell:l,handlers:o}=this;$p.doc.calc_order.form_list(l,null,o)}componentWillUnmount(){const{cell:e}=this;e&&e.close&&e.close(),super.componentWillUnmount()}render(){const{dialog:e}=this.props,t=e&&e.Component;return[l.a.createElement("div",{key:"el",ref:e=>this.el=e}),t&&l.a.createElement(t,{key:"dialog",handlers:this.handlers,dialog:e,owner:this})]}}i.rname="CalcOrderList",t.default=Object(r.a)(Object(a.withIface)(i))}}]);
//# sourceMappingURL=39.c40ebea5.chunk.js.map