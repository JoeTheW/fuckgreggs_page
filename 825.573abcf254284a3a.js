"use strict";(self.webpackChunkfuckgreggs=self.webpackChunkfuckgreggs||[]).push([[825],{3825:($,x,c)=>{c.r(x),c.d(x,{HomeComponentModule:()=>K});var d=c(6895),f=c(4416);function C(n,r,t,o,i,a,l){try{var s=n[a](l),p=s.value}catch(u){return void t(u)}s.done?r(p):Promise.resolve(p).then(o,i)}function v(n){return function(){var r=this,t=arguments;return new Promise(function(o,i){var a=n.apply(r,t);function l(p){C(a,o,i,l,s,"next",p)}function s(p){C(a,o,i,l,s,"throw",p)}l(void 0)})}}var e=c(8256),b=c(529),S=c(4766);let U=(()=>{class n{constructor(t){this.http=t}ping(){let t=class O{static getDefaultHeaders(){return new b.WM}}.getDefaultHeaders(),o=new b.LE;return this.http.get(`${S.N.normalServicesEndpoint}/system/ping`,{params:o,headers:t})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(b.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var y=c(433),M=c(4247),g=c(399),k=c(7261),h=c(4325),D=c(4004),Z=c(8271),w=c(5108);const A=function(){return{"background-color":"#ffffff",color:"#ffffff"}};let R=(()=>{class n{constructor(t,o){this.dialogConfig=t,this.dialogRef=o}ngOnInit(){this.loadData()}loadData(){this.locationOverview=this.dialogConfig.data,this.markerData=this.locationOverview.marker,this.placeData=this.locationOverview.result,this.placeData.photos?.at(0),console.log(this.locationOverview)}onCloseClicked(){this.dialogRef.close("return data")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.S),e.Y36(h.E7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-location-overview-dialog"]],decls:19,vars:6,consts:[[1,"container","pt-3","pb-2","px-4"],[1,"gap-2"],["shape","square","size","large",3,"image"],[1,"font-bold","white-space-nowrap","flex-grow-1"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-text","p-button-plain",3,"click"],[1,"m-0"],["icon","pi pi-directions","severity","info","label","Directions"],["icon","pi pi-map","severity","info","label","Open in maps"],["pButton","","pRipple","","type","button",1,"p-button-rounded","p-button-text","p-button-plain",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"header",1),e._UZ(2,"p-avatar",2),e.TgZ(3,"span",3),e._uU(4),e._UZ(5,"br"),e._uU(6),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.onCloseClicked()}),e.qZA()(),e.TgZ(8,"content")(9,"p",5),e._uU(10," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e.qZA(),e.TgZ(11,"p",5),e._uU(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e.qZA()(),e._UZ(13,"p-divider"),e.TgZ(14,"footer",1),e._UZ(15,"p-button",6)(16,"p-button",7),e.TgZ(17,"button",8),e.NdJ("click",function(){return o.onCloseClicked()}),e._uU(18," Ok"),e.qZA()()()),2&t&&(e.xp6(2),e.Akn(e.DdM(5,A)),e.Q6J("image",o.placeData.icon),e.xp6(2),e.hij(" ",o.placeData.name,""),e.xp6(2),e.hij("",o.placeData.milesFromMe,"m "))},dependencies:[g.Hq,g.zx,Z.q,w.i],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}.container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:column}header[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-start}content[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-end}"]}),n})();var L=c(1892),P=c(805),q=c(1740),_=c(2174),I=c(5054);function z(n,r){if(1&n&&e._UZ(0,"p-image",8),2&n){const t=e.oxw();let o;e.Q6J("src",null!==(o=t.photoUrl)&&void 0!==o?o:t.placeData.icon)("preview",!0)}}const N=function(){return{"background-color":"#ffffff",color:"#ffffff"}};let F=(()=>{class n{constructor(){this.getPhotos=!1}ngOnInit(){this.loadData()}loadData(){if(this.placeData=this.placeResult,this.placeResult.marker&&(this.markerData=this.placeResult.marker),this.getPhotos){let t=this.placeData.photos?.at(0)??null;this.photoUrl=t?.getUrl()??""}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-location-overview"]],inputs:{placeResult:"placeResult"},decls:18,vars:7,consts:[[1,"container","pt-3","pb-2","px-4"],[1,"gap-2"],["shape","circle","size","large",3,"image"],[3,"src","preview",4,"ngIf"],[1,"font-bold","white-space-nowrap","flex-grow-1"],[1,"m-0"],["icon","pi pi-directions","severity","info","label","Directions"],["icon","pi pi-map","severity","info","label","Open in maps"],[3,"src","preview"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"header",1)(2,"p-avatar",2)(3,"span"),e.YNc(4,z,1,2,"p-image",3),e.qZA()(),e.TgZ(5,"span",4),e._uU(6),e._UZ(7,"br"),e._uU(8),e.qZA()(),e.TgZ(9,"content")(10,"p",5),e._uU(11," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e.qZA(),e.TgZ(12,"p",5),e._uU(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e.qZA()(),e._UZ(14,"p-divider"),e.TgZ(15,"footer",1),e._UZ(16,"p-button",6)(17,"p-button",7),e.qZA()()),2&t&&(e.xp6(2),e.Akn(e.DdM(6,N)),e.Q6J("image",o.photoUrl?"":o.placeData.icon),e.xp6(2),e.Q6J("ngIf",""!=o.photoUrl),e.xp6(2),e.hij(" ",o.placeData.name,""),e.xp6(2),e.hij("",o.placeData.milesFromMe,"m "))},dependencies:[d.O5,g.zx,Z.q,w.i,I.E],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}.container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:column}header[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-start}content[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-end}"]}),n})();function J(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"p-button",8),e.NdJ("onClick",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.fuckGreggs())}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",!t.mapReady||t.searchedThisLocation)}}function H(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"p-button",9),e.NdJ("onClick",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.zoomAllResults())}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",!t.mapReady||t.markers.length<=0)}}function E(n,r){if(1&n&&e._uU(0),2&n){const t=e.oxw().$implicit;e.AsE(" ",t.milesFromMe,"m - ",t.name," ")}}function B(n,r){if(1&n&&(e.TgZ(0,"p-accordionTab"),e.YNc(1,E,1,2,"ng-template",10),e._UZ(2,"app-location-overview",11),e.qZA()),2&n){const t=r.$implicit;e.xp6(2),e.Q6J("placeResult",t)}}let Q=(()=>{class n{constructor(t,o){this.dialogService=t,this.mapReady=!1,this.searchedThisLocation=!1,this.center=new google.maps.LatLng(-37.11127917893532,-12.287298806127833),this.zoom=10,this.removePoiLabelsStyle={featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},this.mapOptions={clickableIcons:!1,styles:[this.removePoiLabelsStyle]},this.markers=[],this.results=[]}ngOnInit(){}onMapReady(t){this.mapReady=!0,this.map=t,this.createSearchBox()}createSearchBox(){const t=document.getElementById("pac-input"),o=new google.maps.places.SearchBox(t);o.addListener("places_changed",()=>{const i=o.getPlaces()??[],a=new google.maps.LatLngBounds;if(0==i.length)return;let l=i[0];!l.geometry||!l.geometry.location||(this.createHomeMarker(l.geometry.location),l.geometry.viewport?a.union(l.geometry.viewport):a.extend(l.geometry.location),this.map.fitBounds(a))})}directionsRequest(t){const o={destination:{lat:51.014771936573396,lng:-3.097164806721585},origin:{lat:51.0155508487609,lng:-3.103241186893345},travelMode:google.maps.TravelMode.DRIVING};return t.route(o).pipe((0,D.U)(i=>i.result))}fuckGreggs(){var t=this;return v(function*(){t.clearResults(),t.findNearbyLocation()})()}clearResults(){this.results=[],this.markers.forEach(t=>{t.setVisible(!1)}),this.markers=[]}findNearbyLocation(){var t=this;return v(function*(){let o={type:"bakery",location:t.currentLocation,radius:2500};new google.maps.places.PlacesService(t.map).nearbySearch(o,(a,l)=>t.getPlacesResults(a,l))})()}findSpecificPlace(){let t={query:"greggs",locationBias:{radius:500,center:this.center},fields:["name","geometry","place_id"]};new google.maps.places.PlacesService(this.map).findPlaceFromQuery(t,(i,a)=>this.getPlacesResults(i,a))}getPlacesResults(t,o){let i=null;if(console.log(o,t),t=t??[],o===google.maps.places.PlacesServiceStatus.OK){for(var a=0;a<t.length;a++){let s=t[a],p=!1,u=s.geometry.location??new google.maps.LatLng(0,0);s.milesFromMe=this.getCrowFlyMiles(this.currentLocation,u);let m=s.name.toLowerCase().includes("greggs");i||(i=s),!m&&i.milesFromMe&&i.milesFromMe>s.milesFromMe&&(i=s),this.createMarker(s,p)}let l=i?.geometry.location??new google.maps.LatLng(0,0);this.center=l,this.results.sort((s,p)=>(s.milesFromMe??9999)>(p.milesFromMe??9999)?1:-1)}this.searchedThisLocation=!0}createMarker(t,o=!1){let l=t.name.toLowerCase().includes("greggs"),p={url:l?"assets/icons/middleFinger48.png":"assets/icons/location128.png",scaledSize:new google.maps.Size(48,48),labelOrigin:new google.maps.Point(24,48*1.15)};var m=new google.maps.Marker({map:this.map,position:t.geometry.location,title:t.name,icon:p,label:{text:l?" ":`${t.name}`,color:"black",fontFamily:"Arial",fontSize:"20px",fontWeight:"bold"},animation:google.maps.Animation.DROP,clickable:!0,cursor:l?"not-allowed":""});l||(m.addListener("click",T=>{this.markerClicked(m,t)}),m.addListener("mouseover",T=>{this.markerEntered(m,t)}),m.addListener("mouseout",T=>{this.markerExited(m,t)})),this.markers.push(m),l||this.results.push(t)}markerClicked(t,o){console.log(`CLICKED ${o.name}`),this.openLocationOverviewDialog(t,o)}markerEntered(t,o){this.setIconSize(t,64)}markerExited(t,o){this.setIconSize(t,48)}setIconSize(t,o){let i=t.getIcon();i.scaledSize=new google.maps.Size(o,o),i.size=new google.maps.Size(o,o),i.labelOrigin=new google.maps.Point(o/2,1.15*o),t.setIcon(i)}openLocationOverviewDialog(t,o){this.dynamicDialogRef=this.dialogService.open(R,{header:"",showHeader:!1,width:"50%",contentStyle:{overflow:"auto",padding:"0"},styleClass:"prime-dialog",baseZIndex:1e4,maximizable:!1,data:{marker:t,result:o}}),this.dynamicDialogRef.onClose.subscribe(i=>{i&&console.log(i)})}getCurrentLocation(){return new Promise(o=>{console.log("Requestion permission..."),navigator.geolocation&&navigator.geolocation.getCurrentPosition(i=>{if(i){console.log("Got position",i);let a=new google.maps.LatLng(i.coords.latitude,i.coords.longitude);return this.center=a,this.currentLocation=a,this.zoom=16,this.createHomeMarker(a),o(!0)}return console.log("Error getting position, no geolocation"),o(!1)},i=>(console.log("Unable to get position",i),o(!1)))})}createHomeMarker(t){if(this.currentLocation=t,this.searchedThisLocation=!1,this.currentLocationMarker)return void this.currentLocationMarker.setPosition(t);let a={url:"assets/icons/person128.png",scaledSize:new google.maps.Size(48,48),labelOrigin:new google.maps.Point(24,48*1.15)};var s=new google.maps.Marker({map:this.map,position:t,title:"You",icon:a,label:{text:"You",color:"black",fontFamily:"Arial",fontSize:"15px",fontWeight:"bold"},animation:google.maps.Animation.DROP,clickable:!0,cursor:"default"});this.currentLocationMarker=s}getCrowFlyMiles(t,o){var a=this.deg2rad(o.lat()-t.lat()),l=this.deg2rad(o.lng()-t.lng()),s=Math.sin(a/2)*Math.sin(a/2)+Math.cos(this.deg2rad(t.lat()))*Math.cos(this.deg2rad(o.lat()))*Math.sin(l/2)*Math.sin(l/2);return+(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))*6371/1.609).toFixed(1)}deg2rad(t){return t*(Math.PI/180)}zoomAllResults(){let t=new google.maps.LatLngBounds;this.results.forEach(o=>{o.geometry.viewport&&t.union(o.geometry.viewport)}),this.map.fitBounds(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.xA),e.Y36(L.Tx))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-normal-map"]],features:[e._Bn([h.xA])],decls:11,vars:8,consts:[["height","500px","width","900px",3,"center","zoom","options","mapInitialized"],[1,"flex","gap-2"],["id","pac-input","type","text","placeholder","Search location","pInputText","",1,"controls","w-25rem"],["label","Get location via GPS",1,"my-2",3,"disabled","onClick"],["class","my-2","label","Fuck Greggs",3,"disabled","onClick",4,"ngIf"],["class","my-2","label","View all",3,"disabled","onClick",4,"ngIf"],[3,"activeIndex"],[4,"ngFor","ngForOf"],["label","Fuck Greggs",1,"my-2",3,"disabled","onClick"],["label","View all",1,"my-2",3,"disabled","onClick"],["pTemplate","header"],[3,"placeResult"]],template:function(t,o){1&t&&(e.TgZ(0,"div")(1,"google-map",0),e.NdJ("mapInitialized",function(a){return o.onMapReady(a)}),e.qZA(),e._UZ(2,"br"),e.TgZ(3,"div",1),e._UZ(4,"input",2),e.qZA(),e.TgZ(5,"div",1)(6,"p-button",3),e.NdJ("onClick",function(){return o.getCurrentLocation()}),e.qZA(),e.YNc(7,J,1,1,"p-button",4),e.YNc(8,H,1,1,"p-button",5),e.qZA(),e.TgZ(9,"p-accordion",6),e.YNc(10,B,3,1,"p-accordionTab",7),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("center",o.center)("zoom",o.zoom)("options",o.mapOptions),e.xp6(5),e.Q6J("disabled",!o.mapReady),e.xp6(1),e.Q6J("ngIf",o.currentLocation),e.xp6(1),e.Q6J("ngIf",o.currentLocation&&o.markers.length>0),e.xp6(1),e.Q6J("activeIndex",0),e.xp6(1),e.Q6J("ngForOf",o.results))},dependencies:[d.sg,d.O5,P.jx,g.zx,L.b6,q.o,_.UQ,_.US,F]}),n})();function G(n,r){if(1&n&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.hij("Server: ",t.pingResponse,"")}}const Y=[{path:"",component:(()=>{class n{constructor(t,o){this.router=t,this.normalServices=o,this.knobValue=69,this.pingSuccess=!1,this.pingResponse=""}ngOnInit(){this.changeKnobValueAfterSeconds(0)}pingServer(){this.normalServices.ping().subscribe({next:t=>{this.pingSuccess=!0,this.pingResponse=t.message},error:t=>{console.log("Ping failure"),this.pingSuccess=!1}})}changeKnobValueAfterSeconds(t){var o=this;return v(function*(){yield new Promise(i=>setTimeout(i,1e3*t)),o.knobValue=(o.knobValue+1)%100,o.knobValue>=99&&o.pingServer(),o.changeKnobValueAfterSeconds(.3)})()}randomInt(t,o){return Math.floor(Math.random()*(o-t+1)+t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.F0),e.Y36(U))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:23,vars:2,consts:[[1,"p-2"],["header","Fuck Greggs",1,"p-2"],[1,"pi","pi-spin","pi-user",2,"font-size","1rem","color","red"],["header","Map",1,"p-2"],["header","Also",1,"p-2"],[1,"flex"],[3,"ngModel","ngModelChange"],[4,"ngIf"],["header","Nav",1,"p-2"],[1,"flex","gap-2"],["routerLink","../peaches"],["label","Peaches"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"p-card",1)(2,"p"),e._uU(3," You heard me "),e.qZA(),e.TgZ(4,"p"),e._uU(5,"The "),e._UZ(6,"i",2),e._uU(7," son "),e._UZ(8,"i",2),e._uU(9," of the founder may or may not be a convicted "),e.TgZ(10,"b"),e._uU(11,"[REDACTED]"),e.qZA()()(),e.TgZ(12,"p-card",3),e._UZ(13,"app-normal-map"),e.qZA(),e.TgZ(14,"p-card",4)(15,"p",5),e._uU(16," Look at my knob: "),e.TgZ(17,"p-knob",6),e.NdJ("ngModelChange",function(a){return o.knobValue=a}),e.qZA()(),e.YNc(18,G,3,1,"div",7),e.qZA(),e.TgZ(19,"p-card",8)(20,"div",9)(21,"a",10),e._UZ(22,"p-button",11),e.qZA()()()()),2&t&&(e.xp6(17),e.Q6J("ngModel",o.knobValue),e.xp6(1),e.Q6J("ngIf",o.pingSuccess))},dependencies:[d.O5,f.yS,y.JJ,y.On,M.Z,g.zx,k.lH,Q]}),n})()}];let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(Y),f.Bz]}),n})();var V=c(4949);let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,j,d.ez,y.u5,M.d,g.hJ,k.dJ,f.Bz,V.S]}),n})()}}]);