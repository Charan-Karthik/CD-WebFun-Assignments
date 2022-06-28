
function signInOut(){
    var btn = document.querySelector(".btn")
    btn.innerText = "Logout"
}

function removeButton(){
    var btn = document.querySelector(".addDef")
    btn.remove()
}

function like(){
    var popup = document.querySelector(".popupContainer")
    popup.style.visibility = "visible"
}