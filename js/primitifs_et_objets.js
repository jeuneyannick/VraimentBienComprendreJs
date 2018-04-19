var x = 5 
var y = x
console.log(x);// Les types primitifs sont copiés par valeur
console.log(y); 

var z = {name: "Yannick"}; // Objet avec la propriété name 
var w = z;// On crée w en lui copiant z
console.log(z);
console.log(w);// z et w pointent vers la même propriété name qui a pour valeur Yannick
w.name = "Jeune Yannick"; 
console.log(z); 
console.log(w);// Vu que z et w pointent vers la même propriété, lorsque je change la valeur de cette propriété chez w, 
// la propriété de z change aussi et affiche la même que w. 

 w = {name: "Développeur"};// je crée un nouvel objet qui n'existait pas jusqu'alors en mémoire, distinct de z  
   console.log(z); 
   console.log(w);// w pointe désormais vers un autre objet différent de z. 
   



