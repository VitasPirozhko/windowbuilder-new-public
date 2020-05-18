(this.webpackJsonpwindowbuilder=this.webpackJsonpwindowbuilder||[]).push([[10],{1e3:function(t,n){t.exports=class{constructor(t,n,e,s,i,r,h,a,l,o,c,u){this.x1=t,this.y1=n,this.z1=e,this.x2=s,this.y2=i,this.z2=r,this.x3=h,this.y3=a,this.z3=l,this.x4=o,this.y4=c,this.z4=u}toDxfString(){let t="0\n3DFACE\n";return t+=`8\n${this.layer.name}\n`,t+=`10\n${this.x1}\n20\n${this.y1}\n30\n${this.z1}\n`,t+=`11\n${this.x2}\n21\n${this.y2}\n31\n${this.z2}\n`,t+=`12\n${this.x3}\n22\n${this.y3}\n32\n${this.z3}\n`,t+=`13\n${this.x4}\n23\n${this.y4}\n33\n${this.z4}\n`,t}}},1001:function(t,n){t.exports=class{constructor(t,n){this.x=t,this.y=n}toDxfString(){let t="0\nPOINT\n";return t+=`8\n${this.layer.name}\n`,t+=`10\n${this.x}\n20\n${this.y}\n30\n0\n`,t}}},1028:function(t,n,e){const s=e(992),i=e(993),r=e(994),h=e(995),a=e(996),l=e(997),o=e(998),c=e(999),u=e(1e3),y=e(1001);class d{constructor(){this.layers={},this.activeLayer=null,this.lineTypes={},this.headers={},this.setUnits("Unitless");for(let t=0;t<d.LINE_TYPES.length;++t)this.addLineType(d.LINE_TYPES[t].name,d.LINE_TYPES[t].description,d.LINE_TYPES[t].elements);for(let t=0;t<d.LAYERS.length;++t)this.addLayer(d.LAYERS[t].name,d.LAYERS[t].colorNumber,d.LAYERS[t].lineTypeName);this.setActiveLayer("0")}addLineType(t,n,e){return this.lineTypes[t]=new s(t,n,e),this}addLayer(t,n,e){return this.layers[t]=new i(t,n,e),this}setActiveLayer(t){return this.activeLayer=this.layers[t],this}drawLine(t,n,e,s){return this.activeLayer.addShape(new r(t,n,e,s)),this}drawPoint(t,n){return this.activeLayer.addShape(new y(t,n)),this}drawRect(t,n,e,s){return this.activeLayer.addShape(new r(t,n,e,n)),this.activeLayer.addShape(new r(t,s,e,s)),this.activeLayer.addShape(new r(t,n,t,s)),this.activeLayer.addShape(new r(e,n,e,s)),this}drawArc(t,n,e,s,i){return this.activeLayer.addShape(new h(t,n,e,s,i)),this}drawCircle(t,n,e){return this.activeLayer.addShape(new a(t,n,e)),this}drawText(t,n,e,s,i,r="left",h="baseline"){return this.activeLayer.addShape(new l(t,n,e,s,i,r,h)),this}drawPolyline(t){return this.activeLayer.addShape(new o(t)),this}drawPolyline3d(t){return t.forEach(t=>{if(3!==t.length)throw"Require 3D coordinate"}),this.activeLayer.addShape(new c(t)),this}setTrueColor(t){return this.activeLayer.setTrueColor(t),this}drawFace(t,n,e,s,i,r,h,a,l,o,c,y){return this.activeLayer.addShape(new u(t,n,e,s,i,r,h,a,l,o,c,y)),this}_getDxfLtypeTable(){let t="0\nTABLE\n";t+="2\nLTYPE\n";for(let n in this.lineTypes)t+=this.lineTypes[n].toDxfString();return t+="0\nENDTAB\n",t}_getDxfLayerTable(){let t="0\nTABLE\n";t+="2\nLAYER\n";for(let n in this.layers)t+=this.layers[n].toDxfString();return t+="0\nENDTAB\n",t}header(t,n){return this.headers[t]=n,this}_getHeader(t,n){let e="9\n$"+t+"\n";for(let t of n)e+=`${t[0]}\n${t[1]}\n`;return e}setUnits(t){"undefined"!=typeof d.UNITS[t]?d.UNITS[t]:d.UNITS.Unitless;return this.header("INSUNITS",[[70,d.UNITS[t]]]),this}toDxfString(){let t="";t+="0\nSECTION\n",t+="2\nHEADER\n";for(let n in this.headers)t+=this._getHeader(n,this.headers[n]);t+="0\nENDSEC\n",t+="0\nSECTION\n",t+="2\nTABLES\n",t+=this._getDxfLtypeTable(),t+=this._getDxfLayerTable(),t+="0\nENDSEC\n",t+="0\nSECTION\n",t+="2\nENTITIES\n";for(let n in this.layers){t+=this.layers[n].shapesToDxf()}return t+="0\nENDSEC\n",t+="0\nEOF",t}}d.ACI={LAYER:0,RED:1,YELLOW:2,GREEN:3,CYAN:4,BLUE:5,MAGENTA:6,WHITE:7},d.LINE_TYPES=[{name:"CONTINUOUS",description:"______",elements:[]},{name:"DASHED",description:"_ _ _ ",elements:[5,-5]},{name:"DOTTED",description:". . . ",elements:[0,-5]}],d.LAYERS=[{name:"0",colorNumber:d.ACI.WHITE,lineTypeName:"CONTINUOUS"}],d.UNITS={Unitless:0,Inches:1,Feet:2,Miles:3,Millimeters:4,Centimeters:5,Meters:6,Kilometers:7,Microinches:8,Mils:9,Yards:10,Angstroms:11,Nanometers:12,Microns:13,Decimeters:14,Decameters:15,Hectometers:16,Gigameters:17,"Astronomical units":18,"Light years":19,Parsecs:20},t.exports=d},992:function(t,n){t.exports=class{constructor(t,n,e){this.name=t,this.description=n,this.elements=e}toDxfString(){let t="0\nLTYPE\n";t+="72\n65\n",t+="70\n64\n",t+=`2\n${this.name}\n`,t+=`3\n${this.description}\n`,t+=`73\n${this.elements.length}\n`,t+=`40\n${this.getElementsSum()}\n`;for(let n=0;n<this.elements.length;++n)t+=`49\n${this.elements[n]}\n`;return t}getElementsSum(){let t=0;for(let n=0;n<this.elements.length;++n)t+=Math.abs(this.elements[n]);return t}}},993:function(t,n){t.exports=class{constructor(t,n,e){this.name=t,this.colorNumber=n,this.lineTypeName=e,this.shapes=[],this.trueColor=-1}toDxfString(){let t="0\nLAYER\n";return t+="70\n64\n",t+=`2\n${this.name}\n`,-1!==this.trueColor?t+=`420\n${this.trueColor}\n`:t+=`62\n${this.colorNumber}\n`,t+=`6\n${this.lineTypeName}\n`,t}setTrueColor(t){this.trueColor=t}addShape(t){this.shapes.push(t),t.layer=this}getShapes(){return this.shapes}shapesToDxf(){let t="";for(let n=0;n<this.shapes.length;++n)t+=this.shapes[n].toDxfString();return t}}},994:function(t,n){t.exports=class{constructor(t,n,e,s){this.x1=t,this.y1=n,this.x2=e,this.y2=s}toDxfString(){let t="0\nLINE\n";return t+=`8\n${this.layer.name}\n`,t+=`10\n${this.x1}\n20\n${this.y1}\n30\n0\n`,t+=`11\n${this.x2}\n21\n${this.y2}\n31\n0\n`,t}}},995:function(t,n){t.exports=class{constructor(t,n,e,s,i){this.x1=t,this.y1=n,this.r=e,this.startAngle=s,this.endAngle=i}toDxfString(){let t="0\nARC\n";return t+=`8\n${this.layer.name}\n`,t+=`10\n${this.x1}\n20\n${this.y1}\n30\n0\n`,t+=`40\n${this.r}\n50\n${this.startAngle}\n51\n${this.endAngle}\n`,t}}},996:function(t,n){t.exports=class{constructor(t,n,e){this.x1=t,this.y1=n,this.r=e}toDxfString(){let t="0\nCIRCLE\n";return t+=`8\n${this.layer.name}\n`,t+=`10\n${this.x1}\n20\n${this.y1}\n30\n0\n`,t+=`40\n${this.r}\n`,t}}},997:function(t,n){const e=["left","center","right"],s=["baseline","bottom","middle","top"];t.exports=class{constructor(t,n,e,s,i,r="left",h="baseline"){this.x1=t,this.y1=n,this.height=e,this.rotation=s,this.value=i,this.hAlign=r,this.vAlign=h}toDxfString(){let t="0\nTEXT\n";return t+=`8\n${this.layer.name}\n`,t+=`1\n${this.value}\n`,t+=`10\n${this.x1}\n20\n${this.y1}\n30\n0\n`,t+=`40\n${this.height}\n50\n${this.rotation}\n`,(e.includes(this.hAlign,1)||s.includes(this.vAlign,1))&&(t+=`11\n${this.x1}\n21\n${this.y1}\n31\n0\n`,t+=`72\n${Math.max(e.indexOf(this.hAlign),0)}\n`,t+=`73\n${Math.max(s.indexOf(this.vAlign),0)}\n`),t}}},998:function(t,n){t.exports=class{constructor(t){this.points=t}toDxfString(){let t="0\nPOLYLINE\n";t+=`8\n${this.layer.name}\n`,t+="66\n1\n70\n0\n";for(let n=0;n<this.points.length;++n)t+="0\nVERTEX\n",t+=`8\n${this.layer.name}\n`,t+="70\n0\n",t+=`10\n${this.points[n][0]}\n20\n${this.points[n][1]}\n`;return t+="0\nSEQEND\n",t}}},999:function(t,n){t.exports=class{constructor(t){this.points=t}toDxfString(){let t="0\nPOLYLINE\n";t+=`8\n${this.layer.name}\n`,t+="66\n1\n70\n8\n";for(let n=0;n<this.points.length;++n)t+="0\nVERTEX\n",t+=`8\n${this.layer.name}\n`,t+="70\n0\n",t+=`10\n${this.points[n][0]}\n20\n${this.points[n][1]}\n30\n${this.points[n][2]}\n`;return t+="0\nSEQEND\n",t}}}}]);
//# sourceMappingURL=10.c0a935ea.chunk.js.map