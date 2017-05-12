app.controller('bookShelf', ['$scope', 'bookShelfService','rentBookService', function ($scope, bookShelfService,rentBookService) {
    $scope.currentBookData = rentBookService.getCurrentBook();
    bookShelfService.getBookShelfData().then(function (data) {
        $scope.bookData = data;
    });
    $scope.currentBook = function (book) {
        rentBookService.setCurrentBook(book);
    };
}]);

