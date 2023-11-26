"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[955],{4241:function(t,e,a){var s=a(1076);e.Z=new class{async getById(t){return await s.Z.post("https://backend.umom.pro/dishes/get/by/category",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}async getByDishId(t){return await s.Z.post("https://backend.umom.pro/dishes/get/by/id",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}async getAll(){return await s.Z.get("https://backend.umom.pro/dishes/get/all")}async createDish(t){return await s.Z.put("https://backend.umom.pro/dishes/create",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}async deleteDish(t){return await s.Z.delete("https://backend.umom.pro/dishes/delete",{headers:{"Content-Type":"application/json"},data:JSON.stringify(t)})}async editDish(t){return await s.Z.patch("https://backend.umom.pro/dishes/update",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}}},5841:function(t,e,a){var s=a(1076);e.Z=new class{async getAll(){return await s.Z.get("https://backend.umom.pro/organizations/get/all")}async createOrg(t){return await s.Z.put("https://backend.umom.pro/organizations/create",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}}},4796:function(t,e,a){a.d(e,{Z:function(){return h}});var s=a(3396);const n={class:"list"},i={class:"img__wrapper"},o=["src"],r=["onClick"];function d(t,e,a,d,p,l){const u=(0,s.up)("font-awesome-icon"),c=(0,s.up)("router-link"),h=(0,s.up)("DataTable");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(h,{class:"table",headers:a.headers,items:a.items,"sort-by":t.sortBy,"sort-type":t.sortType,onClickRow:l.show,"table-class-name":"customize-table",alternating:""},{"item-photo":(0,s.w5)((({photo_id:e})=>[(0,s._)("div",i,[(0,s._)("img",{src:t.src+e},null,8,o)])])),"item-del":(0,s.w5)((({id:t})=>[(0,s.Wm)(c,{to:{name:"editDish",params:{id:t}}},{default:(0,s.w5)((()=>[(0,s._)("button",null,[(0,s.Wm)(u,{icon:["fas","pen-to-square"]})])])),_:2},1032,["to"]),(0,s._)("button",{onClick:e=>l.del(t)},[(0,s.Wm)(u,{icon:["fas","trash"]})],8,r)])),_:1},8,["headers","items","sort-by","sort-type","onClickRow"])])}a(560);var p=a(4241),l={data:()=>({src:"https://backend.umom.pro/photos/download?id=",sortType:"asc",sortBy:"title"}),props:["headers","items","pushName","url","idless"],methods:{show(t){this.pushName&&(this.idless?this.$router.push({name:this.pushName}):this.$router.push({name:this.pushName,params:{id:t.id}}))},async del(t){await p.Z.deleteDish({id:t}),location.reload()}}},u=a(89);const c=(0,u.Z)(l,[["render",d],["__scopeId","data-v-370ddd9e"]]);var h=c},5129:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var s=a(3396);function n(t,e,a,n,i,o){const r=(0,s.up)("BaseTitle"),d=(0,s.up)("DataList"),p=(0,s.up)("BaseLink"),l=(0,s.up)("MainLayout");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Организации")])),_:1}),(0,s.Wm)(d,{headers:t.headers,items:t.items,"push-name":"orgsById"},null,8,["headers","items"]),(0,s.Wm)(p,{class:"link",link:{name:"createOrg"}},{default:(0,s.w5)((()=>[(0,s.Uk)("+")])),_:1})])),_:1})}var i=a(5535),o=a(4787),r=a(4796),d=a(1020),p=a(5841),l=(0,d.Q_)("orgs",{state:()=>({orgs:[]}),actions:{async getAll(){return await p.Z.getAll()}}}),u=a(3415),c={components:{BaseLink:u.Z,MainLayout:i.Z,BaseTitle:o.Z,DataList:r.Z},data:()=>({store:l(),headers:[{text:"ID",value:"id"},{text:"Фото",value:"photo"},{text:"Наименование",value:"title",sortable:!0},{text:"Описание",value:"description"},{text:"Адрес",value:"address"}],items:[]}),methods:{async getData(){return await this.store.getAll()}},async mounted(){await this.getData().then((t=>this.items=t.data))}},h=a(89);const m=(0,h.Z)(c,[["render",n],["__scopeId","data-v-2c210dee"]]);var y=m}}]);
//# sourceMappingURL=955.ffa68c42.js.map