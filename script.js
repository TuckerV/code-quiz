//Javascript here
  var mainEl = document.getElementById("main");
  var questionEl = document.getElementById("question");
  var bodyEl = document.createElement("div");
  var wordsPerMillisecond = 5000;
  var i = 0;
  var finalScore =0;
  var score = questions.length * 10;
  var timerTime;
  var isAnswer = $(".choices");
  var nameOfUser = $("#nameBox");

  //for forms at end
  var submitBtnEl = $("#submit-btn");
  var clearBtnEL = $("#clear-btn");
  var formEl = $("#userForm");
  var userEl = $("#user");
  
  submitBtnEl.click(sendScore);
  clearBtnEL.click(clearStorage);

  var usersARR = JSON.parse(localStorage.getItem("usersARR")) || [];

  $(".startBtn").on("click", function(){
    $(".startBtn").addClass('hide');
    $("p").empty();
    resetGame();
    addButtons();
    startTimer();
  });

  function startTimer() {
    // console.log(score);
    timerTime = setInterval(function(){
      // console.log("Timer at:" + score);
        score--;
        $("#score").text(score);
      if (score === 0){
        stopTimer();
        finalScore = score;
        alert(finalScore);
        resetGame();
        scoreScreen();
      } 
    }, 1000);
    changeQuestion(i);
    if (i < questions.length){
      $(".choices").on("click", function(){
        //An attempt to check answers
        // var currentAnswer =questions[i].answer;
        // console.log(questions[i].choices[currentAnswer]);
        // if (i < questions.length && $(event.target).text() === questions[i].choices[currentAnswer]){
        //   alert("This is correct!");
        // };
        changeQuestion(i);
        i++;
      });
    }
  };

  function changeQuestion (x) {
    if (i < questions.length){
      $("#question").text(questions[x].question);
      $("#btn-choice-0").text(questions[x].choices[0]);
      $("#btn-choice-1").text(questions[x].choices[1]);
      $("#btn-choice-2").text(questions[x].choices[2]);
      $("#btn-choice-3").text(questions[x].choices[3]);
    } else {
      stopTimer();
      finalScore = score;
      resetGame();
      scoreScreen();
      $(".startBtn").removeClass('hide');
    }
  };

  function resetGame() {
    for (var j = 0; j < 4; j++){
      $("#btn-choice-" +j).empty();
    };
    $("#question").empty();
    $("#main").empty();
    score = questions.length * 10;
    $("#score").empty();
  };

  function resetQuestion() {
    for (var j = 0; j < 4; j++){
      $("#btn-choice-" +j).empty();
    };
    $("#question").empty();
    $("#main").empty();
  };

  function addButtons() {
    var q = $('<div class="row"><div id="question"></div></div>');
    $("#main").append(q);
    var a = $('<div class="row"><button type="button" id="btn-choice-0" class="btn btn-primary choices"></button></div>');
    $("#main").append(a);
    var b = $('<div class="row"><button type="button" id="btn-choice-1" class="btn btn-primary choices"></button></div>');
    $("#main").append(b);
    var c = $('<div class="row"><button type="button" id="btn-choice-2" class="btn btn-primary choices"></button></div>');
    $("#main").append(c);
    var d = $('<div class="row"><button type="button" id="btn-choice-3" class="btn btn-primary choices"></button></div>');
    $("#main").append(d);
};

function scoreScreen() {
  var f = $('<div class="row">Your Final Score: <div id="playerScore"></div></div>');
    $("#main").append(f);
  $("#playerScore").text(finalScore);
  $(".startBtn").text("Restart");
  $(".highScoreContainer").removeClass('hide');
};

function sendScore(){
  if (!user.value) {
    formEl.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  } else {
    var userJSON = {
      name: user.value,
      score: finalScore
    };

    usersARR.push(userJSON);    
    usersARR.sort(function(a, b){return b.score-a.score});
    
    localStorage.setItem('usersARR', JSON.stringify(usersARR));

    $("#highScore").text(usersARR[0].score);
    $("#userHigh").text(usersARR[0].name);

  }
};

function stopTimer() {
  clearInterval(timerTime);
};

function clearStorage() {
  localStorage.clear();
  function empty() {
    usersARR.length=0;
  }
  empty();
};