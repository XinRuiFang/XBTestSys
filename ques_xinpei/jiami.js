define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var jiami = require("./js/md5");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	CommonUtils.attachDoubleClickExitApp(function() {

    });
	var Model = function(){
		this.callParent();
	};

	Model.prototype.macCustomRefresh = function(event){
		var mac = window.device.uuid;
		this.comp("mac").add({
			"id" : "1",
			"mac" : mac
		});
	};

	Model.prototype.button1Click = function(event){
		var input = this.comp("input1").val();
		var mac = this.comp("mac").val("mac");
		var over = jiami.calcMD5(mac);
		over = over.substring(0,10);
		if(input == over)
		{
			this.comp("messageDialog1").show();
			window.localStorage.setItem("dlxb", "pass");
			this.comp("windowDialog1").open();
		}
		else
		{
			this.comp("messageDialog2").show();
		}
	};

	return Model;
});
