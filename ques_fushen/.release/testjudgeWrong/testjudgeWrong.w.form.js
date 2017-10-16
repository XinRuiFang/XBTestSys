define(function(require){
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ques_fushen/testjudgeWrong'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cfUjQri';
	this._flag_='040322e57cfea4659f320791d511b5ff';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"编号","name":"id","relation":"id","type":"String"},"question":{"define":"question","label":"问题","name":"question","relation":"question","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"quesCustomRefresh"},"idColumn":"id","limit":20,"xid":"ques"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"num":{"define":"num","name":"num","relation":"num","type":"String"},"question":{"define":"question","label":"问题","name":"question","relation":"question","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"queswrongCustomRefresh"},"idColumn":"id","limit":20,"xid":"queswrong"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"choose":{"define":"choose","label":"选项","name":"choose","relation":"choose","type":"String"},"chooseId":{"define":"chooseId","label":"选项号","name":"chooseId","relation":"chooseId","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"ques":{"define":"ques","label":"问题","name":"ques","relation":"ques","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"usingCustomRefresh"},"idColumn":"id","limit":20,"xid":"using"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"val":{"define":"val","name":"val","relation":"val","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\" : \"1\",\"name\" : \"正确√\",\"val\" : \"1\"},{\"id\" : \"2\",\"name\" : \"错误×\",\"val\" : \"0\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});