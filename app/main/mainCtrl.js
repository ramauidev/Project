(
    function(){
        'use strict';
        angular.module('eKart')
               .controller('mainCtrl',['$scope',function($scope){
                   $scope.content = "I am the content";
                   $scope.brandname = "e-Kart";  
                   $scope.handleClick=function(){
                       $scope.content="I am the new content";
                   }
                   $scope.loadContent=function(type){
                    if(type=="Register")
                        $scope.contentUrl="/app/register/register.tpl.html";
                    if(type=="Login")
                        $scope.contentUrl="/app/login/login.tpl.html";
                   }
               }]);
    }
)();
