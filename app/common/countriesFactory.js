(
    function(){
        angular.module('eKart.common')
               .factory('countriesFact',['$http',function($http){
                   var countries;
                   
                   return{
                        getCountries : function(){
                           return $http.get('app/data/countries.json'); 
                        }   
                   };
               }]);
    }
)();