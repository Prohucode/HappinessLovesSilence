
let episodes_1 = {

    scene_1: {
        headband: require("../assets/scene/scene 1.png"),
        authore: "Саша",
        dialogue:
            "Это были последние летние деньки перед началом выпусконого учебного года)<br> Внутри у меня были противеоречивые чувства. С одной стороны мне хотелось скорее поступить в университет, я знал чем хочу заниматься. С другой стороны мне было грустно расставаться с этой беззаботной школьной порой...",
        actions: [{ title: "далее", next_scene: "scene_2" }],
    },

    scene_2: {
        headband: require("../assets/scene/scene 2.png"),
        authore: "Саша",
        dialogue:
            "В моем классе стояли одиноко раставленные парты по которым бегали и игрались солнечные зайчики в ожидании встречи со старыми знакомыми.<br> Так и я предвкушал встречи со своими друзьями. Хотя не раз за это лето, мы виделись с ними.",
        actions: [
            { title: "назад", next_scene: "scene_1" },
            { title: "далее", next_scene: "scene_3" },
        ],
    },

    scene_3: {
        headband: require("../assets/scene/scene 3.png"),
        authore: "Саша",
        dialogue:
            "Вообще у меня не так много друзей, но наибольшую роль в моей жизни сыграли следующие люди.<br> И так, мои друзья: Глеб, Данил, Дима, ну и моя собака Брюс, но ее на этой фотографии вы не увидите.",
        actions: [
            { title: "назад", next_scene: "scene_2" },
            { title: "Познакомимся", next_scene: "scene_4" },
        ],
    },

    scene_4: {
        headband: require("../assets/scene/scene 4.png"),
        authore: "Саша",
        dialogue: "Данил ...",
        actions: [
            { title: "назад", next_scene: "scene_3" },
            { title: "далее", next_scene: "scene_5" }],
    },
    scene_5: {
        headband: require("../assets/scene/scene 5.png"),
        authore: "Глеб ...",
        dialogue: "Данил программист ... ",
        actions: [{ title: "назад", next_scene: "scene_4" },
        { title: "далее", next_scene: "scene_6" }],
    },
    scene_6: {
        headband: require("../assets/scene/scene 6.png"),
        authore: "Я(Саша) ...",
        dialogue: "Данил программист ... ",
        actions: [{ title: "назад", next_scene: "scene_5" },
        { title: "далее", next_scene: "scene_7" }],
    },
    scene_7: {
        headband: require("../assets/scene/scene 7.png"),
        authore: "Дима ...",
        dialogue: "Данил программист ... ",
        actions: [{ title: "назад", next_scene: "scene_5" },
        { title: "далее", next_scene: "scene_7" }],
    },
}


export default episodes_1 