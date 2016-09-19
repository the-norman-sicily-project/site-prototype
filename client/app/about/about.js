'use strict';

angular.module('siciliaNormannaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        onEnter() {
          console.log('enter about');
        }
      });
  });
