const bcrypt = require('bcrypt');

const password = '1234segura!';

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, (err, res) => {
        console.log(res); // true
    });

});