
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
    $scope.showCreateProductForm = function(event){
        $mddialog.show({
            controller: DialogController,
            templateUrl: 'ui/products/create_product.html',    
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true
        });
    }
     
    $scope.createProduct = function(){
        productsFactory.createProducts($scope).then(function successCallback(response){

            //Show success message
            $scope.showToast(response.data.message);

            $scope.readProducts();

            $scope.cancel();

            $scope.clearProductForm();
        
        }, function errorCallback(response){
            $scope.showToast("Error creating product!");
        });
    }
    

    // Clear Product Form
    $scope.clearProductForm = function(){
        $scope.id="";
        $scope.name ="";
        $scope.description = "";
        $scope.price = "";
    }

    // Toast Message
    $scope.showToast = function(message){
        $mdToast.show(
            .textContent(message)
            .hideDelay(3000)
            .position("top right")
            );
    }

    // DialogController will be here
    function DialogController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }
});