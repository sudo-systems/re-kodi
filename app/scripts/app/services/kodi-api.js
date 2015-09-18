ReKodi.factory('KodiApiService', ['$rootScope', 'SettingsService', 'EVENTS',
  function($rootScope, SettingsService, EVENTS) {
    var kodiWs = require('kodi-ws');
    var wol = require('node-wol');
    var retryConnectingTimeout;
    var connection = null;
    
    function bindEvents(link) {
      link.on('close', function() {
        setDisconnected();
      });
      
      link.System.OnQuit(function() {
        setDisconnected();
      });

      link.System.OnRestart(function() {
        setDisconnected();
      });

      link.System.OnSleep(function() {
        setDisconnected();
      });

      link.System.OnWake(function() {
        setConnected();
      });
    }

    var connect = function() {
      clearTimeout(retryConnectingTimeout);

      if(!SettingsService.isConnectionConfigured()) {
        setDisconnected('KodiApiService::connect : Connection settings not configured');
        return;
      }

      var connectionSettings = SettingsService.get('connection');
      wakeHost(connectionSettings.hostAddress, connectionSettings.macAddress);

      kodiWs(connectionSettings.hostAddress, parseInt(connectionSettings.jsonRpcPort)).then(function(link) {
        if(link) {
          setConnected(link);
          return;
        }
        
        setDisconnected('KodiApiService::connect : An unknown error occured');
      },
      function(error) {
        setDisconnected(error);
      });
    };

    function setConnected(link) {
      connection = link;
      bindEvents(link);
      $rootScope.$emit(EVENTS.CONNECTION_STATUS_CHANGED, connection);
    };
    
    function setDisconnected(error) {
      if(connection) {
        connection = null;
        $rootScope.$emit(EVENTS.CONNECTION_STATUS_CHANGED, connection);
      }
      
      if(error) {
        console.error(error);
      }
      
      retryConnectingTimeout = setTimeout(connect, 1000);
    };

    var wakeHost = function(hostAddress, macAddress) {
      if(macAddress && macAddress >= 12) {
        wol.wake(macAddress, {
          address: hostAddress,
          port: 7
        }, function(error) {
          if(error) {
            setDisconnected(error);
            return;
          }
        });
      }
    };

    var isConnected = function() {
      return (connection);
    };
    
    var getConnection = function() {
      return connection;
    };

    return {
      connect: connect,
      isConnected: isConnected,
      getConnection: getConnection,
      setDisconnected: setDisconnected,
      wakeHost: wakeHost
    };
  }
]);

