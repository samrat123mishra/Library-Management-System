describe('BookController Test', function () {
    var ctrl, controller, rootScope, scope;
    beforeEach(function () {
        angular.mock.module('library', function ($provide) {
            $provide.service('currentBook', function () {
                return {
                    bookname: 'English Language'
                }
            });
        });
    });
    beforeEach(angular.mock.inject(function ($rootScope, $controller, currentBook) {
        scope = $rootScope.$new();
       // rootScope = $rootScope;
        controller = $controller;
        // while creating the controller we have to inject the dependencies too.
        ctrl = controller('book',
            { $scope: scope });
    }));
    // now the real thing: test spec
    // it('overflowHideBody check', function () {
    //     scope.changeOverflowScroll();
    //     expect(rootScope.overflowHideBody).toBe(false);
    // })
    it('check currentBook Details', function () {
        expect(scope.currentBookData.bookname).toBe('English Language');
        //expect(scope.ticketObj.seat).toBe(true);
    })
});