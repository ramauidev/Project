(
    function(){
        angular.module('eKart.common')
               .factory('statesFact',['$http',function($http){
                   return{
                     getStates:function(){
                         return $http.get('/app/data/states.json');
                     }  
                   };
               }]);
    }
)();
