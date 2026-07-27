// ======================================================
// PAGES
// ======================================================

const pages = document.querySelectorAll(".page");

function nextPage(id){

    pages.forEach(page=>page.classList.remove("active"));

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



// ======================================================
// LOADING
// ======================================================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        nextPage("welcome");

    },2500);

});



// ======================================================
// RELATIONSHIP COUNTER
// ======================================================

const startDate = new Date("2025-04-13T00:00:00");

function updateCounter(){

    const now = new Date();

    let diff = now-startDate;

    let seconds = Math.floor(diff/1000);

    let minutes = Math.floor(seconds/60);

    let hours = Math.floor(minutes/60);

    let days = Math.floor(hours/24);

    const years = Math.floor(days/365);

    days -= years*365;

    const months = Math.floor(days/30);

    days -= months*30;

    hours%=24;

    minutes%=60;

    seconds%=60;

    document.getElementById("years").textContent=years;
    document.getElementById("months").textContent=months;
    document.getElementById("days").textContent=days;
    document.getElementById("hours").textContent=hours;
    document.getElementById("minutes").textContent=minutes;
    document.getElementById("seconds").textContent=seconds;

}

updateCounter();

setInterval(updateCounter,1000);



// ======================================================
// FLOATING HEARTS
// ======================================================

const heartContainer=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>0.5?"❤":"♡";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(14+Math.random()*20)+"px";

    heart.style.animationDuration=(6+Math.random()*4)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}
// ======================================================
// COMPLIMENT WALL
// ======================================================

const complimentArea = document.getElementById("complimentArea");

const compliments = [

"Beautiful ❤️",
"Pretty 🌸",
"Cute 🥹",
"Hot 😮‍💨",
"My Penguin 🐧",
"Ice Cream Addict 🍦",
"Your Smile",
"Your Laugh",
"Your Eyes",
"Your Voice",
"Your Kind Heart",
"Your Little Attitude 😂",
"The Way You Care",
"My Favourite Notification ❤️",
"My Safe Place",
"The Way You Say My Name",
"Your Good Morning Texts",
"The Way You Get Excited",
"The Way You Laugh At Me",
"My Happiness",
"My Peace",
"My Favourite Human",
"My Home ❤️",
"Everything About You"

];

let complimentIndex = 0;

function addCompliment(){

    if(complimentIndex >= compliments.length) return;

    const bubble = document.createElement("div");

    bubble.className = "compliment";

    bubble.innerHTML = compliments[complimentIndex];

    bubble.style.transform =
        `rotate(${Math.random()*12-6}deg)`;

    complimentArea.appendChild(bubble);

    complimentIndex++;

}

setInterval(addCompliment,900);



// ======================================================
// SLAP MUSTAFA
// ======================================================

const face = document.getElementById("mustafaFace");
const slapCounter = document.getElementById("slapCounter");
const slapMessage = document.getElementById("slapMessage");
const continueButton = document.getElementById("continueButton");

let slaps = 0;

const slapMessages = [

"Ouch 😭",

"Fair enough.",

"I deserved that.",

"That one actually hurt.",

"Okay okay 😂",

"Please have mercy.",

"Critical Hit!",

"Combo!",

"My fault.",

"Still angry? 😅",

"You slap surprisingly hard.",

"I promise I'm listening.",

"I won't dodge it.",

"That was personal 😭",

"My ancestors felt that.",

"I'm running out of cheeks.",

"I regret everything.",

"Can we negotiate? 😂",

"Emotional Damage!",

"Another one??"

];

function randomMessage(){

    return slapMessages[
        Math.floor(Math.random()*slapMessages.length)
    ];

}

function floatingText(text){

    const div=document.createElement("div");

    div.innerHTML=text;

    div.style.position="fixed";

    const rect=face.getBoundingClientRect();

    div.style.left=(rect.left+rect.width/2)+"px";

    div.style.top=(rect.top+20)+"px";

    div.style.transform="translateX(-50%)";

    div.style.fontWeight="700";

    div.style.color="#D76C82";

    div.style.pointerEvents="none";

    div.style.zIndex="9999";

    div.style.transition="all .8s ease";

    document.body.appendChild(div);

    setTimeout(()=>{

        div.style.top=(rect.top-40)+"px";

        div.style.opacity="0";

    },30);

    setTimeout(()=>{

        div.remove();

    },900);

}

function shake(){

    document.body.animate([

        {transform:"translateX(0px)"},
        {transform:"translateX(-6px)"},
        {transform:"translateX(6px)"},
        {transform:"translateX(-5px)"},
        {transform:"translateX(5px)"},
        {transform:"translateX(0px)"}

    ],{

        duration:180

    });

}

face.addEventListener("click",()=>{

    slaps++;

    slapCounter.innerHTML = slaps + " / 10 Slaps";

    const msg = randomMessage();

    slapMessage.innerHTML = msg;

    floatingText(msg);

    shake();

    face.style.transform =
        `scale(.84) rotate(${Math.random()*18-9}deg)`;

    setTimeout(()=>{

        face.style.transform="scale(1) rotate(0deg)";

    },100);

    if(slaps===10){

        continueButton.style.display="block";

        slapMessage.innerHTML =
        "❤️ Hope you're feeling a little better now. You can still keep slapping me 😂";

    }

    if(slaps===25){

        slapMessage.innerHTML =
        "🏆 Achievement Unlocked: Professional Mustafa Slapper";

    }

    if(slaps===50){

        slapMessage.innerHTML =
        "😂 Are you trying to unlock a secret ending?";

    }

    if(slaps===75){

        slapMessage.innerHTML =
        "😭 My face has officially left the chat.";

    }

    if(slaps===100){

        slapMessage.innerHTML =
        "🏆 Congratulations. You've defeated Mustafa.";

    }

});

setInterval(createHeart,700);
