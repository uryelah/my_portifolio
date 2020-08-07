window.onload = () => {
    //console.log(getContext)
    const canvas = document.getElementById('my_canvas')
    let ctx = canvas.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.strokeStyle = "#F8F4E8";

    let CHANGE = false;
    let CLICK = {};
    let FADE = {};
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
        "|1,2|": [1,2],
        "|0,5|": [0,5],
        "|6,0|": [6,0],
        "|25,25|": [25,25],
        "|26,26|": [26,26],
        "|26,27|": [26,27],
        "|20,1|": [20,1],
        "|2,42|": [2,42],
        "|10,20|": [10,20],
    };

    let defaultCells;
    for (let i = 0; i < width; i+=5) {
        defaultCells = [parseInt(Math.random() * width/5), parseInt(Math.random() * height/5)]
        clickedCells[`|${defaultCells[0]},${defaultCells[1]}|`] = [...defaultCells];
        clickedCells[`|${defaultCells[0]+1},${defaultCells[1] + 1}|`] = [defaultCells[0] + 1, defaultCells[1] + 1];
        clickedCells[`|${defaultCells[0]+2},${defaultCells[1] + 1}|`] = [defaultCells[0] + 2, defaultCells[1] + 1];
        clickedCells[`|${defaultCells[0]+2},${defaultCells[1]}|`] = [defaultCells[0] + 2, defaultCells[1]];    

        clickedCells[`|${defaultCells[0]+2},${defaultCells[1]-1}|`] = [defaultCells[0] + 2, defaultCells[1] - 1];
    }

    ctx.strokeStyle = "#F8F4E8";

    grid.forEach((n, i) => {
        row.forEach((r, j) => {
            ctx.strokeRect(cell * i, cell * j, cell, cell)
        })
    });

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
                            
                            if (FADE[`|${i},${j}|`]) {
                                ctx.fillStyle = '#ACECD555'
                                ctx.fillRect(cell * i, cell * j, cell, cell)
                                ctx.fillStyle = '#ACECD5'
                            } else {
                                ctx.fillStyle = '#ACECD5'
                            }
                        } else {
                            
                            if (FADE[`|${i},${j}|`]) {
                                ctx.fillStyle = '#c9b3ff55'
                                ctx.fillRect(cell * i, cell * j, cell, cell)
                                ctx.fillStyle = '#c9b3ff'
                            } else {
                                ctx.fillStyle = '#c9b3ff'
                            }
                        }
                    } else {
                        if (j % 2 === 0) {
                            if (FADE[`|${i},${j}|`]) {     
                                ctx.fillStyle = '#FFF9AA55'
                                ctx.fillRect(cell * i, cell * j, cell, cell)
                                ctx.fillStyle = '#FFF9AA'
                            } else {
                                ctx.fillStyle = '#FFF9AA'
                            }
                        } else {
                            
                            if (FADE[`|${i},${j}|`]) {
                                ctx.fillStyle = '#FFB9B355'
                                ctx.fillRect(cell * i, cell * j, cell, cell)
                                ctx.fillStyle = '#FFB9B3'
                            } else {
                                ctx.fillStyle = '#FFB9B3'
                            }
                        }
                    }
                    
                    ctx.strokeRect(cell * i, cell * j, cell, cell)

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
        FADE = {}

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
                    if (!newLiveCells[`|${cell[0]+1},${cell[1]}|`] && cell[0]+1 < grid.length && cell[1] < row.length && cell[0]+1 > -1 && cell[1] > -1) {
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
                    if (!newLiveCells[`|${cell[0]+1},${cell[1]+1}|`] && cell[0]+1 < grid.length && cell[1]+1 < row.length && cell[0]+1 > -1 && cell[1]+1 > -1) {
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
                    if (!newLiveCells[`|${cell[0]},${cell[1]+1}|`] && cell[0] < grid.length && cell[1]+1 < row.length && cell[0] > -1 && cell[1]+1 > -1) {
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
                    if (!newLiveCells[`|${cell[0]-1},${cell[1]+1}|`] && cell[0]-1 < grid.length && cell[1]+1 < row.length && cell[0]-1 > -1 && cell[1]+1 > -1) {
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
                    if (!newLiveCells[`|${cell[0]-1},${cell[1]}|`] && cell[0]-1 < grid.length && cell[1] < row.length && cell[0]-1 > -1 && cell[1] > -1) {
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
                    if (!newLiveCells[`|${cell[0]-1},${cell[1]-1}|`] && cell[0]-1 < grid.length && cell[1]-1 < row.length && cell[0]-1 > -1 && cell[1]-1 > -1) {
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
                    if (!newLiveCells[`|${cell[0]},${cell[1]-1}|`] && cell[0] < grid.length && cell[1]-1 < row.length && cell[0] > -1 && cell[1]-1 > -1) {
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
                    if (!newLiveCells[`|${cell[0]+1},${cell[1]-1}|`] && cell[0]+1 < grid.length && cell[1]-1 < row.length && cell[0]+1 > -1 && cell[1]-1 > -1) {
                        newLiveCells[`|${cell[0]+1},${cell[1]-1}|`] = [cell[0]+1, cell[1]-1]
                    }
                }
            }

            if (neightbors >= 2 && neightbors < 4) {
                newClickedCells[key] = cell;
            } else {
                FADE[key] = cell;
            }
        }

        clickedCells = newClickedCells;

        for (let c in newLiveCells) {
            clickedCells[c] = newLiveCells[c]
        }

        //console.log( Object.keys(clickedCells).length)
                    
    }, 1500)
}

let maxScroll = null;
let pctg = 0;
let main = document.getElementsByTagName("main")[0];
let scrollPoint = document.getElementsByClassName("scroll-inner")[0];

scrollPoint.style.height = ( main.scrollHeight  - main.offsetHeight) - 100 + "px"
let scrolly = ( main.scrollHeight  - main.offsetHeight - 100)

main.addEventListener("scroll", (e) => {    
    if (!maxScroll) {
        maxScroll = e.target.scrollTopMax
    } 

    //console.log(main)
    pctg = (e.target.scrollTop - 200);
    //console.log(e.target.scrollTop)
    scrollPoint.style.top = `${(pctg)}px`;
})