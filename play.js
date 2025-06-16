import words from "./word.js"

const wordtext=document.querySelector(".word");
const hinttext=document.querySelector(".hint span");
const checkbtn=document.querySelector(".check-word");
const inputfield=document.querySelector("input");
const timertext=document.querySelector(".time span b");

let selectedword,timer;

const initTime=maxtime=>{
    clearInterval(timer);

timer=setInterval(()=>{

if(maxtime>0) {

maxtime--;

timertext.innerHTML=maxtime;

return;

}

alert('Sorry! Time is up ${selectedword} was the correct word')

clearInterval(timer);

initGame()

},1000)

}

const initGame=()=>{
inputfield.focus();
initTime(30)

const randomobj=words[Math.floor(Math.random()* words.length)]

selectedword=randomobj.word;
const hint=randomobj.hint;

const wordArray=selectedword.split("")
for(let i=wordArray.length-1;i>0; i--){
    let j=Math.floor(Math.random()*(i+1))

    let temp=wordArray[i]
    wordArray[i]=wordArray[j]
    wordArray[j]=temp
}
wordtext.innerHTML=wordArray.join("")
hinttext.innerHTML=hint;
inputfield.value=""

console.log(randomobj)
console.log(selectedword)
console.log(hint)
console.log(wordArray);
}
const checkword=()=>
{
    let userword=inputfield.value.toLowerCase();
    if(!userword) return alert("Please enter a word")
    if(userword!==selectedword)
    {
        return alert('oops! ${userword} is incorect')
    }
    alert('congratulations!  ${userword} is correct')
    initGame()
}

checkbtn.addEventListener("click",checkword)
initGame()