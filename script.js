template literals giving space between a string 

console.log("fasial\nshaik");

console.log("jawad\tnazish");

template literals giving space between a string 

console.log("fasial\nshaik");

console.log("jawad\tnazish");


print 1 to 5
for(let i=0; i<50; i++ ){
     console.log("i=",i);

    
}

str.toLowerCase

let str="NAZISHPARVEZ";
str= str.toLowerCase();
console.log("str");


/ str .replace 

let str="hello";
console.log(str.replace("lo","p"))






string0123456789 in slice 
let str="7075577561";
console.log(str.slice(1,5));


str .replace 

let str="hello";
console.log(str.replace("lo","p"));



str charAt
let str="ilovetu";
console.log(str.charAt(6));




string0123456789 in slice 
let str="7075577561";
console.log(str.slice(1,5));



let specialstring=`this is a garden template literals ${6+6+1}`;
console.log(specialstring);


str charAt
let str="ilovetu";
console.log(str.charAt(6));

let sum = 0;
for (let i=0; i<=5; i++){
    sum=sum+i;
}

//promise 
let promise = new Promise((resolve, reject)=>{
    console.log("my name is Faisal Shaik");
    reject
    });


/ print 1 to 5
for(let i=0; i<50; i++ ){
     console.log("i=",i);

    }



for(let i=4; i<=6; i++ ){
    console.log("i=",i);

    
}

while loop 
let i=1;
while (i<=1000) {
     console.log("shaik faisal ");
     i++;
     
     
}


do while loop
let i=20;
do {
     
     console.log("shaik Faisal");
     i++;     
} while (i<=10);


for-of loop 
let str ="ShaikFaisal";

for(let i of str ){
     // iterator->characters
     console.log("i",i);
     
}

for-of loop 
let str="JavaScript";

for (let i of str) {
 
     console.log("i",i);
     
     
}

let str="dilawarSharief";
for (let i of str ) {
     
     console.log("i",i);
     
}


/ // for loop
let=1;
for (let i = 5; i<=30 ;i++) {
console.log("i",i);

     
}


do while loop
let i=1;
do {
     console.log("shaik faisal");
     i++;
     
} while (i<=10);

let i=5;
do {
     console.log("nazish");
     i++;
     
} while (i<=10);



for-of loop
let str="parvez jawad";
let size=0;
for (let i of str) {
     console.log("i",i);
     size++;
}
console.log("string size=",size);




for-of loop 
let str="dilawarparvezfaisalnoor";
let size=0;
for (let i of str ) {
     console.log("i",i);
     size++;
}
console.log("string size=",size);



for-of loop 

let str="fasial"
let size=0;
for (let val of str) {
    console.log("i",i);
    size++;
    
}
console.log("string size= ", size );


let str="tu"
let size=0;
for (let i of str) {
    console.log("i",i);
    size++;

}
console.log("string size= ", size );



let=1;
for (let i = 0; i<= ;i++) {
console.log("i",i);

     
}

Template Literals
let specialstring=`This is a template literal ${2+2+1}`;




 let specialstring=`this is a bom template literal ${5+5+5}`;
    console.log(specialstring);

let specialstring=`this is a faisal we lanching a rocket template literal ${20+20+10}`;
    console.log(specialstring);
    


Strings 
let str="FaisalShaik";

console.log(str[10]);


let str="s.nazishParvez"
console.log(str[7]);


Strings in Js str.toUpperCase 

let str="faisalshaik";
str= str.toUpperCase();

str.toLowerCase

let str="NAZISHPARVEZ";
str= str.toLowerCase();
console.log("str");


String in str.trim

let str= "       a faisal is aa   agood  boy    ";
console.log(str.trim());



string0123456789 in slice 
let str="7075577561";
console.log(str.slice(1,5));



str .replace 
let str="hello";
console.log(str.replace("lo","p"));

str charAt
let str="ilovetu";
console.log(str.charAt(6));





let promise = new Promise((resolve, reject)=>{
    console.log("my name is Faisal Shaik");
    reject
    });



str.toLowerCase

let str="NAZISHPARVEZ";
str= str.toLowerCase();
console.log("str");


syncs means one after the other 
console.log("one");
console.log("two");
console.log("third");



set Timeout function & async
function hello() {
    console.log("hello");

    
}
setTimeout(hello,2000)//timeout 


// nesting 
let age = 19;
if (age >=18);{
    if (age >= 60){
        console.log("senior");
        }else {
            console.log("middle");
            
        }
}       else{
    console.log("child ");
    
}
// callback nested 
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if (getNextData){
            getNextData();
        }
        
    }, 2000);
}
getData(1,()=>{
    getData(2, () =>{

    });
});



// Promise chain 

function getData(dataId){
    return new Promise((reslove, reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            reslove("success");    
        }, 3000);

    });
}



// promise chain 
getData(1).then((res) => {
    console.log(res);
    getData(2).then(()=> {
        console.log(res);
        
    });
    
});


// Async-await
function getData(dataId){
    return new Promise((reslove, reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            reslove("success");    
        }, 3000);

    });
}


// // Async-await
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);    
}
