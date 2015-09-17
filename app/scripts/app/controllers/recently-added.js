ReKodi.controller('RecentlyAddedCtrl', ['$scope',
  function($scope){
    $scope.tabs = [{
      icon: 'mdi-television',
      label: 'TV Shows',
      content: 'views/partials/recently-added/tv-shows.html'
    }, {
      icon: 'mdi-movie',
      label: 'Movies',
      content: 'views/partials/recently-added/movies.html'
    }, {
      icon: 'mdi-music-note',
      label: 'Music',
      content: 'views/partials/recently-added/music.html'
    }];
  }
]);

