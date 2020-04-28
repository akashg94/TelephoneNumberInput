function myKeyPress(e){
	

    /* TODO: retrieve the value from the text input */
    var mytextbox = document.getElementById("textinput").value;

  

    // TODO: set the value of the textbox with the formatted value
  

    var keyPressed;
    if(window.event) { // IE
      keyPressed = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
      keyPressed = e.which;
    }
  
    //Prevents Entering Letters for the Phone Number
    if((keyPressed>=48 && keyPressed<=57) && validCount(mytextbox)<10)
    {
      var x = String.fromCharCode(keyPressed);
      var y = formatPhoneNumber(mytextbox);
      document.getElementById("textinput").value=y;
    }
    else
    {
      return false;
    }

    console.log("Key Pressed = " + keyPressed);
    console.log("  Formatted = " + y);
}

  // TODO: Add a condition to ignore entries beyond 10 digits
  
  //This function checks whether the number in text box is less than or equal to 10
  //Prevents entering more than 10 numbers
  function validCount(value){
    var str=value.replace(/-/g,'');
    return str.length
  }

  

  function formatPhoneNumber(value){
  

    /* TODO:  Use replace function to ignore extra - character */
    
    //Replace Extra '-' with ''
    var str=value.replace(/-/g,'');

    if(str.length >= 3 && str.length < 6)
    str = str.slice(0,3) + "-" + str.slice(3);
    else if(str.length >= 6)
    str = str.slice(0,3) + "-" + str.slice(3,6) + "-" + str.slice(6);
  
    console.log(str);
    return str;
  }

