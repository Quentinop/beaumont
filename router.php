<?php
$q = isset($_GET["q"]) ? $_GET["q"]  : '';

if ($q == '') {
	include 'views/home.php';
}
elseif ($q=="accueil") {
	include 'views/home.php';
}
elseif ($q=="extincteurs") {
	include 'views/extinguisher.php';
}
elseif ($q=="autres") {
	include 'views/other-products.php';
}
elseif ($q=="desenfumage") {
	include 'views/smoke-extraction.php';
}
elseif ($q=="documents") {
	include 'views/docs.php';
}
else {
	include 'views/404.php';
}


