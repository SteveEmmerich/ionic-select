"use strict";angular.module("ionic-select",["ionic","ionic-select.templates"]).directive("ionSelect",["$ionicPopup","$log",function(e,t){return{restrict:"AE",replace:!0,scope:{iSelected:"=selected",iCollection:"=collection",iTitle:"=title"},link:function(i,c){t.debug("in link function"),t.debug("vars:"+JSON.stringify([i.iCollection,i.iTitle,i.iSelected])),i.collection=[],i.iCollection.forEach(function(e){var t=!1;i.iSelected===e&&(t=!0),i.collection.push({name:e,selected:t})}),i.onChange=function(e){for(var t=0;t<i.collection.length;++t)t!==e&&(i.collection[t].selected=!1)},i.submitted=!1,i.selection=i.iSelected,c.on("click",function(){t.debug("button clicked"),t.debug("vars:"+JSON.stringify([i.collection,i.selection,i.iSelected])),e.show({templateUrl:"select-modal.html",title:"<strong>Select {{scope.iTitle}}</strong>",subTitle:"",scope:i,buttons:[{text:"Close"},{text:"Select",type:"button-positive",onTap:function(e){i.submitted=!0,i.collection.forEach(function(e){return e.selected&&(i.selection=e.name),i.selected=!0,!1}),i.selected===!0?i.iSelected=angular.copy(i.selection):e.preventDefault()}}]})})}}}]);
