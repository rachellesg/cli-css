process.argv.forEach(function(v) {
    console.log(v);
});

const hexToRgb = require ('./hextorgb.js');
const rgbToHex = require ('./rgbtohex.js');
const rgbToHsl = require ('./rgbtohsl.js');
const hexToHsl = require ('./hextohsl.js');


if (process.argv[2] === "hex") {
    console.log(hexToRgb(process.argv[3]));
    console.log(hexToHsl(process.argv[3]));
} else if (process.argv[2] === "rgb") {
    console.log(rgbToHex(parseInt(process.argv[3]),parseInt(process.argv[4]),parseInt(process.argv[5])));
    console.log(rgbToHsl(parseInt(process.argv[3]),parseInt(process.argv[4]),parseInt(process.argv[5])));
}