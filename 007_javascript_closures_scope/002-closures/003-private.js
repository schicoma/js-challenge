const Person = () => {
    var personName = 'Sebastian';
    return {
        getName: () => {
            return personName;
        },
        setName: (name) => {
            personName = name;
        }
    }
};

let person = Person();
console.log(person.getName());

person.setName('Jose Leonardo');
console.log(person.getName());

console.log(person.personName); // undefined