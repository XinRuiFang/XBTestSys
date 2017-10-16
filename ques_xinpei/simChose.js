define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var allData = require("./js/loadData");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	CommonUtils.attachDoubleClickExitApp(function() {

    });
	var Model = function(){
		this.callParent();
		 
	};
	/*
	Model.prototype.quesCustomRefresh = function(event){
		var url = require.toUrl("./test/2-1.json");
		allData.loadDataFromFile(url, event.source, true);
		var data  = this.comp("ques");
		
		var count =data.count();
		window.a = 1;
		this.comp('button3').set({label:window.a +"/"+count});
		
	};
	*/



	Model.prototype.button4Click = function(event){
		var question = this.comp("using");
		question.deleteAllData();
		var data  = this.comp("ques");
		data.next();
		window.a++;
		var que = data.getValue("question");
		
		var answer = data.getValue("answer");
		
		var id = data.getValue("id");
		
		var count =data.count();
		
		this.comp('button3').set({label:window.a+"/"+count});
		
		var A = data.getValue("A");
		var B = data.getValue("B");
		var C = data.getValue("C");
		var D = data.getValue("D");
		
		question.add({
			"id" : "1",
			"ques" : que,
			"choose" : A,
			"answer" : answer,
			"chooseId" : "A"
		});
		question.add({
			"id" : "2",
			"ques" : que,
			"choose" : B,
			"answer" : answer,
			"chooseId" : "B"
		});
		question.add({
			"id" : "3",
			"ques" : que,
			"choose" : C,
			"answer" : answer,
			"chooseId" : "C"
		});
		question.add({
			"id" : "4",
			"ques" : que,
			"choose" : D,
			"answer" : answer,
			"chooseId" : "D"
		});
		
		
	};
	


	


	Model.prototype.button1Click = function(event){
		var question = this.comp("using");
		question.deleteAllData();
		var data  = this.comp("ques");
		data.pre();
		window.a--;
		var que = data.getValue("question");
		
		var answer = data.getValue("answer");
		var id = data.getValue("id");
		
		var count =data.count();
		
		this.comp('button3').set({label:window.a+"/"+count});
		
		var A = data.getValue("A");
		var B = data.getValue("B");
		var C = data.getValue("C");
		var D = data.getValue("D");
		
		question.add({
			"id" : "1",
			"ques" : que,
			"choose" : A,
			"answer" : answer,
			"chooseId" : "A"
		});
		question.add({
			"id" : "2",
			"ques" : que,
			"choose" : B,
			"answer" : answer,
			"chooseId" : "B"
		});
		question.add({
			"id" : "3",
			"ques" : que,
			"choose" : C,
			"answer" : answer,
			"chooseId" : "C"
		});
		question.add({
			"id" : "4",
			"ques" : que,
			"choose" : D,
			"answer" : answer,
			"chooseId" : "D"
		});
		
		
	};
	


	Model.prototype.backBtnClick = function(event){
		this.comp("messageDialog7").show();
	};
	


	


	Model.prototype.button5Click = function(event){
		this.comp("messageDialog2").show();
		var answer = this.comp("using").getValue("answer");
		var choose = this.comp("radioGroup1").val();
		if(answer == choose)
		{
			if(window.localStorage.getItem("markItemChose"))
			{
				var item = JSON.parse(window.localStorage.getItem("markItemChose"));
				var w = this.comp("ques").getValue("id");
				if(item.indexOf(w)==-1)
				{
					item.push(w);
				}				
				window.localStorage.setItem("markItemChose",JSON.stringify(item));		
			}
			else
			{
				var item = [];
				var w = this.comp("ques").getValue("id");
				item.push(w);
				window.localStorage.setItem("markItemChose",JSON.stringify(item));
			}
			if(window.localStorage.getItem("simWrongItemChose"))
			{
				var item = JSON.parse(window.localStorage.getItem("simWrongItemChose"));
				var w = this.comp("ques").getValue("id");
				if(item.indexOf(w)!=-1)
				{
					for(var i=0;i<item.length;i++)
					{
						var nameTemp = item[i];
						if(nameTemp==w)
					    {
							item.splice(i,1);
						}
					}
				}				
				window.localStorage.setItem("simWrongItemChose",JSON.stringify(item));		
			}
		}
		else
		{
			if(window.localStorage.getItem("simWrongItemChose"))
			{
				var item = JSON.parse(window.localStorage.getItem("simWrongItemChose"));
				var w = this.comp("ques").getValue("id");
				if(item.indexOf(w)==-1)
				{
					item.push(w);
				}				
				window.localStorage.setItem("simWrongItemChose",JSON.stringify(item));		
			}
			else
			{
				var item = [];
				var w = this.comp("ques").getValue("id");
				item.push(w);
				window.localStorage.setItem("simWrongItemChose",JSON.stringify(item));
			}
			if(window.localStorage.getItem("markItemChose"))
			{
				var item = JSON.parse(window.localStorage.getItem("markItemChose"));
				var w = this.comp("ques").getValue("id");
				if(item.indexOf(w)!=-1)
				{
					for(var i=0;i<item.length;i++)
					{
						var nameTemp = item[i];
						if(nameTemp==w)
					    {
							item.splice(i,1);
						}
					}
				}				
				window.localStorage.setItem("markItemChose",JSON.stringify(item));		
			}
		}

	};
	


	Model.prototype.modelParamsReceive = function(event){
	this.comp("using").deleteAllData();
		id =event.params.data;
		var url = require.toUrl("./test/2-"+id+".json");
		var res;
		$.ajax({
			type : "GET",
			async : false,
			url : url,
			success : function(result){
				//alert(result);
				res = result;
				
			}
		});
		//console.log(res);
		this.comp("ques").loadData(res);
		var data  = this.comp("ques");
		data.refreshData();
		var count =data.count();
		window.a = 1;
		this.comp('button3').set({label:window.a +"/"+count});
		var que = this.comp("ques").getValue("question");
		
			var A = this.comp("ques").getValue("A");
			var B = this.comp("ques").getValue("B");
			var C = this.comp("ques").getValue("C");
			var D = this.comp("ques").getValue("D");
			
			var answer = this.comp("ques").getValue("answer");
			this.comp("using").add({
				"id" : "1",
				"ques" : que,
				"choose" : A,
				"answer" : answer,
				"chooseId" : "A"
			});
			this.comp("using").add({
				"id" : "2",
				"ques" : que,
				"choose" : B,
				"answer" : answer,
				"chooseId" : "B"
			});
			this.comp("using").add({
				"id" : "3",
				"ques" : que,
				"choose" : C,
				"answer" : answer,
				"chooseId" : "C"
			});
			this.comp("using").add({
				"id" : "4",
				"ques" : que,
				"choose" : D,
				"answer" : answer,
				"chooseId" : "D"
			});
			
		
	};
	


	Model.prototype.quesCustomRefresh = function(event){
		var a =this.getContext().getRequestParameter("a");
		var url = require.toUrl("./test/2-"+a+".json");
		allData.loadDataFromFile(url, event.source, true);
		var data  = this.comp("ques");
		
		var count =data.count();
		window.a = 1;
		this.comp('button3').set({label:window.a+"/"+count});
		
	};
	


	Model.prototype.usingCustomRefresh = function(event){
			var que = this.comp("ques").getValue("question");
			var A = this.comp("ques").getValue("A");
			var B = this.comp("ques").getValue("B");
			var C = this.comp("ques").getValue("C");
			var D = this.comp("ques").getValue("D");
			
			var answer = this.comp("ques").getValue("answer");
			event.source.add({
				"id" : "1",
				"ques" : que,
				"choose" : A,
				"answer" : answer,
				"chooseId" : "A"
			});
			event.source.add({
				"id" : "2",
				"ques" : que,
				"choose" : B,
				"answer" : answer,
				"chooseId" : "B"
			});
			event.source.add({
				"id" : "3",
				"ques" : que,
				"choose" : C,
				"answer" : answer,
				"chooseId" : "C"
			});
			event.source.add({
				"id" : "4",
				"ques" : que,
				"choose" : D,
				"answer" : answer,
				"chooseId" : "D"
			});
		
	};
	


	Model.prototype.messageDialog7OK = function(event){
		var a =this.getContext().getRequestParameter("a");
		window.location.href = "simulatiotest.w?a="+a;		
	};
	


	return Model;
});