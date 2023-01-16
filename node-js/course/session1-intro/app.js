let calculator = require ("./calculator");

console.log(calculator.sum(1,20));
console.log(calculator.sub(30,20));
console.log(calculator.div(20,10));
console.log(calculator.mult(1,10));

calculator.testExportVar = "Test after export";
console.log(calculator.testExportVar);