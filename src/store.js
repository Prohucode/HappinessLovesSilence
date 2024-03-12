import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';


const store = createStore({
    plugins: [createPersistedState()],
    namespaced: true,

    state() {
        return {
            active_scene: "scene_1"
        };
    },

    actions: {

    },

    mutations: {

        setScene(state, new_scene) {
            console.log("setScene")
            state.active_scene = new_scene;
        }
    },

    getters: {

    },
});

export default store;
