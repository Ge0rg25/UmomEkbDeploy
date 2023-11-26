"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[731],{1160:function(t,e,o){o.d(e,{z:function(){return n}});const n=t=>{const e=t.target.files[0],o=new FormData;return o.append("photo",e),o}},5841:function(t,e,o){var n=o(1076);e.Z=new class{async getAll(){return await n.Z.get("https://backend.umom.pro/organizations/get/all")}async createOrg(t){return await n.Z.put("https://backend.umom.pro/organizations/create",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}}},6793:function(t,e,o){var n=o(7327),a=o(1076);e.Z=new class{constructor(){(0,n.Z)(this,"async",void 0)}async uploadPhoto(t){return await a.Z.post("https://backend.umom.pro/photos/upload",t,{headers:{"Content-Type":"multipart/form-data"}})}}},444:function(t,e,o){o.d(e,{Z:function(){return i}});var n=o(3396);function a(t,e){return(0,n.wg)(),(0,n.iD)("button",null,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var r=o(89);const u={},l=(0,r.Z)(u,[["render",a],["__scopeId","data-v-32169d61"]]);var i=l},8731:function(t,e,o){o.d(e,{Z:function(){return s}});var n=o(3396);const a={class:"form"};function r(t,e){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var u=o(89);const l={},i=(0,u.Z)(l,[["render",r],["__scopeId","data-v-eb5f1c9c"]]);var s=i},6020:function(t,e,o){o.d(e,{Z:function(){return i}});var n=o(3396);const a=["type","value","placeholder"];var r={__name:"BaseInput",props:["type","value","placeholder"],emits:["update:value"],setup(t,{emit:e}){const o=e,r=t=>{o("update:value",t.target.value)};return(e,o)=>((0,n.wg)(),(0,n.iD)("input",{type:t.type,value:t.value,onInput:r,placeholder:t.placeholder},null,40,a))}},u=o(89);const l=(0,u.Z)(r,[["__scopeId","data-v-32febc6f"]]);var i=l},2602:function(t,e,o){o.r(e),o.d(e,{default:function(){return b}});var n=o(3396);const a=t=>((0,n.dD)("data-v-5a9e0468"),t=t(),(0,n.Cn)(),t),r={class:"photo"},u=a((()=>(0,n._)("label",{for:"photo"},"Фото",-1)));function l(t,e,o,a,l,i){const s=(0,n.up)("BaseTitle"),c=(0,n.up)("BaseInput"),p=(0,n.up)("BaseButton"),d=(0,n.up)("BaseForm"),f=(0,n.up)("MainLayout");return(0,n.wg)(),(0,n.j4)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Создать организацию")])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{placeholder:"Наименование",type:"text",value:t.title,"onUpdate:value":e[0]||(e[0]=e=>t.title=e)},null,8,["value"]),(0,n.Wm)(c,{placeholder:"Описание",type:"text",value:t.description,"onUpdate:value":e[1]||(e[1]=e=>t.description=e)},null,8,["value"]),(0,n.Wm)(c,{placeholder:"Адрес",type:"text",value:t.address,"onUpdate:value":e[2]||(e[2]=e=>t.address=e)},null,8,["value"]),(0,n._)("div",r,[u,(0,n.Wm)(c,{placeholder:"Наименование",type:"file",id:"photo",onChange:i.getPhoto},null,8,["onChange"])]),(0,n.Wm)(p,{onClick:i.uploadPhoto,class:"btn"},{default:(0,n.w5)((()=>[(0,n.Uk)("Создать")])),_:1},8,["onClick"])])),_:1})])),_:1})}var i=o(2252),s=o(4787),c=o(8731),p=o(6020),d=o(444),f=o(6793),h=o(1160),v=o(5841),m={data:()=>({title:"",description:"",address:"",photoFormData:null,photoId:null}),components:{BaseButton:d.Z,MainLayout:i.Z,BaseTitle:s.Z,BaseForm:c.Z,BaseInput:p.Z},methods:{getPhoto(t){this.photoFormData=(0,h.z)(t)},async uploadPhoto(){this.photoFormData&&await f.Z.uploadPhoto(this.photoFormData).then((async t=>{this.photoId=t.data.file_id,await this.createOrg()})).catch((t=>console.log(t)))},async createOrg(){const t={title:this.title,description:this.description,address:this.address,photo_id:this.photoId};await v.Z.createOrg(t).then((t=>console.log(t))).catch((t=>console.log(t)))}}},y=o(89);const g=(0,y.Z)(m,[["render",l],["__scopeId","data-v-5a9e0468"]]);var b=g},7327:function(t,e,o){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(t,e){if("object"!==n(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var a=o.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function r(t){var e=a(t,"string");return"symbol"===n(e)?e:String(e)}function u(t,e,o){return e=r(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.d(e,{Z:function(){return u}})}}]);
//# sourceMappingURL=731.f3161579.js.map