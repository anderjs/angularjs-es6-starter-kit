import './app.modules';
import './app.components';
import './core';

/**
 * @description
 * Loading modules of the application.
 */
import { ngName as evaluation } from './modules/evaluation';
import { ngName as header } from './components/header';

const modules = [
	'app.core',
	'ui.router',
	'app.header',
	header,
	evaluation,
];

export default angular.module('app', modules);

