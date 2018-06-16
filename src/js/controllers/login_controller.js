angular.module('DJMobileApp.controllers').controller('loginController', function ($scope, repo, ls, $rootScope) {

    $scope.loginText = 'Login';
    $scope.isRemember = false;


    $scope.login = function () {
        $scope.loginText = 'Please wait...'

        if (!$scope.isRemember) {
            $scope.entity.mobileNo = $scope.entity.username;
        }
        else {
            $scope.entity.mobileNo = $scope.rem.mobileNo;
        }

        repo.token($scope.entity).then(function (result) {


            if (result.statusCode) {
                if (result.statusCode < 0) {
                    $scope.loginText = 'Login';
                    $scope.isAuth = false;
                }
            }
            else if (result[".token"] !== undefined) {
                ls.set('.token', result['.token']);
                ls.set('.expiry', result['.expiry']);


                var tokenStr = LZString.decompressFromEncodedURIComponent(result['.token']);
                var tokenObj = angular.fromJson(tokenStr);
                $rootScope.user = tokenObj;

                ls.set('.isRem', $scope.rememberMe);
                ls.set('.ru', result['.token']);
                ls.set('.mo', $scope.entity.mobileNo);

                $scope.isAuth = true;


                loginText = 'Login';

                $scope.$parent.$parent.isAuth = true;

            }
        }, function (err) {
            $scope.isAuth = false;
            $scope.loginText = 'Login';
            console.log('login error', err)
        })
    }

    function loadController() {
        $scope.entity = {};
        var isRemember = ls.get('.isRem');
        $scope.isRemember = isRemember;
        $scope.entity.rememberMe = isRemember;
        if (isRemember != null) {
            if (isRemember) {
                var user = ls.get('.ru');
                var remMo = ls.get('.mo')
                var tokenStr = LZString.decompressFromEncodedURIComponent(user);
                var tokenObj = angular.fromJson(tokenStr);
                $scope.rem = tokenObj;
                $scope.rem.mobileNo = remMo;

                $scope.loginData = { mobileNo: remMo }

                console.log($scope.rem)
            }
        }
    }

    loadController();

});

