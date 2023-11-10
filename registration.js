   function showalert() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
         var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var  addr= document.getElementById('addr').value;
        var dob = document.getElementById('dob').value;
        var gender = document.getElementById('gender').value;
        var phn = document.getElementById('phn').value;
        var country = document.getElementById('country').value;
        var email = document.getElementById('email').value;
        var pwd = document.getElementById('pwd').value;
       if(fname == '' || lname == '' ||pwd==''||email==''|| addr == '' || dob == '' || country == ''||gender==''||phn=='') {
           alert('Please fill in all the required fields');
        } else {
            location.href="successful.html";
        }
       });
}