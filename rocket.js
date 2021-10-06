var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
    document.body.className = "body-state1" + state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById("countdown").innerHTML = countdownNumber;


    //countdown
    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber - 1;
            document.getElementById("countdown").innerHTML = countdownNumber;

            if (countdownNumber < 0) {
                changeState(3);
            }
        }, 500);
    } else if (state == 3) {
        var succes = setTimeout(function () {
            var randomNumber = math.round(Math.random() * 10);
        

            //succes
            if (randomNumber > 5) {
                changeState(4);
            } else {
                changeState(5); // oh no
            }
        }, 2000);
    }
};
