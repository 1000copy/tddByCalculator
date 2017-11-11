describe("fowler example for refactor", function() {
   describe("one suite", function() {
    beforeEach(function() {
    })
    xit("one test NEW_RELEASE", function() {
    	var m1 = new Movie("Rome Holidays",NEW_RELEASE)
    	var m2 = new Movie("Tiger Tiger Tiger",NEW_RELEASE)
    	var c = new Customer("xiaoming")
    	var r1 = new Rental(m1,3)
    	var r2 = new Rental(m2,3)
    	c.addRental(r1)
    	c.addRental(r2)
    	let r = c.statement()
    	console.log(r)
      	expect(m1.type).toEqual(NEW_RELEASE);
    });
    xit("one test NEW_RELEASE", function() {
    	var m1 = new Movie("Rome Holidays",NEW_RELEASE)
    	var m2 = new Movie("Tiger Tiger Tiger",REGULAR)
    	var m3 = new Movie("White Snow Princess",CHICHRENS)
    	var c = new Customer("xiaoming")
    	var r1 = new Rental(m1,3)
    	var r2 = new Rental(m2,3)
    	var r3 = new Rental(m3,3)
    	c.addRental(r1)
    	c.addRental(r2)
    	c.addRental(r3)
    	let r = c.statement()
    	console.log(r)
      	expect(m1.type).toEqual(NEW_RELEASE);
    });
    xit("one test NEW_RELEASE amount 1=3,2=6", function() {
    	var m1 = new Movie("Rome Holidays",NEW_RELEASE)
    	var c = new Customer("xiaoming")
    	var r1 = new Rental(m1,2)
    	c.addRental(r1)
    	let r = c.statement()
    	// this amount = 3
    	console.log(r)
      	expect(m1.type).toEqual(NEW_RELEASE);
    });
    it("one test NEW_RELEASE amount dayRented = 2 then  frequent 2", function() {
    	var m1 = new Movie("Rome Holidays",NEW_RELEASE)
    	var c = new Customer("xiaoming")
    	var r1 = new Rental(m1,2)
    	c.addRental(r1)
    	let r = c.statement()
    	expect(r).toMatch(`Rental Record for xiaoming
Rome Holidays	6
Amount owed is 6
You earned 2frequent rental points`)
      	expect(m1.type).toEqual(NEW_RELEASE);
    });
  });
});
