app.controller('bookShelf', ['$scope', 'bookShelfService', function ($scope, bookShelfService) {
     $scope.currentBookData = bookShelfService.getCurrentBook();
    bookShelfService.getbookData().then(function (data) {
        $scope.bookData = data;
    });
    $scope.currentBook = function (book) {
        bookShelfService.setCurrentBook(book);
    };
}]);

