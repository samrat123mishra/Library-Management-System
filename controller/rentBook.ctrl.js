app.controller('rentBook', ['$scope', 'currentBookService', 'UserService', 'localStorageService', function ($scope, currentBookService, UserService, localStorageService) {
    $scope.arr = [];
    const a = 3;
    $scope.currentRentBookData = currentBookService.getCurrentBook();
    $scope.setRentBook = function (rentBookDetails) {
        $scope.uname = UserService.getUser();
        var availBookDetails = localStorageService.get($scope.uname);
        if (availBookDetails) {
            $scope.arr = JSON.parse(availBookDetails);
            if ($scope.arr.length >= a) {
                alert('You canot avail more than 3 books');
                return;
            }
            for (var i = 0; i < $scope.arr.length; i++) {
                if ($scope.arr[i].bookname === rentBookDetails.bookname) {
                    alert('You have already rented this book');
                    return;
                }
            }
            $scope.arr.push(rentBookDetails);
        } else {
            $scope.arr.push(rentBookDetails);
        }
        localStorageService.set($scope.uname, $scope.arr);
    }

}]);

