app.controller('loginCtrl', ['$scope', 'LoginService','loginData', function ($scope, LoginService,loginData) {
   $scope.loginDetails = loginData;
    $scope.get = function () {
        var userName = document.getElementById('user').value;
        var passWord = document.getElementById('pass').value;
        LoginService.authenticate(userName, passWord,$scope.loginDetails);
    };
    
}]);

