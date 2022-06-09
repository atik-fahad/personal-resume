<?php
header('Content-Type: application/json');
$data = file_get_contents("php://input");
$parsedData = json_decode($data);

$from = 'contact@atikfahad.com';
$sendTo = 'fahadatik@gmail.com'; 
$subject = 'New message from contact form of the website';
$fields = array('name' => 'Name', 'email' => 'Email', 'subject' => 'Subject', 'description' => 'Description');
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// try
//         {
//             $emailText = nl2br("You have new message from Contact Form\n");

//             foreach ($parsedData as $key => $value) {

//                 if (isset($fields[$key])) {
//                     $emailText .= nl2br("$fields[$key]: $value\n");
//                 }

//             $headers = array('Content-Type: text/html; charset="UTF-8";',
//                 'From: ' . $from,
//                 'Reply-To: ' . $from,
//                 'Return-Path: ' . $from,
//             );
            
//             mail($sendTo, $subject, $emailText, implode("\n", $headers));

//             $responseArray = array('type' => 'success', 'message' => $okMessage);
//         }
//         }
//         catch (Exception $e)
//         {
//             $responseArray = array('type' => 'danger', 'message' => $errorMessage);
//         }
        
        $responseArray = array('type' => 'success', 'message' => 'done');
        header('Content-Type: application/json');
        echo json_encode($responseArray);
    