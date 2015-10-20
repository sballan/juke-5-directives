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

app.directive('songList', function(PlayerFactory) {
  return {
    restrict: 'E',
    scope: {
      songs: '='
    },
    link: function(scope) {
      scope.isCurrent = function (song) {
        var current = PlayerFactory.getCurrentSong();
        return current && current._id == song._id;
      };
      scope.start = function (song) {
        PlayerFactory.start(song, scope.songs);
      };

    },
    templateUrl: '/templates/allSongsTemplate.html'
  }
})

app.directive('artistLink', function() {
  return {
    restrict: 'E',
    scope: {
      artist: '='
    },
    template: '<a ui-sref="artist({artistId: artist._id})">{{artist.name}}</a>'
  }
})
