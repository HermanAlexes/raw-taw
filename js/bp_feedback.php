<?php
$servername = "mysql.hostinger.com.ua";
$username = "u237256874_rawta";
$password = "M@qORlhdy+s*O#C8b0";
$dbname = "u237256874_rawta";

try {
    $income_json = file_get_contents('php://input');
    $order_details = json_decode($income_json, true);

    $client_name = $order_details['name'];
    $client_email = $order_details['email'];
    $client_phone = $order_details['phone'];
    $client_comment = $order_details['comment'];

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO RAW_FEEDBACK (FE_CLIENT_NAME, FE_CLIENT_EMAIL, FE_CLIENT_PHONE, FE_CLIENT_COMMENT)
                        VALUES ('$client_name', '$client_email', '$client_phone', '$client_comment')";

    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Order registered successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>