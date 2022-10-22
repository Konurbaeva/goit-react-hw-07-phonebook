import { nanoid } from "nanoid";


export const addNewContact =(name, number) => {
    return {
        type: "contacts/add",
        payload:{
            id: nanoid(),
            name,
            number
        }
    }
}


export const deleteContact = contactId=> {
    return {
        type: "contacts/delete",
        payload:contactId
    }
}

// export const filterContact =(name, number) => {
//     return {
//         type: "contacts/filter",
//         payload:{
//           //  id: nanoid(),
//             name,
//             number
//         }
//     }
// }

// export const addNewContact = payload => {
//     return {
//         type: "contacts/add",
//         payload:{
//             id: nanoid(),
//             ...payload
//         }
//     }
// }

// export const deleteContact = payload=> {
//     return {
//         type: "contacts/delete",
//         payload
//     }
// }

// export const deleteContact = payload=> {
//     return {
//         type: "contacts/delete",
//         payload
//     }
// }