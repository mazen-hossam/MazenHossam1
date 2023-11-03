const pageInit = () => {
  // 0 - 22
  let randomWordIndex = Math.floor(Math.random() * 23);
  let wordObject = words[randomWordIndex];

   lengthword = wordObject.word;
  
  let array = [];
  let arrayword = [];
  for(let i = 1 ; i <=  lengthword.length ;){
    let indexword = Math.floor(Math.random() * lengthword.length);
    if(!array.includes(indexword)){
        
      array.push(indexword); 
      arrayword.push(lengthword[indexword])
      i++;
    }
  }
  lblWord.innerHTML = arrayword.join("");
  lblHint.innerHTML = wordObject.hint;
  startTimer();
};

const changeTimer = () => {
  let timerValue = parseInt(lblTimer.innerHTML);
  if (timerValue <= 0) {
    clearInterval(myInterval);
    pageInit();
  } else lblTimer.innerHTML = timerValue - 1;
};

const startTimer = () => {
  lblTimer.innerHTML = 20;
  myInterval = setInterval(changeTimer, 1000);
};

refreshWord.onclick = function(){
  clearInterval(myInterval);
  pageInit();
  inputWord.value="";
}


checkWord.onclick = function(){
  let input = inputWord.value;
  if(input.toLowerCase === lengthword.toLowerCase){
    body.classList.add('hide');
  conditiontrue.classList.remove('hide');
  }

  else if(inputWord.value === ""){
        alert("Please Enter Text")
  }
  else{
    body.classList.add('hide');
    conditionfalse.classList.remove('hide');
  }
  inputWord.value = "";
}

continuepage.onclick = function(){
  conditiontrue.classList.add('hide');
  body.classList.remove('hide');
  clearInterval(myInterval);
  pageInit();
}

tryagain.onclick = function(){
  conditionfalse.classList.add('hide');
  body.classList.remove('hide');
  clearInterval(myInterval);
  pageInit();
}

window.addEventListener("DOMContentLoaded", () => {
  lblWord = document.getElementById("scrambleWord");
  lblHint = document.getElementById("hint");
  lblTimer = document.getElementById("timer");
  refreshWord = document.getElementById("refreshWord");
  inputWord = document.getElementById("inputWord");
  checkWord = document.getElementById("checkWord");
  continuepage =  document.getElementById("continuepage");
  body = document.getElementById("page");
  conditiontrue = document.getElementById("conditiontrue");
  conditionfalse = document.getElementById("conditionfalse");
  tryagain = document.getElementById("tryagain");
  page = document.getElementById("page")
  body.classList.remove('hide');
  pageInit();
});
