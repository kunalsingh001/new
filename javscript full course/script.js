/* let obj={
    name:"kunal singh",
    branch:"it"
 }
//template literals in js
 let output=` name of the student ${ obj.name}`;
str="   apna college"
  let newstr=str.toUpperCase();
 console.log(newstr)

 console.log(str.trim());

 let num='1234567';
 console.log(num.slice(1,2))

 let str1="apna";
 let str2="college"

 let res=str1.concat(str2)
 console .log(res)
/*
 let fullname=prompt("enter the fullname without spaces");

 let username="@" + fullname + fullname.length;
 console.log(username);

 let heroes=["hulk","thor","spiderman"]
 for(let hero of heroes){
 console.log(hero)
 }

 let item=[250,645,900,300,50];
 
 for(let i=0;i<item.length;i++){
    let offer=item[i]/10;
    item[i]=item[i] -offer;

 }

 console.log(item);

 let fooditems=['mango','banana','apple']

 fooditems.push('litchi','pineapple','grapes');
 console.log(fooditems)
 console.log(fooditems.toString())

 let num1=[1,2,3,4,5,67,8,9,];
 console.log(num1.splice(1,2,101,102))

 num1.splice(4)

 let company=['bloomberg','microsoft', 'uber','google','ibm','netflix']

 

 company.splice(2,1,'ola')


 function myfun(){
    console.log('hello')
    console.log('hello')

 }

 myfun();

 function sum(x,y){
    res=x+y;
    return res;

 }

 let value =sum(2,2);
 console.log(value);


 const arrowsum=(a,b)=>{
    console.log(a+b);
 }

 function countvowel(str){
    count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char === "i" ||char==="o" ||  char ==="u")
        
            count ++;

    }
    console.log(count)


 }
 


 let arr=[1,2,3,4,5,67];

 arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr)
 })


 let arr1=[1,2,3,4,5,6,7];

 arr1.forEach((val) =>{
    console.log(val*val);
 })

 let newarr=arr1.map((val)=>{
    return val*3;
 })

 let evenarr = arr1.filter((val)=>{
    return val%2=== 0;

 })
 console.log(evenarr)

 const output= arr1.reduce((prev,curr)=>{
    return prev >curr? prev : curr;
 })
 console.log(output);


 let marks=[99,98,76,98,93,82];

let achievers= marks.filter((val)=>{
    return val>90;


 })
 console.log(achievers)

let n=prompt("enter the number");

let arr3= [];

for(let i=1;i<=n;i++){
    arr3[i-1]=i;

}
console.log(arr3);

let sum =arr3.reduce((res,curr)=>{
    return res+curr;
})
console.log("sum=",sum);

let factorial=arr3.reduce((res,curr)=>{
    return res *curr;
})

console.log("factorial=",factorial);

 


console.dir(document.body)
let heading=document.getElementById("header")
console.log(heading)

let heads = document.getElementsByClassName("head")
console.log(heads)

let value= document.getElementsByTagName('p')
console.log(value)
 
let allelement= document.querySelectorAll(".head")
console.log(allelement)

console.log(document.body.firstChild);

document.querySelector("div").children
*/

/*
let div=document.querySelector("div")
console.log(div)

div.innerText
/*
let h2= document.querySelector("h2")
console.dir(h2.innerText)

h2.innerText= h2.innerText + "from apna college students"
console.dir(h2.innerText)

let divs =document.querySelectorAll(".box")
console.log(divs[0])

divs[0].innerText="new box"
let idx=1;
for(div of divs){
    div.innerText=`new unique value  ${idx}`;
    idx++;
}


let div= document.querySelector("div")
console.log( div)

let id= div.getAttribute("id");
console.log(id)


let div=document.querySelector("div")
 
div.style.backgroundColor="";
div.style.fontSize= "31px"

div.innerText="hello! kunal kaisa ho"


let newheading=document.createElement("h1")
newheading.innerHTML="<i> Hi i  am new</i>"

document.querySelector("body").prepend(newheading)

 let newbtn= document.createElement("button")
newbtn.innerText="click me !"
newbtn.style.color="white"
newbtn.style.backgroundColor="red"  

document.querySelector("body").prepend(newbtn)

let para=document.querySelector("p")

      
let btn1= document.querySelector("#btn1");

btn1.onclick = ((e) => {
    console.log(e.type)
})
    

btn1.addEventListener("click",()=>{
console.log('button1 was clicked');
})


let div= document.querySelector("div");

div.onmouseover= (()=>{

    console.log("you are inside div ")
})

*/

let modebtn=document.querySelector("#modebtn")
let currmode="light";

modebtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode="light"
        document.querySelector("body").style.backgroundColor ="white"
    }
    console.log(currmode)
    
})

