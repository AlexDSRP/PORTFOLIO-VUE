<script setup>
import Footer from "../components/Footer.vue";
import emailjs from "emailjs-com";
import { ref } from "vue";

let form = ref(null);
const sendEmail = (e) => {
    e.preventDefault();
    emailjs
        .sendForm(
            "service_mydg9tw",
            "template_4s77vxg",
            form.value,
            "_FaClAH0XCFHJDBEW"
        )
        .then(
            (result) => {
                console.log("SUCCESS!", result.text);
                form.value.reset();
            },
            (error) => {
                console.log("FAILED...", error.text);
            }
        );
};
</script>
<template>
    <div id="body">
        <div class="footer">
            <Footer />
        </div>
        <div class="formulaire">
            <form ref="form" @submit.prevent="sendEmail">
                <div class="prenom-nom">
                    <label for="Prenom">
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Prenom"
                            class="input"
                            id="prenom"
                        />
                    </label>
                    <label for="Nom">
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Nom"
                            class="input"
                            id="nom"
                        />
                    </label>
                </div>
                <label for="email">
                    <input
                        type="email"
                        name="email"
                        placeholder="Adresse mail"
                        class="input"
                        id="email"
                    />
                </label>
                <label for="Message">
                    <textarea name="message" id="message"> </textarea>
                </label>
                <input type="submit" value="Envoyer" class="envoyer" />
            </form>
        </div>
    </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#body {
    background: linear-gradient(
            180deg,
            rgba(0, 17, 105, 0) 15.1%,
            rgba(0, 17, 105, 0.9) 70%
        ),
        url(../assets/background_desktop.jpg);
    padding-top: 40px;
    position: relative;
    background-size: cover;
    padding-bottom: 225px;
    max-height: 100%;
}
.formulaire {
    margin-top: 140px;
    animation: flicker-in-1 3s linear 3.5s both;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
input {
    color: #001169;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
}
label {
    color: white;
}
.input {
    background: #001169;
    color: white;
    box-shadow: 0px 0px 15px #3466ff;
    border-radius: 15px;
    border: none;
    width: 30rem;
    height: 5rem;
}
#prenom {
    margin-right: 100px;
    padding-left: 15px;
}
#nom {
    padding-left: 15px;
}
#email {
    margin-top: 30px;
    width: 71.5rem;
    padding-left: 15px;
}
#message {
    background: #001169;
    box-shadow: 0px 0px 30px #3466ff;
    border-radius: 20px;
    border: none;
    width: 70rem;
    height: 22.3rem;
    margin-top: 30px;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding: 15px;
}
.envoyer {
    background: #a0ff9a;
    box-shadow: 0px 0px 30px #a0ff9a;
    border-radius: 20px;
    border: none;
    margin-top: 80px;
    width: 14rem;
    height: 5rem;
    cursor: pointer;
}
.envoyer:hover {
    background: #c4ffc0;
    box-shadow: 0px 0px 40px #a0ff9a;
    animation: vibrate-2 0.3s linear infinite both;
}

@keyframes vibrate-2 {
    0% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
    20% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
    }
    40% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
    }
    60% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
    }
    80% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
    }
    100% {
        -webkit-transform: translate(0);
        transform: translate(0);
    }
}

@keyframes flicker-in-1 {
    0% {
        opacity: 0;
    }
    10% {
        opacity: 0;
    }
    10.1% {
        opacity: 1;
    }
    10.2% {
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    20.1% {
        opacity: 1;
    }
    20.6% {
        opacity: 0;
    }
    30% {
        opacity: 0;
    }
    30.1% {
        opacity: 1;
    }
    30.5% {
        opacity: 1;
    }
    30.6% {
        opacity: 0;
    }
    45% {
        opacity: 0;
    }
    45.1% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    55% {
        opacity: 1;
    }
    55.1% {
        opacity: 0;
    }
    57% {
        opacity: 0;
    }
    57.1% {
        opacity: 1;
    }
    60% {
        opacity: 1;
    }
    60.1% {
        opacity: 0;
    }
    65% {
        opacity: 0;
    }
    65.1% {
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    75.1% {
        opacity: 0;
    }
    77% {
        opacity: 0;
    }
    77.1% {
        opacity: 1;
    }
    85% {
        opacity: 1;
    }
    85.1% {
        opacity: 0;
    }
    86% {
        opacity: 0;
    }
    86.1% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
</style>
