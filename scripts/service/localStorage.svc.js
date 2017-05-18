app.service("localStorageService", ['$http', '$q', function ($http, $q) {
        this.setCurrentBook = function (book) {
            this.currentBook = book;
        },
        this.getCurrentBook = function () {
            return this.currentBook;
        },
        this.set = function (userName, obj) {
            var bookStr = JSON.stringify(obj);
            localStorage.setItem(userName, bookStr);
            alert('Your book has been rented');
        },
        this.get = function (userName) {
            return localStorage.getItem(userName);

    };
}]);