<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: POST");
header("Allow: POST");
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    die();
}

$mail = new PHPMailer(true);

try {
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            //Lee los datos que se envian por POST
            $datos = json_decode(file_get_contents('php://input'));
            if ($datos != null) {
                //Server settings
                $mail->SMTPDebug = 0;
                $mail->isSMTP();
                $mail->Host = 'smtp.hostinger.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'info@jorgevargsbooks.com';
                $mail->Password = 'p(!G9m2f,cPE';
                $mail->SMTPSecure = 'tls';
                $mail->Port = 465;

                $mail->setFrom('info@jorgevargsbooks.com', 'Jorge');

                $mail->isHTML(true);
                $mail->CharSet = 'UTF-8';
                $mail->Subject = 'Asunto';
                $mail->Body = $datos->nombre . ' <br> ' . $datos->telefono . ' <br> ' . $datos->email . ' <br> ' . $datos->mensaje;

                $mail->AddAddress('luisvardez@gmail.com', 'Luis Vargas');
                $mail->Send();
                $mail->SmtpClose();
                http_response_code(200);
            }
            break;
    }
} catch (Exception $e) {
    echo $mail->ErrorInfo;
    http_response_code(400);
}
