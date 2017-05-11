app.controller('bookShelf', ['$scope', 'bookShelfService', function ($scope, bookShelfService) {
    $scope.currentBookData = bookShelfService.getCurrentBook();
    bookShelfService.getBookShelfData().then(function (data) {
        $scope.bookData = data;
    });
    $scope.currentBook = function (book) {
        bookShelfService.setCurrentBook(book);
    };
}]);

