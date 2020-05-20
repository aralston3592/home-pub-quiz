$(document).ready(function () {
    //hide quiz on loading
    $(".quiz-round").hide();
    //show lading page content
    $(".landing-page-content").show();
});

//start with score of 0
let score = 0;
//number of questions in each round
let roundTotal = 5;
//number of questions total
let total = 30;
//points given for each answer
let point = 1;
//maximum achievable score
let maxScore = point * total;

let answer = document.getElementsByClassName("btn-answer")
let correct = document.getElementsByClassName("correct")
// Add 1 to score and colour correct answers green.
$(".correct").click(function() {
    this.style.backgroundColor = "green";
    score++;
});

//turn answer red if incorrect 
$(".incorrect").click(function() {
    this.style.backgroundColor = "red";
})

//hide landing page content and show round one when start button is clicked
$(".btn-quiz").click(function () {
    $(".landing-page-content").hide();
    $(".round-one").show();
});

//hide round one and show round three when continue clicked
$(".next-one").click(function () {
    $(".round-one").hide();
    $(".round-two").show();
});

//hide round two and show round three when continue clicked
$(".next-two").click(function () {
    $(".round-two").hide();
    $(".round-three").show();
});

//hide round three and show round four when continue clicked
$(".next-three").click(function () {
    $(".round-three").hide();
    $(".round-four").show();
});

//hide round four and show round five when continue clicked
$(".next-four").click(function () {
    $(".round-four").hide();
    $(".round-five").show();
});

//hide round five and show round six when continue clicked
$(".next-five").click(function () {
    $(".round-five").hide();
    $(".round-six").show();
});

//hides last round and shows results on result page
$(".score").click(function () {
    $(".round-six").hide();
    $(".score-page-content").show();
    //show score on score section
    document.getElementById("score").innerHTML = score + "/" + total;
});


//stop buttons refreshing page
$(".btn-answer").click(function(event) {
    event.preventDefault();
});

//fades other options when answer is chosen
$("li").click( function(event) {
    $(this).siblings().fadeTo(500, 0.1).disabled = true;
});