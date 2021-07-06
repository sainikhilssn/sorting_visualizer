var arr_size = document.querySelector(".array_size");
var animationSpeed = document.querySelector(".speed");

function createBars(size) {
    let array = [];
    let maxBarHeight = 60;
    let barContainer = document.querySelector(".bar-container");
    for(let i = 1; i <= size; i++) {
        let barHeight = Math.floor(Math.random()*maxBarHeight) + 5;
        array.push(barHeight);
        let bar = document.createElement("div");
        bar.classList.add("bars")
        bar.style.height = barHeight + "vh";
        barContainer.appendChild(bar);
    }
}
// removes all the bars from the bar container
function removeBars() {
    document.querySelectorAll(".bars").forEach((node) => {
        node.remove();
    });
}

arr_size.addEventListener("click",()=>
{
          removeBars();
          createBars(arr_size.value);
})

animationSpeed.addEventListener("input", () => {
    delay = 1000 - animationSpeed.value + 50;
    document.querySelectorAll(".bars").forEach((bar) => {
        bar.style.transitionDuration = ((delay/1000)*0.5) + "s";
    });  
});
document.getElementById("newArray").addEventListener("click",()=>{
    removeBars();
    createBars(arr_size.value);
});

document.getElementById("bubble").addEventListener("click",()=>{

    let bar_arr = document.querySelectorAll(".bars");
    bubbleSort(bar_arr);
    
})
document.getElementById("insertion").addEventListener("click",()=>{
    let bar_arr = document.querySelectorAll(".bars");
    insertionSort(bar_arr);
    
})
document.getElementById("selection").addEventListener("click",()=>{
    let bar_arr = document.querySelectorAll(".bars");
    selectionSort(bar_arr);
    
})
document.getElementById("merge").addEventListener("click",()=>{
    let bar_arr = document.querySelectorAll(".bars");
    mergeSort(bar_arr,0,bar_arr.length-1);
    
})
document.getElementById("quick").addEventListener("click",()=>{
    let bar_arr = document.querySelectorAll(".bars");
    quickSort(bar_arr,0,bar_arr.length-1);
    
})

createBars(arr_size.value);
