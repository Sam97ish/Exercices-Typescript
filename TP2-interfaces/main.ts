import * as PT from "./PeriodicTable";
import * as CE from "./ChemicalElement";
import {rawPeriodicElements} from "./RawData";

let periodicTable : CE.ChemicalElement[];

periodicTable= PT.createPeriodicTable(rawPeriodicElements);

PT.printTable(periodicTable);

//function that finds an elements given it's symbole
export function findSymboleChimique(periodicTable: Array<CE.ChemicalElement>, givenSymbole : string): void {

    for (let i : number = 0;i < periodicTable.length; i++ ){
        if (periodicTable[i].SymboleChimique == givenSymbole ){

            console.log(periodicTable[i])
        }

    }


}

//function that finds an elements given it's name
export function findNomChimique(periodicTable: Array<CE.ChemicalElement>, givenNom : string): void {

    for (let i : number = 0;i < periodicTable.length; i++ ){
        if (periodicTable[i].Nom == givenNom ){

            console.log(periodicTable[i])
        }

    }


}

//function that finds an elements given it's atomic number
export function findNumeroAtomique(periodicTable: Array<CE.ChemicalElement>, givenAtomique : number): void {

    for (let i : number = 0;i < periodicTable.length; i++ ){
        if (periodicTable[i].NumeroAtomique == givenAtomique ){

            console.log(periodicTable[i])
        }

    }


}

//function that finds an elements given it's Mass
export function findMassChimique(periodicTable: Array<CE.ChemicalElement>, givenMass : number): void {

    for (let i : number = 0;i < periodicTable.length; i++ ){
        if (periodicTable[i].NumeroMasse == givenMass ){

            console.log(periodicTable[i])
        }

    }


}

//tests for the functions
//findMassChimique(periodicTable,1)
//findNomChimique(periodicTable,"Azote")
//findNumeroAtomique(periodicTable,16)
//findSymboleChimique(periodicTable,"C")