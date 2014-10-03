angular.module('EmailApp')
.factory('InboxFactory', function InboxFactory($q, $http, $location){
	var exports = {};

	exports.messages = [];

	exports.goToMessage = function(id){
		if(angular.isNumber(id)){
			$location.path('inbox/email/' + id);
		}
	};

	exports.deleteMessage = function(id, index){
		this.messages.splice(index, 1);
	};

	exports.getMessages = function(){
		var dfd = $q.defer();
		$http.get('json/emails.json')
			.success(function(data){
				exports.messages = data;
				dfd.resolve(data);
			})
			.error(function(data){
				dfd.reject(data);
			});
		return dfd.promise;
	};

	return exports;
});