<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" onCustomRefresh="data1CustomRefresh"></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents">
   <div class="x-contents-content" xid="homecontent" style="background-color:#2894FF;">
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel3">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="color:#2894FF;background-color:white;" title="大连兴邦安全技术服务有限公司">
   <div class="x-titlebar-title" xid="title1">大连兴邦安全技术服务有限公司</div>
   </div></div>
   <div class="x-panel-content" xid="content2"><div xid="div6" style="height:100%;width:100%;"><div xid="div1" style="height:20%;"></div><div xid="div11" align="center"><div xid="div28" style="height:50%;width:80%;"><div xid="div30" style="height:50%;"></div>
  <div xid="div31" style="height:50%;"><label xid="label19" style="font-size:xx-large;font-weight:400;color:white;" bind-text='(parseInt(window.localStorage.getItem("sumTime"))/3600).toFixed(1);'><![CDATA[]]></label></div></div>
  <div xid="div29" style="height:50%;width:80%;"><label xid="label20" style="color:white;font-weight:200;width:100%;font-size:large;"><![CDATA[小时]]></label>
  <label xid="label21" style="font-weight:100;font-size:medium;color:white;width:100%;"><![CDATA[您的总练习时间]]></label>
  </div></div>
  </div></div>
   <div class="x-panel-bottom" xid="bottom5"></div></div></div>
  <div class="x-contents-content" xid="fenleicontent" onActive="contentActive"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="fenleiContainer" src="$UI/ques_xinpei/fenlei.w" autoLoad="false"></div></div>
  <div class="x-contents-content" xid="monicontent" onActive="contentActive"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="moniContainer" autoLoad="false" src="$UI/ques_xinpei/moni.w"></div></div>
  <div class="x-contents-content" xid="cuoticontent" onActive="contentActive"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="cuotiContainer" autoLoad="false" src="$UI/ques_xinpei/cuoti.w"></div></div></div><div class="x-panel-bottom" xid="bottom2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="首页" xid="button1" style="font-weight:300;" icon="icon-home" target="homecontent">
   <i xid="i1" class="icon-home"></i>
   <span xid="span1">首页</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="分类练习" xid="button2" style="font-weight:300;" icon="icon-filing" target="fenleicontent">
   <i xid="i2" class="icon-filing"></i>
   <span xid="span2">分类练习</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="模拟答题" xid="button3" style="font-weight:300;" icon="icon-folder" target="monicontent">
   <i xid="i3" class="icon-folder"></i>
   <span xid="span3">模拟答题</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top" label="我的错题" xid="button4" icon="icon-android-close" style="font-weight:300;" target="cuoticontent">
   <i xid="i4" class="icon-android-close"></i>
   <span xid="span4">我的错题</span></a></div></div>
  </div></div>