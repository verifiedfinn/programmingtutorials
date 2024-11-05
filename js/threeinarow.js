
//by including the following line of code, we ensure that the javascript is only executed when the HTML is fully loaded
$(document).ready(function() {
    console.log("Ready");


    //-------------Variables---------------------------------
    let table = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]; //will hold the current values on board
    let player = 0; // will track whose turn it is
    const playerSymbols = ['X', '0']; //array holding symbols for each player
    const cellDim = 150; //dimension of cell in pixels
//first select all the cells
let cells = document.querySelectorAll('td');
//loop through each one and set the css.
for (var i = 0; i < cells.length; i++) {
    cells[i].style.height = cellDim + 'px';
    cells[i].style.width = cellDim + 'px';
}

    let selectedRow = 0; //the row the user just picked
    let selectedCol = 0; //the col the user just picked






    //-------------Functions---------------------------------
    function checkForWin() {
        return false;
    }




    function takeTurn() {
        if (isFree(selectedRow, selectedCol)) {
            table[selectedRow][selectedCol] = playerSymbols[player];
            //fill the element in  the  HTML
            var desiredTd = $('#table tr:eq(' + selectedRow + ') td:eq(' + selectedCol + ')');
            desiredTd.html(playerSymbols[player]);
            if (checkForWin()) {
                //end game TODO
            } else {
                //change player!
                if (player == 0) {
                    player = 1;
                } else if (player == 1) {
                    player = 0;
                }
                $('#currentplayer').text('Current Player: ' + playerSymbols[player]);
               //Task! Make the html display the updated player!
            }
        }


    }



      $('#table').on('click', function(event) {
        // Get the mouse position relative to the clicked element
        var x = event.pageX - $(this).offset().left;
        var y = event.pageY - $(this).offset().top;


        // Print the mouse position
        console.log('Mouse Position - X: ' + x + ', Y: ' + y);


//this is the maths part that tells us which row or column is selected
        selectedRow = Math.floor(y / cellDim);
        selectedCol = Math.floor(x / cellDim);


        console.log('Selected Cell - row: ' + selectedRow + ', col: ' + selectedCol);


        takeTurn();
    });



    /*Remember Javascript does not check the parameter type, so wo do not have to tell the function that row and col are ints */
    function isFree(row, col) {
        if (table[row][col] == '') {
            return true;
        }
        return false;
    }



    //-------------Event Listener---------------------------------
    //when the table is clicked execute the function 'take turn!'  


    $('table').on('click', function(event) {


        takeTurn();
    });
    






}); // end document ready
