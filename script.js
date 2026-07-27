// Loading screen
setTimeout(() => {

    document.getElementById("loading").classList.remove("active");

    document.getElementById("welcome").classList.add("active");

}, 2500);


// Change screens
function nextScreen(screenId) {

    const current = document.querySelector(".screen.active");

    if (current) {
        current.classList.remove("active");
    }

    document.getElementById(screenId).classList.add("active");

}



// Floating hearts

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";


    document.getElementById("hearts").appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },6000);

}


setInterval(createHeart,500);




// Relationship Counter

const startDate = new Date("2025-04-13T00:00:00");

function updateCounter(){

    const now = new Date();


    let difference = now - startDate;


    let seconds = Math.floor(difference / 1000);

    let minutes = Math.floor(seconds / 60);

    let hours = Math.floor(minutes / 60);

    let days = Math.floor(hours / 24);



    let years = Math.floor(days / 365);

    days = days % 365;


    let months = Math.floor(days / 30);

    days = days % 30;


    hours = hours % 24;

    minutes = minutes % 60;

    seconds = seconds % 60;



    document.getElementById("years").innerHTML = years;

    document.getElementById("months").innerHTML = months;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}


setInterval(updateCounter,1000);

updateCounter();





// Final choice messages

function showChoice(choice){


    const message =
    document.getElementById("choiceMessage");



    if(choice === "yes"){

        message.innerHTML =
        `
        ❤️ Thank you for giving us a chance.

        <br><br>

        I promise to keep proving my love
        through my actions, not only words.
        `;

    }


    else {


        message.innerHTML =
        `
        ❤️ I understand.

        <br><br>

        Take the time you need.

        I will always respect your feelings
        and be grateful for our memories.
        `;

    }


}
