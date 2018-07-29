function dealcard()
	{
        var card1 = 0, card2 = 0;
        
        card1 = Math.floor( 1 + Math.random() * 6 );
        switch (card1)
        {
	        case 1:
	            document.getElementById("card1").src = "cards/2_of_clubs.png";
	            break;
	        case 2:
                document.getElementById("card1").src = "cards/2_of_diamonds.png";
                break;
            case 3:
                document.getElementById("card1").src = "cards/2_of_spades.png";
                break;
            case 4:
                document.getElementById("card1").src = "cards/3_of_diamonds.png";
                break;
            case 5:
                document.getElementById("card1").src = "cards/7_of_clubs.png";
                break;
            case 6:
                document.getElementById("card1").src = "cards/7_of_diamonds.png";
                break;
        }
        
        card2 = Math.floor( 1 + Math.random() * 6 );
        switch (card2)
        {
            case 1:
                document.getElementById("card2").src = "cards/2_of_clubs.png";
                break;
            case 2:
                document.getElementById("card2").src = "cards/queen_of_clubs2.png";
                break;
            case 3:
                document.getElementById("card2").src = "cards/queen_of_diamonds.png";
                break;
            case 4:
                document.getElementById("card2").src = "cards/king_of_spades2.png";
                break;
            case 5:
                document.getElementById("card2").src = "cards/jack_of_clubs.png";
                break;
            case 6:
                document.getElementById("card2").src = "cards/9_of_clubs.png";
                break;
        }
      }
      function dealcard1()
	{
        var pcard2 = 0, card2 = 0;
        
        pcard2 = Math.floor( 1 + Math.random() * 6 );
        switch (pcard2)
        {
	        case 1:
	            document.getElementById("pcard2").src = "cards/2_of_clubs.png";
	            break;
	        case 2:
                document.getElementById("pcard2").src = "cards/2_of_diamonds.png";
                break;
            case 3:
                document.getElementById("pcard2").src = "cards/2_of_spades.png";
                break;
            case 4:
                document.getElementById("pcard2").src = "cards/3_of_diamonds.png";
                break;
            case 5:
                document.getElementById("pcard2").src = "cards/7_of_clubs.png";
                break;
            case 6:
                document.getElementById("pcard2").src = "cards/7_of_diamonds.png";
                break;
        }
        
        pcard1 = Math.floor( 1 + Math.random() * 6 );
        switch (pcard1)
        {
            case 1:
                document.getElementById("pcard1").src = "cards/2_of_clubs.png";
                break;
            case 2:
                document.getElementById("pcard1").src = "cards/queen_of_clubs2.png";
                break;
            case 3:
                document.getElementById("pcard1").src = "cards/queen_of_diamonds.png";
                break;
            case 4:
                document.getElementById("pcard1").src = "cards/king_of_spades2.png";
                break;
            case 5:
                document.getElementById("pcard1").src = "cards/jack_of_clubs.png";
                break;
            case 6:
                document.getElementById("pcard1").src = "cards/9_of_clubs.png";
                break;
        }
      }

      function dealcard2()
      {
        var pcard22 = 0, card2 = 0;
        
        pcard22 = Math.floor( 1 + Math.random() * 6 );
        switch (pcard22)
        {
	        case 1:
	            document.getElementById("pcard22").src = "cards/2_of_clubs.png";
	            break;
	        case 2:
                document.getElementById("pcard22").src = "cards/2_of_diamonds.png";
                break;
            case 3:
                document.getElementById("pcard22").src = "cards/2_of_spades.png";
                break;
            case 4:
                document.getElementById("pcard22").src = "cards/3_of_diamonds.png";
                break;
            case 5:
                document.getElementById("pcard22").src = "cards/7_of_clubs.png";
                break;
            case 6:
                document.getElementById("pcard22").src = "cards/7_of_diamonds.png";
                break;
        }
        
        pcard12 = Math.floor( 1 + Math.random() * 6 );
        switch (pcard12)
        {
            case 1:
                document.getElementById("pcard12").src = "cards/2_of_clubs.png";
                break;
            case 2:
                document.getElementById("pcard12").src = "cards/queen_of_clubs2.png";
                break;
            case 3:
                document.getElementById("pcard12").src = "cards/queen_of_diamonds.png";
                break;
            case 4:
                document.getElementById("pcard12").src = "cards/king_of_spades2.png";
                break;
            case 5:
                document.getElementById("pcard12").src = "cards/jack_of_clubs.png";
                break;
            case 6:
                document.getElementById("pcard12").src = "cards/9_of_clubs.png";
                break;
        }
      }

     