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
          StockService.stocks = response.data;
          return StockService.stocks;
        }, function(response) {
          console.error(response);
        });
    };

    StockService.dates = function() {
      var dates = [],
          companies = _.values(StockService.stocks);
      _.each(companies,  function(company) {
        console.log(company);
        var d = _.pluck(company.stocks, 'Date');
        dates = dates.concat(d);
      });
      return _.uniq(dates);
    };

    StockService.symbols = function() {
      return _.map(Object.keys(StockService.stocks), function(key) {
        return key.toUpperCase();
      });
    };

    return StockService;

  }]);




