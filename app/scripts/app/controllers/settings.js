ReKodi.controller('SettingsCtrl', ['$scope',
  function($scope){
    $scope.tabs = [{
      icon: 'mdi-server-network',
      label: 'Connection',
      content: 'views/partials/settings/connection.html'
    }];
  }
]);

