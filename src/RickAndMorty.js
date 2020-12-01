const rp = require("request-promise");

function obtPersonaje(nombre,status){
    var options ={
        uri:"https://rickandmortyapi.com/api/character/?name="+nombre+"&status="+status,
        json:true
    }
    return rp(options);
}

module.exports = {obtPersonaje};
