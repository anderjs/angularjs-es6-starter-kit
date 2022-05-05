import component from './evaluation.component';

export const ngName = 'evaluation';

export const ngModule = angular.module('app.evaluation', []);

ngModule.component(ngName, component);