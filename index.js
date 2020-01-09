// process.argv.forEach(function(v) {
//     console.log(v);
// });

const hexToRgb = require ('./hextorgb.js');
const rgbToHex = require ('./rgbtohex.js');
const rgbToHsl = require ('./rgbtohsl.js');
const hexToHsl = require ('./hextohsl.js');

if (process.argv[2] === "hex") {

    console.log(hexToRgb(process.argv[3]));
    console.log(hexToHsl(process.argv[3]));

} else if (process.argv[2] === "rgb") {

    let r = parseInt(process.argv[3]);
    let g = parseInt(process.argv[4]);
    let b = parseInt(process.argv[5]);

    console.log(rgbToHex(r,g,b));
    console.log(rgbToHsl(r,g,b));
}