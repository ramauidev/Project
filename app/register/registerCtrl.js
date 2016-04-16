(
    function(){
        'use strict';
        function regCtrlFun($scope,countriesFact,statesFact)
        {
            $scope.registerUser={
              firstName:"",
                lastName:"",
                phoneNumber:"",
                email:"",
                age:"",
                gender:"",
                address:{
                    country:"",
                    state:"",
                    city:"",
                    streetNumber:"",
                    zipcode:""
                }   
            };
            
            
            countriesFact.getCountries()
                .success(function(response){
                $scope.countries = response.countries; 
                }).error(function(response){
                    console.log(response);
                });
            
            statesFact.getStates()
            .then(function(response){
                $scope.statesFromJson = response.data.states;
            })
            
            $scope.register=function()
            {   
                $scope.registerUser.address.country=$scope.selectedCountry.code;
                $scope.registerUser.address.state=$scope.selectedState.name;
                $scope.isRegister=true;
                console.log($scope.registerUser);
            }
            
            $scope.countryChanged=function()
            {
                $scope.states=[];
               angular.forEach($scope.statesFromJson,function(item){
                   if(item.countryCode==$scope.selectedCountry.code)
                       $scope.states.push(item);
               });
            } 
            
        }
        angular.module("eKart.register")
               .controller('registerCtrl',['$scope','countriesFact','statesFact',regCtrlFun]);
    }
    
)();