import { nanoid } from "nanoid";

export const addContact = payload => {
    return {
        type: "contacts/add",
        payload:{
            id: nanoid(),
            ...payload
        }
    }
}

export const deleteContact = payload=> {
    return {
        type: "contacts/delete",
        payload
    }
}