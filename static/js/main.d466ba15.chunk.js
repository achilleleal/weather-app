(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/github-logo.f1e77217.svg"},function(e,t,a){e.exports=a.p+"static/media/rain.086fb7ad.svg"},function(e,t,a){e.exports=a.p+"static/media/sun.fdd37e8a.svg"},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=a(3),s=a(4),i=a(9),m=a(8),u=a(5),h=a.n(u),d=function(){return r.a.createElement("footer",{className:"bg-blue-900 text-white text-center pt-4 pb-2"},r.a.createElement("h3",{className:"text-sm sm:text-base"},"Made with ",r.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," by Sebasti\xe1n Leal, 2020"),r.a.createElement("nav",{className:"flex justify-center my-2"},r.a.createElement("a",{href:"https://github.com/achilleleal/weather-app"},r.a.createElement("img",{src:h.a,alt:"github",className:"w-8 duration-300 transform hover:scale-110"}))))},p=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"flex justify-center items-center text-center text-white"},t),r.a.createElement(d,null))},x=a(6),f=a.n(x),g="\xbaC",E=function(e){var t,a=e.data,n=e.toMenu;if(a.id){var c=a.name,l=a.weather,o=a.main,s=o.temp,i=o.feels_like,m=function(e){return 9*e/5+32};"US"===a.sys.country&&(g="\xbaF",s=m(s),i=m(i));var u=function(e){return Math.round(10*e)/10};return r.a.createElement("div",null,r.a.createElement("div",{className:"card duration-500 transform hover:scale-105"},r.a.createElement("div",{className:"font-bold"},r.a.createElement("h1",{className:"text-3xl sm:text-4xl lg:text-5xl border-b-4 border-solid border-blue-400"},c),r.a.createElement("img",{src:"https://api.openweathermap.org/img/w/".concat(l[0].icon),alt:l[0].main,className:"w-16 mx-auto"}),r.a.createElement("h2",{className:"text-2xl sm:text-3xl lg:text-4xl"},l[0].main)),r.a.createElement("div",null,r.a.createElement("h3",{className:"text-xl sm:text-2xl lg:text-3xl"},(t=l[0].description).charAt(0).toUpperCase()+t.slice(1)),r.a.createElement("h3",{className:"text-md sm:text-xl"},u(s)," ",g,", feels like ",u(i)," ",g))),r.a.createElement("button",{onClick:n,className:"button"},"To menu"))}return r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"text-md sm:text-2xl"},"Oops, something went wrong"),r.a.createElement("img",{src:f.a,alt:"",className:"w-8 sm:w-16 mx-auto"}),r.a.createElement("button",{onClick:n,className:"button"},"Try again"))},b=a(7),v=a.n(b),w=(a(15),a(16),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).toMenu=function(){e.setState({loaded:!1,city:""})},e.getWeather=function(){fetch("https://weather-apiserver.herokuapp.com/weather",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:e.state.city})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({weatherData:t,loaded:!0})})).catch((function(e){return console.log(e)}))},e.state={loaded:!1,city:"",weatherData:{}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.loaded,n=t.unit,c=t.weatherData;return r.a.createElement(p,null,a?r.a.createElement(E,{data:c,unit:n,toMenu:this.toMenu}):r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({city:t.target.value})},placeholder:"City name",className:"p-2 rounded text-black text-center"}),r.a.createElement("img",{src:v.a,className:"loading my-6 mx-auto",alt:"sun"}),r.a.createElement("button",{className:"button",onClick:this.getWeather},"Get Weather")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d466ba15.chunk.js.map