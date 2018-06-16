
angular.module('DJMobileApp.services')

    .factory('repo', function ($http, pageService, $rootScope) {

        var serviceAPIBaseURL = 'http://api.osindia.in/api/';
        // var serviceAPIBaseURL = 'http://localhost:62207/api/';
        function _getURL(path) {
            return serviceAPIBaseURL + path;
        }
        function _verifyOTP(data) {
            return pageService(_getURL('User/OTPVeify'), data);
        }
        function _registerNewUser(data) {
            return pageService(_getURL('User/Register'), data);
        }
        function _token(data) {
            return pageService(_getURL('User/Token'), data)
        }

        function _getGrandSummary() {
            return pageService('Data/Grand');
        }

        function _getUserActivity() {
            return pageService('Data/Activity');
        }


        var pageServiceFactory = {};

        pageServiceFactory.verifyOTP = _verifyOTP;
        pageServiceFactory.registerNewUser = _registerNewUser;
        pageServiceFactory.token = _token;
        //======================================================================
        pageServiceFactory.getGrandSummary = _getGrandSummary;
        pageServiceFactory.getUserActivity = _getUserActivity;
        return pageServiceFactory;

    });