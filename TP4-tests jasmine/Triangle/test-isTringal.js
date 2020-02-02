describe("Tests if is it a triangle", function() {

    var isTriangle= require("./isTriangle.js").isTriangle;//Importer le fichier et la fonction qu'il faut
    var a=9;
    var b=9;
    var c=9;

    it("isTriangle(9,9,9)=true", function() {
      expect(isTriangle(a,b,c)).toBe(true);
    });
  });

  describe("Tests if is it a triangle", function() {

    var isTriangle= require("./isTriangle.js").isTriangle;//Importer le fichier et la fonction qu'il faut
    var a=3;
    var b=2;
    var c=9;

    it("isTriangle(3,2,9)=false", function() {
      expect(isTriangle(a,b,c)).toBe(false);
    });
  });

