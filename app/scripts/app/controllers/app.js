ReKodi.controller('AppCtrl', ['$scope', '$timeout', '$state', 'KodiApiService', 'SettingsService', 'EVENTS',
  function($scope, $timeout, $state, KodiApiService, SettingsService, EVENTS){
    var remote = require('remote');
    $scope.window = remote.getCurrentWindow();
    $scope.routerState = $state;
    $scope.isLoading = false;
    $scope.isConnecting = true;
    
    function apply() {
      if(!$scope.$$phase) $scope.$apply();
    }

    function init() {
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
    }
    
    $timeout(init);
  }
]);