async function match_make(tag) {
    var username = [document.getElementById('player_info1').getAttribute('data-value'),document.getElementById('player_info2').getAttribute('data-value')]
    var player_score_container = document.createElement('div')
    formatObj = new Intl.NumberFormat('en-US')
    var input_container = document.getElementById("input_container")
    var load_anime = document.createElement('img')
    load_anime.setAttribute('src','/Instagram-profile-fighting/images/load_anime.svg')
    var load_anime_div = document.createElement('div')
    load_anime_div.appendChild(load_anime)
    input_container.innerHTML = load_anime_div.innerHTML
    var t_score = []

    for(var i=0;i<2;i++){
        var s_url = "https://www.instagram.com/"+username[i]+"/?__a=1"
        var result
        await fetch(s_url).then(response => response.json()).then(data => result=data);

        var player_div_tag = document.createElement('div')
        var username_tag = document.createElement('p')
        var img_tag = document.createElement('img')
        img_tag.setAttribute('class','profile_pic')
        var posts_count = document.createElement('p')
        posts_count.style.textAlign = 'left'
        var follow_count = document.createElement('p')
        follow_count.style.textAlign = 'left'
        var followed_by_count = document.createElement('p')
        followed_by_count.style.textAlign = 'left'
        var total_score = document.createElement('p')
        total_score.style.textAlign = 'left'

        username_tag.innerHTML = result.graphql.user.username
        img_tag.setAttribute('src',result.graphql.user.profile_pic_url_hd)
        posts_count.innerHTML = 'Number of posts : ' + formatObj.format(result.graphql.user.edge_owner_to_timeline_media.count)
        follow_count.innerHTML = 'Following : ' + formatObj.format(result.graphql.user.edge_follow.count)
        followed_by_count.innerHTML = 'Followers : ' + formatObj.format(result.graphql.user.edge_followed_by.count)
        t_score[i] = (result.graphql.user.edge_owner_to_timeline_media.count+result.graphql.user.edge_follow.count+result.graphql.user.edge_followed_by.count)
        total_score.innerHTML = 'Total Score : ' + formatObj.format(t_score[i])

        player_div_tag.appendChild(username_tag)
        player_div_tag.appendChild(img_tag)
        player_div_tag.appendChild(posts_count)
        player_div_tag.appendChild(follow_count)
        player_div_tag.appendChild(followed_by_count)
        player_div_tag.appendChild(total_score)
        player_div_tag.setAttribute('id' , 'player'+(i+1))

        player_score_container.appendChild(player_div_tag)
    }
    input_container.innerHTML = player_score_container.innerHTML
    input_container.style.marginBottom = 0

    var badge = document.createElement('img')
    badge.setAttribute('src','D:/Git/Instagram-profile-fighting/images/badge.png')
    badge.style.width = "200px"

    if(t_score[0]>t_score[1]){
        document.getElementById('player1').appendChild(badge)
    }
    else{
        document.getElementById('player2').appendChild(badge)
    }

    tag.innerHTML = "Download this Fight"
}