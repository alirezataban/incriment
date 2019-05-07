let count=0;
function UpCount()
{
    count+=1;
    document.getElementById("result").innerHTML=count;
}
function DownCount()
{
    count-=1;
    document.getElementById("result").innerHTML=count;
}