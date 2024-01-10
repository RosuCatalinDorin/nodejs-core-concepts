# Bazele nodeJs

## Arhitecutra

- ARM 46
- Mims X 64

1. C/C++ --> Assembly Language --> Machine Code

2. JavaScript/Python --> C/C++ --> Assembly Language -> Machine Code

Exemplu executie scrona sincron:

```javascript
// sinc
console.log("fisrt");
// node este naspa
for (let i = 0; i < 100000000000; i++) {}
```

##### In acest exeplu vedem cum se afiseaza mesajul:

    - first
    - second
    - fiserul (Buffer)

```javascript
// Event Driging Programing
// asinc
console.log("fisrt");
// node este naspa
require("fs").readFile("./HelloWord.s", (err, data) => {
  console.log(data);
});
console.log("second");
```

### Exemplu asa NU!

##### in acest exemplu se blocheaza thread-ul main + event loop de acatre forul de mai jos.

```javascript
// ce sa nu faci
// start
setTimeout(() => {
  console.log("Done");
}, 1);
// se blocheaza tread-ul principal cu forul de mai jos. si nu se afiseaza mesajul.
for (let i = 0; i < 100000000000; i++) {}
// conluizia este Nu bloca he main Thread
//done
```
