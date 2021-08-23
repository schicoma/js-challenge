const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

// fetchData(API)
//     .then(response => {

//         console.log(response.info); // { count: 671, pages: 34, next: 'https://rickandmortyapi.com/api/character/?page=2', prev: null }
//         fetchData(API + response.results[0].id)
//             .then(response => {

//                 console.log(response.name); // Rick
//                 fetchData(response.origin.url)
//                     .then(response => {

//                         console.log(response.dimension); // Dimension C-137
//                     })
//                     .catch(error => console.log(error));

//             })
//             .catch(error => console.log(error));

//     })
//     .catch(error => console.log(error));

// Refactorizando

fetchData(API)
    .then(response => {
        console.log(response.info.count); // 671
        return fetchData(API + response.results[0].id);
    })
    .then(response => {
        console.log(response.name); // Rick
        return fetchData(response.origin.url);
    })
    .then(response => {
        console.log(response.dimension); // Dimension C-137
    })
    .catch(error => console.error(error));