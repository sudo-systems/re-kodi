ReKodi.controller('AppCtrl', ['$scope',
  function($scope){
    var remote = require('remote');
    $scope.window = remote.getCurrentWindow();
  }
]);
