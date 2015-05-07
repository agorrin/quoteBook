var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, mainService)	{
	
	$scope.displayQuotes = mainService.getData();

	$scope.addQuote = mainService.addData;

	$scope.removeQuote = mainService.removeData;

});