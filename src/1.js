var result = "0"
function click(char){
  if ("C" == char){
  	result = "0"
  	return
  }	
  if ("=" == char){
  	result = eval(result)
  	return result
  }
  if(result.length == 1 && result =="0"){
  	result = char
  }else{
	  result += char
  }
}
function getAnswer(){
	return result
}