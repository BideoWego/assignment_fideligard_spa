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
        stocks: function(StockService) {
          return StockService.all();
        },
        dates: function(StockService) {
          return StockService.dates();
        }
      }
    })
    .state('root.trades', {
      url: '/trades',
      views: {
        "trades@root": {
          controller: 'TradesCtrl',
          templateUrl: '/js/templates/trades/index.html'
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

