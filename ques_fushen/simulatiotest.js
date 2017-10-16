define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	CommonUtils.attachDoubleClickExitApp(function() {

    });
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.div5Click = function(event){
		var a =this.getContext().getRequestParameter("a");
		var item = [];
		window.localStorage.setItem("markItemChose",JSON.stringify(item));
		window.location.href = "simChose.w?a="+a;
	};


	Model.prototype.button2Click = function(event){
		//console.log(JSON.parse(window.localStorage.getItem("markItemJudge")));
		//console.log(JSON.parse(window.localStorage.getItem("simWrongItemJudge")));
		//console.log(JSON.parse(window.localStorage.getItem("markItemChose")));
		//console.log(JSON.parse(window.localStorage.getItem("simWrongItemChose")));
		this.comp("messageDialog1").show();
		
	};

	Model.prototype.messageDialog1OK = function(event){
		var a = JSON.parse(window.localStorage.getItem("markItemJudge"));
		var b = JSON.parse(window.localStorage.getItem("markItemChose"));
		window.localStorage.setItem("mark", ((a==null?0:a.length) + (b==null?0:b.length)));
		var a =this.getContext().getRequestParameter("a");
		window.location.href = "marksms.w?a="+a;
	};

	Model.prototype.backBtnClick = function(event){
		this.comp("messageDialog2").show();
	};

	Model.prototype.messageDialog2OK = function(event){
		var timestamp = Date.parse(new Date()); 
		if(window.localStorage.getItem("startTime"))
		{
			var oldTime = window.localStorage.getItem("startTime");
			var time = (timestamp-oldTime)/1000;
			if(window.localStorage.getItem("sumTime"))
			{
				var sumstring = window.localStorage.getItem("sumTime");
				var sum = parseFloat(sumstring);
				sum +=time;
				window.localStorage.setItem("sumTime",sum);
			}
			else
			{
				window.localStorage.setItem("sumTime",time);
			}
		}		
		window.location.href="home.w";
	};

	Model.prototype.div8Click = function(event){
		var a =this.getContext().getRequestParameter("a");
		var item = [];
		window.localStorage.setItem("markItemJudge",JSON.stringify(item));
		window.location.href = "simJudge.w?a="+a;
	};

	return Model;
});