angular.module('kokbokApp', [])
	.controller('KokbokListCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.recepies = [];
			$http.get('recepies/recepies.json').success(function(data) {
				$scope.recepies = data;
			});
		}
	]);
