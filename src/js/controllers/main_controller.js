angular.module('DJMobileApp.controllers.Main', [
    'DJMobileApp.services'
])

    .controller('MainController', function ($scope, deviceReady, getCurrentPosition, getWeather, repo, ls) {


        // adds.initialize();
        // adds.initAds(); 
        // adds.startBannerAds();
        // adds.showBannerAds();
        // deviceReady(function () {
        //     // Set AdMobAds options:

        //     admob.setOptions({
        //         publisherId: "ca-app-pub-7014323267004971/1976976363"  // Required
        //     });

        //     admob.createBannerView();

        //     admob.showBannerAd(true);
        //     console.log('adMob Loaded')
        // });

        $scope.isAuth = false;

        var token = ls.get('.token');
        if (token != null) {
            $scope.isAuth = true;
        }
        else if (token === undefined) {
            $scope.isAuth = true;
        }


        $scope.openRegister = function (btn) {
            $scope.isRegister = true;
            $scope.regEntity = {};
            $scope.regEntity.isByWarehouse = false;
        }
        $scope.closeRegister = function () {
            $scope.isRegister = false;
            $scope.regEntity = {};
        }
        $scope.registerUser = function () {
            console.log($scope.regEntity)
            //VALIDATE

            if ($scope.regEntity) {
                if ($scope.regEntity.isByWarehouse) {
                    if ($scope.regEntity.userName) {
                        if ($scope.regEntity.userName == '') {
                            showMsg('Please enter valid user name.')
                            return;
                        }
                    }
                    else {
                        showMsg('Please enter valid user name.')
                        return;
                    }
                }
                else {
                    if ($scope.regEntity.deptrCode) {
                        if ($scope.regEntity.deptrCode == '') {
                            showMsg('Please enter valid Depositer Code.')
                            return;
                        }
                    }
                    else {
                        showMsg('Please enter valid Depositer Code.')
                        return;
                    }
                }

                if ($scope.regEntity.password) {
                    if ($scope.regEntity.password == '') {
                        showMsg('Please enter valid Password.')
                        return;
                    }
                }
                else {
                    showMsg('Please enter valid Password.')
                    return;
                }

                if ($scope.regEntity.corporateId) {
                    if ($scope.regEntity.corporateId == '') {
                        showMsg('Please enter Customer Id.')
                        return;
                    }
                }
                else {
                    showMsg('Please enter valid Customer Id.')
                    return;
                }

                if ($scope.regEntity.mobileNo) {
                    if ($scope.regEntity.mobileNo == '') {
                        showMsg('Please enter Mobile No.')
                        return;
                    }
                    else {

                    }
                }
                else {
                    showMsg('Please enter valid Mobile No.')
                    return;
                }
            }
            else {
                showMsg('Please enter valid user detail.')
                return;
            }
            repo.registerNewUser($scope.regEntity).then(_successNewUser, _errorNewUser);

            //send request to server.

        }
        function _successNewUser(result) {
            $scope.regResult = result;
            console.log(result)
            if (result.statusCode == 1) {
                $scope.isVerifyPin = true;
            }
            else {
                if (result.statusText) {

                }
            }

        }
        function _errorNewUser(err) {

        }
        $scope.backToRegister = function () {
            $scope.isVerifyPin = false;
        }
        $scope.verifyOTP = function () {
            console.log($scope.regEntity)
            repo.verifyOTP($scope.regEntity).then(_successVerify, _errorVerify);
        }

        function _successVerify(result) {

            showMsg('OTP Verified!!!')

            $scope.isAuth = true;
            $scope.isRegister = false;
            $scope.isVerifyPin = false;

        }
        function _errorVerify(error) {
            console.log(error);
        }
        function showMsg(msg) {
            alert(msg)
        }

        $scope.login = function (btn) {
            console.log(btn, $scope.entity)
        }

        $scope.logout = function () {
            console.log('logout')
            $scope.isAuth = false;
        }

        $scope.page = { gridOptions: { data: [] } }

        var gridOptions = {
            rowHeight: 35,
            enableColumnResizing: true,
            enableFiltering: false,
            enableGridMenu: true,
            enableRowSelection: true,
            enableRowHeaderSelection: true,
            enablePaginationControls: true,
            paginationPageSizes: [10, 25, 50, 75, 100, 200, 500],
            paginationPageSize: 10,
            minRowsToShow: 10,
            showColumnFooter: false,
            enableVerticalScrollbar: false,
            enableHighlighting: true,
            enablePinning: true,
            data: [],
            columnDefs: []
            // rowTemplate:'app/common/components/listGrid/grid-row-template.html'
        }

        var colCreatedOn = { name: 'CreatedOn', field: 'CreatedOn', displayName: 'Date', width: 100, visible: false, cellFilter: 'date:\'dd-MMM-yyyy\'' };
        var colCreatedBy = { name: 'CreatedBy', field: 'CreatedBy', displayName: 'User', width: 100, visible: false };
        var colAssignedUser = { name: 'AssignedUser', field: 'AssignedUser', displayName: 'Assigned User', width: 100, visible: false };
        var colStatus = { name: 'StatusName', field: 'StatusName', displayName: 'Status', width: 100, visible: false, cellFilter: '' };

        gridOptions.columnDefs.push(colCreatedOn);
        gridOptions.columnDefs.push(colCreatedBy);
        gridOptions.columnDefs.push(colAssignedUser);
        gridOptions.columnDefs.push(colStatus);


        $scope.page.gridOptions = gridOptions;

        getCurrentPosition(function (position) {
            getWeather(
                position.coords.latitude,
                position.coords.longitude,
                function (location, weather) {
                    $scope.location = location;
                    $scope.weather = weather;
                    console.log($scope.location, $scope.weather)
                });
        });

        // var map;
        // document.addEventListener("deviceready", function () {
        //     var div = document.getElementById("map_canvas");

        //     // Initialize the map view
        //     map = Map.getMap(div);

        //     // Wait until the map is ready status.
        //     map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
        // }, false);

        // function onMapReady() {
        //     var button = document.getElementById("mapbtn");
        //     button.addEventListener("click", onButtonClick);
        // }

        // function onButtonClick() {

        //     // Move to the position with animation
        //     map.animateCamera({
        //         target: { lat: 37.422359, lng: -122.084344 },
        //         zoom: 17,
        //         tilt: 60,
        //         bearing: 140,
        //         duration: 5000
        //     }, function () {

        //         // Add a maker
        //         map.addMarker({
        //             position: { lat: 37.422359, lng: -122.084344 },
        //             title: "Welecome to \n" +
        //                 "Cordova GoogleMaps plugin for iOS and Android",
        //             snippet: "This plugin is awesome!",
        //             animation: plugin.google.maps.Animation.BOUNCE
        //         }, function (marker) {

        //             // Show the info window
        //             marker.showInfoWindow();

        //             // Catch the click event
        //             marker.on(plugin.google.maps.event.INFO_CLICK, function () {

        //                 // To do something...
        //                 alert("Hello world!");

        //             });
        //         });
        //     });
        // }

        // querySelector, jQuery style
        // var $ = function (selector) {
        //     return document.querySelector(selector);
        // };

        // angular.element()
        // var btnRipple = $(".ripple-effect");
        // console.log(btnRipple)
        // btnRipple.onclick = rippleClick;

        // function rippleClick(e) {
        //     console.log(e)

        //     //         // create .ink element if it doesn't exist
        //     //         if (rippler.find(".ink").length == 0) {
        //     //             rippler.append("<span class='ink'></span>");
        //     //         }
        // }

        // // Ripple-effect animation
        // (function ($) {
        //     $(".ripple-effect").click(function (e) {
        //         var rippler = $(this);

        //         // create .ink element if it doesn't exist
        //         if (rippler.find(".ink").length == 0) {
        //             rippler.append("<span class='ink'></span>");
        //         }

        //         var ink = rippler.find(".ink");

        //         // prevent quick double clicks
        //         ink.removeClass("animate");

        //         // set .ink diametr
        //         if (!ink.height() && !ink.width()) {
        //             var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
        //             ink.css({ height: d, width: d });
        //         }

        //         // get click coordinates
        //         var x = e.pageX - rippler.offset().left - ink.width() / 2;
        //         var y = e.pageY - rippler.offset().top - ink.height() / 2;

        //         // set .ink position and add class .animate
        //         ink.css({
        //             top: y + 'px',
        //             left: x + 'px'
        //         }).addClass("animate");
        //     })
        // })(jQuery);
    });