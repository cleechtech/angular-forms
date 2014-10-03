function FormCtrl($http){
	this.submit = function(isValid, data){
		if(!isValid) return;

		//submit the data to the server
    	$http.post('/api/submit', data);
    	console.log('Form submitted');
	}
}