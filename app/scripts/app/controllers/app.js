ReKodi.controller('AppCtrl', ['$scope', '$timeout', '$state', 'KodiApiService', 'SettingsService',
  function($scope, $timeout, $state, KodiApiService, SettingsService){
    var remote = require('remote');
    $scope.window = remote.getCurrentWindow();

    function init() {
      if(!SettingsService.isConnectionConfigured()) {
        $state.go('settings');
      }
      
      KodiApiService.connect();
    }
    
    $timeout(init);
  }
]);