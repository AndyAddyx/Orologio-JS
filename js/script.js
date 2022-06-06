setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')  //cosi ti prendi le ore i minuti ed i secondi attraverso l'attributo html
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock (){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;  //cosi prende il giusto orario attuale dal browser
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;   //abbiamo aggiunto secondsRatio e minutesRatio in modo da far andare le lancette smooth senza scatti da un numero all'altro

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)  //applichiamo la funzione che fa girare le lancette ognuno alla giusta lancetta
    setRotation(hourHand, hoursRatio)

} 

function setRotation(element, rotationRatio) { //funzione che fa girare le lancette
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock(); //fa in modo che al refreshare la pagina il clock sta esattamente nel giusto posto 