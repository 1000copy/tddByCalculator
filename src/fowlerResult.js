let CHICHRENS = 0 
let REGULAR = 1 
let NEW_RELEASE = 2
class PriceNewRelease{
  getCharge(daysRented){
    return daysRented * 3 
  }
}
class PriceRegular{
  getCharge(daysRented){
    var result = 0 
    result += 2
          if (daysRented > 2 )
            result += (daysRented - 2 )*1.5
    return result
  }
}
class PriceChildren{
  getCharge(daysRented){
    var result = 0 
    result += 1.5
    if (daysRented > 3)
      result += (daysRented - 3)*1.5
    return result 
  }
}
class Movie {
  constructor(title, type) {
    this.title = title
    this.type = type
    this.price = this.getPrice(type)
  }
  getPrice(type){
    var result 
    switch(this.type){
        case REGULAR:
          result = new PriceRegular()
          break
        case NEW_RELEASE:
          result = new PriceNewRelease()
          break
        case CHICHRENS:
          result = new PriceChildren()
          break
    }
    return result
  }
  getThisAmount(daysRented){
    return this.price.getCharge(daysRented)
  }
}
class Rental {
  constructor(movie, daysRented) {
    this.movie = movie
    this.daysRented = daysRented
  }
  getFrequentRenterPoints(){
    var point = 0 
    point++
    if ((this.movie.type == NEW_RELEASE) && (this.daysRented > 1))
        point++
    return point
  }
  getRowStr(){
    return this.movie.title +"\t" + this.movie.getThisAmount(this.daysRented) +"\n"
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
      totalAmount += each.movie.getThisAmount(each.daysRented)
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
  statement(){
    var totalAmount = 0 
  	var result = "Rental Record for " + this.name + "\n"
    for (var i = 0; i < this.rentals.length; i++) {
      var each = this.rentals[i]
      result += each.getRowStr()
    }
  	result += "Amount owed is "+this.getTotalAmount()+"\n"
  	result += "You earned " + this.getFrequentRenterPoints() + "frequent rental points"
    return result
  }
}