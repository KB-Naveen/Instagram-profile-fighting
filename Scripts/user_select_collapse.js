function user_select(tag){
    var num_tag = tag.parentElement.parentElement
    var tag_id = num_tag.getAttribute("id");
    var n = tag_id.charAt(tag_id.length-1)
    var username = tag.getAttribute('data-value')
    var input = document.getElementById('user'+n);
    var btn = document.getElementById('btn'+n);

    input.value = username;
    btn.click();
}

window.addEventListener('mouseup', function(event){
    var tag1_1 = document.getElementById('search_result_block1');
    var tag1_2 = document.getElementById('user1');

    var tag2_1 = document.getElementById('search_result_block2');
    var tag2_2 = document.getElementById('user2');
    
    if(tag1_1){
        if(event.target != tag1_2){
            tag1_1.style.display = 'none';
        }
    }

    if(tag2_1){
        if(event.target != tag2_2){
            tag2_1.style.display = 'none';
        }
    }
});