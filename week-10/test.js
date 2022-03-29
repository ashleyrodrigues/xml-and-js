var call = function() {
    setTimeout(function() {
        console.log('Set TimeOUT', new Date().toLocaleTimeString());
    }, 5000);
}
setInterval(function(){ 
    let setIntervalfn = new Date().toLocaleTimeString();
    console.log('Set Interval', setIntervalfn);
    call();
}, 3000);