async function load_user(tag){
    var tag_id = tag.getAttribute("id");
    var n = tag_id.charAt(tag_id.length-1)
    var username = document.getElementById('user'+n).value
    var s_url = "https://www.instagram.com/"+username+"/?__a=1"

    var result
    await fetch(s_url).then(response => response.json()).then(data => result=data);

    var div_tag = document.createElement('div')
    var player_tag = document.createElement('p')
    player_tag.innerText = 'Player '+n
    player_tag.setAttribute('id','player_info'+n)
    player_tag.setAttribute('data-value', result.graphql.user.username)
    var img_tag = document.createElement('img')
    img_tag.src = result.graphql.user.profile_pic_url_hd
    var p_tag = document.createElement('p')
    p_tag.innerText = result.graphql.user.full_name

    div_tag.appendChild(player_tag)
    div_tag.appendChild(img_tag)
    div_tag.appendChild(p_tag)

    var player_div = document.getElementById('player'+n)
    player_div.className = 'player'
    player_div.innerHTML = div_tag.innerHTML
}

