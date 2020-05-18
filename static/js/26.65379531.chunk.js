(this.webpackJsonpwindowbuilder=this.webpackJsonpwindowbuilder||[]).push([[26],{1023:function(t,e,n){const i=n(982),r=n(983);t.exports=class{constructor(t){this.engine=new r,this.genetic=i.create(),this.genetic.optimize=i.Optimize.Minimize,this.genetic.select1=i.Select1.Tournament2,this.genetic.select2=i.Select2.Tournament2;for(const t of["seed","mutate","crossover","fitness","generation"])this.genetic[t]=this.engine[t]}evolve(t,e){return this.engine.evolve(this.genetic,t,e)}}},982:function(module,exports,__webpack_require__){var Genetic=Genetic||function(){"use strict";var Serialization={stringify:function(t){return JSON.stringify(t,(function(t,e){return e instanceof Function||"function"==typeof e?"__func__:"+e.toString():e instanceof RegExp?"__regex__:"+e:"object"==typeof e&&"function"==typeof e.constructor.from?"__"+e.constructor.name+"__:"+e.join():e}))},parse:function(str){return JSON.parse(str,(function(key,value){if("string"!=typeof value)return value;if(0===value.lastIndexOf("__func__:",0))return eval("("+value.slice(9)+")");if(0===value.lastIndexOf("__regex__:",0))return eval("("+value.slice(10)+")");if(-1!=value.indexOf("Array__:")){var akey=value.split("__:");return eval(akey[0].substr(2)+".from(["+akey[1]+"])")}return value}))}},Clone=function(t){return null==t||"object"!=typeof t?t:"function"==typeof t.constructor.from?t.constructor.from(t):JSON.parse(JSON.stringify(t))},Optimize={Maximize:function(t,e){return t>=e},Minimize:function(t,e){return t<e}},Select1={Tournament2:function(t){var e=t.length,n=t[Math.floor(Math.random()*e)],i=t[Math.floor(Math.random()*e)];return this.optimize(n.fitness,i.fitness)?n.entity:i.entity},Tournament3:function(t){var e=t.length,n=t[Math.floor(Math.random()*e)],i=t[Math.floor(Math.random()*e)],r=t[Math.floor(Math.random()*e)],s=this.optimize(n.fitness,i.fitness)?n:i;return(s=this.optimize(s.fitness,r.fitness)?s:r).entity},Fittest:function(t){return t[0].entity},Random:function(t){return t[Math.floor(Math.random()*t.length)].entity},RandomLinearRank:function(t){return this.internalGenState.rlr=this.internalGenState.rlr||0,t[Math.floor(Math.random()*Math.min(t.length,this.internalGenState.rlr++))].entity},Sequential:function(t){return this.internalGenState.seq=this.internalGenState.seq||0,t[this.internalGenState.seq++%t.length].entity}},Select2={Tournament2:function(t){return[Select1.Tournament2.call(this,t),Select1.Tournament2.call(this,t)]},Tournament3:function(t){return[Select1.Tournament3.call(this,t),Select1.Tournament3.call(this,t)]},Random:function(t){return[Select1.Random.call(this,t),Select1.Random.call(this,t)]},RandomLinearRank:function(t){return[Select1.RandomLinearRank.call(this,t),Select1.RandomLinearRank.call(this,t)]},Sequential:function(t){return[Select1.Sequential.call(this,t),Select1.Sequential.call(this,t)]},FittestRandom:function(t){return[Select1.Fittest.call(this,t),Select1.Random.call(this,t)]}};function Genetic(){this.fitness=null,this.seed=null,this.mutate=null,this.crossover=null,this.select1=null,this.select2=null,this.optimize=null,this.generation=null,this.notification=null,this.configuration={size:250,crossover:.8,mutation:.2,random:.1,iterations:100,fittestAlwaysSurvives:!0,maxResults:100,webWorkers:!0,skip:0},this.userData={},this.internalGenState={},this.entities=[],this.usingWebWorker=!1,this.start=function(t){var e,n,i=this;function r(t){return Math.random()<=i.configuration.mutation&&i.mutate?i.mutate(Clone(t)):t}for(t&&t.data&&(this.entities=Serialization.parse(t.data).entities);this.entities.length<this.configuration.size;)this.entities.push(this.seed());for(var s=0;s<this.configuration.iterations;++s){this.internalGenState={};var o=this.entities.map((function(t){return{fitness:i.fitness(t),entity:t}})).sort((function(t,e){return i.optimize(t.fitness,e.fitness)?-1:1})),a=o.reduce((function(t,e){return t+e.fitness}),0)/o.length,l=Math.sqrt(o.map((function(t){return(t.fitness-a)*(t.fitness-a)})).reduce((function(t,e){return t+e}),0)/o.length),c={maximum:o[0].fitness,minimum:o[o.length-1].fitness,mean:a,stdev:l},u=!this.generation||this.generation(o,s,c),f="undefined"!=typeof u&&!u||s==this.configuration.iterations-1;if(this.notification&&(f||0==this.configuration.skip||s%this.configuration.skip==0)&&this.sendNotification(o.slice(0,this.maxResults),s,c,f),f)break;var h=[];for(this.configuration.fittestAlwaysSurvives&&(h.push(Clone(o[0].entity)),h.push(Clone(o[1].entity)),this.crossover&&(n=this.crossover(h[0],this.select1(o)),h.push(n[0],n[1]),n=this.crossover(h[1],this.select1(o)),h.push(n[0],n[1])),h.push(this.mutate(Clone(h[0]))));h.length<i.configuration.size;)Math.random()<=this.configuration.random?h.push(this.seed()):this.crossover&&Math.random()<=this.configuration.crossover&&h.length+1<i.configuration.size?(e=this.select2(o),n=this.crossover(e[0],e[1]).map(r),h.push(n[0],n[1])):h.push(r(i.select1(o)));this.entities=h}},this.sendNotification=function(t,e,n,i){var r={pop:t.map(Serialization.stringify),generation:e,stats:n,isFinished:i};this.usingWebWorker?postMessage(r):self.notification(r.pop.map(Serialization.parse),r.generation,r.stats,r.isFinished)}}return Genetic.prototype.evolve=function(config,userData){var k;for(k in config)this.configuration[k]=config[k];for(k in userData)this.userData[k]=userData[k];function addslashes(t){return t.replace(/[\\"']/g,"\\$&").replace(/\u0000/g,"\\0")}this.usingWebWorker=this.configuration.webWorkers&&"undefined"!=typeof Blob&&"undefined"!=typeof Worker&&"undefined"!=typeof window.URL&&"undefined"!=typeof window.URL.createObjectURL;var blobScript="'use strict'\n";blobScript+="var Serialization = {'stringify': "+Serialization.stringify.toString()+", 'parse': "+Serialization.parse.toString()+"};\n",blobScript+="var Clone = "+Clone.toString()+";\n",blobScript+='var Optimize = Serialization.parse("'+addslashes(Serialization.stringify(Optimize))+'");\n',blobScript+='var Select1 = Serialization.parse("'+addslashes(Serialization.stringify(Select1))+'");\n',blobScript+='var Select2 = Serialization.parse("'+addslashes(Serialization.stringify(Select2))+'");\n',blobScript+='var genetic = Serialization.parse("'+addslashes(Serialization.stringify(this))+'");\n',blobScript+="onmessage = function(e) { genetic.start(e); }\n";var self=this;if(this.usingWebWorker){const t=new Blob([blobScript]),e=new Worker(window.URL.createObjectURL(t));e.onmessage=function(t){const{pop:n,generation:i,stats:r,isFinished:s}=t.data;self.notification(n.map(Serialization.parse),i,r,s),s&&e.terminate()},e.onerror=function(t){alert("ERROR: Line "+t.lineno+" in "+t.filename+": "+t.message)},e.postMessage("")}else!function(){var onmessage;eval(blobScript),onmessage(null)}()},{create:function(){return new Genetic},Select1,Select2,Optimize,Clone}}();module.exports=Genetic},983:function(t,e){class n{evolve(t,e,n){return t.evolve(e,n)}}n.prototype.seed=function(){if(!Int16Array.prototype.fill)throw new Error("Unsupported browser. Use Chrome, FireFox or MS EDGE\n\nУстаревший браузер. Используйте Chrome, FireFox или MS EDGE\n");const t=this.userData.products.length,e=new Int16Array(t).fill(-1);for(let n=0;n<t;n++){let i=Math.floor(Math.random()*(t-n)),r=0;for(;r<i||e[i]>=0;)e[r]>=0&&i++,r++;e[i]=n}return e},n.prototype.mutate=function(t){for(var e=t.length,n=Math.floor(Math.random()*e),i=Math.floor(Math.random()*e);n==i&&e>1;)i=Math.floor(Math.random()*t.length);var r=t[i];return t[i]=t[n],t[n]=r,t},n.prototype.crossover=function(t,e){var n,i,r=t.length,s=Math.floor(Math.random()*r),o=new Int16Array(r).fill(-1),a=new Int16Array(r).fill(-1),l=new Int16Array(r);for(l.fill(-1),n=0,i=0;i<s;i++)o[i]=e[i],l[n]=t.indexOf(o[i]),n++;for(n=s,i=0;i<r;i++)-1==l.indexOf(i)&&(o[n]=t[i],n++);for(l.fill(-1),n=0,i=0;i<s;i++)a[i]=t[i],l[n]=e.indexOf(a[i]),n++;for(n=s,i=0;i<r;i++)-1==l.indexOf(i)&&(a[n]=e[i],n++);return[o,a]},n.prototype.fitness=function(t,e){var n,i,r,s,o,a=0,l=t.length,c=this.userData,u=Array.from(c.workpieces),f=u.length;for(e&&(n=new Int16Array(l)),o=0;o<t.length;++o)s=1/0,i=-1,u.some((function(e,n){if(r=e-c.products[t[o]]-c.knifewidth,n<f&&c.workpieces[n]==e&&c.overmeasure&&(r-=c.overmeasure),r>=0&&r<s){if(r>c.wrongsnipmin&&c.wrongsnipmax&&r<c.wrongsnipmax)return;if(i=n,0==(s=r))return!0}})),i>=0?(u[i]=s,e&&(n[t[o]]=i)):(u.push(c.sticklength-c.products[t[o]]-c.overmeasure),e&&(n[t[o]]=u.length-1));return e?(a={workpieces:u,res:n,workpieces_len:0,products_len:c.products.reduce((function(t,e){return t+e}),0),scraps_len:0},u.forEach((function(t,e){a.workpieces_len+=e<f?c.workpieces[e]:c.sticklength,t>=c.usefulscrap&&(a.scraps_len+=t)})),a.scraps_percent=100*(a.workpieces_len-a.products_len-a.scraps_len-c.products.length*c.knifewidth)/a.workpieces_len):u.forEach((function(t,e){a+=1e13,a-=t*t})),a},n.prototype.generation=function(t,e,n){if(e<this.configuration.skip||e%this.configuration.skip!=0)return!0;var i=this.fitness(t[0].entity,!0),r=this.userData.usefulscrap;return!(i.scraps_percent<.5&&e>this.configuration.iterations/3||i.scraps_percent<1&&i.workpieces.every((function(t){return t<r})))&&void 0},t.exports=n}}]);
//# sourceMappingURL=26.65379531.chunk.js.map