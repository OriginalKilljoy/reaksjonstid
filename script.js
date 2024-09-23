//MODEL
let selectedLampIndex;
let litLight;
let counter;

//VIEW

updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div></div>
    <div class="grid">
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>

    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>

    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>

    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>

    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    <div class="light"></div>
    </div>
    
    `
}

//CONTROLLER

function randomLight(){
    selectedLampIndex = Math.floor(Math.random() * 25);
   
}

function lightUp(){
    for(i = 0; i < selectedLampIndex; i++){
     
    }
}
console.log(randomLight)