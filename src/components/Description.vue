<script></script>
<template>
    <div class="description">
        <div class="text1">
            Salut, moi c’est
            <h3>Alexandre Pereira</h3>
        </div>
        <div class="text2">
            Je viens d’obtenir mon diplôme de developpeur web junior et je suis
            à <br />
            la recherche d’une altenance en tant que developpeur d’application
            ios.
            <div class="text3">
                <span id="text4"> Suis moi </span>
                dans les profondeurs pour découvrir mon profil
            </div>
        </div>
    </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

.description {
    margin-left: 13%;
    margin-top: 40px;
}
.text1 {
    color: white;
    font-weight: 600;
    font-size: 28px;
    display: flex;
    align-items: center;
    text-align: center;
}
h3 {
    font-weight: 900;
    font-size: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-bottom: 1px;
    margin-left: 8px;
    text-shadow: 0px 0px 20px #a0ff9a;
    color: #a0ff9a;
    animation: flicker-in-2 4s linear 1s both;
}
.text2 {
    color: white;
    font-weight: lighter;
    font-size: 24px;
    margin-top: 15px;
}
.text3 {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    padding-left: 4%;
}
#text4 {
    color: rgba(160, 255, 154, 0.9);
    text-shadow: 0px 0px 20px #a0ff9a;
    margin-right: 5px;
    font-weight: 600;
    animation: flicker-in-2 4s linear 1s both;
}
@media all and (max-width: 1190px) {
    .description {
        justify-content: center;
        flex-direction: column;
        margin: auto;
        margin-top: 40px;
    }
    .text1 {
        font-size: 22px;
        justify-content: center;
    }
    h3 {
        font-size: 26px;
    }
    .text2 {
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 20px;
    }
    .text3 {
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .text4 {
        text-align: center;
        align-items: center;
        justify-content: center;
    }
}
@keyframes flicker-in-2 {
    0% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    10% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    10.1% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    10.2% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    20% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    20.1% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    20.6% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    30% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    30.1% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    30.5% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    30.6% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    45% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    45.1% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    50% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    55% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    55.1% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    57% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    57.1% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    60% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    60.1% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    65% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    65.1% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    75% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    75.1% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    77% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    77.1% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    85% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    85.1% {
        text-shadow: 0px 0px 0px #b2faad;
    }
    86% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    86.1% {
        text-shadow: 0px 0px 30px #b2faad;
    }
    100% {
        text-shadow: 0px 0px 30px #b2faad;
    }
}
</style>
