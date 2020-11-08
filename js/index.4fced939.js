(function(e){function t(t){for(var i,n,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={index:0},r=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/medods-client-form/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"026f":function(e,t,a){},"0ffa":function(e,t,a){"use strict";a("fb97")},1441:function(e,t,a){"use strict";a("fe66")},1698:function(e,t,a){},3055:function(e,t,a){"use strict";a("802f")},"3da4":function(e,t,a){"use strict";a("7b45")},"46c4":function(e,t,a){"use strict";a("dc06")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("ClientForm")],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"client-form"},[a("div",{staticClass:"client-form__header"},[a("h1",[e._v(e._s(e.title))])]),a("div",{staticClass:"client-form__main"},[a("FormProgress",{attrs:{steps:e.steps,active:e.page,errors:e.errors,valid:e.valid},on:{navigate:e.navigate}}),a("div",{staticClass:"client-form__content"},[a("form",{ref:"form",attrs:{action:"#",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("FormSlider",{ref:"slider",attrs:{"show-navigation":!e.formSubmitted},on:{"slide-change":e.onSlideChange}},[e._l(e.pages,(function(t,i){return a(t,{key:i,ref:"pages",refInFor:!0,tag:"component",attrs:{active:e.page===i}})})),a("template",{slot:"success-page"},[a("FormSuccess",{attrs:{data:e.formData},on:{reset:e.resetForm}})],1)],2)],1)])],1)])},o=[],l=(a("4160"),a("13d5"),a("b0c0"),a("d3b7"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.inputClassName},[a("label",{class:e.labelClassName,attrs:{for:e.id}},[e._v(" "+e._s(e.label)+" ")]),a("input",e._b({class:e.className,attrs:{type:e.type,name:e.name,id:e.id,required:e.required},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},change:function(t){return e.$emit("change",t.target.value)}}},"input",e.$attrs,!1)),a("div",{staticClass:"input__hint"},[e._v(e._s(e.hint))]),a("ul",{staticClass:"input__errors"},[e._t("errors")],2)])}),c=[],u={name:"FormInput",inheritAttrs:!1,props:{type:{type:String,default:"text"},name:{type:String,required:!0},id:{type:String,required:!0},label:{type:String,required:!0},required:{type:Boolean},value:{},hint:{type:String},invalid:{type:Boolean}},computed:{className:function(){return["input__control"]},labelClassName:function(){return["input__label",this.required&&"input__label_required"]},inputClassName:function(){return["input","input_type-".concat(this.type),this.invalid&&"input_invalid"]}}},d=u,p=(a("97b1"),a("2877")),m=Object(p["a"])(d,l,c,!1,null,"12149443",null),f=m.exports,h=a("1dce"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input"},[a("label",{class:e.labelClassName,attrs:{for:e.id}},[e._v(" "+e._s(e.label)+" ")]),a("select",e._b({class:e.className,attrs:{name:e.name,id:e.id},domProps:{value:e.value},on:{change:function(t){return e.$emit("change",t.target.value)}}},"select",e.$attrs,!1),e._l(e.options,(function(t,i){return a("option",{key:i,domProps:{value:t.value}},[e._v(e._s(t.text))])})),0),a("div",{staticClass:"input__hint"},[e._v(e._s(e.hint))]),a("ul",{staticClass:"input__errors"},[e._t("errors")],2)])},_=[],g={name:"Select",inheritAttrs:!1,model:{prop:"value",event:"change"},props:{name:{type:String,required:!0},id:{type:String,required:!0},options:{type:Array,required:!0},label:{type:String,required:!0},value:{},required:{type:Boolean},hint:{type:String}},computed:{className:function(){return["input__control","input__control_select"]},labelClassName:function(){return["input__label",this.required&&"input__label_required"]}}},$=g,b=(a("1441"),Object(p["a"])($,v,_,!1,null,"24cbd3c6",null)),y=b.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className},[a("label",{class:e.labelClassName,attrs:{for:e.id}},[e._v(" "+e._s(e.label)+" ")]),a("input",e._b({class:e.inputClassName,attrs:{type:"checkbox",name:e.name,id:e.id,required:e.required},domProps:{value:e.value,checked:e.isChecked},on:{change:e.onChange}},"input",e.$attrs,!1)),a("ul",{staticClass:"input__errors"},[e._t("errors")],2)])},C=[],k=(a("99af"),a("4de4"),a("caad"),a("2532"),{name:"Checkbox",inheritAttrs:!1,model:{prop:"checked",event:"change"},props:{name:{type:String,required:!0},id:{type:String,required:!0},required:{type:Boolean},label:{type:String,required:!0},value:{},checked:{},checkedValue:{default:!0},uncheckedValue:{default:!1}},methods:{onChange:function(e){var t=this;Array.isArray(this.checked)?this.isChecked?this.$emit("change",this.checked.filter((function(e){return e!==t.value}))):this.$emit("change",this.checked.concat(this.value)):this.$emit("change",e.target.checked?this.checkedValue:this.uncheckedValue)}},computed:{inputClassName:function(){return["input__control","input__control_checkbox"]},labelClassName:function(){return["input__label",this.required&&"input__label_required"]},className:function(){return["input","input_type-checkbox"]},isChecked:function(){return Array.isArray(this.checked)?this.checked.includes(this.value):this.value===this.checked}}}),S=k,q=(a("6beb"),Object(p["a"])(S,x,C,!1,null,"7a891a1b",null)),w=q.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className},[a("label",{class:e.labelClassName,attrs:{for:e.id}},[e._v(" "+e._s(e.label)+" ")]),a("input",{class:e.inputClassName,attrs:{type:"radio",name:e.name,id:e.id,required:e.required},domProps:{value:e.value,checked:e.isChecked},on:{change:e.onChange}}),a("ul",{staticClass:"input__errors"},[e._t("errors")],2)])},F=[],O={name:"RadioButton",inheritAttrs:!1,model:{prop:"checked",event:"change"},props:{name:{type:String,required:!0},id:{type:String,required:!0},required:{type:Boolean},label:{type:String,required:!0},value:{},checked:{}},methods:{onChange:function(){var e=this;Array.isArray(this.checked)?this.isChecked?this.$emit("change",this.checked.filter((function(t){return t!==e.value}))):this.$emit("change",this.checked.concat(this.value)):this.$emit("change",this.value)}},computed:{inputClassName:function(){return["input__control","input__control_radio"]},labelClassName:function(){return["input__label",this.required&&"input__label_required"]},className:function(){return["input","input_type-radio"]},isChecked:function(){return Array.isArray(this.checked)?this.checked.includes(this.value):this.value===this.checked}}},I=O,N=(a("80af"),Object(p["a"])(I,P,F,!1,null,"6bdfc1d1",null)),j=N.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("FormInput",e._b({ref:"input",attrs:{value:e.maskedValue,name:e.name,id:e.id,type:e.type,label:e.label},on:{input:e.onInput,change:e.onChange}},"FormInput",e.$attrs,!1),[a("template",{slot:"errors"},[e._t("errors")],2),e._t("default")],2)},A=[];a("ac1f"),a("466d");function V(e,t){for(var a="",i=0,s=0;s<t.length;s++){if(i>=e.length)break;if("_"===t[s]){if(!e[i].match(/[0-9]/))break;a+=e[i++]}else a+=t[s],t[s]===e[i]&&i++}return a}var E={name:"MaskedInput",components:{FormInput:f},props:{mask:{type:String,required:!0},type:{type:String,default:"text"},name:{type:String,required:!0},id:{type:String,required:!0},label:{type:String,required:!0},value:{type:String}},data:function(){return{maskedValue:V(this.value,this.mask),lol:!0}},methods:{onInput:function(e){this.applyMask(e),this.$emit("input",this.maskedValue)},onChange:function(e){this.applyMask(e),this.$emit("change",this.maskedValue)},applyMask:function(e){this.maskedValue=V(e,this.mask),this.$refs.input.$forceUpdate()}},watch:{value:function(e){this.maskedValue=V(e,this.mask)}}},D=E,R=Object(p["a"])(D,B,A,!1,null,"0a56ca51",null),M=R.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.tag,e._g({tag:"component",class:e.className,attrs:{type:e.type}},e.$listeners),[e._t("default")],2)},T=[],H={name:"Button",props:{type:{type:String,default:"button"},tag:{type:String,default:"button"}},computed:{className:function(){return["button"]}}},U=H,W=(a("f878"),Object(p["a"])(U,L,T,!1,null,"b8b4156e",null)),J=W.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-slider"},[a("div",{ref:"content",staticClass:"form-slider__content"},[a("div",{ref:"inner",staticClass:"form-slider__inner",style:e.contentStyle,on:{transitionend:function(t){return t.target!==t.currentTarget?null:e.focusFirst(t)}}},[e._t("default"),a("div",{class:e.successPageClass},[e._t("success-page")],2)],2)]),e.showNavigation?a("div",{staticClass:"form-slider__nav"},[a("Button",{staticClass:"form-slider__button form-slider__button_prev",attrs:{disabled:0===e.page},on:{click:function(t){return e.movePage(-1)}}},[e._v("Назад ")]),a("Button",{staticClass:"form-slider__button form-slider__button_next",attrs:{disabled:e.page===e.pagesCount-1},on:{click:function(t){return e.movePage(1)}}},[e._v("Вперёд ")])],1):e._e()])},z=[],Z=(a("a630"),{name:"FormSlider",components:{Button:J},data:function(){return{page:0,height:"auto",showSuccessPage:!1}},props:{adaptiveHeight:Boolean,showNavigation:Boolean},methods:{movePage:function(e){var t=this.page+e;this.navigate(t)},toSuccessPage:function(){this.showSuccessPage=!0,this.navigateUnsafe(this.pagesCount)},reset:function(){this.showSuccessPage=!1,this.$slots.default.forEach((function(e){var t=e.componentInstance.getValidator();t.$reset()})),this.navigate(0)},navigate:function(e){if(this.validIndex(this.page)){var t=this.$slots.default[this.page].componentInstance.getValidator();t.$touch()}this.validIndex(e)&&this.navigateUnsafe(e)},navigateUnsafe:function(e){var t=this,a=!0;if(this.adaptiveHeight){var i=this.getPage(e);if(i&&i.$data.async){var s;a=!1;var r=new Promise((function(e){s=e}));i.$on("ready",s),r.then((function(){i.$off("ready",s),t.$nextTick((function(){t.updateHeight()}))}))}}this.$nextTick((function(){t.page=e,a&&t.adaptiveHeight&&t.updateHeight(),t.reactivateFocus(),t.$emit("slide-change",t.page)}))},getPage:function(e){return this.validIndex(e)?this.$slots.default[e].componentInstance:e===this.pagesCount?this.$slots["success-page"][0].componentInstance:void 0},validIndex:function(e){return e>=0&&e<this.pagesCount},reactivateFocus:function(){var e=this;this.$slots.default.forEach((function(t,a){var i=Array.from(t.componentInstance.$el.querySelectorAll("input, a, button, select"));a!==e.page?i.forEach((function(e){e.tabIndex=-1})):i.forEach((function(e){e.tabIndex=0}))}))},focusFirst:function(){if(this.validIndex(this.page)){var e=this.$slots.default[this.page].componentInstance.getValidator();e.$anyError?this.$slots.default[this.page].componentInstance.$el.querySelectorAll(".input_invalid .input__control").item(0).focus():this.$slots.default[this.page].componentInstance.$el.querySelectorAll("input, a, button, select").item(0).focus()}this.height="auto"},updateHeight:function(){this.height="".concat(this.$refs.inner.children.item(this.page).clientHeight,"px")}},computed:{pagesCount:function(){return this.$slots.default?this.$slots.default.length:0},contentStyle:function(){var e={transform:"translateX(-".concat(100*this.page,"%)")};return this.adaptiveHeight&&(e.height=this.height),e},successPageClass:function(){return["client-form__page","success-page",this.showSuccessPage&&"success-page_visible"]}},mounted:function(){this.updateHeight(),this.reactivateFocus(),window.addEventListener("resize",this.updateHeight)}}),G=Z,K=(a("46c4"),Object(p["a"])(G,X,z,!1,null,"b83f25e8",null)),Q=K.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"client-form__page"},[a("div",{staticClass:"col"},[a("div",{staticClass:"input-group"},[a("FormInput",{attrs:{required:"",invalid:e.$v.lastName.$dirty&&e.$v.lastName.$invalid,value:e.$v.lastName.$model,name:"last-name",id:"last-name",label:"Фамилия"},on:{change:function(t){e.$v.lastName.$model=t.trim()}}},[a("template",{slot:"errors"},[e.$v.lastName.$dirty&&!e.$v.lastName.required?a("li",{staticClass:"error"},[e._v("Это поле обязательно")]):e._e()])],2),a("FormInput",{attrs:{required:"",invalid:e.$v.firstName.$dirty&&e.$v.firstName.$invalid,value:e.$v.firstName.$model,name:"first-name",id:"first-name",label:"Имя"},on:{change:function(t){e.$v.firstName.$model=t.trim()}}},[a("template",{slot:"errors"},[e.$v.firstName.$dirty&&!e.$v.firstName.required?a("li",{staticClass:"error"},[e._v("Это поле обязательно ")]):e._e()])],2),a("FormInput",{attrs:{name:"patronymic",id:"patronymic",label:"Отчество (если есть)"},model:{value:e.$v.patronymic.$model,callback:function(t){e.$set(e.$v.patronymic,"$model","string"===typeof t?t.trim():t)},expression:"$v.patronymic.$model"}}),a("FormInput",{staticClass:"input_birth",attrs:{required:"",invalid:e.$v.dateOfBirth.$dirty&&e.$v.dateOfBirth.$invalid,name:"date-of-birth",type:"date",id:"date-of-birth",label:"Дата рождения"},model:{value:e.$v.dateOfBirth.$model,callback:function(t){e.$set(e.$v.dateOfBirth,"$model",t)},expression:"$v.dateOfBirth.$model"}},[a("template",{slot:"errors"},[e.$v.dateOfBirth.$dirty&&!e.$v.dateOfBirth.required?a("li",{staticClass:"error"},[e._v("Это поле обязательно ")]):e._e()])],2),a("MaskedInput",{staticClass:"input_phone",attrs:{required:"",hint:"В формате 7(xxx)xxx-xx-xx",mask:"7(___)___-__-__",invalid:e.$v.phone.$dirty&&e.$v.phone.$invalid,value:e.$v.phone.$model,name:"phone",type:"tel",id:"phone",label:"Телефон"},on:{change:function(t){e.$v.phone.$model=t.trim()},blur:function(t){return e.$v.phone.$touch()}}},[a("template",{slot:"errors"},[e.$v.phone.$dirty&&!e.$v.phone.required?a("li",{staticClass:"error"},[e._v("Это поле обязательно")]):e._e(),e.$v.phone.$dirty&&!e.$v.phone.startsWithSeven?a("li",{staticClass:"error"},[e._v("Телефон должен быть в формате 7(xxx)xxx-xx-xx ")]):e._e(),e.$v.phone.$dirty&&!e.$v.phone.length?a("li",{staticClass:"error"},[e._v("Телефон должен содержать 11 цифр ")]):e._e()])],2),a("Checkbox",{attrs:{id:"no-sms",name:"no-sms",value:"no-sms",label:"Не отправлять СМС"},model:{value:e.$v.noSMS.$model,callback:function(t){e.$set(e.$v.noSMS,"$model",t)},expression:"$v.noSMS.$model"}}),a("div",{staticClass:"options-group"},[a("div",{staticClass:"options-group__name"},[e._v("Пол")]),a("div",{staticClass:"input-group input-group_row input-group_condensed"},[a("RadioButton",{attrs:{value:"male",name:"sex",id:"sex-male",label:"Мужской"},model:{value:e.$v.sex.$model,callback:function(t){e.$set(e.$v.sex,"$model",t)},expression:"$v.sex.$model"}}),a("RadioButton",{attrs:{value:"female",name:"sex",id:"sex-female",label:"Женский"},model:{value:e.$v.sex.$model,callback:function(t){e.$set(e.$v.sex,"$model",t)},expression:"$v.sex.$model"}})],1)])],1)])])},ee=[],te=(a("2ca0"),a("b5ae")),ae=(a("b64b"),a("f3e7")),ie={mixins:[ae["a"]],methods:{getValidator:function(){return this.$v},getData:function(){var e=this;return Object.keys(this.$v).filter((function(e){return!e.startsWith("$")})).reduce((function(t,a){var i=e.labels&&e.labels[a]?e.labels[a]:a;return t[i]=e.$v[a].$model,t}),{})},reset:function(){Object.assign(this.$data,this.$options.data.call(this))}},props:{active:{type:Boolean}}},se={name:"PagePatient",components:{RadioButton:j,Checkbox:w,MaskedInput:M,FormInput:f},mixins:[ie],data:function(){return{lastName:"",firstName:"",patronymic:"",dateOfBirth:"",phone:"",sex:"",noSMS:!1}},validations:{firstName:{required:te["required"]},lastName:{required:te["required"]},patronymic:{},dateOfBirth:{required:te["required"]},phone:{required:te["required"],startsWithSeven:function(e){return e.startsWith("7")},length:function(e){return 15===e.length}},sex:{},noSMS:{}}},re=se,ne=Object(p["a"])(re,Y,ee,!1,null,"fb6f6bda",null),oe=ne.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"client-form__page"},[a("div",{staticClass:"col"},[a("div",{staticClass:"input-group"},[a("FormInput",{style:{width:"128px"},attrs:{name:"index",id:"index",label:"Индекс"},model:{value:e.$v.index.$model,callback:function(t){e.$set(e.$v.index,"$model","string"===typeof t?t.trim():t)},expression:"$v.index.$model"}}),a("FormInput",{attrs:{name:"country",id:"country",label:"Страна"},model:{value:e.$v.country.$model,callback:function(t){e.$set(e.$v.country,"$model","string"===typeof t?t.trim():t)},expression:"$v.country.$model"}}),a("FormInput",{attrs:{name:"district",id:"district",label:"Область"},model:{value:e.$v.district.$model,callback:function(t){e.$set(e.$v.district,"$model","string"===typeof t?t.trim():t)},expression:"$v.district.$model"}}),a("FormInput",{attrs:{required:"",invalid:e.$v.city.$dirty&&e.$v.city.$invalid,name:"city",id:"city",label:"Город"},model:{value:e.$v.city.$model,callback:function(t){e.$set(e.$v.city,"$model","string"===typeof t?t.trim():t)},expression:"$v.city.$model"}},[a("template",{slot:"errors"},[e.$v.city.$dirty&&!e.$v.city.required?a("li",{staticClass:"error"},[e._v(" Это поле обязательно ")]):e._e()])],2),a("FormInput",{attrs:{name:"street",id:"street",label:"Улица"},model:{value:e.$v.street.$model,callback:function(t){e.$set(e.$v.street,"$model","string"===typeof t?t.trim():t)},expression:"$v.street.$model"}}),a("FormInput",{style:{width:"128px"},attrs:{name:"house",id:"house",label:"Дом"},model:{value:e.$v.house.$model,callback:function(t){e.$set(e.$v.house,"$model","string"===typeof t?t.trim():t)},expression:"$v.house.$model"}})],1)])])},ce=[],ue={name:"PageAddress",components:{FormInput:f},mixins:[ie],data:function(){return{index:"",country:"",district:"",city:"",street:"",house:""}},validations:{index:{},country:{},district:{},city:{required:te["required"]},street:{},house:{}}},de=ue,pe=(a("3055"),Object(p["a"])(de,le,ce,!1,null,"71fd7c04",null)),me=pe.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"client-form__page"},[a("div",{staticClass:"col"},[a("div",{staticClass:"input-group input-group_document"},[a("Select",{attrs:{required:"",label:"Тип документа",name:"doc-type",id:"doc-type",options:e.documentTypes},model:{value:e.$v.type.$model,callback:function(t){e.$set(e.$v.type,"$model",t)},expression:"$v .type.$model"}},[a("template",{slot:"errors"},[e.$v.type.$dirty&&!e.$v.type.required?a("li",{staticClass:"error"},[e._v("Это поле обязательно")]):e._e()])],2),a("div",{staticClass:"row"},[a("FormInput",{style:{width:"100px"},attrs:{name:"doc-series",id:"doc-series",label:"Серия"},model:{value:e.$v.series.$model,callback:function(t){e.$set(e.$v.series,"$model","string"===typeof t?t.trim():t)},expression:"$v.series.$model"}}),a("FormInput",{attrs:{name:"doc-number",id:"doc-number",label:"Номер"},model:{value:e.$v.number.$model,callback:function(t){e.$set(e.$v.number,"$model","string"===typeof t?t.trim():t)},expression:"$v.number.$model"}})],1),a("FormInput",{attrs:{required:"",invalid:e.$v.issueDate.$dirty&&e.$v.issueDate.$invalid,type:"date",name:"issue-date",id:"issue-date",label:"Когда выдан"},model:{value:e.$v.issueDate.$model,callback:function(t){e.$set(e.$v.issueDate,"$model",t)},expression:"$v.issueDate.$model"}},[a("template",{slot:"errors"},[e.$v.issueDate.$dirty&&!e.$v.issueDate.required?a("li",{staticClass:"error"},[e._v("Это поле обязательно ")]):e._e()])],2),a("FormInput",{attrs:{name:"issued-at",id:"issued-at",label:"Кем выдан"},model:{value:e.$v.issuedAt.$model,callback:function(t){e.$set(e.$v.issuedAt,"$model","string"===typeof t?t.trim():t)},expression:"$v.issuedAt.$model"}})],1)])])},he=[],ve={name:"PageDocument",components:{FormInput:f,Select:y},mixins:[ie],data:function(){return{type:"passport",series:"",number:"",issuedAt:"",issueDate:"",documentTypes:[{value:"passport",text:"Паспорт"},{value:"birth-certificate",text:"Свидетельство о рождении"},{value:"driver-license",text:"Вод. удостоверение"}]}},validations:{type:{required:te["required"]},issueDate:{required:te["required"]},issuedAt:{},series:{},number:{}}},_e=ve,ge=(a("f019"),Object(p["a"])(_e,fe,he,!1,null,"4f7888f6",null)),$e=ge.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"client-form__page"},[a("div",{staticClass:"col"},[e.medical.groupsLoaded?a("div",{staticClass:"options-group"},[a("div",{staticClass:"options-group__name"},[e._v("Группа клиентов")]),e._l(e.medical.groups,(function(t,i){return a("Checkbox",{key:i,attrs:{tabindex:"-1",value:i,name:"medical-group",id:"group-"+i,label:t},model:{value:e.$v.group.$model,callback:function(t){e.$set(e.$v.group,"$model",t)},expression:"$v.group.$model"}})}))],2):e._e(),e.medical.doctorsLoaded?a("Select",{attrs:{tabindex:"-1",label:"Лечащий врач",name:"doctor",id:"doctor",options:e.doctors},model:{value:e.$v.doctor.$model,callback:function(t){e.$set(e.$v.doctor,"$model",t)},expression:"$v.doctor.$model"}}):e._e(),a("Button",{staticClass:"client-form__submit",attrs:{type:"submit"}},[e._v("Добавить клиента")])],1)])},ye=[],xe=(a("d81d"),function(){return new Promise((function(e){e([{value:"1",text:"Иванов"},{value:"2",text:"Захаров"},{value:"3",text:"Чернышева"}])}))}),Ce=function(){return new Promise((function(e){e([{value:"vip",text:"VIP"},{value:"problem",text:"Проблемные"},{value:"oms",text:"ОМС"}])}))},ke=function(e){return e.reduce((function(e,t){return e[t.value]=t.text,e}),{})},Se={data:function(){return{medical:{groupsLoaded:!1,doctorsLoaded:!1,groups:{},doctors:{}}}},mounted:function(){var e=this;Ce().then((function(t){e.medical.groupsLoaded=!0,e.medical.groups=ke(t)})),xe().then((function(t){e.medical.doctorsLoaded=!0,e.medical.doctors=ke(t)}))}},qe={name:"PageMedical",components:{Select:y,Button:J,Checkbox:w},mixins:[ie,Se],data:function(){return{group:[],doctor:null,groupsLoaded:!1,doctorsLoaded:!1}},computed:{doctors:function(){var e=this;return[{value:"",text:"Выберите врача"}].concat(Object.keys(this.medical.doctors).map((function(t){return{value:t,text:e.medical.doctors[t]}})))}},validations:{group:{},doctor:{}}},we=qe,Pe=Object(p["a"])(we,be,ye,!1,null,"b67d1c18",null),Fe=Pe.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-progress"},[a("div",{class:e.indicatorClass},[a("svg",{staticClass:"indicator__container",attrs:{viewBox:"0 0 64 64"}},[a("g",{staticClass:"indicator__circles"},[e._l(e.steps,(function(t,i){return a("circle",{key:i,class:e.getCircleClass(i),style:e.getCircleStyle(i),attrs:{r:e.circleRadius,cx:"32",cy:"32"}})})),e.complete?e._e():a("circle",{staticClass:"indicator__mask",style:e.maskStyle,attrs:{r:e.circleRadius,cx:"32",cy:"32"}}),a("circle",{staticClass:"indicator__active",style:e.activeStyle,attrs:{r:e.circleRadius,cx:"32",cy:"32"}})],2),a("path",{staticClass:"indicator__mark",attrs:{d:"M 16,32 L 32 46 50 21",stroke:"green",fill:"none","stroke-width":"4"}}),e.complete?e._e():a("text",{staticClass:"indicator__text",attrs:{x:"32",y:"36","text-anchor":"middle"}},[e._v(e._s(e.active+1)+" из "+e._s(e.steps.length))])])]),e.complete?e._e():a("ul",{staticClass:"form-progress__steps"},e._l(e.steps,(function(t,i){return a("li",{key:i,class:e.getStepClass(i),on:{click:function(t){return e.goTo(i)}}},[e._v(e._s(t)+" ")])})),0)])},Ie=[],Ne=(a("a9e3"),{name:"FormProgress",props:{steps:{type:Array,required:!0},active:{type:Number,default:0},errors:{type:Set,required:!0},valid:{type:Set,required:!0}},data:function(){return{circleRadius:28}},methods:{getStepClass:function(e){return["form-progress__step",e===this.active&&"form-progress__step_active",this.errors.has(e)&&"form-progress__step_error",this.valid.has(e)&&"form-progress__step_valid"]},getCircleStyle:function(e){var t=2*Math.PI*this.circleRadius;return{"stroke-dasharray":t,"stroke-dashoffset":t*(1/this.steps.length)*e}},getCircleClass:function(e){return["indicator__circle",this.errors.has(e)&&"indicator__circle_error",this.valid.has(e)&&"indicator__circle_valid"]},goTo:function(e){this.$emit("navigate",e)}},computed:{circumference:function(){return 2*Math.PI*this.circleRadius},maskStyle:function(){return{"stroke-dasharray":this.circumference,"stroke-dashoffset":this.circumference*(1/this.steps.length)*(this.active+1)}},activeStyle:function(){var e=2*Math.PI/this.steps.length;return{"stroke-dasharray":this.circumference,"stroke-dashoffset":this.complete?this.circumference:this.circumference*(1-1/this.steps.length),transform:"rotateZ(".concat(-this.active*e,"rad) rotateX(180deg)")}},indicatorClass:function(){return["indicator",this.complete&&"indicator_complete"]},complete:function(){return this.active>=this.steps.length}}}),je=Ne,Be=(a("0ffa"),Object(p["a"])(je,Oe,Ie,!1,null,"bbee174e",null)),Ae=Be.exports,Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"client-form__success"},[a("div",{staticClass:"client-form__result form-result"},[e.data.PagePatient?a("PatientView",{attrs:{data:e.data.PagePatient}}):e._e(),e.data.PageAddress?a("AddressView",{attrs:{data:e.data.PageAddress}}):e._e(),e.data.PageDocument?a("DocumentView",{attrs:{data:e.data.PageDocument}}):e._e(),e.data.PageMedical?a("AdditionalInfoView",{attrs:{data:e.data.PageMedical},on:{ready:function(t){return e.$emit("ready")}}}):e._e()],1),a("Button",{on:{click:function(t){return e.$emit("reset")}}},[e._v("Добавить нового клиента")])],1)},Ee=[],De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"result-view"},[a("h2",[e._v("Пациент")]),a("ResultField",{attrs:{label:"ФИО",value:e.fio}}),a("ResultField",{attrs:{label:"Телефон",value:e.data.phone}}),e.data.noSMS?a("ResultField",{attrs:{label:"Не отправлять СМС",checkbox:""}}):e._e(),a("ResultField",{attrs:{label:"Дата рождения",value:e.dateOfBirth}}),a("ResultField",{attrs:{label:"Пол",value:e.sex}})],1)},Re=[],Me=(a("a15b"),a("498a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"result-view__field"},[a("div",{staticClass:"result-view__label"},[e._v(e._s(e.label))]),e.checkbox?e._e():a("div",{staticClass:"result-view__value"},[e._v(e._s(e.filteredValue))])])}),Le=[],Te={name:"ResultField",props:{label:{type:String,required:!0},value:{type:String},emptyValue:{type:String,default:"Не указано"},checkbox:{type:Boolean}},computed:{filteredValue:function(){var e=this.value.trim();return e||this.emptyValue}}},He=Te,Ue=(a("3da4"),Object(p["a"])(He,Me,Le,!1,null,"42fcf091",null)),We=Ue.exports,Je=function(e){return new Date(e).toLocaleDateString("ru-RU")},Xe={name:"PatientView",components:{ResultField:We},props:{data:{type:Object,required:!0}},computed:{fio:function(){return[this.data.lastName,this.data.firstName,this.data.patronymic].join(" ").trim()},sex:function(){switch(this.data.sex){case"male":return"Мужской";case"female":return"Женский";default:return"Не указан"}},dateOfBirth:function(){return this.data.dateOfBirth?Je(this.data.dateOfBirth):"Не указано"}}},ze=Xe,Ze=Object(p["a"])(ze,De,Re,!1,null,"15abf4b6",null),Ge=Ze.exports,Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"result-view"},[a("h2",[e._v("Адрес")]),e._v(" "+e._s(e.fullAddress)+" ")])},Qe=[],Ye=(a("5319"),{name:"AddressView",props:{data:{type:Object,required:!0}},computed:{fullAddress:function(){return[this.data.index,this.data.country,this.data.district,this.data.city,this.data.street,this.data.house].map((function(e){return e.trim()})).filter(Boolean).join(", ").replace(/\s+/g," ").trim()}}}),et=Ye,tt=Object(p["a"])(et,Ke,Qe,!1,null,"7dbf7cba",null),at=tt.exports,it=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"result-view"},[a("h2",[e._v("Документ")]),a("ResultField",{attrs:{label:"Тип документа",value:e.documentType}}),a("ResultField",{attrs:{label:"Кем выдан",value:e.data.issuedAt}}),a("ResultField",{attrs:{label:"Когда выдан",value:e.issueDate}}),a("ResultField",{attrs:{label:"Серия и номер",value:e.id}})],1)},st=[],rt={name:"DocumentView",components:{ResultField:We},props:{data:{type:Object,required:!0}},computed:{id:function(){return[this.data.series,this.data.number].join(" ").trim()},documentType:function(){switch(this.data.type){case"passport":return"Паспорт";case"birth-certificate":return"Паспорт";case"driver-license":return"Паспорт";default:return""}},issueDate:function(){return this.data.issueDate?Je(this.data.issueDate):"Не указано"}}},nt=rt,ot=Object(p["a"])(nt,it,st,!1,null,"469b3a64",null),lt=ot.exports,ct=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"result-view"},[a("h2",[e._v("Дополнительно")]),e.medical.groupsLoaded?a("ResultField",{attrs:{label:"Группа клиентов",value:e.group}}):e._e(),e.medical.doctorsLoaded?a("ResultField",{attrs:{label:"Лечащий врач",value:e.doctor}}):e._e()],1)},ut=[],dt={name:"AdditionalInfoView",components:{ResultField:We},mixins:[Se],props:{data:{type:Object,required:!0}},computed:{group:function(){var e=this,t=this.data.group||[];return t.length?t.map((function(t){return e.medical.groups[t]})).join(", "):""},doctor:function(){return this.data.doctor?this.medical.doctors[this.data.doctor]:""}},watch:{medical:{handler:function(e){var t=this;console.log(e),e.groupsLoaded&&e.doctorsLoaded&&this.$nextTick((function(){t.$emit("ready")}))},deep:!0}}},pt=dt,mt=Object(p["a"])(pt,ct,ut,!1,null,"dec778c2",null),ft=mt.exports,ht={name:"FormSuccess",components:{AdditionalInfoView:ft,DocumentView:lt,AddressView:at,PatientView:Ge,Button:J},props:{data:{type:Object,required:!0}},data:function(){return{async:!0}}},vt=ht,_t=Object(p["a"])(vt,Ve,Ee,!1,null,"bf14e12e",null),gt=_t.exports,$t={name:"ClientForm",components:{FormProgress:Ae,FormInput:f,Select:y,Checkbox:w,RadioButton:j,MaskedInput:M,Button:J,FormSlider:Q,PagePatient:oe,PageAddress:me,PageDocument:$e,PageMedical:Fe,FormSuccess:gt},mixins:[h["validationMixin"]],data:function(){return{page:0,steps:["Пациент","Адрес","Документ","Дополнительно"],pages:[oe,me,$e,Fe],errors:new Set,valid:new Set,formSubmitted:!1,formData:{}}},methods:{onSubmit:function(){for(var e=!0,t=0;t<this.$refs.pages.length;t++){var a=this.$refs.pages[t],i=a.getValidator();if(i.$touch(),i.$anyError){e=!1,this.$refs.slider.navigate(t);break}}e&&(this.formData=this.$refs.pages.reduce((function(e,t){return e[t.$options.name]=t.getData(),e}),{}),this.formSubmitted=!0,this.$refs.slider.toSuccessPage())},onSlideChange:function(e){var t=this.$refs.pages[this.page].getValidator();t.$anyError?(this.valid.delete(this.page),this.errors.add(this.page)):(this.errors.delete(this.page),this.valid.add(this.page)),this.page=e},navigate:function(e){this.$refs.slider.navigate(e),console.log(this.$refs.pages[e].getValidator())},resetForm:function(){this.page=0,this.formSubmitted=!1,this.errors=new Set,this.valid=new Set,this.$refs.pages.forEach((function(e){e.reset()})),this.$refs.form.reset(),this.$refs.slider.reset()}},computed:{title:function(){return this.formSubmitted?"Клиент добавлен!":"Добавление клиента"}}},bt=$t,yt=(a("5c9b"),Object(p["a"])(bt,n,o,!1,null,null,null)),xt=yt.exports,Ct={name:"App",components:{ClientForm:xt}},kt=Ct,St=(a("5c0b"),Object(p["a"])(kt,s,r,!1,null,null,null)),qt=St.exports;a("026f");i["a"].config.productionTip=!1,i["a"].config.devtools=!0,new i["a"]({render:function(e){return e(qt)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"5c9b":function(e,t,a){"use strict";a("1698")},"6beb":function(e,t,a){"use strict";a("e890")},"7b45":function(e,t,a){},"7d21":function(e,t,a){},"802f":function(e,t,a){},"80af":function(e,t,a){"use strict";a("d82a")},"97b1":function(e,t,a){"use strict";a("e774")},"9c0c":function(e,t,a){},bdae:function(e,t,a){},d82a:function(e,t,a){},dc06:function(e,t,a){},e774:function(e,t,a){},e890:function(e,t,a){},f019:function(e,t,a){"use strict";a("7d21")},f878:function(e,t,a){"use strict";a("bdae")},fb97:function(e,t,a){},fe66:function(e,t,a){}});
//# sourceMappingURL=index.4fced939.js.map