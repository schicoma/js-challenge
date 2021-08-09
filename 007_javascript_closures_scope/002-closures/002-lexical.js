const buildCount = (i) => {
    let count = i;

    const displayCount = () => {
        console.log(count++);
    }

    return displayCount;
}

// scope
const myCount = buildCount(1);
myCount(); // 1
myCount(); // 2
myCount(); // 3

// another scope
const myAntoherCount = buildCount(10);
myAntoherCount(); // 10
myAntoherCount(); // 11