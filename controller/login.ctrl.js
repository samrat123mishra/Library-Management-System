app.controller('loginCtrl', ['$scope', 'dataService', '$state', function ($scope, dataService, $state) {
    dataService.getData().then(function (data) {
        $scope.loginData = data;
    });
    $scope.get = function () {
        var userName = document.getElementById('user').value;
        var passWord = document.getElementById('pass').value;
        $scope.authenticate(userName, passWord);
        document.getElementById('user').value = '';
        document.getElementById('pass').value = '';
    };
    $scope.authenticate = function (uname, pword) {
        for (var i = 0; i < $scope.loginData.length; i++) {
            if (uname === $scope.loginData[i].username && pword === $scope.loginData[i].password) {
                dataService.setUser($scope.loginData[i].username);
                $state.go('bookShelf');
                alert('User Authenticated');
                return;
            }
        }
        alert('Unauthenticate User');
    };
}]);

