(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n(25)},,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(6),c=n.n(r),l=(n(15),n(3)),i=n(2);n(16),n(17),n(18);var m=function(){const[e,a]=Object(t.useState)(!1),n=Object(t.useRef)(null),r=Object(t.useRef)(0),c=Object(t.useRef)(0),i=[{img:"/Portafolio-ThonyMarckDEV/img/eco_ruta_logo.jpg",technologies:["/Portafolio-ThonyMarckDEV/img/java_icon.png","/Portafolio-ThonyMarckDEV/img/firebase_icon.png","/Portafolio-ThonyMarckDEV/img/mysql_icon.png"],route:"/EcoRuta"},{img:"/Portafolio-ThonyMarckDEV/img/Momentoslogo.jpg",technologies:["/Portafolio-ThonyMarckDEV/img/html_icon.png","/Portafolio-ThonyMarckDEV/img/css_icon.png","/Portafolio-ThonyMarckDEV/img/mysql_icon.png"],route:"/momentos"},{img:"/Portafolio-ThonyMarckDEV/img/CMV1.jpg",technologies:["/Portafolio-ThonyMarckDEV/img/java_icon.png","/Portafolio-ThonyMarckDEV/img/firebase_icon.png","/Portafolio-ThonyMarckDEV/img/mysql_icon.png"],route:"/cmv"}];return o.a.createElement("div",{className:"home-container"},o.a.createElement("div",{className:"logo-container"},o.a.createElement("img",{src:"/Portafolio-ThonyMarckDEV/img/logo.png",className:"logo",alt:"Logo",onClick:()=>{a(!e)}})),o.a.createElement("div",{className:"social-media-container"},o.a.createElement("a",{href:"https://www.facebook.com/thony.marck.39",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/Portafolio-ThonyMarckDEV/img/facebook_icon.png",className:"social-media-icon facebook-icon",alt:"Facebook"})),o.a.createElement("a",{href:"https://wa.me/902207108",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/Portafolio-ThonyMarckDEV/img/whatsapp_icon.png",className:"social-media-icon whatsapp-icon",alt:"WhatsApp"})),o.a.createElement("a",{href:"https://www.instagram.com/thonymarck08/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/Portafolio-ThonyMarckDEV/img/instagram_icon.png",className:"social-media-icon instagram-icon",alt:"Instagram"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/anthony-marck-mendoza-sanchez-a7a1aa311/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/Portafolio-ThonyMarckDEV/img/linkedin_icon.png",className:"social-media-icon linkedin-icon",alt:"LinkedIn"})),o.a.createElement("a",{href:"https://github.com/ThonyMarckDEV",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/Portafolio-ThonyMarckDEV/img/github_icon.png",className:"social-media-icon github-icon",alt:"GitHub"})),o.a.createElement("a",{href:"/Portafolio-ThonyMarckDEV/pdf/CV.pdf",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/Portafolio-ThonyMarckDEV/img/cv_icon.png",className:"social-media-icon cv-icon",alt:"CV"}))),o.a.createElement("h1",{className:"proyectos"},"Mis Proyectos"),o.a.createElement("div",{className:"slider-container",ref:n,onTouchStart:e=>{r.current=e.touches[0].pageX-n.current.offsetLeft,c.current=n.current.scrollLeft},onTouchMove:e=>{const a=1.5*(e.touches[0].pageX-n.current.offsetLeft-r.current);n.current.scrollLeft=c.current-a}},o.a.createElement("div",{className:"slider"},i.map((e,a)=>o.a.createElement(l.b,{to:e.route,key:a}," ",o.a.createElement("div",{className:"slide"},o.a.createElement("img",{src:e.img,alt:`Project ${a+1}`,className:"project-image"}),o.a.createElement("div",{className:"technologies"},e.technologies.map((e,a)=>o.a.createElement("div",{className:"technology-background",key:a},o.a.createElement("img",{src:e,alt:`Technology ${a}`,className:"technology-icon"}))))))))))};n(19),n(20);var s=function(){const[e,a]=Object(t.useState)(0),n=["img/UI1.jpg","img/UI2.jpg","img/UI3.jpg","img/UI4.jpg","img/UI5.jpg","img/UI6.jpg","img/UI7.jpg","img/UI8.jpg","img/UI9.jpg"];return o.a.createElement("div",{className:"ecoruta-container"},o.a.createElement("h1",null,"EcoRuta Project"),o.a.createElement("p",null,"EcoRuta es una aplicaci\xf3n dise\xf1ada para ofrecer una experiencia interactiva a los usuarios que buscan explorar rutas ecol\xf3gicas y puntos de inter\xe9s.",o.a.createElement("br",null),"Con un enfoque en la personalizaci\xf3n y la seguridad, EcoRuta permite a los usuarios acceder a un mapa interactivo, conectar con la naturaleza de manera f\xe1cil y eficiente, y gestionar su perfil de forma sencilla.",o.a.createElement("br",null),"La aplicaci\xf3n ha sido optimizada para mejorar la estabilidad y el rendimiento, garantizando una experiencia fluida y confiable. Ideal para quienes desean descubrir nuevas rutas ecol\xf3gicas y disfrutar de una navegaci\xf3n intuitiva."),o.a.createElement("div",{className:"phone-frame"},o.a.createElement("div",{className:"carousel-container"},o.a.createElement("div",{className:"carousel-slide"},o.a.createElement("img",{src:n[e],alt:`Imagen ${e+1}`})),o.a.createElement("button",{className:"carousel-control prev",onClick:()=>{a(e=>0===e?n.length-1:e-1)}},"\u276e"),o.a.createElement("button",{className:"carousel-control next",onClick:()=>{a(e=>(e+1)%n.length)}},"\u276f")),o.a.createElement("img",{className:"phone-image",src:"/img/celular.png",alt:"Celular"})),o.a.createElement("a",{href:"https://github.com/SaithG04/Eco_Ruta",className:"github-link",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/img/github_icon.png",alt:"GitHub",className:"github-icon"})),o.a.createElement("a",{href:"/Portafolio-ThonyMarckDEV",className:"btn"},"Volver al Inicio"))};n(21),n(22);var g=function(){return o.a.createElement("div",{className:"Momentos-container"},o.a.createElement("h1",null,"Momentos Project"),o.a.createElement("p",null,"Este es el proyecto Momentos."),o.a.createElement("a",{href:"/Portafolio-ThonyMarckDEV",className:"btn"},"Volver al Inicio")," ")};n(23),n(24);var u=function(){return o.a.createElement("div",{className:"CMV-container"},o.a.createElement("h1",null,"CMV Project"),o.a.createElement("p",null,"Este es el proyecto CMV."),o.a.createElement("a",{href:"/Portafolio-ThonyMarckDEV",className:"btn"},"Volver al Inicio")," ")};var E=function(){return o.a.createElement(l.a,{basename:"/Portafolio-ThonyMarckDEV"},o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",element:o.a.createElement(m,null)}),o.a.createElement(i.a,{path:"/EcoRuta",element:o.a.createElement(s,null)}),o.a.createElement(i.a,{path:"/momentos",element:o.a.createElement(g,null)}),o.a.createElement(i.a,{path:"/cmv",element:o.a.createElement(u,null)})))};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)))}],[[7,1,2]]]);
//# sourceMappingURL=main.843ba26e.chunk.js.map