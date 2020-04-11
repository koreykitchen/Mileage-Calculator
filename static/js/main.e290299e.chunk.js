(this["webpackJsonpmileage-calculator"]=this["webpackJsonpmileage-calculator"]||[]).push([[0],{10:function(e,t){},12:function(e,t,a){e.exports=a(25)},17:function(e,t,a){},23:function(e,t){},24:function(e,t){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),s=a.n(o),l=(a(17),a(1)),u=a(2),i=a(3),c=a(4),d=a(7),y=a.n(d),m=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("p",null,"Select a store to add to your ",r.a.createElement("span",{style:{fontWeight:"bold"}},this.props.currentDay)," route: "),r.a.createElement("select",{id:"locationSelectElement",style:{width:"75vw"}},this.populateSelectElement()),r.a.createElement("button",{onClick:function(){return e.addSelectedStoreToDay()},style:{marginLeft:"25px"}},"Add Store"))}},{key:"populateSelectElement",value:function(){return this.props.storeListData.map((function(e,t){return e.Name?r.a.createElement("option",{key:t,value:t},e.Name+" - "+e.Address+" - "+e.City):[]}))}},{key:"addSelectedStoreToDay",value:function(){var e=document.getElementById("locationSelectElement"),t=e.options[e.selectedIndex].value,a=this.props.storeListData[t];this.props.addSelectedStoreToCurrentDay(a)}}]),a}(r.a.Component),p=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bordered-div"},r.a.createElement("p",null,"Test Location"),r.a.createElement("button",{onClick:this.removeStop,style:{color:"red"}},"Remove"))}},{key:"removeStop",value:function(){}}]),a}(r.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={numberOfStops:3},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bordered-div"},r.a.createElement("p",null,this.state.numberOfStops," stop(s) added to the day..."),this.populateLocationsHtml())}},{key:"populateLocationsHtml",value:function(){return 0===this.state.numberOfStops?void 0:Array(this.state.numberOfStops).fill(null).map((function(e,t){return r.a.createElement(p,{key:t})}))}}]),a}(r.a.Component),h=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={currentDay:"Sunday",dayData:new Array(7).fill([])},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bordered-div"},this.setupWeekdayTabs(),r.a.createElement("button",{onClick:this.totalMiles,style:{marginLeft:"25px"}},"Total Mileage"),r.a.createElement(m,{currentDay:this.state.currentDay,storeListData:this.props.storeListData,addSelectedStoreToCurrentDay:this.addSelectedStoreToCurrentDay}),r.a.createElement(f,{data:this.state.dayData[this.getDaysData()],callback:this.setDayData}))}},{key:"addSelectedStoreToCurrentDay",value:function(e){console.log(e)}},{key:"setDayData",value:function(e){var t=this.state.dayData;t[this.getDaysData()]=e,this.setState({dayData:t})}},{key:"getDaysData",value:function(){var e=this;return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].findIndex((function(t){return t===e.state.currentDay}))}},{key:"setupWeekdayTabs",value:function(){var e=this;return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(t,a){return r.a.createElement("button",{key:t,onClick:function(){return e.setCurrentDayTab(a)},style:{margin:"1px"}},t)}))}},{key:"setCurrentDayTab",value:function(e){this.setState({currentDay:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]})}},{key:"totalMiles",value:function(){}}]),a}(r.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Mileage Calculator"),r.a.createElement("p",null,"A Note Before Using:"),r.a.createElement("p",null,"Mileage calculator is still in development, and therefore may be prone to bugs and crashes..."),r.a.createElement("p",null,"Some functionality may be missing or incomplete..."),r.a.createElement(h,{storeListData:this.props.storeListData}))}}]),a}(r.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={storeListData:[],dataHasBeenLoaded:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getStoreListData(this.callbackFunctionToStoreData,this)}},{key:"render",value:function(){return this.state.dataHasBeenLoaded?r.a.createElement(v,{storeListData:this.state.storeListData}):r.a.createElement("h1",{style:{textAlign:"center",padding:"100px"}},"LOADING...")}},{key:"getStoreListData",value:function(e,t){var a=new XMLHttpRequest;a.open("GET","https://koreykitchen.github.io/Mileage-Calculator/StoreList.xlsx",!0),a.responseType="arraybuffer",a.onload=function(){e(a.response,t)},a.send()}},{key:"callbackFunctionToStoreData",value:function(e,t){var a=new Uint8Array(e),n=y.a.read(a,{type:"array"}),r=n.Sheets[n.SheetNames[0]],o=y.a.utils.sheet_to_json(r,{blankrows:!1});o=(o=o.filter((function(e){return e.Name}))).sort((function(e,t){var a=e.Name.toUpperCase(),n=t.Name.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r})),t.setState({storeListData:o,dataHasBeenLoaded:!0})}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e290299e.chunk.js.map