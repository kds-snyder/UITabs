	angular.module('routedTabs').controller("mainTabsController", function($rootScope, $scope, $state) {		

		$scope.go = function(route){
			$state.go(route);
		};

		$scope.active = function(route){
			return $state.is(route);
		};

		$scope.tabs = [
			{ heading: "Tab 1", route:"main.tab1", active:false },
			{ heading: "Tab 2", route:"main.tab2", active:false },
			{ heading: "Tab 3", route:"main.tab3", active:false },
		];

		$scope.$on("$stateChangeSuccess", function() {
			$scope.tabs.forEach(function(tab) {
				tab.active = $scope.active(tab.route);
			});
		});
	});