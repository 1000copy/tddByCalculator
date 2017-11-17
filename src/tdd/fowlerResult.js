let CHICHRENS = 0 
let REGULAR = 1 
let NEW_RELEASE = 2

class Movie {
  constructor(title, type) {
    this.title = title
    this.type = type
  }
  createMovie(){
    var m = {}
    switch(this.type){
      case REGULAR:
        m = new RegularMovieType()
        break
      case NEW_RELEASE:
        m = new NewReleaseMovieType()
        break
      case CHICHRENS:
        m = new ChildMovieType()
        break
    }
    return m
  }
  getAmount(rental){
    var m = this.createMovie()
    return m.getAmount(rental)
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
  getPoint(each){
    var alpha = 0 
    alpha++
    if ((each.movie.type == NEW_RELEASE) && (each.daysRented > 1))
        alpha++
    return alpha
  }
  getFrequentRenterPoints(){
    var frequentRenterPoints = 0 
    for (var i = 0; i < this.rentals.length; i++) {
      var each = this.rentals[i]
      frequentRenterPoints += this.getPoint(each)
    }
    return frequentRenterPoints
  }
  getAmount1(){
    var totalAmount = 0 
     for (var i = 0; i < this.rentals.length; i++) {
      var each = this.rentals[i]
      totalAmount += each.movie.getAmount(each)
    }
    return totalAmount
  }
  statement(){
    var result = "Rental Record for " + this.name + "\n"
    for (var i = 0; i < this.rentals.length; i++) {
      var each = this.rentals[i]
      result += each.movie.title +" " +  each.movie.getAmount(each) +"\n"
    }
    result += "Amount owed is "+this.getAmount1()+"\n"
    result += "You earned " + this.getFrequentRenterPoints() + " frequent rental points"
    return result
  }
}
class ChildMovieType{
  getAmount(rental){
    var result = 0 
    result += 1.5
    if (rental.daysRented > 3)
      result += (daysRented - 3)*1.5
    return result
  }
}
class NewReleaseMovieType{
  getAmount(rental){
    var result = 0
    result += rental.daysRented * 3 
    return result
  }
}
class RegularMovieType{
  getAmount(rental){
     var result = 0
     result += 2
        if (rental.daysRented > 2 )
          result += (rental.daysRented - 2 )*1.5
      return result
  }
}