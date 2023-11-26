"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[910],{4241:function(t,e,a){var s=a(1076);e.Z=new class{async getById(t){return await s.Z.post("https://backend.umom.pro/dishes/get/by/category",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}async getByDishId(t){return await s.Z.post("https://backend.umom.pro/dishes/get/by/id",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}async getAll(){return await s.Z.get("https://backend.umom.pro/dishes/get/all")}async createDish(t){return await s.Z.put("https://backend.umom.pro/dishes/create",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}async deleteDish(t){return await s.Z.delete("https://backend.umom.pro/dishes/delete",{headers:{"Content-Type":"application/json"},data:JSON.stringify(t)})}async editDish(t){return await s.Z.patch("https://backend.umom.pro/dishes/update",JSON.stringify(t),{headers:{"Content-Type":"application/json"}})}}},4796:function(t,e,a){a.d(e,{Z:function(){return c}});var s=a(3396);const n={class:"list"},i={class:"img__wrapper"},o=["src"],r=["onClick"];function d(t,e,a,d,u,l){const h=(0,s.up)("font-awesome-icon"),p=(0,s.up)("router-link"),c=(0,s.up)("DataTable");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(c,{class:"table",headers:a.headers,items:a.items,"sort-by":t.sortBy,"sort-type":t.sortType,onClickRow:l.show,"table-class-name":"customize-table",alternating:""},{"item-photo":(0,s.w5)((({photo_id:e})=>[(0,s._)("div",i,[(0,s._)("img",{src:t.src+e},null,8,o)])])),"item-del":(0,s.w5)((({id:t})=>[(0,s.Wm)(p,{to:{name:"editDish",params:{id:t}}},{default:(0,s.w5)((()=>[(0,s._)("button",null,[(0,s.Wm)(h,{icon:["fas","pen-to-square"]})])])),_:2},1032,["to"]),(0,s._)("button",{onClick:e=>l.del(t)},[(0,s.Wm)(h,{icon:["fas","trash"]})],8,r)])),_:1},8,["headers","items","sort-by","sort-type","onClickRow"])])}a(560);var u=a(4241),l={data:()=>({src:"https://backend.umom.pro/photos/download?id=",sortType:"asc",sortBy:"title"}),props:["headers","items","pushName","url","idless"],methods:{show(t){this.pushName&&(this.idless?this.$router.push({name:this.pushName}):this.$router.push({name:this.pushName,params:{id:t.id}}))},async del(t){await u.Z.deleteDish({id:t}),location.reload()}}},h=a(89);const p=(0,h.Z)(l,[["render",d],["__scopeId","data-v-370ddd9e"]]);var c=p},4396:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var s=a(3396);function n(t,e,a,n,i,o){const r=(0,s.up)("BaseTitle"),d=(0,s.up)("DataList"),u=(0,s.up)("router-link"),l=(0,s.up)("MainLayout");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Блюда")])),_:1}),(0,s.Wm)(d,{headers:t.headers,items:t.items},null,8,["headers","items"]),(0,s.Wm)(u,{class:"link",to:{name:"createDish",params:{id:t.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)("+")])),_:1},8,["to"])])),_:1})}var i=a(5535),o=a(4796),r=a(4241),d={components:{MainLayout:i.Z,DataList:o.Z},data:()=>({years:["Зима","Весна","Лето","Осень"],days:["Ночь","Утро","День","Вечер"],weather:["Ясно","Переменная обласночть","Постоянная облачность","Дождь","Снег"],count:1e3,id:null,headers:[{text:"Фото",value:"photo"},{text:"Название",value:"title"},{text:"Описание",value:"description"},{text:"Цена",value:"price"},{text:"Калории",value:"calories"},{text:"Белки",value:"proteins"},{text:"Жиры",value:"fats"},{text:"Углеводы",value:"carbohydrates"},{text:"Время года",value:"year"},{text:"Время дня",value:"day"},{text:"Колчичество заказов",value:"count"},{text:"Погода",value:"weather"},{text:"",value:"del"}],items:[]}),methods:{getRandomInt(t){return Math.floor(Math.random()*t)},async getData(){const t={category_id:this.$route.params.id};return await r.Z.getById(t)},pushStats(){for(let t of this.items)t.year=this.years[this.getRandomInt(3)],t.day=this.days[this.getRandomInt(3)],t.weather=this.weather[this.getRandomInt(4)],t.count=this.getRandomInt(1e3)}},async mounted(){await this.getData().then((t=>{this.items=t.data,console.log(t.data)})).catch((t=>console.log(t))),this.pushStats()}},u=a(89);const l=(0,u.Z)(d,[["render",n],["__scopeId","data-v-19ceb818"]]);var h=l}}]);
//# sourceMappingURL=910.52928104.js.map