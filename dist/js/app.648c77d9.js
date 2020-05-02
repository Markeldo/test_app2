(function(t){function e(e){for(var n,o,c=e[0],a=e[1],d=e[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,c=1;c<i.length;c++){var a=i[c];0!==s[a]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=a;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"18da":function(t,e,i){},2395:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Editor"),i("MyTable",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid"},[i("div",{ref:"header",staticClass:"grid__header",attrs:{id:"sasdasdasd"}},[t._m(0)]),i("div",{ref:"scrollable",staticClass:"grid__scrollable"},[i("table",{staticClass:"grid__table"},[t._m(1),i("tbody",t._l(t.products,(function(e){return i("tr",{key:e.id,attrs:{product:e}},[i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.price))]),i("td",[t._v(t._s(e.units))]),i("td",[t._v(t._s(e.discontinued))]),i("td",[i("button",{staticClass:"grid__btn",on:{click:function(i){return t.onEdit(e.id)}}},[t._v("✏️ Edit")]),i("button",{staticClass:"grid__btn btn--delete",on:{click:function(i){return t.onDelete(e.id)}}},[t._v("🔴 Delete")])])])})),0)])])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticClass:"grid__table"},[i("colgroup",[i("col"),i("col",{staticClass:"grid__col-size-1"}),i("col",{staticClass:"grid__col-size-1"}),i("col",{staticClass:"grid__col-size-1"}),i("col",{staticClass:"grid__col-size-2"})]),i("thead",[i("tr",[i("th",{staticClass:"grid__th"},[t._v("Product Name")]),i("th",{staticClass:"grid__th"},[t._v("Unit Price")]),i("th",{staticClass:"grid__th"},[t._v("Units in Stock")]),i("th",{staticClass:"grid__th"},[t._v("Discontinued")]),i("th",{staticClass:"grid__th"})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("colgroup",[i("col"),i("col",{staticClass:"grid__col-size-1"}),i("col",{staticClass:"grid__col-size-1"}),i("col",{staticClass:"grid__col-size-1"}),i("col",{staticClass:"grid__col-size-2"})])}],a={computed:{products:function(){return this.$store.state.products}},mounted:function(){var t=this;this.$refs.scrollable.addEventListener("scroll",(function(e){t.$refs.header.scrollLeft=e.target.scrollLeft}))},methods:{onEdit:function(t){this.$store.dispatch("editProduct",{id:t})},onDelete:function(t){this.$store.dispatch("deleteProduct",{id:t})}}},d=a,u=(i("6882"),i("2877")),l=Object(u["a"])(d,o,c,!1,null,"51ac2f55",null),p=l.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"editor"},[i("button",{staticClass:"btn--new",on:{click:t.onCreateNew}},[t._v("➕ Create New Record")]),t.modalOpened?i("div",{staticClass:"editor__modal"},[i("div",{staticClass:"editor__modal-wrapper"},[i("div",{staticClass:"editor__modal-header"},[i("span",[t._v(t._s(t.formTitle)+" record")]),i("button",{staticClass:"btn",on:{click:t.onClose}},[t._v("✖️")])]),i("div",{staticClass:"editor__modal-content"},[i("form",{staticClass:"editor__form"},[i("div",{staticClass:"editor__field"},[i("label",{staticClass:"editor__label"},[t._v("Product Name")]),i("span",{staticClass:"editor__input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"editor__input",attrs:{type:"text"},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}})])]),i("div",{staticClass:"editor__field"},[i("label",{staticClass:"editor__label"},[t._v("Unit Price")]),i("span",{staticClass:"editor__input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"editor__input",attrs:{type:"number",step:".01"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})])]),i("div",{staticClass:"editor__field"},[i("label",{staticClass:"editor__label"},[t._v("Units in Stock")]),i("span",{staticClass:"editor__input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.units,expression:"product.units"}],staticClass:"editor__input",attrs:{type:"number"},domProps:{value:t.product.units},on:{input:function(e){e.target.composing||t.$set(t.product,"units",e.target.value)}}})])]),i("div",{staticClass:"editor__field"},[i("label",{staticClass:"editor__label"},[t._v("Discontinued")]),i("span",{staticClass:"editor__input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.discontinued,expression:"product.discontinued"}],staticClass:"editor__input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.product.discontinued)?t._i(t.product.discontinued,null)>-1:t.product.discontinued},on:{change:function(e){var i=t.product.discontinued,n=e.target,s=!!n.checked;if(Array.isArray(i)){var r=null,o=t._i(i,r);n.checked?o<0&&t.$set(t.product,"discontinued",i.concat([r])):o>-1&&t.$set(t.product,"discontinued",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.product,"discontinued",s)}}})])])])]),i("div",{staticClass:"editor__modal-footer"},[t.isNew?i("button",{staticClass:"btn btn--new",on:{click:t.onSave}},[t._v("✅ Create")]):t._e(),t.isEdit?i("button",{staticClass:"btn btn--primary",on:{click:t.onSave}},[t._v("💾 Save")]):t._e(),i("button",{staticClass:"btn",on:{click:t.onClose}},[t._v("✖️ Cancel")])])])]):t._e()])},f=[],v=(i("c740"),{id:null,name:"",price:0,units:0,discontinued:!1}),m={data:function(){return{product:{},modalOpened:!1}},watch:{editId:function(t){if(t){this.modalOpened=!0;var e=this.$store.state.products.findIndex((function(e){return e.id==t}));this.product=n["a"].util.extend({},this.$store.state.products[e])}}},computed:{editId:function(){return this.$store.state.idToEdit},isNew:function(){return!this.editId},isEdit:function(){return this.editId},formTitle:function(){return this.editId?"Edit":"New"}},methods:{onCreateNew:function(){this.modalOpened=!0,this.product=n["a"].util.extend({},v)},onClose:function(){this.$store.dispatch("editProduct",{id:null}),this.modalOpened=!1},onSave:function(){this.$store.dispatch("saveProduct",this.product),this.onClose()}}},h=m,b=(i("62c9"),Object(u["a"])(h,_,f,!1,null,"5291c610",null)),C=b.exports,g={name:"App",components:{MyTable:p,Editor:C}},y=g,w=(i("7c55"),Object(u["a"])(y,s,r,!1,null,null,null)),P=w.exports,$=(i("d81d"),i("a434"),i("2f62"));n["a"].use($["a"]);var x=new $["a"].Store({state:{idToEdit:null,products:[{id:1,name:"Nestea",price:12.2,units:3,discontinued:!1},{id:2,name:"Lipton",price:9.2,units:30,discontinued:!1},{id:3,name:"Greenfield",price:15.22,units:10,discontinued:!1},{id:"z",name:"Noori",price:4.99,units:300,discontinued:!0}]},mutations:{setIdToEdit:function(t,e){t.idToEdit=e.id},addProduct:function(t,e){e.id=Math.max.apply(null,t.products.map((function(t){return isNaN(parseInt(t.id))?0:parseInt(t.id)})))+1,t.products.push(e)},editProduct:function(t,e){var i=t.products.findIndex((function(t){return t.id==e.id}));n["a"].set(t.products,i,e)},deleteProduct:function(t,e){var i=t.products.findIndex((function(t){return t.id==e.id}));t.products.splice(i,1)}},actions:{editProduct:function(t,e){t.commit("setIdToEdit",e)},saveProduct:function(t,e){null===e.id?t.commit("addProduct",e):t.commit("editProduct",e)},deleteProduct:function(t,e){t.commit("deleteProduct",e)}}});n["a"].config.productionTip=!1,new n["a"]({store:x,render:function(t){return t(P)}}).$mount("#app")},"5f12":function(t,e,i){},"62c9":function(t,e,i){"use strict";var n=i("5f12"),s=i.n(n);s.a},6882:function(t,e,i){"use strict";var n=i("18da"),s=i.n(n);s.a},"7c55":function(t,e,i){"use strict";var n=i("2395"),s=i.n(n);s.a}});
//# sourceMappingURL=app.648c77d9.js.map