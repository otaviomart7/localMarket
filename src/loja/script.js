let produtos 

window.onload = function(){
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)
    var dataEntrada = new Date(user.dataEntrada)
}