// ----------------------------------------
// EntryService
// ----------------------------------------

Fideligard.factory('EntryService',
  ['_', function(_) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    var _entries = [];

    var _columns = {
      date: 0,
      open: 1,
      high: 2,
      low: 3,
      close: 4,
      volume: 5
    };

    // ----------------------------------------
    // Public
    // ----------------------------------------

    var EntryService = {};

    EntryService.create = function(entries) {
      console.log(entries);
      return _.map(entries, function(entry) {
        entry = {
          date: entry[_columns.date],
          open: entry[_columns.open],
          high: entry[_columns.high],
          low: entry[_columns.low],
          close: entry[_columns.close],
          volume: entry[_columns.volume]
        };
        _entries.push(entry);
        return entry;
      });
    };

    EntryService.all = function() {
      return _entries;
    };

    return EntryService;

  }]);




