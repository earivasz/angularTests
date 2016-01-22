angular.module('mytodoApp')
  .controller('AboutCtrl', function ($scope, $log, $rootScope, $http, $route) {
    $scope.steps = [
        {templateUrl: 'views/templates/firstStep.html',hasForm: true, title: 'Informacion de usuario'},
        {templateUrl: 'views/templates/secondStep.html',hasForm: true, title: 'Roles de aplicacion'},
        {templateUrl: 'views/templates/thirdStep.html',hasForm: true, title: 'Roles de bpm'}
    ];
    $scope.roles = [
    	{id:1, name: "Rol 1"},
    	{id:2, name: "Rol 2"}
    ];
    $scope.newUser = {userName: "Eduardo", app: "a@a.com", rolesApp: [2], rolesBpm: []};

    $scope.roles = function(){
        $http.get($rootScope.restUrl + "GetRoles/", {'Access-Control-Allow-Origin' : '*'}).then(function(data){
            $log.info(data.data.data[0].name);
            $scope.roles = data.data.data;
        }, function(data){
            alert(data);
        });
    };

    $scope.clearAll = function() {
        //$scope.newUser = {userName: "", app: "", rolesApp: [], rolesBpm: []};
        //$scope.newUser = {};
        $route.reload();
    }

    $http.get($rootScope.restUrl + "GetRoles/", {'Access-Control-Allow-Origin' : '*'}).then(function(data){
            $log.info(data.data.data[0].name);
            $scope.roles = data.data.data;
        }, function(data){
            alert(data);
        });
    /*$http({method: "GET", url: $rootScope.restUrl + "Roles"}).then(function(data){
		alert(data);
	},function(data){
		alert("Error: " + data);
	});*/

  });