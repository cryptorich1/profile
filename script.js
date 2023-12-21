function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var xhr = new XMLHttpRequest();
    var url = 'send_email.php';
    var params = 'name=' + name + '&email=' + email + '&message=' + message;

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
        }
    }

    xhr.send(params);
}


// function sendEmail() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     var xhr = new XMLHttpRequest();
//     var url = 'email_page.php';
//     var params = 'name=' + name + '&email=' + email + '&message=' + message;

//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             alert(xhr.responseText);
//         }
//     }

//     xhr.send(params);
// }
