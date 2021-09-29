function sayhi(name){
    alert("hi", name)
}
function askpromt (callback){
    let name= prompt ('input your name')
    callback (name)
}
askpromt (sayhi)