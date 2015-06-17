'use strict';

angular.module('personalPortfolio')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
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
  			},
  			{
  				"name":"Blog",
  				"hash":"blog",
  				"icon": "glyphicon-pencil"
  			}

  		];
  		$scope.works = 
  		[
	  		{
	  			"title" : "Waitstaff Calculator",
	  			"description" : "Designed small business payroll application that tracks earnings of restaurant employees using Bootstrap",
	  			"image": "../assets/images/soon.png",
	  			"github" : "https://github.com/songvc/waitstaff",
	  			"website": "http://www.google.com"		
	  		},
	  		{
	  			"title" : "Country & Capitals",
	  			"description" : "Created geo-data search application that allows users to interact with national city data using Geoname API",
	  			"image": "../assets/images/soon.png",
	  			"github" : "https://github.com/songvc/country",
	  			"website": "http://www.google.com"		
	  		},
	  		{
	  			"title" : "Calendar Directive",
	  			"description" : "Designed calendar application UI using Angular directive and Bootstrap",
	  			"image": "../assets/images/soon.png",
	  			"github" : "https://github.com/songvc/angular-js-calendar-directive-challenge",
	  			"website": "http://www.google.com"		
	  		},
	  		{
	  			"title" : "Instagram Search",
	  			"description" : "Created Instagram photo search application using Instagram API, Angular and Bootstrap",
	  			"image": "../assets/images/soon.png",
	  			"github" : "https://github.com/songvc/instagram",
	  			"website": "http://www.google.com"		
	  		},
	  		{
	  			"title" : "ngMadlibs",
	  			"description" : "Utilized Bootstrap, Angular, Instagram API to build an mad-lib game ",
	  			"image": "../assets/images/soon.png",
	  			"github" : "https://github.com/songvc/ngMadLibs",
	  			"website": "http://www.google.com"		
	  		},
	  		{
	  			"title" : "Hot or Cold",
	  			"description" : "Built Hot or Cold game application, designed its layout and style, and implemented its UI using JQuery",
	  			"image": "../assets/images/soon.png",
	  			"github" : "https://github.com/songvc/hot-or-cold-starter",
	  			"website": "http://www.google.com"
	  		},

	  		{
	  			"title" : "Street Fighter",
	  			"description" : "Created 2D Street Fighter game application and designed its interactive features and animation using JQuery",
	  			"image": "../assets/images/soon.png",
	  			"github" : "https://github.com/songvc/jquery-streetfighter",
	  			"website": "http://www.google.com"
	  		}

  		];

  		$scope.gotoAnchor = function(hashtag){
  			console.log(hashtag);
	        $location.hash(hashtag);
	        $anchorScroll();
  		}



  });
