var validate = function(){
	var form = document.getElementById('test');
	var isValid = form.checkValidity();
	if(isValid){
		alert('Validation passed.');
	}	
};