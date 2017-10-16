define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	CommonUtils.attachDoubleClickExitApp(function() {

    });
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.li1Click = function(event){
		var dom = $(event.currentTarget).find("div[xid='div4']");
		var id = dom[0].value;
		var timestamp = Date.parse(new Date()); 
		window.localStorage.setItem("startTime", timestamp);
		window.location.href = "simulatiotest.w?a="+id;
	};

	Model.prototype.testnCustomRefresh = function(event){
//  <data>
//  	[{"id":"1","name":"模拟试卷1","mark":"您还没有作答过此套练习！"},{"id":"2","name":"模拟试卷2","mark":"您还没有作答过此套练习！"},{"id":"3","name":"模拟试卷3","mark":"您还没有作答过此套练习！"},{"id":"4","name":"模拟试卷4","mark":"您还没有作答过此套练习！"},{"id":"5","name":"模拟试卷5","mark":"您还没有作答过此套练习！"},{"id":"6","name":"模拟试卷6","mark":"您还没有作答过此套练习！"},{"id":"7","name":"模拟试卷7","mark":"您还没有作答过此套练习！"},{"id":"8","name":"模拟试卷8","mark":"您还没有作答过此套练习！"},{"id":"9","name":"模拟试卷9","mark":"您还没有作答过此套练习！"},{"id":"10","name":"模拟试卷10","mark":"您还没有作答过此套练习！"},{"id":"11","name":"模拟试卷11","mark":"您还没有作答过此套练习！"},{"id":"12","name":"模拟试卷12","mark":"您还没有作答过此套练习！"},{"id":"13","name":"模拟试卷13","mark":"您还没有作答过此套练习！"},{"id":"14","name":"模拟试卷14","mark":"您还没有作答过此套练习！"},{"id":"15","name":"模拟试卷15","mark":"您还没有作答过此套练习！"},{"id":"16","name":"模拟试卷16","mark":"您还没有作答过此套练习！"},{"id":"17","name":"模拟试卷17","mark":"您还没有作答过此套练习！"},{"id":"18","name":"模拟试卷18","mark":"您还没有作答过此套练习！"},{"id":"19","name":"模拟试卷19","mark":"您还没有作答过此套练习！"}]
//  </data>
		for(var i=1;i<=17;i++)
		{
			if(window.localStorage.getItem("moni"+i))
			{
				moni = window.localStorage.getItem("moni"+i);
			}
			else
			{
				moni = -1;
			}
			event.source.add({
				"id" : i,
				"name": "模拟试卷"+i,
				"mark": moni==-1?"您还没有作答过此套练习":"您上次作答的成绩："+moni+"分"
			});
		}
		
	};

	return Model;
});