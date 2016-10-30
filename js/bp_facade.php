<?php
$servername = "mysql.hostinger.com.ua";
$username = "u237256874_rawta";
$password = "M@qORlhdy+s*O#C8b0";
$dbname = "u237256874_rawta";

try {
    $income_json = file_get_contents('php://input');
    $order_details = json_decode($income_json, true);

    $or_size_name = $order_details['size'];
    $or_client_name = $order_details['clientName'];
    $or_client_email = $order_details['clientEmail'];
    $or_client_phone = $order_details['clientPhone'];
    $or_delivery_type = $order_details['deliveryType'];
    $or_delivery_address = $order_details['deliveryAddress'];
    or_online_payment = $order_details['paymentType'];

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO ORDERS (OR_SIZE, OR_CLIENT_NAME, OR_CLIENT_PHONE, OR_CLIENT_EMAIL, OR_DELIVERY_TYPE, OR_DELIVERY_ADDRESS, OR_ONLINE_PAYMENT)
                        VALUES ('$or_size_name', '$or_client_name', '$or_client_phone', '$or_client_email', '$or_delivery_type', '$or_delivery_address', '$or_online_payment')";

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