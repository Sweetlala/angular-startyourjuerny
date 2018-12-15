var app = angular.module('flyApp');

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('flyCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.fly = function (dep, arriv, date1, pass) {
        //console.log($location);
        // console.log(dep, arriv,date1,pass);
        //the path mean the road
        $location.path('/fly-results/' + dep + '/' + arriv + '/' + date1 + '/' + pass);
    }
}]);


app.controller('flyResultsCtrl', ['$scope', '$routeParams', 'getResor', function ($scope, $routeParams, getResor) {
    //route is the discripe of road
    console.log($routeParams);
    //console.log($routeParams);
    //accessable through $RoutParams
    //console.log($getWeather);
    var dep = $routeParams.dep;
    var arriv= $routeParams.arriv;
    var date1 =$routeParams.date1;
    var pass = $routeParams.pass;
    getResor.inputfly(dep, arriv, date1, pass)
     .then(function (response) {
            console.log(response);
          $scope.resor   = response.data.onwardflights;

        });
}]);
