angular.module('EmailApp')
.factory('EmailFactory', function EmailFactory($q, $http, $stateParams){
	var exports = {};

	exports.reply = function(message){
		if(message){
			// supposed to hit the backend
			alert('Reply successful! Message: ', message);
		}
	};

	exports.getMessage = function(params){
		if(params.id){
			var dfd = $q.defer();
			$http.get('json/message/' + params.id + '.json')
				.success(function(data){
					dfd.resolve(data);
				})
				.error(function(data){
					dfd.reject(data);
				});
			return dfd.promise;
		}
	};
	return exports;
});