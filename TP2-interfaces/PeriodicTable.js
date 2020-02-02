"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { ChemicalElement } from "./ChemicalElement";
var CE = require("./ChemicalElement");
function createPeriodicTable(rawData) {
    var TableauPeriodique = [];
    for (var i = 0; i < rawData.length; i++) {
        var SplitedString = rawData[i];
        var Contents = SplitedString.split(" ");
        var Element_1 = { SymboleChimique: Contents[1], Nom: Contents[0],
            NumeroAtomique: Number(Contents[2]), NumeroMasse: Number(Contents[3]) };
        TableauPeriodique.push(Element_1);
    }
    return TableauPeriodique;
}
exports.createPeriodicTable = createPeriodicTable;
function printTable(elements) {
    for (var i = 0; i < elements.length; i++) {
        console.log(CE.toString(elements[i]));
    }
}
exports.printTable = printTable;
/*

#####version with th loop for each######

for (let SplitedString of rawData) {
   let Contents : Array<string> =  SplitedString.split(" ");

   let Element: CE.ChemicalElement = {SymboleChimique: Contents[0], Nom : Contents[1] ,
                                        NumeroAtomique : Number(Contents[2]) , NumeroMasse : Number(Contents[3]) }


       TableauPeriodique.push(Element);


}

return TableauPeriodique;

} */ 
//# sourceMappingURL=PeriodicTable.js.map