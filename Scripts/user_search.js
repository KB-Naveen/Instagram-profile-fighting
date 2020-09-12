let result;
document.getElementById('user1').addEventListener('keyup',async function start(){
    var s_user = this.value
    var s_url = "https://www.instagram.com/web/search/topsearch/?context=user&query="+s_user

    fetch(s_url).then(response => response.json()).then(data => result=data);
});