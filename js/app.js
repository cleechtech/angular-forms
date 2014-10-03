
var app = angular.module('angularForms', [
	'ui.bootstrap',
	'ngAnimate',
	'ui.router',
	'mediaPlayer'
]);

// routing
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/home.html'
	});

	var viewList = ['PriceMenu', 'MusicPlayer', 'SignupForm', 'GmailClone'];
	var states = _.map(viewList, function(name){
		return {
			url: '/' + name,
			templateUrl: 'views/' + name + '.html'
		}
	});

	for(var i = 0; i < viewList.length; i++){
		// add states
		$stateProvider.state(viewList[i], states[i])
	}

	$stateProvider.state('GmailClone.email', {
		url: '/inbox/email/:id',
		templateUrl: 'email.html'
	})

	$urlRouterProvider.otherwise('/')
});

