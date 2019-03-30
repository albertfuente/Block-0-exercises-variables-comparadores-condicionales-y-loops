//A Declara tu nombre y muestralo por consola:
console.log("Albert");
//B Declara tu edad y muestralo por consola:
console.log(31);
//C Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muestrala por conosola:
var array=["Albert","Fuente",31];
console.log(array);
//D Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
var data={
  name:"Albert",
  age:31
};
console.log(data);
//E ahora utiliza el array que has creado anteriormente para recorrelro y mostrar una a una todas las posiciones del array
for(var i=0;i<array.length;i++){
  console.log(array[i]);
}
//F Crea una estructura condicional que imprima el número mayor entre dos números
var a=25;
var b=12;
if(a>b){
  console.log(a);
}else{
  console.log(b);
}
//F1 Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales
if(a>b){
  console.log(a);
}else if(a===b){
  console.log(a);
}else{
  console.log(b);
}
//G Recorre un array de 5 numeros y cuando llegues a la mitad muestra el siguiente mensaje: "We are in the middle of the loop"
for(var i=0;i<5;i++){
  if(i===2){
    console.log("We are in the middle of the loop");
  }else{
    console.log(i);
  }
}
//G1 Declara tu nombre y tu edad en dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error.
var myName= "John";
var myAge= 31;
if(myName!=="John" || myAge!== 31 ){
  console.log("error");
}else{
  console.log("Hi!Glad to see you again");
}
// H Declara tu nombre y DNI en dos variables y crea un condicional para, en caso de que coincida uno de los dos datos muestre un mensaje
var myName1="Albert";
var myID="At34567";
if(myName1==="Albert"||myID===31415){
  console.log("Permission granted");
}else{
  console.log("Try again");
}
// I Crea un array, introduce los datos anteriores y unos cuantos más de forma que al recorrer el array muestre un mensaje cuando encuentre tus datos.
var array2=["Albert","At34567",31];
for (var i=0;i<array2.length;i++){
  if(i===0){
    console.log(`We found your name, it is ${array2[0]}`);
  }else{
    console.log(array[i]);
  }
}
// J Crea un array de strings y recorre cada una de esos valores. Imprime cada caracter en una linea distinta
var arr=["Hello","World","Skylab"];
for(var i =0;i<arr.length;i++){
  for(var j=0;j<arr[i].length;j++){
    console.log(arr[i][j]);
  }
}
