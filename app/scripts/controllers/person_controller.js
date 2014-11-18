(function(){
		angular.module('PeopleList').controller('PersonController', ['$scope', function($scope){
			//anything we want to have access to must be a usable asset inside of function

			$scope.person = {
				name: 'Chelsea',
				age: 25
			};

			$scope.people = [
			{
				name: 'Chelsea',
				age: 25,
				test: true
			},
				{
				name: 'Jo',
				age: 109,
				test: false
			}
			];

			$scope.hello= function (n,i){
				if($scope.people[i].name === 'Chelsea'){
					alert('hey');
				}else{
				alert('hi ' + n);
			}
			};


		}]);
 }());