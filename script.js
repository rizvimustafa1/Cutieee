/* ===========================
SLAP MUSTAFA
=========================== */

const slapBtn = document.getElementById("slapButton");
const slapCount = document.getElementById("slapCount");
const slapMessage = document.getElementById("slapMessage");
const mustafaFace = document.getElementById("mustafaFace");

let slaps = 0;

slapBtn.addEventListener("click", () => {

    slaps++;

    slapCount.innerText = slaps + " Slaps";

    mustafaFace.style.transform = "translateX(-18px) rotate(-8deg)";

    setTimeout(() => {
        mustafaFace.style.transform = "translateX(18px) rotate(8deg)";
    }, 70);

    setTimeout(() => {
        mustafaFace.style.transform = "translateX(0)";
    }, 140);

    if(slaps < 5){

        slapMessage.innerText =
        "Okay... maybe I should listen more 😭";

    }

    else if(slaps < 10){

        slapMessage.innerText =
        "I definitely deserved that 😂";

    }

    else if(slaps < 20){

        slapMessage.innerText =
        "Fine... my ego has officially disappeared 💀";

    }

    else if(slaps < 30){

        slapMessage.innerText =
        "Lesson learned. Cutiee is always right ❤️";

    }

    else{

        slapMessage.innerText =
        "Achievement Unlocked: Mustafa has been humbled 😂👑";

    }

});


/* ===========================
LOVE CARDS
=========================== */

document.querySelectorAll(".loveCard").forEach(card=>{

    card.addEventListener("click",()=>{

        card.classList.toggle("flip");

    });

});


/* ===========================
COMPLIMENTS
=========================== */

const compliments=[
    
"Meri Cutieee",  
    
"You're my favourite notification ❤️",

"Your smile makes everything better 😊",

"I could never get bored of talking to you.",

"You look cute even when you're angry 😂",

"You make ordinary days feel special.",

"You're the best thing that's happened to me.",

"I still get excited when I see your name.",

"Thank you for being you ❤️",

"Your laugh is my favourite sound.",

"I honestly won the lottery when I met you.",

"You'll always be my favourite penguin 🐧",

"I don't need perfect days, I just want days with you."

];

const complimentText=document.getElementById("complimentText");
const complimentBtn=document.getElementById("complimentBtn");

complimentBtn.addEventListener("click",()=>{

    const random=Math.floor(Math.random()*compliments.length);

    complimentText.innerText=compliments[random];

});


/* ===========================
DATE
=========================== */

const dates=document.querySelectorAll(".dateChoice");
const dateAnswer=document.getElementById("dateAnswer");

dates.forEach(btn=>{

btn.addEventListener("click",()=>{

dateAnswer.innerHTML=

"Perfect ❤️<br>Looks like 5th September just got even more exciting.";

});

});


/* ===========================
DICE GAME
=========================== */

const rollBtn=document.getElementById("rollDice");
const dice=document.getElementById("dice");
const gift=document.getElementById("giftResult");

const gifts=[

"Ethnic ka Suit",

"🌹 Flowers",

"🐧 Penguin Soft Toy",

"💌 Handwritten Letter",

"🎁 Surprise Gift",

"Me <3"

];

rollBtn.addEventListener("click",()=>{

dice.style.transform="rotate(720deg)";

setTimeout(()=>{

const random=Math.floor(Math.random()*6);

gift.innerText="You won: "+gifts[random];

dice.innerText=random+1;

dice.style.transform="rotate(0deg)";

},600);

});

/* ===========================
FINAL DECISION
=========================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {

    createConfetti();

    const section = document.createElement("section");

    section.id = "happyEnding";

    section.innerHTML = `

        <div class="endingCard">

            <h1>Thank You</h1>

            <p>

                Thank you for giving me another chance.

                I promise this won't just be another promise.

                I'll let my actions prove everything I couldn't put into words.

            </p>

            <h3>Our story continues </h3>

        </div>

    `;

    document.body.insertBefore(section, document.querySelector("footer"));

    section.scrollIntoView({

        behavior: "smooth"

    });

    yesBtn.disabled = true;
    noBtn.disabled = true;

});
noBtn.addEventListener("click", () => {

    const section = document.createElement("section");

    section.id = "sadEnding";

    section.innerHTML = `

        <div class="endingCard">

            <h1>Goodbye Cutiee</h1>

            <p>

                If this is really your decision...

                I'll respect it.

                Just know that I never wanted to hurt you,

                Thank you for every smile,
                every laugh,
                every memory,
                and every moment we shared.

                I genuinely hope life gives you every happiness you deserve.

            </p>

            <h3>

                Goodbye ❤️

            </h3>

        </div>

    `;

    document.body.insertBefore(section, document.querySelector("footer"));

    section.scrollIntoView({

        behavior: "smooth"

    });

    yesBtn.disabled = true;
    noBtn.disabled = true;

});


/* ===========================
FLOATING HEARTS
=========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(8+Math.random()*7)+"s";

document.getElementById("particles").appendChild(heart);

setTimeout(()=>{

heart.remove();

},15000);

}

setInterval(createHeart,500);


/* ===========================
CONFETTI
=========================== */

function createConfetti(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.innerHTML=["❤️","✨","💖","🌸","💕"][Math.floor(Math.random()*5)];

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize=(15+Math.random()*15)+"px";

confetti.style.pointerEvents="none";

confetti.style.transition="4s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=
`translateY(${window.innerHeight+200}px)
rotate(${Math.random()*720}deg)`;

confetti.style.opacity=0;

},50);

setTimeout(()=>{

confetti.remove();

},4500);

}

}


/* ===========================
SCROLL ANIMATION
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});
