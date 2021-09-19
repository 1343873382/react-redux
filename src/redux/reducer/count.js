export default function countReducer(preState = 0, action) {
    let { type, data } = action
    switch (type) {
        case "increment":
            return preState + data
        case "decrement":
            return preState - data
        default:
            return preState

    }

}