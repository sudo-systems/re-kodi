ReKodi.controller('AppCtrl', ['$scope', '$timeout', '$state', 'KodiApiService', 'SettingsService', 'EVENTS',
  function($scope, $timeout, $state, KodiApiService, SettingsService, EVENTS){
    var remote = require('remote');
    var Menu = remote.require('menu');
    var MenuItem = remote.require('menu-item');
    $scope.window = remote.getCurrentWindow();
    $scope.routerState = $state;
    $scope.isLoading = false;
    $scope.isConnecting = true;
    
    function createContextMenu() {
      var contextMenu = new Menu();
      var rightClickPosition = null;

      contextMenu.append(new MenuItem({ 
        label: 'Inspect Element', 
        click: function() {
          $scope.window.inspectElement(rightClickPosition.x, rightClickPosition.y);
        } 
      }));

      window.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        rightClickPosition = {x: e.x, y: e.y};
        contextMenu.popup($scope.window);
      }, false);
    }
    
    function apply() {
      if(!$scope.$$phase) $scope.$apply();
    }

    function init() {
      createContextMenu();
      
      if(!SettingsService.isConnectionConfigured()) {
        $state.go('settings');
      }
      
      KodiApiService.connect();
      
      $scope.$root.$on(EVENTS.LOADING, function(event, isLoading) {
        $scope.isLoading = isLoading;
        apply();
      });
      
      $scope.$root.$on(EVENTS.CONNECTING, function(event, isConnecting) {
        $scope.isConnecting = isConnecting;
        apply();
      });

      $scope.$root.$on(EVENTS.CONNECTION_STATUS, function(event, connection) {
        $scope.isConnected = (connection);
        apply();
      });
    }
    
    $timeout(init);
  }
]);