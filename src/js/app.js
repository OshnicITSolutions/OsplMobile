var DJMobileApp = angular.module('DJMobileApp', [
  'ngRoute',
  'mobile-angular-ui',
  'ui.grid', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.pagination',
  'ui.grid.edit', 'ui.grid.moveColumns', 'ui.grid.saveState', 'ui.grid.resizeColumns', 
  'ui.grid.cellNav', 'ui.grid.pinning',
  'ui.grid.expandable', 'ui.grid.cellNav','ui.grid.autoResize',
  'DJMobileApp.controllers.Main',
  'DJMobileApp.Config.Route',
  'DJMobileApp.common',
  'DJMobileApp.services',
  'DJMobileApp.controllers',
]);



