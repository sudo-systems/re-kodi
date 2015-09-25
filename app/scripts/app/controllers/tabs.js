ReKodi.controller('TabsCtrl', ['$scope', '$state', 'PersitentState',
  function($scope, $state, PersitentState){
    $scope.saveActiveTab = function(index) {
      PersitentState.go($state.current.name, {activeTab: index}, false);
    };
  }
]);