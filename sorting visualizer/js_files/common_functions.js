var delay = 1000; // milliseconds
var maxBarHeight = 60; // vh

async function swap(bar1,bar2)
{
    // indicating which bars are being swapped by changing background color
    bar1.style.background = "#ccff99";
    bar2.style.background = "#ccff99";
    
    await new Promise(resolve => setTimeout(resolve,delay));

    let height1 = bar1.style.height;
    let height2 = bar2.style.height;

    // swapping two heights

    bar1.style.height = height2;
    bar2.style.height = height1;

    await new Promise(resolve =>setTimeout(resolve,delay))

}

async function sorted_effect(bar_arr)
{
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
