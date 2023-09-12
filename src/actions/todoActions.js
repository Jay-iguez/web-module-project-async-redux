export const TODO_ACTIONS = {
    TEST : "TEST"
}

export const testAction = () => {
    return {type: TODO_ACTIONS.TEST}
}

export default {
    TODO_ACTIONS, testAction
}