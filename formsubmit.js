
function required()
{
var empt = document.forms["loginform"]["fname"].value;
if (empt == "") // if empty output
{
alert("Please input Login ID");
return false;
}
var empt = document.forms["loginform"]["fpassword"].value;
if (empt == "")
{
alert("Please input Password");
return false;
}
else 
{
alert('Sorry No Such Account was Registered');
return 1; 
}
}


//Forgot Pass


function formpassre()
{
  var empt = document.forms["forgot"]["forgotpass"].value;
if (empt == "")
{
alert("Please input Email Address");
return 0;
}
  else
  {
    alert('Sorry No Such Email have Been Found');
    return 1;
  }
}


// Create Acc
function formcreate()
{
var empt = document.forms["createacc"]["fuser"].value;
    if (empt == "")
    {
        alert("Please input Username");
            return 1;
    }

var empt = document.forms["createacc"]["fpass"].value;
     if (empt == "")
    {
        alert("Please input Password");
            return 1;
    }

var empt = document.forms["createacc"]["fpassword"].value;
    if (empt == "")
    {
        alert("Please input 2nd-Password");
            return 1;
    }

    if (document.getElementById('1stpass').value !=
    document.getElementById('2ndpass').value){
        alert("Your 2nd password are not match");
        return 1;
    }

    var empt = document.forms["createacc"]["femail"].value;
    if (empt == "")
    {
        alert("Please input Your Email Address");
            return 1;
    }
    else{
        alert('Sorry Currently Webpage unavailable');
            return 1;
    }
    }


    var confirm = function() {
        if (document.getElementById('1stpass').value ==
          document.getElementById('2ndpass').value) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'matching';
        } else {
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = 'not matching';
        }
      }