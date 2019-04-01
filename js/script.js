 function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0;
if(question1 == "Null") {
    correct = correct + 10;
}
if(question2 == "toFixed") {
    correct = correct + 10;
}
if(question3 == "False") {
    correct = correct + 10;
}
if(question4 == "HTML") {
    correct = correct + 10;
}
if(question5 == "Native") {
    correct = correct + 10;
}
if(question6 == "native, finally, throws") {
    correct = correct + 10;
}
if(question7 == "Boolen b3= false;") {
    correct = correct + 10;
}
if(question8 == "third"){
    correct = correct + 10;
}
if(question9 == "2"){
    correct = correct + 10;
}
if(question10 == "4"){
    correct = correct + 10;
}
var messages = [ "congrates you passed !!",  "Great job !!",  "well done!!" ,  "Good trial !!",  "Nice trial there!!", "fair job!!", "its okay!!", "Work hard !!", "you need to work harder!! !!" , "better luck next time bruh!!" , "you failed!!" ];
var pictures = ["img/clap.gif",             "img/bean.gif" , "img/well.gif",  "img/Laurent.gif" ,  "img/nyc.gif"  , "img/fair.gif",  "img/ok.gif", "img/not.gif",   "img/pengiun.gif",          "img/luck.gif",        "img/think.gif"];

var range;
if(correct <10) {
    range = 10;
}
if (correct >0 && correct <20) {
    range = 9;
}
if(correct >10 && correct <30) {
    range = 8;
}
if(correct >20 && correct <40) {
    range = 7;
}
if(correct >30 && correct <50){
    range = 6;
}
if(correct >40 && correct <60) {
    range = 5;
}
if(correct >50 && correct <70){
    range = 4;
}
if(correct >60 && correct <80) {
    range = 3;
}
if(correct >70 && correct <90){
    range = 2;
}
if(correct >80 && correct <100){
    range = 1;
}
if(correct >90){
    range = 0;
}

    document.getElementById("after_submit").style.visibility="visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number-correct").innerHTML = "You got  " + correct +  " %" + " correct";
    document.getElementById("pictures").src=pictures[range];
}
