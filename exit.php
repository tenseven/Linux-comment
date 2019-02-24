<?php
header('Content-Type:application/json');
$connect=mysqli_connect('localhost','root','123456','assignment2');
session_start();
$usn=$_SESSION['username'];
$usn=htmlspecialchars($usn);
mysqli_query($connect,"DELETE FROM user WHERE name='$usn'");
mysqli_query($connect,"DELETE FROM comments WHERE name='$usn'");
session_unset();
session_destroy();
$_SESSION = array();
mysqli_close($connect);