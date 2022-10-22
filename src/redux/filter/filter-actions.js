// export const setFilter = payload => {
//     return {
//         type: "filter/set",
//         payload
//     }
// }

export const filterContact = value => {
    return {
        type: "contacts/filter",
        payload: value
    }
}
