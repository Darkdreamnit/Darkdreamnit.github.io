<br>Video Game Trivia<br/>

        <br />

        Asking question <span id="NumberAsked">1</span> of 10 with <span id="NumberCorrect">0</span> answers correct</p>

    <p>

        <span id="TriviaQuestion">???</span>

    </p>

    <p>

        &nbsp;

        <input id="RadioTrue" type="radio" value="true" name="answer" checked="checked" /> True

        &nbsp;&nbsp;&nbsp;

        <input id="RadioFalse" type="radio" value="false" name="answer" /> False

    </p>

    <p>

        <input id="ButtonContinue" onclick="checkAnswer();" type="button" value="continue" />

    </p>

 

    <script language="javascript" type="text/javascript">

        // Array of trivia data

        var TriviaData = new Array(10)

        createTwoDimensionalArray(3);

 

        // Variables to track state of the game

        // i.e. number questions asked, current correct total and current question

        var questionsAsked = 0;

        var totalCorrect = 0;

        var currentQuestion = 0;

        var selectionValid = false;

 

        // Questions

        TriviaData[0][0] = "Donkey Kong, Pac-Man and Tempest were all released in the same year.";

        TriviaData[1][0] = "Capcom is a Chinese company.";

        TriviaData[2][0] = "Othello was the first arcade game released by Nintendo.";

        TriviaData[3][0] = "The Atari 2600 video game system was first released in 1975.";

        TriviaData[4][0] = "The Sega Saturn game system was released first in the U.S. in 1995.";

        TriviaData[5][0] = "The legendary game Doom was released in 1993 for the PC.";

        TriviaData[6][0] = "Dragon's Lair was the first arcade game to feature laser-disc technology.";

        TriviaData[7][0] = "In 1990, Nintendo and Sega went to court over the rights to Tetris.";

        TriviaData[8][0] = "In 1996 Nintendo sells its billionth cartridge worldwide.";

        TriviaData[9][0] = "Microsoft first released the Xbox gaming system worldwide in 2001.";

   

        // Answers

        TriviaData[0][1] = "true";

        TriviaData[1][1] = "false";

        TriviaData[2][1] = "true";

        TriviaData[3][1] = "false";

        TriviaData[4][1] = "false";

        TriviaData[5][1] = "true";

        TriviaData[6][1] = "true";

        TriviaData[7][1] = "false";

        TriviaData[8][1] = "true";

        TriviaData[9][1] = "false";

 

        // Has question been asked

        // -- necessary because we are asking in random order

        TriviaData[0][2] = "no";

        TriviaData[1][2] = "no";

        TriviaData[2][2] = "no";

        TriviaData[3][2] = "no";

        TriviaData[4][2] = "no";

        TriviaData[5][2] = "no";

        TriviaData[6][2] = "no";

        TriviaData[7][2] = "no";

        TriviaData[8][2] = "no";

        TriviaData[9][2] = "no";

 

        // Load up first question

        setQuestion();

 

        // Sets question text and indicator so that we know the question has been displayed

        function setQuestion() {

            selectionValid = false; // Flag to make sure question has not been asked yet

            while (selectionValid == false) {

                currentQuestion = Math.floor(Math.random() * 10); // randomly select starting question

                if (TriviaData[currentQuestion][2] == "no") {

                    selectionValid = true;

                }

            }

            document.getElementById("TriviaQuestion").innerHTML = TriviaData[currentQuestion][0];

            TriviaData[currentQuestion][2] = "yes";

            questionsAsked = questionsAsked + 1;

        }

 

        function processAnswer(myAnswer) {

            if (TriviaData[currentQuestion][1] == myAnswer) {

                // answer correct

                totalCorrect = totalCorrect + 1;

            }

        }

 

        // This function creates our two dimensional array

        function createTwoDimensionalArray(arraySize) {

            for (i = 0; i < TriviaData.length; ++i)

                TriviaData[i] = new Array(arraySize);

        }

 

        // This function checks the answer, updates correct total

        // and randomly selects the next question

        function checkAnswer() {

            if (document.getElementById("RadioTrue").checked) {

                processAnswer("true");

            }

            else {

                processAnswer("false");

            }

            // get next question if not asked all yet

            if (questionsAsked < 10) {

                setQuestion();

            }

            // final question asked - disable button and show final results

            else {

                alert("Quiz complete! You got " + totalCorrect + " correct out of 10.");

                document.getElementById("ButtonContinue").disabled = true;

            }

            // update totals

            document.getElementById("NumberAsked").innerHTML = questionsAsked;

            document.getElementById("NumberCorrect").innerHTML = totalCorrect;

        }

 

    </script>