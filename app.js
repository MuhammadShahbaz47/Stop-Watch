msec=0;
sec=0;
min=0;
var msecheading=document.getElementById("msec")
var secheading=document.getElementById("sec")
var minheading=document.getElementById("min")
var interval;

function timer(){
    msec++
    msecheading.innerHTML=msec;
    if(msec>=100){
        sec++
        secheading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++;
        sec=0;
        minheading.innerHTML=min;
    
    }

}
function start(){
interval = setInterval(timer,10)
}
function pause(){
    clearInterval(interval)
}
function reset(){
    msec=0;
    sec=0;
    msec=0;
    msecheading.innerHTML=msec;
    secheading.innerHTML=sec;
    minheading.innerHTML=min;
    pause()
}