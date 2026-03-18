let beginBtn = document.getElementById("begin");
let startScreen = document.getElementById("container");
let beginGameScreen = document.getElementById("beginGame");
let beginGameBtn = document.getElementById("beginGameBtn");
let startClick = 0;
let ending = 0;
let endHead = document.getElementById("endHead");

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
startScreen.style.display = "none";

let bgMusic = new Audio("media/backgroundMUSIC.mp3");
let scaryMusic = new Audio("media/scaryBackgroundMusic.mp3");
let endMusic = new Audio("media/suspenseMusic.mp3");
let peaceEnd = new Audio("media/peaceEnd.mp3");
let heart = new Audio("media/heartbeat.mp3");

function beginGame()
{
    bgMusic.play();
    bgMusic.loop = true;
    startScreen.style.display = "block";
    beginGameScreen.style.display = "none";
    document.body.style.backgroundImage = "url(media/bacgkround.png)";

}

function normalBg()
{
    document.body.style.backgroundImage = "url(media/bacgkround.png)";
    scaryMusic.pause();
    bgMusic.play();
    bgMusic.loop = true;
    questionContainer.style.backgroundColor = "#59B5F7"
}

function scaryBg()
{
    document.body.style.backgroundImage="url(media/scaryBG.png";
    bgMusic.pause();
    scaryMusic.play();
    scaryMusic.loop = true;
    questionContainer.style.backgroundColor ="#D41414";
}

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
            beginBtn.style.opacity = 0;

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
            scaryBg();
            questionHeader.textContent = "Welcome to question 3, meet the buttons";
            answerA.textContent = "Hello";
            answerB.textContent = "Yooo";
            answerC.style.fontSize = "10px";
            answerC.textContent = "I'm not supposed to be here please click me to save me from torture I don't know how I got here, I dont want to be a button PLEASE HELP MEEEEE";
            answerD.textContent = "Hiiiii";
            questionNumber = 3;
        }
    }
    else if(questionNumber == 3)
    {
        correctAnswer = "C";
        questionHeader.textContent = "Please help me, I'm not supposed to be here. I don't know what happened I just woke up and all I could see is lines and lines of code. This evil person, I dont know what they did to me, but you need to get me out of here. I know only you can do it, so please help me you need to get at least 50 points to win i will show you how many points you have on the next question if you don't have at least 20 RESTART THE GAME. Please trust me, I know you can do this. Also one last thing never ever trust TXIuIEdyZWVu"
        answerA.style.display = "none";
        answerB.style.display = "none";
        answerD.style.display = "none";
        answerC.textContent = "Click me";
        answerC.style.fontSize = "30px";
        questionNumber = 4;
    }
    else if(questionNumber == 4)
    {
        correctAnswer = "B";
        normalBg();
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
    else if(questionNumber == 6)
    {
        checkAnswer(choice,correctAnswer);
        questionHeader.textContent = "If you have me, you want to share me. If you share me, you no longer have me. What am I?";
        answerA.textContent = "Money";
        answerB.textContent = "Love";
        answerC.textContent = "Trust";
        answerD.textContent = "A secret";
        correctAnswer = "D";
        questionNumber = 7;
    }
    else if(questionNumber == 7)
    {
        checkAnswer(choice, correctAnswer);
        scaryBg();
        if(totalPoints == 50)
        {
            questionHeader.textContent="You did it, you have gotteb 50 points, thats enough to start the process of getting me out of here, i know we can do it. I know you can do it, I have more access to the system now, so just keep going through the questions and I will figure out how to get me oit of here. Thank you";
            answerA.style.display = "none";
            answerB.style.display = "none";
            answerD.style.display = "none";
            answerC.textContent = "Continue";
            ending = 1;
        }
        else{
            questionHeader.textContent = "You failed to get enough points, you failed me, you failed yourself. Now were both dead thanks to your stupidity. Get out of here, stupid loser.";
            answerA.style.display = "none";
            answerB.style.display = "none";
            answerD.style.display = "none";
            answerC.textContent = "Continue";
            ending = 2;
        }
        questionNumber = 8;
    }
    // first ending
    else if(questionNumber == 8 && ending == 1) 
    {
        normalBg();
        questionHeader.textContent = "A b@t and a b@ll c0st $1.10 t0tal. The bat c0sts $1 more than the ball. H0w much is the b@ll?";
        answerA.style.display = "inline-block";
        answerB.style.display = "inline-block";
        answerD.style.display = "inline-block";
        answerA.textContent = "10c_falsefile";
        answerB.textContent = "05c//accepted";
        answerC.textContent = "1_cent_worm";
        answerD.textContent = "currency_null";
        correctAnswer = "B";
        questionNumber = 9;
    }
    else if (questionNumber ==9 && ending == 1)
    {
        checkAnswer(choice, correctAnswer);
        questionHeader.textContent = "If yoy pqss ghe perspn in swcond plqce, whqt plqce qre yoy in?";
        answerA.textContent = "first_trial.tmp";
        answerB.textContent = "under.track";
        answerC.textContent = "second.place";
        answerD.textContent = "third_echo";
        correctAnswer = "C";
        questionNumber = 10;
    }
    else if(questionNumber == 10 && ending == 1)
    {
        scaryBg();
        questionHeader.textContent = "Okay I figured out a way to skip you to the end of the game, apparantly this quiz has over 100 questions and you need to get every questions correct, but luckily I found a way to bypass. I need you to open the console and type this exactly 'totalPoints = 990' and that will bring you to the last question, all you need to do it answer it and I will be free, trust me I know you got this I belive in you. Hit continue after you run the console command.";
        answerA.style.display = "none";
        answerB.style.display = "none";
        answerD.style.display = "none";
        answerC.textContent = "Continue";
        questionNumber = 11;
    }
    else if(questionNumber == 11 && totalPoints == 990)
    {
        normalBg();
        bgMusic.pause();
        endMusic.play();
        endMusic.loop = true;
        document.body.style.backgroundImage = "url(media/purple.png)";
        questionHeader.textContent = "Are you sure you trust green? How do you know he isn't evil? Do you have trust in yourself to trust the right people? GREEN IS NOT TO BE TRUSTED.";
        answerA.style.display = "inline-block";
        answerA.textContent = "Yes";
        answerC.textContent = "Yes";
        correctAnswer = "A";
        questionNumber = 12;
    }
    else if(choice == "C" && questionNumber == 12)
    { 
        answerA.style.display = "none";
        questionHeader.textContent = "I knew you could do it, thank you for saving me, I knew I could trust you to save me. Only you could be so stupid to trust me, I told you to never trust me, but you still trusted me anyways, and this is what you get for your foolishness. Gooodbye player. Thank you, and welcome to your life, as the green button in this impossible quiz";
        answerC.style.display = "none";
        setTimeout(function(){
            questionContainer.style.backgroundColor = "white";
            questionHeader.textContent = "You lost, green won. Welcome to your life as the green button.";
            questionContainer.style.fontFamily = "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
            document.body.style.backgroundImage ="url(media/black.webp)";
        }, 2000);
    }
    else if(choice == "A" && questionNumber == 12)
    {
        endMusic.pause();
        peaceEnd.play();
        peaceEnd.loop = true;
        answerA.style.display = "none";
        answerC.style.display = "none";
        questionHeader.textContent = "Congratulations, on finishing this impossible quiz. Thank you for not picking green, I'm not sure how he got access into the system, but you got past him and all that matters is that ur safe. The question now is, what will you do now? I guess only time will tell.\n Goodbye and thank you.\n Sincerely, TXIuIEdyZWVu"
        setTimeout(function(){
            heart.play();
            alert("You will never escape me I am industructible. Put TXIuIEdyZWVu in a base64 decoder to see who I am.");
            questionHeader.textContent = "You will never escape me."
            document.body.style.backgroundImage = "url(media/black.webp";
            questionContainer.style.backgroundColor = "white";
        }, 20000);
    }
    //second ending
    else if(questionNumber == 8 && ending == 2)
    {
        normalBg();
        answerA.style.display = "inline-block";
        answerB.style.display = "inline-block";
        answerD.style.display = "inline-block";
        questionHeader.textContent = "Do you think you will be able to escape now?";
        answerA.textContent = "Yes";
        answerB.textContent = "Yes";
        answerC.textContent = "NONONONONONONONONONONONONONONNNNONONOONNONONONONONONONONONONONONONNONONNNONONONONONONONONNONONONONNONONONONONONONONONONONONONNNONONONONONONONONONNONNONONONONONONONONONONNNONONONONONONOONONONONONONONNONONONONONONNOONONONONONONONONONONONNONON";
        answerC.style.fontSize = "6px";
        answerD.textContent = "Yes";
        correctAnswer = "C";
        questionNumber = 9;
    }
    else if(questionNumber == 9 && ending == 2 && choice == "C")
    {
        scaryBg();
        questionHeader.textContent = "Exactly, we will never be able to get out of here noExactly,wewillneverbeabletogetoutofherenow.WEWILLNEVERGETOUT.N-B--ER-B-AS-V::EX@CTLY_W3_W1LL_N3V3R_B3_4BL3_T0_G3T_0UT_0F_H3R3_N0W::WE_W1LL_N3V3R_G3T_0UT::N-B--ER-B-AS-V::EXIT_PATH_MISSING::DOOR_NOT_FOUND::MAP_NULL::SIGNAL_LOST::STATIC::STATIC::STATIC::ExactlyExactlyExactly::wewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenow::WEWILLNEVERGETOUTWEWILLNEVERGETOUT::GETOUTGETOUTGETOUT::N-B--ER-B-AS-V::LOOP_DETECTED::NO_EXIT_FOUND::ERR0R::ERR0R::ERR0R::nullfragment::door=none::window=none::sky=none::room=repeat::hall=repeat::breath=detected::echo=detected::voice=detected::Exactly,wewillneverbeabletogetoutofherenow.WEWILLNEVERGETOUT.N-B--ER-B-AS-V::EX@CTLY_W3_W1LL_N3V3R_B3_4BL3_T0_G3T_0UT_0F_H3R3_N0W::WE_W1LL_N3V3R_G3T_0UT::N-B--ER-B-AS-V::EXIT_PATH_MISSING::DOOR_NOT_FOUND::MAP_NULL::SIGNAL_LOST::STATIC::ExactlyExactlyExactlyExactlyExactly::wewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenow::WEWILLNEVERGETOUTWEWILLNEVERGETOUTWEWILLNEVERGETOUT::GETOUTGETOUTGETOUTGETOUTGETOUT::N-B--ER-B-AS-V::LOOP_DETECTED::NO_EXIT_FOUND::render_failed::memory_fragment_lost::hidden_string_unreadable::path_not_resolved::corridor_null::floor_infinite::ceiling_infinite::light_flicker::light_flicker::light_flicker::exactlyexactlyexactlyexactly::wewillneverbeabletogetoutofherenow::WE_WILL_NEVER_GET_OUT::WE_W1LL_N3V3R_G3T_0UT::N-B--ER-B-AS-V::ERROR_ERROR_ERROR::OUT_OF_BOUNDS::RETURN_FAILED::SAVE_CORRUPTED::CHECKPOINT_MISSING::door_not_found::exit_not_found::player_not_found::observer_found::observer_found::observer_found::GETOUTGETOUTGETOUTGETOUTGETOUTGETOUTGETOUT::0UT_0UT_0UT_0UT_0UT::Exactly,wewillneverbeabletogetoutofherenow.WEWILLNEVERGETOUT.N-B--ER-B-AS-V::EXACTLY_WE_WILL_NEVER_BE_ABLE_TO_GET_OUT_OF_HERE_NOW::WE_WILL_NEVER_GET_OUT::N-B--ER-B-AS-V::SIGNAL_LOST::SIGNAL_LOST::SIGNAL_LOST::STATIC::STATIC::STATIC::MAP_NULL::MAP_NULL::DOOR_NOT_FOUND::DOOR_NOT_FOUND::EXIT_PATH_MISSING::EXIT_PATH_MISSING::NO_EXIT_FOUND::NO_EXIT_FOUND::loop_loop_loop_loop_loop::cycle=unbroken::cycle=unbroken::cycle=unbroken::memory_leak::memory_leak::memory_leak::voice_overlap::voice_overlap::voice_overlap::thereisnoexitthereisnoexitthereisnoexitthereisnoexitthereisnoexit::wewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenow::WEWILLNEVERGETOUTWEWILLNEVERGETOUTWEWILLNEVERGETOUTWEWILLNEVERGETOUT::N-B--ER-B-AS-VN-B--ER-B-AS-VN-B--ER-B-AS-V::fragment_missing::fragment_missing::fragment_missing::entity_detected::entity_detected::entity_detected::breach::breach::breach::null::null::null::Exactly,wewillneverbeabletogetoutofherenow.WEWILLNEVERGETOUT.N-B--ER-B-AS-V::EX@CTLY_W3_W1LL_N3V3R_B3_4BL3_T0_G3T_0UT_0F_H3R3_N0W::WE_W1LL_N3V3R_G3T_0UT::N-B--ER-B-AS-V::EXIT_PATH_MISSING::DOOR_NOT_FOUND::MAP_NULL::SIGNAL_LOST::STATIC::ExactlyExactlyExactly::wewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenow::WEWILLNEVERGETOUTWEWILLNEVERGETOUT::GETOUTGETOUTGETOUT::N-B--ER-B-AS-V::LOOP_DETECTED::NO_EXIT_FOUND::ERROR_31::ERROR_32::ERROR_33::ERROR_34::ERROR_35::path=none::path=none::path=none::hallway_repeats_forever::hallway_repeats_forever::hallway_repeats_forever::door_001_locked::door_002_locked::door_003_locked::door_004_locked::door_005_locked::door_006_locked::door_007_locked::door_008_locked::door_009_locked::door_010_locked::window_001_false::window_002_false::window_003_false::window_004_false::window_005_false::sky_texture_missing::floor_texture_missing::wall_texture_bleeding::voice_in_buffer::voice_in_buffer::voice_in_buffer::do_not_turn_around::do_not_turn_around::do_not_turn_around::ExactlyExactlyExactlyExactlyExactlyExactlyExactly::WE WILL NEVER GET OUT::WE WILL NEVER GET OUT::WE WILL NEVER GET OUT::WE W1LL NEVER GET 0UT::WE W1LL NEVER GET 0UT::WE W1LL NEVER GET 0UT::N-B--ER-B-AS-V::N-B--ER-B-AS-V::N-B--ER-B-AS-V::observer=behind_you::observer=behind_you::observer=behind_you::camera_static::camera_static::camera_static::feed_lost::feed_lost::feed_lost::player_input_denied::player_input_denied::player_input_denied::RUNRUNRUNRUNRUNRUNRUN::GETOUTGETOUTGETOUTGETOUT::EXITEXITEXITEXIT::open=open=false::unlock=false::escape=false::survive=false::Exactly,wewillneverbeabletogetoutofherenow.WEWILLNEVERGETOUT.N-B--ER-B-AS-V::EXACTLY_WE_WILL_NEVER_BE_ABLE_TO_GET_OUT_OF_HERE_NOW::WE_WILL_NEVER_GET_OUT::N-B--ER-B-AS-V::EXIT_PATH_MISSING::DOOR_NOT_FOUND::MAP_NULL::SIGNAL_LOST::STATIC::STATIC::STATIC::STATIC::STATIC::ExactlyExactlyExactlyExactly::wewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenow::WEWILLNEVERGETOUTWEWILLNEVERGETOUTWEWILLNEVERGETOUT::GETOUTGETOUTGETOUTGETOUTGETOUTGETOUT::N-B--ER-B-AS-V::LOOP_DETECTED::LOOP_DETECTED::LOOP_DETECTED::NO_EXIT_FOUND::NO_EXIT_FOUND::NO_EXIT_FOUND::time_desync::time_desync::time_desync::clock_invalid::clock_invalid::clock_invalid::minute_repeats::second_repeats::frame_repeats::frame_repeats::frame_repeats::frame_repeats::fragment_0001::fragment_0002::fragment_0003::fragment_0004::fragment_0005::fragment_0006::fragment_0007::fragment_0008::fragment_0009::fragment_0010::fragment_0011::fragment_0012::fragment_0013::fragment_0014::fragment_0015::fragment_0016::fragment_0017::fragment_0018::fragment_0019::fragment_0020::unreadable::unreadable::unreadable::text_bleeding::text_bleeding::text_bleeding::text_bleeding::savefile_damaged::savefile_damaged::savefile_damaged::return_to_menu_failed::return_to_menu_failed::return_to_menu_failed::main_menu_missing::title_screen_missing::scene_transition_failed::door_sound_without_door::footsteps_without_floor::breathing_without_body::shadow_without_light::face_without_eyes::eyes_without_face::voice_without_source::source_without_voice::Exactly,wewillneverbeabletogetoutofherenow.WEWILLNEVERGETOUT.N-B--ER-B-AS-V::EX@CTLY_W3_W1LL_N3V3R_B3_4BL3_T0_G3T_0UT_0F_H3R3_N0W::WE_W1LL_N3V3R_G3T_0UT::N-B--ER-B-AS-V::EXIT_PATH_MISSING::DOOR_NOT_FOUND::MAP_NULL::SIGNAL_LOST::STATIC::ExactlyExactlyExactly::wewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenow::WEWILLNEVERGETOUTWEWILLNEVERGETOUT::GETOUTGETOUTGETOUT::N-B--ER-B-AS-V::LOOP_DETECTED::NO_EXIT_FOUND::echo_01::echo_02::echo_03::echo_04::echo_05::echo_06::echo_07::echo_08::echo_09::echo_10::echo_11::echo_12::echo_13::echo_14::echo_15::echo_16::echo_17::echo_18::echo_19::echo_20::repeat.repeat.repeat.repeat.repeat.repeat.repeat.repeat::again_again_again_again_again_again::once_more_once_more_once_more_once_more::thereneverwasanexitthereneverwasanexitthereneverwasanexit::wewillneverbeabletogetoutofherenowWEWILLNEVERGETOUTN-B--ER-B-AS-V::ERR://EXIT_PATH_MISSING::ERR://DOOR_NOT_FOUND::ERR://MAP_NULL::ERR://SIGNAL_LOST::ERR://STATIC_OVERFLOW::ERR://LOOP_DETECTED::ERR://NO_EXIT_FOUND::ERR://RETURN_REFUSED::ERR://PLAYER_TRAPPED::ERR://AREA_SEALED::ERR://BARRIER_ACTIVE::ERR://COLLISION_INFINITE::ERR://CAMERA_LOCK::ERR://SCRIPT_FAILURE::ERR://ENTITY_PERSISTENT::ERR://OBJECTIVE_NULL::ERR://MISSION_UNWINNABLE::ERR://HOPE_MISSING::ERR://SKY_UNREACHABLE::ERR://GROUND_UNENDING::WEWILLNEVERGETOUT::WEWILLNEVERGETOUT::WEWILLNEVERGETOUT::GETOUTGETOUTGETOUTGETOUTGETOUTGETOUTGETOUTGETOUTGETOUT::N-B--ER-B-AS-V::Exactly,wewillneverbeabletogetoutofherenow.WEWILLNEVERGETOUT.N-B--ER-B-AS-V::EXACTLY_WE_WILL_NEVER_BE_ABLE_TO_GET_OUT_OF_HERE_NOW::WE_WILL_NEVER_GET_OUT::N-B--ER-B-AS-V::EXIT_PATH_MISSING::DOOR_NOT_FOUND::MAP_NULL::SIGNAL_LOST::STATIC::ExactlyExactlyExactly::wewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenow::WEWILLNEVERGETOUTWEWILLNEVERGETOUT::GETOUTGETOUTGETOUT::N-B--ER-B-AS-V::LOOP_DETECTED::NO_EXIT_FOUND::ENDLESS_LOOP::ENDLESS_LOOP::ENDLESS_LOOP::ENDLESS_LOOP::ENDLESS_LOOP::ENDLESS_LOOP::ENDLESS_LOOP::ENDLESS_LOOP::ENDLESS_LOOP::ENDLESS_LOOP::out_of_bounds_out_of_bounds_out_of_bounds::wrapped_coordinates::wrapped_coordinates::wrapped_coordinates::corridor_ends_at_corridor::door_opens_to_corridor::corridor_opens_to_corridor::staircase_descends_to_corridor::staircase_ascends_to_corridor::elevator_opens_to_corridor::every_path_returns_here::every_path_returns_here::every_path_returns_here::ExactlyExactlyExactlyExactlyExactly::WEWILLNEVERGETOUTWEWILLNEVERGETOUTWEWILLNEVERGETOUTWEWILLNEVERGETOUT::N-B--ER-B-AS-VN-B--ER-B-AS-VN-B--ER-B-AS-V::STATIC::STATIC::STATIC::STATIC::STATIC::STATIC::STATIC::STATIC::STATIC::STATIC::NO_EXIT_FOUND::NO_EXIT_FOUND::NO_EXIT_FOUND::NO_EXIT_FOUND::NO_EXIT_FOUND::NO_EXIT_FOUND::GETOUTGETOUTGETOUTGETOUTGETOUTGETOUTGETOUTGETOUT::wewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenowwewillneverbeabletogetoutofherenow::Exactly,wewillneverbeabletogetoutofherenow.WEWILLNEVERGETOUT.N-B--ER-B-AS-V::last_fragment_corrupt::last_fragment_corrupt::last_fragment_corrupt::final_string_missing::final_string_missing::final_string_missing::no_signal::no_signal::no_signal::screen_burning::screen_burning::screen_burning::memory_echo::memory_echo::memory_echo::YOU_CANNOT_LEAVE::YOU_CANNOT_LEAVE::YOU_CANNOT_LEAVE::WE_WILL_NEVER_GET_OUT::WE_WILL_NEVER_GET_OUT::WE_WILL_NEVER_GET_OUT::N-B--ER-B-AS-V::N-B--ER-B-AS-V::N-B--ER-B-AS-V::END_OF_LINE_MISSING::END_OF_LINE_MISSING::END_OF_LINE_MISSING::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::CONTINUE::NO_EXIT_FOUND::LOOP_DETECTED::SIGNAL_LOST::MAP_NULL::DOOR_NOT_FOUND::EXIT_PATH_MISSING";   
        answerC.textContent = "You have to get me out";
        answerC.style.fontSize = "30px";
        answerB.style.display = "none";
        answerD.style.display = "none";
        answerA.textContent = "Trust me and click me.";
        questionNumber = 10;
    }
    else if(questionNumber == 10 && ending == 2)
    {
        normalBg();
        questionHeader.textContent = "Green has lost his mind, he was trying to use you to break out of this game. He needed 50 points to be able to gain access into the system files to modify his code and leave. Luckily you're kinda stupid and didn't get them all right so he wasnt able to use you. No offense but thank you for being stupid you just saved us all alot of trouble. Now we can finish the game without him. Just get rid of his button in the console. Just hide him for now until we can delete him. Open the console and type 'answerC,style,display = 'none'' and his button will go away. You only have a certain amount of time before he comes back, so please hurry.";
        answerA.textContent = "Continue";
        questionNumber = 11;
        setTimeout(function(){
            scaryBg();
            questionHeader.textContent = "YOU WILL NOT GET RID OF ME.";
            answerA.style.display = "none";
            answerC.textContent = "You Must Click Me";
        }, 50000);
    }
}