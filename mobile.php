	<?php
function is_mobile(){
$regex_match="/(nokia|iphone|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|";
$regex_match.="htc|dopod|blazer|netfront|helio|hos in|huawei|novarra|CoolPad|webos|techfaith|palmsour ce|";
$regex_match.="blackberry|alcatel|amoi|ktouch|nexi an|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|ma ui|";   
$regex_match.="symbian|smartphone|midp|wap|phone|w indows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|";
$regex_match.="jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mob i|opera\*mini|320x320|240x320|176x220";
$regex_match.=")/i";   
return isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE']) or preg_match($regex_match, strtolower($_SERVER['HTTP_USER_AGENT']));
}

switch($_GET['mode'])
{
case 'mobile':
$mode = "mobile";
break;
case 'desktop':
$mode = "desktop";
break;
default:
$mode = is_mobile() ? "mobile" : "desktop";
break;
}

if ($mode == "mobile")
{
header ("http://adrianbukalski.wex.pl");
return;
}
?>
	