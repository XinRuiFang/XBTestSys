window.__justep.__ResourceEngine.loadCss([{url: '/v_a19b667dabe44778adbfdaa37f4d82a4l_zh_CNs_desktopd_/system/components/comp.min.css', include: '$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/justep/panel/css/panel,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/contents/css/contents,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/menu/css/menu,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/common/css/forms,$model/system/components/justep/bar/css/bar'},{url: '/v_a5e2fa18256c4c9b85bf9a9558493154l_zh_CNs_desktopd_/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/v_156c4f1dfab848829c2e37a85968c7del_zh_CNs_desktopd_/system/components/comp.min.js','/v_c265d697a3b14e798a09631043d1b8cal_zh_CNs_desktopd_/system/common.min.js','/v_507177fb9d4442208c8684f7bbee6f47l_zh_CNs_desktopd_/system/core.min.js']);define(function(require){
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
var __parent0=require('$model/UI2/ques_xinpei/xinpeijudgeWrong'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmi67fa';
	this._flag_='a79042801d96ab3dc098dc8848ca8efa';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"编号","name":"id","relation":"id","type":"String"},"question":{"define":"question","label":"问题","name":"question","relation":"question","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"quesCustomRefresh"},"idColumn":"id","limit":20,"xid":"ques"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"num":{"define":"num","name":"num","relation":"num","type":"String"},"question":{"define":"question","label":"问题","name":"question","relation":"question","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"queswrongCustomRefresh"},"idColumn":"id","limit":20,"xid":"queswrong"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"choose":{"define":"choose","label":"选项","name":"choose","relation":"choose","type":"String"},"chooseId":{"define":"chooseId","label":"选项号","name":"chooseId","relation":"chooseId","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"ques":{"define":"ques","label":"问题","name":"ques","relation":"ques","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"usingCustomRefresh"},"idColumn":"id","limit":20,"xid":"using"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"val":{"define":"val","name":"val","relation":"val","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\" : \"1\",\"name\" : \"正确√\",\"val\" : \"1\"},{\"id\" : \"2\",\"name\" : \"错误×\",\"val\" : \"0\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});
