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
		var url = require.toUrl("./main/json/xx.json");
		allData.loadDataFromFile(url, event.source, true);
		$(this.getElementByXid('panel3')).css({"display" : "none"});
		$(this.getElementByXid('panel5')).css({"display" : "none"});
		var data  = this.comp("ques");
		
		var count =data.count();
		
		this.comp('button3').set({label:"1/"+count});
		
	};
	

	Model.prototype.usingCustomRefresh = function(event){
		if(window.localStorage.getItem("xinpeiIndex"))
		{
			this.comp("messageDialog5").set({
				message :"系统检测到您上次作答至第"+window.localStorage.getItem("xinpeiIndex")+"题，是否继续作答？"
			});
			this.comp("messageDialog5").show();
		}
		else
		{
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
			
		}
		
	};
	


	Model.prototype.button4Click = function(event){
		if(window.localStorage.getItem("quesOf"))
		{
			var i = window.localStorage.getItem("quesOf");
			i++;
			window.localStorage.setItem("quesOf",i);
		}
		else
		{
			window.localStorage.setItem("quesOf",1);
		}
		$(this.getElementByXid('panel3')).css({"display" : "none"});
		$(this.getElementByXid('panel5')).css({"display" : "none"});
		var question = this.comp("using");
		question.deleteAllData();
		var data  = this.comp("ques");
		data.next();
		var que = data.getValue("question");
		
		var answer = data.getValue("answer");
		
		var id = data.getValue("id");
		
		var count =data.count();
		
		this.comp('button3').set({label:id+"/"+count});
		
		window.localStorage.setItem("xinpeiIndex", id);
		
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
			}
			else
			{
				//window.localStorage.clear();
				this.comp("messageDialog2").show();
				$(this.getElementByXid('panel3')).css({"display" : "block"});
				if(window.localStorage.getItem("wrongItemChose"))
				{
					var wrongItem = JSON.parse(window.localStorage.getItem("wrongItemChose"));
					var w = this.comp("ques").getValue("id");
					if(wrongItem.indexOf(w)==-1)
					{
						wrongItem.push(w);
					}				
					window.localStorage.setItem("wrongItemChose",JSON.stringify(wrongItem));
					var i = wrongItem.length;
					if(window.localStorage.getItem("wrongChoseTotalOf"))
					{
						if(i!=window.localStorage.getItem("wrongChoseTotalOf"))
						{
							if(window.localStorage.getItem("wrongTotal"))
							{
								var j = window.localStorage.getItem("wrongTotal");
								j++;
								window.localStorage.setItem("wrongTotal",j);
							}
							else
							{
								window.localStorage.setItem("wrongTotal",1);
							}
						}
						window.localStorage.setItem("wrongChoseTotalOf",i);
					}
					else
					{
						window.localStorage.setItem("wrongChoseTotalOf",1);
					}
				}
				else
				{
					var wrongItem = [];
					var w = this.comp("ques").getValue("id");
					wrongItem.push(w);
					window.localStorage.setItem("wrongItemChose",JSON.stringify(wrongItem));

				}
				
				
			}
		}
	};
	


	Model.prototype.button1Click = function(event){
		if(window.localStorage.getItem("quesOf"))
		{
			var i = window.localStorage.getItem("quesOf");
			i++;
			window.localStorage.setItem("quesOf",i);
		}
		else
		{
			window.localStorage.setItem("quesOf",1);
		}
		$(this.getElementByXid('panel3')).css({"display" : "none"});
		$(this.getElementByXid('panel5')).css({"display" : "none"});
		var question = this.comp("using");
		question.deleteAllData();
		var data  = this.comp("ques");
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
		this.comp("messageDialog4").show();
	};
	


	Model.prototype.messageDialog4OK = function(event){
		$(this.getElementByXid('panel3')).css({"display" : "block"});
		if(window.localStorage.getItem("wrongItemChose"))
		{
			var wrongItem = JSON.parse(window.localStorage.getItem("wrongItemChose"));
			var w = this.comp("ques").getValue("id");
			if(wrongItem.indexOf(w)==-1)
			{
				wrongItem.push(w);
			}				
			window.localStorage.setItem("wrongItemChose",JSON.stringify(wrongItem));
			var i = wrongItem.length;
			if(window.localStorage.getItem("wrongChoseTotalOf"))
			{
				if(i!=window.localStorage.getItem("wrongChoseTotalOf"))
				{
					if(window.localStorage.getItem("wrongTotal"))
					{
						var j = window.localStorage.getItem("wrongTotal");
						j++;
						window.localStorage.setItem("wrongTotal",j);
					}
					else
					{
						window.localStorage.setItem("wrongTotal",1);
					}
				}
				window.localStorage.setItem("wrongChoseTotalOf",i);
				
			}
			else
			{
				window.localStorage.setItem("wrongChoseTotalOf",1);
			}
		}
		else
		{
			var wrongItem = [];
			var w = this.comp("ques").getValue("id");
			wrongItem.push(w);
			window.localStorage.setItem("wrongItemChose",JSON.stringify(wrongItem));
		}
	};
	


	Model.prototype.messageDialog5OK = function(event){
		var question = this.comp("using");
		var data  = this.comp("ques");
		data.to(window.localStorage.getItem("xinpeiIndex"));
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
	


	Model.prototype.messageDialog5Cancel = function(event){
		window.localStorage.removeItem("xinpeiIndex");
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
	


	


	Model.prototype.button3Click = function(event){
		$(this.getElementByXid('panel5')).css({"display" : "block"});
	};
	


	Model.prototype.button6Click = function(event){
		var text = this.comp("input1").val();
		if(!isNaN(text)){
		   //alert("是数字");
		   if(parseInt(text) > 0 && parseInt(text) <= this.comp("ques").count())
		   {
			    $(this.getElementByXid('panel3')).css({"display" : "none"});
				$(this.getElementByXid('panel5')).css({"display" : "none"});
				var question = this.comp("using");
				question.deleteAllData();
				var data  = this.comp("ques");
				data.to(text);
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
		
		   }
		   else
		   {
			   this.comp("messageDialog6").show();
		   }
		}
		else
		{
		   //alert("不是数字");
		   this.comp("messageDialog6").show();
		}
	};
	


	Model.prototype.backBtnClick = function(event){
		this.comp("messageDialog7").show();
	};
	


	Model.prototype.messageDialog7OK = function(event){
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
		window.location.href = "home.w";
	};
	


	return Model;
});