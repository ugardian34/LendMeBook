var lendMeBookApp = angular.module('lendMeBookApp',[]);



lendMeBookApp.controller('CategoryController', ['$scope', function($scope) {
  $scope.books = [];

$scope.EnglishBooks = function(){
  $scope.books = [{name:'Americana'},
                  {name: 'HiddenFigures'},
                  {name: 'PursuitofHappiness'}];
}


}]);
