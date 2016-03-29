// ----------------------------------------
// Globals Initializer
// ----------------------------------------

Fideligard.run(function($rootScope) {
  $rootScope.times = function(n) {
    var a = [];
    var i = 0;
    while( a.push(i++) < n){}
    return a;
  };
});

