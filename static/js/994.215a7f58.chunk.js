"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[994],{928:(t,a,e)=>{e.d(a,{c:()=>n});const c=e.p+"static/media/004 error.42292aa12b6bc303ce99.gif";var r=e(496);const n=()=>(0,r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:c,alt:"Error message"})},165:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});var c=e(60),r=e(560),n=e(424),s=e(88),o=e(928),i=e(496);const l=t=>{let{Component:a,dataType:e}=t;const{id:l}=(0,r.W4)(),[u,d]=(0,c.useState)(null),{loading:h,error:m,getComics:p,getCharacter:g,clearError:f}=(0,n.c)();(0,c.useEffect)((()=>{b()}),[l]);const b=()=>{switch(f(),e){case"comic":p(l).then(w);break;case"character":g(l).then(w)}},w=t=>{d(t)},C=h||m||!u?null:(0,i.jsx)(a,{data:u}),y=m?(0,i.jsx)(o.c,{}):null,v=h?(0,i.jsx)(s.c,{}):null;return(0,i.jsxs)(i.Fragment,{children:[C,y,v]})}},424:(t,a,e)=>{e.d(a,{c:()=>r});var c=e(60);const r=()=>{const{loading:t,request:a,error:e,clearError:r,process:n,setProcess:s}=(()=>{const[t,a]=(0,c.useState)(!1),[e,r]=(0,c.useState)(null),[n,s]=(0,c.useState)("waiting");return{loading:t,request:(0,c.useCallback)((async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0),s("loading");try{const r=await fetch(t,{method:e,body:c,headers:n});if(!r.ok)throw new Error("Could not fetch ".concat(t,", status ").concat(r.status));const s=await r.json();return a(!1),s}catch(o){throw a(!1),r(o.message),s("error"),o}}),[]),error:e,clearError:(0,c.useCallback)((()=>{r(null),s("loading")}),[]),process:n,setProcess:s}})(),o="https://gateway.marvel.com:443/v1/public/",i="apikey=0b16f2ffd7429e208117962440421f77",l=t=>({name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comics:t.comics.items}),u=t=>({title:t.title,price:t.prices[0].price,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,id:t.id,url:t.urls[0].url,description:t.description,pageCount:t.pageCount,language:t.textObjects.language||"en-US"});return{loading:t,error:e,process:n,setProcess:s,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await a("".concat(o,"characters?limit=9&offset=").concat(t,"&").concat(i))).data.results.map(l)},getCharacter:async t=>{const e=await a("".concat(o,"characters/").concat(t,"?").concat(i));return l(e.data.results[0])},clearError:r,getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await a("".concat(o,"comics?limit=8&offset=").concat(t,"&").concat(i))).data.results.map(u)},getComics:async t=>{const e=await a("".concat(o,"comics/").concat(t,"?").concat(i));return u(e.data.results[0])},getCharacterByName:async t=>(await a("".concat(o,"characters?name=").concat(t,"&").concat(i))).data.results.map(l)}}}}]);
//# sourceMappingURL=994.215a7f58.chunk.js.map