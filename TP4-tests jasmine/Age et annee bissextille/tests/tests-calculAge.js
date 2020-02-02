describe("calculates someones age upto 2019", function() {

    var calculAge= require("./../calculAge.js").calculAge;//Importer le fichier et la fonction qu'il faut
    var a=2019;

    it("calculAge(2019)=0", function() {
      expect(calculAge(a)).toBe(0);
    });
  });

  describe("calculates someones age upto 2019", function() {

    var calculAge= require("./../calculAge.js").calculAge;//Importer le fichier et la fonction qu'il faut
    var a=1998;

    it("calculAge(1998)=20", function() {
      expect(calculAge(a)).toBe(21);
    });
  });
