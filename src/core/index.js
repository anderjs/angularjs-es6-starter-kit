import router from './router';

import * as filters from './filters';

/**
 * @alias Core
 * @description
 * Core module of the application.
 */
const core = angular.module('app.core', ['ui.router']);

/**
 * @description
 * Inject services, config, filters and re-usable code.
 */
core.config(router);


core.filter('exist', filters.exist);


core.filter('decimal', filters.decimal);


core.filter('decimalR', filters.decimalRounded);


core.filter('transform', filters.capitalizeLower);
/**
 * @description
 * Exporting core module.
 */
export default core;