app.controller('book', ['$scope', 'rentBookService','currentBook', function ($scope, rentBookService, currentBook) {
    $scope.currentBookData = currentBook;
    rentBookService.getbookData().then(function (data) {
        $scope.bookData = data;
    });
      $scope.currentBookRent = function (book) {
        rentBookService.setCurrentBook(book); 
    };
}]);

