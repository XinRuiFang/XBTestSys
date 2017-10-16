<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="mac" idColumn="id" onCustomRefresh="macCustomRefresh"><column name="id" type="String" xid="xid1"></column>
  <column name="mac" type="String" xid="xid2"></column></div></div> 
<div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="background-color:#2894FF;" title="加密信息">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">加密信息</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div>
  <div xid="div1" style="height:15%;"></div>
  <div xid="div2" style="text-align:center;" class="h4"><label xid="label1"><![CDATA[您的手机机器码：]]></label></div>
  <div xid="div3" align="center"><label xid="label2" bind-text="mac.val('mac')">label</label></div>
  <div xid="div4" class="h5" style="text-align:center;font-size:xx-small;font-weight:100;color:#FF0700;"><label xid="label3"><![CDATA[请将此机器码发与相关工作人员以获取激活码]]></label>
  </div>
  <div xid="div6" style="height:5%;"></div><div xid="div5" class="h4" style="text-align:center;"><label xid="label4"><![CDATA[请输入您的激活码来激活此软件]]></label></div>
  <input component="$UI/system/components/justep/input/input" class="form-control center-block" xid="input1" style="width:90%;"></input>
  <div xid="div7" style="height:5%;"></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="激活" xid="button1" style="width:60%;" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">激活</span></a>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" title="提示" message="验证成功！"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog2" title="提示" message="验证失败！"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ques_xinpei/home.w"></span></div>