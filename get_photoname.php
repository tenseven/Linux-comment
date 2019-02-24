<?php
session_start();
$username=$_SESSION['username'];
$username=htmlspecialchars($username);
$path = "/home/wwwroot/default/Linux_comment/store_photo/";
$server_name = $path.$username.".jpg";
if(file_exists($server_name)){
    $give=[
        'username'=>$username
    ];
    echo json_encode($give);
}else{
    $give=[
        'username'=>"pig"
    ];
    echo json_encode($give);
}
