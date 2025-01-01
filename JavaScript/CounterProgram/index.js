//COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
//increaseBtn
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
//resetBtn
resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}
//decreaseBtn
decreaseBtn.onclick = function(){
    if(count < 1 ){
        return count=0;
    }else{
        count--;
        countLabel.textContent = count;   
    }
}

