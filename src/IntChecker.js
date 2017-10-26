function isInt(str){
	var i 
	for (i = 0; i < str.length; i++) { 
		var c = str[i]
		if (!"0123456789-".includes(c))
			return false
	}
	if (str.includes("-") && str[0]!="-" || str.length==1)
		return false
	return true
}