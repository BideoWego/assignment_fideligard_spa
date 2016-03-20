// ----------------------------------------
// App
// ----------------------------------------

var Fideligard = angular.module('Fideligard', ['ui.router']);


Fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/stocks');

  // http://stackoverflow.com/a/26241415

  $stateProvider
    .state('stocks', {
      url: '/stocks',
      controller: 'StocksCtrl',
      templateUrl: '/js/templates/stocks/index.html',
      resolve: {
        stocks: function(StockService) {
          return StockService.all();
        },

        dates: function(StockService) {
          return StockService.dates();
        }
      }
    })
    .state('trades', {
      url: '/trades',
      controller: 'TradesCtrl',
      templateUrl: '/js/templates/trades/index.html'
    })
    .state('transactions', {
      url: '/transactions',
      controller: 'TransactionsCtrl',
      templateUrl: '/js/templates/transactions/index.html'
    })
    .state('portfolio', {
      url: '/portfolio',
      controller: 'PortfoliosCtrl',
      templateUrl: '/js/templates/portfolios/show.html'
    });

});

