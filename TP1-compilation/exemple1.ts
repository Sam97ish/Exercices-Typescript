/**
* X12I030 - Introduction au développement logiciel
* Premier exemple de TP
* Compilation à la main et découverte de l'IDE VisualStudio Code
* Quentin Tonneau
* 22/01/2018
**/

//Fonction retournant le nième nombre de la suite de fibonacci
function fibonacci(n : number){
	let i : number = 0; //premier nombre
	let j : number = 1; //second nombre
	let temp : number = 0; //stockage temporaire 
	let cpt : number = 0; //compteur de boucle
	
	//On génère les n premier nombres
	for(cpt=0; cpt<n; cpt++){
		temp = i + j;
		i = j;
		j = temp;
	}

	return i;
}


//Algorithme principal
let objective : number = 120;
console.log("Calculons le 120ième nombre de fibonacci :");
console.log(fibonacci(objective));

