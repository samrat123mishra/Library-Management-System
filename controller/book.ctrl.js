app.controller('book', ['$scope', 'rentBookService', 'currentBook', function ($scope, rentBookService, currentBook) {
    $scope.currentBookData = currentBook;
    $scope.currentBookRent = function (book) {
        rentBookService.setCurrentBook(book);
    };
}]);

