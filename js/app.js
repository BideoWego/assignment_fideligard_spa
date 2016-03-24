// ----------------------------------------
// App
// ----------------------------------------

var Fideligard = angular.module('Fideligard', ['ui.router']);


Fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/portfolio');

  $stateProvider
    .state('root', {
      abstract: true,
      views: {
        "": {
          controller: 'StocksCtrl'
        },
        "stocks@root": {
          templateUrl: '/js/templates/stocks/index.html'
        },
        "dates@root": {
          templateUrl: '/js/templates/stocks/dates.html'
        }
      },
      resolve: {
        stocks: ['StockService', function(StockService) {
          return StockService.all();
        }],
        dates: ['stocks', 'StockService', function(stocks, StockService) {
          return StockService.dates();
        }],
        symbols: ['stocks', 'StockService', function(stocks, StockService) {
          return StockService.symbols();
        }]
      }
    })
    .state('root.trades', {
      url: '/trades',
      views: {
        "trades@root": {
          controller: 'TradesCtrl',
          templateUrl: '/js/templates/trades/form.html'
        }
      }
    })
    .state('root.transactions', {
      url: '/transactions',
      views: {
        "transactions@root": {
          controller: 'TransactionsCtrl',
          templateUrl: '/js/templates/transactions/index.html'
        }
      }
    })
    .state('root.portfolio', {
      url: '/portfolio',
      views: {
        "portfolio@root": {
          controller: 'PortfoliosCtrl',
          templateUrl: '/js/templates/portfolios/show.html'
        }
      }
    });

});

