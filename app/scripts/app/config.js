ReKodi.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/recently-added');
    
    $stateProvider
    .state('recently-added', {
      url: '/recently-added',
      templateUrl: 'views/partials/recently-added.html'
    }).state('music', {
      url: '/music',
      templateUrl: 'views/partials/music.html'
    }).state('movies', {
      url: '/movies',
      templateUrl: 'views/partials/movies.html'
    }).state('tv-shows', {
      url: '/tv-shows',
      templateUrl: 'views/partials/tv-shows.html'
    }).state('videos', {
      url: '/videos',
      templateUrl: 'views/partials/videos.html'
    });
  }
]);