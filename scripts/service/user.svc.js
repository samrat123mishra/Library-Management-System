app.service("UserService", ['$http', '$q','$state', function ($http, $q, $state) {
        this.setUser = function (user) {
            this.user = user;
        },
        this.getUser = function () {
            return this.user; 
    }
}]);