ReKodi.factory('KodiFilesService', ['$rootScope', '$q', 'requestProperties', 'EVENTS', 'KodiApiService',
  function($rootScope, $q, requestProperties, EVENTS, KodiApiService) {
    var instance = function(type) {
      var currentDirectory = null;
      var sourcesPaths = [];
      var kodiApi = null;

      function updateSourcePaths(sources) {
        sourcesPaths = [];
        for(var key in sources) sourcesPaths.push(sources[key].file);
      }

      this.getSources = function() {
        if(!kodiApi) return;
        var deferred = $q.defer();
        currentDirectory = null;

        kodiApi.Files.GetSources({
          media: type,
          sort: {
            order: 'ascending',
            method: 'label'
          }
        }).then(function(data) {
          data.sources = (!data.sources)? [] : data.sources;
          updateSourcePaths(data.sources);
          deferred.resolve(data.sources);
        }, function(error) {
          deferred.reject(error);
        });
        
        return deferred.promise;
      };

      this.getDirectory = function(directory, callback) {
        if(!kodiApi) return;
        var deferred = $q.defer();
        currentDirectory = directory;

        kodiApi.Files.GetDirectory({
          directory: directory,
          media: type,
          properties: requestProperties.files[type],
          sort: {
            order: 'ascending',
            method: 'label'
          }
        }).then(function(data) {
          data.files = (!data.files)? [] : data.files;
          deferred.resolve(data.sources);
        }, function(error) {
          deferred.reject(error);
        });
        
        return deferred.promise;
      };

      this.getDirectoryUp = function() {
        if(currentDirectory) {
          var directoryUp = currentDirectory.split('/').slice(0, -2).join('/')+'/';

          for(var key in sourcesPaths) {
            if(sourcesPaths[key].indexOf(directoryUp) > -1 && directoryUp.length < sourcesPaths[key].length) {
              return {type: 'sources'};
            }
          }

          return {type: 'directory', directory: directoryUp};
        }

        return null;
      };

      function init() {
        kodiApi = KodiApiService.getConnection();
        
        $rootScope.$on(EVENTS.CONNECTION_STATUS, function (event, connection) {
          kodiApi = connection;
        });
      };

      init();
    };

    return {
      instance: instance
    };
  }
]);