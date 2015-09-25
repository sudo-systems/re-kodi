ReKodi.controller('MainMenuCtrl', ['$scope', '$state', 'PersitentState',
  function($scope, $state, PersitentState){
    $scope.menuItems = $state.get();
    $scope.routerState = $state;

    $scope.openPage = function(stateName) {
      PersitentState.go(stateName);
    };
  }
]);
