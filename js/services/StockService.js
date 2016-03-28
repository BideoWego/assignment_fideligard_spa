// ----------------------------------------
// StockService
// ----------------------------------------

Fideligard.factory('StockService',
  ['_', '$http', '$q',
  function(_, $http, $q) {


    var _symbols = [
      'a',
      'aapl',
      'abc',
      'bac',
      'cbs',
      'fb',
      'nflx',
      'nke',
      'sam',
      'twtr'
    ];


    var StockService = {};

    StockService.stocks = [];

    StockService.all = function() {
      var symbols = _symbols.slice();
      var requests = [];
      _.each(_symbols, function(symbol) {
        var request = $http({
          url: '/data/' + symbol + '.json'
        });
        requests.push(request);
      });
      return $q.all(requests)
        .then(function(response) {
          console.log(response);
          var stocks = _.map(response, function(object) {
            return object.data.dataset;
          });
          StockService.stocks = stocks;
          return stocks;
        }, function(response) {
          console.error(response);
          return repsonse;
        });
    };


    StockService.dates = function() {
      var dates = [],
          companies = _.values(StockService.stocks);
      _.each(companies,  function(company) {
        console.log(company);
        dates = dates.concat(_.map(company.data, function(entry) {
          return entry[0];
        }));
      });
      return _.uniq(dates);
    };


    StockService.symbols = function() {
      return _.map(_symbols, function(symbol) {
        return symbol.toUpperCase();
      });
    };

    return StockService;

  }]);




