app.controller('bookShelf', ['$scope', 'Service', function ($scope, Service) {
    Service.getbookData().then(function (data) {
        $scope.bookData = data;
    });
    $scope.currentBook = function (book) {
        Service.setCurrentBook(book);
    };
}]);
app.service("Service", ['$http', '$q', function ($http, $q) {
    this.currentBook;
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
        },
        setCurrentBook: function (book) {
            this.currentBook = book;
        },
        getCurrentBook: function () {
            return this.currentBook;
        }
    };
}]);
