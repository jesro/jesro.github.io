<?php
 
if(isset($_POST['email'])) {
 
     
 
    
    $email_to = "samueljesro@gmail.com";
 
    $email_subject = "Contact Admin";
 
      
 
    function died($error) {
 
        
 
        echo "ERROR FOUND <br /><br />";
 
        echo $error."<br /><br />";
 
        echo '<a href="contactform.html"><input type="button" value="PLEASE GO BACK AND ENTER"></a><br /><br />';
 
        die();
 
    }
 
     
 
    
 
    if(!isset($_POST['first_name']) ||
 
        !isset($_POST['last_name']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['Mobile']) ||
 
        !isset($_POST['comments'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $first_name = $_POST['first_name']; 
 
    $last_name = $_POST['last_name']; 
 
    $email_from = $_POST['email']; 
 
    $mobile = $_POST['Mobile']; 
 
    $comments = $_POST['comments']; 
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'Please enter the valid <b>Email Address</b><br /><br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
 
    $error_message .= 'Please enter the valid <b>First Name</b><br /><br />';
 
  }
 
  if(!preg_match($string_exp,$last_name)) {
 
    $error_message .= 'Please enter the valid <b>Last Name</b><br /><br />';
 
  }
 
  if(strlen($comments) < 2) {
 
    $error_message .= 'Please enter the valid <b>Comments</b><br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
 
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Mobile: ".clean_string($mobile)."\n";
 
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
     
 
     
 

 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 

 
 
 
Thank you for contacting us. We will be in touch with you very soon.
 
 
 
<?php
 
}
 
?>