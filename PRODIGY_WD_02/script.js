const play = document.querySelector('.start');
const reset = document.querySelector('.reset');
const lap = document.querySelector('.lap');
const second = document.querySelector('.sec');
const millisecond=document.querySelector('.msec');
const minute=document.querySelector('.min');
const lap_list=document.querySelector('.laps_made');
const clearAll_bttn=document.querySelector('.btn');
let second_counter=0;
let sec1;
let centisec1;
let centisec_counter=0;
let min1;
let mincounter=0;
let isPlay=false;
let paused=true;
let lap_no=1;
var reset_clicked=false;
const play_clicked = () => {
    if(!isPlay){
       reset.classList.add('hide');
        sec1= setInterval(()=>{
            second.innerText = `${++second_counter} : `;
            }
        ,1000);
        centisec1= setInterval(()=>{
            if(centisec_counter===100){
                centisec_counter=0;
            }
            millisecond.innerText = `${++centisec_counter}`;
            }
        ,10);
        min1= setInterval(()=>{
            if(second_counter==61){
                mincounter++;
                second_counter=0;
            }
            minute.innerText = `${mincounter} : `;
            }
        );
        isPlay=true;
    }
    else{
        reset.classList.remove('hide');
        clearInterval(sec1);
        clearInterval(centisec1);
        clearInterval(min1)
        isPlay=false;
    }
}

const lap_made = () => {
    const lst=document.createElement("div");
    const number=document.createElement("div");
    const timestamp=document.createElement("div");

    lst.setAttribute("class","lists list");
    number.setAttribute("class","num");
    timestamp.setAttribute("class","l1");
    timestamp.innerHTML=`${lap_no}  -    ${mincounter} :${second_counter} : ${centisec_counter}`;
    lst.append(number, timestamp);
    lap_list.append(lst);
    lap_no++;
}
const clearAll=()=>{
    lap_list.innerHTML='';
} 
const reset_every_thing=()=>{
    reset_clicked=true;
    mincounter=0;
    second_counter=0;
    centisec_counter=0;
    lap_no=1;
    clearAll(); 
    minute.innerText = "0 :";
    second.innerText= "0 :";
    millisecond.innerText=" 0";
}

lap.addEventListener("click",lap_made);
reset.addEventListener("click",reset_every_thing);
play.addEventListener("click",play_clicked);
clearAll_bttn.addEventListener("click",clearAll);   