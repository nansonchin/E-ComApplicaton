




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

