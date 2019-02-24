function check_reply(mess_id,mess_user){
    var check_get_reply=new XMLHttpRequest();
    check_get_reply.open("POST","get_reply.php",true);
    check_get_reply.setRequestHeader('content-type','application/json');
    var send_mess_total_id={
        "mess_total_id":mess_id
    };
    var en_mess_total_id=JSON.stringify(send_mess_total_id);
    check_get_reply.onreadystatechange=function (){
        if(check_get_reply.readyState==XMLHttpRequest.DONE && check_get_reply.status==200){
            var get_reply=JSON.parse(this.responseText);
            var reply_len=get_reply.reply_length;
            var reply_array=get_reply.array_reply;
            var username=get_reply.user;
            var B=document.getElementById("main"+mess_id);
            var D=document.createElement('div');
            D.innerHTML='<h style="font-size=15px;">'+"此留言有"+reply_len+"条回复"+'</h>';
            B.style.borderStyle='solid';
            B.style.paddingBottom='30px';
            B.append(D);
            if(reply_len!=0){
                console.log("user"+username);
                console.log("mess_user"+mess_user);
                for(y=0;y<reply_len;y++){
                    var path="/Linux_comment/store_photo/"+reply_array[y].name+".jpg"
                    var reply_id=reply_array[y].id;
                    var C=document.createElement('div');
                    if(username===mess_user){
                        C.innerHTML='<h id="main'+reply_id+'"'+'>'+'<table style="border-style:dotted;font-size:15px;color:pink;" border="1">'+'<tr>'
                        +'<th>'+'<img src='+'"'+path+'"'+'style="width:70px;height:70px;border-radius:50%;"/>'
                        +'</th>'+'<th>'+"回复者："+reply_array[y].name+'</th>'+'&nbsp'+'&nbsp'+'<th style="text-align:left;word-wrap:break-word;word-break:break-all;whitespce:nomarl;max-width:90%;">'
                        +"回复:"+reply_array[y].message+'</th>'+'<th style="text-align:left;">'+"回复时间："+reply_array[y].time+'</th>'+'<th>'+'<button style="text-align:left;" onclick=sub_reply('+reply_id+')'+'>'+"回复"+'</button>'+'</th>'+'<th>'+
                        '<button style="text-align:left;" onclick=delete_words('+reply_id+')'+'>'+"删除"+'</button>'+'</th>'+'</tr>'+'</table>'+'</h>';
                        B.append(C);
                    }else{
                        C.innerHTML='<h id="main'+reply_id+'"'+'>'+'<table style="border-style:dotted;font-size:15px;color:pink;" border="1">'+'<tr>'
                        +'<th>'+'<img src='+'"'+path+'"'+'style="width:70px;height:70px;border-radius:50%;"/>'
                        +'</th>'+'<th style="text-align:left;">'+"回复者："+reply_array[y].name+'</th>'+'&nbsp'+'&nbsp'+'<th style="text-align:left;word-wrap:break-word;word-break:break-all;whitespce:nomarl;max-width:90%;">'
                        +"回复:"+reply_array[y].message+'</th>'+'<th style="text-align:left;">'+"回复时间："+reply_array[y].time+'</th>'+'<th>'+'<button style="text-align:left;" onclick=sub_reply('+reply_id+')'+'>'+"回复"+'</button>'+'</th>'+'</tr>'+'</table>'+'</h>';
                        B.append(C);
                    }
                    re_to_re(reply_id,reply_array[y].name);
                }
            }
        }
    }
    check_get_reply.send(en_mess_total_id);
}
function re_to_re(mess_id,mess_user){
    var check_get_reply=new XMLHttpRequest();
    check_get_reply.open("POST","get_reply.php",true);
    check_get_reply.setRequestHeader('content-type','application/json');
    var send_mess_total_id={
        "mess_total_id":mess_id
    };
    var en_mess_total_id=JSON.stringify(send_mess_total_id);
    check_get_reply.onreadystatechange=function (){
        if(check_get_reply.readyState==XMLHttpRequest.DONE && check_get_reply.status==200){
            var get_reply=JSON.parse(this.responseText);
            var reply_len=get_reply.reply_length;
            var reply_array=get_reply.array_reply;
            var username=get_reply.user;
            var E=document.getElementById("main"+mess_id);
            var F=document.createElement('h');
            if(reply_len!=0){
                F.innerHTML='<h style="font-size=8px;" id="more_"'+mess_id+'>'+"此回复有"+reply_len+"条回复"+"&nbsp&nbsp&nbsp"+'<button id="check_more'+mess_id+'"'+'>'+"展开"+'</button>'+'</h>';
                E.append(F);
                var I=document.createElement('div');
                I.id=('middle'+mess_id);
                I.style.display='none';
                var getRandomColor = function() {
                    return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')';
                }
                I.style.borderColor='blue';
                I.style.backgroundColor=getRandomColor();
                F.append(I);
                for(y=0;y<reply_len;y++){
                    var G=document.createElement('div');
                    G.id=("reply_block"+mess_id);
                    G.style.fontSize="5px";
                    var path="/Linux_comment/store_photo/"+reply_array[y].name+".jpg"
                    var reply__id=reply_array[y].id;
                    console.log("user2:"+username);
                    console.log("mess2:"+mess_user);
                    if(username===mess_user){
                        G.innerHTML='<h id="main'+reply__id+'"'+'>'+'<table style="border-style:dotted;font-size:15px;color:pink;" border="1">'+'<tr>'
                        +'<th>'+'<img src='+'"'+path+'"'+'style="width:40px;height:40px;border-radius:50%;"/>'
                        +'</th>'+'<th style="text-align:left;">'+"回复者："+reply_array[y].name+'</th>'+'&nbsp'+'&nbsp'+'<th style="text-align:left;word-wrap:break-word;word-break:break-all;whitespce:nomarl;max-width:90%;">'
                        +"回复:"+reply_array[y].message+'</th>'+'<th>'+"回复时间："+reply_array[y].time+'</th>'+'<th>'+'<button style="text-align:left;" onclick=sub_reply('+reply__id+')'+'>'+"回复"+'</button>'+'</th>'+'<th>'+'<button style="text-align:left;" onclick=delete_words('+reply__id+')'+'>'+
                        "删除"+'</button>'+'</th>'+'</tr>'+'</table>'+'</h>'+'<br/>'+'</br>'+'<br/>';
                        I.append(G);
                    }else{
                        G.innerHTML='<h id="main'+reply__id+'"'+'>'+'<table style="border-style:dotted;font-size:15px;color:pink;" border="1">'+'<tr>'+'<th>'+
                        '<img src='+'"'+path+'"'+'style="width:40px;height:40px;border-radius:50%;"/>'+'</th>'+'<th style="text-align:left;">'+"回复者："+reply_array[y].name+'</th>'+
                        '&nbsp'+'&nbsp'+'<th style="text-align:left;word-wrap:break-word;word-break:break-all;whitespce:nomarl;max-width:90%;">'+"回复:"+
                        reply_array[y].message+'</th>'+'<th style="text-align:left;">'+"回复时间："+reply_array[y].time+'</th>'+'<th style="text-align:left;">'+'<button onclick=sub_reply('+reply__id+')'+'>'+
                        "回复"+'</button>'+'</th>'+'</tr>'+'</table>'+'</h>'+'<br/>'+'</br>'+'<br/>';
                        I.append(G);
                    }
                    re_to_re(reply__id,reply_array[y].name);
                }
                reply_block(mess_id);
            }
        }
    }
    check_get_reply.send(en_mess_total_id);
    
}
function reply_block(mess_id){
    var get_block_reply=document.getElementById("middle"+mess_id);
    var check_more=document.getElementById("check_more"+mess_id);
    check_more.onclick=function after(){
         get_block_reply.style.display='block';
         check_more.innerHTML='收起';
         check_more.onclick=function hid(mess_id){
            get_block_reply.style.display = 'none';
            check_more.innerHTML="展开";
            check_more.onclick=function(){after()};
         }
    }
}