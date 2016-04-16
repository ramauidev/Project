(
    function()
    {
        angular.module('eKart.sales')
               .service('salesSvc',['$http',function($http){
                   this.getSalesData = function()
                   {
                       return $http.get('/app/data/sales.json');
                   }
               }]);
    }
)();
