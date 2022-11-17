<script setup>
defineProps(["image", "value"]);
</script>
<template>
    <section id="container1">
        <div class="javascript">
            <img class="logo1" :src="image" alt="logo javascript" />
            <div class="lvl">
                <div class="barreCompet"></div>
                <div class="valeur">{{ value + "%" }}</div>
            </div>
        </div>
    </section>
</template>
<style>
#container1 {
    max-width: 1280px;
    margin: auto;
}
.javascript {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo1 {
    width: 162px;
    height: 151px;
}
.logo1:hover {
    -webkit-animation: rotate-vert-center 0.5s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        both;
}
.barreCompet {
    width: 90px;
    height: 4px;
    background: #a0ff9a;
    box-shadow: 0px 0px 20px #a0ff9a;
    border-radius: 10px;
}
.lvl {
    display: flex;
    align-items: center;
}
.valeur {
    color: #a0ff9a;
    margin-left: 10px;
    font-size: 14px;
}
.img {
    width: 162px;
    height: 151px;
}
@media all and (max-width: 790px) {
    .logo1 {
        width: 122px;
        height: 111px;
    }
    #container1 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 30px;
    }
}
@-webkit-keyframes rotate-vert-center {
    0% {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
    }
    100% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
}
@keyframes rotate-vert-center {
    0% {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
    }
    100% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
}
</style>
