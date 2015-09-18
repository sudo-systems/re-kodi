ReKodi.factory('ConfigService', ['PATH_CONFIG',
  function(PATH_CONFIG) {
    var homedir = require('homedir');
    var fs = require('fs');
    var mkpath = require('mkpath');
    var config = require('../package.json');
    
    config.storagePath = homedir()+'/.'+config.name.toLowerCase()+'/';
    config.path = {
      ROOT: homedir()+'/.'+config.name.toLowerCase()+'/'
    };

    var get = function(key, index) {
      if(index !== undefined) {
        return (config[key] !== undefined && config[key][index] !== undefined)? config[key][index] : null;
      }
      
      return config[key] !== undefined? config[key] : null;
    };
    
    var getPath = function(key) {
      return get('path', key);
    };
    
    function init() {
      if(!fs.existsSync(config.storagePath)) {
        mkpath.sync(config.storagePath);
      }
      
      config.path = {
        ROOT: homedir()+'/.'+config.name.toLowerCase()+'/'
      };
      
      for(var key in PATH_CONFIG) {
        config.path[key] = config.path.ROOT+PATH_CONFIG[key];
      }
    }
    
    init();
    
    return {
      get: get,
      getPath: getPath
    };
  }
]);