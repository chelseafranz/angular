(function(){
angular.module('PeopleList', ['ngRoute']).config( function($routeProvider){
	$routeProvider.when('/', {
//string that matches route we are trying to identify with, second thing is a obhect telling that what to do
		controller: 'PersonController',
		templateUrl: 'templates/list-template.html'
	});

	$routeProvider.when('/about',{
		templateUrl:'templates/about-template.html',
		controller:'AboutController'
	});
	$routeProvider.otherwise({
		templateUrl:'templates/other-template.html',
		controller:'OtherController'
	});

});

angular.module('PeopleList').controller('SidebarController', ['$scope', function($scope) {
	$scope.greeting = 'Whats up?';

}]);

 }());








