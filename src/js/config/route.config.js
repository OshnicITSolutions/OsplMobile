 'use strict';
 angular.module('DJMobileApp.Config.Route', [
  ]).config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
    $routeProvider.when('/Stock', {templateUrl:'Stock.html',  reloadOnSearch: false});
    $routeProvider.when('/weigh', {templateUrl:'weigh.html',  reloadOnSearch: false});
    $routeProvider.when('/GatePass', {templateUrl:'GatePass.html',  reloadOnSearch: false});
    $routeProvider.when('/WHR', {templateUrl:'templates/WHR.html',  reloadOnSearch: false});
    $routeProvider.when('/DO', {templateUrl:'DO.html',  reloadOnSearch: false});
    $routeProvider.when('/whrlist', {templateUrl:'whrlist.html',  reloadOnSearch: false});
  });

