
var angularJsAppModule = angular.module('angularJsApp',[]);


angularJsAppModule.config(function($routeProvider){

    $routeProvider.when('/user',{
        templateUrl : 'views/users.html',
        controller : 'UsersCtrl'
    }).when('/new',{
        templateUrl : 'views/form.html',
        controller: 'UsersCtrl'

    }).otherwise({
        templateUrl : 'views/users.html',
        controller : 'UsersCtrl'
    });


});

angularJsAppModule.factory("Users", function(){
    var users = {};
    users= [
        {
            id:1,
            name:'sandip ghadge s',
            age:26,
            gender:'male'

        },
        {
            id:2,
            name:'santosh ghadge',
            age:30,
            gender:'male'

        },
        {
            id:3,
            name:'dilip ghadge',
            age:35,
            gender:'male'

        }];

    return users;
});

angularJsAppModule.controller('UsersCtrl', function($scope,Users,$location){
    $scope.users = Users;

    $scope.save = function(){
        $scope.users = Users;
        $scope.users.push($scope.user);
        console.log('save method called');
        console.log($scope.users)
        $location.path('/');
    }

    $scope.delete = function(){
        $scope.user.$remove();
        $location.path('/');
    }

});







