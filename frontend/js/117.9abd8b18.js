"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[117],{1160:function(t,e,o){o.d(e,{z:function(){return n}});const n=t=>{const e=t.target.files[0],o=new FormData;return o.append("photo",e),o}},4873:function(t,e,o){var n=o(1076);e.Z=new class{async getAll(){return await n.Z.get("https://backend.umom.pro/categories/get/all")}async createOrg(t){return await n.Z.put("https://backend.umom.pro/categories/create",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}}},6793:function(t,e,o){var n=o(7327),a=o(1076);e.Z=new class{constructor(){(0,n.Z)(this,"async",void 0)}async uploadPhoto(t){return await a.Z.post("https://backend.umom.pro/photos/upload",t,{headers:{"Content-Type":"multipart/form-data"}})}}},444:function(t,e,o){o.d(e,{Z:function(){return l}});var n=o(3396);function a(t,e){return(0,n.wg)(),(0,n.iD)("button",null,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var r=o(89);const u={},i=(0,r.Z)(u,[["render",a],["__scopeId","data-v-32169d61"]]);var l=i},8731:function(t,e,o){o.d(e,{Z:function(){return c}});var n=o(3396);const a={class:"form"};function r(t,e){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var u=o(89);const i={},l=(0,u.Z)(i,[["render",r],["__scopeId","data-v-eb5f1c9c"]]);var c=l},6020:function(t,e,o){o.d(e,{Z:function(){return l}});var n=o(3396);const a=["type","value","placeholder"];var r={__name:"BaseInput",props:["type","value","placeholder"],emits:["update:value"],setup(t,{emit:e}){const o=e,r=t=>{o("update:value",t.target.value)};return(e,o)=>((0,n.wg)(),(0,n.iD)("input",{type:t.type,value:t.value,onInput:r,placeholder:t.placeholder},null,40,a))}},u=o(89);const i=(0,u.Z)(r,[["__scopeId","data-v-32febc6f"]]);var l=i},4160:function(t,e,o){o.r(e),o.d(e,{default:function(){return g}});var n=o(3396);const a=t=>((0,n.dD)("data-v-0d06d215"),t=t(),(0,n.Cn)(),t),r={class:"photo"},u=a((()=>(0,n._)("label",{for:"photo"},"Фото",-1)));function i(t,e,o,a,i,l){const c=(0,n.up)("BaseTitle"),s=(0,n.up)("BaseInput"),p=(0,n.up)("BaseButton"),d=(0,n.up)("BaseForm"),f=(0,n.up)("MainLayout");return(0,n.wg)(),(0,n.j4)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Создать категорию")])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,{type:"text",placeholder:"Название",value:t.title,"onUpdate:value":e[0]||(e[0]=e=>t.title=e)},null,8,["value"]),(0,n.Wm)(s,{type:"text",placeholder:"Описание",value:t.description,"onUpdate:value":e[1]||(e[1]=e=>t.description=e)},null,8,["value"]),(0,n._)("div",r,[u,(0,n.Wm)(s,{type:"file",id:"photo",onChange:l.uploadPhoto},null,8,["onChange"])]),(0,n.Wm)(p,{onClick:l.createOrg,class:"btn"},{default:(0,n.w5)((()=>[(0,n.Uk)("Создать")])),_:1},8,["onClick"])])),_:1})])),_:1})}o(560);var l=o(5535),c=o(8731),s=o(6020),p=o(1160),d=o(6793),f=o(444),h=o(4873),v={components:{BaseButton:f.Z,MainLayout:l.Z,BaseInput:s.Z,BaseForm:c.Z},data:()=>({title:"",description:"",photoId:null,organizationId:null}),methods:{getPhoto(t){this.photoFormData=(0,p.z)(t)},async uploadPhoto(){this.photoFormData&&await d.Z.uploadPhoto(this.photoFormData).then((async t=>{this.photoId=t.data.file_id,await this.createOrg()})).catch((t=>console.log(t)))},async createOrg(){const t={title:this.title,description:this.description,organization_id:this.$route.params.id,photo_id:this.photoId};await h.Z.createOrg(t).then((()=>{alert("Категория успешно добавлена!"),this.$router.push({name:"orgsById"})})).catch((t=>alert("Что-пошло не так(: \n"+t)))}}},m=o(89);const y=(0,m.Z)(v,[["render",i],["__scopeId","data-v-0d06d215"]]);var g=y},7327:function(t,e,o){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(t,e){if("object"!==n(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var a=o.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function r(t){var e=a(t,"string");return"symbol"===n(e)?e:String(e)}function u(t,e,o){return e=r(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.d(e,{Z:function(){return u}})}}]);
//# sourceMappingURL=117.9abd8b18.js.map