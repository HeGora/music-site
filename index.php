<?php

require 'MyFormHelper.php';

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$errors = validate_form();
	if(!$errors)
	{
		include 'main_page.php';
	}
	else
	{
		echo "not a main page";
		//show_form($errors);
	}
}
else
{
	show_form();
}

function show_form($errors = array())
{
	$form = new MyFormHelper();
	include 'login_form.php';
}

function validate_form()
{
	$errors = array();
	$db = new PDO('mysql:host=localhost;dbname=mysite_db','root');
	$q = $db->prepare('select password from users where login=?');
	$q->execute(array($_POST['login']));
	$row = $q->fetch();
	if(isset($row['password']))
	{
		if($row['password'] == $_POST['password'])
			return $errors;
	}
	else echo 'not exists';
	$errors[] = 'Wrong login or password';
	return $errors;
}

?>