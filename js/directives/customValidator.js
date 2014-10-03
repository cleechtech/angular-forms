app.directive('customValidator', function(){
	return {
		require: 'ngModel',
		link: function(scope, elem, attrs, ngModel){
			// Angualar 1.3 Feature
			// ngModel.$validators.myValidator = function(){
			// 	console.log('this is my custom validator')
			// }
		}
	}
})