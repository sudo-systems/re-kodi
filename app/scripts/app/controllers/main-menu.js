ReKodi.controller('MainMenuCtrl', ['$scope', '$state',
  function($scope, $state){
    $scope.menuItems = $state.get();
    $scope.routerState = $state;

    $scope.openPage = function(stateName) {
      $state.go(stateName);
    };
  }
]);
