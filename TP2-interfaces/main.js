"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PT = require("./PeriodicTable");
var RawData_1 = require("./RawData");
var periodicTable;
periodicTable = PT.createPeriodicTable(RawData_1.rawPeriodicElements);
PT.printTable(periodicTable);
//function that finds an elements given it's symbole
function findSymboleChimique(periodicTable, givenSymbole) {
    for (var i = 0; i < periodicTable.length; i++) {
        if (periodicTable[i].SymboleChimique == givenSymbole) {
            console.log(periodicTable[i]);
        }
    }
}
exports.findSymboleChimique = findSymboleChimique;
//function that finds an elements given it's name
function findNomChimique(periodicTable, givenNom) {
    for (var i = 0; i < periodicTable.length; i++) {
        if (periodicTable[i].Nom == givenNom) {
            console.log(periodicTable[i]);
        }
    }
}
exports.findNomChimique = findNomChimique;
//function that finds an elements given it's atomic number
function findNumeroAtomique(periodicTable, givenAtomique) {
    for (var i = 0; i < periodicTable.length; i++) {
        if (periodicTable[i].NumeroAtomique == givenAtomique) {
            console.log(periodicTable[i]);
        }
    }
}
exports.findNumeroAtomique = findNumeroAtomique;
//function that finds an elements given it's Mass
function findMassChimique(periodicTable, givenMass) {
    for (var i = 0; i < periodicTable.length; i++) {
        if (periodicTable[i].NumeroMasse == givenMass) {
            console.log(periodicTable[i]);
        }
    }
}
exports.findMassChimique = findMassChimique;
//tests for the functions
//findMassChimique(periodicTable,1)
//findNomChimique(periodicTable,"Azote")
//findNumeroAtomique(periodicTable,16)
//findSymboleChimique(periodicTable,"C")
//# sourceMappingURL=main.js.map