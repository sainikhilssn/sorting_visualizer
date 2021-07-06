async function merge(bar_arr, leftIndex, midIndex, rightIndex) {
    
    for (let i = leftIndex; i <= rightIndex; i++) {
        bar_arr[i].style.background = "#ffffb3";
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    
    let leftArrSize = midIndex - leftIndex + 1;
    let rightArrSize = rightIndex - midIndex;
    
    let leftArray = [];
    let rightArray = [];
    
    for (let i = 0; i < leftArrSize; i++) {
        leftArray[i] = bar_arr[leftIndex + i].style.height;
    }
    
    for (let j = 0; j < rightArrSize; j++) {
        rightArray[j] = bar_arr[midIndex + 1 + j].style.height;
    }
    
    let leftCurrIndex = 0;
    let rightCurrIndex = 0;
    let barCurrIndex = leftIndex;
    
    while (leftCurrIndex < leftArrSize && rightCurrIndex < rightArrSize) {
        if (parseInt(leftArray[leftCurrIndex]) <= parseInt(rightArray[rightCurrIndex])) {
            bar_arr[barCurrIndex].style.height = leftArray[leftCurrIndex];
            leftCurrIndex++;
        } else {
            bar_arr[barCurrIndex].style.height = rightArray[rightCurrIndex];
            rightCurrIndex++;
        }
        barCurrIndex++;
    }
    
    while (leftCurrIndex < leftArrSize) {
        bar_arr[barCurrIndex].style.height = leftArray[leftCurrIndex];
        leftCurrIndex++;
        barCurrIndex++;
    }
    
    while (rightCurrIndex < rightArrSize) {
        bar_arr[barCurrIndex].style.height = rightArray[rightCurrIndex];
        rightCurrIndex++;
        barCurrIndex++;
    }
    
    //await new Promise(resolve => setTimeout(resolve, delay));
    for (let i = leftIndex; i <= rightIndex; i++) {
        bar_arr[i].style.background = "#ccff99";
    }
    await new Promise(resolve => setTimeout(resolve, delay));
}

async function mergeSort(bar_arr,start,end)
{

    if(start >= end)
    return

    var middle = Math.floor((start + end)/2)
    await mergeSort(bar_arr,start,middle)
    for(var i = start;i <= middle;i++)
    {
        bar_arr[i].style.background = "#9e89d8"
    }
    await new Promise(resolve => setTimeout(resolve,delay))
    await mergeSort(bar_arr,middle+1,end)
    for(var i = middle+1;i <= end;i++)
    {
        bar_arr[i].style.background = "#9e89d8"
    }
    await new Promise(resolve => setTimeout(resolve,delay))
    await merge(bar_arr,start,middle,end)
    if(end - start+ 1 == bar_arr.length)
    {
    for(var i = start;i <= end;i++)
    {
        bar_arr[i].style.background = "#9e89d8"
    }
    await new Promise(resolve => setTimeout(resolve,delay))
    }
}
