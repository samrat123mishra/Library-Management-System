var app = angular.module('library', ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("login", {
        name: 'login',
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl',
        resolve:{
            loginData:['$q', '$http', function ($q, $http) {
                var deferred = $q.defer();
                $http.get('scripts/authenticate.json')
                    .then(function (response) {
                        deferred.resolve(response.data);
                    })
                    .catch(function (error) {
                        deferred.reject(error);
                    });
                return deferred.promise;
            }]
        }
    });
    $stateProvider.state("bookShelf", {
        name: 'bookShelf',
        url: '/bookShelf',
        templateUrl: 'templates/bookshelf.html',
        controller: 'bookShelf',
          resolve:{
            bookShelfData:['$q', '$http', function ($q, $http) {
                var deferred = $q.defer();
                $http.get('scripts/bookshelf.json')
                    .then(function (response) {
                        deferred.resolve(response.data);
                    })
                    .catch(function (error) {
                        deferred.reject(error);
                    });
                return deferred.promise;
            }]
        }
    });
    $stateProvider.state("book", {
        name: 'book',
        url: '/bookShelf/book/:bookid',
        templateUrl: 'templates/book.html',
        controller: 'book',
        resolve: {
            currentBook: ['$q', '$http', '$stateParams', function ($q, $http, $stateParams) {
                var deferred = $q.defer();
                $http.get('scripts/bookshelf.json')
                    .then(function (response) {
                        response.data.forEach(function (bookData) {
                            if (bookData.bookid === $stateParams.bookid) {
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

