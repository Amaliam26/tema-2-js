
//* 1. O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv */
function getDigits(string){
	let rezultat = "";
	for(let i = 0; i < string.length; i++){
		if(string[i] === "0"){
             rezultat += string[i]; 
            }
		if(string[i] === "1"){ 
            rezultat += string[i]; 
            }
		if(string[i] === "2"){ 
            rezultat += string[i]; 
            }
		if(string[i] === "3"){ 
            rezultat += string[i]; 
            }
		if(string[i] === "4"){ 
            rezultat += string[i]; 
            }
		if(string[i] === "5"){ 
            rezultat += string[i]; 
            }
		if(string[i] === "6"){ 
            rezultat += string[i]; 
            }
		if(string[i] === "7"){ 
            rezultat += string[i]; 
            }
		if(string[i] === "8"){ 
            rezultat += string[i]; 
            }
		if(string[i] === "9"){ 
            rezultat += string[i]; 
            }
	}
	return rezultat;
}


//*2. O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv */

function getLetters(string){
	let rezultat = "";
	for(let i = 0; i < string.length; i++){
		if(string[i] == "A" || string[i] == "a"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "B" || string[i] == "b"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "C" || string[i] == "c"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "D" || string[i] == "d"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "E" || string[i] == "e"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "F" || string[i] == "f"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "G" || string[i] == "g"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "H" || string[i] == "h"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "I" || string[i] == "i"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "J" || string[i] == "j"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "K" || string[i] == "k"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "L" || string[i] == "l"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "M" || string[i] == "m"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "N" || string[i] == "n"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "O" || string[i] == "o"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "P" || string[i] == "p"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "Q" || string[i] == "q"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "R" || string[i] == "r"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "S" || string[i] == "s"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "T" || string[i] == "t"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "U" || string[i] == "u"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "V" || string[i] == "v"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "W" || string[i] == "w"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "X" || string[i] == "x"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "Y" || string[i] == "y"){ 
            rezultat += string[i]; 
            }
		if(string[i] == "Z" || string[i] == "z"){ 
            rezultat += string[i]; 
            }
	}
	return rezultat;
}

//* 3. O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista) */

function getFirst5Letters(string){
	let gasite = 0,
		limita = 5,
		rezultat = "";
	for(let i = 0; i < string.length; i++){
		if(gasite == limita){
			return rezultat;
		}
		if(string[i] == "A" || string[i] == "a"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "B" || string[i] == "b"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "C" || string[i] == "c"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "D" || string[i] == "d"){
             rezultat += string[i]; gasite++; 
            }
		if(string[i] == "E" || string[i] == "e"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "F" || string[i] == "f"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "G" || string[i] == "g"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "H" || string[i] == "h"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "I" || string[i] == "i"){ 
            rezultat += string[i]; gasite++; }
		if(string[i] == "J" || string[i] == "j"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "K" || string[i] == "k"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "L" || string[i] == "l"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "M" || string[i] == "m"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "N" || string[i] == "n"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "O" || string[i] == "o"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "P" || string[i] == "p"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "Q" || string[i] == "q"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "R" || string[i] == "r"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "S" || string[i] == "s"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "T" || string[i] == "t"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "U" || string[i] == "u"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "V" || string[i] == "v"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "W" || string[i] == "w"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "X" || string[i] == "x"){ 
            rezultat += string[i]; gasite++; 
            }
		if(string[i] == "Y" || string[i] == "y"){
             rezultat += string[i]; gasite++; }
		if(string[i] == "Z" || string[i] == "z"){ 
            rezultat += string[i]; gasite++; 
            }
	}
	return rezultat;
}


//* 4. O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate */

function concatenate(array){
	let rezultat = "";
	for(let i = 0; i < array.length; i++){
		rezultat += array[i];
	}
	return rezultat;
}



//* 5. O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile */

function getAllDigits(array){
	let rezultat = "";
	for(let i = 0; i < array.length; i++){
	
        for(let j = 0; j < array[i].length; j++){
			if(array[i][j] === "0"){ 
                rezultat += array[i][j]; 
            }
            if(array[i][j] === "1"){ 
                rezultat += array[i][j]; 
            }
			if(array[i][j] === "2"){ 
                rezultat += array[i][j]; 
            }
			if(array[i][j] === "3"){ 
                rezultat += array[i][j]; 
            }
			if(array[i][j] === "4"){ 
                rezultat += array[i][j]; 
            }
            if(array[i][j] === "5"){ 
                rezultat += array[i][j]; 
            }
			if(array[i][j] === "6"){ 
                rezultat += array[i][j]; 
            }
			if(array[i][j] === "7"){ 
                rezultat += array[i][j]; 
            }
			if(array[i][j] === "8"){ 
                rezultat += array[i][j]; 
            }
			if(array[i][j] === "9"){
                 rezultat += array[i][j]; 
                }
		}
	}
	return rezultat;
}


//* 6. O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate */
function invertAllStrings(array){
	let varReturnata = [];
	for(let i = 0; i < array.length; i++){
		let sirTemporar = "";
		for(let j = array[i].length; j > 0; j--){
			sirTemporar += array[i][j-1];
		}
		varReturnata[i] = sirTemporar;
	}
	return varReturnata;
}



//* 7. Calculeaza factorialul unui numar ("factorial") */
function factorial(numar){
	if(numar === 0 || numar === 1){
		return 1;
	}
	for(let i = numar - 1; i >= 1; i--){
		numar *= i;
	}
	return numar;
}




//* 8. Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc") */
function cmmdc(a, b){
	if(a || b){
		if(b == 0){
			return a;
		}
		return cmmdc(b, a % b);
	}
}


//* 9. Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc") */



//* 10. Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori") */

function divizori(numar){
	let rezultat = [];
	for(let i = 2, j = 0; i < numar; i++){
		if(numar % i == 0){
			rezultat[j] = i;
			j++;
		}
	}
	return rezultat;
}


//* 11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom") */

function palindrom(n){
	let sir = "" + n,
		lungime = sir.length;
	for(let i = 0; i < lungime; i++){
		if(sir[i] != sir[(lungime - 1) - i]){
			return false;
		}
	}
	return true;
}




//* 12. O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort") */ 
function sort(matrice){
	let lungime = matrice.length,
		rezultat = [];
	for(let i = 0, j = 0; i < lungime; i++){
		
		let valoare = matrice[i];
		if(valoare % 2 == 0){
			rezultat[j] = valoare;
			j++;
		}
	}
	return rezultat.sort(function(a, b){ return a - b; });
}



//* 13. O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc") */




//* 14. O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch") */ 




//* 15. O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch") */



