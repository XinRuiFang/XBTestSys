define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	CommonUtils.attachDoubleClickExitApp(function() {

    });
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.a1Click = function(event){
		window.location.href = "xinpeiWrong.w";
	};

	Model.prototype.a2Click = function(event){
		window.location.href = "xinpeijudgeWrong.w";
	};

	Model.prototype.a3Click = function(event){
		window.location.href = "testjudgeWrong.w";
	};

	Model.prototype.a4Click = function(event){
		window.location.href = "testWrong.w";
	};

	return Model;
});