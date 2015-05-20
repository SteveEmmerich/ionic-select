//By Rajeshwar Patlolla
//https://github.com/rajeshwarpatlolla

"use strict";
angular.module('ionic-select', ['ionic', 'ionic-select.templates'])
    .directive('ion-select', ['$ionicPopup', function ($ionicPopup) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                iSelected: '=selected',
                iCollection: '=collection',
                iTitle: '=title'

            },
            link: function (scope, element, attrs) {

                scope.collection = [];
                iCollection.forEach(function(item)
                {
                    var selected = false;
                    if(iSelected === item)
                    selected = true;
                    collection.push({name:item, selected:selected});
                });
                scope.collection = collection;
                scope.submitted = false;
                scope.selection = scope.iSelected;
                $ionicPopup.show({
                    templateUrl: 'select-modal.html',
                    title: '<strong>Select {{title}}</strong>',
                    subTitle: '',
                    scope: scope,
                    buttons: [
                        {text: 'Close'},
                        {
                            text: 'Select',
                            type: 'button-positive',
                            onTap: function (e) {
                                scope.submitted = true;
                                scope.collection.forEach(function(item)
                                {
                                    if(item.selected)
                                        scope.selection = item.name;
                                    scope.selected = true;
                                    return false;
                                });
                                if (scope.selected === true) {
                                    scope.iSelected = angular.copy(scope.selection);
                                } else {
                                    e.preventDefault();
                                }
                            }
                        }
                    ]
                })
            }
        }
    }
]);
