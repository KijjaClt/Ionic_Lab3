angular.module('myControllers', [])

.controller("MoviesController", function($scope, $ionicLoading, ContactService, $location) {

    $scope.movies = [];

    $scope.loadMovies = function() {
        $ionicLoading.show();
        ContactService.getPopularMovies().then(function(results) {
            $scope.movies = results;
            $ionicLoading.hide();
        });
    }

    $scope.openDetail = function(id) {
        $location.url('/tab/movies/' + id);
    }
})

.controller('MovieDetailController', function($scope, $stateParams, ContactService) {
    $scope.movie = ContactService.getMovieDetail($stateParams.id);

    $div_rating = $scope.movie.vote_average / 2.0;
    $res_rating = Math.round($div_rating);

    $scope.ratingsObject = {
        iconOn: 'ion-ios-star', //Optional
        iconOff: 'ion-ios-star-outline', //Optional
        iconOnColor: '#FFD600', //Optional
        iconOffColor: '#BDBDBD', //Optional
        rating: $res_rating, //Optional
        readOnly: true //Optional
    };

});
