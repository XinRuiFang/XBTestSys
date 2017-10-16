define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	CommonUtils.attachDoubleClickExitApp(function() {

    });
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.a2Click = function(event){
		//this.comp("windowDialog1").open();
		var timestamp = Date.parse(new Date()); 
		window.localStorage.setItem("startTime", timestamp);
		window.location.href = "xinpei.w";
	};

	Model.prototype.modelLoad = function(event){
	};

	Model.prototype.label7Load = function(event){
		
	};

	Model.prototype.a1Click = function(event){
		var timestamp = Date.parse(new Date()); 
		window.localStorage.setItem("startTime", timestamp);
		window.location.href = "xinpeijudge.w";
	};

	return Model;
});