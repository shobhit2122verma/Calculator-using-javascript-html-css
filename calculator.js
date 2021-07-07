var buttons=document.getElementsByClassName("button");
var display=document.getElementById("answer");
var operand1=0;
var operand2=null;
var operator;
var ans=document.getElementById("answer").innerText;
display.innerText="";
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click', function()
    {
        var c=this.getAttribute('data-value');
        if(c=="AC")
        {
            operand1=null;
            operand2=null;
            operator=null;
            display.innerText="";
            return;
        }
        else if(c=="+/-")
        {
            operand1=parseFloat(display.innerText);
            if(operand1<0)
            {
                operand1=0-operand1;
            }
            else{
                operand1=0-operand1;
            }
            display.innerText=operand1;
        }
        else if(c=="%")
        {
            operand1=parseFloat(display.innerText);
            if(operand1==0)
            {
                display.innerText="error";
                return;
            }
            operator=c;
            display.innerText="";
        }
        else if(c=="/")
        {
            operand1=parseFloat(display.innerText);
            if(operand1==0)
            {
                display.innerText="error";
                return;
            }
            operator="/";
            display.innerText="";
        }
        else if(c=="*")
        {
            operand1=parseFloat(display.innerText);
            if(operand1==0)
            {
                display.innerText="error";
                return;
            }
            operator=c;
            display.innerText="";
        }
        else if(c=="+")
        {
            operand1=parseFloat(display.innerText);
            if(operand1==0)
            {
                display.innerText="error";
                return;
            }
            operator=c;
            display.innerText="";
        }
        else if(c=="-")
        {
            operand1=parseFloat(display.innerText);
            if(operand1==0)
            {
                display.innerText="error";
                return;
            }
            operator=c;
            display.innerText="";
        }
        else if(c=="="){
            operand2=parseFloat(display.innerText);
            // if(operand2==null)
            // {
            //     display.innerText="error";
            //     return;
            // }
            var ans=operand1+operator+operand2;
            // display.innerText=ans;
            var answ=parseFloat(eval(ans));
            if(answ==NaN)
            {
                display.innerText="error";
                return;
            }
            display.innerText=answ;
        }
        else{
            display.innerText+=c;
        }
    });
    // button[i].addEventListener('keypress', function(){
    //     var value=
    // });
}