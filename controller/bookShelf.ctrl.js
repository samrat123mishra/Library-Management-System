app.controller('bookShelf', ['$scope','currentBookService','bookShelfData', function ($scope,currentBookService,bookShelfData) {
    $scope.bookData = bookShelfData;
    $scope.currentBook = function (book) {
        currentBookService.setCurrentBook(book);
    };
}]);

