<?php
header('Content-Type:application/json');
$connect=mysqli_connect('localhost','root','123456','assignment2');
session_start();
$username=$_SESSION["username"];
$total_page_num=$_SESSION["total_page_num"];
$username=htmlspecialchars($username);
$select_comments=mysqli_query($connect,"SELECT * FROM comments");
$all_rows=$select_comments->num_rows;
$all_array=array();
$get_page_num=file_get_contents('php://input');
$decode_page_num=json_decode($get_page_num,true);
extract($decode_page_num);
while($value = mysqli_fetch_object($select_comments)) {
    array_push($all_array,$value);
}
$length=count($all_array);
$end_page=ceil($length/5);
$show_array=array();
if($length%5==0){
    $init_num=($page_num-1)*5;
    $end_num=5*$page_num;
    for($x=$init_num;$x<$end_num;$x++){
        array_push($show_array,$all_array[$x]);
    }
    $reply_len=count($show_array);
}else{
    $overabundance=$length%5;
    if($page_num==$end_page){
        $init_num=($page_num-1)*5;
        $end_num=($init_num+$overabundance);
        for($y=$init_num;$y<$end_num;$y++){
            array_push($show_array,$all_array[$y]);
        }
    }else{
        $init_num=($page_num-1)*5;
        $end_num=5*$page_num;
        for($x=$init_num;$x<$end_num;$x++){
            array_push($show_array,$all_array[$x]);
        }
    }
    $reply_len=count($show_array);
}


$all_info=[
    'all_array'=>$show_array,
    'all_rows'=>$all_rows,
    'user'=>$username,
    'total_page_num'=>$total_page_num,
    'reply_length'=>$reply_len
];
echo json_encode($all_info);
mysqli_close($connect);



