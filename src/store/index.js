import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

// Assemble modules and export the store
const store = new Vuex.Store({
    state: {
        filters: [],
    },
    mutations: mutations,
});

export default store;
