/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

angular.module('jessdocs', [
  'ngAnimate', 
  'ngSanitize', 
  'ngMessages', 
  'ngAria', 
  'ngResource', 
  'angular-click-outside',
  'focus-if',
  'ui.router', 
  'ui.tree',
  'ngMaterial',
  'mdColorPicker',
  'ng-token-auth'])
  .filter('getById', function() {
    return function(input, id) {
      var i=0, len=input.length;
      for (; i<len; i++) {
        if (+input[i].id == +id) {
          return input[i];
        }
      }
      return null;
    }
  })
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .config(function($authProvider) {
      $authProvider.configure({
          apiUrl: 'https://jessdocs-jrobins.c9users.io:8082',
          omniauthWindowType: 'newWindow',
          authProviderPaths: {
            google:   '/auth/google_oauth2'
          }
      });
  })
  .run(runBlock);