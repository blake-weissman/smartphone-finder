(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),c=(a(16),a(1)),o=a(2),l=a(5),p=a(3),h=a(4),m=a(6),d=(a(8),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-wrap"},r.a.createElement("a",{href:this.props.link,target:"_blank"},r.a.createElement("div",{className:"card-image",style:{backgroundImage:"url("+this.props.img+")"}})),r.a.createElement("div",{className:"card-content"},r.a.createElement("h2",{className:"card-content"},this.props.name),r.a.createElement("h3",{className:"card-content"},"$"+this.props.price),r.a.createElement("p",{className:"card-content"},this.props.desc),r.a.createElement("div",{className:"button-wrap"},r.a.createElement("a",{className:"button1",href:this.props.link,target:"_blank"},"Learn More")))))}}]),t}(n.Component)),u=function e(t,a,n,r,i,s,o,l,p,h,m,d){Object(c.a)(this,e),this.name=t,this.desc=a,this.link=n,this.img=r,this.price=i,this.os=s,this.year=o,this.res=l,this.size=p,this.cpu=h,this.ram=m,this.headphone=d},g=[new u("iPhone XS","Welcome to the big screens. Super Retina in two sizes \u2014 including the largest display ever on an iPhone. The most powerful chip in a smartphone.","https://www.apple.com/iphone-xs/","img/iphonexs.jpg",999.99,"iOS","2018","2436x1125","Apple A12 Bionic","4gb",!1),new u("Samsung Galaxy S10","After 10 years of mobile pioneering firsts, it's time to meet our latest and greatest innovation yet. Introducing the Galaxy S10. The next generation has arrived.","https://www.samsung.com/us/mobile/galaxy-s10/","img/s10.jpg",899.99,"Android","2019","3040x1440","Snapdragon 855","8gb",!0),new u("Google Pixel 3","Meet the Google Pixel 3. Explore your world with Google Lens. Capture breathtaking photos using Portrait Mode. Screen phone calls and get answers with Google.","https://store.google.com/us/product/pixel_3?hl=en-US","img/pixel3.jpg",799.99,"Android","2018","2160x1080","Snapdragon 845","4gb",!1),new u("OnePlus 6T","OnePlus 6T comes equipped with Screen Unlock, an in-display fingerprint sensor technology. Prepare to Unlock The Speed with 8GB RAM and up to 256GB.","https://www.oneplus.com/6t","img/oneplus6t.jpg",579.99,"Android","2018","2280x1080","Snapdragon 845","8gb",!1)],b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={phones:g},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"renderCard",value:function(e){if(e.price>=this.props.price)return r.a.createElement(d,{name:e.name,desc:e.desc,link:e.link,img:e.img,price:e.price})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app-display wrap flex"},this.state.phones.map(function(t){return e.renderCard(t)}))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={price:0},a.priceChange=a.priceChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"priceChange",value:function(e){var t=parseInt(document.getElementById("filter-price").value);!1===isNaN(t)?this.setState({price:parseInt(document.getElementById("filter-price").value)}):this.setState({price:0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-header background-dark"},r.a.createElement("div",{className:"wrap app-header-wrap flex"},r.a.createElement("div",{className:"app-header-left"},r.a.createElement("h2",{className:"color-light"},"Smartphone Finder Prototype"),r.a.createElement("p",{className:"color-light"},"created by ",r.a.createElement("a",{href:"http://blakeweissman.com/",className:"color-light buttonless",target:"_blank"},"Blake Weissman"))),r.a.createElement("div",{className:"app-header-right"},r.a.createElement("p",{className:"color-light"},"Price:"),r.a.createElement("input",{className:"app-header-input",id:"filter-price",onChange:this.priceChange})))),r.a.createElement(b,{price:this.state.price}),r.a.createElement("footer",{className:"background-dark"},r.a.createElement("p",{className:"footer color-light text-center"},"\xa92019 ",r.a.createElement("a",{href:"http://blakeweissman.com/",className:"color-light buttonless",target:"_blank"},"Blake Weissman"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.48703865.chunk.js.map