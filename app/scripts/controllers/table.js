'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('TableCtrl', function ($scope, NgTableParams) {
	//var self = this;
	this.data = [{name: "Moroni", age: 50}, {name: "Moroni", age: 51}, {name: "Moroni", age: 52}, {name: "Moroni", age: 50}, {name: "Moroni", age: 50}, {name: "Moroni", age: 53}];
	this.tableParams = new NgTableParams({
      page: 1, // show first page
      count: 5 // count per page
    }, {
      filterDelay: 0,
      data: this.data,
      counts: []
    });
	//self.tableParams = new NgTableParams({}, { dataset: data});
  });
