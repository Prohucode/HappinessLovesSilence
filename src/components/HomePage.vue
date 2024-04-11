<template>
    <div class="home">
        <div class="promo">
            <video autoplay muted loop>
                <source src="@/assets/menu.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="box">
            <div class="block">
                <div class="menu">
                    <img src="@/assets/logo.svg" width="300px" />
                    <div class="button" @click="newGame()">Новая игра</div>
                    <div class="button" @click="url('Scene')">Продолжить</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    mounted() {},

    unmounted() {},

    methods: {
        url(name) {
            this.$router.push({
                name,
            });
        },

        newGame() {
            this.$store.commit("setScene", "scene_1");
            this.url("Scene");
        },
    },
};
</script>

<style scoped>
.home {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.promo {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.promo video {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.box {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
}

.block {
    display: flex;
    flex: 1 1 300px;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    position: relative;
    gap: 20px;
    padding-bottom: 100px;
}

.menu img {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    color: rgb(224, 224, 224);
    /* border-bottom: 1px solid #2c2c2cf3; */
    background-color: #2c2c2cf3;
    /* border-top: 1px solid white; */
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    user-select: none;
}

.button:hover {
    background-color: #2c2c2cc5;
    color: white;
}
</style>
