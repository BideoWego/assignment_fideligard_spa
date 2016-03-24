// ----------------------------------------
// StocksCtrl
// ----------------------------------------

Fideligard.controller('StocksCtrl',
  ['$scope', '$rootScope', '$timeout', 'stocks', 'dates', 'symbols',
  function($scope, $rootScope, $timeout, stocks, dates, symbols) {

    $scope.stocks = stocks;
    $scope.dates = dates;
    $scope.symbols = symbols;
    
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




