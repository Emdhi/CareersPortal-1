// Custom Javascript/JQuery for this view 
//This is the script for performing the loading screen 
document.onreadystatechange = function () 
{
    var state = document.readyState
    if (state == 'interactive')
    {
        document.getElementById('contents').style.visibility="hidden";
    } 
    else if (state == 'complete') 
    {
        setTimeout(function(){
        document.getElementById('interactive');
        document.getElementById('load').style.visibility="hidden";
        document.getElementById('contents').style.visibility="visible";
        },1000);
    }
}