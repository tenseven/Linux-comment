<?php

   session_start();
   $username = $_SESSION['username'];
   $username=htmlspecialchars($username);
   //echo($username);
   $path = "store_photo/";
   $server_name = $path.$username.".jpg";
   //echo($server_name);
  if($_FILES['photo']['error']>0){
      die("出错了".$_FILES['photo']['error']);
  }
   if(($_FILES['photo']['type']=="image/jpg")&&($_FILES['photo']['size']< 204800)){
        if(move_uploaded_file($_FILES['photo']['tmp_name'],$server_name)){
           echo ("上传成功！".$server_name); 
           header("refresh:3;url=http://182.254.161.178/Linux_comment/board.html");
     }
   }else{
      echo("请检查格式（必须为jpg）和大小（小于200kb）"."1111:".$_FILES['photo']['type']." 2222:".$_FILES['photo']['name']);
      header("refresh:5;url=http://182.254.161.178/Linux_comment/board.html");
   }