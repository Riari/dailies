export default class Module {
    actions = {}

    constructor(model) {
        this.model = model;
    }

    getInitialState() {
        return {};
    }
}