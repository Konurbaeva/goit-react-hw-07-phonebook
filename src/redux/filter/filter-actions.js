import { SET_FILTER } from "./filter-types";

// export const setFilter = payload => {
//     return {
//         type: SET_FILTER,
//         payload
//     }
// }

export const filterContact = value => {
    return {
        type: SET_FILTER,
        payload: value
    }
}

// export const setFilter = value => {
//     return {
//         type: SET_FILTER,
//         payload: value
//     }
// }