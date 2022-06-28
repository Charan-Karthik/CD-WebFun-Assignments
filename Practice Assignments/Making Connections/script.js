

var requests = document.querySelector("#conReq");
var connections = document.querySelector("#conNum");

function addCon(id){
    var con = document.querySelector(id);
    con.remove();
    requests.innerText--;
    connections.innerText++;
}

function removeCon(id){
    var con = document.querySelector(id);
    con.remove();
    requests.innerText--;
}

function editProfile(){
    var user = document.querySelector("#userName");
    user.innerText = "Alex Morgan";

    var image = document.querySelector("#profilePic")
    image.src = "alexMorgan.jpeg"
}