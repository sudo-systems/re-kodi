ReKodi.controller('MainMenuCtrl', ['$scope', '$state', '$mdSidenav',
  function($scope, $state, $mdSidenav){
  $scope.menuItems = $state.get();

    $scope.openPage = function(stateName) {
      $state.go(stateName);
      $mdSidenav('left').close();
    };
  }
]);
