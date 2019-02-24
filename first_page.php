<?php
header('Content-Type:application/json');
$connect=mysqli_connect('localhost','root','123456','assignment2');
session_start();
$username=$_SESSION["username"];
$username=htmlspecialchars($username);
$select_comments=mysqli_query($connect,"SELECT * FROM comments");
$all_rows=$select_comments->num_rows;
$all_array=array();
function caculate_pagenum($rows){
    if($rows%5==0){
        $total_page_num=$rows/5;
        return $total_page_num;
    }else{
        $total_page_num=ceil($rows/5);
        return $total_page_num;
    }
}
$total_page_num=caculate_pagenum($all_rows);
while($value = mysqli_fetch_object($select_comments)) {
    array_push($all_array,$value);
    //if($value->id==106){var_dump($value->id);}
}
$length=count($all_array);
$show_array=array();
if($length<5){
    for ($x=0;$x<$length;$x++){
        array_push($show_array,$all_array[$x]);
    }
}else{
    for($x=0;$x<5;$x++){
        array_push($show_array,$all_array[$x]);
    }
}

$all_info=[
    'all_array'=>$show_array,
    'all_rows'=>$all_rows,
    'user'=>$username,
    'total_page_num'=>$total_page_num,
    'first_length'=>$length
];
$_SESSION["total_page_num"]=$total_page_num;
echo json_encode($all_info);
mysqli_close($connect);



