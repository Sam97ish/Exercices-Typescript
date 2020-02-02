/**
* X12I030 - Introduction au développement logiciel
* Premier exemple de TP
* Compilation à la main et découverte de l'IDE VisualStudio Code
* Quentin Tonneau
* 22/01/2018
**/
//Fonction retournant le nième nombre de la suite de fibonacci
function fibonacci(n) {
    var i = 0; //premier nombre
    var j = 1; //second nombre
    var temp = 0; //stockage temporaire 
    var cpt = 0; //compteur de boucle
    //On génère les n premier nombres
    for (cpt = 0; cpt < n; cpt++) {
        temp = i + j;
        i = j;
        j = temp;
    }
    return i;
}
//Algorithme principal
var objective = 120;
console.log("Calculons le 120ième nombre de fibonacci :");
console.log(fibonacci(objective));
//# sourceMappingURL=exemple1.js.map