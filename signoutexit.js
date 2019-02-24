function signout(){
    var sign_off=new XMLHttpRequest();
    sign_off.open("POST","signout.php",true);
    sign_off.setRequestHeader('Content-type','application/json');
    sign_off.onreadystatechange=function(){
        if(sign_off.readyState==XMLHttpRequest.DONE && sign_off.status==200){
            alert("退出登录成功");
            location.href="http://182.254.161.178/Linux_comment/signlogin.html";
        }
    }
    sign_off.send();
}
function exit(){
    var new_xhr=new XMLHttpRequest();
    new_xhr.open("POST","exit.php",true);
    new_xhr.setRequestHeader('Content-type','application/json');
    new_xhr.onreadystatechange=function(){
        if(new_xhr.readyState==XMLHttpRequest.DONE && new_xhr.status==200 ){
            alert("销毁成功");
            location.href="http://182.254.161.178/Linux_comment/signlogin.html";
        }
    }
    new_xhr.send();
}