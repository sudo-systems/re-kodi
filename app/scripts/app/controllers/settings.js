ReKodi.controller('SettingsCtrl', ['$scope', 'SettingsService',
  function($scope, SettingsService){
    $scope.settings = SettingsService.get();
    
    $scope.tabs = [{
      icon: 'mdi-server-network',
      label: 'Connection',
      content: 'views/partials/settings/connection.html'
    }];
  
    $scope.$watch('settings', function(newData, oldData) {
      if(!angular.equals(newData, oldData)) {
        SettingsService.set(newData);
      }
    }, true);
  }
]);

