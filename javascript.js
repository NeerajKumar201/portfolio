function getData() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var desc = document.getElementById("dis").value;

    if (name.length !== 0 && email.length !== 0 && desc.length !== 0) {
        var newValue = {
          name: name,
          email: email,
          desc: desc,
        };
        console.log(newValue);
        alert("Hi : "+name+"\n"+"\n"+"Discription : \n"+desc+"\n\nThank for response");
        cleardata();
        
    }
    else{
      alert("Please enter all required info");
    }

}

function cleardata() {
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("dis").value="";
}