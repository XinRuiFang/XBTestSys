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

	Model.prototype.quesCustomRefresh = function(event){
		var url = require.toUrl("./main/json/quesData.json");
		allData.loadDataFromFile(url, event.source, true);
		$(this.getElementByXid('panel3')).css({"display" : "none"});
	};
	

	Model.prototype.usingCustomRefresh = function(event){
		var que = this.comp("queswrong").getValue("question");
		
		var A = this.comp("queswrong").getValue("A");
		var B = this.comp("queswrong").getValue("B");
		var C = this.comp("queswrong").getValue("C");
		var D = this.comp("queswrong").getValue("D");
		
		var answer = this.comp("queswrong").getValue("answer");
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
	


	Model.prototype.button4Click = function(event){
		$(this.getElementByXid('panel3')).css({"display" : "none"});
		var question = this.comp("using");
		question.deleteAllData();
		var data  = this.comp("queswrong");
		
		data.next();
		var que = data.getValue("question");
		
		var answer = data.getValue("answer");
		
		var id = data.getValue("id");
		
		var count =data.count();
		
		this.comp('button3').set({label:id+"/"+count});
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
	


	Model.prototype.button5Click = function(event){
		if(this.comp("radioGroup1").val()==null)
		{
			this.comp("messageDialog3").show();
		}
		else
		{
			//alert(this.comp("using").getValue("answer"));
			//alert(this.comp("radioGroup1").val());
			var answer = this.comp("using").getValue("answer");
			var choose = this.comp("radioGroup1").val();
			if(answer == choose)
			{
				this.comp("messageDialog1").show();
				//window.localStorage.clear();
				var wrongI = window.localStorage.getItem("simWrongItemChose");
				var wrongItem = JSON.parse(wrongI);
				var wid = this.comp("queswrong").getValue("num");
				for(var i=0;i<wrongItem.length;i++)
				{
					var nameTemp = wrongItem[i];
					if(nameTemp==wid)
				    {
						wrongItem.splice(i,1);
					}
				}
				window.localStorage.setItem("simWrongItemChose",JSON.stringify(wrongItem));
				var a = wrongItem.length;
				if(window.localStorage.getItem("wrongChoseTotalOf"))
				{
					window.localStorage.setItem("wrongChoseTotalOf",a);
				}
				else
				{						
					window.localStorage.setItem("wrongChoseTotalOf",1);
				}
			}
			else
			{
				//window.localStorage.clear();
				this.comp("messageDialog2").show();
				$(this.getElementByXid('panel3')).css({"display" : "block"});
			}
		}
	};
	


	Model.prototype.button1Click = function(event){
		$(this.getElementByXid('panel3')).css({"display" : "none"});
		var question = this.comp("using");
		question.deleteAllData();
		var data  = this.comp("queswrong");
		data.pre();
		var que = data.getValue("question");
		
		var answer = data.getValue("answer");
		var id = data.getValue("id");
		
		var count =data.count();
		
		this.comp('button3').set({label:id+"/"+count});
		
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
	


	Model.prototype.button2Click = function(event){
		$(this.getElementByXid('panel3')).css({"display" : "block"});
	};
	


	Model.prototype.queswrongCustomRefresh = function(event){
	
		if(window.localStorage.getItem("simWrongItemChose"))
		{
			var wrongI = window.localStorage.getItem("simWrongItemChose");
			var wrongItem = JSON.parse(wrongI);
			if(wrongItem.length == 0)
			{
				this.comp("messageDialog4").show();
				
				return;
			}
			var questionWrong = this.comp("queswrong");
			var question = this.comp("ques");
			for(var i = 0; i< wrongItem.length;i++)
			{	
				//console.log(question);
				
				var qu = question.getRowByID(wrongItem[i]);//wrongItem[i]
				//console.log(qu);
				questionWrong.add({
					"id" : i+1,
					"question" : qu.val("question"),
					"A" : qu.val("A"),
					"B" : qu.val("B"),
					"C" : qu.val("C"),
					"D" : qu.val("D"),
					"answer" : qu.val("answer"),
					"num" : qu.val("id")
				});
			}
			var data  = this.comp("queswrong");
		
			var count =data.count();
		
			this.comp('button3').set({label:"1/"+count});
		}
		else
		{
			this.comp("messageDialog4").show();
			
		}

		
	};
	


	


	


	


	Model.prototype.messageDialog4OK = function(event){
		window.location.href = "home.w";
	};
	


	


	Model.prototype.backBtnClick = function(event){
		window.location.href = "home.w";
	};
	


	

	


	


	Model.prototype.button9Click = function(event){		
		this.comp("queswrong").deleteAllData();
		this.comp("using").deleteAllData();
		if(window.localStorage.getItem("simWrongItemChose"))
		{
			var wrongI = window.localStorage.getItem("simWrongItemChose");
			var wrongItem = JSON.parse(wrongI);
			if(wrongItem.length == 0)
			{
				this.comp("messageDialog4").show();
				
				return;
			}
			var questionWrong = this.comp("queswrong");
			var question = this.comp("ques");
			for(var i = 0; i< wrongItem.length;i++)
			{	
				//console.log(question);
				
				var qu = question.getRowByID(wrongItem[i]);//wrongItem[i]
				//console.log(qu);
				questionWrong.add({
					"id" : i+1,
					"question" : qu.val("question"),
					"A" : qu.val("A"),
					"B" : qu.val("B"),
					"C" : qu.val("C"),
					"D" : qu.val("D"),
					"answer" : qu.val("answer"),
					
				});
			}
			var data  = this.comp("queswrong");
		
			var count =data.count();
		
			this.comp('button3').set({label:"1/"+count});
		}
		else
		{
			this.comp("messageDialog4").show();
			
		}
		questionWrong.first();
		
		var que = this.comp("queswrong").getValue("question");
		
		var A = this.comp("queswrong").getValue("A");
		var B = this.comp("queswrong").getValue("B");
		var C = this.comp("queswrong").getValue("C");
		var D = this.comp("queswrong").getValue("D");
		
		var answer = this.comp("queswrong").getValue("answer");
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
	


	

	


	


	Model.prototype.button8Click = function(event){
		this.comp("messageDialog7").show();
	};
	


	

	


	


	Model.prototype.messageDialog7OK = function(event){
		window.localStorage.removeItem("simWrongItemChose");
		this.comp("messageDialog6").show();
		
	};
	


	

	


	


	Model.prototype.messageDialog6OK = function(event){
		this.close();
	};
	


	

	


	


	return Model;
});