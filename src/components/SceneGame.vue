<template>
    <div class="Scene">
        <div class="photo">
            <img :src="this.structure[this.active_scene].headband" />
        </div>

        <div class="box">
            <div class="name">
                <b>{{ this.structure[this.active_scene].authore }}</b>
            </div>

            <div class="dialogue">{{ this.text_line }}</div>

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
</template>

<script>
export default {
    data() {
        return {
            active_scene: "scene_1",
            text_line: "",
            timerId: false,

            structure: {
                scene_1: {
                    headband: require("../assets/scene 1.png"),
                    authore: "Саша",
                    dialogue:
                        "Это были последние летние деньки перед началом выпусконого учебного года. Внутри у меня были противеоречивые чувства. С одной стороны мне хотелось скорее поступить в университет, я знал чем хочу заниматься. С другой стороны мне было грустно расставаться с этой беззаботной школьной порой...",
                    actions: [{ title: "далее", next_scene: "scene_2" }],
                },
                scene_2: {
                    headband: require("../assets/scene 2.png"),
                    authore: "Саша",
                    dialogue:
                        "В моем классе стояли одиноко раставленные парты по которым бегали и игрались солнечные зайчики в ожидании встречи со старыми знакомыми. Так и я предвкушал встречи со своими друзьями. Хотя не раз за это лето, мы виделись с ними.",
                    actions: [{ title: "далее", next_scene: "scene_3" }],
                },
                scene_3: {
                    headband: require("../assets/scene 3.png"),
                    authore: "Саша",
                    dialogue:
                        "Вообще у меня не так много друзей, но наибольшую роль в моей жизни сыграли следующие люди. И так, мои друзья: Глеб, Данил, Дима, ну и моя собака Брюс, но ее на этой фотографии вы не увидите.",
                    actions: [{ title: "Познакомимся", next_scene: "scene_4" }],
                },
                scene_4: {
                    headband: require("../assets/scene 4.png"),
                    authore: "Саша",
                    dialogue: "Данил программист ... ",
                    actions: [{ title: "Познакомимся", next_scene: "scene_4" }],
                },
            },
        };
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
.Scene {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.photo {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.photo img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.box {
    max-width: 1000px;
    min-height: 100px;
    border-radius: 10px;
    margin: 30px;

    /* margin-right: auto;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: 50px; */

    background-color: #2c2c2cf3;
    /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
}

.name {
    display: flex;
    color: aliceblue;
    font-size: 20px;
    width: 100%;
}

.dialogue {
    display: flex;
    color: aliceblue;
    font-size: 18px;
}

.actions {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.button {
    padding: 10px 20px;
    color: rgb(46, 46, 46);
    background-color: rgb(221, 221, 221);
    border-radius: 5px;
}
</style>
