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
            currentBook: ['$q','$http','$stateParams', function($q, $http, $stateParams) {
                 var deferred = $q.defer();
                $http.get('scripts/bookshelf.json')
                 .then(function (response) {
                     response.data.forEach(function(bookData) {
                        if(bookData.bookid === $stateParams.bookid){
                            deferred.resolve(bookData)
                        }
                     })
                   
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
            }]
        }
    });
       $stateProvider.state("book.rentBook", {
       views: {
        "book.rentBook": {
          name: 'rentBook',  
          templateUrl: 'templates/rentbook.html',
          controller: 'rentBook'
        }
       }
    });
    $urlRouterProvider.otherwise("/login");
});

