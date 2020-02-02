describe("Tests facto of number 9", function() {

    var facto= require("./../facto.js").facto;//Importer le fichier et la fonction qu'il faut
    var a=9;

    it("facto(9)=362880", function() {
      expect(facto(a)).toBe(362880);
    });
  });

  describe("Tests facto of a number 4", function() {

    var facto= require("./../facto.js").facto;//Importer le fichier et la fonction qu'il faut
    var a=4;

    it("facto(4)=24", function() {
      expect(facto(a)).toBe(24);
    });
  });


