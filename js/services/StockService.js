// ----------------------------------------
// StockService
// ----------------------------------------

Fideligard.factory('StockService',
  ['$http',
  function($http) {


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
      var temp;
      $http({
        url: '/data/a.json'
      })
      .then(function(response) {
        console.log(response);
      }, function(response) {
        console.log(response);
      });
      // while ((var symbol = symbols.pop())) {
      //   if (!!temp) {

      //   } else {

      //   }
      // }
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




