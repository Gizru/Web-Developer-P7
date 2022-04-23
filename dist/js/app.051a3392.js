(function(){"use strict";var e={3982:function(e,t,_){var n=_(9242),a=_(65),s=_(3396),o=_(7139),i=_(6519),l=_(6265),r=_.n(l);const d={class:"button"},u={class:"red"};function c(e,t,_,n,a,i){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("h1",u,(0,o.zw)(_.name),1)])}var m={name:"NavButtons",props:["name"]},p=_(89);const h=(0,p.Z)(m,[["render",c],["__scopeId","data-v-aed0041c"]]);var v=h,b=_(7334);const f=e=>((0,s.dD)("data-v-64598bd6"),e=e(),(0,s.Cn)(),e),g={class:"profile"},w=f((()=>(0,s._)("div",{class:"profile__holder"},[(0,s._)("img",{class:"profile__holder__img",src:b})],-1))),y={class:"profile__text"},D={class:"profile__text__author"};function U(e,t,_,n,a,i){return(0,s.wg)(),(0,s.iD)("div",g,[w,(0,s._)("div",y,[(0,s._)("h2",D,(0,o.zw)(e.$store.state.userName),1)])])}var C={name:"ProfileView",data(){},computed:{},methods:{}};const I=(0,p.Z)(C,[["render",U],["__scopeId","data-v-64598bd6"]]);var k=I;const N={class:"button"},W={class:"red"};function L(e,t,_,n,a,i){return(0,s.wg)(),(0,s.iD)("div",N,[(0,s._)("h1",W,(0,o.zw)(_.name),1)])}var F={name:"NavButtons",props:["name"]};const j=(0,p.Z)(F,[["render",L],["__scopeId","data-v-5a8a2c5d"]]);var P=j;const M={id:"page"},O={class:"logoDiv"},x=(0,s._)("img",{alt:"Vue logo",class:"logo",src:i},null,-1),V={class:"profile"},$={class:"controls"},E=(0,s.Uk)(" Log Out "),Z=(0,s.Uk)(" Delete "),S={name:"App",data(){return{isLoggedIn:this.$store.state.connected}},methods:{async logout(){this.$store.dispatch("Logout"),this.isLoggedIn=this.$store.state.connected,console.log(this.$store.state.connected)},async deleteUser(){let e=this.$store.state.userId;r()["delete"]("http://localhost:3000/api/auth/delete/"+e).then((e=>{console.log(e)})),this.logout()}}};var T=Object.assign(S,{setup(e){return(e,t)=>{const _=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("header",null,[(0,s._)("div",O,[(0,s.Wm)(_,{to:"/default"},{default:(0,s.w5)((()=>[x])),_:1})]),(0,s._)("nav",null,[(0,s.Wm)(_,{to:{name:"Recent"},style:(0,o.j5)([this.$store.state.connected?{"pointer-events":"auto"}:{"pointer-events":"none"}])},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{name:"Recent"})])),_:1},8,["style"]),(0,s.Wm)(_,{to:{name:"Memes"},style:(0,o.j5)([this.$store.state.connected?{"pointer-events":"auto"}:{"pointer-events":"none"}])},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{name:"Memes"})])),_:1},8,["style"]),(0,s.Wm)(_,{to:{name:"Forum"},style:(0,o.j5)([this.$store.state.connected?{"pointer-events":"auto"}:{"pointer-events":"none"}])},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{name:"Forum"})])),_:1},8,["style"])]),(0,s._)("div",V,[(0,s.Wm)(k)]),(0,s._)("div",$,[(0,s._)("div",{style:(0,o.j5)([this.$store.state.connected?{"pointer-events":"auto"}:{"pointer-events":"none"}])},[(0,s.Wm)(_,{to:"/default"},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"LogOut",onClick:e.logout},{default:(0,s.w5)((()=>[E])),_:1},8,["onClick"])])),_:1})],4),(0,s._)("div",{style:(0,o.j5)([this.$store.state.connected?{"pointer-events":"auto"}:{"pointer-events":"none"}])},[(0,s.Wm)(_,{to:"/default"},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"Delete",onClick:e.deleteUser},{default:(0,s.w5)((()=>[Z])),_:1},8,["onClick"])])),_:1})],4)])]),(0,s._)("main",null,[(0,s.Wm)(n)])])}}});const H=T;var Y=H,z=_(678);const R=e=>((0,s.dD)("data-v-f9d577be"),e=e(),(0,s.Cn)(),e),B={class:"page"},K={class:"unlogged"},A=R((()=>(0,s._)("h1",null,"Login or Signup to view the content",-1))),q=R((()=>(0,s._)("br",null,null,-1))),G={class:"nav"},J=R((()=>(0,s._)("br",null,null,-1))),Q={name:"Unlogged-view",props:["msg"]};var X=Object.assign(Q,{setup(e){return(e,t)=>{const _=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("div",K,[A,q,(0,s._)("div",G,[(0,s.Wm)(_,{to:{name:"SignupView"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"Signup"})])),_:1}),(0,s.Wm)(_,{to:{name:"LoginView"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"Login"})])),_:1})]),J,(0,s.Wm)(n)])])}}});const ee=(0,p.Z)(X,[["__scopeId","data-v-f9d577be"]]);var te=ee;const _e={class:"memes"},ne={class:"memes__holder"},ae=["src"],se={class:"memes__text"},oe={class:"memes__text__author"},ie={class:"memes__text__content"};function le(e,t,_,n,a,i){return(0,s.wg)(),(0,s.iD)("div",_e,[(0,s._)("div",ne,[(0,s._)("img",{alt:"Meme Image",src:_.source},null,8,ae)]),(0,s._)("div",se,[(0,s._)("h2",oe,(0,o.zw)(_.authorName),1),(0,s._)("p",ie,(0,o.zw)(_.description),1)]),(0,s._)("div",{class:"new",style:(0,o.j5)([this.newCheck?{opacity:"1"}:{opacity:"0"}])}," NEW ",4)])}var re={name:"MemesCard",data(){return{newCheck:!1}},props:{source:String,authorName:String,description:String,_id:String},created(){r().put("http://localhost:3000/api/memes/",{_id:this._id,userId:this.$store.state.userId}).then((e=>{e.data.isNew&&(this.newCheck=!0)}))}};const de=(0,p.Z)(re,[["render",le],["__scopeId","data-v-512b62f1"]]);var ue=de;const ce={class:"forum"},me={class:"forum__author"},pe={class:"forum__content"};function he(e,t,_,n,a,i){return(0,s.wg)(),(0,s.iD)("div",ce,[(0,s._)("h2",me,(0,o.zw)(a.Title),1),(0,s._)("p",pe,(0,o.zw)(a.Content),1),(0,s._)("div",{class:"new",style:(0,o.j5)([this.newCheck?{opacity:"1"}:{opacity:"0"}])}," NEW ",4)])}var ve={name:"ForumCard",props:["title","content","_id"],data(){return{Title:this.title,Content:this.content,newCheck:!1}},async mounted(){r().put("http://localhost:3000/api/forum/",{_id:this._id,userId:this.$store.state.userId}).then((e=>{e.data.isNew&&(this.newCheck=!0)}))}};const be=(0,p.Z)(ve,[["render",he],["__scopeId","data-v-13748bba"]]);var fe=be;const ge=e=>((0,s.dD)("data-v-83bbedc2"),e=e(),(0,s.Cn)(),e),we={class:"page"},ye=ge((()=>(0,s._)("h1",null,"Most resent plublished content",-1))),De=ge((()=>(0,s._)("br",null,null,-1))),Ue=(0,s.Uk)(" _________________________________________________________________________________________________________ "),Ce=ge((()=>(0,s._)("br",null,null,-1))),Ie=ge((()=>(0,s._)("br",null,null,-1))),ke=ge((()=>(0,s._)("br",null,null,-1))),Ne={class:"display"},We={class:"display__Memes"},Le=(0,s.uE)("<div data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2> |<br data-v-83bbedc2></div>",1),Fe={class:"display__Forum"},je={name:"ForumView",data(){return{forumsDiplayed:[],memesDiplayed:[]}},beforeCreate(){r().get("http://localhost:3000/api/forum/").then((e=>{console.log(e.data);const t=e.data.length;this.forumsDiplayed=[e.data[t-1],e.data[t-2],e.data[t-3],e.data[t-4]]})),r().get("http://localhost:3000/api/memes/").then((e=>{console.log(e.data);const t=e.data.length;this.memesDiplayed=[e.data[t-1],e.data[t-2],e.data[t-3],e.data[t-4]]}))}};var Pe=Object.assign(je,{setup(e){return(e,t)=>((0,s.wg)(),(0,s.iD)("div",we,[ye,De,Ue,Ce,Ie,ke,(0,s._)("div",Ne,[(0,s._)("div",We,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.memesDiplayed,(e=>((0,s.wg)(),(0,s.j4)(ue,{key:e,source:e.imageUrl,authorName:e.userName,description:e.description,_id:e._id},null,8,["source","authorName","description","_id"])))),128))]),Le,(0,s._)("div",Fe,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.forumsDiplayed,(e=>((0,s.wg)(),(0,s.j4)(fe,{key:e,title:e.title,content:e.description,_id:e._id},null,8,["title","content","_id"])))),128))])])]))}});const Me=(0,p.Z)(Pe,[["__scopeId","data-v-83bbedc2"]]);var Oe=Me;const xe=e=>((0,s.dD)("data-v-07c982d4"),e=e(),(0,s.Cn)(),e),Ve={class:"page"},$e=xe((()=>(0,s._)("h1",null,"All memes published",-1))),Ee=xe((()=>(0,s._)("br",null,null,-1))),Ze=(0,s.Uk)(" _________________________________________________________________________________________________________ "),Se=xe((()=>(0,s._)("br",null,null,-1))),Te=xe((()=>(0,s._)("br",null,null,-1))),He=xe((()=>(0,s._)("br",null,null,-1))),Ye={class:"display"},ze={name:"MemesView",data(){return{memesDiplayed:[],fullList:[],Page:0,content:!0}},created:function(){r().get("http://localhost:3000/api/memes/").then((e=>{for(let t=0;t<e.data.length;t++)this.fullList.push(e.data[t]);this.fetchMemes()}))},methods:{onNext(){this.Page+=1,this.fetchMemes()},fetchMemes:function(){console.log("Page : "+this.Page);let e=8*this.Page;if(this.fullList.length<=e+8&&(e=this.fullList.length-8,this.content=!1),e<0)for(let t=0;t<e+8;t++)this.memesDiplayed.push(this.fullList[this.fullList.length-(t+1)]),console.log(t);else for(let t=e;t<e+8;t++)this.memesDiplayed.push(this.fullList[this.fullList.length-(t+1)]),console.log(t)}}};var Re=Object.assign(ze,{setup(e){return(e,t)=>{const _=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",Ve,[$e,(0,s.Wm)(_,{to:{name:"MemesCreate"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"Create Meme"})])),_:1}),Ee,Ze,Se,Te,He,(0,s._)("div",Ye,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.memesDiplayed,(e=>((0,s.wg)(),(0,s.j4)(ue,{key:e,source:e.imageUrl,authorName:e.userName,description:e.description,_id:e._id},null,8,["source","authorName","description","_id"])))),128))]),(0,s.Wm)(P,{name:"Load More",onClick:e.onNext,style:(0,o.j5)([this.content?{"pointer-events":"auto"}:{"pointer-events":"none"}])},null,8,["onClick","style"]),(0,s.Wm)(n)])}}});const Be=(0,p.Z)(Re,[["__scopeId","data-v-07c982d4"]]);var Ke=Be;const Ae=e=>((0,s.dD)("data-v-058d9564"),e=e(),(0,s.Cn)(),e),qe={class:"page"},Ge=Ae((()=>(0,s._)("h1",null,"All forum posts published",-1))),Je=Ae((()=>(0,s._)("br",null,null,-1))),Qe=(0,s.Uk)(" _________________________________________________________________________________________________________ "),Xe=Ae((()=>(0,s._)("br",null,null,-1))),et=Ae((()=>(0,s._)("br",null,null,-1))),tt=Ae((()=>(0,s._)("br",null,null,-1))),_t={id:"display"},nt={name:"ForumView",data(){return{forumsDiplayed:[],fullList:[],Page:0,content:!0}},created:function(){r().get("http://localhost:3000/api/forum/").then((e=>{for(let t=0;t<e.data.length;t++)this.fullList.push(e.data[t]);this.fetchForums()}))},methods:{onNext(){this.Page+=1,this.fetchForums()},fetchForums:function(){console.log("Page : "+this.Page);let e=8*this.Page;if(this.fullList.length<=e+8&&(e=this.fullList.length-8,this.content=!1),e<0)for(let t=0;t<e+8;t++)this.forumsDiplayed.push(this.fullList[this.fullList.length-(t+1)]),console.log(t);else for(let t=e;t<e+8;t++)this.forumsDiplayed.push(this.fullList[this.fullList.length-(t+1)]),console.log(t)}}};var at=Object.assign(nt,{setup(e){return(e,t)=>{const _=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",qe,[Ge,(0,s.Wm)(_,{to:{name:"ForumCreate"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"Create Post"})])),_:1}),Je,Qe,Xe,et,tt,(0,s._)("div",_t,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.forumsDiplayed,(e=>((0,s.wg)(),(0,s.j4)(fe,{key:e,title:e.title,content:e.description,_id:e._id},null,8,["title","content","_id"])))),128))]),(0,s.Wm)(P,{name:"Load More",onClick:e.onNext,style:(0,o.j5)([this.content?{"pointer-events":"auto"}:{"pointer-events":"none"}])},null,8,["onClick","style"]),(0,s.Wm)(n)])}}});const st=(0,p.Z)(at,[["__scopeId","data-v-058d9564"]]);var ot=st;const it=e=>((0,s.dD)("data-v-5b0f1cab"),e=e(),(0,s.Cn)(),e),lt=(0,s.Uk)(" __________________________________________________________ "),rt={class:"about"},dt={class:"login"},ut={class:"input"},ct=it((()=>(0,s._)("label",{for:"InputFirstName"},"First name:",-1))),mt={class:"input"},pt=it((()=>(0,s._)("label",{for:"InputLastName"},"Last name:",-1))),ht={class:"input"},vt=it((()=>(0,s._)("label",{for:"InputEmail"},"Email:",-1))),bt={class:"input"},ft=it((()=>(0,s._)("label",{for:"InputPassword"},"Password:",-1))),gt={name:"SignupView",data(){return{msg:"",User:{firstName:"",lastName:"",email:"",password:""}}},methods:{onSignup(){let e={firstName:this.User.firstName,lastName:this.User.lastName,email:this.User.email,password:this.User.password};r().post("http://localhost:3000/api/auth/signup",e)}}};var wt=Object.assign(gt,{setup(e){return(e,t)=>{const _=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[lt,(0,s._)("div",rt,[(0,s._)("div",dt,[(0,s._)("div",ut,[ct,(0,s.wy)((0,s._)("input",{type:"text",id:"InputFirstName",name:"FirstName","onUpdate:modelValue":t[0]||(t[0]=t=>e.User.firstName=t)},null,512),[[n.nr,e.User.firstName]])]),(0,s._)("div",mt,[pt,(0,s.wy)((0,s._)("input",{type:"text",id:"InputLastName",name:"LastName","onUpdate:modelValue":t[1]||(t[1]=t=>e.User.lastName=t)},null,512),[[n.nr,e.User.lastName]])]),(0,s._)("div",ht,[vt,(0,s.wy)((0,s._)("input",{type:"text",id:"InputEmail",name:"Email","onUpdate:modelValue":t[2]||(t[2]=t=>e.User.email=t)},null,512),[[n.nr,e.User.email]])]),(0,s._)("div",bt,[ft,(0,s.wy)((0,s._)("input",{type:"password",id:"InputPassword",name:"Password","onUpdate:modelValue":t[3]||(t[3]=t=>e.User.password=t)},null,512),[[n.nr,e.User.password]])])]),(0,s._)("button",{onClick:t[4]||(t[4]=(...t)=>e.onSignup&&e.onSignup(...t))},[(0,s.Wm)(_,{to:{name:"LoginView"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"Signup"})])),_:1})])])],64)}}});const yt=(0,p.Z)(wt,[["__scopeId","data-v-5b0f1cab"]]);var Dt=yt;const Ut=e=>((0,s.dD)("data-v-03c606e8"),e=e(),(0,s.Cn)(),e),Ct=(0,s.Uk)(" __________________________________________________________ "),It={class:"about"},kt={class:"login"},Nt={class:"input"},Wt=Ut((()=>(0,s._)("label",{for:"InputEmail"},"Email:",-1))),Lt={class:"input"},Ft=Ut((()=>(0,s._)("label",{for:"InputPassword"},"Password:",-1))),jt={name:"LoginView",data(){return{msg:"",User:{email:"",password:""}}},methods:{onLogin(){let e={email:this.User.email,password:this.User.password};r().post("http://localhost:3000/api/auth/login",e).then((e=>{this.$store.dispatch("Login",e),this.$router.history.updateRoute({name:"Recent"})}))}}};var Pt=Object.assign(jt,{setup(e){return(e,t)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[Ct,(0,s._)("div",It,[(0,s._)("div",kt,[(0,s._)("div",Nt,[Wt,(0,s.wy)((0,s._)("input",{type:"text",id:"InputEmail",name:"Email","onUpdate:modelValue":t[0]||(t[0]=t=>e.User.email=t)},null,512),[[n.nr,e.User.email]])]),(0,s._)("div",Lt,[Ft,(0,s.wy)((0,s._)("input",{type:"password",id:"InputPassword",name:"Password","onUpdate:modelValue":t[1]||(t[1]=t=>e.User.password=t)},null,512),[[n.nr,e.User.password]])])]),(0,s._)("button",{onClick:t[2]||(t[2]=(...t)=>e.onLogin&&e.onLogin(...t)),style:(0,o.j5)([""!=e.User.email&&""!=e.User.password?{"pointer-events":"auto"}:{"pointer-events":"none"}])},[(0,s.Wm)(P,{name:"Login"})],4)])],64))}});const Mt=(0,p.Z)(Pt,[["__scopeId","data-v-03c606e8"]]);var Ot=Mt;const xt=e=>((0,s.dD)("data-v-07d8119c"),e=e(),(0,s.Cn)(),e),Vt={class:"image"},$t=xt((()=>(0,s._)("img",{src:b},null,-1))),Et=[$t];function Zt(e,t){return(0,s.wg)(),(0,s.iD)("div",Vt,Et)}const St={},Tt=(0,p.Z)(St,[["render",Zt],["__scopeId","data-v-07d8119c"]]);var Ht=Tt;const Yt=e=>((0,s.dD)("data-v-2659bb37"),e=e(),(0,s.Cn)(),e),zt=(0,s.Uk)(" __________________________________________________________ "),Rt={class:"page"},Bt={class:"center"},Kt={id:"form"},At=Yt((()=>(0,s._)("div",{class:"input"},[(0,s._)("label",{for:"files"},"Meme:"),(0,s._)("input",{type:"file",id:"files",name:"files"})],-1))),qt={class:"input"},Gt=Yt((()=>(0,s._)("label",{for:"Description"},"Description:",-1))),Jt=(0,s.Uk)("Upload");let Qt={headers:{"Content-Type":"multipart/form-data"}};const Xt={name:"MemesCreate",data(){return{Meme:{description:""},selectedFile:null}},methods:{submitForm(){const e=document.getElementById("Description"),t=document.getElementById("files"),_=new FormData;for(let n=0;n<t.files.length;n++)_.append("image",t.files[n]);_.append("fileName",t.files[0].name),_.append("Description",e.value),_.append("userName",this.$store.state.userName),r().post("http://localhost:3000/api/memes/",_,Qt).then((e=>console.log(e))).catch((e=>e))}}};var e_=Object.assign(Xt,{setup(e){return(e,t)=>{const _=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[zt,(0,s._)("div",Rt,[(0,s.Wm)(_,{to:{name:"Memes"},class:"pile"}),(0,s._)("div",Bt,[(0,s.Wm)(_,{to:{name:"Memes"},class:"side"}),(0,s._)("form",Kt,[At,(0,s._)("div",qt,[Gt,(0,s.wy)((0,s._)("input",{type:"text",id:"Description",name:"Description","onUpdate:modelValue":t[0]||(t[0]=t=>e.Meme.description=t)},null,512),[[n.nr,e.Meme.description]])]),(0,s.Wm)(_,{to:{name:"Memes"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"Upload",onClick:e.submitForm},{default:(0,s.w5)((()=>[Jt])),_:1},8,["onClick"])])),_:1})]),(0,s.Wm)(_,{to:{name:"Memes"},class:"side"})]),(0,s.Wm)(_,{to:{name:"Memes"},class:"pile"})])],64)}}});const t_=(0,p.Z)(e_,[["__scopeId","data-v-2659bb37"]]);var __=t_;const n_=e=>((0,s.dD)("data-v-5146715a"),e=e(),(0,s.Cn)(),e),a_=(0,s.Uk)(" __________________________________________________________ "),s_={class:"page"},o_={class:"center"},i_={class:"create"},l_={class:"input"},r_=n_((()=>(0,s._)("label",{for:"InputTitle"},"Title:",-1))),d_=n_((()=>(0,s._)("label",{for:"InputPost"},"Post:",-1))),u_={name:"ForumCreate",data(){return{Forum:{post:"",title:""},number:this.$store.state.userId}},methods:{onPost(){r().post("http://localhost:3000/api/forum/",{userName:this.$store.state.userName,title:this.Forum.title,post:this.Forum.post,userId:this.$store.state.userId})}}};var c_=Object.assign(u_,{setup(e){return(e,t)=>{const _=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[a_,(0,s._)("div",s_,[(0,s.Wm)(_,{to:{name:"Forum"},class:"pile"}),(0,s._)("div",o_,[(0,s.Wm)(_,{to:{name:"Forum"},class:"side"}),(0,s._)("div",i_,[(0,s._)("div",l_,[r_,(0,s.wy)((0,s._)("input",{type:"text",id:"InputTitle",name:"Title","onUpdate:modelValue":t[0]||(t[0]=t=>e.Forum.title=t)},null,512),[[n.nr,e.Forum.title]]),d_,(0,s.wy)((0,s._)("input",{type:"text",id:"InputPost",name:"Post","onUpdate:modelValue":t[1]||(t[1]=t=>e.Forum.post=t)},null,512),[[n.nr,e.Forum.post]])]),(0,s.Wm)(_,{to:{name:"Forum"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{name:"Post",onClick:e.onPost},null,8,["onClick"])])),_:1})]),(0,s.Wm)(_,{to:{name:"Forum"},class:"side"})]),(0,s.Wm)(_,{to:{name:"Forum"},class:"pile"})])],64)}}});const m_=(0,p.Z)(c_,[["__scopeId","data-v-5146715a"]]);var p_=m_;const h_=[{path:"/",name:"UnloggedView",component:te,children:[{path:"/signup",name:"SignupView",component:Dt},{path:"/login",name:"LoginView",component:Ot},{path:"/default",name:"Default",component:Ht}]},{path:"/recent",name:"Recent",component:Oe},{path:"/memes",name:"Memes",component:Ke,children:[{path:"/create",name:"MemesCreate",component:__}]},{path:"/forum",name:"Forum",component:ot,children:[{path:"/create",name:"ForumCreate",component:p_}]}],v_=(0,z.p7)({history:(0,z.PO)("/"),routes:h_});var b_=v_;const f_=(0,a.MT)({state(){return{connected:!1,userName:"",userId:""}},mutations:{changeUsername(e,t){""==t?(e.userName="",e.connected=!1,e.userId=""):(e.userName=t.data.userName,e.connected=!0,e.userId=t.data.userId)}},actions:{Login({commit:e},t){e("changeUsername",t)},Logout({commit:e}){e("changeUsername","")}}});r().defaults.withCredentials=!0,r().defaults.baseURL="http://localhost:3000/api",(0,n.ri)(Y).use(b_).use(b_).use(f_).mount("#app")},6519:function(e,t,_){e.exports=_.p+"img/icon-left-font.687ab6c0.svg"},7334:function(e,t,_){e.exports=_.p+"img/icon.ad1aa237.png"}},t={};function _(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,_),s.exports}_.m=e,function(){var e=[];_.O=function(t,n,a,s){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],s=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(_.O).every((function(e){return _.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(d--,1);var r=a();void 0!==r&&(t=r)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,a,s]}}(),function(){_.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return _.d(t,{a:t}),t}}(),function(){_.d=function(e,t){for(var n in t)_.o(t,n)&&!_.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){_.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){_.p="/"}(),function(){var e={143:0};_.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,o=n[0],i=n[1],l=n[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)_.o(i,a)&&(_.m[a]=i[a]);if(l)var d=l(_)}for(t&&t(n);r<o.length;r++)s=o[r],_.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return _.O(d)},n=self["webpackChunkproject7"]=self["webpackChunkproject7"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=_.O(void 0,[998],(function(){return _(3982)}));n=_.O(n)})();
//# sourceMappingURL=app.051a3392.js.map