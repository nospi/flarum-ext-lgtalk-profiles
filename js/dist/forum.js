(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{components:()=>H,types:()=>J});const r=flarum.core.compat["forum/app"];var n=e.n(r);const o=flarum.core.compat["common/models/User"];var i=e.n(o);function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}const u=flarum.core.compat["common/Model"];var l=e.n(u),d=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).name=l().attribute("name"),t.description=l().attribute("description"),t.type=l().attribute("type"),t.validation=l().attribute("validation"),t.required=l().attribute("required"),t.prefix=l().attribute("prefix"),t.icon=l().attribute("icon"),t.sort=l().attribute("sort"),t.deleted_at=l().attribute("deleted_at",l().transformDate),t.answer=l().hasOne("answer"),t.on_bio=l().attribute("on_bio"),t}return s(t,e),t.prototype.apiEndpoint=function(){return"/masquerade/fields"+(this.exists?"/"+this.data.id:"")},t}(l());const c=flarum.core.compat["common/app"];var f=e.n(c);const p=flarum.core.compat["common/utils/computed"];var h=e.n(p),v=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).content=l().attribute("content"),t.fieldId=l().attribute("fieldId"),t.field=h()("fieldId",(function(e){return f().store.getById("masquerade-field",e)})),t.userId=l().attribute("user_id"),t}return s(t,e),t}(l());const y=flarum.core.compat["common/extend"],w=flarum.core.compat["common/components/LinkButton"];var b=e.n(w);const q=flarum.core.compat["forum/components/UserPage"];var g=e.n(q);const A=flarum.core.compat["common/components/LoadingIndicator"];var F=e.n(A);const C=flarum.core.compat["common/Component"];var P=e.n(C);const M=flarum.core.compat["common/helpers/icon"];var O=e.n(M),x=function(){function e(e){var t=e.field,r=e.set,n=e.value;this.field=t,this.set=r,this.value=n}var t=e.prototype;return t.readAttribute=function(e,t){return"function"==typeof e[t]?e[t]():e[t]},t.validationRules=function(){return this.readAttribute(this.field,"validation").split("|")},t.validationRule=function(e){var t=null;return this.validationRules().forEach((function(r){var n=r.split(":",2);n[0]===e&&(t=n[1])})),t},t.editorField=function(){return m("div",{class:"Form-group Field"},m("label",null,this.field.icon()?[O()(this.field.icon())," "]:null," ",this.field.name()," ",this.field.required()?"*":null),m("div",{class:"FormField"},this.field.prefix()?m(".prefix",this.field.prefix()):null,this.editorInput(),this.field.description()?m("div",{class:"helpText"},this.field.description()):null))},t.editorInput=function(){return m("input",this.editorInputAttrs())},t.editorInputAttrs=function(){var e=this;return{className:"FormControl",oninput:function(t){e.set(t.target.value)},value:this.value,required:this.field.required()}},t.answerField=function(){var e=this.readAttribute(this.field,"icon");return m("div",{className:"Masquerade-Bio-Set"+(this.hasAnswer()?"":" Masquerade-Bio-Set--empty")},m("span",{class:"Masquerade-Bio-Field"},e&&m("[",null,O()(e)," "),this.readAttribute(this.field,"name"),":"," "),m("span",{class:"Masquerade-Bio-Answer"},this.answerContent()))},t.answerContent=function(){return this.value},t.hasAnswer=function(){var e=this.answerContent();return!(null===e||("object"==typeof e?!Object.keys(e).length:null==e||!e.length))},e.isNoOptionSelectedValue=function(e){return null===e||""===e},e}(),I=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.editorInput=function(){var e=this;return this.options().map((function(t){return m("div",m("label",[m("input[type=radio]",{checked:t.selected(e.value),onclick:function(){e.set(t.key)}})," "+t.label]))}))},r.options=function(){var e=[];return this.readAttribute(this.field,"required")||e.push({selected:function(e){return x.isNoOptionSelectedValue(e)},key:null,label:app.translator.trans("fof-masquerade.forum.fields.select.none-optional")}),e.push({selected:function(e){return-1!==["true","1",1,!0,"yes"].indexOf(e)},key:"true",label:app.translator.trans("fof-masquerade.forum.fields.boolean.yes")}),e.push({selected:function(e){return-1!==["false","0",0,!1,"no"].indexOf(e)},key:"false",label:app.translator.trans("fof-masquerade.forum.fields.boolean.no")}),x.isNoOptionSelectedValue(this.value)||-1!==["true","1",1,!0,"yes","false","0",0,!1,"no"].indexOf(this.value)||e.push({selected:function(){return!0},key:this.value,label:"(invalid) "+this.value}),e},r.answerContent=function(){return x.isNoOptionSelectedValue(this.value)?"":-1!==[1,"1",!0,"true","yes"].indexOf(this.value)?[O()("far fa-check-square")," ",app.translator.trans("fof-masquerade.forum.fields.boolean.yes")]:[O()("far fa-square")," ",app.translator.trans("fof-masquerade.forum.fields.boolean.no")]},t}(x);const S=flarum.core.compat["common/components/Button"];var V=e.n(S),_=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.editorInputAttrs=function(){var t=e.prototype.editorInputAttrs.call(this);return t.type="email",t.placeholder="you@example.com",t},r.answerContent=function(){var e=this,t=this.value;if(!t)return null;var r=t.split(/@|\./).map((function(e){return e.replace(/(.{2})./g,"$1*")})).join("*");return V().component({onclick:function(){return e.mailTo()},className:"Button Button--text",icon:"far fa-envelope"},r)},r.mailTo=function(){window.location="mailto:"+this.value},t}(x);const B=flarum.core.compat["common/components/Select"];var N=e.n(B),k="fof_masquerade_no_option_selected",E=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.editorInput=function(){var e=this;return N().component({onchange:function(t){t===k&&(t=null),e.set(t)},value:x.isNoOptionSelectedValue(this.value)?k:this.value,options:this.options()})},r.options=function(){var e={};this.readAttribute(this.field,"required")?x.isNoOptionSelectedValue(this.value)&&(e[k]=app.translator.trans("fof-masquerade.forum.fields.select.none-required")):e[k]=app.translator.trans("fof-masquerade.forum.fields.select.none-optional");var t=this.validationRule("in");return t&&t.split(",").forEach((function(t){e[t]=t})),x.isNoOptionSelectedValue(this.value)||void 0!==e[this.value]||(e[this.value]="(invalid) "+this.value),e},t}(x),j=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.editorInputAttrs=function(){var t=e.prototype.editorInputAttrs.call(this);return t.type="url",t.placeholder="https://example.com",t},r.answerContent=function(){var e=this,t=this.value;return t?V().component({onclick:function(){return e.to()},className:"Button Button--text",icon:"fas fa-link"},t.replace(/^https?:\/\//,"")):null},r.to=function(){window.open().location=this.value},t}(x),R=function(){function e(){}return e.typeForField=function(e){var t=e.field,r=e.set,n=void 0===r?void 0:r,o=e.value,i=x,a=this.identify(t);return a&&(i=this.types()[a]),new i({field:t,set:n,value:o})},e.fieldAttribute=function(e,t){return"function"==typeof e[t]?e[t]():e[t]},e.types=function(){return{boolean:I,email:_,select:E,url:j}},e.identify=function(e){var t=this,r=(this.fieldAttribute(e,"validation")||"").split(","),n=null,o=this.fieldAttribute(e,"type");return void 0!==this.types()[o]?o:(r.forEach((function(e){e=e.trim(),void 0!==t.types()[e]&&(n=e)})),n)},e}(),T=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).answers=void 0,t.user=void 0,t}s(t,e);var r=t.prototype;return r.oninit=function(t){e.prototype.oninit.call(this,t),this.loading=!0,this.answers=[],this.user=this.attrs.user,this.load(this.user)},r.view=function(){var e=this;return m("div",{class:"Masquerade-Bio"},m("div",{class:"Fields"},n().store.all("masquerade-field").sort((function(e,t){return e.sort()-t.sort()})).map((function(t){var r=e.answers.find((function(e){var r;return(null==(r=e.field())?void 0:r.id())===t.id()}));return e.field(t,(null==r?void 0:r.content())||"")}))))},r.field=function(e,t){return R.typeForField({field:e,value:t}).answerField()},r.load=function(){var e=this;this.answers=this.user.masqueradeAnswers(),!1===this.answers&&(this.answers=[],n().store.find("users",this.user.id(),{include:"masqueradeAnswers"}).then((function(){e.answers=e.user.masqueradeAnswers(),m.redraw()}))),m.redraw()},t}(P());const U=flarum.core.compat["common/components/Link"];var L=e.n(U),D=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var r=t.prototype;return r.oninit=function(t){e.prototype.oninit.call(this,t),this.loading=!0,this.enforceProfileCompletion=n().forum.attribute("masquerade.force-profile-completion")||!1,this.profileCompleted=n().forum.attribute("masquerade.profile-completed")||!1,this.profileNowCompleted=!1,this.answers=[],this.answerValues={},this.user=this.attrs.user,this.load(),this.dirty=!this.profileCompleted},r.view=function(){var e=this;return m("form",{class:"ProfileConfigurePane",onsubmit:this.update.bind(this)},!(!this.enforceProfileCompletion||this.profileCompleted)&&m("div",{class:"Alert Alert--Error"},n().translator.trans("fof-masquerade.forum.alerts.profile-completion-required")),m("div",{class:"Fields"},n().store.all("masquerade-field").sort((function(e,t){return e.sort()-t.sort()})).map((function(t){return e.field(t)}))),m(V(),{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.dirty},n().translator.trans("fof-masquerade.forum.buttons.save-profile")),!!this.profileNowCompleted&&m("span",{class:"Masquerade-NowCompleted"},n().translator.trans("fof-masquerade.forum.alerts.profile-completed",{a:m(L(),{href:n().route("index")})})))},r.field=function(e){return R.typeForField({field:e,set:this.set.bind(this,e),value:this.answerValues[e.id()]}).editorField()},r.load=function(){var e=this;this.answers=this.user.masqueradeAnswers(),!1===this.answers?(this.answers=[],n().store.find("users",this.user.id(),{include:"masqueradeAnswers"}).then((function(){e.answers=e.user.masqueradeAnswers(),e.answerValues={},n().store.all("masquerade-field").forEach((function(t){var r=e.answers.find((function(e){var r;return(null==(r=e.field())?void 0:r.id())===t.id()}));e.answerValues[t.id()]=r?r.content():""})),e.loading=!1,m.redraw()}))):(this.loading=!1,n().store.all("masquerade-field").forEach((function(t){var r=e.answers.find((function(e){var r;return(null==(r=e.field())?void 0:r.id())===t.id()}));e.answerValues[t.id()]=r?r.content():""}))),m.redraw()},r.set=function(e,t){this.answerValues[e.id()]=t,this.dirty=!0},r.update=function(e){var t=this;e.preventDefault(),this.loading=!0,n().request({method:"POST",url:n().forum.attribute("apiUrl")+"/masquerade/configure/"+this.user.id(),body:this.answerValues}).then((function(e){t.dirty=!1,t.profileCompleted||(t.profileCompleted=!0,t.profileNowCompleted=!0),t.parseResponse(e)})).catch((function(){t.loading=!1,m.redraw()}))},r.parseResponse=function(e){console.log(e),this.answers=n().store.pushPayload(e),this.loading=!1,m.redraw()},t}(P()),z=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).loading=!0,t}s(t,e);var r=t.prototype;return r.oninit=function(t){e.prototype.oninit.call(this,t),this.loadUser(m.route.param("username"))},r.pageContentComponent=function(){return this.user?this.user.canEditMasqueradeProfile()?m(D,{user:this.user}):m(T,{user:this.user}):null},r.show=function(t){e.prototype.show.call(this,t),this.loading=!1,m.redraw()},r.content=function(){return m("div",{class:"MasqueradeRoot"},this.loading&&m(F(),null),this.pageContentComponent())},t}(g());const $=flarum.core.compat["forum/components/UserCard"];var G=e.n($);n().initializers.add("fof-masquerade",(function(e){e.store.models["masquerade-field"]=d,e.store.models["masquerade-answer"]=v,i().prototype.bioFields=l().hasMany("bioFields"),i().prototype.masqueradeAnswers=l().hasMany("masqueradeAnswers"),i().prototype.canEditMasqueradeProfile=l().attribute("canEditMasqueradeProfile"),n().routes["fof-masquerade"]={path:"/u/:username/masquerade",resolver:{onmatch:function(){if(!n().forum.attribute("canViewMasquerade"))throw new Error;return z}}},(0,y.extend)(g().prototype,"navItems",(function(e){if(n().forum.attribute("canViewMasquerade")||this.user.canEditMasqueradeProfile()){var t=this.user.canEditMasqueradeProfile();e.add("masquerade",b().component({href:n().route("fof-masquerade",{username:this.user.slug()}),icon:"far fa-id-card","data-editProfile":t},n().translator.trans("fof-masquerade.forum.buttons."+(t?"edit":"view")+"-profile")),200)}})),(0,y.extend)(G().prototype,"infoItems",(function(e){var t=n().forum.attribute("canViewMasquerade")&&this.attrs.user.bioFields()||[];e.add("masquerade-bio",m("div",null,t.map((function(e){var t=e.attribute("field");return R.typeForField({field:t,value:e.content()}).answerField()}))))}))}));var H={ProfileConfigurePane:D,ProfilePane:T,RootMasqueradePane:z},J={BaseField:x,BooleanField:I,EmailField:_,SelectField:E,TypeFactory:R,UrlField:j}})(),module.exports=t})();
//# sourceMappingURL=forum.js.map