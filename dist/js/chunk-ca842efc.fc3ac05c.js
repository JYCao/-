(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca842efc"],{"050a":function(t,e,n){"use strict";var r=n("c3ec"),a=n.n(r);a.a},"4ecf":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return s}));var r=n("b775"),a=function(t){return Object(r["a"])("/subjects","get",t)},o=function(t){return Object(r["a"])("/subjects/simple","get",t)},c=function(t){return Object(r["a"])("/subjects","post",t)},i=function(t){return Object(r["a"])("/subjects/".concat(t.id),"put",t)},s=function(t){return Object(r["a"])("/subjects/".concat(t.id),"delete",t)}},"72a0":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c}));var r=[{value:1,label:"启用"},{value:0,label:"禁用"}],a=[{value:1,label:"简单"},{value:2,label:"一般"},{value:3,label:"困难"}],o=[{value:1,label:"单选"},{value:2,label:"多选"},{value:3,label:"简答"}],c=["o2o","外包服务","企业服务","互联网金融","企业咨询","互联网","电子商务","其他"]},"8e79":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-card",{staticClass:"box-card"},[n("div",{ref:"form",staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-form",{ref:"myForm",attrs:{model:t.form,"label-width":"80px"}},[n("el-row",[n("el-col",{attrs:{span:6}},[n("span",{staticClass:"title"},[t._v("说明：目前支持学科和关键字条件筛选")])]),n("el-col",{attrs:{span:18}},[n("el-button",{staticClass:"add",attrs:{type:"success",size:"medium"},on:{click:function(e){return t.$router.push("new")}}},[n("i",{staticClass:"el-icon-edit"}),t._v("新增试题 ")])],1)],1),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"学科",prop:"subjectID"}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:t.hChangesbj},model:{value:t.form.subjectID,callback:function(e){t.$set(t.form,"subjectID",e)},expression:"form.subjectID"}},t._l(t.subjectsList,(function(t,e){return n("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"二级目录",prop:"catalogID"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.catalogID,callback:function(e){t.$set(t.form,"catalogID",e)},expression:"form.catalogID"}},t._l(t.directorysList,(function(t,e){return n("el-option",{key:e,attrs:{label:t.directoryName,value:t.id}})})),1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"标签",prop:"tags"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},t._l(t.tagsList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"关键字"}},[n("el-input",{attrs:{placeholder:"请根据题干搜索"},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"试题类型"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.questionType,callback:function(e){t.$set(t.form,"questionType",e)},expression:"form.questionType"}},t._l(t.questionTypeList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"难度"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.difficulty,callback:function(e){t.$set(t.form,"difficulty",e)},expression:"form.difficulty"}},t._l(t.difficultyList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"方向"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.direction,callback:function(e){t.$set(t.form,"direction",e)},expression:"form.direction"}},t._l(t.directionList,(function(t,e){return n("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"录入人"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.creatorID,callback:function(e){t.$set(t.form,"creatorID",e)},expression:"form.creatorID"}},[n("el-option",{attrs:{label:"超级管理员",value:1}})],1)],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"题目备注"}},[n("el-input",{model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks",e)},expression:"form.remarks"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"企业简称"}},[n("el-input",{model:{value:t.form.shortName,callback:function(e){t.$set(t.form,"shortName",e)},expression:"form.shortName"}})],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{attrs:{label:"城市",prop:"province"}},[n("el-row",[n("el-col",{staticStyle:{"padding-right":"5px"},attrs:{span:12}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:t.hChoiceCity},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},t._l(t.citySelect.province,(function(t,e){return n("el-option",{key:e,attrs:{value:t,label:t}})})),1)],1),n("el-col",{staticStyle:{"padding-left":"5px"},attrs:{span:12}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}},t._l(t.citySelect.cityData,(function(t,e){return n("el-option",{key:e,attrs:{value:t,label:t}})})),1)],1)],1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-form-item",{staticStyle:{float:"right"}},[n("el-button",{attrs:{size:"mini"},on:{click:t.hEmpty}},[t._v("清除")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.hSearch}},[t._v("搜索")])],1)],1)],1)],1),n("el-alert",{attrs:{title:t.alertText,type:"info","show-icon":"",closable:!1}})],1),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.questionItem}},[n("el-table-column",{attrs:{label:"序号",width:"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s((t.form.page-1)*t.form.pagesize+(e.$index+1))+" ")])]}}])}),n("el-table-column",{attrs:{label:"试题编号",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.number))])]}}])}),n("el-table-column",{attrs:{label:"学科",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.subject))])]}}])}),n("el-table-column",{attrs:{label:"目录",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.catalog))])]}}])}),n("el-table-column",{attrs:{label:"题型",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"===e.row.questionType?n("span",[t._v("单选")]):"2"===e.row.questionType?n("span",[t._v("多选")]):"3"===e.row.questionType?n("span",[t._v("简单")]):n("span")]}}])}),n("el-table-column",{attrs:{label:"题干",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{domProps:{innerHTML:t._s(e.row.question)}})]}}])}),n("el-table-column",{attrs:{label:"录入时间",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("formatDate")(e.row.addDate)))])]}}])}),n("el-table-column",{attrs:{label:"难度",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"===e.row.difficulty?n("span",[t._v("简单")]):"2"===e.row.difficulty?n("span",[t._v("一般")]):"3"===e.row.difficulty?n("span",[t._v("困难")]):n("span")]}}])}),n("el-table-column",{attrs:{label:"录入人",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.creator))])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",title:"预览",icon:"el-icon-view",plain:"",circle:""},on:{click:function(n){return t.hPreview(e.row.id)}}}),n("el-button",{attrs:{size:"mini",title:"编辑",type:"success",icon:"el-icon-edit",plain:"",circle:""},on:{click:function(n){return t.hEdit(e.row.id)}}}),n("el-button",{ref:"dangerBtn",attrs:{size:"mini",title:"删除",type:"danger",icon:"el-icon-delete",plain:"",circle:""},on:{click:function(n){return t.hDel(e.row.id)}}}),n("el-button",{attrs:{size:"mini",title:"加入精选",type:"warning",icon:"el-icon-check",plain:"",circle:""},on:{click:function(n){return t.hChoice(e.row.id)}}})]}}])})],1),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes, jumper",disabled:t.isLoadding,"page-sizes":[10,2,3,5],"page-size":t.form.pagesize,"hide-on-single-page":!1,total:t.counts},on:{"current-change":t.hPageChange,"size-change":t.hPagesizeChange}})],1),n("el-dialog",{attrs:{"destroy-on-close":!0,visible:t.dialogVisible,title:"题目预览",width:"60%",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("my-preview",{attrs:{result:t.results}}),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("关 闭")])],1)],1)],1)],1)},a=[],o=(n("96cf"),n("1da1")),c=n("9eca"),i=n("4ecf"),s=n("a77a"),l=n("fcec"),u=n("b59c"),f=n("72a0"),d=n("87b6"),p={name:"question",components:{MyPreview:d["default"]},data:function(){return{isLoadding:!1,results:{},dialogVisible:!1,alertText:"",counts:0,questionTypeList:f["c"],difficultyList:f["a"],directionList:f["b"],subjectsList:[],directorysList:[],tagsList:[],citySelect:{province:[],cityData:[]},questionItem:[],form:{catalogID:null,tags:null,questionType:null,difficulty:null,subjectID:null,keyword:null,creatorID:null,remarks:null,shortName:null,province:null,city:null,direction:null,page:1,pagesize:10}}},created:function(){this.loadQuestionList(),this.loadSubjects(),this.getProvince()},methods:{loadQuestionList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["g"])(t.form);case 2:n=e.sent,t.questionItem=n.data.items,t.alertText="这里共有".concat(n.data.counts,"道题"),t.counts=n.data.counts,t.isLoadding=!1;case 7:case"end":return e.stop()}}),e)})))()},loadSubjects:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["d"])();case 2:n=e.sent,t.subjectsList=n.data;case 4:case"end":return e.stop()}}),e)})))()},hChangesbj:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.form.catalogID=null,e.form.tags=null,n.next=4,Object(s["d"])({subjectID:t});case 4:return r=n.sent,e.directorysList=r.data.items,n.next=8,Object(l["e"])({subjectID:t});case 8:a=n.sent,e.tagsList=a.data;case 10:case"end":return n.stop()}}),n)})))()},hEmpty:function(){this.form.city=null,this.$refs.myForm.resetFields(),this.directorysList=[],this.tagsList=[]},hSearch:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form.page=1,t.form.keyword&&(t.form.keyword=t.form.keyword.replaceAll(" ","")),e.next=4,Object(c["g"])(t.form);case 4:n=e.sent,t.questionItem=n.data.items,t.alertText="这里共有".concat(n.data.counts,"道题"),t.counts=n.data.counts;case 8:case"end":return e.stop()}}),e)})))()},hPreview:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dialogVisible=!0,n.next=3,Object(c["f"])({id:t});case 3:r=n.sent,e.results=r.data;case 5:case"end":return n.stop()}}),n)})))()},hEdit:function(t){this.$router.push({path:"/questions/new?",query:{id:t}})},hDel:function(t){var e=this;this.$confirm("此操作将永久删除该试题, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["i"])({id:t}),e.loadQuestionList(),e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},hChoice:function(t){var e=this;this.$confirm("此操作要将试题加入精选, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["c"])({id:t,choiceState:1}),e.$router.push("choice"),e.$message({type:"success",message:"加入成功!"})})).catch((function(){e.$message({type:"info",message:"已取消加入"})}))},hPageChange:function(t){this.isLoadding=!0,this.form.page=t,this.loadQuestionList()},hPagesizeChange:function(t){this.isLoadding=!0,this.form.pagesize=t,this.loadQuestionList()},getProvince:function(){this.citySelect.province=Object(u["b"])()},hChoiceCity:function(t){this.citySelect.cityData=Object(u["a"])(t),this.form.city=this.citySelect.cityData[0]}},filters:{formatDate:function(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1;r=r<10?"0"+r:r;var a=e.getDate();a=a<10?"0"+a:a;var o=e.getHours();o=o<10?"0"+o:o;var c=e.getMinutes();c=c<10?"0"+c:c;var i=e.getSeconds();return i=i<10?"0"+i:i,n+"-"+r+"-"+a+" "+o+":"+c+":"+i}}},m=p,b=(n("050a"),n("2877")),h=Object(b["a"])(m,r,a,!1,null,"e07f41b8",null);e["default"]=h.exports},"9eca":function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"k",(function(){return i})),n.d(e,"i",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return u})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"h",(function(){return p})),n.d(e,"j",(function(){return m}));n("99af");var r=n("b775"),a=function(t){return Object(r["a"])("/questions","get",t)},o=function(t){return Object(r["a"])("/questions/".concat(t.id),"get",t)},c=function(t){return Object(r["a"])("/questions","post",t)},i=function(t){return Object(r["a"])("/questions/".concat(t.id),"put",t)},s=function(t){return Object(r["a"])("/questions/".concat(t.id),"delete",t)},l=function(t){return Object(r["a"])("/questions/choice/".concat(t.id,"/").concat(t.choiceState),"patch",t)},u=function(t){return Object(r["a"])("/questions/choice","get",t)},f=function(t){return Object(r["a"])("/questions/choice/".concat(t.id,"/").concat(t.publishState),"post",t)},d=function(t){return Object(r["a"])("/questions/check/".concat(t.id),"post",t)},p=function(t){return Object(r["a"])("/questions/randoms","get",t)},m=function(t){return Object(r["a"])("/questions/randoms/".concat(t.id),"delete",t)}},a77a:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return u}));n("99af");var r=n("b775"),a=function(t){return Object(r["a"])("/directorys","get",t)},o=function(t){return Object(r["a"])("/directorys/simple","get",t)},c=function(t){return Object(r["a"])("/directorys/".concat(t.id),"get",t)},i=function(t){return Object(r["a"])("/directorys","post",t)},s=function(t){return Object(r["a"])("/directorys/".concat(t.id),"put",t)},l=function(t){return Object(r["a"])("/directorys/".concat(t.id),"delete",t)},u=function(t){return Object(r["a"])("/directorys/".concat(t.id,"/").concat(t.state),"post",t)}},c3ec:function(t,e,n){},fcec:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return l}));n("99af");var r=n("b775"),a=function(t){return Object(r["a"])("/tags","get",t)},o=function(t){return Object(r["a"])("/tags/simple","get",t)},c=function(t){return Object(r["a"])("/tags","post",t)},i=function(t){return Object(r["a"])("/tags/".concat(t.id),"put",t)},s=function(t){return Object(r["a"])("/tags/".concat(t.id),"delete",t)},l=function(t){return Object(r["a"])("/tags/".concat(t.id,"/").concat(t.state),"post",t)}}}]);
//# sourceMappingURL=chunk-ca842efc.fc3ac05c.js.map