// ----------------------------------------
// StocksCtrl
// ----------------------------------------

Fideligard.controller('StocksCtrl',
  ['_', '$scope', '$timeout', 'stocks', 'companies', 'dates', 'dateInfo',
  function(_, $scope, $timeout, stocks, companies, dates, dateInfo) {

    console.log(stocks, companies, dates, dateInfo);
    $scope.stocks = stocks;
    $scope.companes = companies;
    $scope.dates = dates;
    $scope.dateInfo = dateInfo;

  }]);




