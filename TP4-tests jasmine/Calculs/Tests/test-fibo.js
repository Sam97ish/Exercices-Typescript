describe("Test fibo of 2", function() {

    var fibo= require("./../fibo.js").fibo;//Importer le fichier et la fonction qu'il faut
    var a=2;

    it("Fibo(2)=2", function() {
      expect(fibo(a)).toBe(2);
    });
  });

  describe("Test fibo of 5", function() {

    var fibo= require("./../fibo.js").fibo;//Importer le fichier et la fonction qu'il faut
    var a=5;

    it("Fibo(5)=8", function() {
      expect(fibo(a)).toBe(8);
    });
  });