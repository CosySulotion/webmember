var connectionProvider = require('../../mysqlConnectionStringProvider.js');
var userDao = {
    createUser: function (user, OnSuccessfulCallback){
        var insertStatement = "INSERT INTO memberprofile SET?";
        var userTmp = {
            memCode: user.memCode,
            memberCode: user.memberCode,
            lastName: user.lastName,
            firstName: user.firstName
        };
        console.log(userTmp);

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();

        if(connection){
            connection.query(insertStatement, userTmp, function(err, result){
                if(err){throw err;}
                OnSuccessfulCallback({status:'successful'});
                console.log(result);
            });
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }
};

