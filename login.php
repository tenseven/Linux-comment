<?php
header('Content-Type: application/json');
$con=mysqli_connect('localhost','root','123456','assignment2');
$get_jdatas=file_get_contents('php://input');
$de_datas=json_decode($get_jdatas,true);
extract($de_datas,EXTR_OVERWRITE);
$username=htmlspecialchars($username);
$select_sql = $con->prepare("SELECT * FROM user WHERE name=?");
$select_sql->bind_param("s",$username);
$select_sql->execute();
$result_arr=$select_sql->get_result();
$userarray=mysqli_fetch_array($result_arr);
function json_data($errcode,$errmsg,$data){
    $json_format=[
        'errcode'=>$errcode,
        'errmsg'=>$errmsg,
        'data'=>$data
    ];
    echo json_encode($json_format);
}
if($userarray!=NULL){
    if($password==$userarray[1]){
        json_data(0,'','succeed!');
        session_start();
        $_SESSION["username"]=$username;
    }
        else{
            json_data(122,'The password is wrong.Please check it again.','');
        }
}else{
    json_data(122,'The user name does not exist','');
}
mysqli_close($con);