import angular from "angular";
import "./public/static/css/bootstrap.css"

angular.module('angular1.x.demo', []).controller("myContro", function($scope){
   $scope.name = 'John Doe';
}).directive('myDire', function(){
    return {
        restrict : 'M',
        template : '<h1>自定义指令</h1>'
    }
})