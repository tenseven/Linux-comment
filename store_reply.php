<?php
header('Content-Type:application/json');
session_start();
$username=$_SESSION['username'];
$connect=mysqli_connect('localhost','root','123456','assignment2');
$get_new_words=file_get_contents('php://input');
$decode_words=json_decode($get_new_words,true);
extract($decode_words);
if(preg_match("/\bshit\b/i",$new_comment)){
    $result=[
        'errcode'=>23,
        'errmsg'=>"出现敏感词shit."
    ];
    echo json_encode($result);
}else{
    $new_comments=htmlspecialchars($new_comment);
    $insert_reply=$connect->prepare("INSERT INTO reply VALUES(NULL,0,?,$id,now(),?)");
    $insert_reply->bind_param("ss",$new_comments,$username);
    $insert_reply->execute();
    
    $result=[
        'errcode'=>0,
        'errmsg'=>'回复成功'
    ];
    echo json_encode($result);
}
mysqli_close($connect);