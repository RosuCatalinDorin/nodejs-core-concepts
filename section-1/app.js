// sinc
onsole.log("fisrt");
// node este naspa
for (let i = 0; i < 100000000000; i++) {}

// ha ha
console.log("second");

// Event Driging Programing

// asinc
console.log("fisrt");
// node este naspa
require("fs").readFile("./HelloWord.s", (err, data) => {
  console.log(data);
});
// ha ha
console.log("second");

// ce sa nu faci
// start
setTimeout(() => {
  console.log("Done");
}, 1);
// se blocheaza tread-ul principal cu forul de mai jos. si nu se afiseaza mesajul.
for (let i = 0; i < 100000000000; i++) {}
// conluizia este Nu bloca he main Thread
//done
