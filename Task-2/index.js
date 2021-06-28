//document.getElementById("submit").addEventListener("click", validate);

function validate() {
  /*
  const isEmpty = str => !str.trim().length;

  document.getElementById("name").addEventListener("input", function() {
    if( isEmpty(this.value) ) {
      console.log( "NAME is invalid (Empty)" )
    } else {
      console.log( `NAME value is: ${this.value}` );
    }
  });
  */

  if (document.forms["frm"].name.value === "") {
    alert("All fields are compulsory");
    document.getElementById("name").focus();
    return false;
  } else if (document.forms["frm"].comments.value === "") {
    alert("All fields are compulsory");
    document.getElementById("comments").focus();
    return false;
  } else {
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true || genders[1].checked == true) {
      console.log(genders);
    } else {
      alert("All fields are compulsory");
      document.getElementsById("radio").focus();
      return false;
    }
  }
  return true;
}
