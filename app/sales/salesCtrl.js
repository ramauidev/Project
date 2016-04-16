(
    function()
    {
        'use strict';
        function salesCtrlFun($scope,salesSvc)
        {
            function init()
            {
                salesSvc.getSalesData()
                    .then(function(response){
                    $scope.salesInfo=response.data.sales;
                }).catch(function(errorResponse){
                    console.log(error);
                });
            }
        }
        angular.module("eKart.sales")
               .controller('salesCtrl',['$scope','salesSvc',salesCtrlFun]);
    }
)();