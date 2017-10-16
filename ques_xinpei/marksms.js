define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	CommonUtils.attachDoubleClickExitApp(function() {

    });
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.data1CustomRefresh = function(event){
		var mark = parseInt(window.localStorage.getItem("mark"));
		if(mark==100)
		{
			event.source.add({
				"id" : "1",
				"val" : "您得了满分！恭喜！^_^"
			});
		}
		else if(mark<100&&mark>=90)
		{
			event.source.add({
				"id" : "1",
				"val" : "您的成绩很优秀！"
			});
		}
		else if(mark<90&&mark>=85)
		{
			event.source.add({
				"id" : "1",
				"val" : "您考的很好！"
			});
		}
		else if(mark<85&&mark>=80)
		{
			event.source.add({
				"id" : "1",
				"val" : "您的成绩刚刚及格！还要继续努力！"
			});
		}
		else
		{
			event.source.add({
				"id" : "1",
				"val" : "您这次的成绩没及格！还需要加强练习！T_T"
			});
		}
		var a =this.getContext().getRequestParameter("a");
		window.localStorage.setItem("moni"+a,mark);
		window.localStorage.setItem("mark",0);
		var item = [];
		window.localStorage.setItem("markItemJudge",JSON.stringify(item));
		window.localStorage.setItem("markItemChose",JSON.stringify(item));
		if(window.localStorage.getItem("testnum"))//the test have done
		{
			var testnum = JSON.parse(window.localStorage.getItem("testnum"));
			if(testnum.indexOf(a)==-1)
			{
				testnum.push(a);
			}				
			window.localStorage.setItem("testnum",JSON.stringify(testnum));
		}
		else
		{
			var item = [];
			item.push(a);
			window.localStorage.setItem("testnum",JSON.stringify(item));
		}
		var arr = JSON.parse(window.localStorage.getItem("testnum"));
		if(window.localStorage.getItem("sumnum"))//the average of all tests
		{
			var sum = 0;
			var nu = 0;
			for(var i=0;i<arr.length;i++)
			{
				var sign = arr[i];
				sum += parseInt(window.localStorage.getItem("moni"+sign));
				nu++;
			}
			window.localStorage.setItem("sumnum",(sum/nu).toFixed(1));
		}
		else
		{
			window.localStorage.setItem("sumnum",mark);
		}
		
	};

	Model.prototype.backBtnClick = function(event){
		window.location.href = "home.w";
	};

	return Model;
});