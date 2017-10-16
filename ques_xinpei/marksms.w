<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id" onCustomRefresh="data1CustomRefresh"><column name="id" type="String" xid="xid1"></column>
  <column name="val" type="String" xid="xid2"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="评分">
   <div class="x-titlebar-left" xid="left1">
   <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
   </div>
   <div class="x-titlebar-title" xid="title1">评分</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1" style="height:15%;"></div>
  <div xid="div2" style="height:8%;width:70%;" class="center-block"><label xid="label1" style="font-size:large;color:#2894ff;"><![CDATA[您此套试卷的成绩为：]]></label></div>
  <div xid="div3" style="width:50%;height:30%;" class="center-block" align="center"><label xid="label2" style="font-size:70px;font-weight:700;color:black;" bind-text='window.localStorage.getItem("mark");'><![CDATA[]]></label></div>
  <div xid="div4" class="center-block" style="width:70%;height:47%;" align="center"><label xid="label3" style="color:#2894ff;width:100%;font-size:large;font-weight:200;" bind-text="data1.val('val')"><![CDATA[]]></label></div></div>
   </div></div>