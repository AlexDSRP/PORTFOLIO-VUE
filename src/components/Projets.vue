<script setup>
defineProps(["image", "name"]);
</script>
<template>
    <section class="container1">
        <div class="projet">
            <img class="image" :src="image" alt="image du projet" />
            <h4>{{ name }}</h4>
            <div class="cliquez">Cliquez</div>
        </div>
    </section>
</template>
<style>
.projet {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgba(13, 46, 145, 0.7);
    opacity: 0.9;
    box-shadow: 0px 0px 30px #3466ff;
    border-radius: 30px;
}
.image {
    width: 330px;
    height: 280px;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
    margin: 10px 10px 0px 10px;
}
h4 {
    color: white;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
}
ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    text-align: center;
}
.lg {
    white-space: normal;
}
li {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    background: rgba(108, 96, 255, 0.9);
    border-radius: 5px;
    margin-bottom: 20px;
    border: 1px solid red;
}
.lg-1 {
    margin-left: 20px;
}
.cliquez {
    position: absolute;
    background: #a0ff9a;
    box-shadow: 0px 0px 5px #a0ff9a;
    bottom: -30px;
    border-radius: 40px;
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #0d2e91;
    padding: 10px 15px 10px 15px;
    cursor: pointer;
}
.cliquez:hover {
    background: #c4ffc0;
    box-shadow: 0px 0px 20px #a0ff9a;
    animation: vibrate-2 0.3s linear infinite both;
}
@media all and (max-width: 1190px) {
    .image {
        width: 97%;
        height: 250px;
    }
}

@media (min-width: 1280px) {
    .image {
        width: 97%;
        height: 350px;
    }
    h4 {
        margin-top: 70px;
    }

    .container1 {
        width: 500px;
    }

    .projet {
        height: 550px;
    }
    .cliquez {
        font-size: 30px;
    }
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
</style>
