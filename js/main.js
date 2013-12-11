var myApp = angular.module("myApp", []);

myApp.factory("Data", function(){
    return {message : "this message is from service"}
});


function FirstCtrl($scope,Data){
$scope.data = Data
}

function SencondCtrl($scope,Data){
    $scope.data = Data
    $scope.reverseMessage = function(){
        return $scope.data.message.split("").reverse().join("");
    }
}