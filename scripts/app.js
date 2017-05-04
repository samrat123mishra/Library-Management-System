var app = angular.module('library', ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("loginPage", {
        name: 'login',
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'validationController'
    });
      $stateProvider.state("bookShelf", {
        name: 'bookShelf',
        url: '/bookShelf',
        templateUrl: 'templates/bookshelf.html',
        controller: 'bookShelf'
    });
     $stateProvider.state("book", {
        name: 'book',
        url: '/bookShelf/book',
        templateUrl: 'templates/book.html',
        controller: 'bookShelf'
    });
    $urlRouterProvider.otherwise("/login");
});

