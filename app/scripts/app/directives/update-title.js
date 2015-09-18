ReKodi.directive('rkUpdateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {
        var listener = function(event, toState) {
          var title = (toState.data && toState.data.pageTitle)? toState.data.pageTitle : '';

          $timeout(function() {
            var icon = '<i class="mdi '+toState.data.menuIcon+'"></i> ';
            element.html(icon+title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);
