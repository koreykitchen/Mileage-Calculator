(this["webpackJsonpmileage-calculator"]=this["webpackJsonpmileage-calculator"]||[]).push([[0],{15:function(e,t){},17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},28:function(e,t){},29:function(e,t){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(16),o=a.n(s),l=(a(22),a(1)),i=a(2),c=a(6),u=a(3),d=a(4),y=a(12),p=a.n(y),h=a(5),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={},r.selectElementOptions=r.populateSelectElement(),r}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("p",null,"Select a store to add to your ",n.a.createElement("span",{style:{fontWeight:"bold"}},this.props.currentDay)," route: "),n.a.createElement("select",{id:"locationSelectElement",style:{width:"75vw"}},this.selectElementOptions),n.a.createElement("button",{onClick:function(){return e.props.addStore(e.props.currentDayIndex,e.props.storeListData[e.getSelectedIndex()])},style:{marginLeft:"25px"}},"Add Store"))}},{key:"populateSelectElement",value:function(){return this.props.storeListData.map((function(e,t){return e.Name?n.a.createElement("option",{key:t,value:t},e.Name+" - "+e.Address+" - "+e.City):[]}))}},{key:"getSelectedIndex",value:function(){var e=document.getElementById("locationSelectElement");return e?e.options[e.selectedIndex].value:0}}]),a}(n.a.Component),m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={},r}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"bordered-div"},this.props.storeData.Name+" - "+this.props.storeData.Address+" - "+this.props.storeData.City,n.a.createElement("button",{onClick:function(){return e.props.removeStore(e.props.dayIndex,e.props.locationIndex)},style:{color:"red",float:"right"}},"Remove"))}}]),a}(n.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"bordered-div"},n.a.createElement("p",null,this.props.currentDaysData.length," store(s) added to the day..."),this.populateLocationsHtml(Object(h.a)(this.props.currentDaysData)))}},{key:"populateLocationsHtml",value:function(e){var t=this;return 0===e.length?void 0:Array(e.length).fill(null).map((function(a,r){return n.a.createElement(m,{key:r,locationIndex:r,dayIndex:t.props.currentDayIndex,storeData:e[r],removeStore:t.props.removeStore})}))}}]),a}(n.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={currentDay:"Sunday"},r.arrayOfDayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r.weekdayTabs=r.setupWeekdayTabs(),r}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"bordered-div"},this.weekdayTabs,n.a.createElement("button",{onClick:function(){return e.props.swapWeekOrDistanceDisplay()},style:{marginLeft:"25px"}},"Total Mileage"),n.a.createElement(D,{currentDay:this.state.currentDay,currentDayIndex:this.getDaysIndex(this.state.currentDay),storeListData:this.props.storeListData,addStore:this.props.addStore}),n.a.createElement(f,{currentDayIndex:this.getDaysIndex(this.state.currentDay),currentDaysData:this.getDaysData(this.state.currentDay),removeStore:this.props.removeStore}))}},{key:"getDaysData",value:function(e){var t=this.arrayOfDayNames.findIndex((function(t){return t===e}));return this.props.arrayOfDaysData[t]}},{key:"getDaysIndex",value:function(e){var t=this;return this.arrayOfDayNames.findIndex((function(e){return e===t.state.currentDay}))}},{key:"setupWeekdayTabs",value:function(){var e=this;return this.arrayOfDayNames.map((function(t,a){return n.a.createElement("button",{key:t,onClick:function(){return e.setCurrentDay(a)},style:{margin:"1px"}},t)}))}},{key:"setCurrentDay",value:function(e){this.setState({currentDay:this.arrayOfDayNames[e]})}}]),a}(n.a.Component),b=a(9),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"bordered-div"},n.a.createElement("p",null,"Start Address: "+this.props.startVenue+", "+this.props.legData.start_address),n.a.createElement("p",null,"End Address: "+this.props.endVenue+", "+this.props.legData.end_address),n.a.createElement("p",null,"Distance: "+this.convertMetersToMiles(this.props.legData.distance.value)))}},{key:"convertMetersToMiles",value:function(e){return Math.round(621371e-9*e*10)/10}}]),a}(n.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={content:"LOADING...",loaded:!1,totalMiles:0},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dayResults&&!this.state.loaded?this.storeResults(this.props.dayResults):this.requestMileageCalculation()}},{key:"componentDidUpdate",value:function(){this.props.dayResults&&!this.state.loaded&&this.storeResults(this.props.dayResults)}},{key:"render",value:function(){return n.a.createElement("div",{className:"bordered-div"},n.a.createElement("p",{style:{fontWeight:"bold"}},this.getDayNameFromIndex(this.props.dayIndex)+": "),this.state.content,n.a.createElement("p",null,this.getDayNameFromIndex(this.props.dayIndex)+"'s total miles: "+this.state.totalMiles))}},{key:"requestMileageCalculation",value:function(){this.props.dayData.length>=2&&this.props.dayData.length<=12?(new window.google.maps.DirectionsService).route(this.buildUpMileageRequestForDay(),this.props.callbackToStoreResults):this.setState({content:this.getDayNameFromIndex(this.props.dayIndex)+"'s number of stores must be between 2 and 12...",loaded:!0})}},{key:"buildUpMileageRequestForDay",value:function(){for(var e=this.props.dayData[0].Address+","+this.props.dayData[0].City,t=this.props.dayData[this.props.dayData.length-1].Address+","+this.props.dayData[this.props.dayData.length-1].City,a=[],r=1;r<this.props.dayData.length-1;r++)a.push({location:this.props.dayData[r].Address+","+this.props.dayData[r].City});return{origin:e,destination:t,waypoints:a,travelMode:"DRIVING"}}},{key:"storeResults",value:function(e){var t=this,a=new Array(e.routes[0].legs.length).fill(null).map((function(a,r){return n.a.createElement(k,{legData:e.routes[0].legs[r],key:r,startVenue:t.props.dayData[r].Name,endVenue:t.props.dayData[r+1].Name})}));this.setState({content:a,loaded:!0,totalMiles:this.calculateDaysTotalMiles(e)})}},{key:"calculateDaysTotalMiles",value:function(e){var t,a=0,r=Object(b.a)(e.routes[0].legs);try{for(r.s();!(t=r.n()).done;){a+=t.value.distance.value}}catch(n){r.e(n)}finally{r.f()}return this.props.callbackToStoreDaysMiles(this.convertMetersToMiles(a)),this.convertMetersToMiles(a)}},{key:"convertMetersToMiles",value:function(e){return Math.round(621371e-9*e*10)/10}},{key:"getDayNameFromIndex",value:function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]}}]),a}(n.a.Component),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={loaded:!1,arrayOfResults:new Array(7).fill(null),callbacksToStoreResults:r.generateCallbacksToStoreResults(),daysMilesArray:new Array(7).fill(0),callbacksToStoreDaysMiles:r.generateCallbacksToStoreDaysMiles()},r.callbackToSetAsLoaded=r.callbackToSetAsLoaded.bind(Object(c.a)(r)),r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){if(document.getElementById("googleMapsScriptElement"))this.setState({loaded:!0});else{var e=document.createElement("script");e.id="googleMapsScriptElement",e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASFAgyRK86Z88JTF_LlbtUsLTmw0_eNdI",e.onload=this.callbackToSetAsLoaded,document.body.appendChild(e)}}},{key:"callbackToSetAsLoaded",value:function(){this.setState({loaded:!0})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"bordered-div"},n.a.createElement("button",{onClick:function(){return e.props.swapWeekOrDistanceDisplay()}},"Go Back"),this.displayLoadingOrDayDistanceElements())}},{key:"displayLoadingOrDayDistanceElements",value:function(){var e=this;if(this.state.loaded){var t=new Array(7).fill(null).map((function(t,a){return n.a.createElement(O,{key:a,dayIndex:a,dayData:e.props.arrayOfDaysData[a],dayResults:e.state.arrayOfResults[a],callbackToStoreResults:e.state.callbacksToStoreResults[a],callbackToStoreDaysMiles:e.state.callbacksToStoreDaysMiles[a]})}));return n.a.createElement("div",null,n.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold"}},"Total Miles: "+this.calculateWeeksTotalMiles()),t)}return n.a.createElement("p",null,"LOADING...")}},{key:"generateCallbacksToStoreResults",value:function(){var e=this;return new Array(7).fill(null).map((function(t,a){return function(t,r){return e.storeCalculatedDistance(t,r,a)}}))}},{key:"storeCalculatedDistance",value:function(e,t,a){"OK"===t&&window.distanceElement.storeResults(e,a)}},{key:"storeResults",value:function(e,t){var a=Object(h.a)(this.state.arrayOfResults);a[t]=e,this.setState({arrayOfResults:a})}},{key:"calculateWeeksTotalMiles",value:function(){var e,t=0,a=Object(b.a)(this.state.daysMilesArray);try{for(a.s();!(e=a.n()).done;){t+=e.value}}catch(r){a.e(r)}finally{a.f()}return Math.round(10*t)/10}},{key:"storeDaysTotalMiles",value:function(e,t){var a=Object(h.a)(this.state.daysMilesArray);a[t]=e,this.setState({daysMilesArray:a})}},{key:"generateCallbacksToStoreDaysMiles",value:function(){var e=this;return new Array(7).fill(null).map((function(t,a){return function(t){return e.storeDaysTotalMiles(t,a)}}))}}]),a}(n.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={weekDisplayed:!0,arrayOfDaysData:new Array(7).fill([])},r.addStore=r.addStore.bind(Object(c.a)(r)),r.removeStore=r.removeStore.bind(Object(c.a)(r)),r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Mileage Calculator"),n.a.createElement("p",null,"A Note Before Using:"),n.a.createElement("p",null,"Mileage calculator is still in development, and therefore may be prone to bugs and crashes..."),n.a.createElement("p",null,"Some functionality may be missing or incomplete..."),this.renderWeekOrDistance())}},{key:"renderWeekOrDistance",value:function(){var e=this;return this.state.weekDisplayed?n.a.createElement(v,{storeListData:this.props.storeListData,arrayOfDaysData:this.state.arrayOfDaysData,swapWeekOrDistanceDisplay:function(){return e.swapWeekOrDistanceDisplay()},addStore:this.addStore,removeStore:this.removeStore}):n.a.createElement(S,{swapWeekOrDistanceDisplay:function(){return e.swapWeekOrDistanceDisplay()},arrayOfDaysData:this.state.arrayOfDaysData,ref:function(e){return window.distanceElement=e}})}},{key:"swapWeekOrDistanceDisplay",value:function(){this.setState({weekDisplayed:!this.state.weekDisplayed})}},{key:"addStore",value:function(e,t){var a=Object(h.a)(this.state.arrayOfDaysData),r=Object(h.a)(a[e]);r.push(t),a[e]=r,this.setState({arrayOfDaysData:a})}},{key:"removeStore",value:function(e,t){var a=Object(h.a)(this.state.arrayOfDaysData),r=Object(h.a)(a[e]);r.splice(t,1),a[e]=r,this.setState({arrayOfDaysData:a})}}]),a}(n.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={storeListData:[],dataHasBeenLoaded:!1},r.callbackFunctionToStoreData=r.callbackFunctionToStoreData.bind(Object(c.a)(r)),r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getStoreListData(this.callbackFunctionToStoreData)}},{key:"render",value:function(){return this.state.dataHasBeenLoaded?n.a.createElement(g,{storeListData:this.state.storeListData}):n.a.createElement("h1",{style:{textAlign:"center",padding:"100px"}},"LOADING...")}},{key:"getStoreListData",value:function(e){var t=new XMLHttpRequest;t.open("GET","https://koreykitchen.github.io/Mileage-Calculator/StoreList.xlsx",!0),t.responseType="arraybuffer",t.onload=function(){e(t.response)},t.send()}},{key:"callbackFunctionToStoreData",value:function(e){var t=new Uint8Array(e),a=p.a.read(t,{type:"array"}),r=a.Sheets[a.SheetNames[0]],n=p.a.utils.sheet_to_json(r,{blankrows:!1});n=(n=n.filter((function(e){return e.Name}))).sort((function(e,t){var a=e.Name.toUpperCase(),r=t.Name.toUpperCase(),n=0;return a>r?n=1:a<r&&(n=-1),n})),this.setState({storeListData:n,dataHasBeenLoaded:!0})}}]),a}(n.a.Component);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d3792949.chunk.js.map