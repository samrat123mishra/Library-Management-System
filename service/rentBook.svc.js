app.service("rentBookService", ['$http', '$q', function ($http, $q) {
    this.setCurrentBook = function (book) {
        this.currentBook = book;
    },
        this.getCurrentBook = function () {
            return this.currentBook;
        }
}]);


