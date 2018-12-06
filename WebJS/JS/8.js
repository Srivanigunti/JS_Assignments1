function myFunction()
{
    var name=prompt("please enter your name","");
    if(name!=null)
    {
        document.getElementById("demo").innerHTML=name;
    }
}