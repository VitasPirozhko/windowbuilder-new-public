(this.webpackJsonpwindowbuilder=this.webpackJsonpwindowbuilder||[]).push([[4],{140:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),l=a(276);class o extends n.Component{renderRepl(e){let{repl:t}=this.props;const a=[];for(const e in t)t[e].end_time||a.push(r.a.createElement(l.a,{key:e,info:t[e]}));return!a.length&&e&&a.push(r.a.createElement("div",{key:"footer"},e)),a}render(){let{title:t,page:n,top:l,first_run:o,repl:i}=this.props;const c=n&&n.limit*n.page>n.total_rows;let s;!t&&i&&i.root&&(t=i.root.title),t||(t=o?"Первый запуск требует дополнительного времени...":"Загрузка модулей...");const m=e.$p&&$p.job_prm;m&&(s=m.splash,s?s.loaded||(a.e(35).then(a.t.bind(null,508,7)),s.loaded=!0):(a.e(34).then(a.t.bind(null,507,7)),m.splash=s={loaded:!0,title:!0}));const d=n?c?r.a.createElement("div",null,`Такт №${n.page}, загружено ${n.total_rows} объектов - чтение изменений `," ",r.a.createElement("i",{className:"fa fa-spinner fa-pulse"})):n.text||`Такт №${n.page}, загружено ${m&&!1===m.use_ram?n.docs_written:Math.min(n.page*n.limit,n.total_rows)} из ${n.total_rows} объектов`:"";return r.a.createElement("div",{className:"splash",style:{marginTop:l,opacity:s?1:.15}},r.a.createElement("div",{className:"description"},[(!s||s.title)&&r.a.createElement("h1",{key:"name",itemProp:"name"},"Заказ дилера"),(!s||s.title)&&r.a.createElement("p",{key:"category"},"Категория: ",r.a.createElement("span",{itemProp:"applicationSubCategory"},"CRM, CAD, E-Commerce")),r.a.createElement("p",{key:"platform"},"Платформа: ",r.a.createElement("i",{className:"fa fa-chrome","aria-hidden":"true"})," браузер Chrome для ",r.a.createElement("span",{itemProp:"operatingSystem"},"Windows 8, 10 | Android | Mac | iOS")),r.a.createElement("div",{key:"description",itemProp:"description"},r.a.createElement("p",null,"Веб-сервис ",r.a.createElement("a",{href:"https://business-programming.ru/articles/implementation_of_the_windowbuilder",title:"Программы для оконных заводов и дилеров",target:"_blank",rel:"noopener noreferrer"},"Заказ дилера"),", предназначен для:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Расчета геометрии, спецификации и стоимости оконных и витражных конструкций (ПВХ, Дерево, Алюминий)"),r.a.createElement("li",null,"Aвтоматизации работы менеджеров и дилеров"),r.a.createElement("li",null,"Ускорения и упрощения подготовки производства"),r.a.createElement("li",null,"Планирования и контроля на всех этапах")))]),r.a.createElement("div",{style:{paddingTop:"30px"}},r.a.createElement("div",null,t),this.renderRepl(n&&d)))}}t.a=o}).call(this,a(77))},232:function(e,t,a){"use strict";var n=a(0),r=a.n(n);class l extends n.Component{constructor(e){super(e);const{handleIfaceState:t,handleNavigate:a}=e,n=this;this.handlers={handleIfaceState:t,handleNavigate:a,get props(){return n.props}}}componentDidMount(){this.checkSizes(this.props);const{el:e}=this;this.layout=new dhtmlXLayoutObject({parent:e,pattern:"1C",offsets:{top:0,right:0,bottom:0,left:0},cells:[{id:"a",text:"Text A",header:!1}]}),$p.iface.w||($p.iface.w=new dhtmlXWindows,$p.iface.w.attachViewportTo(e))}componentWillUnmount(){delete this.handlers.onProps,$p.iface.w&&($p.iface.w.unload(),$p.iface.w=null),this.layout&&(this.layout.unload(),delete this.layout)}shouldComponentUpdate(e){this.checkSizes(e);const{onProps:t}=this.handlers;t&&t(e);const{match:a,dialog:n}=e;return!(!n||!a||a.params.ref&&a.params.ref!==n.ref)||!(!this.props.dialog||n)}onReize(){}checkSizes(e){const{windowHeight:t,windowWidth:a}=e,{el:n,layout:r}=this,l=(t>480?t-52:428).toFixed()+"px",o=(a>800?a-(l<500?20:0):800).toFixed()+"px";n.style.height==l&&n.style.width==o||(n.style.height=l,n.style.width=o,r&&(r.setSizes(),this.onReize()))}get cell(){return this.layout&&this.layout.cells("a")}render(){return r.a.createElement("div",{ref:e=>this.el=e})}}var o=l;t.a=o},233:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(20);const r={NOM_PRICES:(e,t)=>Object.assign({},e,{nom_prices_step:t.payload}),REPL_STEP:(e,t)=>{const a=Object.assign({},e.repl);return a[t.payload.db]=t.payload,Object.assign({},e,{repl:a})}};function l(e,t){const a=r[t.type];return a?a(e,t):Object(n.metaReducer)(e,t)}let o;function i({adapters:e}){return({dispatch:t})=>a=>n=>(o||(o=!0,e.pouch.on({nom_prices:e=>t({type:"NOM_PRICES",payload:e}),repl_state:e=>t({type:"REPL_STEP",payload:e})})),a&&n&&a(n))}},235:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(329);class o extends r.a.Component{constructor(e,t){super(e,t),this.progress=()=>{const{completed:e}=this.state;if(e>100)this.setState({completed:0,buffer:10});else{const t=2*Math.random(),a=6*Math.random();this.setState({completed:e+t,buffer:e+t+a})}},this.state={error:"",step:"Подготовка данных...",docs:null,prods:null,completed:0,buffer:10},this.timer=0}componentDidMount(){const{local:e,remote:t,authorized:a}=$p.adapters.pouch;e.doc!==t.doc?a?(this.timer=setInterval(this.progress,700),this.init&&this.init()):this.setState({error:"Пользователь должен быть авторизован на сервере"}):this.setState({error:"В режиме 'direct', синхронизация заказов не требуется"})}componentWillUnmount(){this.timer&&clearInterval(this.timer)}render(){const{error:e,step:t,completed:a,buffer:n}=this.state;return e?r.a.createElement("div",null,e):[r.a.createElement("div",{key:"progress",style:{flexGrow:1}},r.a.createElement(l.a,{color:"secondary",variant:"buffer",value:a,valueBuffer:n}),r.a.createElement("br",null)),r.a.createElement("div",{key:"text"},t)]}}t.a=o},276:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),o=a.n(l),i=a(235),c=a(329);class s extends i.a{render(){const{state:{completed:e,buffer:t},props:{info:a}}=this,n=!a.text&&!a.index&&100*a.docs_read/(a.docs_read+a.pending);n&&e!==n&&this.setState({completed:n});const l={templates:"Шаблоны",ram:"Справочники",doc:"Документы"};return[r.a.createElement("div",{key:"progress",style:{flexGrow:1,marginTop:8}},r.a.createElement(c.a,{color:"secondary",variant:"buffer",value:e,valueBuffer:t})),!a.text&&!a.index&&r.a.createElement("div",{key:"text"},`${l[a.db]}: прочитано ${a.docs_read} из ${a.docs_read+a.pending} (${n.toFixed()}%)`),!a.text&&a.index&&r.a.createElement("div",{key:"text"},`${l[a.db]}: строим индекс ${a.index}`),a.text&&r.a.createElement("div",{key:"text"},a.text)]}}s.propTypes={info:o.a.object.isRequired},t.a=s},356:function(e,t,a){e.exports=a(439)},357:function(e,t,a){},358:function(e,t,a){},439:function(e,t,a){"use strict";a.r(t);a(357),a(358);var n=a(0),r=a.n(n),l=a(1),o=a.n(l),i=a(8),c=a(166),s=a(34),m=a(82);const d={IFACE_STATE:(e,t)=>{const{component:a,name:n,value:r}=t.payload,l=a||"common",o=Object.assign({},e[l]);return o[n]="invert"==r?!o[n]:r,Object.assign({},e,{[l]:o})}},u={common:{title:"Заказ дилера"},CalcOrderList:{},NavDrawer:{open:!1},NavList:{orders:!0},LogDrawer:{open:!1}};var p=a(233);var h=Object(s.combineReducers)({meta:p.b,iface:function(e=u,t){const a=d[t.type];return a?a(e,t):e},router:m.routerReducer}),_=a(234),f=a.n(_),g=a(62),E=a(275);const b=Object(g.a)();var v=a(20),w=a(140),x=a(27),y=a(198),k=a(277),j=a(93),C=a(204),S=a(157),O=a(328),$=w.a,R=a(130);const D=()=>null,N={DataList:D,DataTree:D,DataObj:D,FrmReport:D};Promise.all([a.e(0),a.e(1),a.e(3),a.e(19)]).then(a.bind(null,740)).then(e=>(N.DataList=e.default,Promise.all([a.e(0),a.e(1),a.e(14)]).then(a.bind(null,1042)))).then(e=>(N.DataTree=e.default,a.e(37).then(a.bind(null,1019)))).then(e=>(N.DataObj=e.default,Promise.all([a.e(0),a.e(1),a.e(44)]).then(a.bind(null,751)))).then(e=>{N.FrmReport=e.default,a.e(33).then(a.t.bind(null,1020,7)),a.e(32).then(a.t.bind(null,1021,7))});var T=()=>r.a.createElement("div",null,r.a.createElement("h2",null,"404"));class P extends n.Component{render(){const{match:e,handlers:t,windowHeight:a,windowWidth:n}=this.props,{area:l,name:o}=e.params,i=$p[l][o];if(!i)return r.a.createElement(T,null);const{current_user:c}=$p,s=c?c.get_acl(i.class_name):"e",m={windowHeight:a,windowWidth:n,height:a>480?a-52:428,width:n>800?n-(a<480?20:0):800},d=(e,a,n)=>("obj"===n&&i.FrmObj?e=i.FrmObj:"list"===n&&i.FrmList&&(e=i.FrmList),r.a.createElement(e,Object.assign({_mgr:i,_acl:s,handlers:t},a,m)));if("rep"===l){const t=i.FrmObj||N.FrmReport;return r.a.createElement(t,Object.assign({_mgr:i,_acl:s,match:e,location:this.props.location},m))}return r.a.createElement(x.Switch,null,r.a.createElement(x.Route,{path:`/windowbuilder-new-public${e.url}/:ref([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})`,render:e=>d(N.DataObj,e,"obj")}),r.a.createElement(x.Route,{path:`/windowbuilder-new-public${e.url}/list`,render:e=>d(N.DataList,e,"list")}),r.a.createElement(x.Route,{component:T}))}}var I=Object(R.a)(Object(v.withObj)(P)),M=a(74),L=a(534);class z extends n.Component{constructor(...e){super(...e),this.state={build:""}}componentDidMount(){this.shouldComponentUpdate(this.props),fetch("/build.json").then(e=>e.json()).then(e=>{this.setState(e)}).catch(()=>null)}shouldComponentUpdate({handleIfaceState:e,title:t}){return"О программе..."==t||(e({component:"",name:"title",value:"О программе..."}),!1)}render(){const{props:{classes:e},state:{build:t}}=this;return r.a.createElement("div",{className:e.root},r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,md:1,lg:2,xl:3}),r.a.createElement(L.a,{item:!0,xs:12,sm:12,md:11,lg:10,xl:8},r.a.createElement("h1",{className:e.fn},"Окнософт: Заказ дилера"),t&&r.a.createElement("p",null,"Версия: ",r.a.createElement("i",null,t)),r.a.createElement("p",null,"Заказ дилера - это веб-приложение, разработанное компанией ",r.a.createElement("a",{href:"http://www.oknosoft.ru/",target:"_blank",rel:"noopener noreferrer"},"Окнософт")," на базе фреймворка ",r.a.createElement("a",{href:"http://www.oknosoft.ru/metadata/",target:"_blank",rel:"noopener noreferrer"},"Metadata.js"),r.a.createElement("br",null),"Исходный код и документация доступны в ",r.a.createElement("a",{href:"https://github.com/oknosoft/windowbuilder",target:"_blank",rel:"noopener noreferrer"},"GitHub ",r.a.createElement("i",{className:"fa fa-github-alt"})),".",r.a.createElement("br",null)),r.a.createElement("h3",{className:e.fn},"Назначение и возможности"),r.a.createElement("ul",null,r.a.createElement("li",null,"Построение и редактирование эскизов изделий в графическом 2D редакторе"),r.a.createElement("li",null,"Экстремальная поддержка нестандартных изделий (многоугольники, сложные перегибы профиля)"),r.a.createElement("li",null,"Расчет спецификации и координат технологических операций"),r.a.createElement("li",null,"Расчет цены и плановой себестоимости изделий по произвольным формулам с учетом индивидуальных дилерских скидок и наценок"),r.a.createElement("li",null,"Формирование печатных форм для заказчика и производства"),r.a.createElement("li",null,"Поддержка автономной работы при отсутствии доступа в Интернет и прозрачного обмена с сервером при возобновлении соединения")),r.a.createElement("p",null,"Использованы следующие библиотеки и инструменты:"),r.a.createElement("h3",{className:e.fn},"Серверная часть"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://couchdb.apache.org/",target:"_blank",rel:"noopener noreferrer"},"CouchDB"),", NoSQL база данных с поддержкой master-master репликации"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://nginx.org/ru/",target:"_blank",rel:"noopener noreferrer"},"Nginx"),", высокопроизводительный HTTP-сервер"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},"NodeJS"),", JavaScript runtime built on Chrome`s V8 JavaScript engine")),r.a.createElement("h3",{className:e.fn},"Управление данными в памяти браузера"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.oknosoft.ru/metadata/",target:"_blank",rel:"noopener noreferrer"},"Metadata.js"),", движок ссылочной типизации для браузера и Node.js"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://pouchdb.com/",target:"_blank",rel:"noopener noreferrer"},"PouchDB"),", клиентская NoSQL база данных с поддержкой автономной работы и репликации с CouchDB"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/agershun/alasql",target:"_blank",rel:"noopener noreferrer"},"AlaSQL"),", SQL-интерфейс к массивам javascript в памяти браузера и Node.js"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.movable-type.co.uk/scripts/aes.html",target:"_blank",rel:"noopener noreferrer"},"Aes"),", библиотека шифрования/дешифрования строк"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/reactjs/redux",target:"_blank",rel:"noopener noreferrer"},"Redux"),", диспетчер состояния веб-приложения")),r.a.createElement("h3",{className:e.fn},"UI библиотеки и компоненты интерфейса"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://paperjs.org/",target:"_blank",rel:"noopener noreferrer"},"Paper.js"),", фреймворк векторной графики для HTML5 Canvas"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.material-ui.com/",target:"_blank",rel:"noopener noreferrer"},"Material-ui"),", компоненты React UI в стиле Google`s material design"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/bvaughn/react-virtualized",target:"_blank",rel:"noopener noreferrer"},"React virtualized"),", компоненты React для динамических списков"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/adazzle/react-data-grid",target:"_blank",rel:"noopener noreferrer"},"React data grid"),", React компонент табличной части"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://dhtmlx.com/",target:"_blank",rel:"noopener noreferrer"},"Dhtmlx"),", кроссбраузерная javascript библиотека компонентов ui"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://momentjs.com/",target:"_blank",rel:"noopener noreferrer"},"Moment.js"),", библиотека форматирования интервалов и дат"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://meritt.github.io/rubles/",target:"_blank",rel:"noopener noreferrer"},"Rubles.js"),", библиотека форматирования чисел - сумма прописью"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/SheetJS/js-xlsx",target:"_blank",rel:"noopener noreferrer"},"Xlsx"),", библиотека для чтения и записи XLSX / XLSM / XLSB / XLS / ODS"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/open-xml-templating/docxtemplater",target:"_blank",rel:"noopener noreferrer"},"Docxtemplater"),", библиотека формирования файлов DOCX по шаблону"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://fortawesome.github.io/Font-Awesome/",target:"_blank",rel:"noopener noreferrer"},"fontawesome"),", набор шрифтовых иконок")),r.a.createElement("h3",{className:e.fn},"Благодарность"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-thumbs-o-up"})," Нашему спонсору, ЗСК «Гласспром» (",r.a.createElement("a",{href:"https://www.ecookna.ru/partnerstvo/stante-dilerom/",target:"_blank",rel:"noopener noreferrer"},"Экоокна"),")"),r.a.createElement("h3",{className:e.fn},"Вопросы"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-question-circle"})," Если обнаружили ошибку, пожалуйста, ",r.a.createElement("a",{href:"https://github.com/oknosoft/windowbuilder/issues/new",target:"_blank",rel:"noopener noreferrer"},"зарегистрируйте вопрос в GitHub")," или ",r.a.createElement("a",{href:"mailto:info@oknosoft.ru?subject=windowbuilder"},"свяжитесь с разработчиком")," напрямую",r.a.createElement("br",null)))))}}z.rname="About";var B=Object(M.a)({root:{flexGrow:1,marginLeft:12,marginRight:16},fn:{fontWeight:500}})(Object(v.withIface)(z)),W=a(219);class F extends W.a{componentDidMount(){Promise.all([a.e(11),a.e(40)]).then(a.bind(null,1022)).then(e=>this.setState({Component:e.default}))}}var A=a(75),U=a(46),H=a(537),X=a(500),G=a(334),J=a(457),q=a(147),Q=a(517),V=a(450),K=a(159),Y=a(518),Z=a(449),ee=a(69);class te extends n.Component{constructor(e){super(e),this.handleSetPrm=()=>{const{hide_price:e,...t}=this.state;"dealer"==e?(t.hide_price_dealer=!0,t.hide_price_manufacturer=""):"manufacturer"==e?(t.hide_price_dealer="",t.hide_price_manufacturer=!0):(t.hide_price_dealer="",t.hide_price_manufacturer=""),this.props.handleSetPrm(t),this.props.handleIfaceState({component:"",name:"snack",value:{open:!0,reset:!0,message:"Требуется перезагрузить страницу после изменения параматров"}})},this.handleHidePriceChange=(e,t)=>{this.setState({hide_price:t})},this.openConfirm=()=>this.setState({confirm_reset:!0}),this.closeConfirm=()=>this.setState({confirm_reset:!1}),this.resetData=()=>{this.closeConfirm(),$p.eve&&($p.eve.redirect=!0),$p.adapters.pouch.reset_local_data()};const{zone:t,couch_path:a,enable_save_pwd:n,couch_direct:r,ram_indexer:l}=e,{wsql:o,job_prm:i,cat:c,current_user:s,pricing:m}=$p;let d;d=o.get_user_param("hide_price_dealer")?"dealer":o.get_user_param("hide_price_manufacturer")?"manufacturer":"none";let u=o.get_user_param("surcharge_internal","number"),p=o.get_user_param("discount_percent_internal","number"),h=!1;if(s&&s.partners_uids.length){if(!u){let e=c.partners.get(s.partners_uids[0]),t={calc_order_row:{nom:c.nom.get(),characteristic:{params:{find_rows:()=>null}},_owner:{_owner:{partner:e}}}};m.price_type(t),o.set_user_param("surcharge_internal",u=t.price_type.extra_charge_external),o.set_user_param("discount_percent_internal",p=t.price_type.discount_external)}}else h=!0;this.state={zone:t,couch_path:a,enable_save_pwd:n,couch_direct:r,ram_indexer:l,use_ram:i.use_ram,hide_price:d,confirm_reset:!1,surcharge_internal:u,discount_percent_internal:p,surcharge_disabled:h}}componentDidMount(){this.shouldComponentUpdate(this.props)}shouldComponentUpdate({handleIfaceState:e,title:t}){return"Настройки"==t||(e({component:"",name:"title",value:"Настройки"}),!1)}valueToState(e){return({target:t})=>{const a=-1!=["discount_percent_internal","surcharge_internal"].indexOf(e)?parseFloat(t.value)||0:t.value;this.setState({[e]:a})}}render(){const{classes:e}=this.props,{zone:t,couch_path:a,enable_save_pwd:n,couch_direct:l,ram_indexer:o,use_ram:i,confirm_reset:c,hide_price:s,surcharge_internal:m,discount_percent_internal:d,surcharge_disabled:u}=this.state;return r.a.createElement(A.a,{className:e.root,elevation:4},r.a.createElement(U.a,{variant:"subtitle2",style:{paddingTop:16}},"Подключение к базе данных"),r.a.createElement(V.a,{fullWidth:!0,margin:"dense",label:"Адрес CouchDB",InputProps:{placeholder:"couch_path"},helperText:"Абсолютный либо относительный путь CouchDB",onChange:this.valueToState("couch_path"),value:a}),r.a.createElement(V.a,{fullWidth:!0,margin:"dense",label:"Область данных",InputProps:{placeholder:"zone"},helperText:"Значение разделителя данных",onChange:this.valueToState("zone"),value:t}),r.a.createElement(G.a,null,r.a.createElement(q.a,null,r.a.createElement(Q.a,{control:r.a.createElement(Y.a,{onChange:(e,t)=>this.setState({couch_direct:t}),checked:Boolean(l)}),label:l?"Прямое подключение к серверу":"Работа через IDB браузера"}),r.a.createElement(J.a,{style:{marginTop:-4}},l?"Оффлайн не используется":"Автономный режим при недоступности сервера")),r.a.createElement(q.a,null,r.a.createElement(Q.a,{control:r.a.createElement(Y.a,{onChange:(e,t)=>this.setState({enable_save_pwd:t}),checked:Boolean(n)}),label:"Разрешить сохранение пароля"}),r.a.createElement(J.a,{style:{marginTop:-4}},"Не требовать повторного ввода пароля")),r.a.createElement(q.a,null,r.a.createElement(Q.a,{control:r.a.createElement(Y.a,{onChange:(e,t)=>this.setState({ram_indexer:t}),checked:Boolean(o)}),label:"Использовать Indexer Postgres"}),r.a.createElement(J.a,{style:{marginTop:-4}},"Новый источник данных для динсписков")),r.a.createElement(q.a,null,r.a.createElement(Q.a,{control:r.a.createElement(Y.a,{onChange:(e,t)=>this.setState({use_ram:t}),checked:Boolean(i)}),label:i?"Данные ram в IDB браузера":"Динамический mdm на сервере"}),r.a.createElement(J.a,{style:{marginTop:-4}},i?"Классический режим - справочники в pouchdb":"Новый режим - mdm auth-proxy"))),r.a.createElement(U.a,{variant:"subtitle2",style:{paddingTop:16}},"Колонки цен"),r.a.createElement(U.a,null,'Настройка видимости колонок в документе "Расчет" и графическом построителе'),r.a.createElement(X.a,{className:e.group,value:s,onChange:this.handleHidePriceChange},r.a.createElement(Q.a,{value:"none",control:r.a.createElement(H.a,null),label:"Показывать все цены"}),r.a.createElement(Q.a,{value:"dealer",control:r.a.createElement(H.a,null),label:"Скрыть цены дилера"}),r.a.createElement(Q.a,{value:"manufacturer",control:r.a.createElement(H.a,null),label:"Скрыть цены завода"})),r.a.createElement(U.a,{variant:"subtitle2",style:{paddingTop:16}},"Наценки и скидки"),r.a.createElement(U.a,null,"Значения наценки и скидки по умолчанию, которые дилер предоставляет своим (конечным) покупателям"),r.a.createElement(V.a,{fullWidth:!0,margin:"dense",label:"Наценка дилера, %",InputProps:{placeholder:"surcharge_internal"},helperText:"Наценка относительно цены производителя",onChange:this.valueToState("surcharge_internal"),value:m,disabled:u}),r.a.createElement(V.a,{fullWidth:!0,margin:"dense",label:"Скидка дилера, %",InputProps:{placeholder:"discount_percent_internal"},helperText:"Скидка конечного клиента относительно цены дилера",onChange:this.valueToState("discount_percent_internal"),value:d,disabled:u}),r.a.createElement(Z.a,{style:{marginBottom:0,marginRight:0}},r.a.createElement(K.a,{size:"small",className:e.button,onClick:this.handleSetPrm},"Сохранить настройки"),r.a.createElement(K.a,{size:"small",className:e.button,onClick:this.openConfirm},"Сбросить данные")),r.a.createElement(j.a,{title:"Сброс данных",text:"Уничтожить локальные данные и пересоздать базы в IndexedDB браузера?",handleOk:this.resetData,handleCancel:this.closeConfirm,open:c}))}}var ae=Object(s.compose)(ee.a,v.withIface,v.withPrm)(te),ne=a(232);class re extends ne.a{constructor(...e){super(...e),this.prompt=()=>{if(!this._editor||!this._editor.project)return!0;const{ox:e}=this._editor.project;return!e||!e._modified||`Изделие ${e.prod_name(!0)} изменено.\n\nЗакрыть без сохранения?`}}componentDidMount(){super.componentDidMount();const{cell:e,handlers:t}=this;this._editor=new $p.Editor(e,t)}componentWillUnmount(){const{cell:e,_editor:t}=this;if(t){const{ox:e}=t.project,{calc_order:a}=e;t.unload(),$p.ui.idle&&t.close(e,a),delete this._editor,e._modified&&a._modified&&(a._data._reload=!0)}e.detachObject(!0),super.componentWillUnmount()}render(){return r.a.createElement("div",null,r.a.createElement(x.Prompt,{when:!0,message:this.prompt}),r.a.createElement("div",{ref:e=>this.el=e}))}}re.rname="Builder";var le=Object(R.a)(Object(v.withIface)(re)),oe=a(99);let ie=$;class ce extends n.Component{handleDialogClose(e){this.props.handleIfaceState({component:"",name:e,value:{open:!1}})}handleReset(e){const{handleNavigate:t,first_run:a}=this.props;a||e?($p.eve&&($p.eve.redirect=!0),location.replace("/")):t("/")}componentDidMount(){let e;if($p.ui.dialogs.init({handleIfaceState:this.props.handleIfaceState,lazy:N}),$p.wsql.get_user_param("ram_indexer")){if(e=Promise.all([a.e(0),a.e(1),a.e(3),a.e(8)]).then(a.bind(null,1043)),"orders"===oe.a[0].id){const e=oe.a.splice(0,1);oe.a[0].items.unshift({text:"Расчеты-заказы",navigate:"/",need_meta:!0,need_user:!0,icon:e.icon})}}else e=a.e(39).then(a.bind(null,1018));e.then(e=>{ie=e.default})}render(){const{props:e}=this,{snack:t,alert:a,confirm:n,meta_loaded:l,doc_ram_loaded:o,nom_prices_step:i,page:c,user:s,couch_direct:m,offline:d,title:u,idle:p}=e,h=Object(oe.b)(),_="/windowbuilder-new-public";let f=l&&h.need_user&&(!s.try_log_in&&!s.logged_in||m&&d);if(f&&!m&&e.complete_loaded){const{current_user:e}=$p;e&&e.name==s.name&&(f=!1)}const g={key:"auth",handleNavigate:e.handleNavigate,handleIfaceState:e.handleIfaceState,offline:m&&d,user:s,title:u,idle:p,disable:["google"]};return[r.a.createElement(O.a,Object.assign({key:"header",items:oe.a},e)),f||p?r.a.createElement(S.a,Object.assign({},g,{ComponentLogin:C.a})):!e.path_log_in&&(h.need_meta&&!l||h.need_user&&!e.complete_loaded)?r.a.createElement($,{key:"dumb",title:o?"Подготовка данных в памяти...":"Загрузка из IndexedDB...",page:{text:o?`Цены и характеристики${i?` (такт №${i})`:""}...`:(c&&c.synonym||"Почти готово")+"..."},top:92}):r.a.createElement(x.Switch,{key:"switch"},r.a.createElement(x.Route,{exact:!0,path:_+"/",component:ie}),r.a.createElement(x.Route,{path:_+"/builder/:ref([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})",component:le}),r.a.createElement(x.Route,{path:_+"/:area(doc|cat|ireg|cch|rep).:name",component:I}),r.a.createElement(x.Route,{path:_+"/about",component:B}),r.a.createElement(x.Route,{path:_+"/help",component:F}),r.a.createElement(x.Route,{path:_+"/login",component:e=>r.a.createElement(C.b,Object.assign({},e,g))}),r.a.createElement(x.Route,{path:_+"/settings",component:ae}),r.a.createElement(x.Route,{path:_+"/waiting",component:t=>r.a.createElement($,Object.assign({},t,{repl:e.repl}))}),r.a.createElement(x.Route,{component:T})),(t&&t.open||e.first_run&&o)&&r.a.createElement(y.a,{key:"snack",snack:t,handleClose:t&&t.open&&!t.reset?this.handleDialogClose.bind(this,"snack"):()=>this.handleReset(t&&t.reset)}),a&&a.open&&r.a.createElement(k.a,Object.assign({key:"alert"},a,{handleOk:this.handleDialogClose.bind(this,"alert")})),n&&n.open&&r.a.createElement(j.a,Object.assign({key:"confirm"},n)),m&&s.logged_in&&!d&&e.complete_loaded&&!e.sync_started&&!1!==$p.job_prm.use_ram&&r.a.createElement(y.a,{key:"break",snack:{open:!0,message:"Потеряна связь с сервером, ждём восстановления...",button:"Подробнее"},handleClose:()=>{e.handleIfaceState({component:"",name:"alert",value:{open:!0,title:"Интернет-соединение",text:"Можно будет продолжить работу после восстановления связи"}})}})]}getChildContext(){return{components:N}}}ce.childContextTypes={components:o.a.object};var se=Object(v.withNavigateAndMeta)(ce),me=a(203),de=a(326),ue=a(535),pe=a(224),he=a(327),_e=a.n(he);var fe=Object(pe.a)({palette:{primary:_e.a},mixins:{toolbar:{minHeight:48}},typography:{useNextVariants:!0}});class ge extends r.a.Component{constructor(e,t){super(e,t),this.browser_compatible=Object(me.a)()}render(){const{props:e,browser_compatible:t}=this,{meta_loaded:a,data_empty:n,data_loaded:l,history:o,repl:i,second_instance:c}=e;let s=!a||void 0===n||!1===n&&!l;if(!s&&i)for(const e in i){const t=i[e];t.ok&&!t.end_time&&(s=!0)}return r.a.createElement(ue.a,{theme:fe},c?r.a.createElement(de.a,null):t?s?r.a.createElement(w.a,e):r.a.createElement(m.ConnectedRouter,{history:o},r.a.createElement(se,{history:o,location:o.location})):r.a.createElement(me.b,null))}}var Ee=Object(v.withMeta)(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.e(29).then(a.t.bind(null,1008,7));const be=Object(s.createStore)(h,ve,Object(s.compose)(Object(s.applyMiddleware)(E.a,Object(m.routerMiddleware)(b),f.a),window.devToolsExtension?window.devToolsExtension():e=>e));var ve;class we extends r.a.Component{getChildContext(){return{store:be}}componentDidMount(){Promise.all([a.e(1),a.e(7),a.e(9)]).then(a.bind(null,1009)).then(e=>e.init(be)),a.e(30).then(a.t.bind(null,1015,7)).then(()=>a.e(31).then(a.t.bind(null,1016,7))).then(()=>a.e(36).then(a.t.bind(null,1017,7)))}render(){return r.a.createElement(c.Provider,{store:be},r.a.createElement(Ee,{history:b}))}}we.childContextTypes={store:o.a.object},Object(i.render)(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},99:function(e,t,a){"use strict";a.d(t,"c",(function(){return W})),a.d(t,"b",(function(){return F}));var n=a(0),r=a.n(n),l=a(322),o=a.n(l),i=a(324),c=a.n(i),s=a(325),m=a.n(s),d=a(323),u=a.n(d),p=a(221),h=a.n(p),_=a(313),f=a.n(_),g=a(321),E=a.n(g),b=a(231),v=a.n(b),w=a(314),x=a.n(w),y=a(315),k=a.n(y),j=a(316),C=a.n(j),S=a(317),O=a.n(S),$=a(318),R=a.n($),D=a(319),N=a.n(D),T=a(220),P=a.n(T),I=a(320),M=a.n(I);const L=[{text:"Заказы",icon:r.a.createElement(f.a,null),open:!0,id:"orders",items:[{text:"Черновики",navigate:B,icon:r.a.createElement(v.a,null),id:"draft",title:"Предварительные расчеты",need_meta:!0,need_user:!0},{text:"Отправлено",navigate:B,icon:r.a.createElement(x.a,null),id:"sent",title:"Отправленные, но еще не принятые в работу. Могут быть отозваны (переведены в 'черновики')",need_meta:!0,need_user:!0},{text:"Согласовано",navigate:B,icon:r.a.createElement(k.a,null),id:"confirmed",title:"Включены в план производства. Могут быть изменены менеджером. Недоступны для изменения дилером",need_meta:!0,need_user:!0},{text:"Отклонено",navigate:B,icon:r.a.createElement(C.a,null),id:"declined",title:"Не приняты в работу по техническим причинам. Требуется изменение конструктива или комплектации",need_meta:!0,need_user:!0},{text:"Сервис",navigate:B,icon:r.a.createElement(O.a,null),id:"service",title:"Заказы на сервисное обслуживание",need_meta:!0,need_user:!0},{text:"Рекламации",navigate:B,icon:r.a.createElement(R.a,null),id:"complaints",title:"Жалобы и рекламации",need_meta:!0,need_user:!0},{text:"Шаблоны",navigate:B,icon:r.a.createElement(N.a,null),id:"template",title:"Типовые блоки",need_meta:!0,need_user:!0},{text:"Архив",navigate:B,icon:r.a.createElement(P.a,null),id:"zarchive",title:"Старые заказы",need_meta:!0,need_user:!0},{text:"Все",navigate:B,icon:r.a.createElement(M.a,null),id:"all",title:"Отключить фильтр по статусам заказов",need_meta:!0,need_user:!0}]},{text:"Документы",icon:r.a.createElement(E.a,null),open:!0,id:"docs",items:[{text:"Касса приход",navigate:"/doc.debit_cash_order/list",need_meta:!0,need_user:!0},{text:"Касса расход",navigate:"/doc.credit_cash_order/list",need_meta:!0,need_user:!0},{text:"Оплата картой",navigate:"/doc.credit_card_order/list",need_meta:!0,need_user:!0},{text:"Поступление товаров услуг",navigate:"/doc.purchase/list",need_meta:!0,need_user:!0},{text:"Реализация товаров услуг",navigate:"/doc.selling/list",need_meta:!0,need_user:!0},{text:"Событие планирования",navigate:"/doc.planning_event/list",need_meta:!0,need_user:!0},{text:"Задание на производство",navigate:"/doc.work_centers_task/list",need_meta:!0,need_user:!0}]},{text:"Отчеты",icon:r.a.createElement(o.a,null),open:!1,id:"reports",items:[{text:"Анализ спецификации",navigate:"/rep.materials_demand/main",need_meta:!0,need_user:!0},{text:"Исполнение заказов",navigate:"/rep.invoice_execution/main",need_meta:!0,need_user:!0},{text:"Денежные средства",navigate:"/rep.cash/main",need_meta:!0,need_user:!0},{text:"Товары на складах",navigate:"/rep.goods/main",need_meta:!0,need_user:!0},{text:"Продажи",navigate:"/rep.selling/main",need_meta:!0,need_user:!0},{text:"Взаиморасчеты",navigate:"/rep.mutual_settlements/main",need_meta:!0,need_user:!0}]},{text:"Профиль",navigate:"/login",icon:r.a.createElement(u.a,null)},{text:"Настройки",navigate:"/settings",icon:r.a.createElement(h.a,null),need_meta:!0},{text:"Справка",navigate:"/help/",need_meta:!0,icon:r.a.createElement(c.a,null)},{text:"О программе",navigate:"/about",icon:r.a.createElement(m.a,null)}];function z(e,t){let a;return a="function"==typeof t.navigate?"/"==e:t.navigate&&t.navigate.indexOf(e),0===a||1===a}function B(e){const{handleIfaceState:t,handleClose:a,handleNavigate:n}=this.props;a(),n("/"),W(e,t)}function W(e,t){t({component:"",name:"state_filter",value:e});for(const a of L[0].items)if(a.id==e){t({component:"",name:"title",value:`Заказы (${a.text})`});break}}function F(e){e||(e=location.pathname);let t=function e(t,a){if(t&&"/"!=t)for(const n of a){const a=n.items?e(t,n.items):z(t,n)&&n;if(a)return a}}(e,L);return t||"/"!==e&&!e.match(/\/(doc|cat|ireg|cch|rep)\./)&&!e.match(/\/builder\//)||(t={need_meta:!0,need_user:!0}),t||{}}t.a=L}},[[356,5,6]]]);
//# sourceMappingURL=main.55383fac.chunk.js.map