app.directive('sidebar', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/sidebarTemplate.html'
  }
})


app.directive('player', function(PlayerFactory) {
  return {
    restrict: 'E',
    templateUrl: '/templates/playerTemplate.html',
    link: function(scope) {
      scope.getCurrentSong = PlayerFactory.getCurrentSong;
    	scope.isPlaying = PlayerFactory.isPlaying;
    	scope.forward = PlayerFactory.next;
    	scope.back = PlayerFactory.previous;

    	scope.getPercent = function () {
    		return (100 * PlayerFactory.getProgress()) + '%';
    	};

    	scope.toggle = function () {
    		if (PlayerFactory.isPlaying()) PlayerFactory.pause();
    		else PlayerFactory.resume();
    	};
    }
  }
})

app.directive('albumList', function() {
  return {
    restrict: 'E',
    scope: {
      albums: '='
    },
    templateUrl: '/templates/allAlbumsTemplate.html'
  }
})
