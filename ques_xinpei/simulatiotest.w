<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="模拟试卷考试" style="height:100%;">
   <div class="x-titlebar-left" xid="left1">
                  <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              xid="backBtn" onClick="backBtnClick" style="color:white;"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
   </div>
   <div class="x-titlebar-title" xid="title1">模拟试卷考试</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1" style="height:100%;"><div xid="div2" style="height:50%;"><div xid="div4" style="height:50%;" align="center"><div xid="div15" style="height:30%;"></div>
  <label xid="label3" style="color:#2894ff;font-weight:200;width:90%;"><![CDATA[新培模拟考试单选为34道、判断为66道，请点击下面的按钮开始答题！]]></label></div>
  <div xid="div5" style="width:50%;background-color:#2894FF;border-style:solid solid solid solid;border-width:thin thin thin thin;border-color:#E3E3E3 #E3E3E3 #E3E3E3 #E3E3E3;height:40%;" class="center-block yuanjiao" align="center" bind-click="div5Click">
  <div xid="div16" style="height:30%;"></div><div xid="div12" align="center"><label xid="label1" style="color:#fff;font-weight:400;font-size:large;width:100%;"><![CDATA[选择题]]></label></div>
  </div>
  <div xid="div6" style="height:10%;"></div></div>
  <div xid="div3" style="height:50%;"><div xid="div7"></div>
  <div xid="div8" style="width:50%;background-color:#2894FF;border-style:solid solid solid solid;border-width:thin thin thin thin;border-color:#E3E3E3 #E3E3E3 #E3E3E3 #E3E3E3;height:40%;" class="center-block yuanjiao" bind-click="div8Click">
  <div xid="div17" style="height:30%;"></div><div xid="div14" align="center"><label xid="label2" style="color:#fff;font-weight:400;font-size:large;width:100%;"><![CDATA[判断题]]></label></div>
  </div>
  <div xid="div9" style="height:35%;"></div></div></div></div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-left" label="提交答卷" xid="button2" icon="icon-checkmark-round" onClick="button2Click">
   <i xid="i2" class="icon-checkmark-round"></i>
   <span xid="span2">提交答卷</span></a></div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ques_xinpei/simChose.w"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog2" src="$UI/ques_xinpei/simJudge.w"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" title="提示" message="您确定要提交答卷？系统会自动根据您的答题情况进行评分！" type="OKCancel" onOK="messageDialog1OK"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog2" message="您确定不进行评分直接退出？此次答题不会记录至记录中！" title="提示" type="OKCancel" onOK="messageDialog2OK"></span></div>