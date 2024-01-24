"use strict";(self.webpackChunkfuckgreggs=self.webpackChunkfuckgreggs||[]).push([[237],{3237:(fe,x,c)=>{c.r(x),c.d(x,{HomeComponentModule:()=>de});var u=c(6895),y=c(4416);function S(n,l,t,o,i,a,s){try{var r=n[a](s),p=r.value}catch(g){return void t(g)}r.done?l(p):Promise.resolve(p).then(o,i)}var e=c(8256),v=c(529),R=c(4766);let A=(()=>{class n{constructor(t){this.http=t}ping(){let t=class P{static getDefaultHeaders(){return new v.WM}}.getDefaultHeaders(),o=new v.LE;return this.http.get(`${R.N.normalServicesEndpoint}/system/ping`,{params:o,headers:t})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _=c(433),T=c(4247),h=c(399),D=c(7261),b=c(4325),J=c(4004),k=c(8271),w=c(5108);let L=(()=>{class n{constructor(t){this.http=t,this.placesEndpoint="https://maps.googleapis.com/maps/api/place",this.apiKey="AIzaSyBDWU0h5aK-6Y0e2jfMMui_IrvDAfE21gU",this.apiCalls=0,this.simpleLog=!1}incrementApiCalls(){this.apiCalls++,this.consoleLog(`Google API calls: ${this.apiCalls}`)}setMap(t){this.map=t}populatePlaceDetails(t){return new Promise(o=>{this.getPlaceDetails(this.map,t.place_id).then(i=>{this.consoleLog("Got location details"),i.opening_hours&&(t.opening_hours=i.opening_hours),t.isOpen=i.opening_hours?.isOpen(),t.formattedPhoneNumber=i.formatted_phone_number,t.rating=Math.round(t.rating),this.consoleLog(i),o(t)})})}getPlaceDetails(t,o){return new Promise(i=>{var a={placeId:o,fields:["type","url","formatted_phone_number","opening_hours","utc_offset_minutes","business_status"]};new google.maps.places.PlacesService(t).getDetails(a,(r,p)=>{this.incrementApiCalls(),p==google.maps.places.PlacesServiceStatus.OK&&i(r)})})}findSpecificPlace(t,o){let i={query:t,fields:["name","geometry","place_id"]};new google.maps.places.PlacesService(this.map).findPlaceFromQuery(i,(s,r)=>{this.incrementApiCalls(),o(s,r)})}findSpecificPlaceNearLocation(t,o,i){let a={query:t,locationBias:{radius:500,center:o},fields:["name","geometry","place_id"]};new google.maps.places.PlacesService(this.map).findPlaceFromQuery(a,(r,p)=>{this.incrementApiCalls(),i(r,p)})}findNearbyLocation(t,o,i,a){let s={type:t,location:o,radius:i};new google.maps.places.PlacesService(this.map).nearbySearch(s,(p,g)=>{this.incrementApiCalls(),a(p,g)})}consoleLog(t,o){this.simpleLog&&(o?this.consoleLog(t,o):this.consoleLog(t))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=(()=>{return(n=d||(d={})).GooglePlaceData="PlaceData",n.GooglePlaceDetails="GooglePlaceDetails",n.GooglePlacePhoto="PlacePhoto",n.NearbySearch="NearbySearch",d;var n})();let U=(()=>{class n{constructor(t){this.http=t,this.keyDelimiter="(:##%io87|78oi%##:)",this.defaultDataExpiryDays=5,this.simpleLog=!1,this.verboseLog=!1}storeData(t,o,i){let a=Date.now();this.storeItem({type:t,identifier:o,dataTypeName:typeof i,data:i,storageDate:a})}storeItem(t){let o=this.createKey(t),i={data:t.data,storageDate:t.storageDate??Date.now()},a=JSON.stringify(i);this.consoleLogVerbose("storing item with key",o),this.consoleLogVerbose(i),localStorage.setItem(o,a)}createKey(t){let o="";return o=[t.identifier,t.type].join(this.keyDelimiter),o}fetchData(t,o,i){let s=this.createKey({type:t,identifier:o});this.consoleLogVerbose("retrieving item",s);let r=localStorage.getItem(s);if(null==r)return this.consoleLogVerbose("Nothing to return"),null;let p=JSON.parse(r),g=this.validateData(p);return null==g?(localStorage.removeItem(s),this.consoleLogVerbose("Nothing valid to return"),null):(this.consoleLog("Cached data retrieved",s),g)}validateData(t,o){let i=86400*(o??this.defaultDataExpiryDays),a=t.storageDate/1e3,s=Date.now()/1e3;return a<s-i?(this.consoleLogVerbose(`Cached data has expired by ${s-a-i} seconds`),null):(this.consoleLog(`Cached data Will expire in ${a+i-s} seconds`),t.data)}consoleLog(t,o){this.simpleLog&&(o?console.log(t,o):console.log(t))}consoleLogVerbose(t,o){this.verboseLog&&(o?console.log(t,o):console.log(t))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),I=(()=>{class n{constructor(t,o,i){this.http=t,this.googleMapsService=o,this.localStorageService=i,this.placesEndpoint="https://maps.googleapis.com/maps/api/place",this.apiKey="AIzaSyBDWU0h5aK-6Y0e2jfMMui_IrvDAfE21gU",this.findNearbyLocationOriginalCallback=()=>{},this.findNearbyLocationKey="",this.simpleLog=!1}setMap(t){this.map=t,this.googleMapsService.setMap(t)}getCachedPlaceDetails(t){let o=this.localStorageService.fetchData(d.GooglePlaceDetails,t.place_id,1.5);return t.cached=!0,o}populatePlaceDetails(t,o=!1){let i=null;o||(this.consoleLog("Trying to get cached place details..."),i=this.localStorageService.fetchData(d.GooglePlaceDetails,t.place_id,1.5)),i?(this.consoleLog("Got cached item"),t.cached=!0,Object.assign(t,i)):(o||this.consoleLog("Invalid or missing cached data, getting live data"),this.googleMapsService.populatePlaceDetails(t).then(a=>{let s=Object.assign({},a);s.gotDetails=!1,this.localStorageService.storeData(d.GooglePlaceDetails,s.place_id,s)}))}findNearbyLocation(t,o,i,a,s=!1){let r=null;this.findNearbyLocationKey=t+o.toString()+i,s||(this.consoleLog("Trying to get cached nearby results..."),r=this.localStorageService.fetchData(d.NearbySearch,this.findNearbyLocationKey,.5)),r?(this.consoleLog("Got cached item"),a(r,google.maps.places.PlacesServiceStatus.OK)):(s||this.consoleLog("Invalid or missing cached data, getting live data"),this.findNearbyLocationOriginalCallback=a,this.googleMapsService.findNearbyLocation(t,o,i,this.findNearbyLocationCallback.bind(this)))}findNearbyLocationCallback(t,o){this.localStorageService.storeData(d.NearbySearch,this.findNearbyLocationKey,t),this.findNearbyLocationOriginalCallback(t,o)}consoleLog(t,o){this.simpleLog&&(o?this.consoleLog(t,o):this.consoleLog(t))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.eN),e.LFG(L),e.LFG(U))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var G=c(6408),F=c(8639);function z(n,l){if(1&n&&(e.TgZ(0,"p",1),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.AsE(" ",t.placeResult.distanceMiles," (",t.placeResult.distanceTime," walk) ")}}function E(n,l){if(1&n&&(e.TgZ(0,"div",6),e._UZ(1,"p-rating",7),e.TgZ(2,"p"),e._uU(3),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.placeResult.rating)("readonly",!0)("cancel",!1),e.xp6(2),e.Oqu(t.placeResult.user_ratings_total)}}function q(n,l){if(1&n&&(e.TgZ(0,"p",1),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",null==t.placeResult.isOpen?"Possibly closed":t.placeResult.isOpen?"Open":"Closed"," ")}}function Y(n,l){if(1&n&&(e.TgZ(0,"p",1),e._UZ(1,"i",8),e._uU(2),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.placeResult.formattedPhoneNumber," ")}}function Q(n,l){if(1&n&&(e.TgZ(0,"p",9),e._UZ(1,"p-badge",10),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("value",t.placeResult.types[0])}}function H(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"p",11)(1,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.getDetails())}),e.qZA()()}}function B(n,l){1&n&&(e.TgZ(0,"p"),e._uU(1,"No rating"),e.qZA())}let Z=(()=>{class n{constructor(t,o){this.googleMapsService=t,this.googleMapsCachedService=o,this.gotCachedDetails=!1}ngOnInit(){this.loadData()}loadData(){}getDetails(){this.googleMapsCachedService.populatePlaceDetails(this.placeResult,!0),this.placeResult.gotDetails=!0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(L),e.Y36(I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-location-info"]],inputs:{placeResult:"placeResult"},decls:10,vars:8,consts:[["class","m-0",4,"ngIf"],[1,"m-0"],["class","flex gap-2 align-items-center",4,"ngIf","ngIfElse"],["class","m-0 pt-1",4,"ngIf"],["class","m-0 pt-3",4,"ngIf"],["noRating",""],[1,"flex","gap-2","align-items-center"],[3,"ngModel","readonly","cancel"],[1,"pi","pi-phone",2,"font-size","1rem"],[1,"m-0","pt-1"],["severity","secondary",3,"value"],[1,"m-0","pt-3"],["pButton","","type","button","label","more details...",1,"p-button-rounded","p-button-outlined","p-button-secondary",3,"click"]],template:function(t,o){if(1&t&&(e.YNc(0,z,2,2,"p",0),e.TgZ(1,"p",1),e._uU(2),e.qZA(),e.YNc(3,E,4,4,"div",2),e.YNc(4,q,2,1,"p",0),e.YNc(5,Y,3,1,"p",0),e.YNc(6,Q,2,1,"p",3),e.YNc(7,H,2,0,"p",4),e.YNc(8,B,2,0,"ng-template",null,5,e.W1O)),2&t){const i=e.MAs(9);e.Q6J("ngIf",o.placeResult.distanceMiles),e.xp6(2),e.hij(" ",o.placeResult.vicinity," "),e.xp6(1),e.Q6J("ngIf",o.placeResult.rating)("ngIfElse",i),e.xp6(1),e.Q6J("ngIf",o.placeResult.gotDetails),e.xp6(1),e.Q6J("ngIf",o.placeResult.formattedPhoneNumber),e.xp6(1),e.Q6J("ngIf","bakery"!=o.placeResult.types[0]),e.xp6(1),e.Q6J("ngIf",!o.placeResult.gotDetails)}},dependencies:[u.O5,h.Hq,G.iG,_.JJ,_.On,F.Ct],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}.container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:column}header[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-start}content[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-end}"]}),n})();const j=function(){return{"background-color":"#ffffff",color:"#ffffff"}};let K=(()=>{class n{constructor(t,o){this.dialogConfig=t,this.dialogRef=o}ngOnInit(){this.loadData()}loadData(){this.locationOverview=this.dialogConfig.data,this.markerData=this.locationOverview.marker,this.placeData=this.locationOverview.result,this.placeData.photos?.at(0),console.log(this.locationOverview)}onCloseClicked(){this.dialogRef.close()}openInMaps(t){return window.open(`https://www.google.com/maps/search/?api=1&query=${t.geometry.location?.lat??0},${t.geometry.location?.lng??0}&query_place_id=${t.place_id}`),!1}getDirections(){this.dialogRef.close(this.placeData)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b.S),e.Y36(b.E7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-location-overview-dialog"]],decls:16,vars:7,consts:[[1,"container","pt-3","pb-2","px-4"],[1,"gap-2"],["shape","square","size","large",3,"image"],[1,"font-bold","white-space-nowrap","flex-grow-1"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-text","p-button-plain",3,"click"],[3,"placeResult"],["icon","pi pi-directions","severity","info","label","Directions",3,"click"],["icon","pi pi-map","severity","info","label","Open in maps",3,"click"],["pButton","","pRipple","","type","button",1,"p-button-rounded","p-button-text","p-button-plain",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"header",1),e._UZ(2,"p-avatar",2),e.TgZ(3,"span",3),e._uU(4),e._UZ(5,"br"),e._uU(6),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.onCloseClicked()}),e.qZA()(),e.TgZ(8,"content"),e._UZ(9,"app-location-info",5),e.qZA(),e._UZ(10,"p-divider"),e.TgZ(11,"footer",1)(12,"p-button",6),e.NdJ("click",function(){return o.getDirections()}),e.qZA(),e.TgZ(13,"p-button",7),e.NdJ("click",function(){return o.openInMaps(o.placeData)}),e.qZA(),e.TgZ(14,"button",8),e.NdJ("click",function(){return o.onCloseClicked()}),e._uU(15," Ok"),e.qZA()()()),2&t&&(e.xp6(2),e.Akn(e.DdM(6,j)),e.Q6J("image",o.placeData.icon),e.xp6(2),e.hij(" ",o.placeData.name,""),e.xp6(2),e.hij("",o.placeData.milesFromMe,"m (direct)"),e.xp6(3),e.Q6J("placeResult",o.placeData))},dependencies:[h.Hq,h.zx,k.q,w.i,Z],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}.container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:column}header[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;padding-bottom:1rem;justify-content:flex-start}content[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-end}"]}),n})();var C=c(1892),V=c(805),$=c(1740),N=c(2174),W=c(5054);function X(n,l){if(1&n&&e._UZ(0,"p-image",8),2&n){const t=e.oxw();let o;e.Q6J("src",null!==(o=t.photoUrl)&&void 0!==o?o:t.placeResult.icon)("preview",!0)}}const ee=function(){return{"background-color":"#ffffff",color:"#ffffff"}};let te=(()=>{class n{constructor(){this.onGetDirections=new e.vpe,this.getPhotos=!1}ngOnInit(){this.loadData()}loadData(){if(this.getPhotos){let t=this.placeResult.photos?.at(0)??null;this.photoUrl=t?.getUrl()??""}}openInMaps(t){return window.open(`https://www.google.com/maps/search/?api=1&query=${t.geometry.location?.lat??0},${t.geometry.location?.lng??0}&query_place_id=${t.place_id}`),!1}getDirections(){this.onGetDirections.emit(this.placeResult)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-location-overview"]],inputs:{placeResult:"placeResult"},outputs:{onGetDirections:"onGetDirections"},decls:15,vars:8,consts:[[1,"container","pt-3","pb-2","px-4"],[1,"gap-2"],["shape","circle","size","large",3,"image"],[3,"src","preview",4,"ngIf"],[1,"font-bold","white-space-nowrap","flex-grow-1"],[3,"placeResult"],["icon","pi pi-directions","severity","info","label","Directions",3,"click"],["icon","pi pi-map","severity","info","label","Open in maps",3,"click"],[3,"src","preview"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"header",1)(2,"p-avatar",2)(3,"span"),e.YNc(4,X,1,2,"p-image",3),e.qZA()(),e.TgZ(5,"span",4),e._uU(6),e._UZ(7,"br"),e._uU(8),e.qZA()(),e.TgZ(9,"content"),e._UZ(10,"app-location-info",5),e.qZA(),e._UZ(11,"p-divider"),e.TgZ(12,"footer",1)(13,"p-button",6),e.NdJ("click",function(){return o.getDirections()}),e.qZA(),e.TgZ(14,"p-button",7),e.NdJ("click",function(){return o.openInMaps(o.placeResult)}),e.qZA()()()),2&t&&(e.xp6(2),e.Akn(e.DdM(7,ee)),e.Q6J("image",o.photoUrl?"":o.placeResult.icon),e.xp6(2),e.Q6J("ngIf",""!=o.photoUrl),e.xp6(2),e.hij(" ",o.placeResult.name,""),e.xp6(2),e.hij("",o.placeResult.milesFromMe,"m (direct) "),e.xp6(2),e.Q6J("placeResult",o.placeResult))},dependencies:[u.O5,h.zx,k.q,w.i,W.E,Z],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}.container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:column}header[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-start;padding-bottom:1rem}content[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{flex:0 0 50px;display:flex;align-items:center;justify-content:flex-end}"]}),n})();function oe(n,l){if(1&n&&e._UZ(0,"map-directions-renderer",11),2&n){const t=e.oxw();e.Q6J("directions",t.directionsResults)}}function ne(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"p-button",12),e.NdJ("onClick",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.fuckGreggs())}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",!t.mapReady||t.searchedThisLocation)}}function ie(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"p-button",13),e.NdJ("onClick",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.zoomAllResults())}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",!t.mapReady||t.markers.length<=0)}}function ae(n,l){if(1&n&&e._uU(0),2&n){const t=e.oxw().$implicit;e.AsE(" ",t.milesFromMe,"m - ",t.name," ")}}function se(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"p-accordionTab"),e.YNc(1,ae,1,2,"ng-template",14),e.TgZ(2,"app-location-overview",15),e.NdJ("onGetDirections",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.getDirectionsToResult(i))}),e.qZA()()}if(2&n){const t=l.$implicit;e.xp6(2),e.Q6J("placeResult",t)}}function le(n,l){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.AsE(" ",t.directionDistanceMiles," (",t.directionDistanceTime," walk) ")}}let re=(()=>{class n{constructor(t,o,i,a){this.dialogService=t,this.googleMapsCachedService=o,this.googleMapsService=i,this.mapDirectionsService=a,this.mapReady=!1,this.searchedThisLocation=!1,this.center=new google.maps.LatLng(-37.11127917893532,-12.287298806127833),this.zoom=10,this.removePoiLabelsStyle={featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},this.mapOptions={clickableIcons:!1,styles:[this.removePoiLabelsStyle]},this.markers=[],this.results=[],this.activeLocationTab=0,this.directionDistanceMiles="",this.directionDistanceTime="",this.simpleLog=!1}ngOnInit(){}onMapReady(t){this.googleMapsService.map=t,this.mapReady=!0,this.map=t,this.createSearchBox()}createSearchBox(){}userSearchedPlace(t){this.googleMapsService.findSpecificPlace(t.currentTarget.value,(i,a)=>{if(a===google.maps.places.PlacesServiceStatus.OK){let s=i[0],r=new google.maps.LatLng(s.geometry?.location?.lat()??0,s.geometry?.location?.lng()??0);this.createHomeMarker(r),this.center=r,this.fitBoundsToMarkers([s])}})}fitBoundsToMarkers(t){const o=new google.maps.LatLngBounds;t.forEach(i=>{i.geometry?.viewport?o.union(i.geometry.viewport):o.extend(i.geometry?.location??{lat:0,lng:0})}),this.map.fitBounds(o)}createDirectionInfo(){const t=document.getElementById("direction-info");-1==this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].indexOf(t)&&this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(t)}getDirections(t,o){const i={destination:o,origin:t,travelMode:google.maps.TravelMode.WALKING};return this.googleMapsService.incrementApiCalls(),this.mapDirectionsService.route(i).pipe((0,J.U)(a=>a.result))}getDirectionsToResult(t){this.getDirections(this.currentLocation,t.geometry.location).subscribe(o=>{if(o){let i=o.routes[0].legs[0];t.distanceMiles=((i.distance?.value??0)/1609).toFixed(1)+"m",t.distanceTime=i.duration?.text,this.openAccordionToResult(t),this.directionsResults=o,this.directionDistanceMiles=t.distanceMiles,this.directionDistanceTime=t.distanceTime??"",this.createDirectionInfo()}})}openAccordionToResult(t){this.activeLocationTab=this.results.indexOf(t)}fuckGreggs(){this.clearResults(),this.googleMapsCachedService.findNearbyLocation("bakery",this.currentLocation,2500,this.getPlacesResults.bind(this))}clearResults(){this.results=[],this.markers.forEach(t=>{t.setVisible(!1)}),this.markers=[]}getPlacesResults(t,o){if(this.consoleLog(t=t??[]),t=this.filterResults(t),this.consoleLog("Filtered results",t),o===google.maps.places.PlacesServiceStatus.OK){for(var i=0;i<t.length;i++){let s=t[i],r=!1,p=s.geometry.location??new google.maps.LatLng(0,0),g=this.googleMapsCachedService.getCachedPlaceDetails(s);null!=g&&Object.assign(s,g),s.milesFromMe=this.getCrowFlyMiles(this.currentLocation,p),this.createMarker(s,r)}t.sort((s,r)=>(s.milesFromMe??9999)>(r.milesFromMe??9999)?1:-1);let a=t[0].geometry.location??new google.maps.LatLng(0,0);this.center=a,this.getDirectionsToResult(t[0])}this.searchedThisLocation=!0}filterResults(t){let o=["supermarket","grocery_or_supermarket"],i=[];return t.forEach(a=>{let s=!0;null!=a.types&&a.types.length>0&&a.types.some(p=>o.includes(p))&&(s=!1),s&&i.push(a)}),i}createMarker(t,o=!1){let s=t.name.toLowerCase().includes("greggs"),p={url:s?"assets/icons/middleFinger48.png":"assets/icons/location128.png",scaledSize:new google.maps.Size(48,48),labelOrigin:new google.maps.Point(24,48*1.15)};var m=new google.maps.Marker({map:this.map,position:t.geometry.location,title:t.name,icon:p,label:{text:s?" ":`${t.name}`,color:"black",fontFamily:"Arial",fontSize:"20px",fontWeight:"bold"},animation:google.maps.Animation.DROP,clickable:!0,cursor:s?"not-allowed":""});s||(m.addListener("click",f=>{this.markerClicked(m,t)}),m.addListener("mouseover",f=>{this.markerEntered(m,t)}),m.addListener("mouseout",f=>{this.markerExited(m,t)})),this.markers.push(m),s||(this.results.push(t),this.results.sort((f,M)=>(f.milesFromMe??9999)>(M.milesFromMe??9999)?1:-1))}markerClicked(t,o){this.consoleLog(`CLICKED ${o.name}`),this.openLocationOverviewDialog(t,o)}markerEntered(t,o){this.setIconSize(t,64)}markerExited(t,o){this.setIconSize(t,48)}setIconSize(t,o){let i=t.getIcon();i.scaledSize=new google.maps.Size(o,o),i.size=new google.maps.Size(o,o),i.labelOrigin=new google.maps.Point(o/2,1.15*o),t.setIcon(i)}openLocationOverviewDialog(t,o){this.dynamicDialogRef=this.dialogService.open(K,{header:"",showHeader:!1,width:"50%",contentStyle:{overflow:"auto",padding:"0"},styleClass:"prime-dialog",baseZIndex:1e4,maximizable:!1,data:{marker:t,result:o}}),this.dynamicDialogRef.onClose.subscribe(i=>{i&&this.getDirectionsToResult(i)})}getCurrentLocation(){return new Promise(o=>{this.consoleLog("Requestion permission..."),navigator.geolocation&&navigator.geolocation.getCurrentPosition(i=>{if(i){if(null!=this.currentLocation&&this.currentLocation.lat()==i.coords.latitude&&this.currentLocation.lng()==i.coords.longitude)return o(!0);this.consoleLog("Got position",i),this.clearResults();let a=new google.maps.LatLng(i.coords.latitude,i.coords.longitude);return this.center=a,this.currentLocation=a,this.zoom=16,this.createHomeMarker(a),o(!0)}return this.consoleLog("Error getting position, no geolocation"),o(!1)},i=>(this.consoleLog("Unable to get position",i),o(!1)))})}createHomeMarker(t){if(this.currentLocation=t,this.searchedThisLocation=!1,this.currentLocationMarker)return void this.currentLocationMarker.setPosition(t);let a={url:"assets/icons/person128.png",scaledSize:new google.maps.Size(48,48),labelOrigin:new google.maps.Point(24,48*1.15)};var r=new google.maps.Marker({map:this.map,position:t,title:"You",icon:a,label:{text:"You",color:"black",fontFamily:"Arial",fontSize:"15px",fontWeight:"bold"},animation:google.maps.Animation.DROP,clickable:!0,cursor:"default"});this.currentLocationMarker=r}getCrowFlyMiles(t,o){let i=t.lat(),a=t.lng(),s="number"==(typeof o.lat).toLowerCase()?o.lat:o.lat(),r="number"==(typeof o.lng).toLowerCase()?o.lng:o.lng();var g=this.deg2rad(s-i),m=this.deg2rad(r-a),f=Math.sin(g/2)*Math.sin(g/2)+Math.cos(this.deg2rad(i))*Math.cos(this.deg2rad(s))*Math.sin(m/2)*Math.sin(m/2);return+(2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f))*6371/1.609).toFixed(2)}deg2rad(t){return t*(Math.PI/180)}zoomAllResults(){this.fitBoundsToMarkers(this.results)}consoleLog(t,o){this.simpleLog&&(o?this.consoleLog(t,o):this.consoleLog(t))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b.xA),e.Y36(I),e.Y36(L),e.Y36(C.Tx))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-normal-map"]],features:[e._Bn([b.xA])],decls:14,vars:12,consts:[["height","500px","width","900px",3,"center","zoom","options","mapInitialized"],[3,"directions",4,"ngIf"],[1,"flex","gap-2"],["id","pac-input","type","text","placeholder","Search location","pInputText","",1,"controls","w-25rem",3,"change"],["label","Get location via GPS",1,"my-2",3,"disabled","onClick"],["class","my-2","label","Fuck Greggs",3,"disabled","onClick",4,"ngIf"],["class","my-2","label","View all",3,"disabled","onClick",4,"ngIf"],[3,"activeIndex","activeIndexChange"],[4,"ngFor","ngForOf"],["id","direction-info",1,"text-primary","text-lg","font-bold","bg-black-alpha-70","p-2"],[4,"ngIf"],[3,"directions"],["label","Fuck Greggs",1,"my-2",3,"disabled","onClick"],["label","View all",1,"my-2",3,"disabled","onClick"],["pTemplate","header"],[3,"placeResult","onGetDirections"]],template:function(t,o){1&t&&(e.TgZ(0,"div")(1,"google-map",0),e.NdJ("mapInitialized",function(a){return o.onMapReady(a)}),e.YNc(2,oe,1,1,"map-directions-renderer",1),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"div",2)(5,"input",3),e.NdJ("change",function(a){return o.userSearchedPlace(a)}),e.qZA()(),e.TgZ(6,"div",2)(7,"p-button",4),e.NdJ("onClick",function(){return o.getCurrentLocation()}),e.qZA(),e.YNc(8,ne,1,1,"p-button",5),e.YNc(9,ie,1,1,"p-button",6),e.qZA(),e.TgZ(10,"p-accordion",7),e.NdJ("activeIndexChange",function(a){return o.activeLocationTab=a}),e.YNc(11,se,3,1,"p-accordionTab",8),e.qZA()(),e.TgZ(12,"div",9),e.YNc(13,le,2,2,"div",10),e.qZA()),2&t&&(e.xp6(1),e.Q6J("center",o.center)("zoom",o.zoom)("options",o.mapOptions),e.xp6(1),e.Q6J("ngIf",o.directionsResults),e.xp6(5),e.Q6J("disabled",!o.mapReady),e.xp6(1),e.Q6J("ngIf",o.currentLocation),e.xp6(1),e.Q6J("ngIf",o.currentLocation&&o.markers.length>0),e.xp6(1),e.Q6J("activeIndex",o.activeLocationTab),e.xp6(1),e.Q6J("ngForOf",o.results),e.xp6(1),e.Udp("display",o.directionDistanceMiles?"block":"none"),e.xp6(1),e.Q6J("ngIf",o.directionDistanceMiles))},dependencies:[u.sg,u.O5,V.jx,h.zx,C.b6,C.jG,$.o,N.UQ,N.US,te]}),n})();function ce(n,l){if(1&n&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.hij("Server: ",t.pingResponse,"")}}const pe=[{path:"",component:(()=>{class n{constructor(t,o){this.router=t,this.normalServices=o,this.knobValue=69,this.pingSuccess=!1,this.pingResponse=""}ngOnInit(){this.changeKnobValueAfterSeconds(0)}pingServer(){this.normalServices.ping().subscribe({next:t=>{this.pingSuccess=!0,this.pingResponse=t.message},error:t=>{console.log("Ping failure"),this.pingSuccess=!1}})}changeKnobValueAfterSeconds(t){var o=this;return function O(n){return function(){var l=this,t=arguments;return new Promise(function(o,i){var a=n.apply(l,t);function s(p){S(a,o,i,s,r,"next",p)}function r(p){S(a,o,i,s,r,"throw",p)}s(void 0)})}}(function*(){yield new Promise(i=>setTimeout(i,1e3*t)),o.knobValue=(o.knobValue+1)%100,o.changeKnobValueAfterSeconds(.3)})()}randomInt(t,o){return Math.floor(Math.random()*(o-t+1)+t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(y.F0),e.Y36(A))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:23,vars:2,consts:[[1,"p-2"],["header","Fuck Greggs",1,"p-2"],[1,"pi","pi-spin","pi-user",2,"font-size","1rem","color","red"],["header","Map",1,"p-2"],["header","Also",1,"p-2"],[1,"flex"],[3,"ngModel","ngModelChange"],[4,"ngIf"],["header","Nav",1,"p-2"],[1,"flex","gap-2"],["routerLink","../peaches"],["label","Peaches"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"p-card",1)(2,"p"),e._uU(3," You heard me "),e.qZA(),e.TgZ(4,"p"),e._uU(5,"The "),e._UZ(6,"i",2),e._uU(7," son "),e._UZ(8,"i",2),e._uU(9," of the founder may or may not be a convicted "),e.TgZ(10,"b"),e._uU(11,"[REDACTED]"),e.qZA()()(),e.TgZ(12,"p-card",3),e._UZ(13,"app-normal-map"),e.qZA(),e.TgZ(14,"p-card",4)(15,"p",5),e._uU(16," Look at my knob: "),e.TgZ(17,"p-knob",6),e.NdJ("ngModelChange",function(a){return o.knobValue=a}),e.qZA()(),e.YNc(18,ce,3,1,"div",7),e.qZA(),e.TgZ(19,"p-card",8)(20,"div",9)(21,"a",10),e._UZ(22,"p-button",11),e.qZA()()()()),2&t&&(e.xp6(17),e.Q6J("ngModel",o.knobValue),e.xp6(1),e.Q6J("ngIf",o.pingSuccess))},dependencies:[u.O5,y.yS,_.JJ,_.On,T.Z,h.zx,D.lH,re]}),n})()}];let ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[y.Bz.forChild(pe),y.Bz]}),n})();var me=c(4949);let de=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,ge,u.ez,_.u5,T.d,h.hJ,D.dJ,y.Bz,me.S]}),n})()}}]);