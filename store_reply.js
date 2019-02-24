function sub_reply(user_id){
    var total_tr=document.getElementById("main"+user_id);
    total_tr.innerHTML='<tr>'+'<td>'+'<input id="reply_input">'+'</td>'+'<td>'+'<button id="confirm_submit">'+"提交回复"+'</button>'+'</td>'+'<td>'+'<button id="cancle">'+"取消回复"+'</button>'+'</td>'+'</tr>';
    document.getElementById("confirm_submit").onclick=function(){change_submit(user_id)}
    document.getElementById("cancle").onclick=function(){cancle_submit()}
    }
function change_submit(user__id){
    var changed_words=document.getElementById("reply_input").value;
    var words_export={
       "new_comment":changed_words,
       "id":user__id,
    }
   var new_words=new XMLHttpRequest();
   new_words.open("POST", "store_reply.php", true);
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