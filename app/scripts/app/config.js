ReKodi.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/recently-added');
    
    $stateProvider
    .state('recently-added', {
      url: '/recently-added',
      templateUrl: 'views/partials/recently-added.html',
      data : { 
        pageTitle: 'Recently Added',
        menuIcon: 'mdi-newspaper'
      }
    }).state('now-playing', {
      url: '/now-playing',
      templateUrl: 'views/partials/now-playing.html',
      data : { 
        pageTitle: 'Now playing',
        menuIcon: 'mdi-play-box-outline'
      }
    }).state('playlist', {
      url: '/playlist',
      templateUrl: 'views/partials/playlist.html',
      data : { 
        pageTitle: 'Playlists',
        menuIcon: 'mdi-format-list-bulleted'
      }
    }).state('music', {
      url: '/music',
      templateUrl: 'views/partials/music.html',
      data : { 
        pageTitle: 'Music',
        menuIcon: 'mdi-music-box-outline'
      }
    }).state('movies', {
      url: '/movies',
      templateUrl: 'views/partials/movies.html',
      data : { 
        pageTitle: 'Movies',
        menuIcon: 'mdi-movie' 
      }
    }).state('tv-shows', {
      url: '/tv-shows',
      templateUrl: 'views/partials/tv-shows.html',
      data : { 
        pageTitle: 'TV Shows',
        menuIcon: 'mdi-television'
      }
    }).state('videos', {
      url: '/videos',
      templateUrl: 'views/partials/videos.html',
      data : { 
        pageTitle: 'Videos',
        menuIcon: 'mdi-video' 
      }
    }).state('settings', {
      url: '/settings',
      templateUrl: 'views/partials/settings.html',
      data : { 
        pageTitle: 'Settings',
        menuIcon: 'mdi-settings' 
      }
    });
  }
]);