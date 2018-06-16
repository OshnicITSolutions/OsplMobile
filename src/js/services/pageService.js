angular.module('DJMobileApp.services')

    .factory('pageService', function ($http, $rootScope) {
        return function (path, data, success, error) {

            if (!$rootScope.online) {
                console.log('You are not online. Please connect to the Internet');
                throw 'No internet'
            }

            var url = path;
            if (!data) {
                return $http.get(url)
                    .then(function (result) {
                        return result;
                    }
                        , function (err) {
                            throw err;
                        });
            }
            else {
                return $http.post(url, data,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (result) {
                        return result;
                    }
                        , function (err) {
                            throw err;
                        });
            }

        };
    });