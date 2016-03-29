// ----------------------------------------
// CompanyService
// ----------------------------------------

Fideligard.factory('CompanyService',
  ['_', 'EntryService',
  function(_, EntryService) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    var _stocks = [];
    var _companies = {};

    var _createCompany = function(options) {
      return {
        name: options.name,
        symbol: options.data_setcode,
        dates: {
          start: options.start_date,
          end: options.end_date
        },
        entries: EntryService.create(options.data)
      };
    };

    var _all = function() {
      _companies = _.map(_stocks, function(company) {
        return _createCompany(company);
      });
      return _companies;
    };

    // ----------------------------------------
    // Public
    // ----------------------------------------

    CompanyService = {};

    CompanyService.init = function(stocks) {
      _stocks = stocks;
    };

    CompanyService.all = function() {
      if (_.isEmpty(_companies)) {
        return _all();
      }
      return _companies;
    };

    return CompanyService;

  }]);


