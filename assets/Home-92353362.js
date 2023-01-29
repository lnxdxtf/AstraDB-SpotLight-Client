import{m as h,f as C,S as w,_ as l,g as m,o as s,c as i,a as n,t as a,e as r,F as _,r as g,b as $,d as v}from"./index-43c54b6c.js";const b={computed:{...h("astraModule",{$connections:"connections"})},methods:{...C("astraModule",{$setConnections:"SET_CONNECTIONS"}),howCreateAConnection(){w.fire({icon:"info",title:"How to save a connection",text:"To save local: you can add a connection in the connections array of the astradb_connections.json file",showConfirmButton:!1,showCancelButton:!1})}},async beforeMount(){this.$setConnections()}},x={mixins:[m]},y={class:"flex flex-col p-4 bg-astra-tertiary text-white rounded-md gap-6"},A={class:"w-full flex justify-center text-xl font-bold items-center"},k={class:"w-full flex justify-center"},N={class:"w-full flex flex-col gap-4 p-4 rounded-md bg-astra-quaternary"},S={class:"w-full flex justify-end text-xl font-bold"},T={class:"w-full flex gap-5 items-center"},D=n("span",{class:"whitespace-nowrap"},"HOST:",-1),j={class:"font-bold truncate"},B={class:"w-full flex gap-5 items-center"},E=n("span",{class:"whitespace-nowrap"},"DATABASE ID:",-1),O={class:"font-bold truncate"},I={class:"w-full flex gap-5 items-center"},M=n("span",{class:"whitespace-nowrap"},"REGION:",-1),q={class:"font-bold truncate"},H={class:"w-full flex gap-5 items-center"},R=n("span",{class:"whitespace-nowrap"},"X-CASSANDRA-TOKEN:",-1),F={class:"font-bold truncate"};function V(e,o,d,f,p,u){return s(),i("div",y,[n("div",A,[n("span",k,a(e.connection.name),1),n("i",{onClick:o[0]||(o[0]=t=>e.$removeConnection(e.connection)),class:"cursor-pointer fa-solid fa-square-xmark text-red-500 flex justify-end"})]),n("div",N,[n("div",S,[e.showConnectionData?(s(),i("i",{key:0,class:"fa-solid fa-eye-slash cursor-pointer",onClick:o[1]||(o[1]=t=>e.showConnectionData=!1)})):(s(),i("i",{key:1,class:"fa-solid fa-eye cursor-pointer",onClick:o[2]||(o[2]=t=>e.showConnectionData=!0)}))]),n("div",T,[D,n("span",j,a(e.showConnectionData?e.connection.host:"*".repeat(e.connection.host.length)),1)]),n("div",B,[E,n("span",O,a(e.showConnectionData?e.connection.databaseId:"*".repeat(e.connection.databaseId.length)),1)]),n("div",I,[M,n("span",q,a(e.showConnectionData?e.connection.region:"*".repeat(e.connection.region.length)),1)]),n("div",H,[R,n("span",F,a(e.showConnectionData?e.connection.xCassandraToken:"*".repeat(e.connection.xCassandraToken.length)),1)])]),n("div",{onClick:o[3]||(o[3]=(...t)=>e.connectClient&&e.connectClient(...t)),class:"w-full flex justify-center text-xl font-bold rounded-md bg-astra-contrast hover:hue-rotate-30 p-4 cursor-pointer transition-all duration-300 ease-in-out"}," CONNECT ")])}const G=l(x,[["render",V]]),K={mixins:[b],components:{AstraConnectionCard:G}},L={class:"w-full h-full flex flex-col gap-10"},X=n("div",{class:"w-full flex justify-center text-white font-bold text-3xl p-4"},"ASTRADB CONNECTIONS",-1),z={class:"w-full flex justify-between text-white font-bold text-xl items-center"},J=n("span",{class:"flex gap-4 items-center cursor-pointer rounded-md hover:bg-astra-secondary p-2 transition-colors duration-300 ease-linear","data-bs-toggle":"modal","data-bs-target":"#addAstraConnection"},[r(" Add Connection (in memory) "),n("i",{class:"fa-solid fa-plus"})],-1),P=n("i",{class:"fa-solid fa-circle-question"},null,-1),Q={class:"grid grid-cols-4 gap-4"};function U(e,o,d,f,p,u){const t=v("AstraConnectionCard");return s(),i("div",L,[X,n("div",z,[J,n("span",{onClick:o[0]||(o[0]=(...c)=>e.howCreateAConnection&&e.howCreateAConnection(...c)),class:"flex gap-4 items-center cursor-pointer p-2 rounded-md bg-astra-quaternary"},[r(" How To Save a Connection "),P])]),n("div",Q,[(s(!0),i(_,null,g(e.$connections,c=>(s(),$(t,{key:c.host,connection:c},null,8,["connection"]))),128))])])}const Y=l(K,[["render",U]]);export{Y as default};