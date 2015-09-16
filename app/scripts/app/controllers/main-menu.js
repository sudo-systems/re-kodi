ReKodi.controller('MainMenuCtrl', ['$scope', '$state',
  function($scope, $state){
    var iconConfig = {
      color: '#333',
      size: '36'
    };
    
    $scope.items = [{
      icon: {
        name: '',
        color: iconConfig.color
      },
      title: 'Recently added',
      sref: 'recently-added'
    }, {
      icon: {
        name: 'mdi-music-box-outline',
        color: iconConfig.color
      },
      title: 'Music',
      sref: 'music'
    }, {
      icon: {
        name: 'mdi-movie',
        color: iconConfig.color
      },
      title: 'Movies',
      sref: 'movies'
    }, {
      icon: {
        name: 'mdi-television',
        color: iconConfig.color
      },
      title: 'TV Shows',
      sref: 'tv-shows'
    }, {
      icon: {
        name: 'mdi-video',
        color: iconConfig.color
      },
      title: 'Videos',
      sref: 'videos'
    }];
  
    $scope.open = function(state) {
      $state.go(state);
    };
  }
]);
