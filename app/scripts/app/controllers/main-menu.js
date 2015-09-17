ReKodi.controller('MainMenuCtrl', ['$scope', '$state', '$mdSidenav',
  function($scope, $state, $mdSidenav){
    $scope.items = [{
      icon: 'mdi-newspaper',
      title: 'Recently added',
      sref: 'recently-added'
    }, {
      icon: 'mdi-music-box-outline',
      title: 'Music',
      sref: 'music'
    }, {
      icon: 'mdi-movie',
      title: 'Movies',
      sref: 'movies'
    }, {
      icon: 'mdi-television',
      title: 'TV Shows',
      sref: 'tv-shows'
    }, {
      icon: 'mdi-video',
      title: 'Videos',
      sref: 'videos'
    }, {
      icon: 'mdi-format-list-bulleted',
      title: 'Playlist',
      sref: 'playlist'
    }];
  
    $scope.open = function(state) {
      $state.go(state);
      $mdSidenav('left').toggle();
    };
  }
]);
