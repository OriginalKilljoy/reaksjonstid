//MODEL
let startTime;
let finishTime;
let spentMilliseconds;
let spentSeconds = '';

let selectedLampIndex;
let litLight;

let record = Infinity;


//VIEW

updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container">
    <h1>- TEST YOUR REACTION SKILLS -</h1>
    <div class="grid">
    ${createLights()}
    </div>
    <div class="boxes">
    <div class="counter">${spentSeconds}</div>
    <div id="recordDisplay" class="record">Your record</div>
    </div>
    </div>
    `;
    randomLight();
}

function createLights(){
    let html = '';
    for(let i = 0; i < 25; i++) html += /*HTML*/`<div id="light${i}" class="light"></div>`
    return html;
}

function updateRecordDisplay(){
    document.getElementById('recordDisplay').innerHTML = `Your record <br>${record}`
}

//CONTROLLER

function randomLight(){
    selectedLampIndex = Math.floor(Math.random() * 25);
    litLight = document.getElementById(`light${selectedLampIndex}`);

    litLight.classList.add("lightOn");
    litLight.setAttribute("onclick", "countSeconds()")

    startTime = new Date().getTime();
}

function countSeconds(){
    finishTime = new Date().getTime();
    spentMilliseconds = Math.floor(finishTime - startTime);
    spentSeconds = spentMilliseconds / 1000;
    updateView();
    saveRecord();
}

function saveRecord(){
    if(spentSeconds < record){
        record =  spentSeconds;
    }
    updateRecordDisplay();
}


/*
createLight(): lager alle divene slik at alle får en individuell id, et nummer 0 og 25 (opptil 24)
randomLight(): Finner et tilfeldig tall fra 0-24 og tilordner det tallet til den passende id'en til en av divene vi har laget over.
              Den legger så til classen vi har laget for lightOn til den éne diven.
              Vi gir den også en onclick atributt slik at den starter countSeconds() når vi trykker på den.
              Her setter vi også verdien i variabelen startTime slik at vi vet når den "lyste opp".
              Denne funksjonen kjører vi også i updateView så den starter med én gang.
countSeconds(): Denne starter idet vi trykker på den opplyste diven vår. Dvs at finishTime får verdien sin idet knappen trykkes på, og vi får de nåværende millisekundene.
                Siden starTime fikk verdien sin når lyset først ble opplyst, og finishTime fikk den idet den ble trykket på, trekker vi startTime fra finishTime for å se forskjellen.
                Denne forskjellen må vi dele på 1000 for å få sekunder.
                Disse sekundene blir lagret i spentSeconds, som vi viser i counteren vår i viewet.



              
var startTime = new Date().getTime();
var finishTime = new Date().getTime();
var spentMilliseconds = Math.floor(finishTime - startTime);
var spentSeconds = spentMilliseconds / 1000;


*/