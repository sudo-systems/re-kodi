ReKodi.controller('PlaylistCtrl', ['$scope',
  function($scope){
    $scope.tabs = [{
      icon: 'mdi-music-note',
      label: 'Audio',
      content: 'views/partials/playlist/audio.html'
    }, {
      icon: 'mdi-video',
      label: 'Video',
      content: 'views/partials/playlist/video.html'
    }];
  }
]);

