app.service("localStorageService", ['$http', '$q', function ($http, $q) {
    return {
        setCurrentBook: function (book) {
            this.currentBook = book;
        },
        getCurrentBook: function () {
            return this.currentBook;
        },
        set: function (userName, obj) {
            var bookStr = JSON.stringify(obj);
            localStorage.setItem(userName, bookStr);
            alert('Your book has been rented');
        },
        get: function (userName) {
            return localStorage.getItem(userName);

        }
    };
}]);