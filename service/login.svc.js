app.service("LoginService", ['$http', '$q','$state','UserService', function ($http, $q, $state,UserService) {
    this.authenticate = function (uname, pword,data) {
        for (var i = 0; i < data.length; i++) {
            if (uname === data[i].username && pword === data[i].password) {
                UserService.setUser(data[i].username);
                $state.go('bookShelf');
                alert('User Authenticated');
                return;
            }
        }
        alert('Unauthenticate User');
    };
}]);