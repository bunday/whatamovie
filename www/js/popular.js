angular.module('App')
.controller('PoppCtrl', function($scope, $http, $ionicLoading) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.page=0;
  $scope.total = 1;

  $scope.movies = [];

  $scope.getPopMovies = function(){
    $scope.page++;
    $ionicLoading.show();
     $http.get('https://api.themoviedb.org/3/discover/movie?api_key=b5fe6f43e3714159d2209d0fe8c3a695&sort_by=popularity.desc').success(
        function(response){
          angular.forEach(response.results,function(movie){
            $scope.movies.push(movie);
          });
        $ionicLoading.hide();
        $scope.total = response.page;
        $scope.$broadcast('scroll.infiniteScrollComplete'); 
    }).error(function (err) {
      $scope.$broadcast('scroll.infiniteScrollComplete');
      $ionicLoading.show({
        template: 'Could not fetch result. Please check your internet connection.',
        duration: 3000
      });
    }).finally(function () {
    $scope.$broadcast('scroll.refreshComplete');
    });
  };
  $scope.getPopMovies();
});
