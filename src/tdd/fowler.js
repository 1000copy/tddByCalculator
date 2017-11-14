let CHICHRENS = 0 
let REGULAR = 1 
let NEW_RELEASE = 2
class Movie {
  constructor(title, type) {
    this.title = title
    this.type = type
  }
}
class Rental {
  constructor(movie, daysRented) {
    this.movie = movie
    this.daysRented = daysRented
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
  statement(){
    var totalAmount = 0 
  	var frequentRenterPoints = 0 
  	var result = "Rental Record for " + this.name + "\n"
  	for (var i = 0; i < this.rentals.length; i++) {
  		var each = this.rentals[i]
  		// thisAmount
  		var thisAmount = 0
      switch(each.movie.type){
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
  		// frequentRenterPoints
  		frequentRenterPoints++
  		if ((each.type == NEW_RELEASE) && (each.daysRented > 1))
  			frequentRenterPoints++
  		result += "\t"+each.movie.title +"\t" + thisAmount +"\n"
  		totalAmount += thisAmount
  	}
  	result += "Amount owed is "+totalAmount+"\n"
  	result += "You earned " + frequentRenterPoints + " frequent rental points"
    return result
  }
}