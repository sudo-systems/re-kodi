ReKodi.factory('PersitentState', ['$rootScope', '$localStorage', '$state',
  function($rootScope, $localStorage, $state) {
    if(!$localStorage.stateParams) {
      $localStorage.stateParams = {};
    }

    $rootScope.$on('$stateChangeComplete', function(event, toState, toParams, fromState, fromParams){
      if(!$localStorage.stateParams) {
        $localStorage.stateParams = {};
      }

      if(!$localStorage.stateParams[toState.name]) {
        $localStorage.stateParams[toState.name] = {params: toParams};
        return;
      }

      $localStorage.stateParams[toState.name].params = toParams;
    });

    var go = function(state, params, notify) {
      notify = (notify === undefined)? true : notify;

      if(!$localStorage.stateParams) {
        $localStorage.stateParams = {};
      }

      if($localStorage.stateParams[state] && params) {
        $localStorage.stateParams[state].params = angular.extend($localStorage.stateParams[state].params, params);
      }
      else if(!$localStorage.stateParams[state] && params) {
        $localStorage.stateParams[state] = {params: params};
      }
      else {
        $localStorage.stateParams[state] = {params: {}};
      }

      console.dir($localStorage.stateParams[state]);

      $state.go(state, $localStorage.stateParams[state].params, {notify: notify});
    };

    return {
      go: go
    };
  }
]);