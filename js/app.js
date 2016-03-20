// ----------------------------------------
// App
// ----------------------------------------

var Fideligard = angular.module('Fideligard', ['ui.router']);


Fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('stocks', {
      url: '/stocks',
      controller: 'StocksCtrl',
      templateUrl: 'templates/stocks/index.html'
    })
    .state('trades', {
      url: '/trades',
      controller: 'TradesCtrl',
      templateUrl: 'templates/trades/index.html'
    })
    .state('transactions', {
      url: '/transactions',
      controller: 'TransactionsCtrl',
      templateUrl: 'templates/transactions/index.html'
    })
    .state('portfolio', {
      url: '/portfolio',
      controller: 'PortfoliosCtrl',
      templateUrl: 'templates/portfolios/show.html'
    });

});

