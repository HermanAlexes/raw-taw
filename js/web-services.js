/**
 * Created by Lenovo on 9/15/2016.
 */


function prepareOrder (){
    // convert html data to JSON here
    var order = Object();

    order.size            = document.getElementById("size").options[document.getElementById("size").selectedIndex].text;
    order.clientName      = document.getElementById("clientName")     .value;
    order.clientPhone     = document.getElementById("clientPhone")    .value;
    order.clientEmail     = document.getElementById("clientEmail")    .value;
    order.deliveryType    = document.getElementById("deliveryType").options[document.getElementById("deliveryType").selectedIndex].text;
    order.deliveryAddress = document.getElementById("deliveryAddress").value;
    order.mailPostNumber = document.getElementById("mailPost").options[document.getElementById("mailPost").selectedIndex].text;
    order.onlinePayment   = (document.getElementById("paymentType").selectedIndex = 1) ? true : false;

    createOrder(order);
}

function createOrder (order){

    request = new XMLHttpRequest();

    request.open("POST", "js/bp_facade.php", true);

    request.setRequestHeader("Content-type", "application/json");

    request.send(JSON.stringify(order));

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status === 200) {
            // in case we reply back from server
            console.log(JSON.parse(request.responseText));
        }
    };

    // send rawtaw.shop@gmail.com email
    sendMail("herman.alexes@gmail.com", "Order Successfully Registered",
        "Dear RawTaw Manager,"
        + "\n You received new order. \n Client Name: " + order.clientName
        + "\n Client Phone Number: "                     + order.clientPhone
        + "\n Client Email: "                            + order.clientEmail
        + "\n Order Size:"                               + order.size
        + "\n Delivery Type:"                            + order.deliveryType
        + "\n Delivery Address:"                         + order.deliveryAddress
        + "\n Online Payment:"                           + order.onlinePayment);

    // send client email
    sendMail(order.clientEmail, "Order Successfully Registered",
                                "Dear " + order.clientName
                                + ", \n thank you for your order. RawTaw manager will keep contact with you soon to clarify delivery details.");

    $('#merciModal').modal();

    $("#order").addClass("hidden");
}

function prepareFeedback (){

    var feedback = Object();

    feedback.name    = document.getElementById("name")   .value;
    feedback.email   = document.getElementById("email")  .value;
    feedback.phone   = document.getElementById("phone")  .value;
    feedback.comment = document.getElementById("comment").value;

    saveFeedback(JSON.stringify(feedback));
}

function saveFeedback (feedbackJson){

    request = new XMLHttpRequest();

    request.open("POST", "js/bp_feedback.php", true);

    request.setRequestHeader("Content-type", "application/json");

    request.send(feedbackJson);

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status === 200) {
            // in case we reply back from server
            console.log(JSON.parse(request.responseText));
        }
    };

    sendMail();

    $('#feedbackModal').modal();

    $("#order").addClass("hidden");
}

function sendMail (email, subject, message){

    var jsonObject = Object();

    jsonObject.email = email;
    jsonObject.subject = subject;
    jsonObject.message = message;

    request = new XMLHttpRequest();

    request.open("POST", "js/bp_mail.php", true);

    request.setRequestHeader("Content-type", "application/json");

    request.send(JSON.stringify(jsonObject));

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status === 200) {
            // in case we reply back from server
            console.log(JSON.parse(request.responseText));
        }
    }
}