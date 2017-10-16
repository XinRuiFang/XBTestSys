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
		if(window.localStorage.getItem("dlxb"))
		{
			if(window.localStorage.getItem("dlxb") == "pass")
			{
				this.comp("windowDialog2").open();
			}
			else
			{
				this.comp("windowDialog1").open();
			}
		}
		else
		{
			this.comp("windowDialog1").open();
		}
	};

	return Model;
});