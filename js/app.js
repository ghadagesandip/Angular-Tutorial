
var angularJsAppModule = angular.module('angularJsApp',[]);


angularJsAppModule.config(function($routeProvider){

    $routeProvider.when('/users',{
        templateUrl : 'views/users.html',
        controller : 'UsersCtrl'
    }).otherwise({
       redirectTo :'/users'
    });


});

angularJsAppModule.factory("Users", function($http){
    var factory = {};
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

    factory.getUsers = function(){
        return users;
    }

    factory.addUsers = function(newUser){
        users.push(newUser);
        return true;
    }

    return factory;

});

angularJsAppModule.controller('UsersCtrl', function($scope,Users){

    $scope.genders = {male:'Male',female:'Female'};
    $scope.users = [];
    console.log('init called');
    init();
    function init(){
        $scope.users = Users.getUsers();

    }

    $scope.addNewUser = function(){
      $scope.newUser.id = $scope.users.length+1
      if(Users.addUsers($scope.newUser)){
          $scope.newUser ={};
      }
    }


    $scope.delete = function(){

    }

});







