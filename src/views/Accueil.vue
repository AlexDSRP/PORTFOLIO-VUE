<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Description from "../components/Description.vue";
import Competences from "../components/Competences.vue";
import Projets from "../components/Projets.vue";

const competences = [
    { image: "/LogoJS.webp", value: 50 },
    { image: "/logoVue3.webp", value: 45 },
    { image: "/logoGithub.webp", value: 75 },
];
const competences2 = [
    { image: "/logoCss.webp", value: 75 },
    { image: "/logoHtml.webp", value: 85 },
];

const projets1 = [
    {
        image: "/groupomania.webp",
        name: "GROUPOMANIA",
    },
    {
        image: "/piiquante.webp",
        name: "PIIQUANTE",
    },
];
const projets2 = [
    {
        image: "/kanap.webp",
        name: "KANAP",
    },
    {
        image: "/panthere.webp",
        name: "LA PANTHERE",
    },
];
const projets3 = [
    {
        image: "/ohmyfood.webp",
        name: "OHMYFOOD",
    },
    {
        image: "/booki.webp",
        name: "BOOKI",
    },
];
</script>

<template>
    <body>
        <div class="header-descript">
            <Header />
            <Description />
        </div>
        <img
            class="elliptical"
            src="../assets/elliptical.webp"
            alt="image de fond"
        />
        <img class="squigly" src="../assets/squigly.webp" alt="image de fond" />
        <img
            class="etoiles1"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img
            class="etoiles2"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img
            class="etoiles3"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img
            class="etoiles4"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img
            class="etoiles5"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img
            class="etoiles6"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img
            class="etoiles7"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img
            class="etoiles8"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img
            class="etoiles9"
            src="../assets/etoiles.webp"
            alt="image de fond"
        />
        <img class="fusee" src="../assets/fusée.webp" alt="image de fond" />
        <img class="planete" src="../assets/planet.webp" alt="image de fond" />
        <img
            class="squigly2"
            src="../assets/squigly.webp"
            alt="image de fond"
        />
        <img
            class="gilet"
            src="../assets/giletSauvetage.webp"
            alt="image de fond"
        />
        <div class="competences">
            <h2 id="competences">COMPETENCES</h2>
            <div class="logoCompet">
                <div class="javascript" v-for="competence in competences">
                    <Competences
                        :image="competence.image"
                        :value="competence.value"
                    />
                </div>
            </div>
            <div class="logoCompet2">
                <div class="HtmlCss" v-for="competence in competences2">
                    <Competences
                        :image="competence.image"
                        :value="competence.value"
                    />
                </div>
            </div>
        </div>
        <section id="container2">
            <div class="NodeMongo">
                <div class="img-barre">
                    <img
                        class="img"
                        src="../assets/nodeMongo.webp"
                        alt="logo mongodb et nodejs"
                    />
                    <div class="barre-text">
                        <div class="barreCompet"></div>
                        <div class="valeur">30%</div>
                    </div>
                </div>
                <div class="textInfo">
                    <div class="title">
                        Node<span class="vert">Js</span> et Mongo<span
                            class="vert"
                            >Db</span
                        >
                    </div>
                    <div class="text">
                        Concernant mon backend, j’ai pu utilisé NodeJs
                        (Express)<br />
                        à partir de mon projet 5 et pour ma BDD, MongoDb m’a
                        <br />
                        suivi tout au long des projets 5, 6 et 7.
                    </div>
                </div>
            </div>
        </section>
        <div class="projets" id="projets">
            <h2>PROJETS</h2>
            <div class="blocprojets1">
                <div class="bloc-pr" v-for="projet in projets1">
                    <Projets :image="projet.image" :name="projet.name" />
                </div>
            </div>
            <div class="blocprojets2">
                <div class="bloc-pr2" v-for="projet in projets2">
                    <Projets :image="projet.image" :name="projet.name" />
                </div>
            </div>
            <div class="blocprojets3">
                <div class="bloc-pr2" v-for="projet in projets3">
                    <Projets :image="projet.image" :name="projet.name" />
                </div>
            </div>
        </div>
        <div class="footer">
            <Footer />
        </div>
    </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee&family=Montserrat:wght@400;700&display=swap");

body {
    position: relative;
    padding-bottom: 30px;
}
.header-descript {
    position: relative;
    background: url(../assets/background_desktop.jpg), no-repeat;
    width: 100%;
    background-position: 0% 50%;
    padding-top: 40px;
    padding-bottom: 200px;
    background-size: cover;
}
h2 {
    position: relative;
    align-items: center;
    text-align: center;
    color: white;
    font-family: "Bungee";
    font-style: normal;
    font-size: 48px;
    max-width: 1280px;
    margin: auto;
    z-index: 2;
}
.elliptical {
    position: absolute;
    width: 330px;
    height: 290px;
    left: 7%;
    top: 650px;
    transform: rotate(108.95deg);
}
.squigly {
    position: absolute;
    width: 342px;
    height: 340px;
    left: 88%;
    top: 650px;
    transform: rotate(68.9deg);
}
.etoiles1 {
    position: absolute;
    width: 30px;
    height: 38px;
    left: 956px;
    top: 820px;
    filter: blur(8px);
}
.etoiles2 {
    position: absolute;
    width: 20px;
    height: 38px;
    left: 830px;
    top: 920px;
    filter: blur(8px);
}
.etoiles3 {
    position: absolute;
    width: 45px;
    height: 49px;
    left: 1230px;
    top: 1110px;
    filter: blur(8px);
}
.etoiles4 {
    position: absolute;
    width: 15px;
    height: 27px;
    left: 315px;
    top: 1130px;
    filter: blur(6px);
}
.etoiles5 {
    position: absolute;
    width: 55px;
    height: 49px;
    left: 750px;
    top: 2350px;
    filter: blur(10px);
}
.etoiles6 {
    position: absolute;
    width: 38px;
    height: 41px;
    left: 177px;
    top: 2800px;
    filter: blur(10px);
}
.etoiles7 {
    position: absolute;
    width: 38px;
    height: 41px;
    left: 912px;
    top: 3461px;
    filter: blur(8px);
}
.etoiles8 {
    position: absolute;
    width: 35px;
    height: 33px;
    left: 700px;
    top: 3200px;
    filter: blur(10px);
}
.etoiles9 {
    position: absolute;
    width: 48px;
    height: 51px;
    left: 1300px;
    top: 2600px;
    filter: blur(10px);
}
.fusee {
    position: absolute;
    width: 666px;
    height: 479px;
    left: 2%;
    top: 39%;
    filter: blur(7px);
    transform: rotate(-4.49deg);
}
.planete {
    position: absolute;
    width: 340px;
    height: 320px;
    left: 72%;
    top: 41%;
    filter: blur(2px);
    z-index: 1;
}
.gilet {
    position: absolute;
    width: 115px;
    height: 120px;
    left: 50px;
    top: 3380px;
    filter: blur(2.5px);
    transform: matrix(-0.87, -0.5, -0.5, 0.87, 0, 0);
}
.squigly2 {
    position: absolute;
    width: 352px;
    height: 350px;
    left: -100px;
    top: 2450px;
    filter: blur(2.5px);
    transform: rotate(68.9deg);
}
.competences {
    margin-top: 130px;
}
.logoCompet {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-top: 100px !important;
    max-width: 1280px;
    margin: auto;
}
.logoCompet2 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    margin-top: 50px !important;
    max-width: 1280px;
    margin: auto;
}
#container2 {
    margin-top: 100px;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 150px;
}
.NodeMongo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: rgba(0, 17, 105, 0.3);
    opacity: 0.9;
    box-shadow: 0px 0px 30px #3466ff;
    border-radius: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    max-width: 1280px;
    margin: auto;
}
.barre-text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
}
.textInfo {
    font-family: "Montserrat";
    color: white;
    margin-left: 5px;
}
.title {
    font-weight: 700;
    font-size: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
}
.vert {
    color: rgba(160, 255, 154, 0.9);
    margin-right: 8px;
    margin-left: 1px;
}
.text {
    font-size: 20px;
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
}
.projets {
    margin-bottom: 140px;
}

.blocprojets1 {
    display: flex;
    justify-content: space-between;
    margin-top: 130px !important;
    max-width: 1280px;
    margin: auto;
}
.blocprojets2 {
    display: flex;
    justify-content: space-around;
    margin-top: 120px !important;
    max-width: 1280px;
    margin: auto;
}
.blocprojets3 {
    display: flex;
    justify-content: space-between;
    margin-top: 120px !important;
    max-width: 1280px;
    margin: auto;
}

@media all and (max-width: 1190px) {
    .elliptical,
    .squigly,
    .planete,
    .squigly2,
    .etoiles1,
    .etoiles2,
    .etoiles3,
    .etoiles4,
    .etoiles5,
    .etoiles6,
    .etoiles7,
    .etoiles8,
    .etoiles9,
    .fusee,
    .gilet {
        display: none;
    }
    .header-descript {
        background-size: cover;
    }
    .logoCompet2 {
        margin: 40px 120px;
    }
    .NodeMongo {
        flex-direction: column;
        display: flex;
        margin: auto;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    #container2 {
        align-items: center;
        text-align: center;
        margin-bottom: 100px !important;
    }
    .textInfo {
        text-align: center;
        justify-content: center;
        margin-left: 5px;
        margin-right: 5px;
    }
    .title {
        font-size: 30px;
        display: flex;
        text-align: center;
        margin-left: 77px;
        margin-top: 10px;
    }
    .text {
        font-size: 16px;
        text-overflow: clip;
    }
    .blocprojets1 {
        display: flex;
        flex-direction: column;
        margin-bottom: none;
        width: 60%;
    }
    .bloc-pr,
    .bloc-pr2,
    .bloc-pr3 {
        margin-bottom: 100px;
    }
    .blocprojets2,
    .blocprojets3 {
        display: flex;
        flex-direction: column;
        margin-top: 0px !important;
        margin-top: 100px;
    }
    .projets {
        margin-bottom: 70px !important;
    }
}
</style>
