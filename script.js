//Javascript here
  var mainEl = document.getElementById("main");
  var questionEl = document.getElementById("question");
  var bodyEl = document.createElement("div");
  var wordsPerMillisecond = 4000;
  var i = 0;
  var finalScore = 0;

  var score = (wordsPerMillisecond/1000)*(questions.length +1);

  $(".startBtn").on("click", function(){
    addButtons();
    startTimer();
    clearInterval(wordsPerMillisecond);
  })
  
  function startTimer() {
    console.log(score);
    var timerTime = setInterval(function(){
      console.log(score);
      if (score > 0){
        score--;
        $("#score").text(score);
      };
    }, 1000);
    changeQuestion(0);
    speedRead();
  };

  function speedRead() {
      var poemInterval = setInterval(function() {
        if (i < questions.length){
          changeQuestion(i);
          if (i === 0) {
            $("#btn-choice-" + questions[i].answer).one("click", function(){
              $("#correctOrNot").text("CORRECT 1");
            })
            $("#btn-choice-1").one("click", function(){$("#correctOrNot").text("INCORRECT"); $("#correctOrNot").addClass("Incorrect");})
            $("#btn-choice-2").one("click", function(){$("#correctOrNot").text("INCORRECT"); $("#correctOrNot").addClass("Incorrect");})
            $("#btn-choice-3").one("click", function(){$("#correctOrNot").text("INCORRECT"); $("#correctOrNot").addClass("Incorrect");})
          } else if (i === 1){
            $("#btn-choice-" + questions[i].answer).one("click", function(){
              $("#correctOrNot").text("CORRECT 2");
            })
            $("#btn-choice-0").one("click", function(){$("#correctOrNot").text("INCORRECT");})
            $("#btn-choice-2").one("click", function(){$("#correctOrNot").text("INCORRECT");})
            $("#btn-choice-3").one("click", function(){$("#correctOrNot").text("INCORRECT");})
          } else if (i === 2){
            $("#btn-choice-" + questions[i].answer).one("click", function(){
              $("#correctOrNot").text("CORRECT 3");
              finalScore = score;
              alert(finalScore);
              resetGame();
              return score
            })
            $("#btn-choice-0").one("click", function(){$("#correctOrNot").text("INCORRECT");})
            $("#btn-choice-1").one("click", function(){$("#correctOrNot").text("INCORRECT");})
            $("#btn-choice-2").one("click", function(){$("#correctOrNot").text("INCORRECT");})
          }
          i++;
        } 
      }, wordsPerMillisecond);
  };
  function changeQuestion (i) {
    $("#question").text(questions[i].question);
    $("#btn-choice-0").text(questions[i].choices[0]);
    $("#btn-choice-1").text(questions[i].choices[1]);
    $("#btn-choice-2").text(questions[i].choices[2]);
    $("#btn-choice-3").text(questions[i].choices[3]);
  };

  function resetGame() {
    for (var j = 0; j < 4; j++){
      $("#btn-choice-" +j).empty();
    };
    $("#question").empty();
    $("#correctOrNot").empty();
    $("#main").empty();
    score = (wordsPerMillisecond/1000)*(questions.length +1);
    $("#score").empty();
  }

  function addButtons() {
    var q = $('<div class="row"><div id="question"></div></div>');
    $("#main").append(q);
    var a = $('<div class="row"><button type="button" id="btn-choice-0" class="btn btn-primary"></button></div>');
    $("#main").append(a);
    var b = $('<div class="row"><button type="button" id="btn-choice-1" class="btn btn-primary"></button></div>');
    $("#main").append(b);
    var c = $('<div class="row"><button type="button" id="btn-choice-2" class="btn btn-primary"></button></div>');
    $("#main").append(c);
    var d = $('<div class="row"><button type="button" id="btn-choice-3" class="btn btn-primary"></button></div>');
    $("#main").append(d);
    var e = $('<div class="row"><div id="correctOrNot"></div></div>');
    $("#main").append(e);
};