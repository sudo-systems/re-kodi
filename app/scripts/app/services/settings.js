ReKodi.factory('SettingsService', ['ConfigService', 'defaultSettings', 'EVENTS',
  function(ConfigService, defaultSettings, EVENTS) {
    var fs = require('fs');
    var settingsFile = ConfigService.getPath('SETTINGS_FILE');
    var settings = fs.existsSync(settingsFile)? require(settingsFile) : defaultSettings;

    var set = function(data) {
      var fileStream = fs.createWriteStream(settingsFile, {flags: 'w'});
      fileStream.write(JSON.stringify(data));
    };

    var isConnectionConfigured = function() {
      return (fs.existsSync(settingsFile) &&
              settings.connection.hostAddress &&
              settings.connection.hostAddress !== '' && 
              settings.connection.jsonRpcPort &&
              settings.connection.jsonRpcPort !== '' &&
              settings.connection.httpPort &&
              settings.connection.httpPort !== '');
    };
    
    var get = function(key, index) {
      if(index !== undefined) {
        return (settings[key] !== undefined && settings[key][index] !== undefined)? settings[key][index] : null;
      }
      
      if(key !== undefined) {
        return (settings[key] !== undefined)? settings[key] : null;
      }
      
      return settings;
    };
    
    return {
      set: set,
      get: get,
      isConnectionConfigured: isConnectionConfigured
    };
  }
]);
