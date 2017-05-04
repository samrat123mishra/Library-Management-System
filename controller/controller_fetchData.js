app.controller('validationController', ['$scope', 'dataService','$state', function ($scope, dataService,$state) {
    dataService.getData().then(function (data) {
        $scope.apiData = data;
    });
    $scope.get = function () {
        var userName = document.getElementById('user').value;
        var passWord = document.getElementById('pass').value;
        $scope.authenticate(userName, passWord);
        document.getElementById('user').value = '';
        document.getElementById('pass').value = '';

    };
    $scope.authenticate = function (uname, pword) {
        for (var i = 0; i < $scope.apiData.length; i++) {
            if (uname === $scope.apiData[i].username && pword === $scope.apiData[i].password) {
                $state.go('bookShelf');
                alert('User Authenticated');
                return;
            }
        }
        alert('Unauthenticate User');
    };
}]);
app.service("dataService", ['$http', '$q', function ($http, $q) {
    return {
        getData: function () {
            var deferred = $q.defer();
            $http.get('scripts/authenticate.json')
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
              
            return deferred.promise;
        }
    };
}]);
