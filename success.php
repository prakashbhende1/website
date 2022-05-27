<?php
ob_start();
include("includes/connection.php");
include("includes/functions.php");
$db = new PHP_fun;

/*
echo "<pre>";
print_r($_REQUEST);
print_r($_SESSION);
echo "</pre>";
*/

$token = "k9PqM-BOFPQIpy97FaRM97oC4Y26vTg3Dr9EZ7KI8UG5PbW5N6Ney4D8Ryq";
			


$api_url = "https://www.sandbox.paypal.com/cgi-bin/webscr";


$data = "cmd=_notify-synch&tx=".$_REQUEST['tx']."&at=".$token;

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,	$api_url);

curl_setopt($ch, CURLOPT_VERBOSE, 0);

curl_setopt($ch, CURLOPT_POST, 1);

curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);

//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);  // To work for Windows 2003 

$response = curl_exec($ch);

curl_close($ch);
//echo "<br>".$response;

$array = explode("\n",$response);

foreach($array as $key => $value)
{
	if ($key == 0)
	{
		$final_array['status'] = $value;
	}
	else if ($value != '')
	{
		if (strstr($value, "="))
		{
			$array2 = explode("=", $value);
			$final_array[$array2[0]] = $array2[1];
		}
	}	
}
/*
echo "<pre>";
print_r($final_array);
echo "</pre>";
*/
if ($final_array['status'] == "SUCCESS" && $final_array['payment_status'] == "Completed")
{

	$s_ins = sprintf("INSERT INTO ps_order_history (item_name, quantity, payment_gross, payer_email, first_name, last_name, txn_id, payment_date, date_added) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, now())", $db->quote_smart($final_array['item_name']), $db->quote_smart($final_array['quantity']), $db->quote_smart($final_array['payment_gross']), $db->quote_smart($final_array['payer_email']), $db->quote_smart($final_array['first_name']), $db->quote_smart($final_array['last_name']), $db->quote_smart($final_array['txn_id']), $db->quote_smart($final_array['payment_date']));
	
	$r_ins = mysql_query($s_ins) or die(mysql_error());
	
	header("Location: thankyou.html");
	
	
}
else
{
	header("Location: failed.html");

}	
?>
<html>
<head>
</head>

<body oncontextmenu="javascript: return false;">

Please Wait...... Dont refresh or Back button while Payment Processing..

</body>
</html>
