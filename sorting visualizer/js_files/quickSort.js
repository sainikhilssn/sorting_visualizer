async function quickSort(bar_arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = await partition(bar_arr, start, end);
    bar_arr[index].style.background = "#ff7733";
    await new Promise(resolve =>setTimeout(resolve,delay));
    
    
    // Recursively apply the same logic to the left and right subbar_arrays
    await quickSort(bar_arr, start, index - 1);
    await quickSort(bar_arr, index + 1, end);

    bar_arr[index].style.background = "#9e89d8";
    await new Promise(resolve =>setTimeout(resolve,delay));

    if(end - start + 1 == bar_arr.length)
    {
        for(var i = start;i <= end;i++)
        {
        bar_arr[i].style.background = "#ccff99"
        }
        await new Promise(resolve => setTimeout(resolve,delay))
        for(var i = start;i <= end;i++)
        {
        bar_arr[i].style.background = "#9e89d8"
        }
        await new Promise(resolve => setTimeout(resolve,delay))
    }

    

}
async function partition(bar_arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = bar_arr[end].style.height;
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (parseInt(bar_arr[i].style.height) < parseInt(pivotValue)){
        // Swapping elements
        //[bar_arr[i], bar_arr[pivotIndex]] = [bar_arr[pivotIndex], bar_arr[i]];
        await swap(bar_arr[i],bar_arr[pivotIndex])
        bar_arr[i].style.background = "#9e89d8";
        bar_arr[pivotIndex].style.background = "#9e89d8";
        await new Promise(resolve =>setTimeout(resolve,delay));
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    //[bar_arr[pivotIndex], bar_arr[end]] = [bar_arr[end], bar_arr[pivotIndex]] 
    await swap(bar_arr[pivotIndex],bar_arr[end])
    bar_arr[pivotIndex].style.background = "#9e89d8";
    bar_arr[end].style.background = "#9e89d8";
    await new Promise(resolve =>setTimeout(resolve,delay));
    return pivotIndex;
};