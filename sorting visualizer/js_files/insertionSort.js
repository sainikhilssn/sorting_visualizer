async function insertionSort(bar_arr)
{
    var len = bar_arr.length;
    for(var i = 1;i < len;i++)
    {
        var j = i-1;
        var key = bar_arr[i].style.height
        bar_arr[i].style.background = "#ff7733";
        await new Promise(resolve =>setTimeout(resolve,delay));
        bar_arr[i].style.background = "#9e89d8"
        
        while(j >= 0 && (parseInt(key) < parseInt(bar_arr[j].style.height)))
        {
            await swap(bar_arr[j],bar_arr[j+1]);
            //bar_arr[j+1].style.height = bar_arr[j].style.height
            bar_arr[j].style.background = "#9e89d8";
            bar_arr[j+1].style.background = "#9e89d8";
            await new Promise(resolve => setTimeout(resolve,delay));
            j--;
        }

        
    }

    for(var i = 0;i < len;i++)
    {
        bar_arr[i].style.background = "#ccff99"
    }
    await new Promise(resolve => setTimeout(resolve,delay))
    for(var i = 0;i < len;i++)
    {
        bar_arr[i].style.background = "#9e89d8"
    }

    

}