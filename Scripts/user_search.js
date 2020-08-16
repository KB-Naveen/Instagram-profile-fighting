document.getElementById("user1").addEventListener('keyup',userSearch(this.value));
document.getElementById("user2").addEventListener('keyup',userSearch(this.value));

function userSearch(userName) {
    alert("You typed "+userName)
}