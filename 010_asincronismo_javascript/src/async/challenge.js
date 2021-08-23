const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        console.log('Calling data ...');
        const data = await fetchData(url_api);

        console.log('Calling character ...');
        const character = await fetchData(`${url_api}${data.results[0].id}`);

        console.log('Calling origin ...');
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count); // 671
        console.log(character.name); // Rick Sanchez
        console.log(origin.dimension); // Dimension C-137
    } catch (error) {
        console.error(error);
    }
};

console.log('Before');
anotherFunction(API);
console.log('After');
