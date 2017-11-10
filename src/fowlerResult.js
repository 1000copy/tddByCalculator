let CHICHRENS = 0 
let REGULAR = 1 
let NEW_RELEASE = 2
class Movie {
  constructor(title, priceCode) {
    this.title = title
    this.priceCode = priceCode
  }
}
class Rental {
  constructor(movie, daysRented) {
    this.movie = movie
    this.daysRented = daysRented
  }
  getThisAmount(){
    var each = this
    var thisAmount = 0 
    switch(each.movie.priceCode){
        case REGULAR:
          thisAmount += 2
          if (each.daysRented > 2 )
            thisAmount += (each.daysRented - 2 )*1.5
          break
        case NEW_RELEASE:
          thisAmount += each.daysRented * 3 
          break
        case CHICHRENS:
          thisAmount += 1.5
          if (each.daysRented > 3)
            thisAmount += (daysRented - 3)*1.5
          break
    }
    return thisAmount
  }
  getFrequentRenterPoints(){
    var each = this
    var frequentRenterPoints = 0 
    frequentRenterPoints++
      if ((each.movie.priceCode == NEW_RELEASE) && (each.daysRented > 1))
        frequentRenterPoints++
    return frequentRenterPoints
  }
  getRowStr(){
    var each = this
    return "\t"+each.movie.title +"\t" + each.getThisAmount() +"\n"
  }
}
class Customer {
  constructor(name) {
    this.name = name
    this.rentals = []
  }
  addRental(rental){
  	this.rentals.push(rental)
  }
  getTotalAmount(){
    var totalAmount = 0 
    for (var i = 0; i < this.rentals.length; i++) {
      var each = this.rentals[i]
      totalAmount += each.getThisAmount()
    }
    return totalAmount
  }
  getFrequentRenterPoints(){
    var frequentRenterPoints = 0 
    for (var i = 0; i < this.rentals.length; i++) {
      var each = this.rentals[i]
      frequentRenterPoints += each.getFrequentRenterPoints()
    }
    return frequentRenterPoints
  }
  getResult(){
    var result = ""
    for (var i = 0; i < this.rentals.length; i++) {
      var each = this.rentals[i]
      result += each.getRowStr()
    }
    return result
  }
  statement(){
    var totalAmount = 0 
  	var frequentRenterPoints = 0 
  	var result = "Rental Record for " + this.name + "\n"
    result += this.getResult()
  	result += "Amount owed is "+this.getTotalAmount()+"\n"
  	result += "You earned " + this.getFrequentRenterPoints() + "frequent rental points"
    return result
  }
}