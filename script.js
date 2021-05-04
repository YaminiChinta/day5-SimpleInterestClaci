function calculate()
{
    var amt=document.getElementById("amount").value;
    var time=document.getElementById("time").value;
    var timem =document.getElementById("timem").value;
    var rate=document.getElementById("rate").value;
    
    var t=timem/12;
    
    var tt=Number(time)+Number(t);
    
    var interest=(amt*tt*rate)/100;
    if(amt<0 || time<0 || rate<0 || timem>11 || timem<0){
        window.alert("Please Enter Valid Number....");
        return false;
    }
    document.getElementById("result").innerHTML="Interest for the following values:  "+interest;
    
    // amt=document.getElementById("amount").value="";
    // time=document.getElementById("time").value="";
    // rate=document.getElementById("rate").value="";
}
function reset(){
    location.reload();
}