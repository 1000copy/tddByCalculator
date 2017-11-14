// 整个字符串只能出现0123456789-
// - 只能出现在字符串的第一个位置
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
// function isInt(str){
//     if (str.length == 0)return false
//     var base = 0
//     if ("-+".includes(str[0]){
//         base =  1
//     }
//     return isPlusInt(str.substring(base,str.length))
// }
// function isPlusInt(str){
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i]
//         if (!"1234567890".includes(char))return false
//     }
//     return true
// }