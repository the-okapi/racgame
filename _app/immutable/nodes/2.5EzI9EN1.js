import{s as M,n as q,r as I}from"../chunks/scheduler.k-kUyWhY.js";import{S as D,i as F,g as c,m as x,s as v,h as b,j as k,n as C,f as r,c as w,a as p,x as G,y as N,o as U,r as J,z as L,u as K,v as Q,d as V,t as W,w as X}from"../chunks/index.W6N13fT5.js";const Z=[{text:"You see a random capybara",yes:{text:"You pet the capybara",page:1,ending:[!1,null]},no:{text:"You leave",page:2,ending:[!0,"You are a weird person"]}},{text:"You see a grandma trying to cross the road",yes:{text:"You help her",page:3,ending:[!1,null]},no:{text:"You leave",page:4,ending:[!1,null]}},{text:"You see a random person",yes:{text:"You push them down into the road",page:null,ending:[!0,"You are a bad person"]},no:{text:"You leave",page:3,ending:[!1,null]}},{text:"You are in jail for 1 year",yes:{text:"You escape",page:null,ending:[!0,"You are a criminal"]},no:{text:"You wait out your sentence",page:4,ending:[!1,null]}},{text:"Someone pushes you into the road",yes:{text:"You leave",page:null,ending:[!0,"You are a good person"]},no:{text:"You retaliate",page:null,ending:[!0,"You could use some anger management training"]}}],$={data:Z};function ee(n){let a,s,o,d,i,f,m,l,e,h,Y,y,_,T,E,S,g,O,B,R,z;return{c(){a=c("p"),s=x(n[1]),d=v(),i=c("button"),f=x(n[3]),l=v(),e=c("button"),h=x(n[2]),y=v(),_=c("button"),T=x("Start Game"),S=v(),g=c("button"),O=x("Restart Game"),this.h()},l(t){a=b(t,"P",{});var u=k(a);s=C(u,n[1]),u.forEach(r),d=w(t),i=b(t,"BUTTON",{});var H=k(i);f=C(H,n[3]),H.forEach(r),l=w(t),e=b(t,"BUTTON",{});var P=k(e);h=C(P,n[2]),P.forEach(r),y=w(t),_=b(t,"BUTTON",{});var j=k(_);T=C(j,"Start Game"),j.forEach(r),S=w(t),g=b(t,"BUTTON",{});var A=k(g);O=C(A,"Restart Game"),A.forEach(r),this.h()},h(){a.hidden=o=n[0][2],i.hidden=m=n[0][1],e.hidden=Y=n[0][1],_.hidden=E=n[0][0],g.hidden=B=n[0][3]},m(t,u){p(t,a,u),G(a,s),p(t,d,u),p(t,i,u),G(i,f),p(t,l,u),p(t,e,u),G(e,h),p(t,y,u),p(t,_,u),G(_,T),p(t,S,u),p(t,g,u),G(g,O),R||(z=[N(i,"click",n[5]),N(e,"click",n[6]),N(_,"click",n[4]),N(g,"click",te)],R=!0)},p(t,[u]){u&2&&U(s,t[1]),u&1&&o!==(o=t[0][2])&&(a.hidden=o),u&8&&U(f,t[3]),u&1&&m!==(m=t[0][1])&&(i.hidden=m),u&4&&U(h,t[2]),u&1&&Y!==(Y=t[0][1])&&(e.hidden=Y),u&1&&E!==(E=t[0][0])&&(_.hidden=E),u&1&&B!==(B=t[0][3])&&(g.hidden=B)},i:q,o:q,d(t){t&&(r(a),r(d),r(i),r(l),r(e),r(y),r(_),r(S),r(g)),R=!1,I(z)}}}function te(){window.location.reload()}function ne(n,a,s){let o,d,i,f,m=0,l=[!1,!0,!0,!0],e=$.data;function h(){s(0,l[0]=!0,l),s(0,l[1]=!1,l),s(0,l[2]=!1,l)}function Y(){o.yes.ending[0]?_(o.yes.ending[1]):s(7,m=o.yes.page)}function y(){o.no.ending[0]?_(o.no.ending[1]):s(7,m=o.no.page)}function _(T){s(0,l[1]=!0,l),s(0,l[3]=!1,l),s(1,d=T)}return n.$$.update=()=>{n.$$.dirty&128&&s(8,o=e[m]),n.$$.dirty&256&&s(1,d=o.text),n.$$.dirty&256&&s(3,i=o.yes.text),n.$$.dirty&256&&s(2,f=o.no.text)},[l,d,f,i,h,Y,y,m,o]}class ae extends D{constructor(a){super(),F(this,a,ne,ee,M,{})}}function oe(n){let a,s="RAC Game",o,d,i,f,m='To learn more about RAC, click <a href="http://www.realactsofcaring.org/" target="_blank">here</a>',l;return d=new ae({}),{c(){a=c("h1"),a.textContent=s,o=v(),J(d.$$.fragment),i=v(),f=c("p"),f.innerHTML=m},l(e){a=b(e,"H1",{"data-svelte-h":!0}),L(a)!=="svelte-vzw3lo"&&(a.textContent=s),o=w(e),K(d.$$.fragment,e),i=w(e),f=b(e,"P",{"data-svelte-h":!0}),L(f)!=="svelte-6q6kez"&&(f.innerHTML=m)},m(e,h){p(e,a,h),p(e,o,h),Q(d,e,h),p(e,i,h),p(e,f,h),l=!0},p:q,i(e){l||(V(d.$$.fragment,e),l=!0)},o(e){W(d.$$.fragment,e),l=!1},d(e){e&&(r(a),r(o),r(i),r(f)),X(d,e)}}}class se extends D{constructor(a){super(),F(this,a,null,oe,M,{})}}export{se as component};
