window.__justep.__ResourceEngine.loadCss([{url: '/v_9a202ab8ee094137b50eda93d3ea18bal_zh_CNs_desktopd_/system/components/comp.min.css', include: '$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/justep/panel/css/panel,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/contents/css/contents,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/menu/css/menu,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/common/css/forms,$model/system/components/justep/bar/css/bar'},{url: '/v_95dabac8753f4b07a029462a6c38612al_zh_CNs_desktopd_/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/v_aa59e4d54b9d43b19c97542818cffd60l_zh_CNs_desktopd_/system/components/comp.min.js','/v_746cc5c2439e4a23aae69db17f53435cl_zh_CNs_desktopd_/system/common.min.js','/v_3fbc7df882664552b5f8a67e60fba44al_zh_CNs_desktopd_/system/core.min.js']);define(function(require){
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
var __parent0=require('$model/UI2/ques_xinpei/simJudge'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caiquEv';
	this._flag_='1623fa28e658f06b1fb8916d0852fb69';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"编号","name":"id","relation":"id","type":"String"},"question":{"define":"question","label":"问题","name":"question","relation":"question","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"quesCustomRefresh"},"idColumn":"id","limit":20,"xid":"ques"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"ques":{"define":"ques","label":"问题","name":"ques","relation":"ques","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"usingCustomRefresh"},"idColumn":"id","limit":20,"xid":"using"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"val":{"define":"val","name":"val","relation":"val","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\" : \"1\",\"name\" : \"正确√\",\"val\" : \"1\"},{\"id\" : \"2\",\"name\" : \"错误×\",\"val\" : \"0\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});
