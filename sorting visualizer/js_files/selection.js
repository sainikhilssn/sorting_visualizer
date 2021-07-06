async function selectionSort(bar_arr)
{
    var len = bar_arr.length
    for(var i = 0;i < len-1;i++)
    {
        var h1 = bar_arr[i].style.height
        var min_index = i

        bar_arr[i].style.background = "#ff7733";
        await new Promise(resolve =>setTimeout(resolve,delay));
        bar_arr[i].style.background = "#9e89d8"
        await new Promise(resolve =>setTimeout(resolve,delay));



        for(var j = i+1;j < len;j++)
        {
            bar_arr[j].style.background = "#ffffb3";
            await new Promise(resolve =>setTimeout(resolve,delay));
            bar_arr[j].style.background = "#9e89d8"
            await new Promise(resolve =>setTimeout(resolve,delay));

             if(parseInt(bar_arr[j].style.height) < parseInt(bar_arr[min_index].style.height))
             {
                 min_index = j
             }
        }

        await swap(bar_arr[i],bar_arr[min_index])
        bar_arr[i].style.background = "#9e89d8";
        bar_arr[min_index].style.background = "#9e89d8";
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