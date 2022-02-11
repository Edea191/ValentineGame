

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

// ICONS
let firstHeart = document.querySelector(".firstheart");
let secondHeart = document.querySelector(".secondheart");
let thirdHeart = document.querySelector(".thirdheart");
let fourthHeart = document.querySelector(".fourheart");

let enableHeart="red";
let disableHeart="#e66771";


let time = document.querySelector(".time");
let points = document.querySelector(".ptk");

// POINTS
let one = document.querySelector(".point_one");
let two = document.querySelector(".point_two");
let three = document.querySelector(".point_three");
let four = document.querySelector(".point_four");
let five = document.querySelector(".point_five");


let activeStar ="rgb(255, 187, 0)";
let InAtiveStar ="rgb(238, 222, 177)";
// 

let menu = document.querySelector(".menu");
let result = document.querySelector(".rules");
let startGame = false;
let heartNum = 3;

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
    randomNum:3,


    resetClock(){
        this.clock = 30;
        time.innerHTML = this.clock;
        this.active = true;
    },

    tick(){

       // this.random();
       // console.log(this.randomNum);
        
        this.clock--;

        if (this.active){
        time.innerHTML = this.clock;}




        if(this.clock == 0){

            if (this.points > 45 && this.points < 55){
            window.location.href="finalWin.html";
            }

            else if (this.points > 35 && this.points < 45){
                window.location.href="fourWin.html";
                }

            else if (this.points > 25 && this.points < 35){
                window.location.href="thirdWin.html";
                }

            else if (this.points > 15 && this.points < 25){
                window.location.href="secondWin.html";
                    }
    
            else if (this.points > 6 && this.points < 15){
                window.location.href="firstWin.html";
                    }
            
            else if (this.points > 0 && this.points < 6){
                window.location.href="tryAgain.html";
            }
        
    }
        
    },

    random(heartNum){
        let lastClickedHeart = heartNum;

        console.log(heartNum + " and " + this.randomNum);

        if (heartNum === this.randomNum){
            min = Math.ceil(1);
            max = Math.floor(5);
            this.addPoint();
            this.disableAll();
            
            result = Math.floor(Math.random()* (max - min)) + min;
            console.log( "A drawn number: " + result);

            this.randomNum= result;

            switch(result){
                case 1:
                    this.disableAll();
                    firstHeart.style.color=enableHeart;
                    break;
    
                case 2:
                    this.disableAll();
                    secondHeart.style.color=enableHeart;
                    break;
    
                case 3:
                    this.disableAll();
                    thirdHeart.style.color=enableHeart;
                    break;
                    
                case 4:
                    this.disableAll();
                    fourthHeart.style.color=enableHeart;
                    break; 
    
        }

         
        }

    },

    addPoint(){
        this.points++,    
        points.innerHTML = this.points;
        this.checkpoint(this.points);
    },

    disableAll(){
        firstHeart.style.color=disableHeart;
        secondHeart.style.color=disableHeart;
        thirdHeart.style.color=disableHeart;
        fourthHeart.style.color=disableHeart;

    },


    checkpoint(ptk){
        if (ptk == 15){
            one.style.color=activeStar;
            
        }
        else if(ptk == 25){
            two.style.color=activeStar;
        }
        else if(ptk == 35){
            three.style.color=activeStar;
        }
        else if(ptk == 45){
            four.style.color=activeStar;
        }
        else if(ptk == 55){
            five.style.color=activeStar;
        }
        

    }


};

function add(howHeart){
            gameState.random(howHeart);
    };





function hiddenMenu(){
    menu.style.visibility="hidden";
    gameState.resetClock();
}

