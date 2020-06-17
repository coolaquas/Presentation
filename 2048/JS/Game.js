var grid;
function blankGrid(){
    return [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
}
var score;

function setup() {
    grid = blankGrid();
    addNumber();
    addNumber();
    disp();
    score = 0;
};
setup();

//add a 2/4 in the randome position
function addNumber() {
    let opt = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                opt.push({
                    x: i,
                    y: j
                });
            }
        }
    }
if (opt.length >0){    
    let spot = opt[Math.floor(Math.random() *opt.length)];
    let r = Math.random(1);
    grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;
    }
}

//display the grid in the viewport
function disp(){
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let x = ("element-" + i +"_"+ j);
        if(grid[i][j] !== 0){
        document.getElementById(x).textContent = grid[i][j];
        switch(true){ 
        case(grid[i][j] == 4 || grid[i][j] == 8):
        $(`#${x}`).animate({opacity: "0.75"});
            break;
        case(grid[i][j] == 16 || grid[i][j] == 32):
        $(`#${x}`).animate({opacity: "0.8"});
            break;
        case(grid[i][j] == 64 || 128):
        $(`#${x}`).animate({opacity: "0.85"});
            break;
        case(grid[i][j] == 256 || grid[i][j] == 512):
        $(`#${x}`).animate({opacity: "0.9"});
            break;
        case(grid[i][j] == 1024 || grid[i][j] == 2048):
        $(`#${x}`).animate({opacity: "0.95" , fontSize: "50"});
            break;    
        default:
            $(`#${x}`).animate({opacity: "0.7"});
        }
       } else {
           document.getElementById(x).textContent = "";
           $(`#${x}`).animate({opacity: "0.4"});
            } 
         }
      }
}


//game over checking function
function isGameOver(){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if (grid [i][j] == 0){
                return false;
            }
            if (i !== 3 && grid [i][j] == grid[i+1][j]){
                return false;
            }
            if (j !== 3 && grid [i][j] == grid[i][j+1]){
                return false;
            }
            if( grid[i][j] == 2048){
                alert("Congratulation. \n You have WON the game.")
                var winSound = new Audio();
                winSound.src = "./music/Winner.mp3";
                WinSound.play();
                return false;
            }
        }
    }
    return true;
}

//jquery for Key Press
$("body").keydown(function(e) {
    let flipped = false;
    let rotated = false;
    let played = false;
    if(e.keyCode == 37){  //left key
        played = true;
        }
  
  
    else if(e.keyCode == 39){ //right key
          grid = flipGrid(grid);
          flipped = true;
          played = true;
        }
  
    else if(e.keyCode == 38){ //up key
          grid = rotateGrid(grid);
          rotated = true;
          played = true;
        }
    else if(e.keyCode == 40) { //down key
          grid = rotateGrid(grid);
          grid = flipGrid(grid);
          rotated = true;
          flipped = true;
          played = true;
        } 
    else
        played = false;
  

        
        if(played){
        let past = copyGrid(grid);
         for (i = 0; i < 4; i++) {
                grid[i] = op(grid[i]);
                $("#score").text(score);
             }
         let change = compare(past,grid);
  
          if(flipped){
          grid = flipGrid(grid);
          }
  
          if(rotated){
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
          }
          let gameOver = isGameOver();
          if(gameOver){
            var lostSound = new Audio();
            lostSound.src = "./music/Gameover.mp3";
            lostSound.play();
            alert("No moves left. \n GAME OVER");
          }
          if(change){
                    addNumber();
                    var slideSound = new Audio();
                    slideSound.src = "./music/Sliding.mp3";
                    slideSound.play();
                  }
          
          disp();
        }
  });
  