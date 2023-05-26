player1_name=localStorage.getItem("Player 1");
player2_name=localStorage.getItem("Player 2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
function send() {
    get_number1=document.getElementById("number1").value;
    get_number2=document.getElementById("number2").value;
    get_number3=get_number1+" x "+get_number2;
    ans=parseInt(get_number1)*parseInt(get_number2);
    question_word="<h4 id='number_display'> Q. "+get_number3+"</h4>";
    input="<br>Answer : <input type='number' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row=question_word+input+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1,number2").value="";
}
question_turn="player1";
answer_turn="player2";

function check() {
    get_answer=document.getElementById("input_check_box").value;
    if (ans==get_answer){
        if (answer_turn=="player1") {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (answer_turn=="player1") {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
    }
    else {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name; 
    }
    if (question_turn=="player1") {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn - "+player2_name;
    }
    else {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn - "+player1_name; 
    }
    document.getElementById("output").innerHTML="";
}
