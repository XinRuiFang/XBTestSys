<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="ques" idColumn="id" confirmDelete="false" confirmRefresh="true" onCustomRefresh="quesCustomRefresh"><column label="编号" name="id" type="String" xid="xid1"></column>
  <column label="问题" name="question" type="String" xid="xid2"></column>
  <column label="答案" name="answer" type="String" xid="xid7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="using" idColumn="id" confirmDelete="false" confirmRefresh="false" autoNew="true" onCustomRefresh="usingCustomRefresh"><column label="id" name="id" type="String" xid="xid9"></column>
  <column label="问题" name="ques" type="String" xid="xid10"></column>
  <column label="答案" name="answer" type="String" xid="xid12"></column>
  </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column name="id" type="String" xid="xid3"></column>
  <column name="name" type="String" xid="xid4"></column>
  <column name="val" type="String" xid="xid5"></column>
  <data>[{"id" : "1","name" : "正确√","val" : "1"},{"id" : "2","name" : "错误×","val" : "0"}]</data>
  
  </div></div>  
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" title="提示" message="答案正确！"></span>
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
                <div component="$UI/system/components/justep/titleBar/titleBar" title="判断题"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              xid="backBtn" onClick="backBtnClick"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">判断题</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-card panel panel-default" xid="panel2">
 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label-top x-label30" xid="labelEdit1">
   <div xid="div1" bind-text='$model.using.val("ques")' style="width:100%;height:100%;">
  </div>
  <span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group" xid="radioGroup1" bind-itemset="data1" bind-itemsetValue="ref('val')" bind-itemsetLabel="ref('name')"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-card panel panel-default" xid="panel4">

   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="确认" xid="button5" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span5">确认</span></a></div>
  </div>
  
  </div> </div>
<div class="x-panel-bottom" xid="bottom1"> <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="上一题" xid="button1" icon="icon-arrow-left-a" onClick="button1Click">
   <i xid="i1" class="icon-arrow-left-a"></i>
   <span xid="span1">上一题</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="1/800" xid="button3" icon="icon-ios7-albums">
   <i xid="i3" class="icon-ios7-albums"></i>
   <span xid="span3"><![CDATA[]]></span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="下一题" xid="button4" icon="icon-arrow-right-a" onClick="button4Click">
   <i xid="i4" class="icon-arrow-right-a"></i>
   <span xid="span4">下一题</span></a>
  </div></div></div><span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog2" title="提示" message="已提交！"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog3" title="提示" message="请作出您的选择！"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog6" title="提示" message="请正确输入题号！"></span></div>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog7" title="提示" message="请确保您已作答并提交所有题目后再返回！" type="OKCancel" onOK="messageDialog7OK"></span></div>