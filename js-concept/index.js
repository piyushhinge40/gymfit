/*console.log("js running in js file using src  tag");

let a = 10;
//we use let keyword for declaration of variable  for reassignment
a=30;

a=100;

a=20;

console.log(a)


const b = 10;

//reassignment is not possible in cost declaration variable

b = 20;


console.log(b)*/

/*let name="piyush"

let $name ="nitesh"

let _name="mohit"


console.log(name,$name,_name)*/

//************java script data type */
// 1. primitive data type
/*1.string
2.Number
3.boolean
4.undefine
5.null
6.symbol
7.bigent*/
// 2. non primitive data type

//non primitive data type
/*1. an Object
2.an Array
3.an date*/

/*let myName="piyush";//"",'',``// this three are use  for string

console.log(typeof(myName))*/

/*let myName=100;//this valu use for number
console.log(typeof(myName))*/

/*let myName=true;//this valu use for boolean
console.log(typeof(myName))*/

/*let myName;//this valu use for undefine
console.log(typeof(myName))*/

/*let myName=null;// his data type is object but it is not correct it a buggs
console.log(typeof(myName))*/

/*let a = 3**5;//arathmatic operater +,-,*,**,/,%,++,--,

console.log(a)*/

/*let a = 3;

a+=3;

a = a+8;// assignment operater are use +=,-=,*=,/=,%=,**=,=
console.log(a)*/

/*let result = 2=="2";// ckeck loose equality/ stict equality

console.log(result)*/ //compare operater ==,!=,>,<,>=,<=,===,!==


//logical operater &&,||,!

// let word="hello world"

// console.log(word[0]);

//read the password from user and check below condition
//cond.1:the length of password as to be equal to or greater than 8
//cond.2:the last should be"#"


// let password= prompt("please enter your password!!!");

// let lenOfpassword=password.length;//piyush

// if(lenOfpassword >=8){



// if(password[lenOfpassword-1]==="#"){

//     console.log("password is very very strong!!!!");
// }

// else{

//     console.log("password is strong");
// }

// }

// else{
//     console.log("password is invalid please try again");
// }


// let word = " hello hi how are you!!";

// let index = word.replace("hello hi how  are you","hello nagpur");

// console.log(index);


// for(i=1; i<=100; i++){

//     if(i%2!==0){

//         console.log(i);
//     }
// }
// let sum= 0;

// for(i=1; i<=100; i++){


//     sum = sum + i;

// }

// console.log(sum);


let word ="hola";
let lastindex= word.length-1;

for(i=0; i<=lastindex; i++){

    console.log(word[i]);

    for(j=0; j<=lastindex; j++){

        console.log(word[j]);
    }
}
