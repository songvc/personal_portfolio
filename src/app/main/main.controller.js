'use strict';

angular.module('personalPortfolio')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
  		$scope.myPortfolios = 
  		[
	  		{
	  			"title" : "Waitstaff Calculator",
	  			"description" : "I utilized Bootstrap and Angular to build an app that calculates the tax and tip of any restaurant bill.",
	  			"image": "",
	  			"github" : "https://github.com/songvc/waitstaff",
	  			"website": "http://www.google.com"		
	  		},
	  		{
	  			"title" : "Country & Capitals",
	  			"description" : "I utilized Bootstrap and Angular to build an app that searches and visualizes geodata",
	  			"image": "",
	  			"github" : "https://github.com/songvc/country",
	  			"website": "http://www.google.com"		
	  		},
	  		{
	  			"title" : "Calendar App",
	  			"description" : "I utilized Bootstrap and Angular to build an app that calculates the tax and tip of any restaurant bill.",
	  			"image": "",
	  			"github" : "https://github.com/songvc/angular-js-calendar-directive-challenge",
	  			"website": "http://www.google.com"		
	  		},
	  		{
	  			"title" : "Calendar App",
	  			"description" : "I utilized Bootstrap and Angular to build an app that calculates the tax and tip of any restaurant bill.",
	  			"image": "",
	  			"github" : "https://github.com/songvc/angular-js-calendar-directive-challenge",
	  			"website": "http://www.google.com"		
	  		}	
	



  		]

  		$scope.gotoAnchor = function(hashtag){
  			console.log(hashtag);
	        $location.hash(hashtag);
	        $anchorScroll();
  		}



  });
