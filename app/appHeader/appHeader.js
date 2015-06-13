angular.module('imapsNgApp')
.directive('appHeader', function () {
	return {
		templateUrl: 'appHeader/appHeader.html',
		restrict: 'E',
		scope: {
			title: "="
		},
		controller: function ($scope, $rootScope) {
			$("app-header").appendTo('body');

			$rootScope.$watch('config', function (config) {
				if (config) {
					$scope.title = config.title;
				}

			});



		}
	}
});
