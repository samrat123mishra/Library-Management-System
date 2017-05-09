app.service("localStorageService", ['$http', '$q', function ($http, $q) {
    return {
        // getBookshelf
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
        },
        set: function(userName,obj){
            var bookStr = JSON.stringify(obj);
        localStorage.setItem(userName, bookStr);
        },
        get:function(){

        }
    };
}]);