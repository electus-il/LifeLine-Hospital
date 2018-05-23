var countdiv = document.querySelector(".count");

var count = 0;

var stats = setInterval(function(){
        countdiv.innerHTML = count;
        count+=10;
        if(count > 2340){
            clearInterval(stats);
        }
},5)

