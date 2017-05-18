app.controller('loginCtrl', ['$scope', 'LoginService', 'loginData', function ($scope, LoginService, loginData) {
    $scope.loginDetails = loginData;
    $scope.userName;
    $scope.passWord;
    $scope.get = function () {
        LoginService.authenticate($scope.userName, $scope.passWord, $scope.loginDetails);
    };

}]);

