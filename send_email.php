<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['fullName'];
    $email = $_POST['email'];
    $message = $_POST['subject'];

    // Set your email address here
    $to = "s2dioproductionsclt@gmail.com"; 
    $subject = "New Message from $name";
    $body = "You have received a new message from $name ($email):\n\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
}
?>