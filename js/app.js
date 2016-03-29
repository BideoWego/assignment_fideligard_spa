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
          console.log(StockService);
          return StockService.all();
        },
        companies: ['stocks', 'CompanyService', function(stocks, CompanyService) {
          console.log(stocks, CompanyService);
          CompanyService.init(stocks);
          return CompanyService.all();
        }],
        dates: ['companies', 'DateService', function(companies, DateService) {
          console.log(companies, DateService);
          return DateService.all();
        }],
        dateInfo: ['companies', 'DateService', function(companies, DateService) {
          console.log(companies, DateService);
          return DateService.getInfo();
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



