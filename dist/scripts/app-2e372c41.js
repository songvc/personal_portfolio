"use strict";angular.module("personalPortfolio",["ngAnimate","ngCookies","ngSanitize","ngResource","ngRoute","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("personalPortfolio").controller("NavbarCtrl",["$scope",function(a){a.date=new Date}]),angular.module("personalPortfolio").controller("MainCtrl",["$scope","$http","$location","$anchorScroll",function(a,e,t,i){a.menus=[{name:"About Me",hash:"aboutme",icon:"glyphicon-user"},{name:"Portfolio",hash:"portfolio",icon:"glyphicon-folder-open"},{name:"Contact",hash:"contact",icon:"glyphicon-envelope"}],a.skills=["HTML5","CSS3","JQuery","Angular","Bootstrap3","SASS","JavaScript","Gulp","Yeoman","Grunt","Protractor","Jasmine","Karma","Express","NodeJS","MongoDB","Firebase"],a.works=[{title:"Waitstaff Calculator",description:"Designed small business payroll application that tracks earnings of restaurant employees using Bootstrap",image:"../assets/images/waitstaff.png",github:"https://github.com/songvc/wait-staff-refactor",website:"http://www.google.com"},{title:"Country & Capitals",description:"Created geo-data search application that allows users to interact with national city data using Geoname API",image:"../assets/images/location.png",github:"https://github.com/songvc/country",website:"http://www.google.com"},{title:"Calendar Directive",description:"Designed calendar application UI using Angular directive and Bootstrap",image:"../assets/images/calendar.png",github:"https://github.com/songvc/angular-js-calendar-directive-challenge",website:"http://www.google.com"},{title:"Instagram Search",description:"Created Instagram photo search application using Instagram API, Angular and Bootstrap",image:"../assets/images/instagram.png",github:"https://github.com/songvc/instagram",website:"http://www.google.com"},{title:"ngMadlibs",description:"Utilized Bootstrap and Angular to build an mad-lib game ",image:"../assets/images/ngmadlib.png",github:"https://github.com/songvc/ngMadLibs",website:"http://www.google.com"},{title:"Hot or Cold",description:"Built Hot or Cold game application, designed its layout and style, and implemented its UI using JQuery",image:"../assets/images/hotorcold.png",github:"https://github.com/songvc/hot-or-cold-starter",website:"http://www.google.com"},{title:"Street Fighter",description:"Created 2D Street Fighter game application and designed its interactive features and animation using JQuery",image:"../assets/images/streetfighter.png",github:"https://github.com/songvc/jquery-streetfighter",website:"http://www.google.com"}],a.gotoAnchor=function(a){console.log(a),t.hash(a),i()}}]),angular.module("personalPortfolio").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="container-fluid" ng-controller="MainCtrl"><div class="row"><div class="side col-md-3"><div class="profile-sidebar"><div class="profile-userpic"><img src="../assets/images/tyrion.jpg"></div><div class="profile-usertitle"><div class="profile-usertitle-name">VINCENT SONG</div><div class="profile-usertitle-job">FRONT-END ENGINEER</div></div><div class="profile-userbuttons"><button type="button" class="btn btn-danger btn-sm">My Blog</button></div><div class="profile-usermenu"><ul class="nav"><li ng-repeat="menu in menus"><a href="" ng-click="gotoAnchor(menu.hash)"><i class="glyphicon {{menu.icon}}"></i> {{menu.name}}</a></li></ul></div><div class="profile-icon"><a href="https://twitter.com/songvct"><i class="fa fa-twitter fa-2x"></i></a> <a href="https://github.com/songvc"><i class="fa fa-github-square fa-2x"></i></a> <a href="https://www.linkedin.com/in/songvc"><i class="fa fa-linkedin-square fa-2x"></i></a></div><footer>Vincent Song © All rights reserved.</footer></div></div><div class="main col-md-9"><div class="top col-md-12"><img src="../assets/images/sf.jpeg" class="img-responsive"><h1>VINCENT SONG / @songvc<br><small>making w*3 awesome and fun!</small></h1><p>Photo by Rob Bye via Unsplash</p></div><div class="bottom col-md-12"><section id="aboutme"><div class="page-header"><h1>ABOUT ME</h1></div><div class="jumbotron"><h2>> HELLO, MY NAME IS VINCENT.</h2><p>> I am a passionate front-end developer / former investment banker.<br>> I love to work with both numbers and colors.<br>> I love to analyze and crunch numbers.<br>> I love to design, create, and build.<br>@ I currently live in San Jose, California.</p></div><h2>Here are my technical skills:</h2><br><div class="col-xs-2 skillbox" ng-repeat="skill in skills"><a href="" class="label">{{skill}}</a></div></section><section id="portfolio" class="clearfix"><div class="page-header"><h1>PORTFOLIO</h1></div><div class="portfolio-content col-md-4" ng-repeat="work in works"><div class="thumbnail"><img ng-src="{{work.image}}" style="height:200px;weight:242;" class="img-rounded"><div class="caption"><h3>{{work.title}}</h3><p class="description">{{work.description}}</p><p><a ng-href="{{work.github}}" class="btn btn-default" role="button"><i class="fa fa-github"></i></a></p></div></div></div></section><section id="contact" class="clearfix"><div class="page-header"><h1>CONTACT</h1></div><p>You can tweet me @songvct<br>You can see my linkedin @songvc<br>You can see my current projects @songvc<br>You can shoot me an email at songvc@gmail.com</p></section></div></div></div></div>'),a.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>')}]);