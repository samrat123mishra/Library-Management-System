app.controller('rentBook', ['$scope', 'UserService', 'localStorageService', 'rentBookDetails', function ($scope, UserService, localStorageService, rentBookDetails) {
    $scope.arr = [];
    const a = 3;
    $scope.currentRentBookData = rentBookDetails;
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

