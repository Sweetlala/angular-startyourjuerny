var app = angular.module('flyApp');

app.factory('getResor',['$http', function($http){
    var fly = {
        // All functionality here
        inputfly: function(dep, arriv,date1,pass) {
            var dep= dep;
            var arriv = arriv;
            
            // var timdep =$("#fly-out").val();
    //date
    var date = new Date(date1);
    console.log(date); //Converting Date format into string to match with query string of API
    var dd = (date.getDate()).toString();     //Accessing DAy,Month Year For the dates
    var mm = (date.getMonth() + 1).toString();
    var yy = (date.getFullYear()).toString();
    var date2 = yy + mm + dd; //Got date in YYYYMMDD form
    //  
    console.log(date2)
            var pass= pass;
          var url = 'https://developer.goibibo.com/api/search/?app_id=458906bd&app_key=1be55b0e0a6abb21a6968f9e30a2e3e3&format=json&source='+dep+'&destination='+arriv+'&dateofdeparture='+date2+'&seatingclass=E&adults='+pass+'&children=0&infants=0&counter=0';
          console.log(url);
            return $http.get(url)
            .then(function(data){
                return data.data;
            })
        }
    };
    return fly;
}]);
// "http://developer.goibibo.com/api/search/?app_id=e28c4782&app_key=a055ec68decdc1c962404333b4e1ff06&format=json&source=CPH&destination=LAX&dateofdeparture=20181125&dateofarrival=20181130&seatingclass=B&adults=1&children=0&infants=0&counter=0"