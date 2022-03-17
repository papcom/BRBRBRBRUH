let num1 = 0;
let num2 = 0;
let ok = 0; //oll korrect
let nk = 0; //not
let sc = 0; //social credit score
let correctAns = 0;
function newRiddle() { //Creates new multiplication riddle
    num1 = Math.round(Math.random()*10);
    num2 = Math.round(Math.random()*10);
    document.getElementById("riddle").innerHTML = num1 + " x " + num2;
    correctAns = num1*num2;
}
newRiddle();
function checkAnswer() {
    document.getElementById("image").src = "zhongxina.png";
    var ans = document.querySelector(".input").value;
    var image = document.getElementById("image");
    if (ans == correctAns) { //If answer is correct:
        ok += 1;
        sc += 27;
        image.src = "scplus.png"
        console.log("Correct");
        console.log(num1 + " times " + num2 + " equals " + (num1*num2));
        newRiddle();
    }
    else {
        nk += 1;
        sc -= 30;
        if (sc < 0) { //If answer is wrong & social credit < 0:
        document.getElementById("riddle").innerHTML = "You lost, execution date: 老干嘛";
            document.getElementById("label").style.display = "none";
            document.getElementById("input").style.display = "none";
            document.getElementById("button").style.display = "none";
            document.getElementById("header").style.backgroundColor = "red";
            document.getElementById("sexHåla").style.backgroundColor = "black";
            document.getElementById("body").style.backgroundColor = "grey";
            image.src = "exedate.jpg"
        }
        else { //If answer is just wrong:
            image.src = "scminus.png"
            console.log("Wrong answer");
            newRiddle()
        }
    }
    if (nk == 0) { //If-statement to prevent 'K/D = infinity'
        document.getElementById("kd").innerHTML = "K/D = " + ok;
    }
    else {
        document.getElementById("kd").innerHTML = "K/D = " + (Math.round((ok/nk) * 100) / 100);
    }
    document.getElementById("ok").innerHTML = "Correct answers = " + ok;
    document.getElementById("nk").innerHTML = "Wrong answers = " + nk;
    document.getElementById("sc").innerHTML = "Social credit = " + sc;
    document.getElementById("input").value = "";
}