const mainTable = document.getElementById("mainTable");
const aimText = document.getElementById("aimText");
const timer = document.getElementById("timer");
let tofind = 0;
let found = 0;

function click(){
    let number = event.target.innerText;
    if (number == tofind){
        tofind++;
        found++;
    }else{
        console.log(number);
        console.log(tofind);
    }
}

function init(){
    const StartBtn = document.getElementById("StartBtn");
    StartBtn.remove();
    var array = []
    for (let i = 1; i<101; i++){
        array.push(i);
    }
    for (let i = 99; i >0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j],array[i]];
    }
    let j = Math.floor(Math.random()*(50))+1;
    aimText.innerText = j;
    tofind = j;
    for(let i = 0; i<10; i++){
        const tr = document.createElement("tr");
        for(let j = 0; j<10;j++){
            const td = document.createElement("td");
            tr.appendChild(td);
            const Btn = document.createElement("button");
            Btn.classList.add("button");
            Btn.addEventListener("click", click);
            Btn.innerText = (array[10*i+j]).toString();
            td.appendChild(Btn);
        }
        mainTable.appendChild(tr);
    }
    let timeLeft = 60;
    let timerId;
    timerId = setInterval(()=>{
        if(timeLeft>0){
            timeLeft--;
            timer.innerText = timeLeft;
        }else{
            clearInterval(timerId);
            alert(found);
        }
    },1000);
}