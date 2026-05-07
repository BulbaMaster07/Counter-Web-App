let counter = localStorage.getItem("counterValue")
    ? parseInt(localStorage.getItem("counterValue"))
    : 0;

const counterDisplay = document.getElementById("counter");
const statusText = document.getElementById("status");

const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

const plusFiveBtn = document.getElementById("plusFiveBtn");
const minusFiveBtn = document.getElementById("minusFiveBtn");

const customValueInput = document.getElementById("customValue");

const clickSound = document.getElementById("clickSound");

function playSound(){
    clickSound.currentTime = 0;
    clickSound.play();
}

function updateCounter(){

    counterDisplay.textContent = counter;

    if(counter > 0){
        statusText.textContent = "Status: Positive";
        statusText.style.color = "green";
    }
    else if(counter < 0){
        statusText.textContent = "Status: Negative";
        statusText.style.color = "red";
    }
    else{
        statusText.textContent = "Status: Zero";
        statusText.style.color = "black";
    }

    localStorage.setItem("counterValue", counter);
}

incrementBtn.addEventListener("click", function(){
    counter++;
    updateCounter();
    playSound();
});

decrementBtn.addEventListener("click", function(){

    // Prevent going below 0
    if(counter > 0){
        counter--;
    }

    updateCounter();
    playSound();
});

resetBtn.addEventListener("dblclick", function(){
    counter = 0;
    updateCounter();
    playSound();
});

plusFiveBtn.addEventListener("click", function(){

    let value = parseInt(customValueInput.value);

    counter += value;

    updateCounter();
    playSound();
});

minusFiveBtn.addEventListener("click", function(){

    let value = parseInt(customValueInput.value);

    counter -= value;

    updateCounter();
    playSound();
});

document.addEventListener("keydown", function(event){

    if(event.key === "ArrowUp"){
        counter++;
        updateCounter();
        playSound();
    }

    if(event.key === "ArrowDown"){

        if(counter > 0){
            counter--;
        }

        updateCounter();
        playSound();
    }

});

updateCounter();
