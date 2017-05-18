app.controller('book', ['$scope','Service', 'currentBook', function ($scope, Service, currentBook) {
    // $scope.bookid = book;
    $scope.currentBookData = Service.getCurrentBook();
    Service.getbookData().then(function (data) {
        $scope.bookData = data;
    });
}]);

