//function for copy a grid
function copyGrid(grid){
    let extra = blankGrid();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            extra[i][j] = grid[i][j];
        }
    } 
    return extra;
}


//Operate function
function op(row){
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
}


//function for sliding
function slide(row) {
    let arr = row.filter(function(val){
        return val !== 0;
        });
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = arr.concat(zeros);
    return arr;
}
    
//function for combine
    function combine(row){
        for(let j=0; j<=3; j++){
            let a = row[j];
            let b = row[j+1];
            if(a == b){
                row[j] = a+b;
                score = score + row[j];
                row[j+1] = 0;
            }
        }
    return row;
}
    
    

// Flip the grid
function flipGrid(grid){
    for(i=0;i<4;i++){
        grid[i].reverse();
    }
    return grid;
}


//rotate the grid
function rotateGrid(grid){
    let newGrid = blankGrid();
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            newGrid[i][j] = grid[j][i];
        }
    }
    return newGrid;
}

//function for check past and present grid after sliding
function compare(a,b){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (a[i][j] !== b[i][j]){    
            return true;
            }
        }
    }
return false;
}



