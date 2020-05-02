(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=n(8),s=n(6),l=n(15),u=n(16),h=n(5),d={searchField:""},b={isPending:!1,robots:[],error:""},f=n(1),p=n(2),v=n(4),m=n(3),g=function(){return function(e){return e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}));var t}},E=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return o.a.createElement("button",{className:"fw6 pa3 ba br-pill b--green bg-light-green",style:{color:this.props.color},onClick:this.updateCount,"data-test":"counter"},"Count: ",this.state.count)}}]),n}(r.Component),O=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(E,{color:"#000000"}))}}]),n}(r.Component),j=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:t}))},y=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid #0ccac4",height:"800px"}},e.children)},w=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops! That is not good!"):this.props.children}}]),n}(r.Component),R=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robot"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))},C=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement(R,{key:t,id:e.id,name:e.name,email:e.email})})))},S=(n(27),function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).filterRobots=function(){var t=e.props,n=t.searchField;return t.robots.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onRobotsRequest()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange;return e.isPending?o.a.createElement("h1",{className:"f2 tc"},"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement(O,null),o.a.createElement(j,{searchChange:t}),o.a.createElement(y,null,o.a.createElement(w,null,o.a.createElement(C,{robots:this.filterRobots()}))))}}]),n}(r.Component)),k=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement(S,this.props)}}]),n}(r.Component),_=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){var n=t.target.value;return e({type:"CHANGE_SEARCH_FIELD",payload:n})},onRobotsRequest:function(){return e(g())}}}))(k),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28),n(29);var U=Object(l.createLogger)(),A=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(h.a)(Object(h.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(h.a)(Object(h.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(h.a)(Object(h.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),F=Object(s.d)(A,Object(s.a)(u.a,U));c.a.render(o.a.createElement(i.a,{store:F},o.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");N?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.b2498647.chunk.js.map