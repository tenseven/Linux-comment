window.onload=function(){
    var get_username=new XMLHttpRequest();
    get_username.open("POST","get_photoname.php",true);
    get_username.setRequestHeader('Content-type', "application/json");
    get_username.onreadystatechange=function(){
        if(get_username.readyState==XMLHttpRequest.DONE && get_username.status==200){
            var get_user=JSON.parse(this.responseText);
            var username=get_user.username;
            var images_place=document.createElement('h');
            images_place.innerHTML=' <img id="userphoto" src="store_photo/'+username+'.jpg" style="width:100px;height:100px;border-radius:50%;" />'+'<br />'+
            '<form action="uploadphoto.php" method="post" enctype="multipart/form-data">'+
            '<input type="file" name="photo"  id="select_photo"/>'+'<br/>'+'<br/>'+'<input type="submit" id="submit_photo" value="上传新头像"/>'+
            '</form>';
             var get_main_place=document.getElementById("div4");
             get_main_place.append(images_place);
             get_main_place.append(images_place);
             document.getElementById("submit_photo").onclick=function (){uploadphoto()};
        }
    }
    get_username.send()
    function uploadphoto(){
        var get_php=new XMLHttpRequest();
        get_php.open("POST","uploadphoto.php",true);
        get_php.setRequestHeader('Content-type','application/json');
        get_php.onreadystatechange=function(){
            if(get_php.readyState==XMLHttpRequest.DONE && get_php.status==200){

            }
        }
        get_php.send();
    }
}
