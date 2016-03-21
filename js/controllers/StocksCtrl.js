// ----------------------------------------
// StocksCtrl
// ----------------------------------------

Fideligard.controller('StocksCtrl',
  ['$scope', '$rootScope', '$timeout', 'StockService', 'stocks',
  function($scope, $rootScope, $timeout, StockService, stocks) {

    $scope.foo = 'bar';

    $scope.dates = StockService.dates();
    $scope.symbols = StockService.symbols();

    console.log($scope.dates);
    console.log($scope.symbols);
    
    $rootScope.globals = {
      dateIndex: $scope.dates.length - 1,
      date: $scope.dates[$scope.dates.length - 1],
      startDate: $scope.dates[0],
      endDate: $scope.dates[$scope.dates.length - 1]
    };
    $timeout(function() {
      $('#date-picker').val($rootScope.globals.dateIndex); }
    , 1);


    $scope.updateDate = function() {
      var index = $rootScope.globals.dateIndex;
      $rootScope.globals.date = $scope.dates[index];
    };

  }]);




