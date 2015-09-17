ReKodi.controller('VideosCtrl', ['$scope',
  function($scope){
    $scope.tabs = [{
      icon: 'mdi-file-video',
      label: 'Files',
      content: 'views/partials/video/files.html'
    }, {
      icon: 'mdi-puzzle',
      label: 'Addons',
      content: 'views/partials/video/addons.html'
    }];
  }
]);

