// ----------------------------------------
// DateService
// ----------------------------------------


Fideligard.factory('DateService',
  ['_', 'EntryService',
  function(_, EntryService) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    var _dates = [];
    var _info = {};

    var _initializeInfo = function(dates) {
      _info = {
        start: _.first(dates),
        end: _.last(dates),
        current: _.last(dates),
        index: _.lastIndexOf(dates),
        setDate: function() {
          console.log('asdf');
          this.current = dates[this.index];
        }
      };
    };

    var _all = function() {
      var dates = [];
      var entries = EntryService.all();
      dates = _.map(entries, function(entry) {
        return entry.date;
      });
      _dates = _.uniq(dates);
      console.log(_dates);
      return _dates;
    };

    // ----------------------------------------
    // Public
    // ----------------------------------------

    var DateService = {};

    DateService.getInfo = function() {
      return _info;
    };

    DateService.all = function() {
      if (_.isEmpty(_dates)) {
        _all();
        _initializeInfo(_dates);
      }
      return _dates;
    };

    return DateService;

  }]);










