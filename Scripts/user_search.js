let result;
async function search(tag){
    var tag_id = tag.getAttribute("id");
    var n = tag_id.charAt(tag_id.length-1)
    var s_user = tag.value
    var s_url = "https://www.instagram.com/web/search/topsearch/?context=user&query="+s_user

    var result
    await fetch(s_url).then(response => response.json()).then(data => result=data);

    var divtag = document.createElement('div')
    var users = result.users;

    if(users.length == 0){
        var p_tag = document.createElement('p')
        p_tag.innerHTML = 'User Not Found'
        divtag.appendChild(ptag)
    }
    else{
        for(var user in users){
            var a_tag = document.createElement('a')
            a_tag.onclick = 'user_select(this)'
            a_tag.value = users[user].user.username
            var img_tag = document.createElement('img')
            img_tag.src = users[user].user.profile_pic_url
            var p_div_tag = document.createElement('div')
            var p1 = document.createElement('p')
            var p2 = document.createElement('p')
            p1.innerHTML = users[user].user.username
            p2.innerHTML = users[user].user.full_name
            p1.className = 'username'
            p2.className = 'full_name'


            p_div_tag.appendChild(p1)
            p_div_tag.appendChild(p2)
            a_tag.appendChild(img_tag)
            a_tag.appendChild(p_div_tag)
            divtag.appendChild(a_tag)
            
        }
    }
    document.getElementById('search_result_block'+n).innerHTML = divtag.innerHTML

};