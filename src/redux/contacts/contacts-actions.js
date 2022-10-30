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