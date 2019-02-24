
var show_first_page=new XMLHttpRequest();
show_first_page.open("POST","first_page.php",true);
show_first_page.setRequestHeader('Content-type', "application/json");
show_first_page.onreadystatechange=function(){
    if(show_first_page.readyState==XMLHttpRequest.DONE && show_first_page.status==200){
        var get_first_page=JSON.parse(this.responseText);
        var all_array=get_first_page.all_array;
        var username=get_first_page.user;
        var total_page_num=get_first_page.total_page_num;
        var fir_length=get_first_page.first_length;
        document.getElementById("welcome").innerText="欢迎："+username+"!";
        document.getElementById("prepare").innerText="第1页,共有"+total_page_num+"页";
        if(fir_length>=5){
            if(total_page_num<=4){
                for(z=0;z<total_page_num;z++){
                    var page_num=document.getElementById("box3");
                    var show_page=document.createElement('h');
                    show_page.innerHTML='<li style="list-style:none;display:inline;margin-left:5%;color:white;" onclick=page_change('+(z+1)+')>'+'<span>'+(z+1)+'</span>'+'</li>';;
                    page_num.append(show_page);
                }
            }else{
                for(z=0;z<=2;z++){
                    var page_num=document.getElementById("box3");
                    var show_page=document.createElement('h');
                    show_page.innerHTML='<li style="list-style:none;display:inline;margin-left:5%;color:white;" onclick=page_change('+(z+1)+')>'+'<span>'+(z+1)+'</span>'+'</li>';
                    page_num.append(show_page);
                }
                show_page.innerHTML='<li style="list-style:none;display:inline;margin-left:5%;color:white;">'+".........."+'&nbsp&nbsp&nbsp'+'<input id="leap" style="width:19px;">'+'<button id="leap_submit" onclick="submit_leap()">'+"跳转"+'</button>'+'</li>';
                page_num.append(show_page);
                for(w=(total_page_num-3);w<total_page_num;w++){
                    var show_page=document.createElement('h');
                    show_page.innerHTML='<li style="list-style:none;display:inline;margin-left:5%;color:white;" onclick=page_change('+(w+1)+')>'+'<span>'+(w+1)+'</span>'+'</li>';
                    page_num.append(show_page);
                }
            }
            for(x=0;x<=5;x++){
                var mess_user=all_array[x].name;
                var mess_total_id=all_array[x].total_id;
                var mess_time=all_array[x].time;
                var mess_comments=all_array[x].comments;
                var path="store_photo/"+mess_user+".jpg";
                var A=document.createElement('div');
                A.id="main"+mess_total_id;
                if(username==mess_user){
                    A.innerHTML='<table  border="1">'+'<tr>'+'<th>'+"序号"+'</th>'+'<th>'+'</th>'+'<th>'+"留言"+'</th>'+'<th>'+"发布者"+'</th>'+'<th>'+
                    "留言时间"+'</th>'+'<th>'+"修改"+'</th>'+'<th>'+"删除"+'</th>'+'<th>'+"回复"+'</th>'+'</tr>'+'<tr>'+'<td>'+(x+1)+"."+'</td>'+'<td>'+'<img src='+'"'+path+'"'+'style="width:90px;height:90px;border-radius:50%;"/>'
                    +'</td>'+'<td style="text-align:left;word-wrap:break-word;word-break:break-all;whitespce:nomarl;max-width:90%;">'+
                    '<span id="comment'+mess_total_id+'"'+'>'+mess_comments+'</span>'+'</td>'+'<td style="text-align:center">'+mess_user+'</td>'+'<td>'+'&nbsp'+'&nbsp'+mess_time+'</td>'+'<td style="text-align:left;">'+'<button onclick=change_words('+mess_total_id+','+x+')'+'>'+"修改"+'</button>'+'</td>'+
                    '<td style="text-align:left;">'+'<button onclick=delete_words('+mess_total_id+')'+'>'+"删除"+'</button>'+'</td>'+'<td style="text-align:left;">'+'<button onclick=sub_reply('+mess_total_id+')'+'>'+"回复"+'</button>'
                    +'</td>'+'</table>'+'</p>'+'<br/>';
                    var get_showplace=document.getElementById("box2");
                    get_showplace.append(A);
                    check_reply(mess_total_id,mess_user);
            
                }else{
                    A.innerHTML='<p id="total_'+mess_total_id+'"'+'>'+'<table  border="1">'+'<tr>'+'<th>'+"序号"+'</th>'+'<th>'+'</th>'+'<th>'+"留言"+'</th>'+'<th>'+"发布者"+'</th>'+'<th>'+
                    "留言时间"+'</th>'+'<th>'+"回复"+'</th>'+'</tr>'+'<tr>'+'<td>'+(x+1)+"."+'</td>'+'<td>'+'<img src='+'"'+path+'"'+'style="width:90px;height:90px;border-radius:50%;"/>'
                    +'</td>'+'<td style="text-align:left;word-wrap:break-word;word-break:break-all;whitespce:nomarl;max-width:90%;">'+
                    '<span id="comment'+mess_total_id+'"'+'>'+mess_comments+'</span>'+'</td>'+'<td style="text-align:left;">'+mess_user+'</td>'+'<td>'+'&nbsp'+'&nbsp'+mess_time+'</td>'+'<td style="text-align:left;">'+'<button onclick=sub_reply('+mess_total_id+')'+'>'+"回复"+'</button>'
                    +'</td>'+'</table>'+'</p>'+'<br/>';
                    var get_showplace=document.getElementById("box2");
                    get_showplace.append(A);
                    check_reply(mess_total_id,mess_user);
                }
            }
        }else{
            for(x=0;x<=fir_length;x++){
                var mess_user=all_array[x].name;
                var mess_total_id=all_array[x].total_id;
                var mess_time=all_array[x].time;
                var mess_comments=all_array[x].comments;
                var path="store_photo/"+mess_user+".jpg";
                var A=document.createElement('p');
                A.id="main"+mess_total_id;
                if(username==mess_user){
                    A.innerHTML='<p id="total_'+mess_total_id+'"'+'>'+'<table  border="1">'+'<tr>'+'<th>'+"序号"+'</th>'+'<th>'+'</th>'+'<th>'+"留言"+'</th>'+'<th>'+"发布者"+'</th>'+'<th>'+
                    "留言时间"+'</th>'+'<th>'+"修改"+'</th>'+'<th>'+"删除"+'</th>'+'<th>'+"回复"+'</th>'+'</tr>'+'<tr>'+'<td>'+(x+1)+"."+'</td>'+'<td>'+'<img src='+'"'+path+'"'+'style="width:90px;height:90px;border-radius:50%;"/>'
                    +'</td>'+'<td style="text-align:left;word-wrap:break-word;word-break:break-all;whitespce:nomarl;max-width:90%;">'+
                    '<span id="comment'+mess_total_id+'"'+'>'+mess_comments+'</span>'+'</td>'+'<td style="text-align:left">'+mess_user+'</td>'+'<td>'+'&nbsp'+'&nbsp'+mess_time+'</td>'+'<td style="text-align:left;">'+'<button onclick=change_words('+mess_total_id+','+x+')'+'>'+"修改"+'</button>'+'</td>'+
                    '<td style="text-align:left;">'+'<button onclick=delete_words('+mess_total_id+')'+'>'+"删除"+'</button>'+'</td>'+'<td style="text-align:left;">'+'<button onclick=sub_reply('+mess_total_id+')'+'>'+"回复"+'</button>'
                    +'</td>'+'</table>'+'</p>'+'<br/>';
                    var get_showplace=document.getElementById("box2");
                    get_showplace.append(A);
                    check_reply(mess_total_id,mess_user);
                }else{
                    A.innerHTML='<p id="total_'+mess_total_id+'"'+'>'+'<table  border="1">'+'<tr>'+'<th>'+"序号"+'</th>'+'<th>'+'</th>'+'<th>'+"留言"+'</th>'+'<th>'+"发布者"+'</th>'+'<th>'+
                    "留言时间"+'</th>'+'<th>'+"回复"+'</th>'+'</tr>'+'<tr>'+'<td>'+(x+1)+"."+'</td>'+'<td>'+'<img src='+'"'+path+'"'+'style="width:90px;height:90px;border-radius:50%;"/>'
                    +'</td>'+'<td style="text-align:left;word-wrap:break-word;word-break:break-all;whitespce:nomarl;max-width:90%;">'+'<span id="comment'+mess_total_id+'"'+'>'+
                    mess_comments+'</span>'+'</td>'+'<td style="text-align:center">'+mess_user+'</td>'+'<td style="text-align:left;">'+'&nbsp'+'&nbsp'+mess_time+'</td>'+'<td style="text-align:left;">'+'<button onclick=sub_reply('+mess_total_id+')'+'>'+"回复"+'</button>'
                    +'</td>'+'</table>'+'</p>'+'<br/>';
                    var get_showplace=document.getElementById("box2");
                    get_showplace.append(A);
                    check_reply(mess_total_id,mess_user);
                }
            }
        }
    }
}
show_first_page.send();

