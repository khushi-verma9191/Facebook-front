function check()
{
    //alert("Welcome to Javascript");
    var fname=document.getElementById("fn").value;
    //alert(fname);
    var pname=/^ [A-za-z ]{3,60} $/;
    if(!pname.test(fname))
    {
        document.getElementById("fn").innerHTML="Invalid name";
    }
    else
    {
        document.getElementById("fn").innerHTML="";
    }
}