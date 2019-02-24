function change_words(user_id,x){
    
    var total_tr=document.getElementById("total_"+user_id);
    total_tr.innerHTML='<tr>'+'<td>'+(x+1)+"."+'</td>'+'<td>'+'<input id="input">'+'</td>'+'<td>'+'<button id="confirm_submit">'+"提交修改"+'</button>'+'</td>'+'<td>'+'<button id="cancle">'+"取消修改"+'</button>'+'</td>'+'</tr>';
    document.getElementById("confirm_submit").onclick=function(){change_submit(user_id)}
    document.getElementById("cancle").onclick=function(){cancle_submit()}
    }
function change_submit(user__id){
    var changed_words=document.getElementById("input").value;
    var words_export={
       "new_comment":changed_words,
       "id":user__id,
    }
   var new_words=new XMLHttpRequest();
   new_words.open("POST", "change_words.php", true);
   new_words.setRequestHeader('Content-type', "application/json");
   var new_encode_words=JSON.stringify(words_export);
   new_words.onreadystatechange=function(){
       if(new_words.readyState==XMLHttpRequest.DONE&&new_words.status==200){
           var get_result=JSON.parse(this.responseText);
           var errcode=get_result.errcode;
           var errmsg=get_result.errmsg;
           alert(errmsg); 
       }
   }
   new_words.send(new_encode_words);
   location.reload("http://182.254.161.178/Linux_comment/board.html");


}
function cancle_submit(){
      location.reload("http://182.254.161.178/Linux_comment/board.html");
}
function delete_words(iid){
    var delete_w=new XMLHttpRequest();
    delete_w.open("POST", "delete.php", true);
    delete_w.setRequestHeader('Content-type', "application/json");
    var iid_export={
        "id":iid,
    }
    var encode_id=JSON.stringify(iid_export);
    delete_w.onreadystatechange=function(){
        if(delete_w.readyState==XMLHttpRequest.DONE&&delete_w.status==200){
        var get_del_result=JSON.parse(this.responseText);
        var get_message=get_del_result.errmsg;
        alert(get_message);
        }
    }
    delete_w.send(encode_id);
    location.reload("http://182.254.161.178/Linux_comment/board.html");
}