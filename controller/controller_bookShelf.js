app.controller('bookShelf', ['$scope', 'Service', function ($scope, dataService) {
    $scope.currentBookData = {};
    dataService.getbookData().then(function (data) {
        $scope.bookData = data;
    });
    $scope.currentBook = function (book) {
        console.log(book);
        $scope.currentBookData = book;
        console.log( $scope.currentBookData);
    };
}]);
app.service("Service", ['$http', '$q', function ($http, $q) {
    return {
        getbookData: function () {
            var deferred = $q.defer();
            $http.get('scripts/bookshelf.json')
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }
    };
}]);
