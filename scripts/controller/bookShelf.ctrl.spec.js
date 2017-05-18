describe('BookShelfController Test', function () {
    var ctrl, controller, rootScope, scope;
    beforeEach(function () {
        angular.mock.module('library', function ($provide) {
            $provide.service('bookShelfData', function () {
                return {
                    bookname: 'English Language'
                }
            });
            $provide.service('currentBookService', function () {
                this.book={};
                return {
                    setCurrentBook: function(book){
                         this.book= book;
                    }
                }
            });
        });
    });
    beforeEach(angular.mock.inject(function ($rootScope, $controller, bookShelfData,currentBookService) {
        scope = $rootScope.$new();
       // rootScope = $rootScope;
        controller = $controller;
        // while creating the controller we have to inject the dependencies too.
        ctrl = controller('bookShelf',
            { $scope: scope });
    }));
    
    it('check BookShelf Data  Details', function () {
        expect(scope.bookData.bookname).toBe('English Language');
        //expect(scope.ticketObj.seat).toBe(true);
    })
    // now the real thing: test spec
    it('set current book function check', function () {
        // scope.changeOverflowScroll();
        scope.currentBook({bookName: 'abc'});
        expect(currentBookService.bookName).toBe('abc');
    })
});