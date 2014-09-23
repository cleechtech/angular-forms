
var app = angular.module('angularForms', [
	'ui.bootstrap'
]);


function FormCtrl($http){
	this.submit = function(isValid, data){
		if(!isValid) return;

		//submit the data to the server
    	$http.post('/api/submit', data);
    	console.log('Form submitted');
	}
}

app.directive('customValidator', function(){
	return {
		require: 'ngModel',
		link: function(scope, elem, attrs, ngModel){
			console.log(ngModel)
			// Angualar 1.3 Feature
			// ngModel.$validators.myValidator = function(){
			// 	console.log('this is my custom validator')
			// }
		}
	}
})