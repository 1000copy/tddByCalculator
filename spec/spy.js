describe("test spy", function() {
  var bar = null;
  var    foo = {
        sendmail: function(value) {
          bar = value;
        },
        baz: function(){
          this.sendmail(123);
          this.sendmail(456, 'another param');    
        }
      };
  describe("A spy", function() {
    beforeEach(function() {      
      spyOn(foo, 'sendmail');
      foo.baz()
    });

    it("tracks that the spy was called", function() {
      expect(foo.sendmail).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function() {
      expect(foo.sendmail).toHaveBeenCalledWith(123);
      expect(foo.sendmail).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function() {
      expect(bar).toBeNull();
    });
  })
  describe("non spy", function() {
    beforeEach(function() {
      foo.baz()
    });

    it("execution on a function", function() {
      expect(bar).toEqual(456);
    });
  })
})