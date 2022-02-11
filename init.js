

const TICK_RATE = 1000;

async function init(){
    console.log('starting game');

    let nextTimeToTick = Date.now();

    function nextAnimationFrame(){
        const now = Date.now();
        
        if (nextTimeToTick <= now){

            gameState.tick();
           
            nextTimeToTick = now + TICK_RATE;
        }
        requestAnimationFrame(nextAnimationFrame);
    }
    requestAnimationFrame(nextAnimationFrame);
}


init();

let time = document.querySelector(".time");
let points = document.querySelector(".ptk");

// POINTS
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
// 

let menu = document.querySelector(".menu");
let result = document.querySelector(".rules");
let startGame = false;

//COLORS
let red = "#957DAD";

function visableRules(){
    result.style.visibility="visible";
}
function hiddenRules(){
    result.style.visibility="hidden";
}



if (points == 2){

    one.style.backgroundColor=red;
}



const gameState = {
    
    
    clock: 30,
    points:0,
    win:0,
    active:false,


    resetClock(){
        this.clock = 30;
        time.innerHTML = this.clock;
        this.active = true;
    },

    tick(){
        this.clock--;

        if (this.active){
        time.innerHTML = this.clock;}



        if(this.clock == 0){
            this.clock = 31;
        }


        if(this.clock > 10){

            if (this.points > 6 && this.points < 10){
            window.location.href="sample.html";
            }

            else if (this.points > 11 && this.points < 25){
                window.location.href="sample.html";
                }

            else if (this.points > 25 && this.points < 35){
                window.location.href="sample.html";
                }

            else if (this.points > 35 && this.points < 45){
                window.location.href="sample.html";
                    }
    
            else if (this.points > 45 && this.points < 55){
                window.location.href="sample.html";
                    }
        
    }
        
    },

    addPoint(){
        this.points++,
        
        points.innerHTML = this.points;
        this.checkpoint(this.points);
    },

    checkpoint(ptk){
        if (ptk == 5){
            one.style.backgroundColor=red;
            
        }
        else if(ptk == 15){
            two.style.backgroundColor=red;
        }
        else if(ptk == 25){
            three.style.backgroundColor=red;
        }
        else if(ptk == 35){
            four.style.backgroundColor=red;
        }
        else if(ptk == 45){
            five.style.backgroundColor=red;
        }
        else if(ptk == 55){
            six.style.backgroundColor=red;
        }
        else if(ptk == 70){
            seven.style.backgroundColor=red;
        }

    }


};

function add(){
    gameState.addPoint();
}

function hiddenMenu(){
    menu.style.visibility="hidden";
    gameState.resetClock();
}

