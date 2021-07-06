async function bubbleSort(bar_arr)
{
    console.log("pressed");
    var len = bar_arr.length;
    
    for(let i = len-1;i >= 0;i--)
    {
        for(let j = 0;j < i;j++)
        {

            // indicating which elements are being processed
            bar_arr[j].style.background = "#ff7733";
            bar_arr[j+1].style.background = "#ff7733";

            await new Promise(resolve =>setTimeout(resolve,delay));

            let h1 = bar_arr[j].style.height;
            let h2 = bar_arr[j+1].style.height;

            if(parseInt(h1) > parseInt(h2))
            {
                await swap(bar_arr[j],bar_arr[j+1]);
            }
            // changing back to original color
            bar_arr[j].style.background = "#9e89d8";
            bar_arr[j+1].style.background = "#9e89d8";
            await new Promise(resolve =>setTimeout(resolve,delay));

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
