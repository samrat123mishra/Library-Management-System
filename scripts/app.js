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
        url: '/bookshelf/book/:bookid',
        templateUrl: 'templates/book.html',
        controller: 'book',
        resolve: {
            bookid: ['$stateParams', '$q', 'Service', function ($stateParams, $q, Service) {
                var curBookId = Service.getCurrentBook();
                return curBookId.bookid;
            }]
        }
    });
    $urlRouterProvider.otherwise("/login");
});

