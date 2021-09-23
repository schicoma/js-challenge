const sharp = require('sharp');

sharp('original.png')
    .resize(80) // width and height of 80px 
    .grayscale() // white and black
    .toFile('original-resized.png');