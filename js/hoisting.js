// Hoisting de fonctions 
addition(5, 7); 

function addition(a,b){
    console.log(a + b ); 
}
// Javascript fait une première lecture du code où il repère toutes les déclarations de fonction et les hisse en haut.
// Puis dans un second temps, il execute le code dans cette nouvelle oganisation. 
// Cela n'est pas valable pour les extensions de fonction.

// addition2(5,6); 
// var addition2 = function(a, b){
//     console.log(a + b)
// } Cela affichera une erreur

//Hoisting de variables

console.log(x);
var x = 5; 
// Cela affichera undefined car en première lecture JS lit et hisse les déclarations de fonctions uniquement 
//c'est-à-dire sans les valeurs qui vont avec. 
