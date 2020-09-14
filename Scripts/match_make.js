async function match_make() {
    var player_score_container = document.createElement('div')

    for(var i=1;i<3;i++){
        var username = document.getElementById('player_info'+i).getAttribute('data-value')
        var s_url = "https://www.instagram.com/"+username+"/?__a=1"
        var result
        await fetch(s_url).then(response => response.json()).then(data => result=data);

        var player_div_tag = document.createElement('div')
        var username_tag = document.createElement('p')
        var img_tag = document.createElement('img')
        var posts_count = document.createElement('p')
        var follow_count = document.createElement('p')
        var followed_by_count = document.createElement('p')
        var total_score = document.createElement('p')

        username_tag.innerHTML = result.graphql.user.username
        img_tag.setAttribute('src',result.graphql.user.profile_pic_url)
        posts_count.innerHTML = 'Number of posts : ' + result.graphql.user.edge_owner_to_timeline_media.count
        follow_count.innerHTML = 'Following : ' + result.graphql.user.edge_follow.count
        followed_by_count.innerHTML = 'Followers : ' + result.graphql.user.edge_followed_by.count
        total_score.innerHTML = 'Total Score' + result.graphql.user.edge_owner_to_timeline_media.count+result.graphql.user.edge_follow.count+result.graphql.user.edge_followed_by.count

        player_div_tag.appendChild(username_tag)
        player_div_tag.appendChild(img_tag)
        player_div_tag.appendChild(posts_count)
        player_div_tag.appendChild(follow_count)
        player_div_tag.appendChild(followed_by_count)
        player_div_tag.appendChild(total_score)

        player_score_container.appendChild(player_div_tag)
    }
    document.getElementById("input_container").innerHTML = player_score_container.innerHTML
}