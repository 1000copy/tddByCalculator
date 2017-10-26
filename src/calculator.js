var result = "0"
var done = false
function isDone(){
	return done
}

function clear(){
	result = "0"
}
function clicks(str){
  for (var i = 0; i < str.length; i++) {
  	click(str[i])
  }
}
function click(char){
   if ("C" == char){
   	  result = "0"
   	  return result
   }
   if ("=" == char){
   	  result = eval(result)
   	  done = true
   	  return result
   }
   if (isOperator(char) && isOperator(lastChar(result))) {
   	  result = replaceLastChar(result,char)
   	  return result
   }
   if (isOperator(char) && result.length==1 && result=="0") {
   	  return result
   }
   if (char == "." && isDotValid()){
   	  return result
   }
   if (result.length==1 && result=="0")
   	  result = char
   else
      result += char
   done = false
   return result
}
function getResult(){
	return result
}
function isOperator(char){
	var operators ="+-*/"
	return operators.includes(char)
}
function lastChar(str){
	return str[str.length - 1]
}
function replaceLastChar(str,char){
	return str.substring(0,str.length-1)+char
}
function isDotValid(){
	var foundDot = false
	var foundOperator = false
	for (var i = result.length - 1; i >= 0; i--) {
		var char = result[i]
		if(isOperator(char)){
			return false
		}
		if (char == "." ) {
			return true
		}
	}
}