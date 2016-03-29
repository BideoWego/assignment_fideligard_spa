// ----------------------------------------
// FlashService
// ----------------------------------------
// Flash messages available on the $rootScope
// 
// May be created or destroyed via
//  $scope.flash.create()
//  $scope.flash.destroy()
// 
// Messages are available via
//  $scope.flash.alerts

Fideligard.factory('FlashService',
  ['_', '$rootScope',
  function(_, $rootScope) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    var _reservedWords = [
      'success',
      'notice',
      'info',
      'warning',
      'danger',
      'error'
    ];


    var _resolveType = function(type) {
      return {
        notice: 'info',
        error: 'danger'
      }[type] || type;
    };


    var _createTypeIfNotExists = function(service, type) {
      if (service.alerts[type] === undefined) {
        service.alerts[type] = [];
      }
    };


    var _resolveCreateOptions = function(a, b) {
      if (_.isObject(a)) {
        a.type = a.type || 'info';
        return a;
      }
      var type = a,
          message = b;
      if (!_.contains(_reservedWords, a)) {
        type = 'info';
        message = a;
      }
      return {
        type: type,
        message: message
      };
    };

    // ----------------------------------------
    // Public
    // ----------------------------------------

    var FlashService = {};

    FlashService.alerts = {};


    FlashService.create = function(a, b) {
      var options = _resolveCreateOptions(a, b),
          type = options.type,
          message = options.message;
      type = _resolveType(type);
      _createTypeIfNotExists(this, type);
      this.alerts[type].push(message);
      console.log(this.alerts);
    };


    FlashService.destroy = function(type, id) {
      type = _resolveType(type);
      this.alerts[type].splice(id, 1);
      console.log(this.alerts);
    };


    FlashService.init = function() {
      $rootScope.flash = {
        alerts: this.alerts,
        create: this.create,
        destroy: this.destroy
      };
    };


    return FlashService;

  }]);




