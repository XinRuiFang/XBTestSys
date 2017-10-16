define(function(require){
	//xinpeiIndex : the last location to doing
	//quesOf : the total of doing
	//wrongChoseTotalOf : the total of wrong questions from chose & classify
	//wrongJudgeTotalOf : the total of wrong questions from judge & classify
	//wrongTotal : the total of questions if you wrong
	//sumnum : the average of all tests
	//testnum : the test have done
	//sumTime : the total time of use 
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	CommonUtils.attachDoubleClickExitApp(function() {

    });
	
	var Model = function(){
		this.callParent();
	};

	
	Model.prototype.contentActive = function(event){
		var windowContainer = event.source.getContent(event.source.getActiveXid()).$domNode.children();
		this.comp(windowContainer.get(0)).refresh();
	};
	
	Model.prototype.modelLoad = function(event){
		
	};
	
	Model.prototype.panel3Load = function(event){

		
	};
	
	
	
	
	Model.prototype.data1CustomRefresh = function(event){
		if(!window.localStorage.getItem("quesOf"))
		{
			window.localStorage.setItem("quesOf",0);
		}
		if(!window.localStorage.getItem("wrongChoseTotalOf"))
		{
			window.localStorage.setItem("wrongChoseTotalOf",0);
		}
		if(!window.localStorage.getItem("wrongJudgeTotalOf"))
		{
			window.localStorage.setItem("wrongJudgeTotalOf",0);
		}
		if(!window.localStorage.getItem("wrongTotal"))
		{
			window.localStorage.setItem("wrongTotal",0);
		}
		if(!window.localStorage.getItem("testnum"))
		{
			var item = [];
			window.localStorage.setItem("testnum",JSON.stringify(item));
		}
		if(!window.localStorage.getItem("sumnum"))
		{
			window.localStorage.setItem("sumnum",0);
		}
		if(!window.localStorage.getItem("sumTime"))
		{
			window.localStorage.setItem("sumTime",0);
		}
	};
	
	
	
	
	return Model;
});