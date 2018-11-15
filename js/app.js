let card = document.getElementsByClassName("card");
let cards = [...card];
let openedCards=[];
let counter = document.querySelector(".moves");
let moves=0;
let minute=0; 
let second=0;
let hour=0;
let interval;
let finalMove=document.getElementById("finalMove");
const stars = document.querySelectorAll(".fa-star");


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const deck = document.querySelector(".deck");

function startGame(){
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
    stars[2].style.visibility = "visible";
    stars[1].style.visibility = "visible";

    //reset timer
    minute=0; 
    second=0;
    hour=0;
    let mins=document.querySelector(".minute");
    let secs=document.querySelector(".second");
    mins.innerHTML=0;
    secs.innerHTML=0;
    clearInterval(interval);

    // shuffle deck
    let shuffledCards = shuffle(cards);
    for ( let each of shuffledCards){
        deck.appendChild(each);
        each.classList.remove("show", "open", "match", "disabled");
    }


}


//refresh the current page
document.body.onload = startGame();


// Click the restart button
const reload=document.querySelector('.restart');
reload.addEventListener('click', startGame);


// After click the play again button, the hidden html "overlay" will appear on the window.
function playAgain(){
    document.getElementsByClassName("overlay")[0].style.visibility="hidden";
    startGame();  
};

function congratulations(){
    if(matchedCard.length == 16){
        document.getElementsByClassName("overlay")[0].style.visibility="visible";   
        finalMove.innerHTML=moves;
        finalmins.innerHTML=minute;
        finalsecs.innerHTML=second;
    }
}



// After each click, check if the star rating shoud be updated
let finalStar=document.querySelector("#starRating");

function starRemove(){
    if (moves==8){ 
        finalStar.textContent= "3";
    }   
    if (moves==13){ 
        stars[2].style.visibility = "collapse";
        finalStar.textContent= "2";
    }
    else if (moves==15){    
        stars[1].style.visibility = "collapse";
        finalStar.textContent= "1";   
    }   
}


// After each click Count how many cards are matched
let matchedCard = document.getElementsByClassName("match");
function matchNum(){
    matchedCard = document.querySelectorAll('.match');
}


// Each time can only open two cards, these two cards will be push in an empty array openedCards=[]
// These two cards will be checked if they are matched or not
// If matched, add "match" to these two cards' classList, then remove "open" and "show " from classList and last empty openedCards array
// If unmatched, add "unmatch" to these two cards' classList. when these two cards show red, set cards cannot be pointed. 
// Then use setTimeout function, after half second these two cards will be turn to back.
// Empty array openedCards again

function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add("disabled");
    });
}

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove("disabled");  
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
   
}

// After each click, update moves to html.
function moveCounter(){
    moves++;
    counter.innerHTML= moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }  
}

 
function matched(){
    // matched cards'background color become green
    openedCards[0].classList.add("match","disabled");
    openedCards[1].classList.add("match","disabled");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    
    openedCards = [];
   
}


function unmatched(){
    // unmatched cards'background color become red
   openedCards[0].classList.add("unmatch");
   openedCards[1].classList.add("unmatch");
   disable()//Each time can only open two cards
   setTimeout(function(){
       openedCards[0].classList.remove("show", "open","unmatch");
       openedCards[1].classList.remove("show", "open","unmatch");
       enable();
       openedCards = [];           
   },500);
}

function cardOpen(){
    openedCards.push(this);
    if(openedCards.length===2){
        moveCounter();
        if(openedCards[0].childNodes[1].className === openedCards[1].childNodes[1].className){
           matched();   
        }
        else{
            unmatched();    
        }
    }         
};


// Timer
let mins=document.querySelector(".minute");
let secs=document.querySelector(".second");

function startTimer(){
    interval=setInterval(function(){
        mins.innerHTML=minute;
        secs.innerHTML=second;
        second++;
        if(second==60){
            minute++;
            second=0;
        }
        if(minute==60){
            hour++;
            minute=0;
        }
    },1000);
}


// Display cards:Adding class name (open, show and dsabled) to clicked card
// Add "disabled" to the card's class, make this card cannot be click again.  
function display (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");   
};

// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){ 
    card = cards[i];
    card.addEventListener("click", display);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click", matchNum);
    card.addEventListener("click", starRemove);
    card.addEventListener("click", congratulations);
};


