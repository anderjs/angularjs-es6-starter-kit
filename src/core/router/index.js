export const routes = [
	{
    component: 'evaluation',
    name: 'evaluation',
    url: '/'
  },
];

/**
 * 
 * @param {} $stateProvider 
 * @param {} $urlRouterProvider 
 * @param {} $locationProvider 
 */
export default function service ($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	routes.forEach((route) => $stateProvider.state(route));
}