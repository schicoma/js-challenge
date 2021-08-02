
let i = 0;
while(i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (var index = 0; index < 5; index++) {
    console.log("El valor de i es: " + index);
}

let j = 10;
while (j >= 2) {
    console.log("El valor de i es: " + j);
    j--;
}

for (var index = 10; index >= 2; index--) {
    console.log("El valor de i es: " + index);
}

let respuestaCorrecta = false;

while (!respuestaCorrecta) {
    var input = prompt('¿Cuánto es 2+2?');

    if (input == 4) {
        respuestaCorrecta = true;
        console.log("Felicitaciones");
    }
}