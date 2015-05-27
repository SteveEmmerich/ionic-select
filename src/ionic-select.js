//By Steve Emmerich
//https://github.com/steveemmerich

'use strict';
angular.module('ionic-select', ['ionic', 'ionic-select.templates'])
    .directive('ionSelect', ['$ionicPopup', '$log', function ($ionicPopup, $log)
    {
        return {
            restrict: 'AE',
            replace: true,
            scope: 
            {
                iSelected: '=selected',
                iCollection: '=collection',
                iTitle: '=title'
                // TODO: add multiple and single item support
            },
            link: function (scope, element) 
            {
                $log.debug('in link function');
                $log.debug('vars:' + JSON.stringify([scope.iCollection, scope.iTitle, scope.iSelected]));
                scope.collection = [];
                scope.iCollection.forEach(function(item)
                {
                    var selected = false;
                    if(scope.iSelected === item)
                    {
                        selected = true;
                    }
                    scope.collection.push({name: item, selected: selected});
                });
                scope.onChange = function(index)
                {
                    for( var i = 0; i < scope.collection.length; ++i)
                    {
                        if(i === index)
                            continue;

                        scope.collection[i].selected = false;
                    }
                }

                //scope.collection = collection;
                scope.submitted = false;
                scope.selection = scope.iSelected;
                element.on('click', function () 
                {
                    $log.debug('button clicked');
                    $log.debug('vars:' + JSON.stringify([scope.collection, scope.selection, scope.iSelected]));
                    $ionicPopup.show(
                    {
                        templateUrl: 'select-modal.html',
                        title: '<strong>Select {{scope.iTitle}}</strong>',
                        subTitle: '',
                        scope: scope,
                        buttons: [
                            {text: 'Close'},
                            {
                                text: 'Select',
                                type: 'button-positive',
                                onTap: function (e) 
                                {
                                    scope.submitted = true;
                                    scope.collection.forEach(function(item)
                                    {
                                        if(item.selected)
                                        {
                                            scope.selection = item.name;
                                        }
                                        scope.selected = true;
                                        return false;
                                    });
                                    if (scope.selected === true) 
                                    {
                                        scope.iSelected = angular.copy(scope.selection);
                                    } 
                                    else 
                                    {
                                        e.preventDefault();
                                    }
                                }
                            }
                        ]
                    });
                });
            }
        };
    }
]);
