let NB_IMAGE = 9;
let randomName;

function parler(message) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "fr-FR";
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function generateRandomName() {
    randomName = $($(".container-jeu td").get(Math.floor(Math.random() * NB_IMAGE - 1))).data("name");
    parler("Cherche maintenant " + randomName);
    $(".fruitname").html(randomName);
}

$(".container-decouverte td").click(function (){
    parler($(this).data("name"));
});

$(".container-jeu td").click(function (){
    if($(this).data("name") === randomName) {
        parler("Bravo le veau !");
        generateRandomName();
    } else {
        parler("T'es nul !");
    }
});

$( document ).ready(function() {
    generateRandomName();
});

