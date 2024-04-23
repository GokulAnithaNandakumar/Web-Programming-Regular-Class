function generateEmail() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let yoj = document.getElementById('yoj').value;

    let emailId = firstName.toLowerCase()+lastName.toLowerCase()+'.'+yoj+'@vitstudent.ac.in';

    document.getElementById('result').innerHTML='<p>Your email ID is: ' + emailId + '</p>';
}