ReKodi.controller('MusicCtrl', ['$scope',
  function($scope){
    $scope.tabs = [{
      icon: 'mdi-format-list-bulleted',
      label: 'Library',
      content: 'views/partials/music/library.html'
    }, {
      icon: 'mdi-file-music',
      label: 'Files',
      content: 'views/partials/music/files.html'
    }];
  }
]);

