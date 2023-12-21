<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'ogbra.victor@gmail.com';
    $subject = 'New Contact Form Submission';
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Error sending email.';
    }
} else {
    echo 'Invalid request.';
}
?>
