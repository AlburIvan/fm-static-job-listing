const mutations = {
    filterBy(state, filter) {
        const index = state.filters.indexOf(filter);

        if (index != -1) return;

        state.filters.push(filter);
    },
    removeFilter(state, filter) {
        const index = state.filters.indexOf(filter);

        state.filters.splice(index, 1);
    },
    removeAllFilters(state) {
        state.filters = [];
    },
};

export default mutations;
