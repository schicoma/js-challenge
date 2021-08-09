const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'mandarine';
    }

    console.log(fruits1); // 'apple'
    console.log(fruits2); // 'banana'
    console.log(fruits3); // 'mandarine'
};

fruits();

// ------------------------------------

const fruits2 = () => {
    if (false) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'mandarine';
    }

    /**
     * Hoisting
     */
    console.log(fruits1);       // 'undefined'
    console.log(fruits2);       // 'undefined'
    console.log(fruits3 + '1'); // 'undefined1'
};

fruits2();

// ------------------------------------

let x = 1; // variable global
{
    let x = 2; // variable local
    console.log(x); // 2
}

console.log(x); // 1

// ------------------------------------

const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i); // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
        },1000);
    }
};

anotherFunction();

const anotherFunctionWithLet = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        },1000);
    }
};

anotherFunctionWithLet();