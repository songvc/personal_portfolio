'use strict';

angular.module('personalPortfolio')
  .controller('MainCtrl', function ($scope, $http, $location, $anchorScroll) {
  		  		
  		$scope.menus = 
  		[
  			{
  				"name":"About Me",
  				"hash":"aboutme",
  				"icon": "glyphicon-user"
  			},
 			{
  				"name":"Portfolio",
  				"hash":"portfolio",
  				"icon": "glyphicon-folder-open"
  			},
  			{
  				"name":"Contact",
  				"hash":"contact",
  				"icon": "glyphicon-envelope"
  			}

  		];

  		$scope.skills=
  		["HTML5","CSS3","JQuery","Angular","Bootstrap3","SASS","JavaScript","Gulp","Yeoman","Grunt","Protractor","Jasmine","Karma","Express","Node","MongoDB","Firebase","Nginx"];
  		
  		$scope.works = 
  		[
	  		{
	  			"title" : "Waitstaff Calculator",
	  			"description" : "Designed small business payroll application that tracks earnings of restaurant employees using Bootstrap",
	  			"image": "../assets/images/waitstaff.png",
	  			"github" : "https://github.com/songvc/wait-staff-refactor",
	  			"website": "http://www.google.com",
	  			"tooltip": "See Github"		
	  		},
	  		{
	  			"title" : "Country & Capitals",
	  			"description" : "Created geo-data search application that allows users to interact with national city data using Geoname API",
	  			"image": "../assets/images/location.png",
	  			"github" : "https://github.com/songvc/country",
	  			"website": "http://www.google.com",
	  			"tooltip": "See Github"		
	  		},
	  		{
	  			"title" : "Calendar Directive",
	  			"description" : "Designed calendar application UI using Angular directive and Bootstrap",
	  			"image": "../assets/images/calendar.png",
	  			"github" : "https://github.com/songvc/angular-js-calendar-directive-challenge",
	  			"website": "http://www.google.com",
	  			"tooltip": "See Github"		
	  		},
	  		{
	  			"title" : "Instagram Search",
	  			"description" : "Created Instagram photo search application using Instagram API, Angular and Bootstrap",
	  			"image": "../assets/images/instagram.png",
	  			"github" : "https://github.com/songvc/instagram",
	  			"website": "http://www.google.com",
	  			"tooltip": "See Github"		
	  		},
	  		{
	  			"title" : "ngMadlibs",
	  			"description" : "Utilized Bootstrap and Angular to build an mad-lib game ",
	  			"image": "../assets/images/ngmadlib.png",
	  			"github" : "https://github.com/songvc/ngMadLibs",
	  			"website": "http://www.google.com",
	  			"tooltip": "See Github"		
	  		},
	  		{
	  			"title" : "Hot or Cold",
	  			"description" : "Built Hot or Cold game application, designed its layout and style, and implemented its UI using JQuery",
	  			"image": "../assets/images/hotorcold.png",
	  			"github" : "https://github.com/songvc/hot-or-cold-starter",
	  			"website": "http://www.google.com",
	  			"tooltip": "See Github"
	  		},

	  		{
	  			"title" : "Street Fighter",
	  			"description" : "Created 2D Street Fighter game application and designed its interactive features and animation using JQuery",
	  			"image": "../assets/images/streetfighter.png",
	  			"github" : "https://github.com/songvc/jquery-streetfighter",
	  			"website": "http://www.google.com",
	  			"tooltip": "See Github"
	  		}

  		];

  		$scope.gotoAnchor = function(hashtag){
	        $location.hash(hashtag);
	        $anchorScroll();
  		}


  });
