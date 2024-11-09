document.getElementById("startButton").addEventListener("click",function(){
    // 3 second messaging
    setTimeout(() => {
        document.getElementById("output").innerHTML =" 50 seconds later cook ready!";

        //2 second later new message
        let counter = 1;
        const intervalID = setInterval(() =>{
            document.getElementById("output").innerHTML += '<br>The food is cooking';
            counter++;

            // 5 second later stop
            if (counter>50) {
                clearInterval(intervalID);
                document.getElementById("output").innerHTML+="<br>The food is cooked.Enjoy your meal.Thank you for waiting";
            }
        },2000);
    }, 3000);
  },3000);
 