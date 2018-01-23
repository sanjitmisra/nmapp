var app = angular.module('myApp', ['ngMaterial']);

/*
app.controller('productsController', function($scope, $mdDialog, $mdToast, productsFactory){
 
    // read products
    $scope.readProducts = function(){
 
        // use products factory
        productsFactory.readProducts().then(function successCallback(response){
            $scope.products = response.data.records;
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
 
    }
     
    // showCreateProductForm will be here
     
    // DialogController will be here
});

app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost/fullapp/api/product/read.php'
        });
    };
     
    // createProduct will be here
     
    return factory;
});
*/