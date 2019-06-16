export default class Module {
    initialState = { tasks: [] };
    actions = store => ({});

    constructor(model) {
        this.model = model;
    }

    getPersistedState() {
        return {};
    }
}