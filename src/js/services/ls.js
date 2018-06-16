'use strict';
angular.module('DJMobileApp.services').factory('ls',
    ['$location', '$rootScope', function ($location, $rootScope) {


        function _setValue(key, value) {
            window.localStorage.setItem(key, value);
        }
        function _getValue(key) {
            return window.localStorage.getItem(key);
        }

        function _clear() {
            window.localStorage.clear();
        }
        
        var localStorage = {};
        localStorage.set = _setValue;
        localStorage.get = _getValue;
        localStorage.clear = _clear;
        return localStorage;
    }]);