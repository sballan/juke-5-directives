app.config(function ($stateProvider) {
	$stateProvider.state('artist.albums', {
		url: '/albums',
		template: '<album-list albums="artist.albums"></album-list>'
	});
});
