var cl = console.log;
var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var button = document.getElementById("btn");
// const add = (n1 : number,n2 :number) => {
//     return n1+n2;
// }
// button.addEventListener("click", () => {
//     cl(add(+number1.value, +number2.value))
// })
var add = function () {
    var n1 = +number1.value;
    var n2 = +number2.value;
    cl(n1 + n2);
};
button.addEventListener("click", add);
