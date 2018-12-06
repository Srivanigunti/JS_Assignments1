function disp_prompt()
//This is the function used to display the prompt message
{
    var n1=prompt("1.Add \n 2.Subtract \n 3.Multiply \n 4.divide \n 5.exponent \n 6.Mean \n 7.quit");
    if(n1>=8 || n1<=0)
    {
        window.alert("Please enter the option in the given range 1 to 7")
    }
    if(n1==1 || n1==2 || n1==3 || n1==4 || n1==5 || n1==6 || n1==7)
    {
        if(n1==1)
        {
            var n2=prompt("Enter first number");
            var n3=prompt("Enter second number");
            var c= parseInt(n2) + parseInt(n3);
            document.getElementById("txt2").value=c; 
        }
        else if(n1==2)
        {
            var n2=prompt("Enter first number");
            var n3=prompt("Enter second number");
            var c = parseInt(n2) - parseInt(n3);
            document.getElementById("txt2").value = c;
        }
        else if(n1==3)
        {
            var n2=prompt("Enter first number");
            var n3=prompt("Enter second number");
            var c = parseInt(n2) * parseInt(n3);
            document.getElementById("txt2").value = c;
        }
        else if(n1==4)
        {
            var n2=prompt("Enter first number");
            var n3=prompt("Enter second number");
            var c = parseInt(n2) / parseInt(n3);
            document.getElementById("txt2").value = c;
        }
        else if(n1==5)
        {
            var n2=prompt("Enter first number");
            var n3=prompt("Enter second number");
            var c =Math.pow(parseInt(n2),parseInt(n3));
            document.getElementById("txt2").value = c;
        }
        else if(n1==6)
        {
            var c=0;
            var s=0;
            var p=prompt("Enter the series");
            while(p!="***")
            {
                c++;
                s=s+parseInt(p);
                var p=prompt("Enter the series");
            }
            var r=s/c;
            document.getElementById("txt2").value=r;
        }
        else if(n1==7)
        {
            exit();
        }
    }

}
