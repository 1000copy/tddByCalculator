var name = "somebody"
function printOwing1(amount){
	printBanner()
	console.log("name:" + name)
	console.log("amount:" + amount)
}

//  refactored 
function printOwing1_(amount){
	printBanner()
	printDetails()
}
function printDetails(){
	console.log("name:" + name)
	console.log("amount:" + amount)
}
// 2
function printOwing2(){
	printBanner()
	console.log("name:" + name)
	console.log("amount:" + amount)
}
