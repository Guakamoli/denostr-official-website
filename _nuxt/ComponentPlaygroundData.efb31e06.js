import b from"./TabsHeader.8219abce.js";import x from"./ComponentPlaygroundProps.5f8f7221.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.a3752689.js";import{_ as g}from"./ComponentPlaygroundTokens.vue.94fb8310.js";import{a as D}from"./index.063b0814.js";import{a as V,r as k,o as a,i as C,m as P,u as o,c as m,ai as T,l,x as B}from"./entry.40a4c6c6.js";import"./ProseH4.117f6f12.js";import"./ProseCodeInline.d35c6663.js";import"./Badge.8ce8c3cb.js";import"./ContentSlot.bd2ef679.js";import"./ProseP.1b0f76a1.js";const I={class:"component-playground-data"},j=V({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:r}){const n=D(t,"modelValue",r),e=k(0),c=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=s=>e.value=s;return(s,p)=>{const u=b,_=x,i=v,f=g;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:c,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":p[0]||(p[0]=y=>T(n)?n.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):l("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):l("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):l("",!0)])}}});const z=B(j,[["__scopeId","data-v-6a930128"]]);export{z as default};