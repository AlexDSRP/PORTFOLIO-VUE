<script setup></script>

<template>
    <div class="footer">
        <div class="title-logo" @click="this.$router.push('/')">
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
                class="logoFooter"
                src="../assets/github-1.webp"
                alt="lien github"
            />
            <img
                class="logoFooter"
                src="../assets/logoLink.webp"
                alt="lien linkedin"
            />
            <img
                class="logoFooter"
                id="discord"
                src="../assets/logoDiscord.webp"
                alt="lien discord"
            />
            <div class="Contact" @click="this.$router.push('contact')">
                CONTACT
            </div>
        </nav>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.footer {
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
    padding-top: 12px;
    padding-bottom: 12px;
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
}
.title-barre {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
#barre {
    position: absolute;
    width: 70px;
    height: 4px;
    background: #a0ff9a;
    box-shadow: 0px 0px 20px #a0ff9a;
    bottom: -15px;
    border-radius: 3px;
}
.logo {
    width: 20px;
    height: 20px;
    margin-left: 3px;
}
.Contact {
    cursor: pointer;
    animation: shake-lr 0.9s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite
        both;
}
.menu {
    display: flex;
    align-items: center;
    margin-right: 5%;
}
.menu > div {
    padding: 0px 20px;
}
.logoFooter {
    width: 39px;
    height: 39px;
}
#discord {
    width: 45px;
    height: 45px;
}
@media all and (max-width: 1190px) {
    .footer {
        margin-left: 60px;
        margin-right: 60px;
    }
}
@-webkit-keyframes shake-lr {
    0%,
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    10% {
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
    }
    20%,
    40%,
    60% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    30%,
    50%,
    70% {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg);
    }
    80% {
        -webkit-transform: rotate(-8deg);
        transform: rotate(-8deg);
    }
    90% {
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
    }
}
@keyframes shake-lr {
    0%,
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    10% {
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
    }
    20%,
    40%,
    60% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    30%,
    50%,
    70% {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg);
    }
    80% {
        -webkit-transform: rotate(-8deg);
        transform: rotate(-8deg);
    }
    90% {
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
    }
}
</style>
