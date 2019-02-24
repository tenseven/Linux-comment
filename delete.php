<?php
header('Content-Type:application/json');
$connect=mysqli_connect('localhost','root','123456','assignment2');
$get_id=file_get_contents('php://input');
session_start();
$decode_id=json_decode($get_id,true);
extract($decode_id);
mysqli_query($connect,"DELETE FROM comments WHERE total_id=$id");
mysqli_query($connect,"DELETE FROM reply WHERE id=$id");
mysqli_query($connect,"DELETE FROM reply WHERE to_id=$id");
$message=[
    'errmsg'=>'删除成功'
];
echo json_encode($message);
mysqli_close($connect);