
function save_words(){
    var store_words=new XMLHttpRequest();
    store_words.open("POST", "save_words.php", true);
    store_words.setRequestHeader('Content-type', "application/json");
    var get_words=document.getElementById('box1').value;
    var json_words={
        "words":get_words
    };
    var encode_words=JSON.stringify(json_words);
    store_words.onreadystatechange=function(){
        if(store_words.readyState==XMLHttpRequest.DONE&&store_words.status==200){
            var get_result=JSON.parse(this.responseText);
            var get_errcode=get_result.errcode;
            if(get_errcode!=0){
                alert("出现敏感词shit。请重新写过");
            }
        }
    }
    store_words.send(encode_words);
    location.reload('http://182.254.161.178/Linux_comment/board.html');
}