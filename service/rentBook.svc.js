app.service("rentBookService", ['$http', '$q', function ($http, $q) {
    this.currentBook;
    return {
        setCurrentBook: function (book) {
            this.currentBook = book;
        },
        getCurrentBook: function () {
            return this.currentBook;
        }
    };
}]);