const tipoDeSuscripcion = "Expert";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

let tiposDeSuscripcion = {
    "Free": "Solo puedes tomar los cursos gratis",
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

console.log(tiposDeSuscripcion[tipoDeSuscripcion]);
