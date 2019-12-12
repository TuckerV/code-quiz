//Javascript here
var questions = [{
    question: "Which of these is the correct bracket for an array?",
    choices: ["[]", "{}", "()", "<>"],
    answer: 0
  },
  {
    question: "Which of these indicate something is a string?",
    choices: ["STRONG", "STRING", "STRANG", "THANG"],
    answer: 1
  },
  {
    question: "Not sure what to ask for this question, but choose c!",
    choices: ["Not this one dumbass", "Maybe this one?", "HERES THE ANSWER", "Also not an answer"],
    answer: 2
  }]
  var mainEl = document.getElementById("main");
  var questionEl = document.getElementById("question");
  var bodyEl = document.createElement("div");
  var wordsPerMillisecond = 3000;
  var i = 0;
  
  function speedRead() {
    mainEl.append(bodyEl);

      var poemInterval = setInterval(function() {
        console.log(i + " before calling questions");
        if (i < questions.length){
          questionEl.textContent = questions[i].question;
          $("#answer0").text(questions[i].choices[0]);
          $("#answer1").text(questions[i].choices[1]);
          $("#answer2").text(questions[i].choices[2]);
          $("#answer3").text(questions[i].choices[3]);
          if (i === 0) {
            $("#btn-choice-" + questions[i].answer).one("click", function(){
              alert("YOU HAVE CHOSEN WISELY");
              $("#correctOrNot").text("CORRECT 1");
            })
          } else if (i === 1){
            $("#btn-choice-" + questions[i].answer).one("click", function(){
              alert("YOU HAVE CHOSEN WISELY #2");
              $("#correctOrNot").text("CORRECT 2");
            })
          } else if (i === 2){
            console.log(questions[i].answer + "This is what the answer is supposed to be");
            $("#btn-choice-" + questions[i].answer).one("click", function(){
              alert("YOU HAVE CHOSEN WISELY #3");
              $("#correctOrNot").text("CORRECT 3");
            })
          }
          // console.log(i + " before ++");
          i++;
          // console.log(i + "after ++");
        } 
      }, wordsPerMillisecond);
  };



  $(".startBtn").on("click", function(){
    // $(".populateQuiz").html("Hello there");
    speedRead();
    clearInterval(wordsPerMillisecond);
  })
