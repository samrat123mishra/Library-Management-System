app.controller('bookShelf', ['$scope', 'Service', function ($scope, Service) {
     $scope.currentBookData =Service.getCurrentBook();
    Service.getbookData().then(function (data) {
        $scope.bookData = data;
    });
    $scope.currentBook = function (book) {
        Service.setCurrentBook(book);
    };
}]);
app.service("Service", ['$http', '$q', function ($http, $q) {
    var currentBook;
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
        setCurrentBook: function(book){
            currentBook = book;
        },
        getCurrentBook: function(){
            return currentBook;
        }
    };
}]);
