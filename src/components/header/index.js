import component from './header.component';

export const ngDirective = 'factoringHeader';

export const ngModule = angular.module('app.header', []);

/**
 * @description
 * Setting ng directive name.
 */
ngModule.directive(ngDirective, () => {
  return {
    controller: component.controller,
    controllerAs: component.controllerAs,
    restrict: 'E',
    scope: {},
    template: component.template,
    transclude: true
  }
});