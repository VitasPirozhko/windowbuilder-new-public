(this.webpackJsonpwindowbuilder=this.webpackJsonpwindowbuilder||[]).push([[42],{1029:function(e,t,n){"use strict";function s(e,t){let n=new t;const{contours:s,bounds:o,ox:c}=e,r=e.selected_glasses(),i=o.height+o.y;let l=c.prod_name(!0).replace(/\//,"-");function a(e){const t=e.path.clone(!1);let s;t.flatten(.5),t.curves.forEach(({point1:e,point2:o},c)=>{if(s||(s=e),c==t.curves.length-1)o=t.curves[0].point1;else if(s.getDistance(o)<2)return;n.drawLine(s.x,i-s.y,o.x,i-o.y),s=o})}function f(e,s){if(n.addLayer("g_"+e.elm,t.ACI.LAYER,"CONTINUOUS"),n.setActiveLayer("g_"+e.elm),a(e),s){n.addLayer("lay_"+e.elm,t.ACI.LAYER,"CONTINUOUS"),n.setActiveLayer("lay_"+e.elm);for(const t of e.imposts)a(t)}}if(l=l.substr(0,l.indexOf("/")),r.length)f(r[0],!0),l+="-"+r[0].elm.pad(2);else{s.forEach((function e(s){const{contours:o}=s;!function(e){n.addLayer("l_"+e.cnstr,t.ACI.LAYER,"CONTINUOUS"),n.setActiveLayer("l_"+e.cnstr);for(const t of e.profiles)a(t)}(s),o.length&&o.forEach(e)}));for(const t of e.glasses)f(t,!0)}const u=new Blob([n.toDxfString().replace(/\n/g,"\r\n")],{type:"application/dxf"});$p.wsql.alasql.utils.saveAs(u,l+".dxf")}n.r(t),n.d(t,"exec_dxf",(function(){return s}))}}]);
//# sourceMappingURL=42.50687288.chunk.js.map