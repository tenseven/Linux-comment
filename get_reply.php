<?php
session_start();
$connect=mysqli_connect('localhost','root','123456','assignment2');
$get_id=file_get_contents('php://input');
$decode_id=json_decode($get_id,true);
extract($decode_id);
$check_id=mysqli_query($connect,"SELECT id FROM reply WHERE to_id='$mess_total_id'");
$reply_length=$check_id->num_rows;
$array_reply=array();
while($value=mysqli_fetch_object($check_id)){
    $id=$value->id;
    $each_message=mysqli_query($connect,"SELECT * FROM reply WHERE id='$id'");
    $each_result_mess=mysqli_fetch_array($each_message);
    array_push($array_reply,$each_result_mess);
}
$username=$_SESSION['username'];
//var_dump($array_reply);
$send_data=[
    'reply_length'=>$reply_length,
    'array_reply'=>$array_reply,
    'user'=>$username
];
echo json_encode($send_data);
