angular.module('PancakeFrontEnd').
controller('newClientController', newClient);

//newClient.$inject = ['$scope'];

function newClient($scope, $http, $q, OddsEnds) {
  $scope.client = {
    'X-API-KEY': OddsEnds.getClientKey(),
    prefixTitle: '',
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone: '',
    mobile: '',
    fax: '',
    address: ''
  };

  $scope.addClient = function() {
    sendData($scope.client);
  };

  function sendData(dataObj) {
      console.log(dataObj);
      $.ajax({
        url: OddsEnds.getBaseUrl + 'api/1/clients/new',
        type: 'POST',
        data: dataObj
      }).done(function(data, statusText, xhr) {
        console.log(data.message);
      }).error(function(data, statusText, xhr) {
        console.log(data);
        console.log(statusText);
        console.log(xhr);
      });

  }
}
