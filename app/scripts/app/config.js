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
    }).state('settings', {
      url: '/settings',
      templateUrl: 'views/partials/settings.html',
      data : { 
        pageTitle: 'Settings',
        menuIcon: 'mdi-settings' 
      }
    }).state('help', {
      url: '/help',
      templateUrl: 'views/partials/help.html',
      data : { 
        pageTitle: 'Help',
        menuIcon: 'mdi-help-circle' 
      }
    }).state('about', {
      url: '/about',
      templateUrl: 'views/partials/about.html',
      data : { 
        pageTitle: 'About',
        menuIcon: 'mdi-information' 
      }
    });
  }
]);

ReKodi.constant('PATH_CONFIG', {
  SETTINGS_FILE: 'settings.json'
});

ReKodi.constant('EVENTS', {
  CONNECTION_SETTINGS_CHANGED: 'connectionSettingsChanged',
  CONNECTION_STATUS_CHANGED: 'connectionStatusChanged'
});