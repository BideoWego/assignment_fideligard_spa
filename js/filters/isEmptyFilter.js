// ----------------------------------------
// Filters
// ----------------------------------------

Fideligard.filter('isEmpty',
  ['_',
  function (_) {
    return function (arg) {
      if (_.isObject(arg)) {
        return _.keys(arg).length === 0;
      } else if (_.isArray(arg) || _.isString(arg)) {
        return arg.length === 0;
      } else {
        throw new TypeError("Type " + (typeof arg) + " is not a valid value for filter 'isEmpty'");
      }
    };
  }]);






