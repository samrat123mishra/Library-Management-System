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