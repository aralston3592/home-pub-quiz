//start with score of 0
let score = 0;
//number of questions in each round
let roundTotal = 5;
//number of questions total
let total = 10;
//points given for each answer
let point = 1;
//maximum achievable score
let maxScore = point * total;


$(document).ready(function () {
    //hide quiz on loading
    $(".quiz-round").hide();
    //show lading page content
    $(".landing-page-content").show();
});

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