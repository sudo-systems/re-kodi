ReKodi.factory('StateParamsStorage', ['$rootScope', '$localStorage', '$state',
  function($rootScope, $localStorage, $state) {
    if(!$localStorage.stateParams) {
      $localStorage.stateParams = {};
    }

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      event.preventDefault();

      if(toState.name === fromState.name && angular.equals(fromParams, toParams)) {
        return;
      }

      if(toState.name === fromState.name) {
        if(!$localStorage.stateParams[toState.name]) {
          $localStorage.stateParams[toState.name] = {params: toParams};
          return;
        }

        $localStorage.stateParams[toState.name].params = toParams;
        return;
      }

      toParams = ($localStorage.stateParams[toState.name])? $localStorage.stateParams[toState.name].params : toParams;
      $state.go(toState.name, toParams);
    });

    return {};
  }
]);