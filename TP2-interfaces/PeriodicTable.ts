//import { ChemicalElement } from "./ChemicalElement";
import * as CE from "./ChemicalElement";

export function createPeriodicTable(rawData: Array<string>) : Array<CE.ChemicalElement>{


    let TableauPeriodique: Array<CE.ChemicalElement> =[];
    for (let i = 0; i < rawData.length ;i++){

       let SplitedString:string = rawData[i];


       let Contents : Array<string> =  SplitedString.split(" ");

       let Element: CE.ChemicalElement = {SymboleChimique: Contents[1], Nom : Contents[0] ,
                                            NumeroAtomique : Number(Contents[2]) , NumeroMasse : Number(Contents[3]) }


           TableauPeriodique.push(Element);


    }

return TableauPeriodique;

}


export function printTable(elements : Array<CE.ChemicalElement>){

    for(let i = 0; i < elements.length; i++){

        console.log(CE.toString(elements[i]));

    }
}










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