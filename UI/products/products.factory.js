app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: 'https://morning-brook-16204.herokuapp.com/API/product/read.php'
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
            url: 'https://morning-brook-16204.herokuapp.com/API/productgit/create.php'
        });

    };
     
    return factory;
    });