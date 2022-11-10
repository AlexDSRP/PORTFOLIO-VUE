<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const scrollIntoView = (e) => {
    const competences = document.querySelector("#competences");
    const projets = document.querySelector("#projets");

    if (e.target.getAttribute("class") === "apropos") {
        competences.scrollIntoView({ behavior: "smooth" });
    } else {
        projets.scrollIntoView({ behavior: "smooth" });
    }
};

const windowSize = ref(window.innerWidth);
onMounted(() => {
    window.addEventListener("resize", () => {
        windowSize.value = window.innerWidth;
    });
});
onUnmounted(() => {
    window.removeEventListener("resize", () => {
        windowSize.value = window.innerWidth;
    });
});
const text = windowSize.value;
console.log(windowSize.value);

const isDisplay = ref(false);
const displayNav = () => {
    isDisplay.value = !isDisplay.value;
};
</script>

<template>
    <div class="header">
        <div class="title-logo" @click="this.$router.push('Accueil')">
            <div class="title-barre">
                <h1>PORTFOLIO</h1>
                <div id="barre"></div>
            </div>
            <img
                class="logo"
                src="../assets/ethereum.webp"
                alt="logo du titre"
            />
        </div>
        <nav class="menu">
            <img
                class="navbar"
                src="../assets/apple.webp"
                @click="displayNav"
            />
            <div class="infomenu" v-if="isDisplay || text > 1190">
                <a class="apropos" @click="scrollIntoView">A PROPOS</a>
                <a class="projets" @click="scrollIntoView">PROJETS</a>
                <a class="contact" @click="this.$router.push('contact')">
                    CONTACT
                </a>
            </div>
        </nav>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 18, 112, 0.85);
    border-radius: 50px;
    max-width: 1090px;
    margin: auto;
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
    padding-top: 15px;
    padding-bottom: 15px;
}
.title-logo {
    display: flex;
    align-items: center;
    margin-left: 5%;
    height: 100%;
    cursor: pointer;
}
h1 {
    font-size: 1.5rem;
    animation: flicker-in-1 3s linear both;
}
.title-barre {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
a {
    text-decoration: none;
    color: inherit;
}
#barre {
    position: absolute;
    width: 70px;
    height: 4px;
    background: #a0ff9a;
    box-shadow: 0px 0px 20px #a0ff9a;
    bottom: -15px;
    border-radius: 3px;
    animation: flicker-in-2 4s linear both;
}
.logo {
    width: 20px;
    height: 20px;
    margin-left: 3px;
    animation: flicker-in-1 3s linear both;
}
.menu {
    display: flex;
    align-items: center;
    margin-right: 5%;
}
.navbar {
    display: none;
}
.infomenu > a {
    padding: 0px 30px;
}
.apropos,
.projets,
.contact {
    cursor: pointer;
    animation: flicker-in-1 3s linear both;
}
@media all and (max-width: 1190px) {
    .navbar {
        display: flex;
        width: 40px;
        height: 40px;
        cursor: pointer;
        padding-right: 60%;
    }
    .apropos,
    .projets,
    .contact {
        cursor: pointer;
        animation: none;
    }
    .header {
        padding-top: 10px;
        padding-bottom: 10px;
        display: grid;
        display: flex;
        margin-left: 100px;
        margin-right: 100px;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
    }
}
@keyframes flicker-in-2 {
    0% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    10% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    10.1% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    10.2% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    20% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    20.1% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    20.6% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    30% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    30.1% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    30.5% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    30.6% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    45% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    45.1% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    50% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    55% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    55.1% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    57% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    57.1% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    60% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    60.1% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    65% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    65.1% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    75% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    75.1% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    77% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    77.1% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    85% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    85.1% {
        box-shadow: 0px 0px 0px #b2faad;
    }
    86% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    86.1% {
        box-shadow: 0px 0px 30px #b2faad;
    }
    100% {
        box-shadow: 0px 0px 30px #b2faad;
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
