(function(){

	var app = angular.module("routedTabs", ["ui.router", "ui.bootstrap"]);

	app.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/main/tab1");

		$stateProvider
//			.state("main", { abtract: true, url:"/main", templateUrl:"main.html" })
			.state("main", { url:"/main", templateUrl:"/templates/tabs.html", controller: "mainTabsController" })
				.state("main.tab1", { url: "/tab1", templateUrl: "/templates/tab1.html" })
				.state("main.tab2", { url: "/tab2", templateUrl: "/templates/tab2.html" })
				.state("main.tab3", { url: "/tab3", templateUrl: "/templates/tab3.html" });

	});
	

}());
