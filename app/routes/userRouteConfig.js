function userRouteconfig(app){
    this.app = app;
    this.routeTable = [];
    this.init();
}

userRouteconfig.prototype.init = function(){
    var self = this;
    this.addRoutes();
    this.processRoutes();
}

userRouteconfig.prototype.processRoutes = function(){
    var self = this;
    self.routeTable.forEach(function(route){
        if(route.requestType == 'get'){
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if(route.requestType == 'post'){

        }
        else if(route.requestType == 'delete'){

        }
    });
}

userRouteconfig.prototype.addRoutes = function(){
    var self = this;
    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/createUser',
        callbackFunction: function(request, response){
            response.render('createUser', {title:"Sign Up"});
        }
    });

    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/createUser',
        callbackFunction: function(request, response){
            //response.render('createUser', {title:"Sign Up"});
            dao.createUser(user, function(status){
                response.json("")
            });
        }
    });

    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/viewUser',
        callbackFunction: function(request, response){
            response.render('viewUser', {title:"View User Profile"});
        }
    });
}

module.exports = userRouteconfig;