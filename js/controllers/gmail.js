app.run(function($rootScope){
	$rootScope.$on('$routeChangeError', function(e, curr, prev, rejection){
		console.error('route change error!');
		console.error(e, curr, prev, rejection);
	});
});

app.controller('InboxCtrl', function InboxCtrl(){
	this.title = "My Inbox";
})

app.controller('EmailCtrl', function EmailCtrl(){
	this.title = 'Loading...'
})