var myApp = angular.module('myApp', ['ngSanitize']);


myApp.controller('AppController', ['$http', function($http) {
  console.log('app controller running');
  var self = this;

  self.message = "Welcome to your new Chrome Extension!";

  self.data = '';

  self.newData = '';

  self.requestData = function(){
    $http({
      method: 'GET',
      url: 'http://localhost:5555/'
    }).then(function(response){
      console.log(response.data);
      self.data = response.data;
    });
  };

  self.sendData = function(){
    $http({
      method: 'POST',
      url: 'http://localhost:5555/'
    }).then(function(response){
      console.log(response.data);

    });
  };
}]);
