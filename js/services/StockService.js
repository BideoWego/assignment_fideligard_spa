// ----------------------------------------
// StockService
// ----------------------------------------

Fideligard.factory('StockService',
  ['$http', function($http) {

    var StockService = {};

    StockService.stocks = [];

    StockService.all = function() {
      return $http({
        url: '/data/stocks.json',
      })
        .then(function(response) {
          StockService.stocks = response.data.query.results.quote;
          return StockService.stocks.slice();
        }, function(response) {
          console.error(response);
        });
    };

    StockService.dates = function() {
      return _.pluck(StockService.stocks, 'Date');
    };

    return StockService;

  }]);




