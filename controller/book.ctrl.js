app.controller('book', ['$scope', 'currentBook', function ($scope, currentBook) {
    $scope.currentBookData = currentBook;
    // Service.getbookData().then(function (data) {
    //     $scope.bookData = data;
    // });
}]);

