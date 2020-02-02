
export interface ChemicalElement{

    SymboleChimique: string
    
    Nom            : string

    NumeroAtomique : number

    NumeroMasse    : number




}

export function toString(elm: ChemicalElement): string {

    return "le nom d'element est " + elm.Nom
     + " abrevation " + elm.SymboleChimique
     + " le numero atomique " + elm.NumeroAtomique
     + " le masse est de " + elm.NumeroMasse  
}


