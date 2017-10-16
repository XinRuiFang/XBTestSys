<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/> 
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="background-color:#2894FF;color:white;" title="分类练习">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">分类练习</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content" xid="content2">
  <div xid="div1" align="center" style="height:47%;"><div xid="div4" style="height:10%;"></div><div xid="div3" style="width:80%;border-style:solid groove none solid;border-width:thin medium medium thin;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;height:20%;" align="left"><div xid="div8" style="height:40%;"></div>
  <div xid="div20" style="height:60%;"><div xid="div21" style="float:left;height:100%;width:5%;"></div>
  <div xid="div22" style="float:left;height:100%;width:95%;"><label xid="label1"><![CDATA[判断题部分]]></label></div></div></div>
  <div xid="div5" style="width:80%;height:60%;"><div xid="div7" style="float:left;width:50%;height:100%;border-style:none none none solid;border-width:thin thin thin thin;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;" align="center">
  <label xid="label2" style="color:#2894FF;font-size:xx-large;font-weight:200;width:100%;" bind-text='window.localStorage.getItem("xinpeiJudge");'><![CDATA[0]]></label>
  <label xid="label3" style="color:#2894FF;width:100%;"><![CDATA[您目前的进度]]></label>
  <label xid="label4" style="color:#2894FF;font-weight:100;font-size:x-small;width:100%;"><![CDATA[占总题数的：]]></label>
  <label xid="label5" style="color:#2894FF;" bind-text='(window.localStorage.getItem("xinpeiJudge")/8.52).toFixed(1) +"%";'><![CDATA[56%]]></label></div>
  <div xid="div9" style="float:left;width:50%;height:100%;"><div xid="div10" style="height:70%;border-style:none groove none none;border-width:medium medium medium medium;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;"></div>
  <div xid="div11" style="height:30%;border-style:none groove none none;border-width:medium medium medium medium;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;"><a href="#" class="button green" xid="a1" bind-click="a1Click">开始做题</a></div></div></div>
  <div xid="div6" style="height:10%;width:80%;border-bottom-style:groove;border-width:medium medium medium thin;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;border-right-style:groove;border-left-style:solid;"></div></div><div xid="div2" align="center" style="height:47%;"><div xid="div12" style="height:10%;"></div><div xid="div13" style="width:80%;border-style:solid groove none solid;border-width:thin medium medium thin;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;height:20%;" align="left">
  <div xid="div24" style="height:40%;"></div>
  <div xid="div25" style="height:60%;"><div xid="div26" style="float:left;height:100%;width:5%;"></div>
  <div xid="div27" style="float:left;height:100%;width:95%;"><label xid="label6"><![CDATA[单选题部分]]></label></div></div></div>
  <div xid="div14" style="width:80%;height:60%;"><div xid="div15" style="float:left;width:50%;height:100%;border-style:none none none solid;border-width:thin thin thin thin;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;" align="center"><label xid="label7" style="color:#2894FF;font-size:xx-large;font-weight:200;width:100%;" id="xuanze" bind-load="label7Load" bind-text='window.localStorage.getItem("xinpeiIndex");'><![CDATA[0]]></label>
  <label xid="label8" style="color:#2894FF;width:100%;"><![CDATA[您目前的进度]]></label>
  <label xid="label9" style="color:#2894FF;font-weight:100;font-size:x-small;width:100%;"><![CDATA[占总题数的：]]></label>
  <label xid="label10" style="color:#2894FF;" bind-text='(window.localStorage.getItem("xinpeiIndex")/6.3).toFixed(1) +"%";'><![CDATA[56%]]></label></div>
  <div xid="div17" style="float:left;width:50%;height:100%;"><div xid="div18" style="height:70%;border-style:none groove none none;border-width:medium medium medium medium;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;"></div>
  <div xid="div19" style="height:30%;border-style:none groove none none;border-width:medium medium medium medium;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;"><a href="#" class="button green" xid="a2" bind-click="a2Click">开始做题</a></div></div></div>
  <div xid="div23" style="height:10%;width:80%;border-bottom-style:groove;border-width:medium medium medium thin;border-color:#D8DEE2 #D8DEE2 #D8DEE2 #D8DEE2;border-right-style:groove;border-left-style:solid;"></div></div></div>
  <div class="x-panel-bottom" xid="bottom6"></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" src="$UI/ques_xinpei/xinpei.w"></span></div>