var app = angular.module('library', ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("loginPage", {
        name: 'login',
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    });
      $stateProvider.state("bookShelf", {
        name: 'bookShelf',
        url: '/bookShelf',
        templateUrl: 'templates/bookshelf.html',
        controller: 'bookShelf'
    });
     $stateProvider.state("book", {
        name: 'book',
        url: '/bookshelf/book/:bookId',
        templateUrl: 'templates/book.html',
        controller: 'bookShelf'
    //     resolve : {
    //    book: [
    //         '$stateParams',
    //         '$q',
    //         'bookService'
    //         function($stateParams, $q, bookService) {
    //                 return book;// this book u need to inject in bookCtrl as a dependency
    //         }]
    //     }
    });
    $urlRouterProvider.otherwise("/login");
});

