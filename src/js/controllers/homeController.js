angular.module('DJMobileApp.controllers').controller('homeController', function ($scope, repo, ls,
    $rootScope) {
    $scope.page = { gridOptions: { data: [] }, title:'Grid Test Home' }
  
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

    console.log($scope.page)
});

