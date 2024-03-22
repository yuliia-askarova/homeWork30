import { INCREMENT_COUNT, DECREMENT_COUNT, RESET } from "../Types/types";


export const incrementAction = () => ({
    type: INCREMENT_COUNT
})

export const decrementAction = () => ({
    type: DECREMENT_COUNT
})

export const reset = () => ({
    type: RESET
})