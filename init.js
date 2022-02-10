

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

//COLORS
let red = "#957DAD";


if (points == 2){

    one.style.backgroundColor=red;
}


const gameState = {
    
    
    clock: 1,
    points:0,


    tick(){
        this.clock++;
        time.innerHTML = this.clock;
        
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

