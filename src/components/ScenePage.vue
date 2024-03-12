<template>
    <div class="scene">
        <div class="photo">
            <img :src="this.structure[this.active_scene].headband" />
        </div>

        <div class="top">{{ this.$store.state.active_scene }}</div>
        <div class="down">
            <div class="box">
                <div class="panel">
                    <div class="name">
                        <b>{{ this.structure[this.active_scene].authore }} :</b>
                    </div>

                    <div class="dialogue"><span v-html="this.text_line"></span></div>

                    <div class="actions">
                        <div
                            class="button"
                            v-for="(item, index) in this.structure[this.active_scene].actions"
                            :key="index"
                            @click="setScene(item.next_scene)">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import episodes from "@/episodes";

export default {
    data() {
        return {
            active_scene: "",
            text_line: "",
            timerId: false,
            structure: {},
        };
    },

    beforeMount() {
        this.structure = episodes;
        this.active_scene = this.$store.state.active_scene;
    },

    mounted() {
        this.setTextline();
    },

    unmounted() {
        if (this.timerId != false) clearTimeout(this.timerId);
    },

    methods: {
        setScene(scene) {
            this.active_scene = scene;
            if (this.timerId != false) clearTimeout(this.timerId);
            this.$store.commit("setScene", scene);
            this.setTextline();
        },

        setTextline() {
            this.text_line = "";
            var i = 0;
            var text = this.structure[this.active_scene].dialogue;

            const nextchar = () => {
                this.text_line += text[i];
                i += 1;

                if (this.text_line.length < text.length) {
                    let timeout = Math.round(Math.random() * 30);
                    this.timerId = setTimeout(nextchar, timeout);
                }
            };

            nextchar();
        },
    },
};
</script>

<style scoped>
.scene {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: #2c2c2cf3;
}

.photo {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.photo img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    animation: show 5s 1;
}

@keyframes show {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.top {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    z-index: 1;
    padding: 30px;
    /* background-color: rgba(0, 255, 255, 0.616); */
}

.down {
    position: absolute;
    left: 0%;
    bottom: 0%;
    width: 100%;
    z-index: 1;
}

.box {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    max-width: 1200px;
    padding: 30px;
}

.panel {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;
    border-radius: 10px;
    background-color: #2c2c2cf3;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    animation: show 3s 1;
}

.name {
    display: flex;
    color: rgb(167, 167, 167);
    font-size: 18px;
    width: 100%;
}

.dialogue {
    display: flex;
    color: aliceblue;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 1px;
}

.actions {
    display: flex;
    flex-direction: row;
    gap: 15px;
    /* padding-top: 10px; */
}

.button {
    padding: 15px 20px;
    color: rgb(167, 167, 167);
    border-bottom: 1px solid white;
    /* border-top: 1px solid white; */
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    user-select: none;
}

.button:hover {
    background-color: rgba(255, 255, 255, 0.26);
    color: white;
}
</style>
