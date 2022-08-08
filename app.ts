let cl=console.log;

const number1=document.getElementById("num1") ! as HTMLInputElement;
const number2=document.getElementById("num2") ! as HTMLInputElement;
const button=document.getElementById("btn") !;

// const add = (n1 : number,n2 :number) => {
//     return n1+n2;
// }

// button.addEventListener("click", () => {
//     cl(add(+number1.value, +number2.value))
// })

// const add= () => {
    
//         let n1=+number1.value;
//         let n2=+number2.value;
//         cl(n1+n2);
// }

// button.addEventListener("click",add);




let x=10;

x=20;
// x="komal";
// x=true;


let y;

y=19;
y="komal";
y=true;


let w:number;

w=34
w=45
// w="komal"
// w=true;



let person:{
        fname:string,
        lname:string,
        age:number,
        email:string,
}

person={
        fname:"komal",
        lname:"mundhe",
        age:23,
        email:"komalmundhe4@gmail.com",
}