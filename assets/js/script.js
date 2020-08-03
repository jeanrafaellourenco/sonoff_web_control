function lamp_on() {    
    fetch('https://maker.ifttt.com/trigger/{event}/with/key/{Coloque sua chave de api aqui}', {mode:'no-cors'})
}

function lamp_off() {    
    fetch('https://maker.ifttt.com/trigger/{event}/with/key/{Coloque sua chave de api aqui}', {mode:'no-cors'})
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("On")) {
        image.src = "images/lightbulb_Off.ico";
        onclick = lamp_off();
    } else {
        image.src = "images/lightbulb_On.ico";
        onclick = lamp_on();
    }
}