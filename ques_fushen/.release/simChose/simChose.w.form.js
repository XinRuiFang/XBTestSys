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
var __parent0=require('$model/UI2/ques_fushen/simChose'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cAJjAfy';
	this._flag_='a020425b46eb2070664e833249aa7530';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"A":{"define":"A","label":"A","name":"A","relation":"A","type":"String"},"B":{"define":"B","label":"B","name":"B","relation":"B","type":"String"},"C":{"define":"C","label":"C","name":"C","relation":"C","type":"String"},"D":{"define":"D","label":"D","name":"D","relation":"D","type":"String"},"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"编号","name":"id","relation":"id","type":"String"},"question":{"define":"question","label":"问题","name":"question","relation":"question","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"quesCustomRefresh"},"idColumn":"id","limit":20,"xid":"ques"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"choose":{"define":"choose","label":"选项","name":"choose","relation":"choose","type":"String"},"chooseId":{"define":"chooseId","label":"选项号","name":"chooseId","relation":"chooseId","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"ques":{"define":"ques","label":"问题","name":"ques","relation":"ques","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"usingCustomRefresh"},"idColumn":"id","limit":20,"xid":"using"});
}}); 
return __result;});