angular.module('App')

.controller('DashCtrl', function($scope, $http, $ionicLoading) {

  $scope.removsort = function(now){
    if(now == 0){
      $scope.page=0;
  $scope.total = 1;

  $scope.movies = [];

  $scope.getMovies = function(){
    var d = Date.now();
   //var date = d.getDate();
    $scope.page++;
    $ionicLoading.show();
     $http.get('https://api.themoviedb.org/3/discover/movie?api_key=b5fe6f43e3714159d2209d0fe8c3a695&primary_release_date.gte=2017-03-20&primary_release_date.lte='+d+"&sort_by=popularity.desc").success(
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
  $scope.getMovies();
    }
    else{
      $scope.page=0;
  $scope.total = 1;

  $scope.movies = [];

  $scope.getMovies = function(){
    var d = Date.now();
   //var date = d.getDate();
    $scope.page++;
    $ionicLoading.show();
     $http.get('https://api.themoviedb.org/3/discover/movie?api_key=b5fe6f43e3714159d2209d0fe8c3a695&primary_release_date.gte=2017-03-20&primary_release_date.lte='+d+"&sort_by=primary_release_date.desc").success(
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
  $scope.getMovies();
    }
  }
  
})

.controller('DetailCtrl', function($scope, $stateParams, $state, $http, $ionicLoading){

  $ionicLoading.show();
  $http.get('https://api.themoviedb.org/3/movie/'+$stateParams.movie+'?api_key=b5fe6f43e3714159d2209d0fe8c3a695&append_to_response=videos').success(
    
    function(movie){
      $scope.movie = movie;
      $ionicLoading.hide();
    }).error(function(err){
      $ionicLoading.show({
        template: 'Could not fetch result. Please check your internet connection.',
        duration: 3000
      });
    });
      
})

.controller('AccountCtrl', function($scope,$http, Sort, $ionicLoading) {
  $scope.sort = Sort;
  $scope.resort= function(who){
    
    if(who == 0){
    $scope.page=0;
  $scope.total = 1;

  $scope.movies = [];

  $scope.getUpcMovies = function(){
    var d = Date.now();
    $scope.page++;
    $ionicLoading.show();
     $http.get('https://api.themoviedb.org/3/discover/movie?api_key=b5fe6f43e3714159d2209d0fe8c3a695&primary_release_date.gte='+d).success(
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
  $scope.getUpcMovies();
  }
  else{
    $scope.page=0;
  $scope.total = 1;

  $scope.movies = [];

  $scope.getUpcMovies = function(){
    var d = Date.now();
    $scope.page++;
    $ionicLoading.show();
     $http.get('https://api.themoviedb.org/3/discover/movie?api_key=b5fe6f43e3714159d2209d0fe8c3a695&primary_release_date.gte='+d+'&sort_by=primary_release_date.asc').success(
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
  $scope.getUpcMovies();
  }
  }
  
});
