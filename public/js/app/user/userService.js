angular.module("userModule")
    .factory("userService", userService);

userService.$inject = ['$http'];

function userService($scope){
    return{
        createUser : function(user){
            return $http.post('/createUser', {
                    memCode: user.memCode,
                    memberCode: user.memberCode,
                    lastName: user.lastName,
                    firstName: user.firstName
                }
            );
        }
    };
}
