angular.module('starter', ['ionic', 'myControllers', 'myServices', 'ionic-ratings'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab',
            templateUrl: function() {
                if (ionic.Platform.isAndroid()) {
                    return "view/tabs-android.html";
                } else {
                    return 'view/tabs.html';
                }
            }
        })
        .state('tab.movies', {
            url: '/movies',
            views: {
                'movies-tab': {
                    templateUrl: 'view/movies.html',
                    controller: 'MoviesController'
                }
            }
        })
        .state('tab.movie-detail', {
            url: '/movies/:id',
            views: {
                'movies-tab': {
                    templateUrl: 'view/movie-detail.html',
                    controller: 'MovieDetailController'
                }
            }
        })
        .state('tab.about', {
            url: '/about',
            views: {
                'about-tab': {
                    templateUrl: 'view/about.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/tab/movies');
});
