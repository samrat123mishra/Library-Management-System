app.controller('rentBook', ['$scope', 'rentBookService','dataService','localStorageService', function ($scope, rentBookService,dataService, localStorageService) {
    //  $scope.rentBookArr = [];
    //     $scope.obtainedRentBookArr = [];
    $scope.arr=[];
    $scope.currentRentBookData = rentBookService.getCurrentBook();
    rentBookService.getbookData().then(function (data) {
        $scope.bookData = data;
    });
    $scope.setRentBook = function(rentBookDetails){
        $scope.uname = dataService.getUser();
        
        $scope.arr.push(rentBookDetails);
        // $scope.rentBookArr.push(rentBookDetails);
         localStorageService.set($scope.uname,$scope.arr);
        // $scope.obtainedRentBookArr = localStorageService.get("rentBooks");
        // console.log(obtainedRentBookArr); 
    }
    
}]);

