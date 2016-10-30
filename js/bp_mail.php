<?php
    $income_json = file_get_contents('php://input');
    $order_details = json_decode($income_json, true);

    $to      = $order_details['email'];
    $subject = $order_details['subject'];
    $message = $order_details['message'];
    $headers = 'From: customer-care@rawtaw.com' . "\r\n" .
        'Reply-To: customer-care@rawtaw.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    mail($to, $subject, $message, $headers);
?>
