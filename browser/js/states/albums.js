app.config(function ($stateProvider) {
	$stateProvider.state('albums', {
		url: '/albums',
		// templateUrl: '/templates/albums.html',
		template: '<album-list albums="albums"></album-list>',
		controller: function($scope, allAlbums) {
			$scope.albums = allAlbums;
		},
		resolve: {
			allAlbums: function (AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		}
	});
});
