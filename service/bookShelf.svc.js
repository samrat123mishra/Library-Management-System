app.service("bookShelfService", ['$http', '$q', function ($http, $q) {
    this.currentBook;
    return {
        getBookShelfData: function () {
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