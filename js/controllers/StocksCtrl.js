// ----------------------------------------
// StocksCtrl
// ----------------------------------------

Fideligard.controller('StocksCtrl',
  ['$scope', 'StockService', 'stocks',
  function($scope, StockService, stocks) {

    $scope.foo = 'bar';

    $scope.dates = StockService.dates();

    console.log(stocks);
    console.log(StockService.dates());

  }]);




