##Introduction:

This is a `ionic-selection` bower component which can be used with any Ionic framework's application.

TODO: make demo
[View Demo](http://steveemmerich.github.io/SelectionModalForIonicFramework/demo/ "Demo") 


##Prerequisites.

1) node.js, bower and gulp.

##How to use:

1) In your project repository install the ionic select modal using bower

    bower install ionic-select --save
    

Give the path of  `style.css, templates.js and ionic-select.js` in your `index.html` file.

````html
<link href="lib/ionic-select/dist/style.css" rel="stylesheet"> 
<!-- path to ionic/angularjs js -->
<script src="lib/ionic-select/dist/templates.js"></script>
<script src="lib/ionic-select/dist/ionic-select.js"></script>
````    
    
3) In your application module inject the dependency `ionic-select`,
````javascript
angular.module('mainModuleName', ['ionic', 'ionic-select']){
 //
}
````

4) Use the below format in your template's corresponding controller

````javascript
$scope.collection = ['item1Name', 'item2Name'];
$scope.selected = collection[0];
$scope.title = "items";
````

5) Then use the below format in your template / html file

````html
<ion-select iCollection="collection" iSelected="selectedObj" iTitle="title" >
    <button class="button button-block button-positive"> {{ selectedObj }} </button>
</ion-select>
````


a) `ion-select` is the directive, to which we can pass required vales.

b) `iCollection` takes an array. If we don't pass any value, the default value will be `[]`.

c) `iSelected` takes an object. this object is the currently selected item and will be overwritten with the new selection.

d) `iTitle` takes a string. This is the name of the collection. eg. 'categories' or 'fish'.

Tested with `angular#1.3.6` and `ionic#1.0.0`. 

##Screen Shots: TODO: take screen shots

Once you are successfully done with the above steps, you should be able to see the below screen shots.
I have used two buttons here. 

The first screen shot shows only the buttons before clicking on them.
Once you click on the button you should see the second screen shot.
 

##Versions:

### 1) v0.0.0
The whole select functionality has been implemented, and can be installed with  `bower install ionic-select --save`

### 1) v0.0.3
Bug Fixes.`


##License:
MIT

##Contact:
gmail : sdemmer@gmail.com

github : https://github.com/steveemmerich
