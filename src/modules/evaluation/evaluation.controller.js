export default class Controller {
  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

  $onInit = () => {
    this.$log.info('Debug');
  };
}