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
    factory.createProduct = function($scope){
            return $http({
            method: 'POST',
            data: {
                'name': $scope.name,
                'description': $scope.description,
                'price': $scope.price,
                'category_id': 1
            },
            url: 'http://localhost/fullapp/api/product/create.php'
        });
        
    };
     
    return factory;
    }
});