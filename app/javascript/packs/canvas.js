window.onload = () => {
    //console.log(getContext)
    const canvas = document.getElementById('my_canvas')
    let ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.strokeStyle = "#F8F4E8";

    let CHANGE = false;
    let CLICK = {};
    let rounds = 0;
    let random = 0;

    let cell = 10;

    let width = document.body.clientWidth;
    let height = document.body.clientHeight;

    let row = new Array(Math.floor(height/5)).fill(0);
    let grid = new Array(Math.floor(width/5)).fill(row);
    let clickedCells = {
        "|0,1|": [0,1],
        "|2,0|": [2,0],
        "|2,1|": [2,1],
        "|2,2|": [2,2],
        "|2,2|": [1,2],
    };

    document.body.addEventListener("mousemove", e => {
        CHANGE = [e.pageX, e.pageY];
    })

    document.body.addEventListener("click", e => {
        random = Math.random();

        if (random <= 0.25) {
            CLICK["a"] = [e.pageX, e.pageY]
            CLICK["b"] = [e.pageX-10, e.pageY]
            CLICK["c"] = [e.pageX+10, e.pageY]
        } else if (random <= 0.5) {
            CLICK["a"] = [e.pageX, e.pageY]
            CLICK["b"] = [e.pageX+10, e.pageY]
            CLICK["c"] = [e.pageX+20, e.pageY]

            CLICK["d"] = [e.pageX+10, e.pageY+10]
            CLICK["e"] = [e.pageX, e.pageY+10]
            CLICK["f"] = [e.pageX-10, e.pageY+10]
        } else if (random <= 0.75) {
            CHANGE = false;
            CLICK["a"] = [e.pageX-10, e.pageY]
            CLICK["b"] = [e.pageX-10, e.pageY-10]
            CLICK["c"] = [e.pageX, e.pageY-10]

            CLICK["d"] = [e.pageX+10, e.pageY+20]
            CLICK["e"] = [e.pageX+20, e.pageY+20]
            CLICK["f"] = [e.pageX+20, e.pageY+10]
        } else if (random <= 1) {
            CLICK["a"] = [e.pageX, e.pageY]
            CLICK["b"] = [e.pageX+10, e.pageY+10]
            CLICK["c"] = [e.pageX+20, e.pageY+10]

            CLICK["d"] = [e.pageX+20, e.pageY]
            CLICK["e"] = [e.pageX+20, e.pageY-10]
        }
        

    })

    setInterval(() =>{
        rounds++;
        if (true) {
            ctx.canvas.width  = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            width = document.body.clientWidth;
            height = document.body.clientHeight;
            ctx.clearRect(0, 0, width, height)
            row = new Array(Math.floor(height/5)).fill(0);
            grid = new Array(Math.floor(width/5)).fill(row)
            ctx.strokeStyle = "#F8F4E8";

            grid.forEach((n, i) => {
                row.forEach((r, j) => {
                    if (i % 2 === 0) {
                        if (j % 2 === 0) {
                            ctx.fillStyle = '#ACECD5'
                            ctx.strokeRect(cell * i, cell * j, cell, cell)
                        } else {
                            ctx.fillStyle = '#c9b3ff'
                            ctx.strokeRect(cell * i, cell * j, cell, cell)
                        }
                    } else {
                        if (j % 2 === 0) {
                            ctx.fillStyle = '#FFF9AA'
                            ctx.strokeRect(cell * i, cell * j, cell, cell)
                        } else {
                            ctx.fillStyle = '#FFB9B3'
                            ctx.strokeRect(cell * i, cell * j, cell, cell)
                        }
                    }
                    // Check if was clicked and if so fill cell
                    if ((CHANGE[0] > (cell * 0.98 * i) && CHANGE[0] < (cell * 0.98 * (i+1))) && 
                        (CHANGE[1] > (cell * 1.08 * j) && CHANGE[1] < (cell * 1.08 * (j+1)))) {
                        ctx.fillRect(cell * i, cell * j, cell, cell)
                        //clickedCells.push([i,j])
                        clickedCells[`|${i},${j}|`] = [i, j]
                    }

                    if (CLICK["a"]) {
                        if ((CLICK["a"][0] > (cell * 0.98 * i) && CLICK["a"][0] < (cell * 0.98 * (i+1))) && 
                        (CLICK["a"][1] > (cell * 1.08 * j) && CLICK["a"][1] < (cell * 1.08 * (j+1)))) {
                            ctx.fillRect(cell * i, cell * j, cell, cell)
                            //clickedCells.push([i,j])
                            clickedCells[`|${i},${j}|`] = [i, j]
                            CLICK["a"] = null
                        }
                    }
                    if (CLICK["b"]) { 
                        if ((CLICK["b"][0] > (cell * 0.98 * i) && CLICK["b"][0] < (cell * 0.98 * (i+1))) && 
                        (CLICK["b"][1] > (cell * 1.08 * j) && CLICK["b"][1] < (cell * 1.08 * (j+1)))) {
                            ctx.fillRect(cell * i, cell * j, cell, cell)
                            //clickedCells.push([i,j])
                            clickedCells[`|${i},${j}|`] = [i, j]
                            CLICK["b"] = null
                        }
                    }
                    if (CLICK["c"]) { 
                        if ((CLICK["c"][0] > (cell * 0.98 * i) && CLICK["c"][0] < (cell * 0.98 * (i+1))) && 
                        (CLICK["c"][1] > (cell * 1.08 * j) && CLICK["c"][1] < (cell * 1.08 * (j+1)))) {
                            ctx.fillRect(cell * i, cell * j, cell, cell)
                            //clickedCells.push([i,j])
                            clickedCells[`|${i},${j}|`] = [i, j]
                            CLICK["c"] = null
                        }
                    }
                    if (CLICK["d"]) {
                        if ((CLICK["d"][0] > (cell * 0.98 * i) && CLICK["d"][0] < (cell * 0.98 * (i+1))) && 
                        (CLICK["d"][1] > (cell * 1.08 * j) && CLICK["d"][1] < (cell * 1.08 * (j+1)))) {
                            ctx.fillRect(cell * i, cell * j, cell, cell)
                            //clickedCells.push([i,j])
                            clickedCells[`|${i},${j}|`] = [i, j]
                            CLICK["d"] = null
                        }
                    }
                    if (CLICK["e"]) { 
                        if ((CLICK["e"][0] > (cell * 0.98 * i) && CLICK["e"][0] < (cell * 0.98 * (i+1))) && 
                        (CLICK["e"][1] > (cell * 1.08 * j) && CLICK["e"][1] < (cell * 1.08 * (j+1)))) {
                            ctx.fillRect(cell * i, cell * j, cell, cell)
                            //clickedCells.push([i,j])
                            clickedCells[`|${i},${j}|`] = [i, j]
                            CLICK["e"] = null
                        }
                    }
                    if (CLICK["f"]) { 
                        if ((CLICK["f"][0] > (cell * 0.98 * i) && CLICK["f"][0] < (cell * 0.98 * (i+1))) && 
                        (CLICK["f"][1] > (cell * 1.08 * j) && CLICK["f"][1] < (cell * 1.08 * (j+1)))) {
                            ctx.fillRect(cell * i, cell * j, cell, cell)
                            //clickedCells.push([i,j])
                            clickedCells[`|${i},${j}|`] = [i, j]
                            CLICK["f"] = null
                        }
                    }

                    if (clickedCells[`|${i},${j}|`]) {
                        ctx.fillRect(cell * i, cell * j, cell, cell)
                    }
                    
                })
            })
        }
    }, 1000/36)

// make find a picture game
//bad UI
// destroy this site
    setInterval(() => {
        let neightbors = 0; 
        //let strCell = "|" + clickedCells.join("|") + "|";
        let newLiveCells = {};
        let inner = 0
        let newClickedCells = {}

        for (let key in clickedCells) {
            let cell = clickedCells[key];
            neightbors = 0;
            let coordinates = key.match(/\d+/g);
            let x = parseInt(coordinates[0]);
            let y = parseInt(coordinates[1]);
            if (clickedCells[`|${x+1},${y}|`]) {
                neightbors++
            } else {
                inner = 0;
                if (clickedCells[`|${x+1+1},${y}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1+1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1-1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1-1},${y}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1-1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1+1},${y-1}|`]) {
                    inner++
                }

                if (inner === 3) {
                    if (!newLiveCells[`|${cell[0]+1},${cell[1]}|`]) {
                        newLiveCells[`|${cell[0]+1},${cell[1]}|`] = [cell[0]+1, cell[1]]
                    }
                }
            }
            if (clickedCells[`|${x+1},${y+1}|`]) {
                neightbors++
            } else {
                inner = 0;
                if (clickedCells[`|${x+1+1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1+1},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1-1},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1-1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1-1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1+1},${y+1-1}|`]) {
                    inner++
                }

                if (inner === 3) {
                    if (!newLiveCells[`|${cell[0]+1},${cell[1]+1}|`]) {
                        newLiveCells[`|${cell[0]+1},${cell[1]+1}|`] = [cell[0]+1, cell[1]+1]
                    }
                }
            }
            if (clickedCells[`|${x},${y+1}|`]) {
                neightbors++
            } else {
                inner = 0;
                if (clickedCells[`|${x+1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y-1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x},${y-1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y-1+1}|`]) {
                    inner++
                }

                if (inner === 3) {
                    if (!newLiveCells[`|${cell[0]},${cell[1]+1}|`]) {
                        newLiveCells[`|${cell[0]},${cell[1]+1}|`] = [cell[0], cell[1]+1]
                    }
                }
            }
            if (clickedCells[`|${x-1},${y+1}|`]) {
                neightbors++
            } else {
                inner = 0;
                if (clickedCells[`|${x+1-1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1-1},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y+1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y-1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y-1+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1-1},${y-1+1}|`]) {
                    inner++
                }

                if (inner === 3) {
                    if (!newLiveCells[`|${cell[0]-1},${cell[1]+1}|`]) {
                        newLiveCells[`|${cell[0]-1},${cell[1]+1}|`] = [cell[0]-1, cell[1]+1]
                    }
                }
            }
            if (clickedCells[`|${x-1},${y}|`]) {
                neightbors++
            } else {
                inner = 0;
                if (clickedCells[`|${x-1+1},${y}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1+1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y+1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1+1},${y-1}|`]) {
                    inner++
                }

                if (inner === 3) {
                    if (!newLiveCells[`|${cell[0]-1},${cell[1]}|`]) {
                        newLiveCells[`|${cell[0]-1},${cell[1]}|`] = [cell[0]-1, cell[1]]
                    }
                }
            }
            if (clickedCells[`|${x-1},${y-1}|`]) {
                neightbors++
            } else {
                inner = 0;
                if (clickedCells[`|${x-1+1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1+1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1-1},${y-1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y-1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1+1},${y-1-1}|`]) {
                    inner++
                }

                if (inner === 3) {
                    if (!newLiveCells[`|${cell[0]-1},${cell[1]-1}|`]) {
                        newLiveCells[`|${cell[0]-1},${cell[1]-1}|`] = [cell[0]-1, cell[1]-1]
                    }
                }
            }
            if (clickedCells[`|${x},${y-1}|`]) {
                neightbors++
            } else {
                inner = 0;
                if (clickedCells[`|${x+1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x},${y-1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y-1-1}|`]) {
                    inner++
                }

                if (inner === 3) {
                    if (!newLiveCells[`|${cell[0]},${cell[1]-1}|`]) {
                        newLiveCells[`|${cell[0]},${cell[1]-1}|`] = [cell[0], cell[1]-1]
                    }
                }
            }
            if (clickedCells[`|${x+1},${y-1}|`]) {
                neightbors++
            } else {
                inner = 0;
                if (clickedCells[`|${x+1+1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1+1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1+1},${y+1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x-1+1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1},${y-1-1}|`]) {
                    inner++
                }
                if (clickedCells[`|${x+1+1},${y-1-1}|`]) {
                    inner++
                }

                if (inner === 3) {
                    if (!newLiveCells[`|${cell[0]+1},${cell[1]-1}|`]) {
                        newLiveCells[`|${cell[0]+1},${cell[1]-1}|`] = [cell[0]+1, cell[1]-1]
                    }
                }
            }

            //console.log(neightbors)

            if (neightbors >= 2 && neightbors < 4) {
                newClickedCells[key] = cell;
            }
        }

        clickedCells = newClickedCells;
/*
        clickedCells = clickedCells.filter((cell,i) => {
            //let strNewBorn = "|" + newLiveCells.join("|") + "|"
            neightbors = 0;
            if (strCell.includes(`|${cell[0]},${cell[1]}|`)) {
                // Right
                if (strCell.includes(`|${cell[0]+1},${cell[1]}|`)) {
                    neightbors++
                } else {
                    inner = 0
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1-1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1-1},${cell[1]}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1-1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]-1}|`)) {
                        inner++
                    }

                    if (inner === 3) {
                        //console.log("#right",inner)
                        if (!newLiveCells[`|${cell[0]+1},${cell[1]}|`]) {
                            //newLiveCells.push([cell[0]+1, cell[1]])
                            newLiveCells[`|${cell[0]+1},${cell[1]}|`] = [cell[0]+1,cell[1]]
                        }
                    }
                    
                }
                // Right Bottom
                if (strCell.includes(`|${cell[0]+1},${cell[1]+1}|`)) {
                    neightbors++
                } else {
                    inner = 0
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1-1},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1-1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]-1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]-1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]-1+1}|`)) {
                        inner++
                    }

                    if (inner === 3) {
                        //console.log("#right bottom",inner)
                        if (!newLiveCells[`|${cell[0]+1},${cell[1]+1}|`]) {
                            newLiveCells[`|${cell[0]+1},${cell[1]+1}|`] = [cell[0]+1,cell[1]+1]
                        }
                    }
                    
                }
                // Bottom
                if (strCell.includes(`|${cell[0]},${cell[1]+1}|`)) {
                    neightbors++
                } else {
                    inner = 0
                    if (strCell.includes(`|${cell[0]+1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]-1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]},${cell[1]-1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]-1+1}|`)) {
                        inner++
                    }


                    if (inner === 3) {
                        //console.log("#bottom",inner)
                        if (!newLiveCells[`|${cell[0]},${cell[1]+1}|`]) {
                            newLiveCells[`|${cell[0]},${cell[1]+1}|`] = [cell[0],cell[1]+1]
                        }
                    }
                    
                }
                // Bottom Left
                if (strCell.includes(`|${cell[0]-1},${cell[1]+1}|`)) {
                    neightbors++
                } else {
                    inner = 0
                    if (strCell.includes(`|${cell[0]+1-1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1-1},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]+1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]-1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]-1+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1-1},${cell[1]-1+1}|`)) {
                        inner++
                    }

                    if (inner === 3) {
                        //console.log("#bottom left",inner)
                        if (!newLiveCells[`|${cell[0]-1},${cell[1]+1}|`]) {
                            newLiveCells[`|${cell[0]-1},${cell[1]+1}|`] = [cell[0]-1,cell[1]+1]
                        }
                    }
                    
                }
                // Left
                if (strCell.includes(`|${cell[0]-1},${cell[1]}|`)) {
                    neightbors++
                } else {
                    inner = 0
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]+1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]-1}|`)) {
                        inner++
                    }

                    if (inner === 3) {
                        //console.log("#left",inner)
                        if (!newLiveCells[`|${cell[0]-1},${cell[1]}|`]) {
                            newLiveCells[`|${cell[0]-1},${cell[1]}|`] = [cell[0]-1,cell[1]]
                        }
                    }
                    
                }
                // Left Top
                if (strCell.includes(`|${cell[0]-1},${cell[1]-1}|`)) {
                    neightbors++
                } else {
                    inner = 0
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1-1},${cell[1]-1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]-1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]-1-1}|`)) {
                        inner++
                    }

                    if (inner === 3) {
                        //console.log("#left top",inner)
                        if (!newLiveCells[`|${cell[0]-1},${cell[1]-1}|`]) {
                            newLiveCells[`|${cell[0]-1},${cell[1]-1}|`] = [cell[0]-1,cell[1]-1]
                        }
                    }
                    
                }
                // Top
                if (strCell.includes(`|${cell[0]},${cell[1]-1}|`)) {
                    neightbors++
                } else {
                    inner = 0
                    if (strCell.includes(`|${cell[0]+1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]},${cell[1]-1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]-1-1}|`)) {
                        inner++
                    }

                    if (inner === 3) {
                        //console.log("#top",inner)
                        if (!newLiveCells[`|${cell[0]},${cell[1]-1}|`]) {
                            newLiveCells[`|${cell[0]},${cell[1]-1}|`] = [cell[0],cell[1]-1]
                        }
                    }
                    
                }
                // Top Right
                if (strCell.includes(`|${cell[0]+1},${cell[1]-1}|`)) {
                    neightbors++
                } else {
                    inner = 0
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]+1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]-1+1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1},${cell[1]-1-1}|`)) {
                        inner++
                    }
                    if (strCell.includes(`|${cell[0]+1+1},${cell[1]-1-1}|`)) {
                        inner++
                    }

                    if (inner === 3) {
                        //console.log("#top right",inner)
                        if (!newLiveCells[`|${cell[0]+1},${cell[1]-1}|`]) {
                            newLiveCells[`|${cell[0]+1},${cell[1]-1}|`] = [cell[0]+1,cell[1]-1]
                        }
                    }
                    
                }

                //console.log(neightbors)

                if (neightbors >= 2 && neightbors < 4) {
                    return cell
                }
            }
        })
*/
        for (let c in newLiveCells) {
            clickedCells[c] = newLiveCells[c]
        }

        //console.log(clickedCells)
                    
    }, 1500)
}

let maxScroll = null;
let pctg = 0;
let main = document.getElementsByTagName("main")[0];

main.addEventListener("scroll", (e) => {    
    if (!maxScroll) {
        maxScroll = e.target.scrollTopMax
    } 

    console.log(main)
    pctg = (e.target.scrollTop / maxScroll);
    document.getElementsByClassName("scroll-inner")[0].style.top = `${(main.clientHeight * pctg) - 24}px`;
})