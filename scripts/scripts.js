function autotab(current, to) {
    document.getElementById(to).focus();
}
function autotab_len(current, len, to) {
    if (document.getElementById(current).value.length == len) {
        document.getElementById(to).focus();
    }
}
function autoblur_len(current, len) {
    if (document.getElementById(current).value.length == len) {
    document.getElementById(current).blur();
    }
}
function autoblur_sel(current) {
    document.getElementById(current).blur();
}

function timer() {
    var startTime = Date.now();
    
    setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        
        var secs = Math.floor((elapsedTime % (1000 * 60)) / 1000)
        var mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        var hrs = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (hrs < 10) {
            hrs = "0" + hrs;
        }
        
        if(mins < 10) {
            mins = "0" + mins;
        }
        if(secs < 10) {
            secs = "0" + secs;
        }
        
        document.getElementById("secs").innerHTML = secs;
        document.getElementById("mins").innerHTML = mins;
        document.getElementById("hrs").innerHTML = hrs;
    },1000);
}