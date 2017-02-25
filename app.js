
(function(angular) {
var lendMeBookApp = angular.module('lendMeBookApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/Category/:CategoryID', {
          templateUrl : "category.html",
          controller : 'CategoryController',
          controllerAs : "category"
        })
        .when('/Category/:CategoryID/:BookID', {
          templateUrl : "book.html",
          controller : 'BookCtrl',
          controllerAs : "book"
        })

        ;

     $locationProvider.html5Mode(true);
  }])

lendMeBookApp.controller('MainController', ['$scope','$route', '$routeParams', '$location',
    function MainCtrl($scope,$route, $routeParams, $location) {

      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
  }])


lendMeBookApp.controller('CategoryController',
 ['$routeParams', '$scope', function CategoryController($routeParams, $scope) {
    this.name = 'CategoryController';
    this.params = $routeParams;

    if(this.params.CategoryID === "English") {
      this.myBooks = [{name:'Americana', owners:[{name:'Surya', email:"yaaa@gmail.com"},
          {name:'Megan', email: "yaaa@gmail.com"}]},
                    {name: 'Hidden Figures',owners:[{name:'Joe', email:"joe@gmail.com"},
                     {name:'Tom', email:"tom@gmail.com"}]},
                    {name: 'Pursuit of Happiness',owners:[{name:'Sarah', email:"sarah@gmail.com"}]}];
    }
    if(this.params.CategoryID === "Science") {
      this.myBooks = [{name:'Molecules', owners:[{name:'Surya', email:"yaaa@gmail.com"},
          {name:'Megan', email: "yaaa@gmail.com"}]},
                    {name: 'Chemicals',owners:[{name:'Joe', email:"joe@gmail.com"},
                     {name:'Tom', email:"tom@gmail.com"}]},
                    {name: 'Atoms', owners:[{name:'Sarah', email:"sarah@gmail.com"}]}];
    }
    if(this.params.CategoryID === "ComputerScience") {
      this.myBooks = [{name:'Arrays', owners:[{name:'Surya', email:"yaaa@gmail.com"},
          {name:'Megan', email: "yaaa@gmail.com"}]},
                    {name: 'Angular Sucks', owners:[{name:'Timothy', email:"timothy@gmail.com"},
                     {name:'Jemima', email:"jemima@gmail.com"}]},
                    {name: 'Hello World', owners:[{name:'Sarah', email:"sarah@gmail.com"}]}];
    }
    if(this.params.CategoryID === "Math") {
      this.myBooks = [{name:'Algebra', owners:[{name:'Sharon', email:"sharon@gmail.com"}]}];
    }

  }])

lendMeBookApp.controller('BookCtrl', ['$routeParams', function BookCtrl($routeParams) {
    this.name = 'BookCtrl';
    this.params = $routeParams;
  }]);

})(window.angular);


//}]);
