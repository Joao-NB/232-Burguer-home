var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

function prevSlide() {
    cont--;
    if (cont < 1) {
        cont = 3;
    }
    document.getElementById('radio' + cont).checked = true;
}

function nextSlide() {
    proximaImg();
}