<?php
header('Content-Type:application/json');
session_start();
$username=$_SESSION['username'];
$username=htmlspecialchars($username);
$connect=mysqli_connect('localhost','root','123456','assignment2');
$get_words=file_get_contents('php://input');
$decode_words=json_decode($get_words,true);
extract($decode_words);
if(preg_match("/\bshit\b/i",$words)){
    $result_match=[
        'errcode'=>111
    ];
    echo json_encode($result_match);
}else{
    $result_match=[
        'errcode'=>0
    ];
    echo json_encode($result_match);
    $new_words=htmlspecialchars($words);
    $addinto_reply=$connect->prepare("INSERT INTO reply VALUES (NULL,'0',?,'0',now(),?)");
    $addinto_reply->bind_param("ss",$new_words,$username);
    $addinto_reply->execute();
    $get_id=$connect->prepare("SELECT MAX(id) FROM reply WHERE name=?");
    $get_id->bind_param("s",$username);
    $get_id->execute();
    $result_get=$get_id->get_result();
    $get_array=mysqli_fetch_array($result_get);
    $result_id=$get_array[0];
    $sql_add=$connect->prepare("INSERT INTO comments VALUES (NULL,?,now(),?,?)");
    $sql_add->bind_param("sss",$new_words,$username,$result_id);
    $sql_add->execute();
}


