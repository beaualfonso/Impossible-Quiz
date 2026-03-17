let beginBtn = document.getElementById("begin");
let startScreen = document.getElementById("container");
let startClick = 0;

let questionNumber = 1;
let totalPoints = 0;
let correctAnswer;
let questionContainer = document.getElementById("question-container");
let questionHeader = document.getElementById("question");
let answerA = document.getElementById("a");
let answerB = document.getElementById("b");
let answerC = document.getElementById("c");
let answerD = document.getElementById("d");
let secCount = 0; //used for question 2

questionContainer.style.display = "none";

let bgMusic = new Audio("media/backgroundMUSIC.mp3");
bgMusic.play();
bgMusic.loo = true;
let scaryMusic = new Audio("media/scaryBackgroundMusic.mp3");

function checkAnswer(choice, correctAnswer)
{
    if (choice == correctAnswer)
    {
        totalPoints += 10;
    }
    console.log(totalPoints);
}

function startMix()
{
    if(startClick == 0)
    {
        beginBtn.textContent = "FIND ME";
        setTimeout(function(){
            startClick = 1;
            beginBtn.style.opacity = 1;

            beginBtn.style.position = "fixed";
            beginBtn.style.marginLeft = "-200px";
            beginBtn.style.marginTop = "500px";
        }, 500);   
    }
    else if (startClick == 1)
    {
        beginBtn.textContent = "CLICK ME";
        beginBtn.style.opacity = 1;
        startClick = 2;
    }
    else if(startClick == 2)
    {
        startScreen.style.display = "none";
        questionContainer.style.display = "block";
    }
}

function answerQuestion(choice)
{
    if(questionNumber == 1)
    {
        correctAnswer = "B";
        checkAnswer(choice,correctAnswer);
        questionHeader.textContent = "Pick a choice";
        answerA.textContent = "Choice 1";
        answerB.textContent = "Choice 2";
        answerC.textContent = "Choice 3";
        answerD.textContent = "Choice 4";
        questionNumber = 2;
    }
    else if (questionNumber == 2)
    {
        if ( secCount == 0)
        {
            correctAnswer = "C"
            if(choice == correctAnswer)
            {
                correctAnswer = "D";
                answerA.textContent = "Choice 4";
                answerB.textContent = "Choice 3";
                answerC.textContent = "Choice 1";
                answerD.textContent = "Choice 2";
                secCount = 1;
            }
        }
        else if(secCount == 1)
        {
            if (choice == correctAnswer)
            {
                correctAnswer = "B";
                answerA.textContent = "Choice 2";
                answerB.textContent = "Choice 1";
                answerC.textContent = "Choice 4";
                answerD.textContent = "Choice 3";
                secCount = 2;
            }
        }
        else if(secCount == 2)
        {
            if(choice == correctAnswer)
            {
                correctAnswer = "C";
                answerA.textContent = "DONT TRUST YELLOW";
                answerB.textContent = "DONT PICK GREEN";
                answerC.textContent = "TRUST NO ONE";
                answerD.textContent = "PICK RED";

                secCount = 3;
            }
        }
        else if (secCount == 3)
        {
            checkAnswer(choice, correctAnswer);            bgMusic.pause();
            scaryMusic.play();
            scaryMusic.loop = true;
            questionHeader.textContent = "Welcome to question 3, meet the buttons";
            answerA.textContent = "Hello";
            answerB.textContent = "Yooo";
            answerC.style.fontSize = "10px";
            answerC.textContent = "I'm not supposed to be here please click me to save me from torture I don't know how I got here, I dont want to be a button PLEASE HELP MEEEEE";
            answerD.textContent = "Hiiiii";
            questionContainer.style.backgroundColor = "#D41414";
            document.body.style.backgroundImage = "url(media/scaryBG.png)";
            questionNumber = 3;
        }
    }
    else if(questionNumber == 3)
    {
        correctAnswer = "C";
        questionHeader.textContent = "Please help me, I'm not supposed to be here. I don't know what happened I just woke up and all I could see is lines and lines of code. This evil person, I dont know what they did to me, but you need to get me out of here. I know only you can do it, so please help me you need to get at least 50 points to win i will show you how many points you have on the net question if you don't have at least 20 RESTART THE GAME. Also one last thing never ever trust 8@)#&!2_+]=/7>z<*^91?~9\/2|1~`"
        answerA.style.display = "none";
        answerB.style.display = "none";
        answerD.style.display = "none";
        answerC.textContent = "Click me to continue";
        answerC.style.fontSize = "30px";
        questionNumber = 4;
    }
    else if(questionNumber == 4)
    {
        correctAnswer = "B";
        scaryMusic.pause();
        bgMusic.play();
        bgMusic.loop = true;
        document.body.style.backgroundImage = "url(media/bacgkround.png";
        questionContainer.style.backgroundColor = "#59B5F7";
        answerA.style.display = "inline-block";
        answerB.style.display = "inline-block";
        answerD.style.display = "inline-block";
        questionHeader.textContent = "What is the square root 65536";
        answerA.textContent = "128";
        answerB.textContent = "256";
        answerC.textContent = totalPoints;
        answerD.textContent = "512";
        questionNumber = 5;
    }
    else if(questionNumber == 5)
    {
        checkAnswer(choice, correctAnswer);
        questionHeader.textContent ="In One Piece who is emergency food";
        answerA.textContent = "Nami";
        answerB.textContent = "Luffy";
        answerC.textContent = "Chopper";
        answerD.textContent = "Sanji";
        correctAnswer = "C";
        questionNumber = 6;
    }
}