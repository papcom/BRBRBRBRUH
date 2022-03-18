let num1 = 0;
let num2 = 0;
let ok = 0; //oll korrect
let nk = 0; //not
let sc = 0; //social credit score
let correctAns = 0;
let difficultyMultiplier = 1; //Sets the multiplier for loss difference
function newRiddle() { //Creates new multiplication problem
    document.getElementById("difficultyLevel").innerHTML = "<strong>Difficulty: normal</strong>";
    num1 = Math.round(Math.random()*10);
    num2 = Math.round(Math.random()*10);
    document.getElementById("riddle").innerHTML = num1 + " x " + num2;
    correctAns = num1*num2;
}
function newRiddleHard() { //Creates harder multiplication problem
    document.getElementById("difficultyLevel").innerHTML = "<strong>Difficulty: hard</strong>";
    num1 = Math.round((Math.random()+1)*10);
    num2 = Math.round((Math.random()+1)*10);
    document.getElementById("riddle").innerHTML = num1 + " x " + num2;
    correctAns = num1*num2;
    difficultyMultiplier = 2;
}
function newRiddleSuperHard() { //Creates even harder multiplication problem
    document.getElementById("difficultyLevel").innerHTML = "<strong>Difficulty: super hard</strong>";
    num1 = Math.round(Math.random()*100);
    num2 = Math.round(Math.random()*100);
    document.getElementById("riddle").innerHTML = num1 + " x " + num2;
    correctAns = num1*num2;
    difficultyMultiplier = 4;
}
function difficultySwitch() { //Function that calls on problems by difficulty
    if (ok >= 20) { //Twenty correct answers switches to super hard mode
        newRiddleSuperHard();
    }
    else if (ok >= 10) { //Ten correct answers switches to hard mode
        newRiddleHard();
    }
    else {
        newRiddle();
    }
}
difficultySwitch();
function checkAnswer() {
    document.getElementById("image").src = "zhong-xina.webp";
    var ans = document.querySelector(".input").value;
    var image = document.getElementById("image");
    if (ans == correctAns) { //If answer is correct:
        ok += 1;
        sc += 27;
        image.src = "scplus.webp"
        console.log("Correct");
        console.log(num1 + " times " + num2 + " equals " + (num1*num2));
        difficultySwitch();
    }
    else {
        nk += 1;
        sc -= 30 * difficultyMultiplier;
        if (sc < 0) { //If answer is wrong & social credit < 0:
            document.getElementById("title").innerHTML = "Restart";
            document.getElementById("riddle").innerHTML = "You lost, execution date: 老干嘛";
            document.getElementById("riddle").style.color = "red";
            document.getElementById("label").style.display = "none";
            document.getElementById("input").style.display = "none";
            document.getElementById("button").style.display = "none";
            document.getElementById("ok").style.color = "whitesmoke";
            document.getElementById("nk").style.color = "whitesmoke";
            document.getElementById("kd").style.color = "whitesmoke";
            document.getElementById("sc").style.color = "whitesmoke";
            document.getElementById("header").style.backgroundColor = "red";
            document.getElementById("centerDiv").style.backgroundColor = "black";
            document.getElementById("body").style.backgroundColor = "black";
            image.src = "exedate.webp"
        }
        else { //If answer is just wrong:
            imageSwitch();
            console.log("Wrong answer");
            difficultySwitch();
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

function imageSwitch() { //Function that changes loss image (-30, -60 and -120)
    if (difficultyMultiplier == 4) { //Call on -120 image if difficulty == super hard
        image.src = "scminus120.webp";
    }
    else if (difficultyMultiplier == 2) { //Call on -60 image if difficulty == hard
        image.src = "scminus60.webp";
    }
    else { //Regular loss image (-30)
        image.src = "scminus.webp";
    }
}