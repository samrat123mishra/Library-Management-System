app.controller('book', ['$scope', 'Service',function ($scope, Service) {
    // $scope.bookid = book;
    $scope.currentBookData = Service.getCurrentBook();
    Service.getbookData().then(function (data) {
        $scope.bookData = data;
    });
}]);

