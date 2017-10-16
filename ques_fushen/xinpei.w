<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="ques" idColumn="id" onCustomRefresh="quesCustomRefresh"><column label="编号" name="id" type="String" xid="xid1"></column>
  <column label="问题" name="question" type="String" xid="xid2"></column>
  <column label="A" name="A" type="String" xid="xid3"></column>
  <column label="B" name="B" type="String" xid="xid4"></column>
  <column label="C" name="C" type="String" xid="xid5"></column>
  <column label="D" name="D" type="String" xid="xid6"></column>
  <column label="答案" name="answer" type="String" xid="xid7"></column>
  <column label="类型" name="type" type="String" xid="xid8"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="using" idColumn="id" onCustomRefresh="usingCustomRefresh" confirmDelete="false" confirmRefresh="false" autoNew="true"><column label="id" name="id" type="String" xid="xid9"></column>
  <column label="问题" name="ques" type="String" xid="xid10"></column>
  <column label="选项" name="choose" type="String" xid="xid11"></column>
  <column label="答案" name="answer" type="String" xid="xid12"></column>
  <column label="选项号" name="chooseId" type="String" xid="xid13"></column></div></div>  
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" title="提示" message="答案正确！"></span>
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
                <div component="$UI/system/components/justep/titleBar/titleBar" title="选择练习"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">选择练习</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-card panel panel-default" xid="panel2">
 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label-top x-label30" xid="labelEdit1">
   <div xid="div1" bind-text='$model.ques.val("id") +"."+$model.using.val("ques")'></div><span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group x-radio-group-vertical x-radios x-edit" xid="radioGroup1" bind-itemset="using" bind-itemsetValue="ref('chooseId')" bind-itemsetLabel="ref('choose')"></span></div>
  </div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-card panel panel-default" xid="panel4">

   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="确认" xid="button5" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span5">确认</span></a></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-card panel panel-default" xid="panel3">
   <label xid="label2" style="width:100%;height:100%;" class="center-block"><![CDATA[正确答案：]]></label>
  <label xid="label3" bind-text="using.val('answer')"><![CDATA[]]></label></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-card panel panel-default" xid="panel5">
   <label xid="label1" style="width:287px;"><![CDATA[请输入您要跳转到的题目号：]]></label>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   
   <label xid="label6" style="width:5%;"><![CDATA[]]></label><input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input1"></input><label xid="label4" style="width:5%;"><![CDATA[]]></label></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block center-block" label="确认" xid="button6" style="width:40%;" onClick="button6Click">
   <i xid="i6"></i>
   <span xid="span6">确认</span></a></div></div>
  <div class="x-panel-bottom" xid="bottom1"> <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="上一题" xid="button1" icon="icon-arrow-left-a" onClick="button1Click">
   <i xid="i1" class="icon-arrow-left-a"></i>
   <span xid="span1">上一题</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="看答案" xid="button2" icon="icon-eye" onClick="button2Click">
   <i xid="i2" class="icon-eye"></i>
   <span xid="span2">看答案</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="1/800" xid="button3" icon="icon-ios7-albums" onClick="button3Click">
   <i xid="i3" class="icon-ios7-albums"></i>
   <span xid="span3"><![CDATA[]]></span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="下一题" xid="button4" icon="icon-arrow-right-a" onClick="button4Click">
   <i xid="i4" class="icon-arrow-right-a"></i>
   <span xid="span4">下一题</span></a>
  </div></div></div>
  </div> 
<span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog2" title="提示" message="答案错误！"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog3" title="提示" message="请作出您的选择！"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog4" title="提示" message="您确定要看答案吗？将会记录至错题库中！" type="OKCancel" onOK="messageDialog4OK"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog5" title="提示" type="OKCancel" onOK="messageDialog5OK" onCancel="messageDialog5Cancel"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog6" title="提示" message="请正确输入题号！"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog7" title="提示" message="您确定要退出答题？您下次可以从当前进度开始继续作答！" onOK="messageDialog7OK" type="OKCancel"></span></div>