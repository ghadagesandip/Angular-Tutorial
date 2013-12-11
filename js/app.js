
var angularJsAppModule = angular.module('angularJsApp',[]);

angularJsAppModule.config(function($routeProvider){

    $routeProvider.when('/user',{
        templateUrl : 'views/users.html',
        controller : 'UsersCtrl'
    }).when('/new',{
        templateUrl : 'views/form.html',
        controller: 'CreateCtrl'

    }).otherwise({
        templateUrl : 'views/users.html',
        controller : 'UsersCtrl'
    });


});

angularJsAppModule.controller('UsersCtrl', function($scope){

    $scope.users = [
        {
            id:1,
            name:'sandip ghadge',
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

        }

    ];


});


angularJsAppModule.controller('CreateCtrl', function($scope,$location){
    $scope.save = function(){
        $scope.users.push({id: $scope.user.id, name:$scope.user.name, age:$scope.user.age,gender: $scope.user.gender});
        $location.path('/');
        console.log( $scope.users);
    }
});





