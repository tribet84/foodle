'use strict';

angular.module('foodleApp.auth', [
  'foodleApp.constants',
  'foodleApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
