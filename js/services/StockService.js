// ----------------------------------------
// StockService
// ----------------------------------------

Fideligard.factory('StockService',
  ['_', '$http', '$q',
  function(_, $http, $q) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

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

    var _stocks = {};

    var _createRequests = function() {
      var requests = {};
      _.each(_symbols, function(symbol) {
        var request = $http({
          url: '/data/' + symbol + '.json'
        });
        requests[symbol] = request;
      });
      return requests;
    };


    var _all = function() {
      var requests = _createRequests();
      return $q.all(requests)
        .then(function(response) {
          _stocks = _.map(response, function(object) {
            return object.data.dataset;
          });
          return _stocks;
        }, function(response) {
          console.error(response);
          return response;
        });
    };


    // ----------------------------------------
    // Public
    // ----------------------------------------

    var StockService = {};

    StockService.all = function() {
      if (_.isEmpty(_stocks)) {
        return _all();
      }
      return _stocks;
    };

    return StockService;

  }]);




