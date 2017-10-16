<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="testn" idColumn="id" onCustomRefresh="testnCustomRefresh"><column name="id" type="String" xid="xid1"></column>
  <column name="name" type="String" xid="xid2"></column>
  <column name="mark" type="String" xid="xid3"></column>

  
  </div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="background-color:#2894FF;color:white;" title="模拟答题">
   <div class="x-titlebar-left" xid="left1">

   </div>
   <div class="x-titlebar-title" xid="title1">模拟答题</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content x-scroll-view" xid="content1" _xid="C70FC125C1C00001E4E57FD01F003390"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   
   <div class="x-scroll-content" xid="div2">
    <ul class="x-list x-list-template" component="$UI/system/components/justep/list/list" data="testn" limit="-1" xid="list1">
     <li xid="li1" bind-click="li1Click"><div xid="div4" style="height:80px;border-style:groove groove groove groove;border-width:thin thin thin thin;border-color:#E3E3E3 #E3E3E3 #E3E3E3 #E3E3E3;width:90%;" class="center-block" bind-value=' $object.val("id")'><div xid="div5" style="height:50%;width:80%;" class="center-block"><div xid="div6" style="height:50%;"></div><label xid="label1" bind-text="ref('name')" style="font-size:medium;"><![CDATA[]]></label>
  </div>
  <div xid="div7" style="height:50%;width:80%;" class="center-block"><div xid="div1" style="height:30%;"></div><label xid="label2" style="float:right;color:#2894FF;font-weight:200;" bind-text="ref('mark')">label</label>
  </div></div></li></ul> </div> 
   </div></div>
   <div class="x-panel-bottom" xid="bottom1"></div></div>
  </div>