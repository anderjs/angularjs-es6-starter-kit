export default class Controller {
  /**
   * @param {import ('angular').IScope} $scope
   * @param {import ('angular').IRootScopeService} $rootScope 
   */
  constructor ($scope, $rootScope) {
    'ngInject';

    this.$scope = $scope;

    this.$rootScope = $rootScope;

    this.data = {};
  }


  $onInit = () => {
    this.$rootScope.$watch("context", (context) => {
      if (context) {
        const formatter = new Intl.NumberFormat('es-CL', {
          currency: 'CLP',
          style: "currency"
        });

        this.data = {
          amount: formatter.format(context.InformacionLineaDeuda.LineaAprobadaFactoring).replace("$", ""),
            rut: utils.format(context.EvaluacionNegocio.Rut + "-" + context.EvaluacionNegocio.Dv, {
              dots: true
            }),
            chief: "No Disponible",
            group: "No Disponible",
            manager: "No Disponible",
            branch: context.EvaluacionNegocio.Sucursal,
            watch: context.ScoreGeneral.ClasificacionWatch,
            risk: context.ScoreGeneral.ClasificacionRiesgo,
            subsegment: context.EvaluacionNegocio.Subsegmento,
            isDebtor: context.EvaluacionNegocio.EsDeudor ? "Si" : "No",
            isClient: context.EvaluacionNegocio.EsCliente ? "Si" : "No",
            segment: context.ScoreGeneral.Segmento || "No Disponible",
            name: context.EvaluacionNegocio.Nombre || "No Disponible",
            dicom: context.EvaluacionNegocio.Dicom || "No Disponible",
            block: context.EvaluacionNegocio.Bloqueo  || "No Disponible",
            date: context.EvaluacionNegocio.FechaDicom || "No Disponible",
            order: context.EvaluacionNegocio.GiroAfecta || "No Disponible",
            executive: context.EvaluacionNegocio.Ejecutivo || "No Disponible",
            debtorNote: context.EvaluacionNegocio.NotaDeudor ||  context.EvaluacionNegocio.NotaDeudor === 0 ? context.EvaluacionNegocio.NotaDeudor :  "No Disponible",
            clientNote: context.EvaluacionNegocio.NotaCliente ||  context.EvaluacionNegocio.NotaCliente === 0 ? context.EvaluacionNegocio.NotaCliente : "No Disponible",
        }
      }
    });
  };
}