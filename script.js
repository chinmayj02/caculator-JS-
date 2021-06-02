function getHistory()
{
    return document.getElementById("value-history").innerText;
}
function printHistory(n)
{
    document.getElementById("value-history").innerText = n;
}
function getOutput()
{
    return document.getElementById("value-output").innerText;
}
function printOutput(n)
{
    if(n=="")
    {
        document.getElementById("value-output").innerText = n;
    }
    else
    {
        document.getElementById("value-output").innerText = getFormattedNumber(n);
    }
}
function getFormattedNumber(n)
{
    if(n=="-")
    {
        return "";
    }
    var x = Number(n);
    var val = x.toLocaleString("en");
    return val;
}
function getUnformattedNumber(n){
	return Number(n.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0 ; i<operator.length ; i++)
{
    operator[i].addEventListener("click",function(){
        if(this.id=="clear")
        {
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace")
        {
            var output = getUnformattedNumber(getOutput()).toString();
            if(output)
            {
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else
        {
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!="")
            {
                if(isNaN(history[history.length-1]))
                {
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!="")
            {
                output = output==""?output:getUnformattedNumber(output);
                history = history + output;
                if(this.id=="=")
                {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else
                {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }}
       })
}
var number = document.getElementsByClassName("number");
for(var i=0 ; i<number.length ; i++)
{
    number[i].addEventListener("click",function(){
        var output = getUnformattedNumber(getOutput())
        if(output!=NaN)
        {
            output = output + this.id;
            printOutput(output);
        } 
    })
}

// var coll = document.getElementsByClassName("collapse-header");
// for (var i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = document.getElementsByClassName("collapse-content")[0];
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }