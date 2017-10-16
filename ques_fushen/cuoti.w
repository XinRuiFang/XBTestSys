<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="background-color:#2894FF;color:white;" title="我的错题">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">我的错题</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content" xid="content1"><div xid="div1" style="height:10%;"></div>
  <div xid="div2" style="height:30%;"><div xid="div4" align="center" style="width:75%;height:100%;" class="center-block"><div xid="div5" style="width:50%;height:100%;float:left;border-style:none dashed none none;border-width:thin thin thin thin;">
  <a class="a_demo_five" href="#" style="width:70%;" bind-click="a2Click">
                            分类错题--判断
                        </a>
  
  </div>
  <div xid="div14" style="width:50%;height:100%;float:left;">
    <a class="a_demo_five" href="#" bind-click="a1Click" style="width:70%;">
                            分类错题--选择
                        </a>
  </div></div></div>
  <div xid="div12" style="border-style:none none dashed none;border-width:thin thin thin thin;height:10%;width:75%;" align="center" class="center-block">
  <div xid="div18" style="height:100%;width:50%;float:left;"><div xid="div16" style="height:30%;"></div><span xid="span1" style="font-weight:200;color:#2894FF;"><![CDATA[剩余错题数量：]]></span><label xid="label1" style="font-weight:200;color:#2894FF;" bind-text='window.localStorage.getItem("wrongJudgeTotalOf")==null?0:window.localStorage.getItem("wrongJudgeTotalOf")'><![CDATA[]]></label></div>
  <div xid="div19" style="height:100%;width:50%;float:left;"><div xid="div20" style="height:30%;"></div>
  <span xid="span2" style="font-weight:200;color:#2894FF;"><![CDATA[剩余错题数量：]]></span>
  <label xid="label3" bind-text='window.localStorage.getItem("wrongChoseTotalOf")==null?0:window.localStorage.getItem("wrongChoseTotalOf")' style="font-weight:200;color:#2894FF;">label</label></div></div><div xid="div11" style="height:10%;"></div><div xid="div3" style="height:30%;">
  <div xid="div9" align="center" style="width:75%;height:100%;" class="center-block"><div xid="div10" style="width:50%;height:100%;float:left;border-style:none dashed none none;border-width:thin thin thin thin;">
  <a class="a_demo_five" href="#" style="width:70%;" bind-click="a3Click" xid="a3">
                            试卷错题--判断
                        </a>
  
  </div>
  <div xid="div15" style="width:50%;height:100%;float:left;">
    <a class="a_demo_five" href="#" style="width:70%;" xid="a4" bind-click="a4Click">
                            试卷错题--选择
                        </a>
  </div></div>
  
  </div>
  <div xid="div13" style="border-style:none none none none;border-width:thin thin thin thin;height:10%;width:75%;" align="center" class="center-block"><div xid="div17" style="height:100%;width:50%;float:left;"><div xid="div7" style="height:30%;"></div><span xid="span3" style="font-weight:200;color:#2894FF;"><![CDATA[剩余错题数量：]]></span><label xid="label2" style="font-weight:200;color:#2894FF;" bind-text='window.localStorage.getItem("simWrongItemJudge")==null?0:(JSON.parse(window.localStorage.getItem("simWrongItemJudge"))).length'><![CDATA[]]></label>
  </div>
  <div xid="div6" style="height:100%;width:50%;float:left;"><div xid="div8" style="height:30%;"></div><span xid="span4" style="font-weight:200;color:#2894FF;"><![CDATA[剩余错题数量：]]></span><label xid="label4" bind-text='window.localStorage.getItem("simWrongItemChose")==null?0:(JSON.parse(window.localStorage.getItem("simWrongItemChose"))).length' style="font-weight:200;color:#2894FF;">label</label></div></div></div>
   <div class="x-panel-bottom" xid="bottom1"></div></div></div>