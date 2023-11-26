"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[672],{1160:function(t,e,o){o.d(e,{z:function(){return n}});const n=t=>{const e=t.target.files[0],o=new FormData;return o.append("photo",e),o}},7775:function(t,e,o){var n=o(1076);e.Z=new class{async getAll(){return await n.Z.get("https://backend.umom.pro/news/get")}async createNew(t){return await n.Z.put("https://backend.umom.pro/news/create",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}}},6793:function(t,e,o){var n=o(7327),a=o(1076);e.Z=new class{constructor(){(0,n.Z)(this,"async",void 0)}async uploadPhoto(t){return await a.Z.post("https://backend.umom.pro/photos/upload",t,{headers:{"Content-Type":"multipart/form-data"}})}}},444:function(t,e,o){o.d(e,{Z:function(){return i}});var n=o(3396);function a(t,e){return(0,n.wg)(),(0,n.iD)("button",null,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var r=o(89);const u={},l=(0,r.Z)(u,[["render",a],["__scopeId","data-v-32169d61"]]);var i=l},8731:function(t,e,o){o.d(e,{Z:function(){return s}});var n=o(3396);const a={class:"form"};function r(t,e){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var u=o(89);const l={},i=(0,u.Z)(l,[["render",r],["__scopeId","data-v-eb5f1c9c"]]);var s=i},6020:function(t,e,o){o.d(e,{Z:function(){return i}});var n=o(3396);const a=["type","value","placeholder"];var r={__name:"BaseInput",props:["type","value","placeholder"],emits:["update:value"],setup(t,{emit:e}){const o=e,r=t=>{o("update:value",t.target.value)};return(e,o)=>((0,n.wg)(),(0,n.iD)("input",{type:t.type,value:t.value,onInput:r,placeholder:t.placeholder},null,40,a))}},u=o(89);const l=(0,u.Z)(r,[["__scopeId","data-v-32febc6f"]]);var i=l},508:function(t,e,o){o.r(e),o.d(e,{default:function(){return b}});var n=o(3396);const a=t=>((0,n.dD)("data-v-59075fa9"),t=t(),(0,n.Cn)(),t),r={class:"photo"},u=a((()=>(0,n._)("label",{for:"photo"},"Фото",-1)));function l(t,e,o,a,l,i){const s=(0,n.up)("BaseTitle"),c=(0,n.up)("BaseInput"),p=(0,n.up)("BaseButton"),d=(0,n.up)("BaseForm"),h=(0,n.up)("MainLayout");return(0,n.wg)(),(0,n.j4)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Создать новость")])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{type:"text",placeholder:"Заголовок",value:t.title,"onUpdate:value":e[0]||(e[0]=e=>t.title=e)},null,8,["value"]),(0,n.Wm)(c,{type:"text",placeholder:"Содержание",value:t.body,"onUpdate:value":e[1]||(e[1]=e=>t.body=e)},null,8,["value"]),(0,n._)("div",r,[u,(0,n.Wm)(c,{type:"file",id:"photo",onChange:i.getPhoto},null,8,["onChange"])]),(0,n.Wm)(p,{onClick:i.uploadPhoto,class:"btn"},{default:(0,n.w5)((()=>[(0,n.Uk)("Создать")])),_:1},8,["onClick"])])),_:1})])),_:1})}o(560);var i=o(5535),s=o(8731),c=o(6020),p=o(444),d=o(1160),h=o(7775),f=o(6793),v={components:{MainLayout:i.Z,BaseForm:s.Z,BaseInput:c.Z,BaseButton:p.Z},data:()=>({title:"",body:"",photoFormData:null,photo_id:null}),methods:{getPhoto(t){this.photoFormData=(0,d.z)(t),console.log(this.photoFormData)},async getData(){await h.Z.getAll().then((t=>{this.items=t.data})).catch((t=>console.log(t)))},async uploadPhoto(){this.photoFormData&&await f.Z.uploadPhoto(this.photoFormData).then((async t=>{this.photoId=t.data.file_id,await this.createDish()}))},async createDish(){const t={title:this.title,body:this.body,photo_id:this.photoId};await h.Z.createNew(t).then((()=>{alert("Новость успешно создана!"),this.$router.push({name:"news"})})).catch((t=>alert("Что-то пошло не так(: \n"+t)))}}},m=o(89);const y=(0,m.Z)(v,[["render",l],["__scopeId","data-v-59075fa9"]]);var b=y},7327:function(t,e,o){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(t,e){if("object"!==n(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var a=o.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function r(t){var e=a(t,"string");return"symbol"===n(e)?e:String(e)}function u(t,e,o){return e=r(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.d(e,{Z:function(){return u}})}}]);
//# sourceMappingURL=672.dfc182d7.js.map