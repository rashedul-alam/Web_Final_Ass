
	function rollDice()
	{
        var dice1 = 0, dice2 = 0;
        
        dice1 = Math.floor( 1 + Math.random() * 6 );
        switch (dice1)
        {
	        case 1:
	            document.getElementById("dice1").src = "src/1.png";
	            break;
	        case 2:
                document.getElementById("dice1").src = "src/2.png";
                break;
            case 3:
                document.getElementById("dice1").src = "src/3.png";
                break;
            case 4:
                document.getElementById("dice1").src = "src/4.png";
                break;
            case 5:
                document.getElementById("dice1").src = "src/5.png";
                break;
            case 6:
                document.getElementById("dice1").src = "src/6.png";
                break;
        }
        
		dice2 = Math.floor( 1 + Math.random() * 6 );
        switch (dice2)
        {
            case 1:
                document.getElementById("dice2").src = "src/1.png";
                break;
            case 2:
                document.getElementById("dice2").src = "src/2.png";
                break;
            case 3:
                document.getElementById("dice2").src = "src/3.png";
                break;
            case 4:
                document.getElementById("dice2").src = "src/4.png";
                break;
            case 5:
                document.getElementById("dice2").src = "src/5.png";
                break;
            case 6:
                document.getElementById("dice2").src = "src/6.png";
                break;
        }
		
		return dice1 + dice2;
    }

    
    var WON = 0, LOST = 1, CONTINUE_ROLLING = 2;
    
    var firstRoll = true,    // true if first roll
        sumOfDice = 0,        // sum of the dice
        myPoint = 0,           // point if no win/loss on first roll
        gameStatus = CONTINUE_ROLLING;  // game not over yet
	

    
    function play()
    {
        if ( firstRoll ) {
            // first roll of the dice
            sumOfDice = rollDice();
            switch ( sumOfDice )
            {
                case 7: case 11:
	                // win on first roll
	                gameStatus = WON;
	                document.getElementById("point").value = ""; // clear point field
                    location.reload(true);
	                break;
                
                case 2: case 3: case 12:
	                // lose on first roll
	                gameStatus = LOST;
	                document.getElementById("point").value = ""; // clear point field
                    location.reload(true);
	                break;
                
	            default:
                    // remember point
                    gameStatus = CONTINUE_ROLLING;
                    myPoint = sumOfDice;
                    document.getElementById("point").innerHTML = "Point: "+myPoint;
                    firstRoll = false;
            }
        }
        else
        {
            sumOfDice = rollDice();
            
            if ( sumOfDice == myPoint )
            {
                gameStatus = WON;
            }
            else if ( sumOfDice == 7 || sumOfDice == 11 )
            {
                gameStatus = LOST;
            }
            else
            {
                myPoint = sumOfDice;
                document.getElementById("point").innerHTML = "Point: "+myPoint;
            }
        }
        
        if ( gameStatus == CONTINUE_ROLLING )
        {
            //window.alert ("Roll again");
            document.getElementById("status").innerHTML = "Roll Again";
        }
        else
        {
            if ( gameStatus == WON )
            {
            
                
            
                document.getElementById("status").innerHTML = "Player wins.";
                document.getElementById("point").value = "";
                location.reload(true);
                
                window.alert ("You wins. " + " play again......?");
            }
            else
            {
                
               
                
                document.getElementById("status").innerHTML = "Player loses.";
                document.getElementById("point").value = "";
                location.reload(true);
                
                window.alert ("You loses. " + " play again......?");
            }
            firstRoll = true;
        }
    }


    
