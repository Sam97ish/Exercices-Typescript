describe("determines if a year is leap", function() {

    var isLeapYear= require("./../isLeapYear.js").isLeapYear;//Importer le fichier et la fonction qu'il faut
    var a=2020;

    it("isLeapYear(2019)=0", function() {
      expect(isLeapYear(a)).toBe(true);
    });
  });

  describe("determines if a year is leap", function() {

    var isLeapYear= require("./../isLeapYear.js").isLeapYear;//Importer le fichier et la fonction qu'il faut
    var a=2019;

    it("isLeapYear(1998)=20", function() {
      expect(isLeapYear(a)).toBe(false);
    });
  });
