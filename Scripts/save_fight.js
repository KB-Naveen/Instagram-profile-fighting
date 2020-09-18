function save_fight() {
    var download_div = document.createElement('div')
    var header_temp = document.getElementsByTagName('header')
    var fight_temp = document.getElementById('input_container')
    var header = header_temp.cloneNode(true);
    var fight = fight_temp.cloneNode(true);

    download_div.appendChild(header)
    download_div.appendChild(fight)

    console.log(download_div)
}