ReKodi.controller('AppCtrl', ['$scope', '$mdSidenav',
  function($scope, $mdSidenav){
    $scope.pageTitle = 'ReKodi';
    
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
  }
]);
