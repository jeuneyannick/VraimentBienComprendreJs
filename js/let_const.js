// let et const, nouveauté EcmaScript6

let u = "nouveau"; // Let s'utilise presque comme le var
// const x;ERREUR : const doit être OBLIGATOIREMENT assigné à une valeur dès sa déclaration. 

// const x = 6; 
// x = 9;ERREUR : On ne peut pas assigner un nouvel valeur à const.

//ATTENTION !

const x = {name:"Yannick"}; 

x.name = "Développeur"// Je peux changer la valeur d'une propriété existante dans le const. 
console.log(x);// pas d'erreur car c'est uniquement la valeur de la propriété déjà existant dans le const que j'ai modifié
// const x = {name: "Full-Stack"};ERREUR: Je suis en train de lui assigner une nouvellle propriété. Ce qui n'est pas possible avec le const.


console.log(y)// ERREUR: Le hoisting ne fonctionne qu'avec le var et non avec Let et Const
let y; 

