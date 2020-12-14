
  
var grid = []
var counter = 1
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])

var numberList = [1,2,3,4,5,6,7,8,9]



function check(grid2){
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (grid2[row][col] == 0) {
                return false
            }
        }
    }
    return true
}

function solve(grid2) {
  // console.log(grid2);
  var row, col

  for (var i = 0; i < 81; i++) {
    row = Math.floor(i/9)
    col = i % 9
    // console.log(row, col);
    if (grid2[row][col]==0) {
      // console.log("llama");
      for (var val = 1; val < 10; val++) {
        if (!grid2[row].includes(val)) {
          if (![grid2[0][col],grid2[1][col],grid2[2][col],grid2[3][col],grid2[4][col],grid2[5][col],grid2[6][col],grid2[7][col],grid2[8][col]].includes(val)) {
                var square = []
                if (row < 3) {
                    if (col < 3) {
                        for (var i = 0; i < 3; i++) {
                            square.push(grid2[i].slice(0,3))
                        }
                    }
                    else if (col < 6) {
                        for (var i = 0; i < 3; i++) {
                            square.push(grid2[i].slice(3,6))
                        }
                    }

                    else {
                        for (var i = 0; i < 3; i++) {
                            square.push(grid2[i].slice(6,9))
                        }
                    }
                }
                else if (row < 6) {
                    if (col < 3) {
                        for (var i = 3; i < 6; i++) {
                            square.push(grid2[i].slice(0,3))
                        }
                    }
                    else if (col < 6) {
                        for (var i = 3; i < 6; i++) {
                            square.push(grid2[i].slice(3,6))
                        }
                    }

                    else {
                        for (var i = 3; i < 6; i++) {
                            square.push(grid2[i].slice(6,9))
                        }
                    }
                }
                else {
                    if (col < 3) {
                        for (var i = 6; i < 9; i++) {
                            square.push(grid2[i].slice(0,3))
                        }
                    }
                    else if (col < 6) {
                        for (var i = 6; i < 9; i++) {
                            square.push(grid2[i].slice(3,6))
                        }
                    }

                    else {
                        for (var i = 6; i < 9; i++) {
                            square.push(grid2[i].slice(6,9))
                        }
                    }
                }

                var toComp = []
                for (var i = 0; i < square.length; i++) {
                    for (var j = 0; j < 3; j++) {
                        toComp.push(square[i][j])
                    }
                }
                // console.log(toComp);
                if (!toComp.includes(val)) {
                    grid2[row][col] = val
                    if (check(grid2)) {
                        counter = counter + 1
                        // console.log(counter);
                        break
                    }
                    else {
                        if (solve(grid2)) {
                            return true
                        }
                    }
                }
              }
            }
        }
        break
    }


  }
  grid2[row][col] = 0
  // return grid2
}

function shuffle(numbers) {
    var ctr = numbers.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = numbers[ctr];
        numbers[ctr] = numbers[index];
        numbers[index] = temp;
    }
    return numbers;
}

function fill(grid) {
    // var counter = 0
    var row, col

    for (var j = 0; j < 81; j++) {
        row = Math.floor(j/9)
        col = j % 9
        // console.log(row, col);
        if (grid[row][col] == 0) {
            numberList = shuffle(numberList)
            // console.log(numberList);
            for (var id = 0; id < numberList.length; id++) {
                // console.log(grid[row]);
                if (!grid[row].includes(numberList[id])) {
                    if (![grid[0][col],grid[1][col],grid[2][col],grid[3][col],grid[4][col],grid[5][col],grid[6][col],grid[7][col],grid[8][col]].includes(numberList[id])) {
                        var square = []
                        if (row < 3) {
                            if (col < 3) {
                                for (var i = 0; i < 3; i++) {
                                    square.push(grid[i].slice(0,3))
                                }
                            }
                            else if (col < 6) {
                                for (var i = 0; i < 3; i++) {
                                    square.push(grid[i].slice(3,6))
                                }
                            }

                            else {
                                for (var i = 0; i < 3; i++) {
                                    square.push(grid[i].slice(6,9))
                                }
                            }
                        }
                        else if (row < 6) {
                            if (col < 3) {
                                for (var i = 3; i < 6; i++) {
                                    square.push(grid[i].slice(0,3))
                                }
                            }
                            else if (col < 6) {
                                for (var i = 3; i < 6; i++) {
                                    square.push(grid[i].slice(3,6))
                                }
                            }

                            else {
                                for (var i = 3; i < 6; i++) {
                                    square.push(grid[i].slice(6,9))
                                }
                            }
                        }
                        else {
                            if (col < 3) {
                                for (var i = 6; i < 9; i++) {
                                    square.push(grid[i].slice(0,3))
                                }
                            }
                            else if (col < 6) {
                                for (var i = 6; i < 9; i++) {
                                    square.push(grid[i].slice(3,6))
                                }
                            }

                            else {
                                for (var i = 6; i < 9; i++) {
                                    square.push(grid[i].slice(6,9))
                                }
                            }
                        }

                        var toComp = []
                        for (var i = 0; i < square.length; i++) {
                            for (var j = 0; j < 3; j++) {
                                toComp.push(square[i][j])
                            }
                        }
                        // console.log(toComp);
                        if (!toComp.includes(numberList[id])) {
                            grid[row][col] = numberList[id]
                            // console.log("llama");
                            if (check(grid)) {
                                return true
                            } else {
                                if (fill(grid)) {
                                    return grid
                                }
                            }
                        }
                    }
                }

            }
            break
        }

    }
    grid[row][col] = 0
}

function generate() { //attempts, mistakes, hints default = (4,3,3)
    // fill(grid);
    grid = []
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    grid.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    var fullGrid = fill(grid)
    // if (fill(grid)) {
    //     console.log("ok");
    // } else {
    //     console.log("no chyba nie");
    // }
    // console.log(fullGrid);
    var gridGet = []
    for (var i = 0; i < 9; i++) {
        gridGet.push([])
        for (var j = 0; j < 9; j++) {
            gridGet[i][j] = fullGrid[i][j]
        }
    }
    // console.log(fullGrid);
    // console.log(gridGet);

    var milo = 0
    // grid = gridGet
    var att = 3, row, col
    while (att > 0) {

        row = Math.floor((Math.random() * 9))
        col = Math.floor((Math.random() * 9))
        // console.log(gridGet[row][col]);
        while (gridGet[row][col] == 0) {
            row = Math.floor((Math.random() * 9))
            col = Math.floor((Math.random() * 9))
        }

        backup = gridGet[row][col]
        gridGet[row][col] = 0
        // console.log(gridGet);

        copy = []

        for (var r = 0; r < 9; r++) {
            copy.push([])
            for (var c = 0; c < 9; c++) {
                copy[r].push(gridGet[r][c])
            }
        }

        counter = 0

        solve(copy)
        // console.log(counter);
        if (!(counter == 1)) {
            // console.log("llama");
            gridGet[row][col] = backup
            att -= 1
            // console.log(att);
        }
        // milo = milo + 1

    }
    // console.log(milo);
    return [fullGrid, gridGet]
}

// function zerosGrid(gridGet, attempts) {
//     counter = 1
//     // grid = gridGet
//     var att = attempts, row, col
//     while (att > 0) {
//
//         row = Math.floor((Math.random() * 9))
//         col = Math.floor((Math.random() * 9))
//         while (gridGet[row][col] == 0) {
//             row = Math.floor((Math.random() * 9))
//             col = Math.floor((Math.random() * 9))
//         }
//
//         backup = gridGet[row][col]
//         gridGet[row][col] = 0
//
//         copy = []
//
//         for (var r = 0; r < 9; r++) {
//             copy.push([])
//             for (var c = 0; c < 9; c++) {
//                 copy[r].push(gridGet[r][c])
//             }
//         }
//
//         counter = 0
//
//         solve(copy)
//         // console.log(counter);
//         if (!(counter == 1)) {
//             // console.log("llama");
//             gridGet[row][col] = backup
//             att -= 1
//         }
//     }
//
//     return gridGet
//
// }
module.exports = {
    check: check,
    solve: solve,
    shuffle: shuffle,
    fill: fill,
    generate: generate
  };