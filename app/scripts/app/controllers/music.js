ReKodi.controller('MusicCtrl', ['$scope', '$timeout', 'KodiFilesService', 'EVENTS', 'LEVELS', 'KODI_ENUMS', 'KodiApiService', 'requestProperties',
  function($scope, $timeout, KodiFilesService, EVENTS, LEVELS, KODI_ENUMS, KodiApiService, requestProperties){
    var kodiApi, isInitialized;
    $scope.levels = LEVELS;
    $scope.status = {
      files: {
        level: LEVELS.SOURCES,
        directory: null
      },
      library: {
        level: LEVELS.ARTISTS,
        artists: null,
        album: null
      },
      addons: {
        level: LEVELS.ADDONS,
        addon: null
      }
    };
    
    $scope.data = {
      sources: [],
      directories: {},
      artists: [],
      albums: {},
      songs: {},
      addons: [],
      addon: {}
    };
    
    $scope.tabs = [{
      icon: 'mdi-format-list-bulleted',
      label: 'Library',
      content: 'views/partials/music/library.html'
    }, {
      icon: 'mdi-file-music',
      label: 'Files',
      content: 'views/partials/music/files.html'
    }, {
      icon: 'mdi-puzzle',
      label: 'Addons',
      content: 'views/partials/music/addons.html'
    }];
  
    $scope.getInitalData = function() {
      if(!kodiApi) return;
      $scope.$root.$emit(EVENTS.LOADING, true);
      var batch = kodiApi.batch();
      var sources = batch.Files.GetSources({
        media: KODI_ENUMS.MUSIC,
        sort: {
          order: 'ascending',
          method: 'label'
        }
      });
      var artists = batch.AudioLibrary.GetArtists({
        albumartistsonly: false,
        sort: {
          order: 'ascending',
          method: 'label'
        }
      });
      var addons = batch.Addons.GetAddons({
        type: KODI_ENUMS.AUDIO_ADDONS,
        properties: requestProperties.addons.audio
      });
      
      sources.then(function(data) {
        $scope.data.sources = (data.sources)? data.sources : [];
      }, function(error) {
        console.dir(error);
      });
      
      artists.then(function(data) {
        $scope.data.artists = (data.artists)? data.artists : [];
      }, function(error) {
        console.dir(error);
      });
      
      addons.then(function(data) {
        $scope.data.addons = (data.addons)? data.addons : [];
        $scope.$root.$emit(EVENTS.LOADING, false);
      }, function(error) {
        console.dir(error);
        $scope.$root.$emit(EVENTS.LOADING, false);
      });
      
      batch.send();
      isInitialized = true;
    };
    
    function init() {   
      kodiApi = KodiApiService.getConnection();
      $scope.getInitalData();
        
      $scope.$root.$on(EVENTS.CONNECTION_STATUS, function (event, connection) {
        kodiApi = connection;
        if(!isInitialized) $scope.getInitalData();
      });
    }
    
    $timeout(init);
  }
]);

