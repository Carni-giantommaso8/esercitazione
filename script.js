const song1 = {
    titolo: 'ciao',
    immagine: 'immagini/ciao.jpg',
    info : "bella"
}

function caricaCanzone() {
    const myElement = document.getElementById("titolo");
    myElement.innerHTML = song1.titolo;

    const myImage = document.getElementById("thumb");
    myImage.src = song1.immagine;

    const myBtn = document.getElementById("info_b");
    myBtn.src = song1.immagine;

    myBtn.addEventListener("click", myFunction);

    function myFunction() {
        if(document.getElementById("info_p").innerHTML == song1.info)
            document.getElementById("info_p").innerHTML = "";
        else
            document.getElementById("info_p").innerHTML = song1.info;
    }
}