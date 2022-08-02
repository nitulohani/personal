let text="Hello my name is "+  '"'+"Naveen" +'"';
let textNi= "Hello Nitu,Hello Nitin";
let indexText=textNi.indexOf(",")
let splitTextFirst="";
let splitTextSecond="";



for(let i=0;i<indexText;i++){
    splitTextFirst += textNi[i];
}
console.log(splitTextFirst);

for(let y=indexText+1;y<textNi.length;y++){
    splitTextSecond += textNi[y];
}
console.log(splitTextSecond);

let addedText=splitTextFirst + "#" +splitTextSecond;

console.log(addedText);