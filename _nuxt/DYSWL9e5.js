import{_ as L}from"./sKBOJonC.js";import{p as v,z as $,o as c,c as r,a as l,n as o,x as a,y as _,F as f,A as k,t as b,v as M,r as w,q as z,b as B}from"./DW43j2Iq.js";import{_ as y}from"./DlAUqK2U.js";const S=["disabled"],j={key:0},F=["disabled"],N=["onClick","disabled"],P={key:1},V=["disabled"],A=["disabled"],H=v({__name:"Pagination",props:{page:{},total:{},pageSize:{default:10},onChange:{type:Function}},setup(n){const i=$("pagination"),t=Math.ceil(n.total/n.pageSize),p=n.page<3||t<=5?0:n.page+2>=t?t-5:n.page-2,d=Array.from({length:Math.min(t,5)},(e,s)=>p+s),u=()=>{n.page>0&&n.onChange(n.page-1)},h=()=>{n.page<t-1&&n.onChange(n.page+1)};return(e,s)=>e.total>=e.pageSize?(c(),r("div",{key:0,class:o(a(i).pagination)},[l("button",{class:o(a(i).pagination__slide),onClick:u,disabled:e.page===0},s[2]||(s[2]=[l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},[l("path",{d:"M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z"})],-1)]),10,S),e.page>=3&&a(t)>5?(c(),r("div",j,[l("button",{class:o(a(i).pagination__btn),onClick:s[0]||(s[0]=g=>e.onChange(0)),disabled:e.page===0},"1",10,F),a(p)>1?(c(),r("span",{key:0,class:o(a(i).pagination__space)},"•••",2)):_("",!0)])):_("",!0),(c(!0),r(f,null,k(a(d),g=>(c(),r("button",{class:o(a(i).pagination__btn),key:g,onClick:m=>e.onChange(g),disabled:e.page===g},b(g+1),11,N))),128)),e.page+3<a(t)&&a(t)>5?(c(),r("div",P,[a(p)+4<a(t)?(c(),r("span",{key:0,class:o(a(i).pagination__space)},"•••",2)):_("",!0),l("button",{class:o(a(i).pagination__btn),onClick:s[1]||(s[1]=g=>e.onChange(a(t)-1)),disabled:e.page===a(t)-1},b(a(t)),11,V)])):_("",!0),l("button",{class:o(a(i).pagination__slide),onClick:h,disabled:e.page===a(t)-1},s[3]||(s[3]=[l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},[l("path",{d:"M13.172 12L8.222 7.04999L9.636 5.63599L16 12L9.636 18.364L8.222 16.95L13.172 12Z"})],-1)]),10,A)],2)):_("",!0)}}),Z="_pagination_tixj7_1",q="_pagination__slide_tixj7_11",D="_pagination__btn_tixj7_12",E={pagination:Z,pagination__slide:q,pagination__btn:D},G={pagination:E},I=y(H,[["__cssModules",G]]),J=v({__name:"characters",setup(n){const i=M("characters"),{data:t,meta:{pagination:{total:p}}}=i.value,d=w(0),u=()=>t.slice(d.value*6,d.value*6+6),h=e=>{d.value=e};return(e,s)=>{const g=L,m=I;return c(),r("div",{class:o(e.$style.page)},[l("h1",{class:o(e.$style.title)},"Characters",2),l("div",{class:o(e.$style.cards)},[(c(!0),r(f,null,k(u(),C=>(c(),z(g,{key:C.id,item:C},null,8,["item"]))),128))],2),B(m,{page:d.value,total:a(p),"page-size":6,onChange:h},null,8,["page","total"])],2)}}}),K="_page_1vcwh_2",O="_title_1vcwh_8",Q="_cards_1vcwh_11",R={page:K,title:O,cards:Q},T={$style:R},Y=y(J,[["__cssModules",T]]);export{Y as default};
