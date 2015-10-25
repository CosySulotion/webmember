angular.module("userModule")
.controller("userController", userController);

userController.$inject = ['$scope', '$timeout', 'userService'];

function userController($scope, $timeout, userService){
    $scope.user = {
        memCode: "",
        memberCode: "",
        lastName: "",
        firstName: ""
    };

    $scope.createUser = function(user){
        userService.createUser(user)
            .success(function(data){
                /*$timeout(function(){

                },3000)*/

            });
    };
}