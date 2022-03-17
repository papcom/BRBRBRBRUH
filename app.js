let num1 = 0;
let num2 = 0;
let ok = 0;
let nk = 0;
let sc = 0;
let correctAns = 0;
function newRiddle() {
    num1 = Math.round(Math.random()*10);
    num2 = Math.round(Math.random()*10);
    document.getElementById("riddle").innerHTML = num1 + " x " + num2;
    correctAns = num1*num2;
}
newRiddle();
function checkAnswer() {
    document.getElementById("image").src = "";
    var ans = document.querySelector(".input").value;
    if (ans == correctAns) {
        console.log("Correct answer");
        ok += 1;
        sc += 270.976214485;
        console.log(num1 + " times " + num2 + " equals " + (num1*num2));
        var image = document.getElementById("image");
        image.src = "scplus.png"
    }
    else {
        nk += 1;
        sc -= 100;
        console.log("Wrong answer");
        var image = document.getElementById("image");
        image.src = "scminus.jpg"
    }
    newRiddle();
    document.getElementById("kd").innerHTML = "K/D = " + (Math.round((ok/nk) * 100) / 100);
    document.getElementById("ok").innerHTML = "Correct answers = " + ok;
    document.getElementById("nk").innerHTML = "Wrong answers = " + nk;
    document.getElementById("sc").innerHTML = "Social credit = " + Math.round(sc*1000000000);
    document.getElementById("input").value = "";
}