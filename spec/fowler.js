describe("fowler example for refactor", function() {
   describe("one suite", function() {
    beforeEach(function() {
    })
    it("one test NEW_RELEASE amount dayRented = 2 then  frequent 2", function() {
    	var m1 = new Movie("Rome Holidays",NEW_RELEASE)
    	var c = new Customer("xiaoming")
    	var r1 = new Rental(m1,2)
    	c.addRental(r1)
    	let r = c.statement()
    	expect(r).toMatch(`Rental Record for xiaoming
Rome Holidays 6
Amount owed is 6
You earned 2 frequent rental points`)
      	expect(m1.type).toEqual(NEW_RELEASE);
    });
    it("one test NEW_RELEASE amount dayRented = 2 then  frequent 2", function() {
        var m1 = new Movie("Rome Holidays",CHICHRENS)
        var c = new Customer("xiaoming")
        var r1 = new Rental(m1,2)
        c.addRental(r1)
        let r = c.getAmount1()
        expect(r).toEqual(1.5)
        
        expect(c.getFrequentRenterPoints()).toEqual(1)
    });
  });
});
